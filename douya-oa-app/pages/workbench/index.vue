<template>
	<!-- 工作台 -->
	<view>
		<!-- 自定义通知栏 -->
		<dy-navbar :title="title" />

		<u-divider text="流程中心"></u-divider>
		<u-grid :border="false" @click="gridClick" :col="4">
			<u-grid-item v-for="(item,index) in baseList" :key="index" style="margin-top: 20px;">
				<u-avatar :src="item.image" shape="square"></u-avatar>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-divider text="活动中心"></u-divider>
		<u-grid :border="false" @click="gridClick" :col="4">
			<u-grid-item v-for="(item,index) in baseList" :key="index" style="margin-top: 20px;">
				<u-avatar :src="item.image" shape="square"></u-avatar>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "工作台",
				baseList: [{
						image: '../../static/page/workbench/new.png',
						title: '新建流程'
					},
					{
						image: '../../static/page/workbench/todos.png',
						title: '待办事宜'
					},
					{
						image: '../../static/page/workbench/done.png',
						title: '已办事宜'
					}, {
						image: '../../static/page/workbench/requested.png',
						title: '我的请求'
					},
					{
						image: '../../static/page/workbench/finish.png',
						title: '办结'
					},
					{
						image: '../../static/page/workbench/carbonCopy.png',
						title: '抄送'
					},
					{
						image: '../../static/page/workbench/processAgent.png',
						title: '流程代理'
					},
					{
						image: '../../static/page/workbench/process.png',
						title: '流程中心'
					}
				]
			}
		},
		methods: {
			gridClick(e) {
				console.log("点击了", e);
			}
		}
	}
</script>

<style>

</style>
