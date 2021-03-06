# minapp

**重新定义微信小程序的开发**

## 使用

1. 用 npm 安装命令行工具： `npm install -g @minapp/cli`
2. 初始化项目：`minapp init <你要创建项目的文件夹>` (同时支持创建 js 和 ts 项目)
3. 安装两个 vscode 插件：[minapp][vscode-minapp] 和 [dot-template][vscode-dot-template]（可选，但建议安装）

## 功能概览（在 vscode 编辑器下）

### wx 所有接口都有智能的提醒，同时包括接口的参数，和返回值

![wx接口示例](https://n1image.hjfile.cn/res7/2018/03/01/428c4297bb1f6b6cf335317f89bab237.gif)

### 提供一个 promise 版的 wx 接口 wxp，和 wx 一样，只是它会将 wx 中所有需要 success/fail/complete 三个参数的函数 promise 化
  - wxp 中也支持使用 success 回调
  - wxp 给 Promise 添加了一个 finally 方法；如，你可以这样用 `wxp.getUserInfo().finally(() => { /* do something */ })`

![wxp示例](https://n1image.hjfile.cn/res7/2018/03/01/a8ccc97ac7146b81e080daf8eb778b4d.gif)

### 集成 mobx，可以非常方便的修改全局数据，并自动更新当前页面状态
  - 注入 Store 只需要在 appify 函数中添加 Store 对象即可
  - Page 和 Component 中都默认注入了 Store 对象，你可以使用 `this.store` 获取

![mobx](https://n1image.hjfile.cn/res7/2018/03/01/beaf3616dc87b851156fe107e79deff9.gif)


### wxml 模板语言支持语法高亮，组件智能提示，组件属性智能提示（需要安装 vscode 插件 [minapp][vscode-minapp]）

![wxml](https://n1image.hjfile.cn/res7/2018/03/01/13631761451ae134c6eb3ea2ed1a6a12.gif)

### json 文件支持自动提示

![json](https://n1image.hjfile.cn/res7/2018/03/01/ee0ec301194156469cfe5533a2008d04.gif)

### 新建一个 page 文件夹时，自动生成相关文件（需要安装 vscode 插件 [dot-template][vscode-dot-template]）
  - 自动为你创建相关的同名的文件，包括 js/json/wxml/scss，并且这些模板文件你可以随时在 .dtpl 文件夹下修改
  - 自动将新建的 page 路径注入到 app.json 文件夹中

![新建 Page 示例](https://n1image.hjfile.cn/res7/2018/03/01/8dc5a66a33857c2cfb16353727d15f41.gif)

### 小程序 Page 中支持函数自动提示

![Page 中的函数自动提示示例](https://n1image.hjfile.cn/res7/2018/03/01/18702b10498aee7ddc394eb04a703a43.gif)

### 同理，新建组件文件夹时，也会创建相关的文件；同时组件中的生命周期函数也会自动提示

![Component 示例](https://n1image.hjfile.cn/res7/2018/03/01/5ad639730bee6eea44d93a22edfc8921.gif)


## 关于此仓库说明

这不是一个项目，是有好几个项目组合而成的，用的是 [lerna](https://github.com/lerna/lerna) 开发工具，其它项目在 [packages 目录下](./packages/)，这里对其中的几个主要项目做个简要概述

* [minapp-generator][minapp-generator]: 此模块负责解析微信官方文档，生成结构化的数据，供其它模块使用
* [minapp-core][minapp-core]: 微信所有原生 api 的 TypeScript 定义，另外提供一个 promise 版的 wx 接口
* [minapp-mobx][minapp-mobx]: 开发框架，集成 mobx
* [minapp-compiler][minapp-compiler]: 一个小程序的编译器，集成 webpack 和 webpack-dev-server
* [minapp-webpack-utils][minapp-webpack-utils]: 编译器中需要使用的 webpack 相关的插件
* [minapp-cli][minapp-cli]: 提供给用户的命令行工具，集成了 minapp-compiler，并可以快速创建一个新项目
* [minapp-vscode][minapp-vscode]: vscode 插件，为wxml提供语法高亮、标签与属性的自动补全

## TODO

* [ ] 小程序中的静态资源自动上传到 七牛 (完成我的 file-uploader 组件)
* [ ] 实现类似于 vue 的功能，可以将所有文件写在一个页面上
* [ ] webpack 升级到 4.0
* [ ] 写一个小程序的自动化测试框架
* [ ] 自定义组件支持智能提示(需要修改 minapp-vscode 插件)


[vscode-minapp]: https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode
[vscode-dot-template]: https://marketplace.visualstudio.com/items?itemName=qiu8310.dot-template-vscode
[minapp-generator]: ./packages/minapp-generator
[minapp-core]: ./packages/minapp-core
[minapp-mobx]: ./packages/minapp-mobx
[minapp-wxml-parser]: ./packages/minapp-wxml-parser
[minapp-webpack-utils]: ./packages/minapp-webpack-utils
[minapp-compiler]: ./packages/minapp-compiler
[minapp-cli]: ./packages/minapp-cli
[minapp-example-ts]: ./packages/minapp-example-ts
[minapp-example-js]: ./packages/minapp-example-js
[minapp-vscode]: ./packages/minapp-vscode
