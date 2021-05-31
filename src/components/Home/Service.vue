<template lang="pug">
#Service
    mu-row( gutter )
        mu-col( 
            v-for="item in serviceArr" v-bind:key="item.title"
            class="serviceBox mediaQuery--serviceBox" 
            width="100" tablet="50" desktop="20"
        )
            div
                .imgBox
                    img( v-bind:src=" item.img " )
                h2 {{ item.title }}
                .string
                p( v-for="itemText in item.textArr" v-bind:style="{ display: 'block' }" ) {{ itemText.text }}
                .btnBox
                    mu-flat-button.demo-flat-button( label="查看详情" @click="toDetailPage( item.url )" )
</template>

<script>
export default {
    name: 'Service',
    methods: {
        // 目的: 点击'查看详情' -> 跳转到详情页
        toDetailPage(detailPageUrl) {
            // 判断跳转是否为CMMI链接
            if( detailPageUrl != 'CMMI' ) {
                location.href = '#/' + detailPageUrl
            } else {
                location.href = 'http://baike.baidu.com/link?url=fEHKyvDNi26xfAcmLZmshqPUXjv_N100RQnBraaK2ACYZnJ_My57DTN_XHER-3q9dFkSySDl4h97xgipV6hou_'
            }
        }
    },
    data() {
        return {
            serviceArr: [
                {
                    img     : require('../../assets/img/ico-tool-30-px@3x.png'),
                    title   : 'app应用',
                    url     : 'Application',
                    textArr: [
                        {
                            text: `各大主流平台Android、iOS、`
                        }, {
                            text: `WindowsPhone、HTML5`
                        }, {
                            text: `原生和混合式开发，对大数据...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-software-30-px@3x.png'),
                    title   : '大数据平台建设',
                    url     : 'BigData',
                    textArr: [
                        {
                            text: `大型分布式平台建设，`
                        }, {
                            text: `高并发应用系统架构搭建，`
                        }, {
                            text: `海量数据加工处理...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-manager-30-px@3x.png'),
                    title   : '电商网站',
                    url     : 'ECommerce',
                    textArr: [
                        {
                            text: `长期跟踪电商领域发展，`
                        }, {
                            text: `拥有多年电商系统独立开发和二开经验，`
                        }, {
                            text: `精通于B2C、B2B...`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-software-30-px@3x.png'),
                    title   : '软硬结合系统集成',
                    url     : 'SystemIntegration',
                    textArr: [
                        {
                            text: `智能硬件、物联网关键技术、`
                        }, {
                            text: `各频段RFID应用系统建设，`
                        }, {
                            text: `现已在智能家居、港口电子……`
                        }
                    ]
                }, {
                    img     : require('../../assets/img/ico-c-m-m-i-30-px@3x.png'),
                    title   : 'CMMI认证',
                    url     : 'CMMI',
                    textArr: [
                        {
                            text: `CMMI是一套融合多学科的、`
                        }, {
                            text: `可扩充的产品集合，`
                        }, {
                            text: `其研制的初步动机……`
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

#Service
    +moduleBoxStyle
    padding: 0
    +global-maxWidth
    .serviceBox
        +flexCenter
        +textCenter
        +REM( padding, $M-padding )
        +REM( margin-bottom, $M-padding )
        +bC( $F )
        >div
            .imgBox
                @extend %dib
                +REM-W-H( 30px, 30px )
                >img
                    +imgCover( 100% )
            // "查看详情" 按钮
            .demo-flat-button
                +ellipseBtn( 30px )
                width: auto
                margin: 0
                +REM-margin-TB( $M-margin )
                box-shadow: none                        // 隐藏不必要的shadow效果
                border: 1px solid rgba( $C-text, .4 )
                color: $C-text
                // hover 事件
                &:hover
                    border-color: $C-theme
                    +bC( $C-theme )
                    color: $F
                

// 媒体查询 
.mediaQuery--serviceBox
    @media only screen and ( min-width : 320px )
        >div
            >h2
                +REM-fontStyle( $F-title, $C-title )
                +REM-padding-TB( $M-contentMargin )
            .string
                +dib
                width: 30%
                +REM( height, 2px )
                +REM( margin-bottom, $M-contentMargin )
                +bC( $C-theme )
            >p
                +REM-fontStyle( $F-text, $C-text, 2.5 )
    @media only screen and ( min-width : 768px )
        height: 360px
    @media only screen and ( min-width : 1024px )
        height: 500px
        >div
            +REL
            +pT( $M-padding*2 )
            height: 100%
            >h2
                +fontStyle( $F-title, $C-title )
            .string
            >p
                +fontStyle( $F-text, $C-text, 2.5 )
            >.btnBox
                +ABS
                +flexCenter
                bottom: 0
                +W100
</style>
