(function(){"use strict";var e={5643:function(e,t,n){var o=n(9242),r=n(3396);const a=(0,r._)("div",{class:"footer"},[(0,r._)("h3",{style:{"margin-top":"40px"}},"design by Doudou")],-1);function u(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(o),a],64)}var l=n(89);const i={},d=(0,l.Z)(i,[["render",u]]);var s=d,c=n(2483),g=n(7139),p=n.p+"img/logo.edddc8db.png";const v=e=>((0,r.dD)("data-v-3dac6ed2"),e=e(),(0,r.Cn)(),e),f={class:"home"},m=v((()=>(0,r._)("div",{class:"logo"},[(0,r._)("div",{class:"filter"}),(0,r._)("img",{alt:"Vue logo",src:p})],-1))),h={preload:""},b=["src"],y={class:"songName",style:{"margin-top":"50px"}},k={class:"tool"},_={class:"songList"},w=v((()=>(0,r._)("h2",null,"歌曲库",-1))),j=["value"],S=v((()=>(0,r._)("div",{class:"buttom"},null,-1)));function x(e,t,n,o,a,u){return(0,r.wg)(),(0,r.iD)("div",f,[m,(0,r._)("audio",h,[(0,r._)("source",{src:u.songName()[a.num].addr,type:"audio/mp3"},null,8,b)]),(0,r._)("p",y,(0,g.zw)(u.songName()[a.num].addr.match(this.reg)[0]),1),(0,r._)("div",k,[(0,r._)("div",{class:"previous",onClick:t[0]||(t[0]=e=>u.previous())}),(0,r._)("button",{onClick:t[1]||(t[1]=e=>u.run()),class:"playBtn"}),(0,r._)("div",{class:"nextSong",onClick:t[2]||(t[2]=e=>u.nextSong())})]),(0,r._)("div",_,[w,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.songName(),((e,t)=>((0,r.wg)(),(0,r.iD)("p",{key:t,style:{"margin-top":"20px"}},[(0,r._)("span",{value:e.addr.match(this.reg)[0]},(0,g.zw)(e.addr.match(this.reg)[0]),9,j)])))),128))]),S])}const C={class:"hello"},O=(0,r.uE)('<p data-v-1dfc7223> For a guide and recipes on how to configure / customize this project,<br data-v-1dfc7223> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-cli documentation</a>. </p><h3 data-v-1dfc7223>Installed CLI Plugins</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1dfc7223>babel</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1dfc7223>router</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li></ul><h3 data-v-1dfc7223>Essential Links</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Core Docs</a></li><li data-v-1dfc7223><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Forum</a></li><li data-v-1dfc7223><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Community Chat</a></li><li data-v-1dfc7223><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1dfc7223>Twitter</a></li><li data-v-1dfc7223><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>News</a></li></ul><h3 data-v-1dfc7223>Ecosystem</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-router</a></li><li data-v-1dfc7223><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1dfc7223>vue-devtools</a></li><li data-v-1dfc7223><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-loader</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1dfc7223>awesome-vue</a></li></ul>',7);function N(e,t,n,o,a,u){return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("h1",null,(0,g.zw)(n.msg),1),O])}var P={name:"HelloWorld",props:{msg:String}};const T=(0,l.Z)(P,[["render",N],["__scopeId","data-v-1dfc7223"]]);var q=T,z={song:[{addr:"./song/周杰伦-英雄.mp3"},{addr:"./song/周杰伦-稻香.mp3"},{addr:"./song/周杰伦-爷爷泡的茶.mp3"},{addr:"./song/杨瑞代-爱的飞行日记.mp3"},{addr:"./song/宋健彰-枫 + 退后 + 搁浅.mp3"},{addr:"./song/周杰伦-青花瓷.mp3"},{addr:"./song/周杰伦-鞋子特大号.mp3"},{addr:"./song/周杰伦-说走就走.mp3"},{addr:"./song/周杰伦-七里香.mp3"},{addr:"./song/周杰伦-告白气球.mp3"},{addr:"./song/周杰伦-半岛铁盒.mp3"},{addr:"./song/周杰伦-双节棍.mp3"},{addr:"./song/周杰伦-告白气球.mp3"},{addr:"./song/周杰伦-床边故事.mp3"},{addr:"./song/周杰伦-土耳其冰淇淋.mp3"},{addr:"./song/周杰伦-夜曲 + 窃爱.mp3"},{addr:"./song/周杰伦-美人鱼.mp3"},{addr:"./song/周杰伦-爸 我回来了.mp3"},{addr:"./song/周杰伦-我要夏天 (with派伟俊).mp3"},{addr:"./song/周杰伦-大笨钟 + 暗号 + 彩虹 + 龙卷风.mp3"}]},A={name:"HomeView",components:{HelloWorld:q},data(){return{num:0,flagclick:0,reg:/(?<=\/song\/).*?(?=.mp3)/}},methods:{runUltil(){var e=document.querySelector("audio"),t=document.querySelector(".logo");t.style.animationPlayState="running",e.load(),e.play();var n=document.querySelector(".playBtn");n.style.background="url(./img/暂停.png) no-repeat",n.style.backgroundSize="50%",n.style.backgroundPosition="50% 50%",this.flagclick=1;var o=document.querySelector(".songName"),r=document.querySelectorAll(".songList>p>span");setTimeout((()=>{for(var e=0;e<r.length;e++)r[e].getAttribute("value")===o.innerHTML?r[e].style.color="red":r[e].style.color=""}),300)},run(){for(var e=document.querySelector(".songName"),t=document.querySelectorAll(".songList>p>span"),n=document.querySelector(".logo"),o=document.querySelector("audio"),r=document.querySelector(".playBtn"),a=0;a<t.length;a++)t[a].getAttribute("value")===e.innerHTML?t[a].style.color="red":t[a].style.color="";this.flagclick%2==0?(n.style.animationPlayState="running",o.play(),this.flagclick++,r.style.background="url(./img/暂停.png) no-repeat",r.style.backgroundSize="50%",r.style.backgroundPosition="50% 50%"):(n.style.animationPlayState="paused",o.pause(),this.flagclick++,r.style.background="url(./img/播放2.png) no-repeat",r.style.backgroundSize="50%",r.style.backgroundPosition="50% 50%")},nextSong(){this.num==this.songName().length-1?(this.num=0,this.runUltil()):(this.num++,this.runUltil())},previous(){this.num<=0?(this.num=this.songName().length-1,this.runUltil()):(this.num--,this.runUltil())},songName(){return z.song}},mounted(){},computed:{}};const E=(0,l.Z)(A,[["render",x],["__scopeId","data-v-3dac6ed2"]]);var L=E;const D=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],H=(0,c.p7)({history:(0,c.r5)(""),routes:D});var U=H,M=n(65),W=(0,M.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(s).use(W).use(U).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<u&&(u=a));if(l){e.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.1c3ee34d.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="zhoujielun:";n.l=function(o,r,a,u){if(e[o])e[o].push(r);else{var l,i;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+a){l=c;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var g=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var u=n.p+n.u(t),l=new Error,i=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",l.name="ChunkLoadError",l.type=a,l.request=u,r[1](l)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,u=o[0],l=o[1],i=o[2],d=0;if(u.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var s=i(n)}for(t&&t(o);d<u.length;d++)a=u[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkzhoujielun"]=self["webpackChunkzhoujielun"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5643)}));o=n.O(o)})();
//# sourceMappingURL=app.9462fa10.js.map