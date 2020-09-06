(this.webpackJsonp16puzzle=this.webpackJsonp16puzzle||[]).push([[0],{266:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(90),c=n.n(o),i=n(3),l=n.n(i),s=(n(97),n(24)),u=n.n(s),m=n(54),v=n(15),f=n(16),h=n(18),p=n(17);var d=function(e){var t=e.id;return r.a.createElement("div",{className:"board-cell",id:t},t)};var b,g=function(e){for(var t=e.n,n=e.arr,a={gridTemplateColumns:"1fr ".repeat(t)},o=[],c=0;c<t;c++)for(var i=0;i<t;i++)o.push(r.a.createElement(d,{key:n[c][i],id:n[c][i]}));return r.a.createElement("main",{className:"board",style:a}," ",o," ")},E=37,k=38,w=39,y=40,C=function(e){var t=new Array(e*e).fill(0).map((function(e,t){return t}));!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}}(t);for(var n,a,r=[];t.length;)r.push(t.splice(0,e));t=r;for(var o=0;o<e;o++)for(var c=0;c<e;c++)0===t[o][c]&&(n=o,a=c);var i=t[0][0];return t[0][0]=t[n][a],t[n][a]=i,function(e){for(var t=0,n=e.length,a=0;a<n*n;a++){var r=[Math.floor(a/n),a%n],o=r[0],c=r[1],i=e[o][c];if(0!==i)for(var l=a+1;l<n*n;l++){var s=[Math.floor(l/n),l%n],u=s[1],m=e[s[0]][u];0!==m&&(i>m&&t++)}else t+=o}return t%2===0}(t)||(i=t[0][e-1],t[0][e-1]=t[1][0],t[1][0]=i),t},x=function(e){localStorage.setItem("main-color",e),l()(":root").css("--main-color",e)},j=n(23),O=(n(99),n(91)),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={color:localStorage.getItem("main-color")},a}return Object(f.a)(n,[{key:"handleChange",value:function(e){this.setState({color:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"Change main color:",r.a.createElement(O.HuePicker,{color:this.state.color,onChange:this.handleChange.bind(this),onChangeComplete:function(e){return x(e.hex)}}))}}]),n}(a.Component),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"open",value:function(e){l()(e.target).closest(".icon-container").next(".menu").addClass("open")}},{key:"close",value:function(e){l()(e.target).closest(".menu").removeClass("open")}},{key:"render",value:function(){var e,t=this.props,a=t.name,o=t.classes;return"Menu"===a?(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null),r.a.createElement("span",{className:"desktop"},a)),e=r.a.createElement(r.a.Fragment,null,r.a.createElement(n,{name:"Start new game"}),r.a.createElement(n,{name:"Profile"}),r.a.createElement(n,{name:"Settings"}))):"Start new game"===a?e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Game 1"),r.a.createElement("div",null,"Game 2"),r.a.createElement("div",null,"Game 3")):"Settings"===a&&(e=r.a.createElement(S,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"icon-container ".concat(o),onClick:this.open,onTouchEndCapture:this.open},a),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"icon-container",onClick:this.close,onTouchEndCapture:this.close},r.a.createElement(j.b,null)," Close"),r.a.createElement("div",{className:"menu-list"},e)))}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(v.a)(this,n);var r=(a=t.call(this,e)).props.n,o=C(r);return b=o.map((function(e){return e.slice()})),a.state={n:r,arr:o,emptyCell:{x:0,y:0},moves:0},l()(document).keydown(function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.move(t.which);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n,a,r,o,c,i,l=e,s=t||function(e){};l.addEventListener("touchstart",(function(e){e.preventDefault();var t=e.changedTouches[0];n="none",o=0,c=0,a=t.pageX,r=t.pageY,i=(new Date).getTime(),e.preventDefault()}),!1),l.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),l.addEventListener("touchend",(function(e){e.preventDefault();var t=e.changedTouches[0];o=t.pageX-a,c=t.pageY-r,(new Date).getTime()-i<=3e3&&(Math.abs(o)>=15&&Math.abs(c)<=100?n=o<0?E:w:Math.abs(c)>=15&&Math.abs(o)<=100&&(n=c<0?k:y)),s(n),e.preventDefault()}),!1)}(l()(".board")[0],this.move.bind(this))}},{key:"resetGame",value:function(e){e.preventDefault(),this.setState({arr:b.map((function(e){return e.slice()})),emptyCell:{x:0,y:0},moves:0})}},{key:"move",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,r,o,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.arr,a=this.state.emptyCell,r=a.x,o=a.y,e.prev=2,e.t0=t,e.next=e.t0===k?6:e.t0===w?15:e.t0===y?24:e.t0===E?33:42;break;case 6:if(void 0!==(c=n[r+1][o])){e.next=9;break}return e.abrupt("return");case 9:return l()("#".concat(c))[0].animate([{top:"100%"},{top:"0%"}],100),i=n[r][o],n[r][o]=n[r+1][o],n[r+1][o]=i,r++,e.abrupt("break",43);case 15:if(void 0!==(c=n[r][o-1])){e.next=18;break}return e.abrupt("return");case 18:return l()("#".concat(c))[0].animate([{left:"-100%"},{left:"0%"}],100),i=n[r][o],n[r][o]=n[r][o-1],n[r][o-1]=i,o--,e.abrupt("break",43);case 24:if(void 0!==(c=n[r-1][o])){e.next=27;break}return e.abrupt("return");case 27:return l()("#".concat(c))[0].animate([{top:"-100%"},{top:"0%"}],100),i=n[r][o],n[r][o]=n[r-1][o],n[r-1][o]=i,r--,e.abrupt("break",43);case 33:if(void 0!==(c=n[r][o+1])){e.next=36;break}return e.abrupt("return");case 36:return l()("#".concat(c))[0].animate([{left:"100%"},{left:"0%"}],100),i=n[r][o],n[r][o]=n[r][o+1],n[r][o+1]=i,o++,e.abrupt("break",43);case 42:return e.abrupt("return");case 43:e.next=49;break;case 45:return e.prev=45,e.t1=e.catch(2),console.log(e.t1),e.abrupt("return");case 49:this.setState({emptyCell:{x:r,y:o},arr:n,moves:this.state.moves+1});case 50:case"end":return e.stop()}}),e,this,[[2,45]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.moves,n=e.arr,a=e.n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"reset icon-container",onClick:this.resetGame.bind(this),onTouchEndCapture:this.resetGame.bind(this)},r.a.createElement(j.c,null),r.a.createElement("span",{className:"desktop"},"Reset game")),r.a.createElement("div",{className:"moves"},"Moves: ",t),r.a.createElement(M,{name:"Menu",classes:"menu-button"})),r.a.createElement(g,{n:a,arr:n}))}}]),n}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.$=l.a;var z=localStorage.getItem("main-color");null!==z&&z||(z="#61DAFB"),x(z),c.a.render(r.a.createElement(N,{n:4}),document.getElementById("root")),l()("#0").css({visibility:"hidden","z-index":"-1"}),function(e){if("serviceWorker"in navigator){if(new URL("/16puzzle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/16puzzle","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()},92:function(e,t,n){e.exports=n(266)},97:function(e,t,n){},99:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.da66d2b5.chunk.js.map