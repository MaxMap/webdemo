<script setup lang="ts">
import {reactive} from "vue"
import { ElMessage } from 'element-plus'
let getCode = ()=>{
  loginObj.codeBol = true;
  // const dom:number = Math.floor(Math.random()*(9999-1000))+1000;
  ElMessage('this is a message.')
  let num = 60;
  let timePut = setInterval(()=>{
    if(num === 0){
      clearInterval(timePut)
      loginObj.codeBol = false
      return
    }
    num--
    loginObj.codeStr =num + 's'

  },1000)
}
interface LoginObj{
  navList:String[]
  nIndex:number
  codeBol:Boolean
  codeStr:string|number
}
interface FromObj{
  phone:number|string
  password:string|number|undefined
}
let loginObj:LoginObj = reactive({
  navList:['免密码登录','密码登录'],
  nIndex:0,
  codeBol:false,
  codeStr:'获取验证码'
})
let fromObj:FromObj = reactive({
  phone:'',
  password:''
})
let navtab = (index):void =>{
  loginObj.nIndex = index
}

</script>

<template>
  <div class="main">
    <div class="SignFlowHomepage-content">
      <img alt="知乎 LOGO" class="SignFlowHomepage-logo" src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png">
      <div class="css-zvnmar">
        <div class="SignContainer-content">
          <div class="nav">
            <div v-for="(item,index) in loginObj.navList" :key="index" :class="index === loginObj.nIndex ? 'active':''" @click="navtab(index)">{{item}}</div>
          </div>
          <!--免密登录-->
          <div class="n1">
            <el-row align="middle">
              <el-col :span="6">手机号：</el-col>
              <el-col :span="18"><el-input v-model="fromObj.phone" placeholder="请输入手机号" /></el-col>
            </el-row>
            <el-row align="middle">
              <el-col :span="6">验证码：</el-col>
              <el-col :span="10"><el-input v-model="fromObj.phone" placeholder="请输入验证码" /></el-col>
              <el-col :span="6" :offset="2"><el-button :disabled="loginObj.codeBol" @click="getCode()" type="primary" size="mini">{{loginObj.codeStr}}</el-button></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  box-sizing: border-box;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.SignFlowHomepage-content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 688px;
  height: calc(100% - 42px);
  align-items: center;
  .SignFlowHomepage-logo {
    width: 128px;
    height: 81px;
    margin-bottom: 24px;
  }
  .css-zvnmar {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    border-radius: 2px;
    width: 400px;
    overflow: hidden;
    padding: 0 24px 84px;
    .SignContainer-content {
      margin: 0 auto;
      text-align: center;
      .nav{
        display: flex;
        div{
          font-size: 16px;
          line-height: 60px;
          height: 60px;
          margin-right: 24px;
          cursor: pointer;
          color: #444;
          &.active{
            position: relative;
            color: #121212;
            font-weight: 600;
            &:after {
              display: block;
              position: absolute;
              bottom: 0;
              content: "";
              width: 100%;
              height: 3px;
              background-color: #06f;
            }
          }
        }
      }
      .n1{
        .el-row{
          margin-top: 24px;
        }
      }
    }
  }
}

</style>
