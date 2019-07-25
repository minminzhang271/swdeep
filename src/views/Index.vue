
<template>
  <div>IndexPage</div>
</template>
<script>

import { arryUnique,reduce} from "@/util/common.js";
import { classBase, classTest, classInherit } from "@/util/classDemo.js";
import { asyncBase,asyncPromise,asyncAwait } from "@/util/asyncDemo.js";
 
 
 

export default {
  name: "IndexPage",
  components: {
    //注册
  },
  data() {
    return {
      msg: "index msg"


      
    };
  },
  computed: {
    scrollHeight: () => {
      return document.body.scrollHeight;
    }
  },
  watch: {},

  mounted() {
  
    //this.classTest();
 

    
    this.aysncTest();

    //this.utilTest();

   
  },
  destroyed() {},
  methods: {
    /* classDemo */
    classTest() {
      //classBase.create();
      //classTest.create();
      //classInherit.fn1.prototype_();
      //classInherit.fn1.constructor_();
      //classInherit.fn2.inheritPrototype();
    },


    /* asyncDemo  */
    aysncTest(){
       //asyncBase.sync();
       //asyncBase.async();
       //asyncPromise.prom1();
      //  asyncPromise.promAllResolve();
      //  asyncPromise.promAllReject();
      //asyncAwait.await1();
      // asyncAwait.await2();
      asyncAwait.await3();
    },
    

    utilTest(){
      //arryUnique.init();
      reduce.base();
    }
  }

};
</script>

<style lang="scss">
</style>
