$(function() {
    // 轮播图组件
    var Carousel = function(container) {
        this.$container = $(container);
        this.$wrapper = this.$container.find('.carousel-wrapper');
        this.$slides = this.$container.find('.carousel-slide');
        this.$indicators = this.$container.find('.carousel-indicators');
        this.$prev = this.$container.find('.prev');
        this.$next = this.$container.find('.next');
        
        this.currentIndex = 0;
        this.totalSlides = this.$slides.length;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 自动播放间隔时间(ms)
        
        this.init();
    };
    
    Carousel.prototype = {
        init: function() {
            // 创建指示器
            this.createIndicators();
            
            // 绑定事件
            this.bindEvents();
            
            // 启动自动播放
            this.startAutoPlay();
        },
        
        createIndicators: function() {
            for (var i = 0; i < this.totalSlides; i++) {
                var indicator = $('<div class="indicator' + (i === 0 ? ' active' : '') + '"></div>');
                indicator.data('index', i);
                this.$indicators.append(indicator);
            }
            this.$indicatorItems = this.$indicators.find('.indicator');
        },
        
        bindEvents: function() {
            var self = this;
            
            // 上一张/下一张按钮
            this.$prev.on('click', function() {
                self.prevSlide();
                self.resetAutoPlay();
            });
            
            this.$next.on('click', function() {
                self.nextSlide();
                self.resetAutoPlay();
            });
            
            // 指示器点击
            this.$indicatorItems.on('click', function() {
                var index = $(this).data('index');
                self.goToSlide(index);
                self.resetAutoPlay();
            });
            
            // 触摸滑动支持
            this.addSwipeSupport();
        },
        
        // 添加触摸滑动支持
        addSwipeSupport: function() {
            var self = this;
            var startX = 0;
            var moveX = 0;
            var isSwiping = false;
            
            this.$container.on('touchstart', function(e) {
                startX = e.touches[0].clientX;
                isSwiping = true;
                self.stopAutoPlay(); // 触摸时停止自动播放
            });
            
            this.$container.on('touchmove', function(e) {
                if (isSwiping) {
                    moveX = e.touches[0].clientX;
                }
            });
            
            this.$container.on('touchend', function() {
                if (isSwiping) {
                    // 计算滑动距离，超过50px则切换幻灯片
                    if (startX - moveX > 50) {
                        self.nextSlide();
                    } else if (moveX - startX > 50) {
                        self.prevSlide();
                    }
                    isSwiping = false;
                    self.startAutoPlay(); // 滑动结束后重新开始自动播放
                }
            });
        },
        
        // 切换到指定幻灯片
        goToSlide: function(index) {
            if (this.isAnimating || index === this.currentIndex) return;
            
            this.isAnimating = true;
            
            // 更新当前索引
            this.currentIndex = index;
            
            // 移动幻灯片
            var translateValue = -this.currentIndex * 100 + '%';
            this.$wrapper.css('transform', 'translateX(' + translateValue + ')');
            
            // 更新指示器状态
            this.$indicatorItems.removeClass('active')
                                .eq(this.currentIndex).addClass('active');
            
            // 动画结束后重置状态
            setTimeout(function() {
                this.isAnimating = false;
            }.bind(this), 500);
        },
        
        // 下一张
        nextSlide: function() {
            var nextIndex = (this.currentIndex + 1) % this.totalSlides;
            this.goToSlide(nextIndex);
        },
        
        // 上一张
        prevSlide: function() {
            var prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.goToSlide(prevIndex);
        },
        
        // 开始自动播放
        startAutoPlay: function() {
            this.autoPlayInterval = setInterval(function() {
                this.nextSlide();
            }.bind(this), this.autoPlayDelay);
        },
        
        // 停止自动播放
        stopAutoPlay: function() {
            clearInterval(this.autoPlayInterval);
        },
        
        // 重置自动播放计时器
        resetAutoPlay: function() {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    };
    
    // 初始化轮播图
    new Carousel('.carousel');
});
