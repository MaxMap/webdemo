<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png">-->
	<div>数字：{{ a }}</div>
	<div id="" @click="add">响应式数据ref：{{ b }}</div>
	<div id="">字符串:{{ c }}</div>
	<h5>reactive使用</h5>
	<p>name:{{ pObj.name }}</p>
	<p>age:{{ pObj.age }}</p>
	<p>数组：{{ pObj.test }}</p>
	<button type="button" @click="updataName">修改参数--姓名</button>
	<div id="">
		知识点：
		<p>代理对象修改后 ，源对象也会修改，相同源对象修改 代理对象也会修改 ，视图都会跟着变动</p>
		<p>proxy 解决对象，数据异步更新问题，可以直接修改</p>
	</div>
	<br/>
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
	name: 'App',
	components:{
		HelloWorld
	},
	setup() {
		const a = 1; //非响应式
		const b = ref(0);
		const c = ref<string>('123456');
		function add() {
			//ref 是一个对象 一般用来定义基本类型响应式数据
			b.value++;
			c.value = c.value.concat(c.value);
		}
		const obj = {
			name: '张三',
			age: '男',
			test: [10086, 911, 101]
		};
		const pObj:{
			name:string,
			age:string,
			test:Array<any>
		} = reactive(obj);
		function updataName() {
			pObj.name = '李四';
			pObj.test[0] = '8080';
		}
		// obj.name = '猪猪';
		// delete obj.name;
		// console.log(pObj, obj);
		return {
			a,
			b,
			add,
			c,
			pObj,
			updataName
		};
	}
});
</script>

<style></style>
