(function(e){function n(n){for(var a,o,u=n[0],i=n[1],d=n[2],s=0,l=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a511e":"89a0f3f2","chunk-2d0e51e4":"2a9ff6b9","chunk-2d0f00bc":"21d491d7","chunk-3773aaec":"00b1dd2a","chunk-78475870":"fae4a91b","chunk-7e55b00b":"6b4da98b","chunk-96e8c372":"e9e7deb7","chunk-a9b1c162":"f3bb80f3","chunk-c68deb56":"98f78504","chunk-d124e618":"e6e713ce"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3773aaec":1,"chunk-78475870":1,"chunk-7e55b00b":1,"chunk-96e8c372":1,"chunk-a9b1c162":1,"chunk-c68deb56":1,"chunk-d124e618":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a511e":"31d6cfe0","chunk-2d0e51e4":"31d6cfe0","chunk-2d0f00bc":"31d6cfe0","chunk-3773aaec":"5f4faa25","chunk-78475870":"cd0495fb","chunk-7e55b00b":"2e0d2126","chunk-96e8c372":"5f4faa25","chunk-a9b1c162":"a265ec54","chunk-c68deb56":"5f4faa25","chunk-d124e618":"b7a5e816"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===a||s===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],h.parentNode.removeChild(h),t(c)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,t[1](l)}r[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var h=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),o=t("bc3a"),r=t.n(o),c=t("a7fe"),u=t.n(c),i=(t("4989"),t("9062")),d=t.n(i),s=(t("e40d"),t("7bb1")),l=t("427f"),h=t.n(l),f=t("e37d"),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),t("loading",{attrs:{active:e.isLoading},on:{"update:active":function(n){e.isLoading=n}}})],1)},m=[],b={computed:{isLoading:function(){return this.$store.state.isLoading}}},g=b,v=(t("5c0b"),t("2877")),k=Object(v["a"])(g,p,m,!1,null,null,null),y=k.exports,O=t("8c4f");a["a"].use(O["a"]);var C=new O["a"]({routes:[{path:"*",redirect:"login"},{path:"",component:function(){return t.e("chunk-7e55b00b").then(t.bind(null,"bb51"))},children:[{path:"/",name:"CustomerProducts",component:function(){return t.e("chunk-c68deb56").then(t.bind(null,"6ba7"))}},{path:"/detail/:product_id",name:"Detail",component:function(){return t.e("chunk-2d0a511e").then(t.bind(null,"08aa"))}},{path:"/customer_checkout",name:"CustomerCheckout",meta:{keepAlive:!0},component:function(){return t.e("chunk-2d0f00bc").then(t.bind(null,"9b63"))}},{path:"/payment/:orderId",name:"Payment",component:function(){return t.e("chunk-2d0e51e4").then(t.bind(null,"92b7"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-d124e618").then(t.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-a9b1c162").then(t.bind(null,"ca24"))},redirect:"/admin/products",children:[{path:"products",name:"Products",component:function(){return t.e("chunk-3773aaec").then(t.bind(null,"778a"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return t.e("chunk-96e8c372").then(t.bind(null,"447e"))}},{path:"coupons",name:"Coupons",component:function(){return t.e("chunk-78475870").then(t.bind(null,"151c"))}}]}]});a["a"].prototype.$bus=new a["a"];t("a481"),t("c5f6");var L=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var a=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))},w=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},A=(t("ac6a"),t("2f62"));a["a"].use(A["a"]);var N=new A["a"].Store({state:{isLoading:!0,cart:{carts:[]},hasCoupon:!1},actions:{updateLoading:function(e,n){e.commit("LOADING",n)},getCart:function(e){var n="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart");e.commit("LOADING",!0),r.a.get(n).then((function(n){n.data.data.carts&&e.commit("CART",n.data.data),console.log("取得購物車",n.data.data),e.commit("LOADING",!1);var t=n.data.data.carts;t.forEach((function(n){n.coupon&&e.commit("HASCOUPON",!0)}))}))},addtoCart:function(e,n){var t=n.id,a=n.qty,o="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart");e.commit("LOADING",!0);var c={product_id:t,qty:a};r.a.post(o,{data:c}).then((function(n){e.commit("LOADING",!1),e.dispatch("getCart"),console.log("加入購物車: ",n)}))},removeCart:function(e,n){var t="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart/").concat(n);e.commit("LOADING",!0),r.a.delete(t).then((function(n){e.commit("LOADING",!1),e.dispatch("getCart"),console.log("刪除購物車項目",n)}))}},mutations:{LOADING:function(e,n){e.isLoading=n},CART:function(e,n){e.cart=n},HASCOUPON:function(e,n){e.hasCoupon=n}}});a["a"].use(u.a,r.a),a["a"].use(s["a"]),a["a"].use(f["a"]),s["a"].Validator.localize("zh_TW",h.a),a["a"].config.productionTip=!1,a["a"].component("Loading",d.a),a["a"].filter("currency",L),a["a"].filter("date",w),r.a.defaults.withCredentials=!0,new a["a"]({router:C,store:N,render:function(e){return e(y)}}).$mount("#app"),C.beforeEach((function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){console.log("這裡需要驗證");var a="".concat("https://vue-course-api.herokuapp.com","/api/user/check");r.a.post(a).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var a=t("e332"),o=t.n(a);o.a},e332:function(e,n,t){}});
//# sourceMappingURL=app.659a24c2.js.map