{
    let list = new Set(); 
    list.add(5);
    list.add(7);

    console.log('size',list.size); // size 2
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size); // size 5
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list);  // {1  2}   // Set类型的元素是唯一的

    let arr = [1,2,3,1,'2'];
    let list2 = new Set(arr);

    console.log('unique',list2);  // {1 2 3 '2'}   可以去重  但不会把数据转化
}

{
    let arr = ['arr','delete','clear','has'];
    let list = new Set(arr);

    console.log('has',list.has('add')); // true
    console.log('delete',list.delete('add'),list); // true  {'delete','clear','has'}
    list.clear();
    console.log('list',list); // {}
}

{
    let arr = ['arr','delete','clear','has'];
    let list = new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);  //  arr,delete,clear,has
    }
    for(let value of list.values()){
        console.log('value',value);  //  arr,delete,clear,has
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);  //  arr,delete,clear,has(键和值一样)
    }
    list.forEach(function(item){
        console.log(item); // arr,delete,clear,has
    })
}

{
    let weakList = new WeakSet(); // 1.区别是只能放对象，是地址的值的引用，不会有垃圾检测机制  2.没有Set属性  3.不能遍历
    let arg = {};
    weakList.add(arg);
    // weakList.add(2);  // 报错
    console.log('weakList',weakList); // {}
}

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr,456);
    console.log('map',map,map.get(arr)); // {["123"] => 456}  456
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);  // {'a' => 123,'b' => 456}
    console.log('size',map.size); // 2
    console.log('delete',map.delete('a'),map); // {'b' => 456}
    console.log('clear',map.clear(),map); // {}
    // 遍历操作和set一样
}

{
    // weakmap和mapset基本一样
    let weakmap = new WeakMap();

    let o = {};
    weakmap.set(o,123);
    console.log(weakmap.get(o));  // 123
}