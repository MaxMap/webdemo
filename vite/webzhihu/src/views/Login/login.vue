<script setup lang="ts">
import 'element-plus/dist/index.css'
import {reactive,onMounted} from "vue"
import { ElMessage } from 'element-plus'
import {isPoneAvailable} from '../../rules/check'
import { useRouter } from 'vue-router'

interface LoginObj{
  navList:String[]
  nIndex:number
  codeBol:Boolean
  codeStr:string|string
  codeNum:null|number
}
interface FromObj{
  phone:number|string
  password:string|number|undefined
}
// onMounted(()=>{
//   this.$http({
//     type:'get',
//     url:'../../rules/http/require.json'
//   }).then(res=>{
//     console.log(res)
//   }).catch(err => {
//     // console.log(err) //要回调出去
//     reject(err) //回调
//   })
// })
const router = useRouter()
let loginObj:LoginObj = reactive({
  navList:['免密码登录','密码登录'],
  nIndex:0,
  codeBol:false,
  codeNum:null,
  codeStr:'获取验证码'
})
let fromObj:FromObj = reactive({
  phone:'',
  password:''
})
let navtab = (index:number):void =>{
  loginObj.nIndex = index
}
let getCode = ()=>{
  loginObj.codeBol = true;
  const dom:number = Math.floor(Math.random()*(9999-1000))+1000;
  loginObj.codeNum = dom
  ElMessage({
    message: '验证码：'+dom,
    type: 'success',
  })
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


  let loginSubmit = ()=>{
    if(!fromObj.phone){
      ElMessage.error('请输入手机号')
    }else if(!isPoneAvailable(fromObj.phone)){
      ElMessage.error('手机号格式错误')
    }else if(!fromObj.password){
      ElMessage.error('请输入验证码')
    }else if(fromObj.password != loginObj.codeNum){
      ElMessage.error('验证码不正确')
    }else{
       router.push({
        name: 'home'
      })
    }
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
              <el-col :span="10"><el-input v-model="fromObj.password" placeholder="请输入验证码" /></el-col>
              <el-col :span="6" :offset="2"><el-button :disabled="loginObj.codeBol" @click="getCode()" type="primary" size="mini">{{loginObj.codeStr}}</el-button></el-col>
            </el-row>
            <el-button type="primary" class="submit" @click="loginSubmit()">注册/登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.submit{
  width: 100%;
  margin-top: 30px;
  height: 36px;
  color: #fff;
  background-color: #06f!important;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 1px solid;
  border-radius: 3px;
}
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
