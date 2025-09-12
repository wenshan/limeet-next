// 轮播组件封装 - 类名改为carousels
if(Zepto){
  (function($) {
      // 轮播构造函数
      function Carousels(element, options) {
          // 保存容器元素
          this.$container = $(element);
          
          // 默认配置 - 选择器已更新为carousels相关类名
          this.defaults = {
              // 选择器配置 - 与carousels类名对应
              carouselsSelector: '.carousels',
              innerSelector: '.carousels-inner',
              itemSelector: '.carousels-item',
              indicatorSelector: '.carousels-indicators .indicator',
              prevControlSelector: '.carousels-control.control-prev',
              nextControlSelector: '.carousels-control.control-next',
              thumbnailSelector: '.thumbnail',
              monetary_unit:'.unit',
              sale_price:'.value',
              price:'.del-value',
              discount:'.original-value',
              sale_value:'.sale-value',

              
              // 功能配置
              autoPlay: true,
              interval: 3000,
              animationDuration: 300,
              startIndex: 0,
              swipeThreshold: 0.3, // 滑动切换阈值(百分比)
              skuItem: '',
              pageFrom: '',
          };
          
          // 合并配置
          this.options = $.extend({}, this.defaults, options);
          
          // 缓存DOM元素
          this.cacheElements();
          
          // 验证必要元素是否存在
          if (!this.$carousels.length || !this.$inner.length || !this.$items.length) {
              console.error('轮播组件初始化失败：缺少必要的DOM元素');
              return;
          }
          
          // 初始化状态
          this.itemCount = this.$items.length;
          this.currentIndex = Math.min(Math.max(this.options.startIndex, 0), this.itemCount - 1);
          this.isAnimating = false;
          this.timer = null;
          
          // 初始化
          this.init();
      }
      
      // 轮播原型方法
      Carousels.prototype = {
          // 缓存DOM元素 - 变量名也相应调整为carousels
          cacheElements: function() {
              this.$carousels = this.$container.find(this.options.carouselsSelector);
              this.$inner = this.$container.find(this.options.innerSelector);
              this.$items = this.$container.find(this.options.itemSelector);
              this.$indicators = this.$container.find(this.options.indicatorSelector);
              this.$prevBtn = this.$container.find(this.options.prevControlSelector);
              this.$nextBtn = this.$container.find(this.options.nextControlSelector);
              this.$thumbnails = this.$container.find(this.options.thumbnailSelector);

              this.$monetary_unit = this.$container.find(this.options.monetary_unit);
              this.$sale_price = this.$container.find(this.options.sale_price);
              this.$price = this.$container.find(this.options.price);
              this.$discount = this.$container.find(this.options.discount);
              this.$sale_value = this.$container.find(this.options.sale_value);

          },
          
          // 初始化方法
          init: function() {
              // 设置初始位置
              this.goTo(this.currentIndex, true);
              
              // 绑定事件
              this.bindEvents();
              
              // 启动自动播放
              if (this.options.autoPlay) {
                  this.startAutoPlay();
              }
          },
          
          // 绑定事件
          bindEvents: function() {
            const self = this;

            // 指示器点击事件
            if (this.$indicators.length) {
              this.$indicators.parent().on('click', this.options.indicatorSelector, function () {
                const index = parseInt($(this).data('index'));
                self.goTo(index);
              });
            }

            // 缩略图点击事件
            if (this.$thumbnails.length) {
              this.$thumbnails.on('click', function () {
                const index = parseInt($(this).data('index'));
                
                if (self.options.pageFrom === 'detail' && self.options.skuItem && self.options.skuItem[0]) {
                  /*
                  console.log('skuItem:', self.options.skuItem);
                  console.log('startIndex:', self.options.startIndex);
                  console.log('currentIndex:', self.currentIndex);
                  console.log('index:', index);
                  */
                  let initData = self.options.skuItem;
                  let obj = {};
                  $.each(initData, function(index, item) {
                    obj[item.index] = item;
                  });
                  // console.log('obj:', obj);
                  self.$monetary_unit.text(obj[index].monetary_unit);
                  self.$sale_price.text(obj[index].sale_price);
                  self.$price.text(obj[index].price);
                  if (self.$discount && obj[index].discount) {
                    self.$discount.text(obj[index].discount);
                  }
                  if(self.$sale_value && obj[index].saleValue){
                    // console.log('saleValue:',obj[index].saleValue);
                    self.$sale_value.text(`(${obj[index].saleValue})`);
                  }
                }
                self.goTo(index);
              });
            }

            // 上一张按钮
            if (this.$prevBtn.length) {
              this.$prevBtn.on('click', function () {
                self.prev();
              });
            }

            // 下一张按钮
            if (this.$nextBtn.length) {
              this.$nextBtn.on('click', function () {
                self.next();
              });
            }

            // 触摸滑动事件
            let startX = 0;
            let moveX = 0;
            let distanceX = 0;

            this.$carousels.on('touchstart', function (e) {
              self.stopAutoPlay();
              self.isAnimating = true;
              startX = e.touches[0].clientX;
            });

            this.$carousels.on('touchmove', function (e) {
              if (!self.isAnimating) return;

              moveX = e.touches[0].clientX;
              distanceX = moveX - startX;

              // 计算临时位移
              const tempOffset = -self.currentIndex * 100 +
                (distanceX / self.$carousels.width() * 100);
              self.$inner.css({
                'transition': 'none',
                'transform': `translateX(${tempOffset}%)`
              });
            });

            this.$carousels.on('touchend', function () {
              self.isAnimating = false;
              // 判断是否切换
              if (Math.abs(distanceX) > self.$carousels.width() * self.options.swipeThreshold) {
                distanceX > 0 ? self.prev() : self.next();
              } else {
                // 回弹
                self.goTo(self.currentIndex);
              }
              if (self.options.autoPlay) {
                self.startAutoPlay();
              }
            });

            // 鼠标悬停暂停
            this.$carousels.on('mouseenter', function () {
              self.stopAutoPlay();
            });

            this.$carousels.on('mouseleave', function () {
              if (self.options.autoPlay) {
                self.startAutoPlay();
              }
            });
          },
          
          // 切换到指定索引
          goTo: function(index, noAnimation) {
              if (this.isAnimating || 
                  index === this.currentIndex || 
                  index < 0 || 
                  index >= this.itemCount) {
                  return;
              }
              
              this.isAnimating = true;
              this.currentIndex = index;
              
              // 计算位移
              const offset = -this.currentIndex * 100;
              const transition = noAnimation ? 'none' : `transform ${this.options.animationDuration}ms ease`;
              
              this.$inner.css({
                  'transition': transition,
                  'transform': `translateX(${offset}%)`
              });
              
              // 更新激活状态
              this.updateActiveState();
              
              // 动画结束
              if (!noAnimation) {
                  setTimeout(() => {
                      this.isAnimating = false;
                  }, this.options.animationDuration);
              } else {
                  this.isAnimating = false;
              }
          },
          
          // 更新激活状态
          updateActiveState: function() {
              // 更新指示器
              if (this.$indicators.length) {
                  this.$indicators
                      .removeClass('active')
                      .eq(this.currentIndex)
                      .addClass('active');
              }
              
              // 更新缩略图
              if (this.$thumbnails.length) {
                  this.$thumbnails
                      .removeClass('active')
                      .eq(this.currentIndex)
                      .addClass('active');
              }
          },
          
          // 上一张
          prev: function() {
              let index = this.currentIndex - 1;
              if (index < 0) {
                  index = this.itemCount - 1;
              }
              this.goTo(index);
          },
          
          // 下一张
          next: function() {
              let index = this.currentIndex + 1;
              if (index >= this.itemCount) {
                  index = 0;
              }
              this.goTo(index);
          },
          
          // 开始自动播放
          startAutoPlay: function() {
              const self = this;
              this.stopAutoPlay();
              this.timer = setInterval(function() {
                  self.next();
              }, this.options.interval);
          },
          
          // 停止自动播放
          stopAutoPlay: function() {
              if (this.timer) {
                  clearInterval(this.timer);
                  this.timer = null;
              }
          },
          
          // 更新配置
          update: function(newOptions) {
              this.options = $.extend({}, this.options, newOptions);
              
              // 重新缓存元素（如果选择器有变化）
              if (newOptions && (newOptions.carouselsSelector || 
                  newOptions.innerSelector || 
                  newOptions.itemSelector)) {
                  this.cacheElements();
                  this.itemCount = this.$items.length;
              }
              
              // 重启自动播放（如果配置有变化）
              if (newOptions && newOptions.autoPlay !== undefined) {
                  if (newOptions.autoPlay) {
                      this.startAutoPlay();
                  } else {
                      this.stopAutoPlay();
                  }
              }
          }
      };
      
      // 注册为Zepto插件 - 插件名改为Carousels
      $.fn.Carousels = function(options) {
          // 支持链式调用
          return this.each(function() {
              // 避免重复实例化
              if (!$(this).data('carousels')) {
                  $(this).data('carousels', new Carousels(this, options));
              }
          });
      };
      
      // 提供方法调用接口
      $.fn.Carousels.methods = {
          goTo: function($el, index) {
              $el.data('carousels').goTo(index);
          },
          prev: function($el) {
              $el.data('carousels').prev();
          },
          next: function($el) {
              $el.data('carousels').next();
          },
          start: function($el) {
              $el.data('carousels').startAutoPlay();
          },
          stop: function($el) {
              $el.data('carousels').stopAutoPlay();
          },
          update: function($el, options) {
              $el.data('carousels').update(options);
          }
      };
  })(Zepto);
}