import{a as R,ar as A,v as h,a7 as G,N as I,al as M,_ as u,R as z,S as x,n as b,T as H,G as J}from"./index.af173b02.js";var L=globalThis&&globalThis.__rest||function(o,e){var r={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(o);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(r[n[t]]=o[n[t]]);return r},Q={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:J.any,required:Boolean},W=R({name:"Checkbox",inheritAttrs:!1,props:A(Q,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,r){var n=r.attrs,t=r.emit,m=r.expose,i=h(e.checked===void 0?e.defaultChecked:e.checked),d=h();G(function(){return e.checked},function(){i.value=e.checked}),I(function(){M(function(){})}),m({focus:function(){var a;(a=d.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=d.value)===null||a===void 0||a.blur()}});var s=h(),p=function(a){if(!e.disabled){e.checked===void 0&&(i.value=a.target.checked),a.shiftKey=s.value;var f={target:u(u({},e),{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(d.value.checked=!!e.checked),t("change",f),s.value=!1}},C=function(a){t("click",a),s.value=a.shiftKey};return function(){var c,a=e.prefixCls,f=e.name,v=e.id,K=e.type,y=e.disabled,P=e.readonly,O=e.tabindex,S=e.autofocus,B=e.value,_=e.required,k=L(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),N=n.class,j=n.onFocus,w=n.onBlur,q=n.onKeydown,T=n.onKeypress,D=n.onKeyup,F=Object.keys(u(u({},k),n)).reduce(function(g,l){return(l.substr(0,5)==="aria-"||l.substr(0,5)==="data-"||l==="role")&&(g[l]=k[l]),g},{}),V=z(a,N,(c={},x(c,"".concat(a,"-checked"),i.value),x(c,"".concat(a,"-disabled"),y),c)),E=u(u({name:f,id:v,type:K,readonly:P,disabled:y,tabindex:O,class:"".concat(a,"-input"),checked:!!i.value,autofocus:S,value:B},F),{onChange:p,onClick:C,onFocus:j,onBlur:w,onKeydown:q,onKeypress:T,onKeyup:D,required:_});return b("span",{class:V},[b("input",H({ref:d},E),null),b("span",{class:"".concat(a,"-inner")},null)])}}});export{W as V};
