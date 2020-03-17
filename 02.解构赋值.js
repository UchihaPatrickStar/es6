{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);
}


{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);
}

{
    let a,b;
    ({a,b} = {a: 1,b: 2})
    console.log(a,b);
}

{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    console.log(a,b,c);  //c: undefined
}

{
    let a = 1;
    let b = 2;
    [a,b] = [b,a]; // 变量交换
    console.log(a,b); // 2 1
}

{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b] = f();
    console.log(a,b); // 1 4
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b] = f();
    console.log(a,b); // 1 [3,4,5]
}


{
    let o = {p:42, q:true};  //对象的解构赋值
    let {p,q} = o;
    console.log(p,q);  //42 true
}

{
    let {a=10, b=5} = {a: 3}; // a的默认值被重新赋值
    console.log(a,b); //3 5
}


{
    let metData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title: esTitle, test: [{title: cnTitle}]} = metData;
    console.log(esTitle, cnTitle); // abc  test
}