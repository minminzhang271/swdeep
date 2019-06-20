<template>
  <section>
    <div class="jr-dialog-box" :class="{'show':visible}">
      <div class="jr-dialog-mask"></div>
      <div class="jr-dialog">
        <div class="jr-dialog-close"
         clstag="jr|keycount|zc_redhui003|mytangkuang003_rxscicon2"
         @click="dialogClose"></div>
        <div class="jr-dialog-content">
          <div class="jr-dialog-title">
            <slot name="dialog-title">标题</slot>
          </div>
          <div class="jr-dialog-body">
            <slot name="dialog-body">dialog body</slot>
          </div>
          <div class="jr-dialog-footer">
            <slot name="dialog-footer">
               <div class="jr-dialog-button">去完成</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "jrDialog",
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
.jr-dialog-box {
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

  .jr-dialog-mask {
    background: rgba(0, 0, 0, 1);
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .jr-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .jr-dialog-close {
      display: inline-block;
      position: absolute;
      right:  $rem30;
      top: $rem30;
      width: $rem28;
      height: $rem28;
      background-image: url("https://m.360buyimg.com/jrqb/jfs/t1/35768/15/9169/499/5cd028b0Efb57f6e8/71121f2190dc9f72.png");
      background-size: 100% auto;
    }

    .jr-dialog-content {
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

      .jr-dialog-title {
        font-size: $rem52;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: $rem50;
        text-align: center;
        margin-bottom:$rem32;
      }

      .jr-dialog-footer {
        .jr-dialog-button {
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
