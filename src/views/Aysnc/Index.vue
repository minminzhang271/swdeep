
<template>
  <div>
    <div>aysnc</div>

    <div @click="gotoPage('ListPage')">ListPage</div>
  </div>
</template>
<script>
import { asyncBase, asyncPromise, asyncAwait } from "@/util/asyncDemo.js";

export default {
  name: "AysncPage",
  components: {
    //注册
  },
  data() {
    return {
      msg: "aysnc msg"
    };
  },
  computed: {
    scrollHeight: () => {
      return document.body.scrollHeight;
    }
  },
  watch: {},

  mounted() {
    this.aysncTest();
  },
  destroyed() {},
  methods: {
    gotoPage(name) {
      this.$router.push({ name: name });
    },

    aysncTest() {
      //asyncBase.sync();
      //asyncBase.async();
      //asyncPromise.prom1();
      //asyncPromise.promAllResolve();
      //asyncPromise.promAllReject();
      //asyncAwait.await1();
      // asyncAwait.await2();
      asyncAwait.await3();
    }
  }
};
</script>

<style lang="scss">
</style>
