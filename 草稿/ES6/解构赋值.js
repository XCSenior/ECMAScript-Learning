
// 变量的解构赋值

// 1、数组解构
// 声明数组
const arr = ['笑声杨','嘿嘿','时候','哦搜到']
// 解构赋值给变量
// let [a,b,c,d] = ['笑声杨','嘿嘿','时候','哦搜到']
let [a,b,c,d] = arr

// 2、对象解构
// 声明对象
const obj = {
    name:'赵本山',
    age:'18',
    xiaopin:function() {
        console.log('我可以演小品');
    }
};
// 解构赋值，一样用对象的花括号
let {name,age,xiaopin} = obj
obj.xiaopin()

// 方法解构，直接调用对象内函数
// let {xiaopin} = obj
// xiaopin()

