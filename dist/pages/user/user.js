!function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=12)}({0:function(t,e){var i=["广丰白鹤畈车站","芦林汽车站","三官殿","洋口","昆山居","青桥","子坞","三条杠","王家山","老体育中心","上饶日报社(信江桥头)","步行街桥头","渡口(胜利桥头)","老火车站","上饶客运中心"].reverse(),a=["广丰白鹤畈车站","洋口","上饶火车站站前大道","上饶火车站(汽车东站)"].reverse(),o={sr2gf:{lineId:6,sites:i,pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.438318",longitude:"118.169977"},{latitude:"28.425603",longitude:"118.146662"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.403609",longitude:"118.093129"},{latitude:"28.404947",longitude:"118.073087"},{latitude:"28.408064",longitude:"118.060780"},{latitude:"28.411613",longitude:"118.048434"},{latitude:"28.434407",longitude:"118.012809"},{latitude:"28.452522",longitude:"117.990841"},{latitude:"28.446368",longitude:"117.981386"},{latitude:"28.447359",longitude:"117.969599"},{latitude:"28.452076",longitude:"117.966535"},{latitude:"28.460376",longitude:"117.975272"}].reverse()},gf2sr:{lineId:7,sites:["广丰白鹤畈车站","芦林汽车站","三官殿","洋口","昆山居","青桥","子坞","三条杠","王家山","老体育中心","上饶日报社(信江桥头)","步行街桥头","渡口(胜利桥头)","老火车站","上饶客运中心"],pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.438318",longitude:"118.169977"},{latitude:"28.425603",longitude:"118.146662"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.403609",longitude:"118.093129"},{latitude:"28.404947",longitude:"118.073087"},{latitude:"28.408064",longitude:"118.060780"},{latitude:"28.411613",longitude:"118.048434"},{latitude:"28.434407",longitude:"118.012809"},{latitude:"28.452522",longitude:"117.990841"},{latitude:"28.446368",longitude:"117.981386"},{latitude:"28.447359",longitude:"117.969599"},{latitude:"28.452076",longitude:"117.966535"},{latitude:"28.460376",longitude:"117.975272"}]},hcz2gf:{lineId:8,sites:a,pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.479637",longitude:"118.017419"},{latitude:"28.495167",longitude:"118.012322"}].reverse()},gf2hcz:{lineId:9,sites:["广丰白鹤畈车站","洋口","上饶火车站站前大道","上饶火车站(汽车东站)"],pois:[{latitude:"28.451060",longitude:"118.199057"},{latitude:"28.399698",longitude:"118.115525"},{latitude:"28.479637",longitude:"118.017419"},{latitude:"28.495167",longitude:"118.012322"}]}};t.exports={busLineConfig:o,resBaseUrl:"http://jxsr.36596.cn/",queryBusStr:"?c=weixin&a=ajaxlinepoi"}},12:function(t,e,i){"use strict";i.r(e);var a=i(0),o=i(13),s=null;Page({onLoad:function(){this.setData({busLineConfig:a.busLineConfig}),s=new o.AMapWX({key:"89000f1de7d62a446cc0652aa21715dd"})},onShow:function(){this.getPolyline()},data:{busLineConfig:{},currentBusLine:"gf2sr",markers:[{iconPath:"../../static/img/map/map.png",id:0,latitude:39.989643,longitude:116.481028,width:32,height:32},{iconPath:"../../static/img/map/map.png",id:0,latitude:39.90816,longitude:116.434446,width:32,height:32}],polyline:[]},getPolyline:function(){var t=this,e=a.busLineConfig[this.data.currentBusLine].pois,i=e[0].longitude+","+e[0].latitude,o=e[e.length-1].longitude+","+e[e.length-1].latitude;s.getDrivingRoute({origin:i,destination:o,success:function(e){console.log(e);var i=[];if(e.paths&&e.paths[0]&&e.paths[0].steps)for(var a=e.paths[0].steps,o=0;o<a.length;o++)for(var s=a[o].polyline.split(";"),n=0;n<s.length;n++)i.push({longitude:parseFloat(s[n].split(",")[0]),latitude:parseFloat(s[n].split(",")[1])});t.setData({polyline:[{points:i,color:"#0091ff",width:6}]}),e.paths[0]&&e.paths[0].distance&&t.setData({distance:e.paths[0].distance+"米"}),e.taxi_cost&&t.setData({cost:"打车约"+parseInt(e.taxi_cost)+"元"})},fail:function(t){}})},navigatorTo:function(t){var e=t.currentTarget.dataset.url;wx.navigateTo({url:e})}})},13:function(t,e){function i(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}i.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var i=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:i}),e(i)},fail:function(i){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:i.errMsg||""})}})},i.prototype.getRegeo=function(t){function e(e){var a=i.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:e,extensions:"all",s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var a,o,s,n,r,d,u,l,c;i.data.status&&"1"==i.data.status?(o=(a=i.data.regeocode).addressComponent,s=[],n="",a&&a.roads[0]&&a.roads[0].name&&(n=a.roads[0].name+"附近"),r=e.split(",")[0],d=e.split(",")[1],a.pois&&a.pois[0]&&(n=a.pois[0].name+"附近",(u=a.pois[0].location)&&(r=parseFloat(u.split(",")[0]),d=parseFloat(u.split(",")[1]))),o.provice&&s.push(o.provice),o.city&&s.push(o.city),o.district&&s.push(o.district),o.streetNumber&&o.streetNumber.street&&o.streetNumber.number?(s.push(o.streetNumber.street),s.push(o.streetNumber.number)):(l="",a&&a.roads[0]&&a.roads[0].name&&(l=a.roads[0].name),s.push(l)),s=s.join(""),c=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:s,desc:n,longitude:r,latitude:d,id:0,regeocodeData:a}],t.success(c)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},i.prototype.getWeather=function(t){function e(e){var i="base";t.type&&"forecast"==t.type&&(i="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:a.key,city:e,extensions:i,s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var i,a;e.data.status&&"1"==e.data.status?e.data.lives?(i=e.data.lives)&&i.length>0&&((a=function(t){return{city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}}}(i=i[0])).liveData=i,t.success(a)):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function i(i){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:i,extensions:"all",s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var a,o;i.data.status&&"1"==i.data.status?((o=i.data.regeocode).addressComponent?a=o.addressComponent.adcode:o.aois&&o.aois.length>0&&(a=o.aois[0].adcode),e(a)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,o=a.requestConfig;t.city?e(t.city):a.getWxLocation(t,function(t){i(t)})},i.prototype.getPoiAround=function(t){function e(e){var o={key:i.key,location:e,s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion};t.querytypes&&(o.types=t.querytypes),t.querykeywords&&(o.keywords=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){var i,a,o,s;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(i=[],a=0;a<e.pois.length;a++)o=0==a?t.iconPathSelected:t.iconPath,i.push({latitude:parseFloat(e.pois[a].location.split(",")[1]),longitude:parseFloat(e.pois[a].location.split(",")[0]),iconPath:o,width:22,height:32,id:a,name:e.pois[a].name,address:e.pois[a].address});s={markers:i,poisData:e.pois},t.success(s)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this,a=i.requestConfig;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},i.prototype.getStaticmap=function(t){function e(e){o.push("location="+e),t.zoom&&o.push("zoom="+t.zoom),t.size&&o.push("size="+t.size),t.scale&&o.push("scale="+t.scale),t.markers&&o.push("markers="+t.markers),t.labels&&o.push("labels="+t.labels),t.paths&&o.push("paths="+t.paths),t.traffic&&o.push("traffic="+t.traffic);var i=s+o.join("&");t.success({url:i})}var i,a=this,o=[],s="https://restapi.amap.com/v3/staticmap?";o.push("key="+a.key),i=a.requestConfig,o.push("s="+i.s),o.push("platform="+i.platform),o.push("appname="+i.appname),o.push("sdkversion="+i.sdkversion),o.push("logversion="+i.logversion),t.location?e(t.location):a.getWxLocation(t,function(t){e(t)})},i.prototype.getInputtips=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.location&&(a.location=t.location),t.keywords&&(a.keywords=t.keywords),t.type&&(a.type=t.type),t.city&&(a.city=t.city),t.citylimit&&(a.citylimit=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},i.prototype.getDrivingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),t.strategy&&(a.strategy=t.strategy),t.waypoints&&(a.waypoints=t.waypoints),t.avoidpolygons&&(a.avoidpolygons=t.avoidpolygons),t.avoidroad&&(a.avoidroad=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},i.prototype.getWalkingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},i.prototype.getTransitRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),t.strategy&&(a.strategy=t.strategy),t.city&&(a.city=t.city),t.cityd&&(a.cityd=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var i=e.data.route;t.success({distance:i.distance||"",taxi_cost:i.taxi_cost||"",transits:i.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},i.prototype.getRidingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=i}});