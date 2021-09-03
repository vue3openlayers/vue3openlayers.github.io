import{r as n,d as a,o as s,c as t,h as p,v as o,e,k as c,w as l,f as u,F as i,j as r,a as k}from"./app.ff6312e5.js";const d={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0),drawEnable:n(!0),drawType:n("Point"),drawstart:n=>{console.log(n)},drawend:n=>{console.log(n)}})},g=e("label",{for:"checkbox"},"Draw Enable",-1),h=e("option",{value:"Point"},"Point",-1),f=e("option",{value:"LineString"},"LineString",-1),m=e("option",{value:"Polygon"},"Polygon",-1),q=e("option",{value:"Circle"},"Circle",-1);d.render=function(n,r,k,d,y,v){const w=a("ol-view"),b=a("ol-source-osm"),T=a("ol-tile-layer"),x=a("ol-interaction-draw"),P=a("ol-source-vector"),_=a("ol-style-stroke"),j=a("ol-style-fill"),D=a("ol-style-circle"),E=a("ol-style"),S=a("ol-vector-layer"),C=a("ol-map");return s(),t(i,null,[p(e("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":r[1]||(r[1]=n=>d.drawEnable=n)},null,512),[[o,d.drawEnable]]),g,p(e("select",{id:"type","onUpdate:modelValue":r[2]||(r[2]=n=>d.drawType=n)},[h,f,m,q],512),[[c,d.drawType]]),e(C,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:l((()=>[e(w,{ref:"view",center:d.center,rotation:d.rotation,zoom:d.zoom,projection:d.projection},null,8,["center","rotation","zoom","projection"]),e(T,null,{default:l((()=>[e(b)])),_:1}),e(S,null,{default:l((()=>[e(P,{projection:d.projection},{default:l((()=>[d.drawEnable?(s(),t(x,{key:0,type:d.drawType,onDrawend:d.drawend,onDrawstart:d.drawstart},null,8,["type","onDrawend","onDrawstart"])):u("v-if",!0)])),_:1},8,["projection"]),e(E,null,{default:l((()=>[e(_,{color:"red",width:2}),e(j,{color:"rgba(255,255,255,0.1)"}),e(D,{radius:7},{default:l((()=>[e(j,{color:"blue"})])),_:1})])),_:1})])),_:1})])),_:1})],64)};const y=e("h1",{id:"ol-interaction-draw"},[e("a",{class:"header-anchor",href:"#ol-interaction-draw","aria-hidden":"true"},"#"),r(" ol-interaction-draw")],-1),v=e("blockquote",null,[e("p",null,"Interaction for drawing feature geometries.")],-1),w=e("p",null,"ol-interaction-draw handles click events on the map and makes easier to draw geometries.",-1),b=k('',32),T='{"title":"ol-interaction-draw","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/interactions/draw/index.md","lastUpdated":1628604340588}',x={};const P=Object.assign(x,{expose:[],setup:function(n){return(n,p)=>{const o=a("ClientOnly");return s(),t("div",null,[y,v,w,e(o,null,{default:l((()=>[e(d)])),_:1}),b])}}});export default P;export{T as __pageData};