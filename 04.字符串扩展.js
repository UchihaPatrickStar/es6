{
    console.log('a', `\u0061`); // a a
    console.log('a', `\u20BB7`); // a  不能正常显示

    console.log('s', `\u{20BB7}`) // s 吉   //如需正常显示需用花括号括起来
}


{
    let s = '吉';
    console.log('length', s.length); // length 2  //计算为4个字节  没两个字节长度为1
    console.log('0',s.charAt(0));  // 乱码  //es5中charAt和charCodeAt对unicode的处理是不到位的
    console.log('1',s.charAt(1));   // 乱码
    console.log('at0',s.charCodeAt(0));  // at0 55362
    console.log('at1',s.charCodeAt(1));  // at1 57271

    let s= '吉a'
    console.log('length', s1.length); // length 3
    console.log('code0', s1.codePointAt(0)); // code0 134071  //  codePointAt(0)自动计算四个字节的码值
    console.log('code0', s1.codePointAt(0).toString(16));  // code0 20bb7
    console.log('code1', s1.codePointAt(1));  // code1 57271  // codePointAt(1)只取字符的后两个字节
    console.log('code2', s1.codePointAt(2));  // code2 97
}

{
    console.log(String.fromCharCode('0x20bb7'));  //  乱码   //es5中的方法
    console.log(String.fromCodePoint('0x20bb7')); //  吉   //es6中的方法  可以处理大于两个字节的字符
}

{
    let str = '\u{20bb7}abc';
    for(let i = 0;i < str.length;i++){
        console.log('es5', str[i]); // 乱码  乱码  a  b  c
    }

    for(let code of str){
        console.log('es6',code); // 吉 a  b c
    }
}


{
    let str = 'string';
    console.log('includes', str.includes('c'));  // 是否包含c
    console.log('start', str.startsWith('str'));  // 是否以str开头
    console.log('end', str.endsWith('ng'));  // 是否以ng结尾
}

{
    let str = 'abc';
    console.log(str.repeat(2)); // 重复两遍
}

{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m); // i an list, hello world
}

{
    console.log('1'.padStart(2,'0'));  // 长度为2，不够在开头补0
    console.log('1'.padEnd(2,'0'));  // 长度为2，不够在结尾补0
}

{
    let user = {
        name: 'list',
        info: 'hello world'
    };
    abc`i am ${user.name}, ${user.info}`;  // 标签模板
    function abc(s,v1,v2){
        console.log(s,v1,v2); // ["i am", ",", "", raw: Array[3]] "list" "hello world"
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);  // Hi\n3   raw对所有斜杠进行转义，在所有斜杠前面都加了个斜杠
    console.log(`Hi\n${1+2}`);  // Hi 换行  3 
}