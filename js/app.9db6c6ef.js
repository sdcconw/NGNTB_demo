(function(t){function e(e){for(var r,a,u=e[0],i=e[1],c=e[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function u(t){return i.p+"js/"+({about:"about",qa:"qa",sample:"sample",signup:"signup",tos:"tos"}[t]||t)+"."+{about:"e4f5054b",qa:"08a3bf4d",sample:"0d29cd12",signup:"3506719b",tos:"ee1bac7c"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={qa:1,sample:1,signup:1,tos:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",qa:"qa",sample:"sample",signup:"signup",tos:"tos"}[t]||t)+"."+{about:"31d6cfe0",qa:"7387202c",sample:"a1dc5df2",signup:"fc15fb54",tos:"fc15fb54"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("1dce"),o=n.n(a),s=n("5f5b"),u=n("b1e0"),i=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)}),c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"bg-dark",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("NGN Tunnel Broker")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),n("b-nav-item",{attrs:{to:"/signup"}},[t._v("新規登録")]),n("b-nav-item",{attrs:{to:"/sample"}},[t._v("サンプルコンフィグ")]),n("b-nav-item",{attrs:{to:"/qa"}},[t._v("Q&A")]),n("b-nav-item",{attrs:{to:"/tos"}},[t._v("利用規約")]),n("b-nav-item",{attrs:{to:"/about"}},[t._v("About")])],1)],1)],1)],1)},p=[],f=n("2877"),d={},b=Object(f["a"])(d,l,p,!1,null,null,null),v=b.exports,m={name:"App",components:{Header:v}},h=m,g=(n("034f"),Object(f["a"])(h,i,c,!1,null,null,null)),N=g.exports,T=(n("d3b7"),n("8c4f")),_=n("bb51");r["default"].use(T["a"]);var y=[{path:"/",name:"Home",component:_["default"]},{path:"/signup",name:"Signup",component:function(){return n.e("signup").then(n.bind(null,"34c3"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/sample",name:"SampleConfig",component:function(){return n.e("sample").then(n.bind(null,"eb4c"))}},{path:"/qa",name:"QandA",component:function(){return n.e("qa").then(n.bind(null,"d11b"))}},{path:"/tos",name:"ToS",component:function(){return n.e("tos").then(n.bind(null,"66ce"))}}],C=new T["a"]({mode:"history",base:"/",routes:y}),E=C;r["default"].use(s["a"]),r["default"].use(u["a"]),r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:E,render:function(t){return t(N)}}).$mount("#app")},"5ced":function(t,e,n){},7130:function(t,e,n){t.exports=n.p+"img/ahiru.44a1c88f.png"},"7ad4":function(t,e,n){"use strict";var r=n("9cae"),a=n.n(r);e["default"]=a.a},"85ec":function(t,e,n){},"9cae":function(t,e){},"9f3e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("img",{attrs:{alt:"Vue logo",src:n("7130")}}),r("h1",[t._v("Welcome to NGN Tunnel Broker")]),r("h2",[t._v("「NGN Tunnel Broker」サービスを公開")]),r("hr",{staticClass:"divider"}),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h2",{staticClass:"title"},[t._v(" NTT西日本・東日本のNGN間を低遅延、高速に接続 ")]),r("p",{staticClass:"lead"},[t._v(" 島根データセンター友の会は、本日、「NGN Tunnel Broker」（https://ngntb.svrop.net/）のベータ版を提供開始しました。"),r("br"),t._v(" 本サービスをご利用いただくとこれまで相互に接続できなかったNTT西日本・東日本のフレッツ・光ネクストユーザーが本サービスに登録した場合、相互に接続できるようになります。さらに、すでにVNE事業者と契約し、網外への接続性を持つユーザーも、本サービスを経由して互いのNGN網ユーザーへ接続することができます。"),r("br"),t._v(" NTT西日本・東日本が提供する次世代ネットワークであるNGNは、東西別の閉域網となっており、互いに接続されていません。NTT西日本・東日本のフレッツ・光ネクストのユーザーが相互に接続するためには、別途VNE事業者を通して接続する必要があります。これは基本契約には含まれておらず、追加のサービスを契約する必要があります。これはいわば、NTT西日本のフレッツ提供地域と、NTT東日本のフレッツ提供地域の間に大きな壁が存在し、東西間のユーザーの通信を厳しく制限する、前時代的な仕組みです。"),r("br"),t._v(" 本サービスは、NTT西日本・東日本がそれぞれ提供するフレッツ サービスを独自の回線で接続し、ユーザー同士の通信を適切に制御することで、あたかも、秘密の高速道路を繋げたように、ユーザーの皆さまが快適にNTT西日本・東日本のNGN間を行き来することが可能となります。"),r("br"),t._v(" 本サービスは、VNE事業者と契約を結ぶ、従来のフレッツ・光ネクストユーザーにも公平制御の無いネットワーク接続性を提供いたします。それぞれ、NTT西日本・東日本のフレッツを利用するユーザーが、VNE事業者と契約し、事業者を通じて通信を行うとき、ほとんどの事業者が、公平な通信を実現するため、トラヒックの最適化を行っております。このトラヒックの最適化は、夜間等、一時的なトラヒック増に応じて、ユーザー全体が快適にネットワークを利用できるようにするために、公平制御を行うもののほかに、ユーザーごとの総通信量を監視し、一定の通信量を超過したユーザーの通信を一定期間制限する、制御を行うものもあります。"),r("br"),t._v(" 本サービスは、一般的なフレッツサービスを利用しているため、そのような制御に影響を受けません。"),r("br"),t._v(" 本サービスは、世界的に見ても大規模な巨大閉域網同士を、独自に接続することを実験目的として行っております。本サービスは、実験目的であり、完全無料、完全無保証です。"),r("br"),t._v(" 実験目的という特性上、サービス品質を保証することもできません。当団体は、本サービスを長期にわたって、提供を続けたいと考えておりますが、サービスの利用状況によっては突然サービスを終了する場合もあります。"),r("br")])]),r("div",{staticClass:"col col-lg-4"},[r("img",{staticClass:"japan",attrs:{src:n("aae3")}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h2",{staticClass:"title"},[t._v(" NTT西日本・東日本のNGN間を低遅延、高速に接続 ")]),r("p",{staticClass:"lead"},[t._v(" 島根データセンター友の会は、本日、「NGN Tunnel Broker」（https://ngntb.svrop.net/）のベータ版を提供開始しました。"),r("br"),t._v(" 本サービスをご利用いただくとこれまで相互に接続できなかったNTT西日本・東日本のフレッツ・光ネクストユーザーが本サービスに登録した場合、相互に接続できるようになります。さらに、すでにVNE事業者と契約し、網外への接続性を持つユーザーも、本サービスを経由して互いのNGN網ユーザーへ接続することができます。"),r("br"),t._v(" NTT西日本・東日本が提供する次世代ネットワークであるNGNは、東西別の閉域網となっており、互いに接続されていません。NTT西日本・東日本のフレッツ・光ネクストのユーザーが相互に接続するためには、別途VNE事業者を通して接続する必要があります。これは基本契約には含まれておらず、追加のサービスを契約する必要があります。これはいわば、NTT西日本のフレッツ提供地域と、NTT東日本のフレッツ提供地域の間に大きな壁が存在し、東西間のユーザーの通信を厳しく制限する、前時代的な仕組みです。"),r("br"),t._v(" 本サービスは、NTT西日本・東日本がそれぞれ提供するフレッツ サービスを独自の回線で接続し、ユーザー同士の通信を適切に制御することで、あたかも、秘密の高速道路を繋げたように、ユーザーの皆さまが快適にNTT西日本・東日本のNGN間を行き来することが可能となります。"),r("br"),t._v(" 本サービスは、VNE事業者と契約を結ぶ、従来のフレッツ・光ネクストユーザーにも公平制御の無いネットワーク接続性を提供いたします。それぞれ、NTT西日本・東日本のフレッツを利用するユーザーが、VNE事業者と契約し、事業者を通じて通信を行うとき、ほとんどの事業者が、公平な通信を実現するため、トラヒックの最適化を行っております。このトラヒックの最適化は、夜間等、一時的なトラヒック増に応じて、ユーザー全体が快適にネットワークを利用できるようにするために、公平制御を行うもののほかに、ユーザーごとの総通信量を監視し、一定の通信量を超過したユーザーの通信を一定期間制限する、制御を行うものもあります。"),r("br"),t._v(" 本サービスは、一般的なフレッツサービスを利用しているため、そのような制御に影響を受けません。"),r("br"),t._v(" 本サービスは、世界的に見ても大規模な巨大閉域網同士を、独自に接続することを実験目的として行っております。本サービスは、実験目的であり、完全無料、完全無保証です。"),r("br"),t._v(" 実験目的という特性上、サービス品質を保証することもできません。当団体は、本サービスを長期にわたって、提供を続けたいと考えておりますが、サービスの利用状況によっては突然サービスを終了する場合もあります。"),r("br")])]),r("div",{staticClass:"col col-lg-4"},[r("img",{staticClass:"japan",attrs:{src:n("aae3")}})])])])}]},aae3:function(t,e,n){t.exports=n.p+"img/japan.918f116c.jpg"},bb51:function(t,e,n){"use strict";var r=n("9f3e"),a=n("7ad4"),o=(n("cccb"),n("2877")),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.9db6c6ef.js.map