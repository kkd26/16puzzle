(this.webpackJsonp16puzzle=this.webpackJsonp16puzzle||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=n(1),s=n.n(i),u=(n(16),n(2)),l=n.n(u),p=n(8),f=n(3),v=n(4),d=n(5),h=n(7),b=n(6),g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={x:e.x,y:e.y},r}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.num;return a.a.createElement("div",{className:"board-cell",id:e},e)}}]),n}(a.a.Component),m=37,w=38,k=39,y=40;window.$=s.a;var O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var r;Object(f.a)(this,n);var a=(r=t.call(this,e)).props.n,o=new Array(a*a).fill(0).map((function(e,t){return t}));!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(o);for(var c,i,u=[];o.length;)u.push(o.splice(0,a));o=u;for(var v=0;v<a;v++)for(var h=0;h<a;h++)0===o[v][h]&&(c=v,i=h);return r.state={n:a,arr:o,emptyCell:{x:c,y:i}},s()(document).keydown(function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.move(t.which);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(e,t){var n,r,a,o,c,i,s=e,u=t||function(e){};s.addEventListener("touchstart",(function(e){e.preventDefault();var t=e.changedTouches[0];n="none",o=0,c=0,r=t.pageX,a=t.pageY,i=(new Date).getTime(),e.preventDefault()}),!1),s.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),s.addEventListener("touchend",(function(e){e.preventDefault();var t=e.changedTouches[0];o=t.pageX-r,c=t.pageY-a,(new Date).getTime()-i<=3e3&&(Math.abs(o)>=15&&Math.abs(c)<=100?n=o<0?m:k:Math.abs(c)>=15&&Math.abs(o)<=100&&(n=c<0?w:y)),u(n),e.preventDefault()}),!1)}(document,r.move.bind(Object(d.a)(r))),r}return Object(v.a)(n,[{key:"move",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,o,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.emptyCell,r=this.state.arr,a=n.x,o=n.y,console.log(a,o),e.prev=4,e.t0=t,e.next=e.t0===w?8:e.t0===k?18:e.t0===y?27:e.t0===m?37:47;break;case 8:if(console.log("up"),void 0!==(c=r[a+1][o])){e.next=12;break}return e.abrupt("return");case 12:return s()("#".concat(c))[0].animate([{top:"100%"},{top:"0%"}],100),i=r[a][o],r[a][o]=r[a+1][o],r[a+1][o]=i,a++,e.abrupt("break",48);case 18:if(void 0!==(c=r[a][o-1])){e.next=21;break}return e.abrupt("return");case 21:return s()("#".concat(c))[0].animate([{left:"-100%"},{left:"0%"}],100),i=r[a][o],r[a][o]=r[a][o-1],r[a][o-1]=i,o--,e.abrupt("break",48);case 27:if(console.log("down"),void 0!==(c=r[a-1][o])){e.next=31;break}return e.abrupt("return");case 31:return s()("#".concat(c))[0].animate([{top:"-100%"},{top:"0%"}],100),i=r[a][o],r[a][o]=r[a-1][o],r[a-1][o]=i,a--,e.abrupt("break",48);case 37:if(console.log("left"),void 0!==(c=r[a][o+1])){e.next=41;break}return e.abrupt("return");case 41:return s()("#".concat(c))[0].animate([{left:"100%"},{left:"0%"}],100),i=r[a][o],r[a][o]=r[a][o+1],r[a][o+1]=i,o++,e.abrupt("break",48);case 47:return e.abrupt("break",48);case 48:e.next=53;break;case 50:e.prev=50,e.t1=e.catch(4),console.log(e.t1);case 53:this.setState({emptyCell:{x:a,y:o},arr:r});case 54:case"end":return e.stop()}}),e,this,[[4,50]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this.props.n,t={gridTemplateColumns:"1fr ".repeat(e)},n=this.state.arr,r=[],o=0;o<e;o++)for(var c=0;c<e;c++)r.push(a.a.createElement(g,{key:n[o][c],num:n[o][c],x:c,y:o}));return s()("#0").css("background-color","white"),a.a.createElement("div",{className:"board",style:t}," ",r," ")}}]),n}(a.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(O,{n:4}),document.getElementById("root")),s()("#0").css({visibility:"hidden","z-index":"-1"}),function(e){if(console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/16puzzle",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),"serviceWorker"in navigator){if(new URL("/16puzzle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/16puzzle","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.88723add.chunk.js.map