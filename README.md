jd-mobile
===============

前端技术栈说明

 + vuejs 技术栈基础，mvvm框架
 + vuex 应用状态管理容器，解决组件作用域封闭问题
 + vue-router 单页面路由插件，实现组件的切换
 + axios http封装库，基于ES6简洁的api，适用于客户端和服务端
 + vux UI库
 + mockjs 基于前端的数据mock，使前端独立于后端开发
 + moment 时间处理库
 + less css预处理语言，解决css非编程语言带来的问题
 + postcss-px-to-viewport 移动端适配核心插件
 + webpack3 前端模块打包工具



## 目录结构

模板的目录结构如下：

~~~
www  WEB部署目录（或者子目录）
├─build                 打包逻辑
│  └─ ...  
├─config                打包配置
│  └─ ...  
├─src                   开发目录
│  └─ components        高度复用的组件，如input，toast，或者即使采用了第三方UI，任需要开发自定义组件
│  └─ config            开发配置文件
│  └─ plugin            Vue类的自定义拓展，包括通用的方法，过滤器，指令，Vue原型属性
│  └─ router            路由文件，处理路由权限，页面通用信息
│  └─ service           服务类，第三方服务
│  |   └─ http          基于axios的http封装，在拦截器的基础上添加令牌，网络指示器等功能
│  |   └─ mock          前端mock数据
│  |   └─ session       用户窗口信息管理
│  └─ static            静态文件
│  |   └─ less          CSS预编译文件，包括normalize,theme,border,iconfont
│  |   └─ images        图片资源
│  └─ view              app页面，基于nuxt路由标准
│  └─ vuex              应用Redux库，用户管理应用全局状态
│  |   └─ user          用户module
│  |   |   └─ actions.js          异步分发  
│  |   |   └─ module.js           模块入口 
│  |   |   └─ mutaions-types.js   mutations出口文件  
│  |   |   └─ mutations.js        同步分发    
│  |   |   └─ state.js            状态数据
│  |   └─ ...           根据业务区分的模块，
│  |   └─ index.js      vuex出口文件
│  └─ App.vue           Vue根组件
│  └─ main.js           wenpack入口文件
├─static                服务器静态目录
├─test                  单元测试
├─babelrc               babel文件
├─eslintrc.js           eslint规则文件
├─postcssrc.js          css配置规则
~~~
