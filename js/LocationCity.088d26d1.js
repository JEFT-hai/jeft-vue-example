(window.webpackJsonp=window.webpackJsonp||[]).push([["LocationCity"],{"005d":function(t,o,i){"use strict";i("713e")},"713e":function(t,o,i){},ea7c:function(t,o,i){"use strict";i.r(o);var c=i("1da1"),n=(i("96cf"),{name:"Home",components:{},data:function(){return{show:!1,city:"深圳市",show1:!1,city1:"深圳市",locationCity:"广州市",cityList:[{code:"城市列表",cityList:["深圳市","中山市","东莞市","广州市","佛山市"]}],show2:!1,city2:"深圳市",cityList2:[{code:"城市列表",cityList:["深圳市","中山市","东莞市","广州市","佛山市"],type:"tag"}]}},methods:{goBack:function(){history.back()},location:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","深圳市");case 1:case"end":return t.stop()}}),t)})))()}}}),a=n,e=(i("005d"),i("2877")),s=Object(e.a)(a,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"location page"},[i("j-nav-bar",{attrs:{leftArrow:"",title:"location-city"},on:{"click-left":t.goBack}}),i("j-location-city",{attrs:{locationCity:t.locationCity,city:t.city},on:{"update:locationCity":function(o){t.locationCity=o},"update:location-city":function(o){t.locationCity=o},"update:city":function(o){t.city=o}},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}}),i("j-location-city",{attrs:{hotCityList:[],cityList:t.cityList,locationCity:t.locationCity,location:t.location,city:t.city1},on:{"update:locationCity":function(o){t.locationCity=o},"update:location-city":function(o){t.locationCity=o},"update:city":function(o){t.city1=o}},model:{value:t.show1,callback:function(o){t.show1=o},expression:"show1"}}),i("j-location-city",{attrs:{hotCityList:[],cityList:t.cityList2,locationCity:t.locationCity,location:t.location,city:t.city2,paddingTop:30},on:{"update:locationCity":function(o){t.locationCity=o},"update:location-city":function(o){t.locationCity=o},"update:city":function(o){t.city2=o}},model:{value:t.show2,callback:function(o){t.show2=o},expression:"show2"}}),i("div",{staticClass:"main content"},[i("j-button",{style:{marginBottom:"15px"},attrs:{round:""},on:{click:function(o){t.show=!0}}},[t._v("默认城市数据-"+t._s(t.city))]),i("j-button",{style:{marginBottom:"15px"},attrs:{round:""},on:{click:function(o){t.show1=!0}}},[t._v("自定义城市参数-"+t._s(t.city1)+"-locationCity"+t._s(t.locationCity))]),i("j-button",{style:{marginBottom:"15px"},attrs:{round:""},on:{click:function(o){t.show2=!0}}},[t._v("自定义城市2-tag-参数-"+t._s(t.city2))])],1)],1)}),[],!1,null,"978cb93a",null);o.default=s.exports}}]);