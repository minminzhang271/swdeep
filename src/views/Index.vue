
<template>
  <div>
    <div>IndexPage</div>

    <div @click="gotoPage('ListPage')">ListPage</div>
    <div @click="gotoPage('PrinciplePage')">PrinciplePage</div>
    <div @click="gotoPage('AysncPage')">AysncPage</div>
    <div @click="gotoPage('AysncPage')">ClassPage</div>
    <div @click="gotoPage('ArrayPage')">ArrayPage</div>
  </div>
</template>
<script>
import { arryUnique, reduce } from "@/util/common.js";

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
