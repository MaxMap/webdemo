<template>
	<div id="app">
		<div id="">
			姓氏：<input type="" name="" id="" v-model="userA.firstName" />
		</div>
		<div id="">
			姓名：<input type="" name="" id="" v-model="userA.lastName" />
		</div>
		<div id="">
			监视
		</div>
		<div id="">
			姓名：<input type="" name="" id="" v-model="userB" />
		</div>
		<div id="">
			姓名：<input type="" name="" id="" v-model="userC" />
		</div>
		<div id="">
			姓名：<input type="" name="" id="" v-model="userD" />
		</div>
	</div>
	<div id="">
		<h5>watchEffect 副作用</h5>：
		<p>为了根据响应式状态自动应用和重新应用副作用，我们可以使用 watchEffect 函数。它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, watch,watchEffect} from 'vue';

export default defineComponent({
	name: 'App',
	setup(){
		const userA = reactive({
			firstName:'张',
			lastName:'三'
		})
		//computed 只传入一个回调函数代表get
		const userB = computed(()=>{
			return userA.firstName +'_'+ userA.lastName
		})
		const userC = computed({
			get(){
				return userA.firstName +'_'+ userA.lastName
			},
			set(val:string):void{
				const name = val.split('_');
				userA.firstName = name[0]
				userA.lastName = name[1]
			}
		})
		const userD = ref('')
		/* watch(userA,({firstName ,lastName})=>{
			userD.value = firstName +'_'+ lastName
		},{immediate:true}) */
		//immediate 默认执行一次
		// deep 深度执行
		// watchEffect(()=>{
		// 	// 与watch 比较会默认执行一次
		// 	userD.value = userA.firstName +'_'+ userA.lastName
		// })
		/**
		 * 监听多个数据
		 * 如果 监视reactive里的属性则为 非响应式的 需要添加回调函数
		 * 
		 */
		watch([()=>userA.firstName,()=>userA.lastName],(mews)=>{
			console.log(mews)
		},{immediate:true})
		return {
			userA,
			userB,
			userC,
			userD
		}
	}
});
</script>

<style></style>
