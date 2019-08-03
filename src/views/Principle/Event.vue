
<template>
  <div>
    <h3>原理/ 发布订阅 event</h3>
  </div>
</template>
<script>
import event from "@/util/Event/Event.js";
console.log(event);

export default {
  name: "watch",
  data() {
    return {};
  },
  mounted() {
    this.init();
    //this.test();
  },
  methods: {
    init() {
      let fn1 = function(name, time) {
        console.log(`webDevelop ${name} 报到时间 ${time}`);
      };
      event.listen("webDevelop", fn1);

      let fn2 = function(name, time) {
        console.log(`webDesign ${name} 报到时间 ${time}`);
      };
      event.listen("webDesign", fn2);

      event.trigger("webDevelop", "张三", "2019/08/09");
      event.trigger("webDesign", "李四", "2019/09/01");
      event.remove("webDevelop", fn1);
      // event.trigger("webDevelop", "张三", "2019/08/09");
      // event.trigger("webDesign", "李四", "2019/09/01");
      console.log(event);
    },
    test() {
      var event = {}; //发布者（hr）
      var fn1, fn2;
      event.clietList = []; //发布者的缓存列表（应聘者列表）
      event.remove = function(key, fn) {
        var fns = this.clietList[key];
        if (!fns) {
          return false;
        }
        if (!fn) {
          //如果没有传入fn回调函数，直接取消key对应消息的所有订阅
          this.clietList[key] = [];
        } else {
          for (var i = 0; i < fns.length; i++) {
            //遍历回调函数列表
            var _fn = fns[i];
            if (_fn === fn) {
              fns.splice(i, 1); //删除订阅者的回调函数
            }
          }
        }
      };
      event.listen = function(key, fn) {
        //增加订阅者函数
        if (!this.clietList[key]) {
          this.clietList[key] = [];
        }
        this.clietList[key].push(fn);
      };

      event.trigger = function() {
        //发布消息函数
        var key = Array.prototype.shift.call(arguments),
          fns = this.clietList[key];

        console.log(key, arguments);

        for (var i = 0; i < fns.length; i++) {
          var fn = fns[i];
          fn.apply(this, arguments);
        }
      };

      event.listen(
        "web前端",
        (fn1 = function(name, time) {
          //小强订阅了这个消息。
          console.log("姓名：小强");
          console.log("正式上班时间：" + time);
        })
      );

      event.listen(
        "php",
        (fn2 = function(name, time) {
          //大大强订阅了这个消息
          console.log("姓名：大大强");
          console.log("正式上班时间：" + time);
        })
      );

      //发布者发布消息

      event.remove("web前端", fn1);
      event.trigger("web前端", "小强", "2016/10"); //姓名：小强   正式上班时间：2016/10
      event.trigger("php", "大大强", "2016/15"); //姓名：大大强   正式上班时间：2016/15

      console.log("event", event);
    }
  }
};
</script>
