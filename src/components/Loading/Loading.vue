<template>
  <transition :name="fadeIn">
    <div
      class="jrm-loading-box"
      v-show="showLoading"
    >
      <i class="jrm-loading-content" />
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {},
  data() {
    return {
      showLoading: false
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
.jrm-loading-content:before,
.jrm-loading-icon:before {
  width: $rem100;
  height: $rem100;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuNSIgY3g9IjE4IiBjeT0iMTgiIHI9IjE4Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+CiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxOCAxOCIgdG89IjM2MCAxOCAxOCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgICAgICAgICAgPC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  content: "";
  visibility: visible;
}
.jrm-loading-box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
}
.jrm-loading-content {
  width:  $rem120;
  height: $rem120;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -$rem60;
  margin-left: -$rem60;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  line-height:  $rem120;
  border-radius:  $rem4;
}
.jrm-loading-content:before {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -$rem50;
  margin-left: -$rem50;
  z-index: 2;
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.3s;
}

.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}
</style>
