(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{542:function(t,e,n){"use strict";var i=n(3),l=n(1),o=n(131),s=n(59),a=n(38),h=n(23),c=n(176),r=n(79),u=n(102)("splice"),f=l.TypeError,y=Math.max,d=Math.min;i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,i,l,u,x,p,m=h(this),g=a(m),v=o(t,g),b=arguments.length;if(0===b?n=i=0:1===b?(n=0,i=g-v):(n=b-2,i=d(y(s(e),0),g-v)),g+n-i>9007199254740991)throw f("Maximum allowed length exceeded");for(l=c(m,i),u=0;u<i;u++)(x=v+u)in m&&r(l,u,m[x]);if(l.length=i,n<i){for(u=v;u<g-i;u++)p=u+n,(x=u+i)in m?m[p]=m[x]:delete m[p];for(u=g;u>g-i+n;u--)delete m[u-1]}else if(n>i)for(u=g-i;u>v;u--)p=u+n-1,(x=u+i-1)in m?m[p]=m[x]:delete m[p];for(u=0;u<n;u++)m[u+v]=arguments[u+2];return m.length=g-i+n,l}})},580:function(t,e,n){},665:function(t,e,n){"use strict";n(580)},690:function(t,e,n){"use strict";n.r(e);n(53),n(542),n(22),n(46);var i=n(36),l=n.n(i),o={props:{type:{type:String,default:""},title:{type:String,default:""},content:{type:String,default:""},blockStyle:{type:Object,default:null},titleStyle:{type:Object,default:null},contentStyle:{type:Object,default:null},changeTime:{type:String,default:"false"}},data:function(){return{boxx:{},class_boxx:"",list:a,type_boxx_list:s,show_content:!0,show_title:!0,style_boxx:{},style_title:{},style_content:{},interval:{},maxListCount:10,minListCount:5}},mounted:function(){var t=this,e=0,n=null,i=function(){e++<t.maxListCount?t.getOnlineContent((function(e,i){!t.boxx.content&&i>0&&(t.checkTitleAndContent(),t.dynamicUpdateType(t.changeTime)),i>=t.maxListCount&&clearInterval(n)})):n&&clearInterval(n)};n=setInterval((function(){i()}),1e3),this.checkStyleWithTitleAndContenAndBlock(),this.getShowType(this.type)},watch:{},methods:{getOnlineContent:function(t){this.list.length>=100||(this.list.length<this.maxListCount?this.getOnlineContentImmediately(t):t&&t(null,this.list.length))},getOnlineContentImmediately:function(t){var e=this;l.a.get("https://v1.hitokoto.cn").then((function(n){if(!(""==n.data.hitokoto||n.data.hitokoto.length>40)){var i="";null!=n.data.from_who&&(i=' • <span style=\'font-family:\'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif\' \n\t\t\t\t\t\tfont-size: 13px;\'>'+n.data.from_who+"</span>");var l={title:n.data.from+i,content:n.data.hitokoto};e.list.push(l),t&&t(l,e.list.length),e.list.length<=1&&e.getBoxx()}}))},getShowType:function(t){for(var e=0,n=s.length;e<n;++e)if(t==s[e].type)return void(this.class_boxx=s[e].class);this.class_boxx=s[0].class},getBoxx:function(){if(a.length>0){var t=Math.floor(Math.random()*a.length);this.boxx=a[t],a.length>this.minListCount&&a.splice(t,1)}return this.boxx},checkTitleAndContent:function(){return""!=this.title&&""==this.content?(this.boxx.title=this.title,void(this.show_content=!1)):""==this.title&&""!=this.content?(this.boxx.content=this.content,this.style_content={"margin-top":"1rem","margin-bottom":"0.4rem"},void(this.show_title=!1)):void(""==this.title||""==this.content?this.getBoxx():(this.boxx.title=this.title,this.boxx.content=this.content))},checkStyleWithTitleAndContenAndBlock:function(){null!=this.titleStyle&&(this.style_title=this.titleStyle),null!=this.contentStyle&&(this.style_content=this.contentStyle),null!=this.blockStyle&&(this.style_boxx=this.blockStyle)},startInterVal:function(t,e){var n=this;this.interval=setInterval((function(){++e>=s.length&&(e=0),n.getShowType(s[e].type),n.checkTitleAndContent(),n.getOnlineContent()}),t)},dynamicUpdateType:function(t){if(""!=t&&"false"!=t&&/^\d+$/.test(t)){var e=0;for(var n in s)this.type==s[n].type&&(e=n);clearInterval(this.interval),this.startInterVal(t,e)}},onClick:function(){clearInterval(this.interval),this.getOnlineContentImmediately();var t=Math.floor(Math.random()*s.length);this.getShowType(s[t].type),this.checkTitleAndContent(),this.startInterVal(this.changeTime,t)}},destroyed:function(){this.interval&&clearInterval(this.interval)}},s=[{type:"theorem",class:"theorem custom-block"}],a=[],h=o,c=(n(665),n(7)),r=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"boxx"}},[n("div",{class:t.class_boxx,style:t.style_boxx,on:{click:t.onClick}},[n("p",{staticClass:"custom-block-title",style:t.style_title,attrs:{"v-if":t.show_title},domProps:{innerHTML:t._s(t.boxx.title)}}),t._v(" "),n("p",{style:t.style_content,attrs:{"v-if":t.show_content},domProps:{innerHTML:t._s(t.boxx.content)}})])])}),[],!1,null,"724954d8",null);e.default=r.exports}}]);