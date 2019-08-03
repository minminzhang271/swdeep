
<template>
  <div>
    <div>array Page</div>

    <div @click="gotoPage('ListPage')">ListPage</div>
  
  </div>
</template>
<script>
import { arryUnique, reduce } from "@/util/common.js";


export default {
  name: "ArrayPage",
  components: {
    //注册
  },
  data() {
    return {
      msg: "array msg"
    };
  },
  computed: {
    scrollHeight: () => {
      return document.body.scrollHeight;
    }
  },
  watch: {},

  mounted() {
 

    this.utilTest();
  },
  destroyed() {},
  methods: {
    gotoPage(name) {
      this.$router.push({ name: name });
    },
   
    utilTest() {
      //arryUnique.init();
      reduce.base();
    }
  }
};
</script>

<style lang="scss">
</style>
