// ES6允许大括号里面，直接写入变量和函数，作为对象的属性和方法
// 这样的书写更加简洁
let name = '尚硅谷'
let change = function () {
    console.log('我们可以改变你！')
}
const school = {
    name,
    change,
    improve(){      //相当于improve:function(){},冒号function省略了
        // 函数体
    }
}
console.log(school); //{ name: '尚硅谷', change: [Function: change] }