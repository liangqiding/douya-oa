<template>
	<!-- 消息列表 -->
	<view>
		<!-- 自定义通知栏 -->
		<dy-navbar :title="title" :isReturn="false" />
		<view class="content">
			<uni-list v-for="(e,index) in 10" :key="index">
				<uni-list-chat clickable @click="onClick" :title="'马云小号'+e"
					avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					note="您收到一条新的消息" badge-positon="left" :badge-text="e%2==0?'33':'dot'">
					<view class="chat-custom-right">
						<text class="chat-custom-text">刚刚</text>
						<!-- 需要使用 uni-icons 请自行引入 -->
						<u-icon name="volume-off" size="20"></u-icon>
					</view>
				</uni-list-chat>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "消息",
			}
		},
		onLoad() {

		},
		methods: {
			onClick() {
				console.log("===================");
				uni.navigateTo({
					url: './chat/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		margin-top: 50px;
	}
</style>
