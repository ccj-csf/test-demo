var E=Object.defineProperty,S=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var B=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))U.call(e,t)&&B(s,t,e[t]);if(x)for(var t of x(e))N.call(e,t)&&B(s,t,e[t]);return s},y=(s,e)=>S(s,I(e));var V=(s,e,t)=>new Promise((u,l)=>{var _=a=>{try{o(t.next(a))}catch(r){l(r)}},p=a=>{try{o(t.throw(a))}catch(r){l(r)}},o=a=>a.done?u(a.value):Promise.resolve(a.value).then(_,p);o((t=t.apply(s,e)).next())});import{d as f,c as T,o as h,a as F,b as n,u as d,_ as k,r as v,e as j,f as i,g as c,w as b,M as q,a1 as z,a2 as H,h as M}from"./index.81df8385.js";import{c as P,a as R,T as G,V as A,B as J}from"./index.1db49e07.js";var K="/assets/mtp-bg-header.04f67008.png",L="/assets/mtp-contact.839ca652.png",O="/assets/mtp-about.f1343c90.png",Q="/assets/mtp-about-content.6e8cd3a6.png",W="/assets/mtp-service.846a5199.png",X="/assets/mtp-service-content.616a6d01.png";const Y={class:"flex justify-center"},Z=["src"],g=f({__name:"Title",props:{title:{default:"service"}},setup(s){const e=s,t=T(()=>e.title==="service"?W:e.title==="about"?O:L);return(u,l)=>(h(),F("div",Y,[n("img",{src:d(t),class:"object-cover w-260px"},null,8,Z)]))}});const ee=s=>(z("data-v-5d1b23fc"),s=s(),H(),s),te=ee(()=>n("header",{class:"bg"},null,-1)),se={class:"bg-white rounded-b-2xl pt-8 pb-6"},ae={class:"mt-8 px-4"},oe=M(" \u83B7\u53D6\u62A5\u4EF7 "),ne=f({__name:"Form",setup(s){const e=v(""),t=v(""),u=v(!1),l=o=>A.mobile.test(o)||A.plane.test(o),_=j(),p=o=>V(this,null,function*(){console.log("submit",o);const a=y(w({},o),{sourceName:"\u591A\u5F0F\u8054\u8FD0\u63A8\u5E7Fh5",sourceVersion:"1.0.0",sourceUrl:P.apiUrl+_.fullPath});try{u.value=!0;const r=yield R.reportingUserrequirements(a);console.log("res",r),G.success("\u63D0\u4EA4\u6210\u529F")}finally{u.value=!1}});return(o,a)=>{const r=i("van-field"),$=i("van-cell-group"),C=i("van-button"),D=i("van-form");return h(),F(q,null,[te,n("div",se,[c(D,{onSubmit:p},{default:b(()=>[c($,{inset:""},{default:b(()=>[c(r,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=m=>e.value=m),name:"name",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]},null,8,["modelValue"]),c(r,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=m=>t.value=m),class:"!mt-6",name:"phone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{validator:l,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7\u6216\u5EA7\u673A\u53F7"}]},null,8,["modelValue","rules"])]),_:1}),n("div",ae,[c(C,{loading:u.value,round:"",block:"",type:"primary","native-type":"submit",color:"linear-gradient(120.39deg, #41ccff 8.7%, #00a8e5 96.62%)"},{default:b(()=>[oe]),_:1},8,["loading"])])]),_:1})])],64)}}});var ce=k(ne,[["__scopeId","data-v-5d1b23fc"]]);const re={class:"bg pb-8"},ue=["src"],le={class:"px-4"},de=["src"],ie={class:"mt-12 px-4"},_e={class:"mt-12 px-4"},pe=["src"],me=f({__name:"index",setup(s){return(e,t)=>(h(),F("div",re,[n("img",{src:d(K),alt:""},null,8,ue),n("section",le,[c(g,{title:"service",class:"mb-4"}),n("img",{src:d(X),alt:""},null,8,de)]),n("section",ie,[c(g,{title:"contact",class:"mb-4"}),c(ce)]),n("section",_e,[c(g,{title:"about",class:"mb-4"}),n("img",{src:d(Q),alt:""},null,8,pe)]),c(d(J))]))}});var fe=k(me,[["__scopeId","data-v-eb974e7c"]]);export{fe as default};
