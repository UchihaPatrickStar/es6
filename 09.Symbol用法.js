{
    // 声明  Symbol声明的变量永远是独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1===a2); // false
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3===a4); // true
}


{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log('obj',obj);

    for(let [key,value] of Object.entries()){
        console.log('let of',key,value);  // let of abc 345  let of abc 456 Symbol(a,b,c)取不到值
    }

    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);   // 123
    })

    // 这个方法Symbol和非Symbol都可以取到
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
    })
}