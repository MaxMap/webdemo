<template>
	<div id="">
		<div id="" v-if="loading">
			数据加载中
		</div>
		<div id="" v-else-if="data">
			<div v-for="(item,index) in data" :key="index">
				城市:{{item.name}},编码：{{item.code}}
			</div>
		</div>
		<div id="" v-else>
			{{errorMsg}}
		</div>
		<div id="">
			ref 自动获取标签元素
			<input type="" name="" id="" value="123" ref="inputRef">
			<!-- <div id="" ref="divRef">
				divRef
			</div> -->
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent,toRefs,ref,onMounted} from 'vue';
import Address from './assets/address' 

interface IAddress{
	id:string
	name:string
	code:string
}

export default defineComponent({
	name: 'App',
	setup(){
		const inputRef = ref<HTMLElement|null>(null)
		// const divRef = ref<HTMLElement|null>(null)
		// console.log('divRef',divRef)
		onMounted(()=>{
			inputRef.value && inputRef.value.focus()
		})
		// 自定义Hook函数 === vue2.0 混合函数一样效果
		// toRefs 可以把reaactive 对象转化为 ref 对象 如果本身是ref 不会有任何报错 ，在return 中 使用省略运算符，这样就不需要合成代码{a，b} = {...}
		const start = toRefs(Address<IAddress[]>('/data/address.json'))
		return {
			...start,
			inputRef
		}
	}
});
</script>

<style></style>
