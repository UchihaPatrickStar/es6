{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);  // [3,4,7,9,11]

    let empty = Array.of();
    console.log('empty',empty);  // []
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);  // 将集合真正的转为数组
    pArr.forEach(function(item){
        console.log(item.contentText);
    });

    // 类似于map
    console.log(Array.from([1,3,5]),function(item){  // [2,6,10]
        return item*2  
    });
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));  // [7, 7, 7]
    console.log('fill,pos',['a','b','c'].fill(7,1,3)); // ["a", 7, 7]  // 从索引为1开始替换的长度为3
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);    // 0  1  2
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);    // 1  c  ks
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);    
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));  // [4,2,3,4,5]   //从索引为0开始，从索引为3的位置，截止为4的位置读取
}

{
    console.log([1,2,3,4,5,6].find(function(item){  // 4  // 只找出第一个符合条件的
        return item > 3;
    }));
    console.log([1,2,3,4,5,6].findIndex(function(item){  // 3  // 只找出第一个符合条件的索引
        return item > 3;
    }));
}

{
    console.log('number',[1,2,NaN].includes(1));  // true
    console.log('number',[1,2,NaN].includes(NaN));  // true
}