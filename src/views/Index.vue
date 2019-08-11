
<template>
  <div>
    <div>IndexPage</div>

    <div @click="gotoPage('ListPage')">ListPage</div>
    <div @click="gotoPage('PrinciplePage')">PrinciplePage</div>
    <div @click="gotoPage('AysncPage')">AysncPage</div>
    <div @click="gotoPage('ClassPage')">ClassPage</div>
    <div @click="gotoPage('ArrayPage')">ArrayPage</div>
  </div>
</template>
<script>
import { arryUnique, reduce } from "@/util/common.js";
import DataType from "@/util/DataType/DataType.js";
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
  computed: {},
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
      DataType.typeof();
      DataType.instanceof();
      DataType.objectTostring();
      DataType.constructor();
    }
    // utilTest() {
    //   arryUnique.init();
    //   reduce.base();
    // }
  }
};
</script>

<style lang="scss">
</style>
