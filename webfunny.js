!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var o,m,i,r,a;!function(E){sessionStorage||(E.sessionStorage={}),localStorage||(E.localStorage={}),E.webfunnyRequests||(E.webfunnyRequests=[]);var I=E.localStorage,S=I.WF_CONFIG?JSON.parse(I.WF_CONFIG):{s:!0,ia:[""],wc:40,pv:{s:true,ia:[""]},je:{s:true,ia:[""]},hl:{s:true,ia:[""],uh:!1,rl:500,sl:500},rl:{s:true,ia:[""]},bl:{s:true},lc:{s:true}},r=E.location.href.split("?")[0],a=performance&&performance.timing,x=performance&&"function"==typeof performance.getEntries?performance.getEntries():null,e="3.0.94",t=-1===E.location.href.indexOf("https")?"http://":"https://",s=E.location.href,b=encodeURIComponent(E.location.pathname),n=t+"localhost:8011",C="/server/upLog",O="/server/upDLog",c=n+C,f=n+O,T="CUSTOMER_PV",o="STAY_TIME",i="CUS_LEAVE",u="LOAD_PAGE",_="HTTP_LOG",l="JS_ERROR",p="SCREEN_SHOT",h="ELE_BEHAVIOR",N="RESOURCE_LOAD",d="CUSTOMIZE_BEHAVIOR",g="VIDEOS_EVENT",M="LAST_BROWSE_DATE",$="WM_PAGE_ENTRY_TIME",k="WM_VISIT_PAGE_COUNT",L=new function(){this.checkIgnore=function(e,t){if(!t)return!0;for(var n=t.replace(/ /g,""),o=S[e].ia||[],i=!0,r=0;r<o.length;r++){var a=o[r].replace(/ /g,"");if(a&&-1!=n.indexOf(a)){i=!1;break}}return i},this.getIp=function(n){if("1"!=L.getWfCookie("wf_cj_status"))if(L.getWfCookie("wf_ip"))"function"==typeof n&&n();else{var o=(new Date).getTime()+864e5;L.loadJs(t+"pv.sohu.com/cityjson?ie=utf-8",function(){if(E.returnCitySN){var e=E.returnCitySN?E.returnCitySN.cip:"",t=encodeURIComponent(E.returnCitySN?E.returnCitySN.cname:"");L.setWfCookie("wf_ip",e,o),L.setWfCookie("wf_prov",t,o),"function"==typeof n&&n()}},function(){L.setWfCookie("wf_cj_status",1,o),"function"==typeof n&&n()})}else"function"==typeof n&&n()},this.getUuid=function(){var e=L.formatDate((new Date).getTime(),"yMdhms");return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})+"-"+e},this.getCustomerKey=function(){var e=this.getUuid(),t=L.getWfCookie("monitorCustomerKey");if(!t){var n=(new Date).getTime()+31104e7;L.setWfCookie("monitorCustomerKey",e,n),t=e}return t},this.setWfCookie=function(e,t,n){var o={data:t,expires:n};if(I.WEBFUNNY_COOKIE){var i=JSON.parse(I.WEBFUNNY_COOKIE);i[e]=o,I.WEBFUNNY_COOKIE=JSON.stringify(i)}else{var r={};r[e]=o,I.WEBFUNNY_COOKIE=JSON.stringify(r)}},this.getWfCookie=function(e){var t=null;if(I.WEBFUNNY_COOKIE){var n=(t=JSON.parse(I.WEBFUNNY_COOKIE))[e];return n?parseInt(n.expires,10)<(new Date).getTime()?(delete t[e],I.WEBFUNNY_COOKIE=JSON.stringify(t),""):n.data:""}return""},this.getCusInfo=function(e){if(!e)return"";var t=(I.wmUserInfo?JSON.parse(I.wmUserInfo):{})[e];return t||""},this.getWebMonitorId=function(){var e=sessionStorage.CUSTOMER_WEB_MONITOR_ID||"webfunny_20220610_111338_pro";if(-1!==e.indexOf("_pro")){var t=L.getCusInfo("env");t&&(e=e.replace("_pro","_"+t))}return e},this.isTodayBrowse=function(e){var t=I[e],n=(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate();return t&&n==t?!(!t||n!=t):(I[e]=n,!1)},this.formatDate=function(e,t){var n=new Date(e).getFullYear(),o=new Date(e).getMonth()+1,i=new Date(e).getDate(),r=new Date(e).getHours(),a=new Date(e).getMinutes(),s=new Date(e).getSeconds();return o=9<o?o:"0"+o,i=9<i?i:"0"+i,r=9<r?r:"0"+r,a=9<a?a:"0"+a,s=9<s?s:"0"+s,t.replace("y",n).replace("M",o).replace("d",i).replace("h",r).replace("m",a).replace("s",s)},this.getPageKey=function(){var e=this.getUuid();return I.monitorPageKey&&/^[0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12}-\d{13}$/.test(I.monitorPageKey)||(I.monitorPageKey=e),I.monitorPageKey},this.setPageKey=function(){I.monitorPageKey=this.getUuid()},this.addLoadEvent=function(e){var t=E.onload;"function"!=typeof E.onload?E.onload=e:E.onload=function(){t(),e()}},this.addOnBeforeUnloadEvent=function(e){var t=E.onbeforeunload;"function"!=typeof E.onbeforeunload?E.onbeforeunload=e:E.onbeforeunload=function(){t(),e()}},this.addOnclickForDocument=function(e){var t=document.onclick;"function"!=typeof document.onclick?document.onclick=e:document.onclick=function(){t(),e()}},this.ajax=function(e,t,n,o,i){try{var r=E.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open(e,t,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){if(4==r.readyState){var t={};try{t=r.responseText?JSON.parse(r.responseText):{}}catch(e){t={}}"function"==typeof o&&o(t)}},r.onerror=function(){"function"==typeof i&&i()};var a=JSON.stringify(n||{});r.send("data="+a)}catch(e){}},this.upLog=function(e,r){e&&"undefined"!=e&&L.ajax("POST",c,{logInfo:e},function(e){if(e&&e.data&&e.data.d){I.ds="c"==e.data.d?"connected":"disconnect";var t=e.data.c;if(t){I.setItem("WF_CONFIG",e.data.c);var n=JSON.parse(t);if(0==(S=n).s){var o=(new Date).getTime()+6e5;L.setWfCookie("webfunnyStart","p",o)}}}if(!0===r)for(var i=0;i<A.length;i++)I[A[i]]=""},function(){if(!0===r)for(var e=0;e<A.length;e++)I[A[e]]=""})},this.initDebugTool=function(){var a=L.getCusInfo("userId");function t(e){for(var t=[],n=e.length,o=0;o<n;o++)t.push(e[o]);var i={};i.log=t,i.userId=a,i.happenTime=(new Date).getTime();var r="";try{r=L.b64Code(JSON.stringify(i))}catch(e){r="convert fail"}return r}var n=console.log,o=console.warn;console.log=function(){var e=t(arguments);return"connected"===I.ds&&L.ajax("POST",f,{consoleInfo:e},function(){}),n.apply(console,arguments)},console.warn=function(){var e=t(arguments);return"connected"===I.ds&&L.ajax("POST",f,{warnInfo:e},function(){}),o.apply(console,arguments)}},this.uploadLocalInfo=function(){var e=L.getCusInfo("userId"),t={};for(var n in I)"function"==typeof I[n]||-1!=A.indexOf(n)||1e3<I[n].length||(t[n]=I[n]);try{t=L.b64Code(JSON.stringify(t))}catch(e){t=""}var o={};for(var n in sessionStorage)"function"==typeof sessionStorage[n]||-1!=A.indexOf(n)||1e3<sessionStorage[n].length||(o[n]=sessionStorage[n]);try{o=L.b64Code(JSON.stringify(o))}catch(e){o=""}var i=L.b64Code(document.cookie);L.ajax("POST",f,{localInfo:t,sessionInfo:o,cookieInfo:i,userId:e||"userId"},function(e){if((setTimeout(function(){L.uploadLocalInfo()},2e4),e.data)&&1==e.data.clear){var t=I.wmUserInfo;localStorage.clear(),localStorage.wmUserInfo=t,sessionStorage.clear(),I.WEBFUNNY_COOKIE=""}})},this.encryptObj=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;++n)t[n]=this.encryptObj(e[n]);return t}if(e instanceof Object){t={};for(var n in e)t[n]=this.encryptObj(e[n]);return t}return 50<(e+="").length&&(e=e.substring(0,10)+"****"+e.substring(e.length-9,e.length)),e},this.getDevice=function(){var e={},t=navigator.userAgent,n=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=t.match(/(iPad).*OS\s([\d_]+)/),i=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),r=t.match(/Android\s[\S\s]+Build\//),a=E.screen.width,s=E.screen.height;if(e.ios=e.android=e.iphone=e.ipad=e.androidChrome=!1,e.isWeixin=/MicroMessenger/i.test(t),e.os="web",e.deviceName="PC",e.deviceSize=a+"×"+s,n&&(e.os="android",e.osVersion=n[2],e.android=!0,e.androidChrome=0<=t.toLowerCase().indexOf("chrome")),(o||i)&&(e.os="ios",e.ios=!0),i&&(e.osVersion=i[2].replace(/_/g,"."),e.iphone=!0),o&&(e.osVersion=o[2].replace(/_/g,"."),e.ipad=!0),e.ios&&e.osVersion&&0<=t.indexOf("Version/")&&"10"===e.osVersion.split(".")[0]&&(e.osVersion=t.toLowerCase().split("version/")[1].split(" ")[0]),e.iphone){var c="iphone";320===a&&480===s?c="4":320===a&&568===s?c="5/SE":375===a&&667===s?c="6/7/8":414===a&&736===s?c="6/7/8 Plus":375===a&&812===s?c="X/S/Max":414===a&&896===s?c="11/Pro-Max":375===a&&812===s?c="11-Pro/mini":390===a&&844===s?c="12/Pro":428===a&&926===s&&(c="12-Pro-Max"),e.deviceName="iphone "+c}else if(e.ipad)e.deviceName="ipad";else if(r){for(var f=r[0].split(";"),u="",l=0;l<f.length;l++)-1!=f[l].indexOf("Build")&&(u=f[l].replace(/Build\//g,""));""==u&&(u=f[1]),e.deviceName=u.replace(/(^\s*)|(\s*$)/g,"")}if(-1==t.indexOf("Mobile")){var p=navigator.userAgent.toLowerCase();if(e.browserName="其他",0<p.indexOf("msie")){var h=p.match(/msie [\d.]+;/gi)[0];e.browserName="ie",e.browserVersion=h.split("/")[1]}else if(0<p.indexOf("edg")){h=p.match(/edg\/[\d.]+/gi)[0];e.browserName="edge",e.browserVersion=h.split("/")[1]}else if(0<p.indexOf("firefox")){h=p.match(/firefox\/[\d.]+/gi)[0];e.browserName="firefox",e.browserVersion=h.split("/")[1]}else if(0<p.indexOf("safari")&&p.indexOf("chrome")<0){h=p.match(/safari\/[\d.]+/gi)[0];e.browserName="safari",e.browserVersion=h.split("/")[1]}else if(0<p.indexOf("chrome")){h=p.match(/chrome\/[\d.]+/gi)[0];e.browserName="chrome",e.browserVersion=h.split("/")[1],0<p.indexOf("360se")&&(e.browserName="360")}}return e.webView=(i||o)&&t.match(/.*AppleWebKit(?!.*Safari)/i),e},this.loadJs=function(e,t,n){var o=document.createElement("script");o.async=1,o.src=e,o.onload=t,"function"==typeof n&&(o.onerror=n);var i=document.getElementsByTagName("script")[0];return i.parentNode.insertBefore(o,i),i},this.b64Code=function(e){var t=encodeURIComponent(e);try{return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))}catch(e){return t}}},D=(new Date).getTime()+6048e5,v=L.getDevice(),m=I.wmUserInfo?JSON.parse(I.wmUserInfo):{},A=[h,l,_,p,T,u,N,d,g],j={ACTIVE_TIME:{}},W=[];function w(){this.handleLogInfo=function(e,t){if(t){var n=I[e]?I[e]:"";switch(e){case h:I[h]=n+JSON.stringify(t)+"$$$";break;case l:I[l]=n+JSON.stringify(t)+"$$$";break;case _:I[_]=n+JSON.stringify(t)+"$$$";break;case p:I[p]=n+JSON.stringify(t)+"$$$";break;case T:I[T]=n+JSON.stringify(t)+"$$$";break;case u:I[u]=n+JSON.stringify(t)+"$$$";break;case N:I[N]=n+JSON.stringify(t)+"$$$";break;case d:I[d]=n+JSON.stringify(t)+"$$$";break;case g:I[g]=n+JSON.stringify(t)+"$$$"}}}}function y(){this.wmVersion=e,this.h=(new Date).getTime(),this.a=L.getWebMonitorId(),this.g=E.location.href.split("?")[0],this.f=L.b64Code(E.location.href),this.b=L.getCustomerKey(),this.c=m.userId,this.j=L.b64Code(m.projectVersion||""),this.d=L.b64Code(m.userTag||""),this.e=L.b64Code(m.secondUserParam||"")}function V(e,t,n,o,i){y.apply(this),this.i=e,this.k=L.getPageKey(),this.l=v.deviceName,this.deviceSize=v.deviceSize,this.m=v.os+(v.osVersion?" "+v.osVersion:""),this.n=v.browserName,this.o=v.browserVersion,this.p=L.getWfCookie("wf_ip"),this.q="",this.r=L.getWfCookie("wf_prov"),this.s="",this.t=t,this.u=n,this.newStatus=o,this.referrer=(i||"").split("?")[0]}function P(e){this.i=i,this.a=L.getWebMonitorId(),this.leaveType=e,this.h=(new Date).getTime(),this.g=E.location.href.split("?")[0],this.b=L.getCustomerKey()}function U(e,t){y.apply(this),this.i=o,this.h=(new Date).getTime(),this.a=L.getWebMonitorId(),this.g=E.location.href.split("?")[0],this.b=L.getCustomerKey(),this.stayTime=e,this.activeTime=t}function J(e,t,n,o,i,r,a,s,c,f,u,l){y.apply(this),this.i=e,this.t=t,this.v=n,this.w=o,this.x=i,this.y=r,this.z=a,this.A=s,this.B=c,this.C=f,this.D=u,this.E=l}function F(e,t,n,o,i,r,a){y.apply(this),this.i=e,this.da=t,this.G=L.b64Code(n),this.H=L.b64Code(o),this.I=L.b64Code(i),this.L=r,this.M=L.b64Code(a)}function R(e,t,n,o,i){y.apply(this),this.i=e,this.O=t,this.k=L.getPageKey(),this.l=v.deviceName,this.m=v.os+(v.osVersion?" "+v.osVersion:""),this.n=v.browserName,this.o=v.browserVersion,this.p=L.getWfCookie("wf_ip"),this.q="",this.r=L.getWfCookie("wf_prov"),this.s="",this.simpleErrorMessage=L.b64Code(n),this.P=L.b64Code(o),this.Q=L.b64Code(i),this.R=L.b64Code(navigator.userAgent)}function K(e,t,n,o,i,r,a,s,c,f,u){y.apply(this),this.i=e,this.method=t,this.g=n,this.S=L.b64Code(o),this.T=i,this.U=r,this.V=a,this.headerText="next version",this.W=L.b64Code(s),this.X=L.b64Code(c),this.h=f,this.u=u}function B(e,t,n,o){y.apply(this),this.i=e,this.Y=L.b64Code(t),this.Z=n,this.aa=o||"jpeg"}function Y(e,t,n,o){y.apply(this),this.i=e,this.ba=n,this.ca=L.b64Code(t),this.T=o}function q(e,t,n,o,i){this.c=e,this.a=L.getWebMonitorId(),this.da=t,this.ea=n,this.i=o,this.Y=i,this.h=(new Date).getTime()}function H(){var e=parseInt(I[$],10),t=(new Date).getTime()-e,n=L.getWfCookie("ACTIVE_TIME_INFO")||{},o=n.ACTIVE_TIME?1*n.ACTIVE_TIME[b]:t;0===o&&t<=1e4&&(o=t);var i=JSON.stringify(new U(t,o));navigator&&"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(c,i)}function z(e){var t=S.lc;t&&!0===t.s&&L.getIp(),L.setPageKey();var n=L.isTodayBrowse(M),o=(new Date).getTime();I[$]=o;var i=null,r=L.formatDate(o,"y-M-d"),a=encodeURIComponent(E.location.href.split("?")[0]),s=I[k];if(s){var c=s.split("$$$"),f=c[0],u=c[1],l=parseInt(c[2],10);r==u?a!=f&&1==l&&(I[k]=a+"$$$"+r+"$$$2",i=new P(2)):(I[k]=a+"$$$"+r+"$$$1",i=new P(1))}else I[k]=a+"$$$"+r+"$$$1",i=new P(1);var p="";x&&(p=x[0]&&"navigate"===x[0].type?"load":"reload");var h=L.getWfCookie("monitorCustomerKey");if(h){var d="",g=h?h.match(/\d{14}/g):[];if(g&&0<g.length){var v=g[0].match(/\d{2}/g),m=v[0]+v[1]+"-"+v[2]+"-"+v[3]+" "+v[4]+":"+v[5]+":"+v[6],w=new Date(m).getTime(),y=(new Date).getTime();d=2e3<y-w?0==n?"o_uv":"o":"n_uv"}}else d="n_uv";var b=document.referrer;function C(n){var e=E.location.href;function t(){var e=new V(T,p,0,d,b),t=JSON.stringify(e)+"$$$";i&&(t+=JSON.stringify(i)+"$$$"),n?e.handleLogInfo(T,e):L.upLog(t,!1)}L.checkIgnore("pv",e)&&(L.getCusInfo("userId")?t():setTimeout(function(){t()},3e3))}var O=I.ds;O||!0!==t.s?("connected"===O&&L.initDebugTool(),setTimeout(function(){"connected"===O&&L.uploadLocalInfo()},2e3),C(e)):L.getIp(function(){C()})}function G(e,t,n,o,i,r){var a=t||"",s=r||"",c="",f="";if(1e3<=a.length&&(a=a.substring(0,999)),3e3<=s.length&&(s=s.substring(0,2999)),80<=a.length?f=a.substring(0,80):0<a.length&&a.length<80&&(f=a),L.checkIgnore("je",a)){if(a)if("string"==typeof s)c=s.split(": ")[0].replace('"',"");else c=JSON.stringify(s).split(": ")[0].replace('"',"");var u=new R(l,e,c+": "+f,c+": "+a,s);u.handleLogInfo(l,u)}}V.prototype=new w,P.prototype=new w,U.prototype=new w,J.prototype=new w,F.prototype=new w,R.prototype=new w,K.prototype=new w,B.prototype=new w,Y.prototype=new w,q.prototype=new w,new w;for(var X=S.ia,Z=!1,Q=0;Q<X.length;Q++){var ee=X[Q].replace(/ /g,"");if(ee&&-1!=(E.location.href+E.location.hash).indexOf(ee)){Z=!0;break}}var te=L.getWfCookie("webfunnyStart")||S.s;te&&"p"!=te&&!Z&&function(){j.ACTIVE_TIME[b]=0,L.setWfCookie("ACTIVE_TIME_INFO",j,D);var d=new Date,g=d.getFullYear(),v=d.getMonth(),m=d.getDate();try{var e=S.pv,t=S.je,n=S.hl,o=S.rl,i=S.bl;e.s&&(z(),L.addLoadEvent(function(){setTimeout(function(){if(x){var e="load";e=x[0]&&"navigate"===x[0].type?"load":"reload";var t=a,n=new J(u);n.loadType=e,n.lookupDomain=t.domainLookupEnd-t.domainLookupStart,n.connect=t.connectEnd-t.connectStart,n.request=t.responseEnd-t.requestStart,n.ttfb=t.responseStart-t.navigationStart,n.domReady=t.domComplete-t.responseEnd,n.loadPage=t.loadEventEnd-t.navigationStart,n.redirect=t.redirectEnd-t.redirectStart,n.loadEvent=t.loadEventEnd-t.loadEventStart,n.appcache=t.domainLookupStart-t.fetchStart,n.unloadEvent=t.unloadEventEnd-t.unloadEventStart,n.handleLogInfo(u,n)}},1e3)}),function(){function e(e){var t=history[e],n=new Event(e);return function(){var e=t.apply(this,arguments);return n.arguments=arguments,E.dispatchEvent(n),e}}history.pushState=e("pushState"),history.replaceState=e("replaceState"),E.addEventListener("hashchange",function(){z(1)}),E.addEventListener("popstate",function(){var e=E.location.href.split("?")[0].split("#")[0];r!=e&&(z(0),r=e)}),E.addEventListener("pushState",function(e){z(0)}),E.addEventListener("replaceState",function(e){z(0)})}()),t.s&&function(){var o=console.error;console.error=function(e){var t=e&&e.message||e,n=e&&e.stack;if(n)G("on_error",t,s,0,0,n);else{if("object"==typeof t)try{t=JSON.stringify(t)}catch(e){t="错误无法解析"}G("console_error",t,s,0,0,"CustomizeError: "+t)}return o.apply(console,arguments)},E.onerror=function(e,t,n,o,i){G("on_error",e,t,n,o,i?i.stack:null)},E.onunhandledrejection=function(e){var t="",n="";n="object"==typeof e.reason?(t=e.reason.message,e.reason.stack):(t=e.reason,""),": "===t&&(t=n),G("on_error",t,s,0,0,"UncaughtInPromiseError: "+n)}}(),n.s&&function(){function t(e){var t=new CustomEvent(e,{detail:this});E.dispatchEvent(t)}var n=E.XMLHttpRequest;function i(e,t){if(h[e]&&!0!==h[e].uploadFlag){var n=S.hl,o=(parseInt(n.rl,10),parseInt(n.sl,10)||500),i="";if(t&&t.length<o)try{i=t}catch(e){i=""}else i="内容太长";var r=h[e].simpleUrl,a=(new Date).getTime(),s=h[e].event.detail.responseURL,c=h[e].event.detail.status,f=h[e].event.detail.statusText,u=a-h[e].timeStamp;if(s&&-1==s.indexOf(C)&&-1==s.indexOf(O)&&L.checkIgnore("hl",s)){var l=new K(_,"",r,s,c,f,"request","","",h[e].timeStamp,0),p=new K(_,"",r,s,c,f,"response","",i,a,u);W.push(l,p),h[e].uploadFlag=!0}}}var h=[];E.XMLHttpRequest=function(){var e=new n;return e.addEventListener("loadstart",function(){t.call(this,"ajaxLoadStart")},!1),e.addEventListener("loadend",function(){t.call(this,"ajaxLoadEnd")},!1),e},E.addEventListener("ajaxLoadStart",function(e){var t={timeStamp:(new Date).getTime(),event:e,simpleUrl:E.location.href.split("?")[0],uploadFlag:!1};h.push(t)}),E.addEventListener("ajaxLoadEnd",function(){for(var o=0;o<h.length;o++){if(!0!==h[o].uploadFlag)if(0<h[o].event.detail.status)if("blob"===(h[o].event.detail.responseType+"").toLowerCase())!function(t){var n=new FileReader;n.onload=function(){var e=n.result;i(t,e)};try{n.readAsText(h[o].event.detail.response,"utf-8")}catch(e){i(t,h[o].event.detail.response+"")}}(o);else try{var e=h[o]&&h[o].event&&h[o].event.detail;if(!e)return;var t=e.responseType,n="";""!==t&&"text"!==t||(n=e.responseText),"json"===t&&(n=JSON.stringify(e.response)),i(o,n)}catch(e){}}})}(),o.s&&E.addEventListener("error",function(e){var t=e.target.localName,n="";if("link"===t?n=e.target.href:"script"===t&&(n=e.target.src),n=n?n.split("?")[0]:"",L.checkIgnore("rl",n)&&-1==n.indexOf("pv.sohu.com/cityjson")){var o=new Y(N,n,t,"0");o.handleLogInfo(N,o)}},!0),i.s&&L.addOnclickForDocument(function(e){if(e){var t="",n="",o="",i=e.target.tagName,r="";"svg"!=e.target.tagName&&"use"!=e.target.tagName&&(t=e.target.className,n=e.target.placeholder||"",o=e.target.value||"",100<(r=e.target.innerText?e.target.innerText.replace(/\s*/g,""):"").length&&(r=r.substring(0,50)+" ... "+r.substring(r.length-49,r.length-1)),r=r.replace(/\s/g,""));var a=new F(h,"click",t,n,o,i,r);a.handleLogInfo(h,a)}}),L.addOnBeforeUnloadEvent(function(){H()});var w=0,y=A;setInterval(function(){var e=parseInt(S.wc||"40",10);if(e="connected"==I.ds?5:e,0<w&&w%5==0){if(10<=W.length){for(var t="",n=0;n<W.length;n++){var o=W[n];o&&(t+=JSON.stringify(o)+"$$$")}L.upLog(t,!1)}else{var i="";for(n=0;n<W.length;n++){var r=W[n];r&&(i+=JSON.stringify(r)+"$$$")}I[_]+=i,3e4<=I[_].length&&(L.upLog(I[_],!1),I[_]="")}W=[]}if(e<=w){var a="";for(n=0;n<y.length;n++)a+=I[y[n]]||"";0<a.length&&L.upLog(a,!0),w=0;var s=L.getWfCookie("ACTIVE_TIME_INFO")||{},c={};s.ACTIVE_TIME?c=s.ACTIVE_TIME:s.ACTIVE_TIME={};var f=c[b]||0;0<a.length&&(s.ACTIVE_TIME[b]=1*f+200*e),L.setWfCookie("ACTIVE_TIME_INFO",s,D);var u=new Date((new Date).getTime()+1e4),l=u.getFullYear(),p=u.getMonth(),h=u.getDate();(g<l||v<p||m<h)&&(H(),I[$]=(new Date).getTime(),d=new Date,g=d.getFullYear(),v=d.getMonth(),m=d.getDate())}w++},200)}catch(e){console.error("监控代码异常，捕获",e)}}(),E.webfunny={wm_upload_picture:function(e,t,n){var o=new B(p,t,e,n||"jpeg");o.handleLogInfo(p,o)},wm_upload_extend_log:function(e,t,n,o,i){var r=new q(e,t,n,o,i);r.handleLogInfo(d,r)}},function(){if("function"==typeof E.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=E.Event.prototype,E.CustomEvent=e}()}(window),window.LZString=(m=String.fromCharCode,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={},a={compressToEncodedURIComponent:function(e){return null==e?"":a._compress(e,6,function(e){return i.charAt(e)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),a._decompress(t.length,32,function(e){return function(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}(i,t.charAt(e))}))},_compress:function(e,t,n){if(null==e)return"";var o,i,r,a={},s={},c="",f="",u="",l=2,p=3,h=2,d=[],g=0,v=0;for(r=0;r<e.length;r+=1)if(c=e.charAt(r),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=p++,s[c]=!0),f=u+c,Object.prototype.hasOwnProperty.call(a,f))u=f;else{if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(o=0;o<h;o++)g<<=1,v==t-1?(v=0,d.push(n(g)),g=0):v++;for(i=u.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1}else{for(i=1,o=0;o<h;o++)g=g<<1|i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i=0;for(i=u.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1}0==--l&&(l=Math.pow(2,h),h++),delete s[u]}else for(i=a[u],o=0;o<h;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1;0==--l&&(l=Math.pow(2,h),h++),a[f]=p++,u=String(c)}if(""!==u){if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(o=0;o<h;o++)g<<=1,v==t-1?(v=0,d.push(n(g)),g=0):v++;for(i=u.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1}else{for(i=1,o=0;o<h;o++)g=g<<1|i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i=0;for(i=u.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1}0==--l&&(l=Math.pow(2,h),h++),delete s[u]}else for(i=a[u],o=0;o<h;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(i=2,o=0;o<h;o++)g=g<<1|1&i,v==t-1?(v=0,d.push(n(g)),g=0):v++,i>>=1;for(;;){if(g<<=1,v==t-1){d.push(n(g));break}v++}return d.join("")},_decompress:function(e,t,n){var o,i,r,a,s,c,f,u=[],l=4,p=4,h=3,d="",g=[],v={val:n(0),position:t,index:1};for(o=0;o<3;o+=1)u[o]=o;for(r=0,s=Math.pow(2,2),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;switch(r){case 0:for(r=0,s=Math.pow(2,8),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;f=m(r);break;case 1:for(r=0,s=Math.pow(2,16),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;f=m(r);break;case 2:return""}for(i=u[3]=f,g.push(f);;){if(v.index>e)return"";for(r=0,s=Math.pow(2,h),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;switch(f=r){case 0:for(r=0,s=Math.pow(2,8),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;u[p++]=m(r),f=p-1,l--;break;case 1:for(r=0,s=Math.pow(2,16),c=1;c!=s;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),r|=(0<a?1:0)*c,c<<=1;u[p++]=m(r),f=p-1,l--;break;case 2:return g.join("")}if(0==l&&(l=Math.pow(2,h),h++),u[f])d=u[f];else{if(f!==p)return null;d=i+i.charAt(0)}g.push(d),u[p++]=i+d.charAt(0),i=d,0==--l&&(l=Math.pow(2,h),h++)}}}),void 0===(o=function(){return window.LZString}.call(t,n,t,e))||(e.exports=o)}]);
