import{u as e,x as t,y as a,z as s,o as i,c as o,e as l,A as n,f as c,t as r,_ as f,B as v,D as d,F as u,g as p,d as m,E as k}from"./app.0b7afbe4.js";v("data-v-0cb9fda2");const h={key:0,class:"home-hero"},x={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},g={key:2,class:"description"};d();var _=e({expose:[],setup(e){const{site:v,frontmatter:d}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),p=a((()=>d.value.heroText||v.value.title));return(e,t)=>s(u)?(i(),o("header",h,[s(d).heroImage?(i(),o("figure",x,[l("img",{class:"image",src:s(n)(s(d).heroImage),alt:s(d).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(p)?(i(),o("h1",y,r(s(p)),1)):c("v-if",!0),s(d).tagline?(i(),o("p",g,r(s(d).tagline),1)):c("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),o(f,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),o(f,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",v("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};d();var j=e({expose:[],setup(e){const{frontmatter:n}=t(),f=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(f)?(i(),o("div",I,[l("div",T,[l("div",b,[l("div",A,[(i(!0),o(u,null,p(s(v),((e,t)=>(i(),o("section",{key:t,class:"feature"},[e.title?(i(),o("h2",L,r(e.title),1)):c("v-if",!0),e.details?(i(),o("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",v("data-v-30918238");const w={key:0,class:"footer"},z={class:"container"},B={class:"text"};d();var C=e({expose:[],setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),o("footer",w,[l("div",z,[l("p",B,r(s(a).footer),1)])])):c("v-if",!0)}});C.__scopeId="data-v-30918238",v("data-v-32eddf2f");const D={class:"home","aria-labelledby":"main-title"},E={class:"home-content"};d();var F=e({expose:[],setup:e=>(e,t)=>{const a=m("Content");return i(),o("main",D,[l(_),k(e.$slots,"hero",{},void 0,!0),l(j),l("div",E,[l(a)]),k(e.$slots,"features",{},void 0,!0),l(C),k(e.$slots,"footer",{},void 0,!0)])}});F.__scopeId="data-v-32eddf2f";export default F;
