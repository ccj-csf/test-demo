var B=(e,l,t)=>new Promise((s,r)=>{var c=o=>{try{n(t.next(o))}catch(a){r(a)}},u=o=>{try{n(t.throw(o))}catch(a){r(a)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,u);n((t=t.apply(e,l)).next())});import{B as h}from"./BasicForm.2b9e64b2.js";import{u as f}from"./useForm.8f2472ab.js";import{av as C,a as F,cC as _,ax as m,o as P,j as g,z as p,m as k,n as i,B as d}from"./index.af173b02.js";import{P as A}from"./index.090c4ab8.js";/* empty css              *//* empty css               */import"./index.0e80cd51.js";import"./index.0f9a5cc0.js";import"./Checkbox.00222c90.js";import"./index.68d19c70.js";import"./index.403ef0c7.js";import"./index.cc36947e.js";import"./index.8dc96d3a.js";import"./index.773961c1.js";import"./get.7d88b08a.js";import"./index.69e8d41d.js";import"./eagerComputed.c42e3597.js";import"./index.b281d45c.js";import"./_baseIteratee.83366286.js";import"./DeleteOutlined.09488a95.js";import"./index.0199e9b7.js";import"./useRefs.378d5140.js";import"./Form.6262207f.js";import"./Col.8d9ccb45.js";import"./useFlexGapSupport.ff5da277.js";import"./useSize.d05088ea.js";import"./index.0ad10145.js";import"./index.d6f36b7d.js";import"./useWindowSizeFn.a70462ee.js";import"./FullscreenOutlined.114aa189.js";import"./index.e6a6d5ef.js";import"./index.57cc376f.js";import"./uuid.9bdf29ec.js";import"./download.4a868ad4.js";import"./base64Conver.08b9f4ec.js";import"./index.8137b2dc.js";import"./index.15b3b245.js";import"./uniqBy.819a151f.js";import"./index.9754df84.js";import"./index.4e124a36.js";import"./useContentViewHeight.d8e70fde.js";import"./ArrowLeftOutlined.c7ec9b9f.js";import"./index.9c1938c7.js";import"./transButton.67163955.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],W=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:l}=e,t=yield l()})})}],w=F({components:{BasicForm:h,CollapseContainer:_,PageWrapper:A},setup(){const[e,{setProps:l,updateSchema:t,appendSchemaByField:s,removeSchemaByFiled:r}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:W,actionColOptions:{span:24}});function u(){t({field:"field3",label:"\u5B57\u6BB53 New"})}function n(){t([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){s({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function a(){r("field11")}return{register:e,register1:c,schemas:b,setProps:l,changeLabel3:u,changeLabel34:n,appendField:o,deleteField:a}}}),v={class:"mb-4"},D=d(" \u66F4\u6539\u5B57\u6BB53label "),E=d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),S=d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),y=d(" \u5220\u9664\u5B57\u6BB511 ");function I(e,l,t,s,r,c){const u=m("a-button"),n=m("BasicForm"),o=m("CollapseContainer"),a=m("PageWrapper");return P(),g(a,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:p(()=>[k("div",v,[i(u,{onClick:e.changeLabel3,class:"mr-2"},{default:p(()=>[D]),_:1},8,["onClick"]),i(u,{onClick:e.changeLabel34,class:"mr-2"},{default:p(()=>[E]),_:1},8,["onClick"]),i(u,{onClick:e.appendField,class:"mr-2"},{default:p(()=>[S]),_:1},8,["onClick"]),i(u,{onClick:e.deleteField,class:"mr-2"},{default:p(()=>[y]),_:1},8,["onClick"])]),i(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:p(()=>[i(n,{onRegister:e.register},null,8,["onRegister"])]),_:1}),i(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:p(()=>[i(n,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ae=C(w,[["render",I]]);export{Ae as default};
