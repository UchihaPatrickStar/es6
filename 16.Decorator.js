{
    let readonly = function(target,name,descriptor){
        descriptor.writable = false;
        return descriptor
    };

    class Test{
        @readonly  // 修饰器只能放在类中使用
        time(){
            return '2020-03-17'
        }
    }

    let test = new Test();

    // test.time = function(){
    //     console.log('reset time');  // 会报错  只读不能修改
    // };
    console.log(test.time());
}


{
    let typename = function(target,name,descriptor){
        target.myname = 'hello';
    };

    @typename
    class Test{

    }

    console.log('类修饰符',Test.myname);
    // 第三方库修饰器的js库: core-decorators: npm install core-decorators  安装后不需自己定义修饰器了可直接使用
}

{
    let log = (type) => {
        return function(target,name,descriptor){
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    } 

    class AD{
        @log('show')
        show(){
            console.info(`ad is show`)
        }
        @log('click')
        click(){
            console.info(`ad is click`)
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}