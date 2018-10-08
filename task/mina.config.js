const { resolve } = require('path');
const r = url => resolve(__dirname, url);
module.exports = {
  // json字段 => app.json
  json: {
    // 主包
    pages: [
      'pages/index/index',
      'pages/map/map',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'miniBus',
      navigationBarTextStyle: 'black'
    },
    // 分包
    subPackages: [],
    // tabBar
    tabBar: {
      color: '#999',
      selectedColor: '#087b46',
      backgroundColor: '#fff',
      list: [{
        iconPath: 'static/img/wifi.png',
        selectedIconPath: 'static/img/wifi_active.png',
        pagePath: "pages/index/index",
        text: "首页"
      }, {
        iconPath: 'static/img/wifi.png',
        selectedIconPath: 'static/img/wifi_active.png',
        pagePath: "pages/map/map",
        text: "地图"
      }, {
        iconPath: 'static/img/mini.png',
        selectedIconPath: 'static/img/mini_active.png',
        pagePath: "pages/user/user",
        text: "我"
      }]
    },
  },
  // 组件
  components: [],
  // app入口文件
  app: r('../app.js')
}