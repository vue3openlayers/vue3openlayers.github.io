import{r as n,i as s,d as a,o as t,c as p,w as o,e,j as c,a as l}from"./app.4dd796d2.js";const u={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(3),rotation:n(0),geoJson:new(s("ol-format").GeoJSON),webglPointsStyle:{symbol:{symbolType:"circle",size:["interpolate",["linear"],["get","population"],4e4,8,2e6,28],color:"#ffed02",rotateWithView:!1,offset:[0,0],opacity:["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]}}})};u.render=function(n,s,c,l,u,i){const r=a("ol-view"),k=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-source-webglpoints"),m=a("ol-webglpoints-layer"),y=a("ol-map");return t(),p(y,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[e(r,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),e(g,null,{default:o((()=>[e(k)])),_:1}),e(m,{style:l.webglPointsStyle},{default:o((()=>[e(d,{format:l.geoJson,url:"https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"},null,8,["format"])])),_:1},8,["style"])])),_:1})};const i=e("h1",{id:"ol-webglpoints-layer"},[e("a",{class:"header-anchor",href:"#ol-webglpoints-layer","aria-hidden":"true"},"#"),c(" ol-webglpoints-layer")],-1),r=l('',8),k='{"title":"ol-webglpoints-layer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/layers/webglpointslayer/index.md","lastUpdated":1645895483719}',g={};const d=Object.assign(g,{expose:[],setup:function(n){return(n,s)=>{const c=a("ClientOnly");return t(),p("div",null,[i,e(c,null,{default:o((()=>[e(u)])),_:1}),r])}}});export default d;export{k as __pageData};
