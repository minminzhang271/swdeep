

<template>
  <div>
    <h3>原理</h3>

    <div class @click="gotoPage('EventPage')">发布订阅1 event</div>
  </div>
</template>
<script>
import Pubsub from "@/util/Pubsub/Pubsub.js";

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
      let pub1 = new Pubsub();
      console.log(pub1);

      let fn1 = function(name, time) {
        console.log(`webDevelop ,name: ${name},'begin job' ${time}`);
      };
      let fn2 = function(name, time) {
        console.log(`webDevelop ,name: ${name},'begin job' ${time}`);
      };
      pub1.on("webDevelop", fn1);
      pub1.on("webDesign", fn2);

      pub1.emit("webDevelop","张三","2018/08/08");
      pub1.emit("webDesign","李四","2019/08/11");
    },
    test() {},
    gotoPage(name) {
      console.log("name", name);
      this.$router.push({ name: name });
    }
  }
};
</script>
