function test(){
    for(let i = 1;i < 3;i++){
        console.log(i); // let有块级作用域  只在当前作用域中生效
    }
    console.log(i);

    let a = 1;  // 不可重新赋值  否则报错
    // let a = 2;
}

test();


function last(){
    const PI = 3.1415926;  // 定义常量 ，不可修改， 声明时就必须赋值
    PI = 8;
    // console.log(PI);


    const k = {
        a: 1
    }
    k.b = 3;  // 对象是引用类型，返回的是存储对象的地址，地址不可以修变，但对象内的内容是可以改变的
    console.log(PI, k);
}

last()