<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  {{obj.count}}
  <h1>{{refs}}</h1>
</template>

<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {reactive} from 'vue'
const obj = reactive({ count: 0 })
</script> -->
<script>
import {ref,reactive } from 'vue'
export default {
  setup(props) {
    console.log(props.title)
    const refs = ref(123)
    const obj = reactive({ count: 5 })
    return {
      refs,
      obj
      }
  }
}
</script>

<style lang="scss">
</style>
