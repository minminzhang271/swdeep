<template>
  <transition :name="fadeIn">
    <div
      class="toast-alert"
      v-if="show"
    >
      <div
        class="toast-mask"
        v-if="isShowMask"
      ></div>
      <transition :name="translate">
        <div
          class="toast-box"
          :class="position"
          v-if="show"
        >
          <!-- <img :src="img.favImg" alt="" class="favImg"> -->
          <p>{{text}}</p>
          <!-- <p class="ui-content">{{content}}</p> -->
        </div>
      </transition>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    show: {
      default: false
    },
    text: {
      default: ""
    },
    content: {
      default: "loading..."
    },
    position: {
      default: "center"
    },
    isShowMask: {
      default: false
    },
    t: {
      default: 2500
    },
    transition: {
      default: true
    }
  },
  data() {
    return {
      img: {
        // favImg: require("../../assets/error.png")
      }
    };
  },
  methods: {
    hideToast() {
      setTimeout(() => {
        this.show = false;
      }, this.t);
    }
  },
  computed: {
    translate() {
      if (!this.transition) {
        return "";
      } else {
        if (this.position === "top") {
          return "translate-top";
        } else if (this.position === "middle") {
          return "translate-middle";
        } else if (this.position === "bottom") {
          return "translate-bottom";
        }
      }
    },
    fadeIn() {
      if (!this.transition) {
        return "";
      } else {
        return "fadeIn";
      }
    }
  },
  watch: {
    show: {
      handler(newValue) {
        newValue && this.hideToast();
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/size.scss";

.toast-box {
  width: 100% !important;
  position: fixed;
  top: $rem200;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 5000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    color: #ffffff;
    letter-spacing: 0;
    font-size: $rem24;
    padding: 0 $rem16;
    width: auto !important;
    height: $rem68;
    line-height: $rem68;
    background:rgba(0,0,0,1);
    box-shadow:0rem 0rem 0.2rem 0rem rgba(191,191,191,0.5) !important;
    border-radius: $rem8;
    flex-shrink: 0 !important;
    box-sizing: content-box !important;
    background:rgba(0,0,0,0.7);
 
 
  }
}
.ui-content {
  height: $rem100;
  line-height: $rem100;
}
.toast-mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4999;
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.3s;
}
.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}
.translate-top-enter-active,
.translate-top-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-top-enter,
.translate-top-leave-active {
  transform: translateY(-50%);
  opacity: 0;
}
.translate-middle-enter-active,
.translate-middle-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-middle-enter,
.translate-middle-leave-active {
  transform: translateY(80%);
  opacity: 0;
}
.translate-bottom-enter-active,
.translate-bottom-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-bottom-enter,
.translate-bottom-leave-active {
  transform: translateY(100%);
  opacity: 0;
}
.favImg {
  width: $rem84;
  height: $rem84;
}
</style>