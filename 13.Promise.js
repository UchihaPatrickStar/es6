{
    // 基本定义
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function(){
            callback && callback.call()
        },1000)
    };

    ajax(function(){
        console.log('timeout1');
    })
}

{
    let ajax = function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000)  
        })
    };

    ajax().then(function(){
        console.log('promise','timeout2');
    })
}

{
    let ajax = function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000)  
        })
    };
    ajax().then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000);
        });
    }).then(function(){
        console.log('timeout3');
    })
}

{
    let ajax = function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num > 5){
                resolve()
            }else{
                throw new Error('出错了');
            }
        })
    };

    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    });
}


{
    // 所有图片加载完再加载到页面
    function loadImg(src){
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach((img) => {
            document.body.appendChild(img);
        })
    }

    Promise.all([  // 把多个Promise实例打包成一个新的Promise实例，当所有的promise实例状态发生改变后新的promise实例状态才会改变
        loadImg('http://i4.buimg.com/567571/df1ef0bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567571/5ceb8190d6b2a1c9c.png')
    ]).then(showImgs);
}

{
    // 所有图片加载完再加载到页面
    function loadImg(src){
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            }
        })
    }

    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([  // 只要其中一个率先响应了，race实例也会跟着改变，其他的就不再响应了
        loadImg('http://i4.buimg.com/567571/df1ef0bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567571/5ceb8190d6b2a1c9c.png')
    ]).then(showImgs);
}