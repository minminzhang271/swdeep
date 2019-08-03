<template>
  <section>
    <div class="sw-dialog-box" :class="{'show':visible}">
      <div class="sw-dialog-mask"></div>
      <div class="sw-dialog">
        <div class="sw-dialog-close"
         @click="dialogClose"></div>
        <div class="sw-dialog-content">
          <div class="sw-dialog-title">
            <slot name="dialog-title">标题</slot>
          </div>
          <div class="sw-dialog-body">
            <slot name="dialog-body">dialog body</slot>
          </div>
          <div class="sw-dialog-footer">
            <slot name="dialog-footer">
               <div class="sw-dialog-button">去完成</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dialog",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    dialogClose() {
      console.log('colose')
      this.$emit("dialogClose");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/size.scss";
.sw-dialog-box {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 110;
  display: none;
  &.show {
    display: block;
  }

  .sw-dialog-mask {
    background: rgba(0, 0, 0, 1);
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .sw-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .sw-dialog-close {
      display: inline-block;
      position: absolute;
      right:  $rem30;
      top: $rem30;
      width: $rem28;
      height: $rem28;
      background-image: url(./assets/close.svg);
      background-size: 100% auto;
    }

    .sw-dialog-content {
      box-sizing: border-box;
      width: $rem590;
      // min-height: 4.46rem;
      background: #fff;
      border-radius: $rem16;
      margin: 0 auto;
      padding-top: $rem72;
      padding-bottom: $rem50;
      padding-left: $rem48;
      padding-right: $rem48; 

      .sw-dialog-title {
        font-size: $rem52;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: $rem50;
        text-align: center;
        margin-bottom:$rem32;
      }

      .sw-dialog-footer {
        .sw-dialog-button {
          width:$rem470;
          height: $rem100;
          background: rgba(240, 34, 51, 1);
          border-radius: $rem100;
          font-size: $rem34;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: #fff;
          text-align: center;
          line-height:$rem100;
          margin: 0 auto;
          margin-top: $rem52;
          &.is-disabled {
            background: #ddd;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
