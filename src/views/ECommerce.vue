// '电商网站'
<template lang="pug">
#ECommerce
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="eCommerceArr" )
</template>

<script>
import DetailAppBar         from '../components/common/DetailAppBar'    
import DetailBanner         from '../components/common/DetailBanner'
import DetailContent        from '../components/common/DetailContent' 

import { ECommerceModule }  from '../assets/script/module/ECommerce.js'  
const components = { DetailAppBar, DetailBanner, DetailContent }

export default {
    name: 'ECommerce',
    data() {
        return {
            bannerInfo: {
                bgImg: require('../assets/img/ECommerce-bgbanner.png'),
                titleInfo: [
                    {
                        title: '专业电商系统研发'
                    }
                ]
            },
            eCommerceArr: ECommerceModule
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'ECommerce' );            // 更新 路由url状态
        this.$toDetailTop();                                // 初始页面滚动到页面顶部
    },
    components: components
}
</script>