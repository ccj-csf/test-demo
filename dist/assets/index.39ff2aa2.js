import{D as l}from"./index.0bfe40e5.js";import{P as p}from"./index.090c4ab8.js";import{av as m,a as c,ax as n,o as d,j as f,z as g,n as r}from"./index.af173b02.js";import{u}from"./useDescription.93b5054f.js";import"./index.1bca878c.js";import"./get.7d88b08a.js";import"./index.9754df84.js";import"./index.4e124a36.js";import"./useSize.d05088ea.js";import"./eagerComputed.c42e3597.js";import"./useWindowSizeFn.a70462ee.js";import"./useContentViewHeight.d8e70fde.js";import"./ArrowLeftOutlined.c7ec9b9f.js";import"./index.9c1938c7.js";import"./transButton.67163955.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},s=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],h=c({components:{Description:l,PageWrapper:p},setup(){const[e]=u({title:"useDescription",data:o,schema:s}),[a]=u({title:"\u65E0\u8FB9\u6846",bordered:!1,data:o,schema:s});return{mockData:o,schema:s,register:e,register1:a}}});function x(e,a,D,B,E,F){const t=n("Description"),i=n("PageWrapper");return d(),f(i,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:g(()=>[r(t,{title:"\u57FA\u7840\u793A\u4F8B",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{class:"mt-4",title:"\u5782\u76F4\u793A\u4F8B",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),r(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}var V=m(h,[["render",x]]);export{V as default};
