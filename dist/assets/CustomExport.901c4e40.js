import{B as d}from"./TableImg.9fa01044.js";import"./BasicForm.2b9e64b2.js";import{E as f}from"./index.a9db2316.js";import{c as _,d as s,j as E}from"./data.94ceb4e0.js";import{b as B}from"./index.d6f36b7d.js";import{P as C}from"./index.090c4ab8.js";import{av as F,a as x,ax as t,o as b,j as g,z as r,n as p,B as M}from"./index.af173b02.js";import"./index.0f9a5cc0.js";import"./Checkbox.00222c90.js";import"./index.68d19c70.js";import"./index.69e8d41d.js";import"./eagerComputed.c42e3597.js";import"./useForm.8f2472ab.js";import"./index.cc36947e.js";import"./index.8dc96d3a.js";import"./index.403ef0c7.js";import"./uuid.9bdf29ec.js";import"./index.b281d45c.js";import"./_baseIteratee.83366286.js";import"./get.7d88b08a.js";import"./DeleteOutlined.09488a95.js";import"./index.0199e9b7.js";import"./useRefs.378d5140.js";import"./Form.6262207f.js";import"./Col.8d9ccb45.js";import"./useFlexGapSupport.ff5da277.js";import"./useSize.d05088ea.js";import"./useWindowSizeFn.a70462ee.js";import"./index.0e80cd51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.aae8901b.js";import"./FullscreenOutlined.114aa189.js";import"./index.57cc376f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.50399b55.js";import"./index.25ba5934.js";/* empty css              *//* empty css               */import"./index.773961c1.js";import"./index.0ad10145.js";import"./index.e6a6d5ef.js";import"./download.4a868ad4.js";import"./base64Conver.08b9f4ec.js";import"./index.8137b2dc.js";import"./index.15b3b245.js";import"./uniqBy.819a151f.js";import"./index.9754df84.js";import"./index.4e124a36.js";import"./useContentViewHeight.d8e70fde.js";import"./ArrowLeftOutlined.c7ec9b9f.js";import"./index.9c1938c7.js";import"./transButton.67163955.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:m,bookType:a}){E({data:s,filename:m,write2excelOpts:{bookType:a}})}const[e,{openModal:i}]=B();return{defaultHeader:o,columns:_,data:s,register:e,openModal:i}}}),S=M(" \u5BFC\u51FA ");function T(o,e,i,m,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=F(A,[["render",T]]);export{ho as default};
