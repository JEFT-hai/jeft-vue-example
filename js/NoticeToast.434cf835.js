(window.webpackJsonp=window.webpackJsonp||[]).push([["NoticeToast"],{dc55:function(t,s,o){"use strict";o.r(s);var e={name:"",data:function(){return{show:!0,items:[{message:"1发布了..."},{message:"2发布了"},{message:"3获得了..."}]}},components:{},mounted:function(){this.$noticeToast({show:!0,items:this.items,basePosition:"right",top:60})},beforeDestroy:function(){this.$noticeToast({show:!1}),this.show=!1},methods:{goBack:function(){history.back()}}},i=o("2877"),a=Object(i.a)(e,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"noticeToast page"},[o("j-nav-bar",{attrs:{leftArrow:"",title:"notice-toast"},on:{"click-left":t.goBack}}),o("div",{staticClass:"main"},[o("j-notice-toast",{attrs:{show:t.show,items:t.items}}),o("j-notice-toast",{attrs:{show:t.show,type:"half",top:"200",items:t.items}})],1)],1)}),[],!1,null,null,null);s.default=a.exports}}]);