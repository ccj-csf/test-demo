var b=Object.defineProperty;var P=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var O=(e,o,t)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o)=>{for(var t in o||(o={}))S.call(o,t)&&O(e,t,o[t]);if(P)for(var t of P(o))v.call(o,t)&&O(e,t,o[t]);return e};var R=(e,o,t)=>new Promise((r,i)=>{var g=n=>{try{u(t.next(n))}catch(s){i(s)}},y=n=>{try{u(t.throw(n))}catch(s){i(s)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(g,y);u((t=t.apply(e,o)).next())});import{v as I,f as c,c as h,i as l,a as w,o as x,h as E,t as j}from"./index.af173b02.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const p=I(0);function B(){function e(r){p.value=r}const o=c(()=>p.value);function t(){e(0)}return{setLoginState:e,getLoginState:o,handleBackLogin:t}}function A(e){function o(){return R(this,null,function*(){const t=l(e);return t?yield t.validate():void 0})}return{validForm:o}}function k(e){const{t:o}=h(),t=c(()=>f(o("sys.login.accountPlaceholder"))),r=c(()=>f(o("sys.login.passwordPlaceholder"))),i=c(()=>f(o("sys.login.smsPlaceholder"))),g=c(()=>f(o("sys.login.mobilePlaceholder"))),y=(s,d)=>R(this,null,function*(){return d?Promise.resolve():Promise.reject(o("sys.login.policyPlaceholder"))}),u=s=>(d,m)=>R(this,null,function*(){return m?m!==s?Promise.reject(o("sys.login.diffPwd")):Promise.resolve():Promise.reject(o("sys.login.passwordPlaceholder"))});return{getFormRules:c(()=>{const s=l(t),d=l(r),m=l(i),T=l(g),F={sms:m,mobile:T};switch(l(p)){case 1:return _({account:s,password:d,confirmPassword:[{validator:u(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:y,trigger:"change"}]},F);case 2:return _({account:s},F);case 3:return F;default:return{account:s,password:d}}})}}function f(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},C=w({name:"LoginFormTitle",setup(e){const{t:o}=h(),{getLoginState:t}=B(),r=c(()=>({[a.RESET_PASSWORD]:o("sys.login.forgetFormTitle"),[a.LOGIN]:o("sys.login.signInFormTitle"),[a.REGISTER]:o("sys.login.signUpFormTitle"),[a.MOBILE]:o("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:o("sys.login.qrSignInFormTitle")})[l(t)]);return(i,g)=>(x(),E("h2",G,j(l(r)),1))}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{a as L,C as _,k as a,A as b,D as c,B as u};
