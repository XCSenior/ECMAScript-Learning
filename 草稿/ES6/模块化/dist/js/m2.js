'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// 2、统一暴露
var school = '尚硅谷';
function findJob() {
    console.log('我们帮你找工作');
}

// export{}
exports.school = school;
exports.findJob = findJob;