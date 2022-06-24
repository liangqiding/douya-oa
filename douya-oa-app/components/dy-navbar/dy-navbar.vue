<template>
	<view>
		<u-navbar :is-back="isBack" :title="title" :isReturn="isReturn">
			<view slot="left">
				<u-icon v-show="isReturn" @click="returnClick" name="arrow-left" size="20"></u-icon>
				<u-icon v-show="!isReturn" name="more-dot-fill" size="20"></u-icon>
			</view>
			<view slot="right" class="u-nav-slot">
				<u-icon name="search" size="20" style="margin-right: 10px;"></u-icon>
				<u-icon name="plus" size="20"></u-icon>
			</view>
		</u-navbar>

	</view>
</template>

<script>
	export default {
		props: {
			title: {
				default: "",
				type: String
			},
			isBack: {
				default: false,
				type: Boolean
			},
			isReturn: {
				default: true,
				type: Boolean
			}
		},
		data() {
			return {

			}
		},
		mounted() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		methods: {
			returnClick() {
             uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss">
	.u-nav-slot {
		@include flex;
		align-items: center;
		justify-content: space-between;
		border-width: 0.5px;
		border-radius: 100px;
		border-color: $u-border-color;
		padding: 3px 7px;
		opacity: 1;
	}
</style>
