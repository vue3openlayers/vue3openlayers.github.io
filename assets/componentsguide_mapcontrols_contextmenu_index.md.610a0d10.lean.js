import{r as n,i as a,d as s,o as t,c as p,w as o,e,j as c,a as l}from"./app.ff6312e5.js";import{m as u}from"./marker.4b23fbad.js";const r={setup(){const s=n([40,40]),t=n("EPSG:4326"),p=n(8),o=n(0),e=n([]),c=n(null),l=n(null),r=a("ol-feature"),k=a("ol-geom");return e.value=[{text:"Center map here",classname:"some-style-class",callback:n=>{l.value.setCenter(n.coordinate)}},{text:"Add a Marker",classname:"some-style-class",icon:u,callback:n=>{console.log(n);let a=new r({geometry:new k.Point(n.coordinate)});c.value.source.addFeature(a)}},"-"],{center:s,projection:t,zoom:p,rotation:o,contextMenuItems:e,marker:u,markers:c,view:l}}};r.render=function(n,a,c,l,u,r){const k=s("ol-view"),i=s("ol-source-osm"),m=s("ol-tile-layer"),d=s("ol-context-menu"),g=s("ol-source-vector"),f=s("ol-style-icon"),h=s("ol-style"),y=s("ol-vector-layer"),v=s("ol-map");return t(),p(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"},ref:"map"},{default:o((()=>[e(k,{center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection,ref:"view"},null,8,["center","rotation","zoom","projection"]),e(m,null,{default:o((()=>[e(i)])),_:1}),e(d,{items:l.contextMenuItems},null,8,["items"]),e(y,null,{default:o((()=>[e(g,{ref:"markers"},null,512),e(h,null,{default:o((()=>[e(f,{src:l.marker,scale:.1},null,8,["src","scale"])])),_:1})])),_:1})])),_:1},512)};const k=e("h1",{id:"ol-context-menu"},[e("a",{class:"header-anchor",href:"#ol-context-menu","aria-hidden":"true"},"#"),c(" ol-context-menu")],-1),i=e("blockquote",null,[e("p",null,"A contextmenu extension for OpenLayers.")],-1),m=l('',17),d='{"title":"ol-context-menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/mapcontrols/contextmenu/index.md","lastUpdated":1628604521729}',g={};const f=Object.assign(g,{expose:[],setup:function(n){return(n,a)=>{const c=s("ClientOnly");return t(),p("div",null,[k,i,e(c,null,{default:o((()=>[e(r)])),_:1}),m])}}});export default f;export{d as __pageData};