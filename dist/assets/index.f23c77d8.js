import{C as o}from"./index.9ff8eef5.js";import{a as G,J as P,S as d,c5 as v,n as i,G as u,f as D}from"./index.af173b02.js";var M=function(){return{prefixCls:String,title:u.any,description:u.any,avatar:u.any}},f=G({name:"ACardMeta",props:M(),slots:["title","description","avatar"],setup:function(r,s){var n=s.slots,l=P("card",r),e=l.prefixCls;return function(){var c=d({},"".concat(e.value,"-meta"),!0),a=v(n,r,"avatar"),p=v(n,r,"title"),C=v(n,r,"description"),x=a?i("div",{class:"".concat(e.value,"-meta-avatar")},[a]):null,g=p?i("div",{class:"".concat(e.value,"-meta-title")},[p]):null,_=C?i("div",{class:"".concat(e.value,"-meta-description")},[C]):null,y=g||_?i("div",{class:"".concat(e.value,"-meta-detail")},[g,_]):null;return i("div",{class:c},[x,y])}}}),S=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},m=G({name:"ACardGrid",__ANT_CARD_GRID:!0,props:S(),setup:function(r,s){var n=s.slots,l=P("card",r),e=l.prefixCls,c=D(function(){var a;return a={},d(a,"".concat(e.value,"-grid"),!0),d(a,"".concat(e.value,"-grid-hoverable"),r.hoverable),a});return function(){var a;return i("div",{class:c.value},[(a=n.default)===null||a===void 0?void 0:a.call(n)])}}});o.Meta=f;o.Grid=m;o.install=function(t){return t.component(o.name,o),t.component(f.name,f),t.component(m.name,m),t};
