var f=(p,r,s)=>new Promise((c,i)=>{var _=o=>{try{t(s.next(o))}catch(m){i(m)}},n=o=>{try{t(s.throw(o))}catch(m){i(m)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,n);t((s=s.apply(p,r)).next())});import{B as v}from"./BasicForm.2b9e64b2.js";import{u as h}from"./useForm.8f2472ab.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,av as x,ax as u,o as C,h as g,n as e,z as a,B as d}from"./index.af173b02.js";import{A as B}from"./index.e6a6d5ef.js";import{D}from"./index.0e80cd51.js";import{D as l}from"./index.1bca878c.js";/* empty css              *//* empty css               */import"./index.0f9a5cc0.js";import"./Checkbox.00222c90.js";import"./index.68d19c70.js";import"./index.403ef0c7.js";import"./index.cc36947e.js";import"./index.8dc96d3a.js";import"./index.773961c1.js";import"./get.7d88b08a.js";import"./index.69e8d41d.js";import"./eagerComputed.c42e3597.js";import"./index.b281d45c.js";import"./_baseIteratee.83366286.js";import"./DeleteOutlined.09488a95.js";import"./index.0199e9b7.js";import"./useRefs.378d5140.js";import"./Form.6262207f.js";import"./Col.8d9ccb45.js";import"./useFlexGapSupport.ff5da277.js";import"./useSize.d05088ea.js";import"./index.0ad10145.js";import"./index.d6f36b7d.js";import"./useWindowSizeFn.a70462ee.js";import"./FullscreenOutlined.114aa189.js";import"./index.57cc376f.js";import"./uuid.9bdf29ec.js";import"./download.4a868ad4.js";import"./base64Conver.08b9f4ec.js";import"./index.8137b2dc.js";import"./index.15b3b245.js";import"./uniqBy.819a151f.js";const A=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(p,{emit:r}){const[s,{validate:c,setProps:i}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:n});function _(){return f(this,null,function*(){r("prev")})}function n(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:s}}}),y={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Vben "),w=d(" 500\u5143 ");function I(p,r,s,c,i,_){const n=u("a-alert"),t=u("a-descriptions-item"),o=u("a-descriptions"),m=u("a-divider"),F=u("BasicForm");return C(),g("div",y,[e(n,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:a(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:a(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:a(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:a(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:a(()=>[w]),_:1})]),_:1}),e(m),e(F,{onRegister:p.register},null,8,["onRegister"])])}var vt=x(A,[["render",I],["__scopeId","data-v-01481d2f"]]);export{vt as default};
