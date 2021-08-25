var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,c=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e},l=(e,t)=>a(e,o(t));import{r as i,o as d,c as m,a as u,F as p,k,b as g,d as y,t as f,e as v,w as h,f as b,u as w,g as P,_ as C,h as j,i as _,j as A,l as x,m as I,n as L,p as S}from"./vendor.6dbf5b88.js";const U={class:"main"},V={setup:e=>(e,a)=>{const o=i("Header"),t=i("router-view");return d(),m(p,null,[u(o),u("div",U,[u(t)])],64)}};const O=k.create({prefixUrl:"/api",retry:{limit:0}});const R={setup(){const e=w();P();let a=g({nickName:void 0,timestamp:void 0,remark:void 0});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),O.get("userinfo",{searchParams:a}).json()}(e);if(!o)return C.error("获取用户信息失败，请重重新登录"),void t();a.nickName=o.data.nickName,a.remark=o.data.remark,a.timestamp=new Date(o.data.timestamp).toLocaleString()}catch(e){console.error(e)}};y(o);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return l(c({},f(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:o,logout:t,saveRemark:async()=>{try{const e=localStorage.getItem("eid"),o=await function(e){return O.post("update/remark",{json:e}).json()}({eid:e,remark:a.remark});200!==o.code?C.error(o.message):C.success(o.message)}catch(e){console.error(e)}},delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return O.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?C.error(a.message):(C.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},Q={class:"content"},D={class:"card"},z=u("div",{class:"card-header"},[u("p",{class:"card-title"},"个人中心")],-1),N={class:"card-body"},q={class:"card-footer"},E=_("退出登录"),$=_("删除账号"),K={class:"card"},T=u("div",{class:"card-header"},[u("p",{class:"card-title"},"备注"),u("span",{class:"card-subtitle"}," 备注用于识别你是谁，强烈建议设置。 ")],-1),Z={class:"card-body"},B={class:"card-footer"},H=_("保存"),J={class:"card"},W=u("div",{class:"card-header"},[u("p",{class:"card-title"},"常见活动位置"),u("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),F={class:"card-body"},X={class:"pr-2"};R.render=function(e,a,o,t,s,r){const n=i("el-button"),c=i("el-input");return d(),m("div",Q,[u("div",D,[z,u("div",N,[u("p",null,"昵称："+v(e.nickName),1),u("p",null,"更新时间："+v(e.timestamp),1)]),u("div",q,[u(n,{size:"small",auto:"",onClick:t.logout},{default:h((()=>[E])),_:1},8,["onClick"]),u(n,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:h((()=>[$])),_:1},8,["onClick"])])]),u("div",K,[T,u("div",Z,[u("p",null,[u(c,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),placeholder:"请输入备注"},null,8,["modelValue"])])]),u("div",B,[u(n,{size:"small",auto:"",onClick:t.saveRemark},{default:h((()=>[H])),_:1},8,["onClick"])])]),u("div",J,[W,u("div",F,[u("ul",null,[(d(!0),m(p,null,b(t.activity,((e,a)=>(d(),m("li",{key:a,class:"leading-normal"},[u("span",null,v(e.name)+"：",1),u("span",X,v(e.address),1),e.href?(d(),m("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,["onClick"])):j("",!0)])))),128))])])])])};const G={setup(){const e=w();P();let a=g({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const o=async()=>{try{const e=(await O.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd}catch(e){console.error(e)}},t=async()=>{try{const e=await O.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(s,3e3))}catch(e){console.error(e),C.error("生成二维码失败！请重试或放弃")}},s=async()=>{try{const o=await function(e){return O.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==o?void 0:o.data.errcode){case 0:localStorage.setItem("eid",o.data.eid),C.success(o.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:C.error(o.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(o){clearInterval(a.timer),a.waitLogin=!1}};return y((()=>{o(),t()})),l(c({},f(a)),{getInfo:o,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:s,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const e=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],o=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(e&&o){const a=await function(e){return O.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:o});200===a.code&&a.data.eid?(localStorage.setItem("eid",a.data.eid),C.success(a.message)):C.error(a.message||"cookie 解析失败，请检查后重试！")}else C.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}}})}},M={class:"content"},Y={class:"card"},ee={class:"card-header"},ae={class:"flex items-center justify-between"},oe=u("p",{class:"card-title"},"扫码登录",-1),te={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},se=u("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),re={class:"card-body text-center"},ne={key:0,class:"flex flex-col w-48 m-auto mt-4"},ce=_("扫描二维码登录"),le=_("跳转到京东 App 登录"),ie=u("div",{class:"card-footer"},null,-1),de={class:"card hidden"},me={class:"card-header"},ue={class:"flex items-center justify-between"},pe=u("p",{class:"card-title"},"CK 登录",-1),ke={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ge=u("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),ye={class:"card-body text-center"},fe=_("登录"),ve=u("div",{class:"card-footet"},null,-1);G.render=function(e,a,o,t,s,r){const n=i("el-button"),c=i("el-input");return d(),m("div",M,[u("div",Y,[u("div",ee,[u("div",ae,[oe,u("span",te,"余量："+v(e.marginCount),1)]),se]),u("div",re,[e.qrCodeVisibility?(d(),m("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,["src"])):(d(),m("div",ne,[u(n,{type:"primary",round:"",onClick:t.showQrcode},{default:h((()=>[ce])),_:1},8,["onClick"]),u(n,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:h((()=>[le])),_:1},8,["onClick"])]))]),ie]),u("div",de,[u("div",me,[u("div",ue,[pe,u("span",ke,"余量："+v(e.marginCount),1)]),ge]),u("div",ye,[u(c,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),u(n,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:h((()=>[fe])),_:1},8,["onClick"])]),ve])])};const he=[{path:"/",component:R},{path:"/login",component:G}],be=A({history:x(),routes:he}),we=[L,S,C],Pe=[C],Ce=I(V);we.forEach((e=>{Ce.component(e.name,e)})),Pe.forEach((e=>{Ce.use(e)})),Ce.use(be),Ce.mount("#app");
