<template lang="pug">
    .footer
        p  贵州玛峰科技版权所有@copyRight 黔ICP备2021003717号
</template>

<style lang="sass?indentedSyntax" scoped>
@import '../../sass/main'

.footer
    +flexCenter
    width: 100%
    +REM( height, 40px )
    +bC( $C-title )
    >p
        color: rgba( $F, .6 )
</style>
