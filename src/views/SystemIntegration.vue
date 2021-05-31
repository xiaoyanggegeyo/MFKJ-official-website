// '系统集成'
<template lang="pug">
#System-Integration
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="systemIntegrationArr" )
</template>

<script>
import DetailAppBar                 from '../components/common/DetailAppBar'
import DetailBanner                 from '../components/common/DetailBanner'
import DetailContent                from '../components/common/DetailContent'

import { SystemIntegrationModule }  from '../assets/script/module/SystemIntegration'
const components = { DetailAppBar, DetailBanner, DetailContent }

export default {
	name: 'SystemIntegration',
	data() {
		return {
			bannerInfo: {
				bgImg: require('../assets/img/SystemIntegration.png'),
				titleInfo: [
					{
						title: '智慧物流 | 智能硬件 | 智慧城市'
					}
				]
			},
			systemIntegrationArr: SystemIntegrationModule
		}
	},
	mounted: function() {
		this.$updateViewUrlState( 'SystemIntegration' );    // 更新 路由url状态
		this.$toDetailTop();                                // 初始页面滚动到页面顶部
	},
	components: components
}
</script>
