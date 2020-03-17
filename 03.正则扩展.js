{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xy123'), regex2.test('xyz123'));  // true true

    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);  // i
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g; // 能够忽略下划线匹配
    let a2 = /b+/y;  //  不能忽略匹配

    // 都是全局匹配
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));


    // 判断是否开启带y的沾粘模式
    console.log(a1.sticky,a2.sticky);  // false true
}

{
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));  // true
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));  // false  带u修饰符将其表示为1个字符,所以匹配不成功

    console.log(/\u{61}/.test('a'));  //false
    console.log(/\u{61}/u.test('a'));  //true

    console.log(`\u{20BB7}`);  // 吉

    let s = '吉';
    console.log('u', /^.$/.test(s));  //false   //.并不能匹配所有字符（只能匹配小于2个字符的所有字符）
    console.log('u-2', /^.$/u.test(s));  //true  //大于两个字节的必须加上u修饰符才能识别

    console.log('test', /吉{2}/.test('吉吉')); // false
    console.log('test-2', /吉{2}/u.test('吉吉')); // true
}