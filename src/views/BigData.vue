// '大数据平台建设'
<template lang="pug">
#BigData
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    DetailContent( v-bind:DetailContentProps="bigDataArr" )
</template>

<script>
import DetailAppBar         from '../components/common/DetailAppBar'
import DetailBanner         from '../components/common/DetailBanner'
import DetailContent        from '../components/common/DetailContent'

import { BigDataModule }    from '../assets/script/module/BigData'  
const components = { DetailAppBar, DetailBanner, DetailContent }

export default {
    name: 'BigData',
    data() {
        return {
            bannerInfo: {
                bgImg: require('../assets/img/bigData-bgbanner.jpg'),
                titleInfo: [
                    {
                        title: '千万级并发APP'
                    }, {
                        title: '亿级现金流投资平台'
                    }, {
                        title: '百亿级数据平台'
                    }
                ]
            },
            bigDataArr: BigDataModule
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'BigDate' );              // 更新 路由url状态
        this.$toDetailTop();                                // 初始页面滚动到页面顶部
    },
    components: components
}
</script>