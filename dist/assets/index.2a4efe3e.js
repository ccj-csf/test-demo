import{av as E,a as x,cC as w,b5 as D,s as S,f as F,ax as l,o as t,h as r,n as o,z as s,q as n,m as p,F as i,aA as u,fa as P,fb as V,B as b,t as m,j as _,aH as A}from"./index.af173b02.js";import{T as L}from"./index.403ef0c7.js";import{T as h}from"./index.7b87dd57.js";/* empty css               */import N from"./Article.810d998f.js";import j from"./Application.251c58f8.js";import z from"./Project.d4c12032.js";import{h as R}from"./header.d801b988.js";import{tags as U,teams as q,details as H,achieveList as G}from"./data.53a0f0fb.js";import{R as T,C as $}from"./index.15b3b245.js";import"./useRefs.378d5140.js";import"./PlusOutlined.70a5d9fd.js";import"./index.a1931e3f.js";import"./Col.8d9ccb45.js";import"./useFlexGapSupport.ff5da277.js";import"./eagerComputed.c42e3597.js";import"./index.9ff8eef5.js";import"./index.07f1cd8c.js";const J=x({components:{CollapseContainer:w,Icon:D,Tag:L,Tabs:h,TabPane:h.TabPane,Article:N,Application:j,Project:z,[T.name]:T,[$.name]:$},setup(){const e=S(),d=F(()=>e.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:d,tags:U,teams:q,details:H,achieveList:G}}}),g=e=>(P("data-v-5384e32e"),e=e(),V(),e),K=["src"],M=g(()=>p("span",null,"Vben",-1)),O=g(()=>p("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(e,d,W,X,Y,Z){const c=l("a-col"),f=l("Icon"),C=l("a-row"),y=l("Tag"),v=l("CollapseContainer"),B=l("TabPane"),I=l("Tabs");return t(),r("div",{class:n(e.prefixCls)},[o(C,{class:n(`${e.prefixCls}-top`)},{default:s(()=>[o(c,{span:9,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(C,null,{default:s(()=>[o(c,{span:8},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__avatar`)},[p("img",{width:"70",src:e.avatar},null,8,K),M,O],2)]),_:1}),o(c,{span:16},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(e.details,a=>(t(),r("p",{key:a.title},[o(f,{icon:a.icon},null,8,["icon"]),b(" "+m(a.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),o(c,{span:7,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{title:"\u6807\u7B7E",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(e.tags,a=>(t(),_(y,{key:a,class:"mb-2"},{default:s(()=>[b(m(a),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),o(c,{span:8,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{class:n(`${e.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(e.teams,(a,k)=>(t(),r("div",{key:k,class:n(`${e.prefixCls}-top__team-item`)},[o(f,{icon:a.icon,color:a.color},null,8,["icon","color"]),p("span",null,m(a.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),p("div",{class:n(`${e.prefixCls}-bottom`)},[o(I,null,{default:s(()=>[(t(!0),r(i,null,u(e.achieveList,a=>(t(),_(B,{key:a.key,tab:a.name},{default:s(()=>[(t(),_(A(a.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var be=E(J,[["render",Q],["__scopeId","data-v-5384e32e"]]);export{be as default};
