
<template>
  <div>
    tip
  </div>
</template>
<script>
// import HelloWorld from "@/buscomponents/HelloWorld.vue";
// import search from "@/views/search.vue";

export default {
  name: "Test",
  components: {
    //注册
  },
  data() {
    return {
      msg: "tip msg"
    };
  },
  computed: {
    scrollHeight: () => {
      return document.body.scrollHeight;
    }
  },
  watch: {},

  mounted() {
    //this.asynTest();
    //this.awaitTest();
      this.awaitApply();


    // this.reduceDemo();
    // this.arryUnique();
    // this.ternaryOperator();

    // this.classDemo();
    // this.argTest();
    // this.toStringTest();
 


  },
  destroyed() {},
  methods: {
    awaitApply(){
                /**
           * 传入参数 n，表示这个函数执行的时间（毫秒）
           * 执行的结果是 n + 200，这个值将用于下一步骤
           */
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

          // function doIt() {
          //   console.time("doIt");
          //   const time1 = 300;
          //   step1(time1)
          //           .then(time2 => step2(time2))
          //           .then(time3 => step3(time3))
          //           .then(result => {
          //               console.log(`result is ${result}`);
          //               console.timeEnd("doIt");
          //           });
          //  }
            async function doIt() {
                console.time("doIt");
                const time1 = 300;
                const time2 = await step1(time1);
                const time3 = await step2(time2);
                const result = await step3(time3);
                console.log(`result is ${result}`);
                console.timeEnd("doIt");
            }

 
          doIt();

    },
    /*
    async 函数返回的是一个 Promise 对象
     */
    asynTest(){
        async function testAsync() {
            return "hello async";
        }

      const result = testAsync();
      console.log(result);

    },
    awaitTest(){
      function takeLongTime() {
          return new Promise(resolve => {
              setTimeout(() => resolve("long_time_value"), 1000);
          });
      }

      // takeLongTime().then(v => {
      //     console.log("got", v);
      // });
   
       async function test() {
          const v = await takeLongTime();
          console.log(v);
      }

      test();
      

      

    },
    toStringTest(){
      var a = {
          value:2,
          toString:function(){
              console.log('sss to string',this.value)
              return ++this.value;
          }
      };
      if(a == 3 && a == 4){
          console.log('amazing',a);
      }else{
          console.log('nothing');
      }
    },
    argTest(){
      function foo(a) {
          var a;
          return a;
      }
      function bar(a) {
          var a = 'bye';
          return a;
      }
      console.log([foo('hello'), bar('hello')]);
    },
    classDemo(){
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }

        toString() {
          return '(' + this.x + ', ' + this.y + ')';
        }
      }

      class ColorPoint extends Point {
        constructor(x,y,color){
          super(x,y);
          this.color = color;
        }
        toString(){
          return this.color + ' '+ super.toString();
        }
      }

      let cp = new  ColorPoint(25,8,'green');

      console.log('cp instanceof ColorPoint',cp instanceof ColorPoint);
      console.log('cp instanceof Point',cp instanceof Point);
      let toS = cp.toString();
      console.log('cp toString',toS);

    },
    ternaryOperator(){
      let a ,b  ,c='cc',d='dd';
      a = b ? d=7 :  1>2 ? 5: d;
      console.log('aaa',a)
    }, 
    //数组去重
    arryUnique(){
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
          console.log('hash',hash,preVal,curVal)
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
    reduceDemo(){
      var arr = [1, 3, 5, 7, 9];
      arr.reduce(function (x, y) {
          console.log('111',x,y)
          return x + y;
      });  
      arr.reduce(function (pre, cur) {
          console.log('222',pre,cur)
           if(!pre.includes(cur)){
            return pre.concat(cur)
          }else{
            return pre
          }
      },[]); 
    },

    /*
    严格模式  12
    非严格模式 21   arguments 与变量值绑定
    */
    argumentsTest(){
         function effect(ary) {
          ary[0] = ary[2];
      }
      function run(a,b,c) {
        console.log('arguments',arguments)
          c = 10;
          effect(arguments);
          console.log('abc',a,b,c)
          alert(a);
          alert(b);
          alert(c);
          return a + b + c;
      }
      let result = run(1,1,1);
      console.log('result',result)
    },
    
  }
};
</script>

<style lang="scss">
 
</style>
