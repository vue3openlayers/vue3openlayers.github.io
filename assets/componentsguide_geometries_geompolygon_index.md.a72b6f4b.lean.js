import{r as n,d as a,o as s,c as t,w as o,e as p,j as e,a as c}from"./app.381f6a48.js";const l={setup:()=>({center:n([-98.8449,19.6869]),projection:n("EPSG:4326"),zoom:n(15),rotation:n(0),radius:n(40),strokeWidth:n(10),strokeColor:n("red")})};l.render=function(n,e,c,l,u,k){const r=a("ol-view"),i=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-geom-polygon"),m=a("ol-style-stroke"),h=a("ol-style"),y=a("ol-feature"),f=a("ol-source-vector"),q=a("ol-vector-layer"),v=a("ol-map");return s(),t(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[p(r,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),p(g,null,{default:o((()=>[p(i)])),_:1}),p(q,null,{default:o((()=>[p(f,null,{default:o((()=>[p(y,null,{default:o((()=>[p(d,{coordinates:[[[-98.844959,19.691586],[-98.842749,19.69098],[-98.84217,19.693122],[-98.844358,19.693667],[-98.844959,19.691586]]]},null,8,["coordinates"]),p(h,null,{default:o((()=>[p(m,{color:l.strokeColor,width:l.strokeWidth},null,8,["color","width"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};const u=p("h1",{id:"ol-geom-polygon"},[p("a",{class:"header-anchor",href:"#ol-geom-polygon","aria-hidden":"true"},"#"),e(" ol-geom-polygon")],-1),k=p("p",null,"ol-geom-polygon can be used inside a ol-feature to draw a single polygon on the map. The polygon may contain holes in it, check the usage section for more info on this.",-1),r=c('',6),i='{"title":"ol-geom-polygon","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/geometries/geompolygon/index.md","lastUpdated":1628604295548}',g={};const d=Object.assign(g,{expose:[],setup:function(n){return(n,e)=>{const c=a("ClientOnly");return s(),t("div",null,[u,k,p(c,null,{default:o((()=>[p(l)])),_:1}),r])}}});export default d;export{i as __pageData};
