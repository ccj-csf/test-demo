var B=(e,n,r)=>new Promise((l,i)=>{var t=o=>{try{p(r.next(o))}catch(m){i(m)}},a=o=>{try{p(r.throw(o))}catch(m){i(m)}},p=o=>o.done?l(o.value):Promise.resolve(o.value).then(t,a);p((r=r.apply(e,n)).next())});import{B as h}from"./BasicForm.2b9e64b2.js";import{u as $}from"./useForm.8f2472ab.js";import{av as P,a as g,cC as k,I as _,dx as F,v as I,ax as u,o as d,j as f,z as s,n as C,k as b,B as v}from"./index.af173b02.js";import{P as y}from"./index.090c4ab8.js";/* empty css              *//* empty css               */import"./index.0e80cd51.js";import"./index.0f9a5cc0.js";import"./Checkbox.00222c90.js";import"./index.68d19c70.js";import"./index.403ef0c7.js";import"./index.cc36947e.js";import"./index.8dc96d3a.js";import"./index.773961c1.js";import"./get.7d88b08a.js";import"./index.69e8d41d.js";import"./eagerComputed.c42e3597.js";import"./index.b281d45c.js";import"./_baseIteratee.83366286.js";import"./DeleteOutlined.09488a95.js";import"./index.0199e9b7.js";import"./useRefs.378d5140.js";import"./Form.6262207f.js";import"./Col.8d9ccb45.js";import"./useFlexGapSupport.ff5da277.js";import"./useSize.d05088ea.js";import"./index.0ad10145.js";import"./index.d6f36b7d.js";import"./useWindowSizeFn.a70462ee.js";import"./FullscreenOutlined.114aa189.js";import"./index.e6a6d5ef.js";import"./index.57cc376f.js";import"./uuid.9bdf29ec.js";import"./download.4a868ad4.js";import"./base64Conver.08b9f4ec.js";import"./index.8137b2dc.js";import"./index.15b3b245.js";import"./uniqBy.819a151f.js";import"./index.9754df84.js";import"./index.4e124a36.js";import"./useContentViewHeight.d8e70fde.js";import"./ArrowLeftOutlined.c7ec9b9f.js";import"./index.9c1938c7.js";import"./transButton.67163955.js";const S=g({components:{BasicForm:h,CollapseContainer:k,PageWrapper:y,[_.name]:_,Button:F},setup(){const[e,{appendSchemaByField:n,removeSchemaByFiled:r,validate:l}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield l()}catch(o){}})}const t=I(1);function a(){n({field:`field${t.value}a`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`field${t.value}b`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`${t.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),t.value++}function p(o){r([`field${o}a`,`field${o}b`,`${o}`]),t.value--}return{register:e,handleSubmit:i,add:a,del:p}}}),q=v("+"),N=v("-");function W(e,n,r,l,i,t){const a=u("Button"),p=u("BasicForm"),o=u("CollapseContainer"),m=u("PageWrapper");return d(),f(m,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:s(()=>[C(o,{title:"\u8868\u5355\u589E\u5220"},{default:s(()=>[C(p,{onRegister:e.register,onSubmit:e.handleSubmit},{add:s(({field:c})=>[Number(c)===0?(d(),f(a,{key:0,onClick:e.add},{default:s(()=>[q]),_:1},8,["onClick"])):b("",!0),c>0?(d(),f(a,{key:1,onClick:x=>e.del(c)},{default:s(()=>[N]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Fo=P(S,[["render",W]]);export{Fo as default};
