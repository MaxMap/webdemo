<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import wx from 'weixin-js-sdk'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log('this.name',this.name)
    this.$axios({
      method: "get",
      url: "/wexin/cgi-bin/token?grant_type=client_credential&appid=wxa0e50d9f272b097c&secret=962fdcc98e9ce52c88d822ec1cf74f1b"
    }).then((res) => {
      console.log(res);
    });
  },
  mounted(){
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wxa0e50d9f272b097c', // 必填，公众号的唯一标识
      timestamp: new Date().getTime(), // 必填，生成签名的时间戳
      nonceStr: '123465', // 必填，生成签名的随机串
      signature: '962fdcc98e9ce52c88d822ec1cf74f1b',// 必填，签名
      jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
