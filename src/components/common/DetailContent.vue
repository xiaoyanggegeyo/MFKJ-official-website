// 详情类 页面专用 内容渲染组件
<template lang="pug">
.detailContent( v-bind:style="{ backgroundColor: '#FFF' }" )
    .mediaQuery--detailContent( v-for="item in DetailContentProps" v-bind:key="item.title" )
        div.detailContent--box( v-if="item.imgLeft" )
            .detailContent.detailContent__img( v-bind:style="{ backgroundColor: item.backgroundColor }" )
                img( v-bind:src="item.imgUrl" )
            .detailContent__info
                h3  {{ item.title }}
                p {{ item.infoText }}
        div.detailContent--box( v-else )
            .detailContent__info
                h3 {{ item.title }}
                p {{ item.infoText }}
            .detailContent__img( v-bind:style="{ backgroundColor: item.backgroundColor }" )
                img( v-bind:src="item.imgUrl" )
</template> 

<script> 
export default {
    name: 'detailContent',
    props: ['DetailContentProps'],
    data() {
        return {}
    }
}   
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

// 模块通用混合
=module--mixins
    +dib
    +ABS
    top: 0
    height: 100%

// 组件 结构样式
.detailContent
    margin: 0 auto
    max-width: 1180px
    color: $C-base*2
    .detailContent--box
        +REL
        // 顺序不可乱
        .detailContent__info
            +flexCenter
            +module--mixins
        // 顺序不可乱
        .detailContent__img
            +module--mixins
            +flexCenter
            display: flex !important

// 媒体查询
.mediaQuery--detailContent
    @media only screen and ( min-width : 320px )
        >div
            +REM( height, 280px )
            .detailContent__img >img
                +imgCover( 100% )
            .detailContent__img
                left: 0
                width: 25%
            .detailContent__info
                right: 0
                width: 75%
                +REM-P( $M-contentMargin*2 )
                >h3
                    +fontStyle( $F-info, $C-title, 1.5 )
                    +fW( bold )
                >p
                    +fontStyle( $F-text, $C-text, 2 )
                    +textJustify
    @media only screen and ( min-width : 375px )
        >div
            +REM( height, 310px )
            .detailContent__info
                +REM-P( $M-contentMargin*2 )
                >h3
                    +fontStyle( $F-title, $C-title, 2 )
                    +fW( bold )
                >p
                    +fontStyle( $F-info, $C-text, 2 )
                    +textJustify
    @media only screen and ( min-width : 768px )
        &:nth-child( odd )
            div 
                .detailContent__img
                    left: 0
                    right: auto
                .detailContent__info
                    left: auto
                    right: 0
        &:nth-child( even )
            div 
                .detailContent__info
                    left: 0
                    right: auto
                .detailContent__img
                    left: auto
                    right: 0
        >div
            .detailContent__img, .detailContent__info
                width: 50%
            +REM( height, 270px )
            .detailContent__img >img
                +imgCover( 70% )
            .detailContent__info
                >h3
                    +fontStyle( $F-title*1.5, $C-title, 2 )
                    +fW( bold )
                >p
                    +fontStyle( $F-text*1.5, $C-text, 2 )
                    +textJustify
    @media only screen and ( min-width : 1024px )
        >div
            +REM( height, 300px )
            .detailContent__img >img
                +imgCover( 60% )
            .detailContent__info
                +REM-P( $M-contentMargin*4 )
                >h3
                    +fontStyle( $F-title*1.5, $C-title, 2 )
                >p
                    +fontStyle( $F-info, $C-text, 2 )
</style>