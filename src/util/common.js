
const arryUnique = {
    init() {
        let data = [
            { id: 201801, name: '张三', age: 15, },
            { id: 201804, name: 'John', age: 18, },
            { id: 201802, name: '李四', age: 18, },
            { id: 201801, name: '张三', age: 15, },
            { id: 201805, name: 'Jack', age: 18, },
            { id: 201803, name: '王五', age: 10, },
            { id: 201805, name: 'Jack', age: 18, },
            { id: 201804, name: 'John', age: 18, },
            { id: 201805, name: 'Jack', age: 18, },
        ];
        let hash = {};
        data = data.reduce((preVal, curVal) => {
            console.log('hash', hash, preVal, curVal)
            console.log(hash[curVal.id])
            hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
            //hash[curVal.id] ? '' : hash[curVal.id] =  preVal.push(curVal); 
            // if(!hash[curVal.id]){
            //    hash[curVal.id] = preVal.push(curVal)

            // }

            return preVal
        }, []);
        console.log(data);
        console.log(hash)
    },
    ternaryOperator() {
        let a, b, c = 'cc', d = 'dd';
        a = b ? d = 7 : 1 > 2 ? 5 : d;
        console.log('aaa', a)
    }
   
}

const reduce = {
    base() {
        var arr = [1, 3, 5, 7, 9];
        arr.reduce(function (x, y) {
            console.log('pre - cur', x, y)
            return x + y;
        });
        // arr.reduce(function (pre, cur) {
        //     console.log('222', pre, cur)
        //     if (!pre.includes(cur)) {
        //         return pre.concat(cur)
        //     } else {
        //         return pre
        //     }
        // }, []);
    }
}





export {
    arryUnique,
    reduce

}