import{r as n,d as a,o as s,c as t,w as o,e,F as p,g as c,j as l,a as u}from"./app.a9e86e50.js";import{s as i}from"./star.309f7afc.js";const r={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(6),rotation:n(0),getRandomInRange:(n,a,s)=>1*(Math.random()*(a-n)+n).toFixed(s),starIcon:i})};r.render=function(n,l,u,i,r,k){const d=a("ol-view"),g=a("ol-source-osm"),h=a("ol-tile-layer"),m=a("ol-geom-point"),f=a("ol-style-icon"),y=a("ol-style"),q=a("ol-feature"),v=a("ol-animation-shake"),w=a("ol-source-vector"),b=a("ol-vector-layer"),_=a("ol-map");return s(),t(_,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"700px"}},{default:o((()=>[e(d,{ref:"view",center:i.center,rotation:i.rotation,zoom:i.zoom,projection:i.projection},null,8,["center","rotation","zoom","projection"]),e(h,null,{default:o((()=>[e(g)])),_:1}),e(b,{updateWhileAnimating:!0,updateWhileInteracting:!0},{default:o((()=>[e(w,{ref:"vectorsource"},{default:o((()=>[e(v,{duration:2e3,repeat:5},{default:o((()=>[(s(),t(p,null,c(20,(n=>e(q,{key:n},{default:o((()=>[e(m,{coordinates:[i.getRandomInRange(24,45,3),i.getRandomInRange(35,41,3)]},null,8,["coordinates"]),e(y,null,{default:o((()=>[e(f,{src:i.starIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1024))),64))])),_:1})])),_:1},512)])),_:1})])),_:1})};const k=e("h1",{id:"ol-animation-shake"},[e("a",{class:"header-anchor",href:"#ol-animation-shake","aria-hidden":"true"},"#"),l(" ol-animation-shake")],-1),d=e("blockquote",null,[e("p",null,"Shake animation for feature")],-1),g=u('',30),h='{"title":"ol-animation-shake","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/animations/shake/index.md","lastUpdated":1628662247155}',m={};const f=Object.assign(m,{expose:[],setup:function(n){return(n,p)=>{const c=a("ClientOnly");return s(),t("div",null,[k,d,e(c,null,{default:o((()=>[e(r)])),_:1}),g])}}});export default f;export{h as __pageData};
