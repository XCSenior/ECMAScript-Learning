// 引入fs模块
const fs = require('fs');

// 封装3个任务, 3个函数返回都是Promise对象
// 读取[为学.md]
function readWeiXue() {
    return new Promise((resolve , reject) => {
        fs.readFile('./resources/为学.md',(err , data)=>{
            if(err){
                // 如果失败
                reject(err);
            }else{
                resolve(data.toString());
            }
        });
    });
}

// 读取[插秧诗.md]
function readChaYang() {
    return new Promise((resolve , reject) => {
        fs.readFile('./resources/插秧诗.md',(err , data)=>{
            if(err){
                // 如果失败
                reject(err);
            }else{
                resolve(data.toString());
            }
        });
    });
}

// 读取[观书有感.md]
function readGuanShu() {
    return new Promise((resolve , reject) => {
        fs.readFile('./resources/观书有感.md',(err , data)=>{
            if(err){
                // 如果失败
                reject(err);
            }else{
                resolve(data.toString());
            }
        });
    });
}

// 声明async函数
async function main() {
    // let weixue =  await readWeiXue();   //没有考虑失败情况
    // let chayang = await readChaYang();
    // let guanshu = await readGuanShu();
    // console.log(weixue);
    // console.log(chayang);
    // console.log(guanshu);
    try {
        let weixue =  await readWeiXue();
        console.log(weixue);
    } catch (e) {
        console.log(e);
    }
    try {
        let chayang =  await readChaYang();
        console.log(chayang);
    } catch (e) {
        console.log(e);
    }
    try {
        let guanshu =  await readGuanShu();
        console.log(guanshu);
    } catch (e) {
        console.log(e);
    }
}

main();

