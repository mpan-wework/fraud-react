(this["webpackJsonp@mpan-wework/fraud"]=this["webpackJsonp@mpan-wework/fraud"]||[]).push([[0],{10:function(e,t,a){e.exports={Logo:"Logo_Logo__3GQ7S",letterG:"Logo_letterG__34UnQ",lettero1:"Logo_lettero1__1vF6g",lettero2:"Logo_lettero2__DqbXJ",letterg:"Logo_letterg__2W0dR",letterl:"Logo_letterl__3PDka",lettere:"Logo_lettere__1fANx"}},11:function(e,t,a){e.exports={Search:"Search_Search__gDjmr",SearchBoxWrapper:"Search_SearchBoxWrapper__s5H2m",SearchBox:"Search_SearchBox__uGTNj",input:"Search_input__Nk2Hb",search:"Search_search__SdtbM",microphone:"Search_microphone__1JVGD",SearchButtons:"Search_SearchButtons__2gDAE"}},15:function(e,t,a){e.exports={point:"PointIcon_point__3S3LP",moving:"PointIcon_moving__16V8d",circle1:"PointIcon_circle1__1filA",circle2:"PointIcon_circle2___hW8U",circle3:"PointIcon_circle3__1pHOo"}},17:function(e,t,a){e.exports={Google:"Google_Google__3C2_4",NavTop:"Google_NavTop__3HsXw",Content:"Google_Content__3Si6m",NavBottom:"Google_NavBottom__kX0n2"}},23:function(e,t,a){e.exports={Home:"Home_Home__EyxEm",routes:"Home_routes__1xbS6"}},3:function(e,t,a){e.exports={NavTop:"NavTop_NavTop__32Tck",link:"NavTop_link__3uT0p",apps:"NavTop_apps__1xn08",appsMenu:"NavTop_appsMenu__m2Q26",services:"NavTop_services__37iU6",products:"NavTop_products__ikd8L",item:"NavTop_item__2wlIW",serviceSearch:"NavTop_serviceSearch__5z-hg",serviceMaps:"NavTop_serviceMaps__f5aL5",servicePlay:"NavTop_servicePlay__wZwEE",serviceMail:"NavTop_serviceMail__1KRlI",serviceDrive:"NavTop_serviceDrive__30Z6V",servicePhotos:"NavTop_servicePhotos__17d9v",more:"NavTop_more__25voI",signin:"NavTop_signin__1k248"}},30:function(e,t,a){e.exports={AssistiveTouch:"AssistiveTouch_AssistiveTouch__28qz3"}},31:function(e,t,a){e.exports={App:"App_App__16ZpL","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9"}},32:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n,o=a(14),c=a.n(o),l=a(18),r=a(0),i=a.n(r),s=a(26),u=a.n(s),m=(a(38),a(39),a(13)),p=a(6),f=function(){var e=Object(p.h)(),t=Object(r.useMemo)((function(){return e.pathname}),[e.pathname]),a=Object(r.useCallback)((function(){return console.debug("[route changed] ".concat(t))}),[t]);return{values:{routePath:t},callbacks:{routeChanged:a}}},v=a(23),h=a.n(v),b=function(){return i.a.createElement("div",{className:h.a.Home},i.a.createElement("div",{className:h.a.routes},R.filter((function(e){return void 0!==e.component&&"/"!==e.path})).map((function(e){return i.a.createElement(m.b,{key:e.path,to:e.path},e.path)}))))},d=a(1),_=Object(r.createContext)({}),g=_.Provider,N=a(9),E=a.n(N),k=a(29),O=a.n(k),j=a(3),w=a.n(j),y="#5086ec",S="rgb(78, 160, 105)",T="rgb(237, 187, 67)",P="rgb(242, 160, 60)",C=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)([]),c=Object(d.a)(o,2),l=c[0],s=c[1],u=Object(r.useState)([]),m=Object(d.a)(u,2),p=m[0],f=m[1],v=O()(!1),h=Object(d.a)(v,2),b=h[0],_=h[1],g=Object(r.useState)({label:"Sign in",location:"https://accounts.google.com/ServiceLogin"}),N=Object(d.a)(g,1)[0],k=Object(r.useCallback)((function(e){return function(){e.location&&window.open(e.location,"_blank")}}),[]);return E()((function(){n([{label:"Gmail",location:"https://mail.google.com/mail/"},{label:"Images",location:"https://www.google.com/imghp"}])})),E()((function(){var e=[{label:"Account",icon:"fas fa-user-shield",style:{color:y}},{label:"Search",icon:"fab fa-google",classNames:[w.a.serviceSearch]},{label:"Maps",icon:"fas fa-map-marker-alt",classNames:[w.a.serviceMaps]},{label:"YouTube",icon:"fab fa-youtube",style:{color:"red"}},{label:"Play",icon:"fab fa-google-play",classNames:[w.a.servicePlay]},{label:"Gmail",icon:"far fa-envelope",classNames:[w.a.serviceMail]},{label:"Contacts",icon:"fas fa-user-circle",style:{color:y}},{label:"Drive",icon:"fab fa-google-drive",classNames:[w.a.serviceDrive]},{label:"Calendar",icon:"fas fa-calendar",style:{color:y}},{label:"Translate",icon:"fas fa-language",style:{color:y}},{label:"Photos",icon:"fas fa-fan",classNames:[w.a.servicePhotos]},{label:"Duo",icon:"fas fa-video",style:{color:y}}];s(e)})),E()((function(){f([{label:"Finance",icon:"fas fa-chart-line",style:{color:S}},{label:"Docs",icon:"fas fa-file-alt",style:{color:y}},{label:"Sheets",icon:"fas fa-file-excel",style:{color:S}},{label:"Slides",icon:"fas fa-file-invoice",style:{color:T}},{label:"Blogger",icon:"fab fa-blogger",style:{color:P}},{label:"Hangouts",icon:"fas fa-comment-dots",style:{color:S}},{label:"Keep",icon:"fas fa-lightbulb",style:{color:T}},{label:"Jamboard",icon:"fas fa-question"},{label:"Earth",icon:"fas fa-globe",style:{color:y}},{label:"Collections",icon:"fas fa-bookmark",style:{color:T}},{label:"Arts and Culture",icon:"fas fa-landmark"}])})),i.a.createElement("div",{className:w.a.NavTop},a.map((function(e){return i.a.createElement("div",{key:e.label,className:w.a.link,onClick:k(e)},e.label)})),i.a.createElement("div",{className:w.a.apps,onClick:_},i.a.createElement("i",{className:"fas fa-th"})),i.a.createElement("div",{className:w.a.appsMenu,style:{visibility:b?"visible":"hidden"}},i.a.createElement("div",{className:w.a.services},l.map((function(e){return i.a.createElement("div",{key:e.label,className:w.a.item,onClick:k(e)},i.a.createElement("i",{className:[e.icon].concat(e.classNames||[]).join(" "),style:e.style||{}}),i.a.createElement("span",null,e.label))}))),i.a.createElement("hr",null),i.a.createElement("div",{className:w.a.products},p.map((function(e){return i.a.createElement("div",{key:e.label,className:w.a.item,onClick:k(e)},i.a.createElement("i",{className:[e.icon].concat(e.classNames||[]).join(" "),style:e.style||{}}),i.a.createElement("span",null,e.label))}))),i.a.createElement("div",{className:w.a.more},"More From Google")),i.a.createElement("div",{className:w.a.signin,onClick:k(N)},N.label))},x=a(10),M=a.n(x),L=function(){return i.a.createElement("div",{className:M.a.Logo},i.a.createElement("span",{className:M.a.letterG},i.a.createElement("i",{className:"fab fa-google"})),i.a.createElement("span",{className:M.a.lettero1},i.a.createElement("i",{className:"fas fa-genderless"})),i.a.createElement("span",{className:M.a.lettero2},i.a.createElement("i",{className:"fas fa-genderless"})),i.a.createElement("span",{className:M.a.letterg},"g"),i.a.createElement("span",{className:M.a.letterl}),i.a.createElement("span",{className:M.a.lettere},"e"))},I=a(11),B=a.n(I),A=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(r.useCallback)((function(e){n(e.target.value)}),[]),c=Object(r.useCallback)((function(){a&&window.open("https://www.google.com/search?q=".concat(a),"_blank")}),[a]);return i.a.createElement("div",{className:B.a.Search},i.a.createElement("div",{className:B.a.SearchBoxWrapper},i.a.createElement("div",{className:B.a.SearchBox},i.a.createElement("input",{className:B.a.input,type:"text",onChange:o}),i.a.createElement("span",{className:B.a.search},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("span",{className:B.a.microphone},i.a.createElement("i",{className:"fas fa-microphone"})))),i.a.createElement("div",{className:B.a.SearchButtons},i.a.createElement("div",{onClick:c},"Google Search"),i.a.createElement("div",{onClick:c},"I'm Feeling Lucky")))},D=a(8),G=a.n(D),H=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),u=s[0],m=s[1],p=Object(r.useState)([]),f=Object(d.a)(p,2),v=f[0],h=f[1],b=Object(r.useCallback)((function(e){return function(){e.location&&window.open(e.location,"_blank")}}),[]);return E()((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipify.org/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a.ip);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),E()((function(){m([{label:"Advertising",location:"https://www.google.com/intl/en_us/ads/"},{label:"Business",location:"https://www.google.com/services/"},{label:"About",location:"https://about.google/"},{label:"How Search works",location:"https://google.com/search/howsearchworks/"}])})),E()((function(){h([{label:"Privacy",location:"https://policies.google.com/privacy"},{label:"Terms",location:"https://policies.google.com/terms"}])})),i.a.createElement("div",{className:G.a.NavBottom},i.a.createElement("div",{className:G.a.ip},a),i.a.createElement("div",{className:G.a.links},i.a.createElement("div",{className:G.a.left},u.map((function(e){return i.a.createElement("div",{key:e.label,className:G.a.link,onClick:b(e)},e.label)}))),i.a.createElement("div",{className:G.a.right},v.map((function(e){return i.a.createElement("div",{key:e.label,className:G.a.link,onClick:b(e)},e.label)})),i.a.createElement("div",{className:G.a.link},"Settings"))))},W=function(e){Object(r.useEffect)((function(){try{var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var a=t.getContext("2d");if(null===a)return console.error("Failed to create canvas"),void t.remove();e.draw(a);var n=document.querySelector("link[rel=icon]");null===n&&((n=document.createElement("link")).rel="icon"),n.href=t.toDataURL("image/png"),t.remove()}catch(o){console.error(o)}}),[e])},q=function(){var e=Object(r.useCallback)((function(e){e.lineWidth=3;var t=8-e.lineWidth;e.strokeStyle="#d9503f",e.beginPath(),e.arc(8,8,t,1.1*Math.PI,1.8*Math.PI),e.stroke(),e.strokeStyle="#f2bd42",e.beginPath(),e.arc(8,8,t,.8*Math.PI,1.1*Math.PI),e.stroke(),e.strokeStyle="#58a55c",e.beginPath(),e.arc(8,8,t,.2*Math.PI,.8*Math.PI),e.stroke(),e.strokeStyle="#5086ec",e.beginPath(),e.arc(8,8,t,0,.2*Math.PI),e.stroke(),e.beginPath(),e.moveTo(8,8),e.lineTo(14,8),e.stroke()}),[]),t=Object(r.useMemo)((function(){return{width:16,height:16,draw:e}}),[e]);return W(t),{}},F=a(17),J=a.n(F),R=[{path:"/",exact:!0,component:b},{path:"/www.google.com",exact:!0,component:function(){q();var e=Object(r.useState)("en_us"),t=Object(d.a)(e,1)[0];return i.a.createElement(g,{value:t},i.a.createElement("div",{className:J.a.Google},i.a.createElement("div",{className:J.a.NavTop},i.a.createElement(C,null)),i.a.createElement("div",{className:J.a.Content},i.a.createElement(L,null),i.a.createElement(A,null)),i.a.createElement("div",{className:J.a.NavBottom},i.a.createElement(H,null))))}},{path:"*",redirect:"/"}],U=function(){var e=f(),t=e.values.routePath,a=e.callbacks.routeChanged;Object(r.useEffect)(a,[t]);var n=Object(r.useMemo)((function(){return R.filter((function(e){return void 0!==e.component}))}),[]),o=Object(r.useMemo)((function(){return R.filter((function(e){return void 0!==e.redirect}))}),[]);return i.a.createElement(p.d,null,n.map((function(e){return i.a.createElement(p.b,{key:e.path,path:e.path,exact:!!e.exact,render:function(t){return i.a.createElement(e.component,t)}})})),o.map((function(e){return i.a.createElement(p.a,{key:e.path,to:e.redirect,from:e.path})})))},X=a(19),Y=a(15),Z=a.n(Y),Q=function(e){return i.a.createElement("div",{className:[e.moving?Z.a.moving:"",Z.a.point].join(" "),style:e.style},i.a.createElement("div",{className:Z.a.circle1}),i.a.createElement("div",{className:Z.a.circle2}),i.a.createElement("div",{className:Z.a.circle3}))},V={width:50,height:50,top:0,left:0},z=function(e){var t=e.mode,a=e.onClick,o=Object(r.useState)(!1),c=Object(d.a)(o,2),l=c[0],s=c[1],u=Object(r.useState)(!1),m=Object(d.a)(u,2),p=m[0],f=m[1],v=Object(r.useState)((function(){return V})),h=Object(d.a)(v,2),b=h[0],_=h[1],g=Object(r.useRef)(null),N=Object(r.useCallback)((function(e){return t===n.POINT&&!!g.current.contains(e.target)}),[t,g]),E=Object(r.useCallback)((function(){var e=document.body.clientWidth,t=document.body.clientHeight;_((function(a){var n=function(e,t,a,n){var o=a-e,c=n-t,l=0,r=0;return e<o?t<c?e<t?(l=0,r=t):(l=e,r=0):e<c?(l=0,r=t):(l=e,r=n):t<c?t<o?(l=e,r=0):(l=a,r=t):c<o?(l=e,r=n):(l=a,r=t),{top:r,left:l}}(a.left,a.top,e-a.width,t-a.height),o=n.left,c=n.top;return Object(X.a)({},a,{left:Math.max(.5*a.width,Math.min(e-1.5*a.width,o)),top:Math.max(.5*a.height,Math.min(t-1.5*a.height,c))})}))}),[_]),k=Object(r.useCallback)((function(e){e.stopPropagation(),e.preventDefault(),l?(s(!1),setTimeout((function(){a()}),0)):p&&setTimeout((function(){f(!1),E()}),0)}),[l,s,a,p,f,E]),O=Object(r.useCallback)((function(e){(p||l)&&(e.stopPropagation(),e.preventDefault(),l&&(f(!0),s(!1)),_((function(t){return Object(X.a)({},t,{top:Math.min(document.body.clientHeight,Math.max(0,e.clientY-t.height/2)),left:Math.min(document.body.clientWidth,Math.max(0,e.clientX-t.width/2))})})))}),[p,l,f,s,_]),j=Object(r.useCallback)((function(e){N(e)&&(e.stopPropagation(),e.preventDefault(),s(!0))}),[N,s]),w=Object(r.useCallback)((function(e){N(e)&&e.stopPropagation()}),[N]),y=Object(r.useCallback)((function(e){N(e)&&(e.stopPropagation(),e.preventDefault(),_((function(t){var a=Math.min(document.body.clientHeight,Math.max(0,e.touches[0].clientY-t.height/2)),n=Math.min(document.body.clientWidth,Math.max(0,e.touches[0].clientX-t.width/2));return Object(X.a)({},t,{top:a,left:n})})))}),[N,_]),S=Object(r.useCallback)((function(e){N(e)&&(e.stopPropagation(),E())}),[N,E]),T=Object(r.useCallback)((function(e){N(e)&&(e.stopPropagation(),E())}),[N,E]),P=Object(r.useCallback)((function(){document.addEventListener("mouseup",k,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mousedown",j,!0),document.addEventListener("touchstart",w,!0),document.addEventListener("touchmove",y,!0),document.addEventListener("touchend",S,!0),document.addEventListener("touchcancel",T,!0)}),[k,O,j,w,y,S,T]),C=Object(r.useCallback)((function(){document.removeEventListener("mouseup",k,!0),document.removeEventListener("mousemove",O,!0),document.removeEventListener("mousedown",j,!0),document.removeEventListener("touchstart",w,!0),document.removeEventListener("touchmove",y,!0),document.removeEventListener("touchend",S,!0),document.removeEventListener("touchcancel",T,!0)}),[k,O,j,w,y,S,T]);return Object(r.useEffect)((function(){return P(),setTimeout((function(){E()}),0),function(){C()}}),[P,E,C]),t===n.POINT?i.a.createElement("div",{ref:g},i.a.createElement(Q,{moving:p,style:b})):i.a.createElement("div",null)},K=a(30),$=a.n(K);!function(e){e[e.POINT=1]="POINT",e[e.NONE=-1]="NONE"}(n||(n={}));var ee=function(){var e=Object(r.useState)(n.POINT),t=Object(d.a)(e,1)[0],a=Object(p.g)();return i.a.createElement("div",{className:$.a.AssistiveTouch},t===n.POINT?i.a.createElement(z,{mode:t,onClick:function(){a.push("/")}}):"")},te=(a(47),a(31)),ae=a.n(te);var ne=function(){return i.a.createElement(m.a,null,i.a.createElement("div",{className:ae.a.App},i.a.createElement(U,null),i.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Promise.resolve().then(Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.GIT_COMMIT="4544341207977617beaef60c1317f3ea8de73098",window.BUILD_DATE="2020-05-06T16:20:49.730Z",u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ne,null)),document.getElementById("root"));case 3:case"end":return e.stop()}}),e)})))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={NavBottom:"NavBottom_NavBottom__1WfjE",ip:"NavBottom_ip__3C1RI",links:"NavBottom_links__1c0Ye",left:"NavBottom_left__h2jJq",right:"NavBottom_right__ftUua",link:"NavBottom_link__2RNmp"}}},[[32,1,2]]]);
//# sourceMappingURL=main.09e2dd99.chunk.js.map