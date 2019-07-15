const asyncBase = {

    /*
    synchronous 
    -------output--------
    before callback
    //after 3s
    I’m callback
    after callback

    tip: 由于是同步回调，会阻塞后面的代码，如果fun2是个死循环，后面的代码就不执行了。
    */
    sync() {

        var fun1 = function (callback) {
            //do something
            console.log("before callback");
            (callback && typeof (callback) === 'function') && callback();
            console.log("after callback");
        }
        var fun2 = function (param) {
            //do something
            var start = new Date();
            while ((new Date() - start) < 3000) { //delay 3s
            }
            console.log("I'm callback");
        }
        fun1(fun2);


    },
    /* 
    asynchronous
    -------ouput-------
    taskB, synchronize
    taskA, asynchronous
    */
    async() {
        setTimeout(function () {
            console.log('taskA, asynchronous');
        }, 0);
        console.log('taskB, synchronize');
        //while(true);
    },


}
/* 
Promise resolve 和 reject
resolve 函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去； 
reject 函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise.all方法
接受一个数组（或具有Iterator接口）作参数，
数组中的对象（p1、p2、p3）均为promise实例（如果不是一个promise，该项会被用Promise.resolve转换为一个promise)。
它的状态由这三个promise实例决定。
*/
const asyncPromise = {
    /* promise */
    prom1() {
        async function testSync() {
            const response = await new Promise(resolve => {
                setTimeout(() => {
                    resolve("async await test...");
                }, 1000);
            });
            console.log(response);
        }
        testSync();//async await test...
    },
    /* promise
    由于resolve指定的是异步操作成功后的回调函数，它需要等所有同步代码执行后才会执行，因此最后打印'resolved'
    -------output-------
    before resolved
    after resolved
    outer
    resolved

    */
    prom2() {
        var promise = new Promise(function (resolve, reject) {
            console.log('before resolved');
            resolve();
            console.log('after resolved');
        });

        promise.then(function () {
            console.log('resolved');
        });

        console.log('outer');

        console.log('promise', promise)
    },

    /* 
    Promise.all方法
    -------output-------
    //约 3s 后
    ["first", "second", "third"] 

    当 p1 == fulfilled  & p2==fulfilled  & p3==fulfilled    时，p status == fulfilled
    当p1, p2, p3状态都变为fulfilled，p的状态才会变为fulfilled，并将三个promise返回的结果，按参数的顺序（而不是 resolved的顺序）存入数组，传给p的回调函数 如 promAllSuccess
 
    */
    promAllResolve() {
        var p1 = new Promise(function (resolve, reject) {
            setTimeout(resolve, 3000, "first");
        });
        var p2 = new Promise(function (resolve, reject) {
            resolve('second');
        });
        var p3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, "third");
        });

        var p = Promise.all([p1, p2, p3]).then(function (values) {
            console.log(values);
        });
        console.log('promAllResolve', p)

    },

    /* 
    Promise.all方法 

    -------output-------
    reject three
   
    当 p1 == rejected  || p2==rejected  || p3==rejected  时  ， p status == rejected
    当p1, p2, p3其中之一状态变为rejected，p的状态也会变为rejected，并把第一个被reject的promise的返回值，传给p的回调函数，如例3.9。
    */
    promAllReject() {
        var p1 = new Promise(function (resolve, reject) {
            setTimeout(resolve, 3000, "first");
        });
        var p2 = new Promise(function (resolve, reject) {
            resolve('second');
        });
        var p3 = new Promise((resolve, reject) => {
            //setTimeout(resolve, 1000, "third");
            reject("three");
        });

        var p = Promise.all([p1, p2, p3]).then(function (values) {
            console.log(values);
        }, function (error) {
            console.log('reject', error);    // => reject three
        });
        console.log('proAllRejct', p)


    },
}
const asyncAwait = {
    await1(){
        function takeLongTime(n) {
            return new Promise(resolve => {
                setTimeout(() => resolve(n + 200), n);
            });
        }
        
        function step1(n) {
            console.log(`step1 with ${n}`);
            return takeLongTime(n);
        }
        
        function step2(n) {
            console.log(`step2 with ${n}`);
            return takeLongTime(n);
        }
        
        function step3(n) {
            console.log(`step3 with ${n}`);
            return takeLongTime(n);
        }
        function doIt() {
            console.time("doIt");
            const time1 = 300;
            step1(time1)
                .then(time2 => step2(time2))
                .then(time3 => step3(time3))
                .then(result => {
                    console.log(`result is ${result}`);
                    console.timeEnd("doIt");
                });
        }
        
        doIt();
    },

    /* awtait
    ---- output ----
    step1 with 300
    step2 with 300 and 500
    step3 with 300, 500 and 1000
    result is 2000
    doIt: 2911.97216796875ms
    */
    await2(){
        function takeLongTime(n) {
            return new Promise(resolve => {
                setTimeout(() => resolve(n + 200), n);
            });
        }
        function step1(n) {
            console.log(`step1 with ${n}`);
            return takeLongTime(n);
        }
        
        function step2(m, n) {
            console.log(`step2 with ${m} and ${n}`);
            return takeLongTime(m + n);
        }
        
        function step3(k, m, n) {
            console.log(`step3 with ${k}, ${m} and ${n}`);
            return takeLongTime(k + m + n);
        }
        async function doIt() {
            console.time("doIt");
            const time1 = 300;
            const time2 = await step1(time1);
            const time3 = await step2(time1, time2);
            const result = await step3(time1, time2, time3);
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        }
        
        doIt();
        
       
    },
    await3(){
        function sleep(second) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(' enough sleep~');
                }, second);
            })
        }
        function normalFunc() {
            console.log('normalFunc');
        }
        async function awaitDemo() {
            await normalFunc();
            console.log('something, ~~');
            let result = await sleep(2000);
            console.log(result);// 两秒之后会被打印出来
        }
        awaitDemo();
        // normalFunc
        // VM4036:13 something, ~~
        // VM4036:15  enough sleep~
    }
}


export {
    asyncBase,
    asyncPromise,
    asyncAwait

}