// eslint-disable-next-line import/no-anonymous-default-export
export default (list = {}) => {
  // https://juejin.cn/post/7043324432537878536
  // https://www.xiabingbao.com/post/comments/comments-list-to-tree-r7zsnb.html
  const newList = list || []; // 避免影响外层的数组
  const map = new Map();
  const result = [];
  const rowsList = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  newList && newList.forEach((item) => {
    const temp = Object.assign({}, item);
    map.set(item.key, temp);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  newList && newList.forEach((item) => {
    if (item.active && item.father_key && map.get(item.father_key)) {
      const temp = Object.assign({}, map.get(item.father_key), { active: true });
      map.set(item.father_key, temp);
    }
  });

  map.forEach((value) => {
    rowsList.push(Object.assign({}, value));
    if (value.father_key) {
      let parentItem = map.get(value.father_key);
      if (parentItem) {
        if (!parentItem.children) {
          parentItem['children'] = [];
        }
        parentItem.children.push(value);
      }
    } else {
      result.push(value);
    }
  });
  return { rowsTree: result, rowsList };
};
