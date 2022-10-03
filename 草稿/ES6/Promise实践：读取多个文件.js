// Promise实践：读取多个文件
// 读取多个md文件，合并内容输出

// 引入fs模块
const fs = require('fs');
// 回调地狱：形参容易重名
fs.readFile('./resources/为学.md', (err, data1) => {
    fs.readFile('./resources/插秧诗.md', (err, data2) => {
        fs.readFile('./resources/观书有感.md', (err, data3) => {
            let result = data1 + data2 + data3;
            // console.log(result);
        });
    });
});

// 使用Promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data);
    })
});
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data)=>{
            resolve([value, data]); //传递一个含两个buffer的数组
        });
    });
}).then(value => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/观书有感.md',(err,data)=>{
            // 压入操作
            value.push(data);
            resolve(value);
        });
    });
}).then(value=>{
    console.log(value.join('\r\n'));
});