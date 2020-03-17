// 数据结构横向对比， 增，删，改，查
// 优先考虑使用map，对数据的唯一性要求比较高时考虑使用set，放弃传统的数组和对象
{
    // map和数组的对比
    let map = new Map();
    let array = [];
    // 增
    map.set('t',1);
    Array.push({t: 1});

    console.info('map-array',map,array);

    // 查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);
    console.info('map-array',map_exist,array_exist);  // 存在则返回true  如果存在则返回该对象

    // 改
    map.set('t',2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('map-array-modify',map,array);

    // 删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

{   
    // set和数组的对比
    let set = new Set();
    let array = [];

    // 增
    set.add({t: 1});
    array.push({t: 1});

    console.info('set-array',set,array);
    // 查
    let set_exist = set.has({t: 1}); // 新增的一个对象，与上面增加的不是同一个  如果要查可以查询上次的地址
    let array_exist = array.find(item => item.t);
    console.info('set-array',set_exist,array_exist);  // 存在则返回false  如果存在则返回该对象

    // 改
    set.forEach(item => item.t ? item.t = 2 : '');
    array_exist.forEach(item => item.t ? item.t = 2 : '');
    console.info('set-array-modify',set,array);

    // 删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index,1);
    console.info('map-array-empty',set,array); // {}  []
}

{
    // map,set,object的对比
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-obj',obj,map,set);

    // 查
    console.info({
        map_exist: map.has('t'),  // true
        set_exist: set.has(item),  // true
        obj_exist: 't' in obj  // true
    })

    // 改
    map.set('t',2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-modify',obj,map,set);

    // 删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-delete',obj,map,set);
}