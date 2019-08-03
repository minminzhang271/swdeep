
<template>
  <div>
    <div> class</div>

    <div @click="gotoPage('ListPage')">oop</div>
 
  </div>
</template>
<script>

import { classBase, classTest, classInherit } from "@/util/classDemo.js";

export default {
  name: "classPage",
  components: {
    //注册
  },
  data() {
    return {
      msg: "class msg"
    };
  },
  computed: {
    scrollHeight: () => {
      return document.body.scrollHeight;
    }
  },
  watch: {},

  mounted() {
    this.classTest();

  
  },
  destroyed() {},
  methods: {
    gotoPage(name) {
      this.$router.push({ name: name });
    },
    /* classDemo */
    classTest() {
      classBase.create();
      //classTest.create();
      //classInherit.fn1.prototype_();
      //classInherit.fn1.constructor_();
      //classInherit.fn2.inheritPrototype();
    },

   
  }
};
</script>

<style lang="scss">
</style>
