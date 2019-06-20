<template>
  <transition :name="fadeIn">
    <div
      class="error"
      v-show="errorLoading"
    >
      <div class="error-img">
        <img
          src="../../assets/error.png"
          v-if="errorLoading"
        />
        <div class="error-text">系统异常，请稍后再试</div>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {},
  data() {
    return {
      errorLoading: false
    };
  },
  methods: {},
  computed: {
    fadeIn() {
      return "fadeIn";
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "@/scss/size.scss";
.error {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: table;
  img {
    margin: 0 auto;
    height: $rem220;
  }
}
.error-img {
  display: table-cell;
  vertical-align: middle;
  font-size: $rem28;
  color: #283039;
  letter-spacing: 0;
  text-align: center;
  line-height: $rem40;
}
.error-text {
  padding: $rem80 0;
}
</style>
