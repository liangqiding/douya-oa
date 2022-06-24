<template>
	<!-- 聊天窗口 -->
	<view class="content">
		<!-- 自定义通知栏 -->
		<dy-navbar :title="title" />
		<!-- 聊天内容 -->
		<mescroll-body ref="mescrollRef" bottom="20%" @init="mescrollInit" :down="downOption" @down="downCallback"
			:up="upOption">
			<!-- 无更多消息 -->
			<view v-if="isEnd" class="msg-end">没有更多消息了</view>

			<!-- 消息列表 (必须配置id,以便定位) -->
			<view class="msg" v-for="msg in msgList" :key="msg.id" :id="msg.VIEW_ID"
				:class="[msg.id%2==0 ? 'right' : 'left']">
				<view class="msg-warp">
					<view class="msg-title">{{msg.title}}</view>
					<view class="msg-content">{{msg.content}}</view>
				</view>
			</view>
		</mescroll-body>
		<!-- 底部发送框 -->
		<view class="send-body">
			<image class="dy-icon" src="../../../static/page/message/chat/voice.png" />
			<u--input placeholder="请输入内容" border="surround" clearable></u--input>
			<image class="dy-icon" src="../../../static/page/message/chat/expression.png" />
			<image class="dy-icon" src="../../../static/page/message/chat/add.png" />
		</view>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import {
		apiMsgList
	} from "@/api/mock/mock.js"
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		data() {
			return {
				title: "马云",
				downOption: {
					autoShowLoading: true, // 显示下拉刷新的进度条
					textColor: "#FF8095" // 下拉刷新的文本颜色
				},
				upOption: {
					use: false, // 禁止上拉
					toTop: {
						src: '' // 不显示回到顶部按钮
					}
				},
				pageNum: 1, // 页码
				pageSize: 10, // 页长
				isEnd: false, // 是否无消息
				msgList: []
			}
		},
		methods: {
			/*下拉刷新的回调 */
			downCallback() {
				// 联网加载数据
				apiMsgList(this.pageNum, this.pageSize).then(data => {
					// 需自行维护页码
					this.pageNum++;
					// 先隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					// 不满一页,说明已经无更多消息 (建议根据您实际接口返回的总页码数,总消息量,是否有消息的字段来判断)
					if (data.length < this.pageSize) {
						this.isEnd = true; // 标记已无更多消息
						this.mescroll.lockDownScroll(true); // 锁定下拉
					}
					// 生成VIEW_ID,大写,避免污染源数据
					data.forEach(val => {
						val.VIEW_ID = "msg" + val.id // 不以数字开头
					})

					// 获取当前最顶部的VIEW_ID (注意是写在data.concat前面)
					let topMsg = this.msgList[0]

					//设置列表数据
					this.msgList = data.concat(this.msgList); // 注意不是this.msgList.concat

					this.$nextTick(() => {
						if (this.pageNum <= 2) {
							// 第一页直接滚动到底部 ( this.pageNum已在前面加1 )
							this.mescroll.scrollTo(99999, 0)
						} else if (topMsg) {
							// 保持顶部消息的位置
							let view = uni.createSelectorQuery().select('#' + topMsg.VIEW_ID);
							view.boundingClientRect(v => {
								console.log("节点离页面顶部的距离=" + v.top);
								this.mescroll.scrollTo(v.top - 100, 0) // 减去上偏移量100
							}).exec();
						}
					})

				}).catch(() => {
					this.pageNum--; // 联网失败,必须回减页码
					this.mescroll.endErr(); // 隐藏下拉刷新的状态
				})
			}
		}
	}
</script>

<style lang="scss">
	.send-body {
		position: fixed;
		bottom: 0px;
		display: flex;
		background-color: #f3f3f3;
		width: 100%;
		height: 40px;
		padding: 5px;
		z-index: 999;
	}

	/* 图片icon 大小控制 */
	.dy-icon {
		margin: 0 5px 0 5px;
		height: 40px;
		width: 40px;
	}

	/* 无更多消息 */
	.msg-end {
		padding: 40rpx 0;
		font-size: 24rpx;
		text-align: center;
		color: #FF8095;
	}

	/*消息列表*/
	.msg {
		margin: 30rpx;

		&.right {
			text-align: right;
		}

		&.left {
			text-align: left;
		}

		.msg-warp {
			width: 50%;
			display: inline-block;
			padding: 30rpx;
			border-radius: 30rpx;
			background-color: #FF8095;
			color: #fff;

			.msg-title {
				margin-left: -12rpx;
				font-size: 32rpx;
				text-align: left;
			}

			.msg-content {
				font-size: 26rpx;
				margin-top: 10rpx;
				text-align: left;
			}
		}
	}
</style>
