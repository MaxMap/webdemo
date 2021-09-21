<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//defineComponent函数，目的是定义一个组件，内部可以传入配置对象
export default defineComponent({
	name: 'HelloWorld',
	// props: {
	// 	msg: String
	// },
	setup(props, context) {
		console.log('props', props);
		console.log('context', context.attrs);
		/**
		 * context.attrs 获取当前组件标签上得属性，但是该属性是在props没有声明
		 * context.emit	 方法，分发事件
		 * context.slots 插槽
		 */
		return {};
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
