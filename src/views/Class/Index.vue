
<template>
  <div>
    <div> class 定义和继承</div>

    <div @click="gotoPage('ListPage')">oop</div>
 
  </div>
</template>
<script>

import Copy from "@/util/Class/Copy.js";
import ClassNew from "@/util/Class/ClassNew.js";
import ClassDefine from "@/util/Class/ClassDefine.js";
import ClassInherit from "@/util/Class/ClassInherit.js";
import { cpus } from 'os';
import { createHash } from 'crypto';


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
   
  },
  watch: {},

  mounted() {


    this.test();
 

  
  },
  destroyed() {},
  methods: {
    gotoPage(name) {
      this.$router.push({ name: name });
    },
   
    test() {

      // Copy.copy();
      // Copy.deepCopy();
      Copy.jqExtend();
      Copy.json();
      Copy.assgin();

      // ClassNew._new();
      // ClassNew.fakeNew_();
      // ClassNew._returnObj();
      // ClassNew._returnStr();
      // ClassNew.fakeNew();

      

      //ClassInherit.combination();
      //ClassInherit.inheritPrototype();
      // ClassInherit.es6();

    
    
    },

   
  }
};
</script>

<style lang="scss">
</style>
