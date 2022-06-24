<template>
	<!-- 通讯录 -->
	<view>
		<!-- 自定义通知栏 -->
		<dy-navbar :title="title" />

		<u-index-list :index-list="contactData.indexList">
			<u-cell title="新朋友">
				<u-avatar slot="icon" shape="square" size="35" src="../../static/page/contact/newFriend.png"
					customStyle="margin: -3px 5px -3px 0">
				</u-avatar>
			</u-cell>
			<u-cell title="我的群组">
				<u-avatar slot="icon" shape="square" size="35" src="../../static/page/contact/group.png"
					customStyle="margin: -3px 5px -3px 0">
				</u-avatar>
			</u-cell>
			<u-cell title="我的部门">
				<u-avatar slot="icon" shape="square" size="35" src="../../static/page/contact/dept.png"
					customStyle="margin: -3px 5px -3px 0">
				</u-avatar>
			</u-cell>
			<u-cell title="组织结构">
				<u-avatar slot="icon" shape="square" size="35" src="../../static/page/contact/structure.png"
					customStyle="margin: -3px 5px -3px 0">
				</u-avatar>
			</u-cell>
			<template v-for="(contactList, index) in contactData.dataList">
				<!-- #ifdef APP-NVUE -->
				<u-index-anchor :text="contactData.indexList[index]"></u-index-anchor>
				<!-- #endif -->
				<u-index-item>
					<!-- #ifndef APP-NVUE -->
					<u-index-anchor :text="contactData.indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<view class="list-cell" v-for="(contact, index) in contactList">
						<u-cell :title="contact.name">
							<u-avatar slot="icon" shape="square" size="35"
								src="https://cdn.uviewui.com/uview/album/1.jpg" customStyle="margin: -3px 5px -3px 0">
							</u-avatar>
						</u-cell>
					</view>
				</u-index-item>
			</template>
		</u-index-list>
	</view>
</template>

<script>
	import mockData from './mock/mockData.js'
	export default {
		data() {
			return {
				title: "通讯录",
				contactData: {
					indexList: [],
					dataList: []
				}
			}
		},
		mounted() {
			this.getMockData()
		},
		methods: {
			getMockData() {
				this.contactData = mockData.getMockData()
			}
		}
	}
</script>

<style>

</style>
