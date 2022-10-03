// es6引入新的声明字符串的方式 [``](反引号)
// 1、声明`字符串`
let str = `我是一个字符串哦！`
console.log(str,typeof str);    // 我是一个字符串 string

// 不同点：
// 1、内容里边可以直接出现换行符，但' 和 "不可以
let str2 = 
`            <ul>
                <li>沈腾</li>
                <li>玛丽</li>
                <li>魏翔</li>
                <li>艾伦</li>
            </ul>`;
console.log(str2);
// 2、变量拼接
let lovest = '赵本山'
let out = `${lovest}是我最喜欢的人`  
console.log(out);  //赵本山是我最喜欢的人