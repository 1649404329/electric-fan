<template>
  <div class="fan">
    <img src="../assets/img/fanin.png" class='fanfanhover'>
    <br>
    <img src="../assets/img/fanin.png" class="fanSlow">
    <img src="../assets/img/fanin.png" class="fanMiddle">
    <img src="../assets/img/fanin.png"  :class="{'fanFast': isActive}">
    <br>
    <el-button icon="el-icon-switch-button" circle @click="changeView"></el-button>
    <el-divider></el-divider>
    <el-alert
        title="这是一个关闭按钮，点击停止你的小风扇"
        type="info"
        close-text="知道了">
    </el-alert>
  </div>
</template>

<script>
    import "../styles/fan.css";
export default {
  name: 'fan',
  props: {},
  data() {
      return {
          isActive: true,
      }
  },

    methods: {
        changeView() {
            const _this = this;
            _this.isActive = !_this.isActive
            console.log(_this.isActive);
            
        }
    }
}
</script>
<style scoped>

</style>