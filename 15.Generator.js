{
    // generator 基本定义
    let tell = function* (){
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k = tell();

    console.log(k.next());  // {value: 'a',done: false}
    console.log(k.next());  // {value: 'b',done: false}
    console.log(k.next());  // {value: 'c',done: true}
    console.log(k.next());  // {value: undefined,done: true}
}

{
    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value', value); // 1  2  3
    }
}

{
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next()); // {value: "A",done:false}
    console.log(status.next()); // {value: "B",done:false}
    console.log(status.next()); // {value: "C",done:false}
    console.log(status.next()); // {value: "A",done:false}
    console.log(status.next()); // {value: "B",done:false}
}

{
    let state =async function (){  //async，await是generator 函数的语法糖
        while(1){
            await 'A';
            await 'B';
            await 'C';
        }
    }
    let status = state();
    console.log(status.next()); // {value: "A",done:false}
    console.log(status.next()); // {value: "B",done:false}
    console.log(status.next()); // {value: "C",done:false}
    console.log(status.next()); // {value: "A",done:false}
    console.log(status.next()); // {value: "B",done:false}
}

{
    let draw = function(count){
        // 具体抽奖逻辑
        console.log(`剩余${count}次`)
    }

    let residue = function* (count){
        while(count > 0){
            count--;
            yield draw(count);
        }
    }

    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        start.next();
    },false);
}

{
    // 长轮询
    let ajax = function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code: 0})
            },200)
        })
    }

    let pull = function(){
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d){   //step.value为promise实例
            if(d.code!=0){
                setTimeout(function(){
                    console.log('wait');
                    pull()
                },1000);
            }else{
                console.log(d);
            }
        })
    }
    pull();
}