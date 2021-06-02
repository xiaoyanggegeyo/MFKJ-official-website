# 贵州玛峰科技 官网

## 使用技术:
| 技术名称                                                      | 作用                         |  版本  |
| --------                                                      | -----:                      | :----:  |
| [Vuejs](http://cn.vuejs.org/)                                 | 框架                        |   2.2.2     |
| [Vue-Router](http://router.vuejs.org/zh-cn/)                  | Vue路由                     |  2.3.0 |
| [Vuex](https://vuex.vuejs.org/zh-cn/)                         | Vue状态管理                 |  2.2.1 |
| [Muse UI](https://museui.github.io/#/index)                   | UI框架                      |  2.0.0-rc.5  |
| [Pug](https://pugjs.org/zh-cn/api/getting-started.html)       | Node模版                    |  2.0.0-beta11  |
| [Sass](http://www.sass-zh.com/)                               | 样式预处理器( node-sass )   |  4.5.1  |
| [Webpack](http://webpackdoc.com/)                             | 模块打包                    |  2.2.1  |
| [Gulp](http://www.gulpjs.com.cn/)                             | 自动构建( 压缩图片 )         |  3.9.1  |

## Build Setup / 开发流程

``` bash
# install dependencies
npm install

# 国内环境建议使用cnpm install
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

***

## **Shangchao-Website优化**
- [ ]  需要优化`Team`组件内的图片样式, 改用`flex`方式
- [x]  PC版本, `header`头部选中下划线 要在底部, 更改样式效果( 增粗. 更清晰 )
- [x]  手机版本, `header`头部不需要 `shadow`效果
- [x]  '招贤纳士' 文字大小样式需要统一, 只有标题需要大字体, 其他皆为统一字体大小
- [x]  整体页面字体保持'微软雅黑'字体( 不做系统判断 )
- [x]  偶尔`首页` 顶部导航点击事件 失效( 偶尔能实现 )
- [x]  跳转路由时, 保存跳转前的位置信息
- [ ]  用'Font Awesome' 替换 'Material-icons' ( FA字体库的样式更多 )
- [ ]  当从'电商'详情页 返回首页时 总是跳到首页地图位置( 其他页面无此问题 )
- [x]  添加 '1024px'像素 页面适配 —— 适配 iPad Pro页面
- [x]  优化 'APP'详情页 - '六大服务' 文字样式( 移动端 )
- [ ]  移动端下, 大部分详情页返回首页出现跳转错误( 跳到页面底部 )
- [ ]  使用[滚动到元素的VueJS指令 - 屏幕滚动插件](https://github.com/rigor789/vue-scrollTo), 添加一个'回到顶部'的功能键
- [ ]  使用[图片懒加载插件](https://github.com/JALBAA/vue-lazyload-img)
- [ ]  添加'联系电话'的浮动按钮, 触发事件 -> 展示联系电话
- [ ]  将首页 - '服务简介' 模块的桌面样式  添加参考图( 修改展示样式为 表格下展示 )
- [ ]  光纤环境下 - 加载速度已到**11m**, 须做图片优化 与 性能优化

***

## **优化修改记录**

* 2017.3.31
    > 修复移动端 系统文字禁止放大问题( 未测试 ) —— 小米手机 系统文字放大造成页面结构错误, 字体超出结构
    >
    > 优化头部`meta`标签 - 已加注释说明
    >
    > 添加离线情况下的网页图标 - 改为'上朝科技'正式图标; 删除'A+office'图标
    >
    > 优化 'APP'详情页 - '六大服务' 文字样式( 移动端 )
    >
    > 重构 'ContactUs' 联系我们 组件
    >
    > 完全支持 iPad Pro的 `1024`像素效果, 并完成测试( chrome模拟 )

* 2017.4.1
    > 修复上一版本 在移动端下, 页面显示错误( 修复`meta`错误 )
    >
    > 通过[压缩网站](http://compresspng.com/zh/) 再次压缩图片( `bg.png`已压缩到极限, 无法再压缩 )

