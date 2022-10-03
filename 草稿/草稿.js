// for in 循环遍历对象属性

const obj = {
    name:'1',
    age:15,
    fn:function(){
        console.log();
    }
}


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key}:${element}`);
    }
}