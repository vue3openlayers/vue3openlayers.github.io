import{r as n,d as e,o as t,c as o,e as a,w as s,t as i,F as r,j as l,a as c}from"./app.6430ac0a.js";const p={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0)}),data(){return{currentCenter:this.center,currentZoom:this.zoom,currentResolution:this.resolution,currentRotation:this.rotation}},methods:{zoomChanged(n){this.currentZoom=n},resolutionChanged(n){this.currentResolution=n},centerChanged(n){this.currentCenter=n},rotationChanged(n){this.currentRotation=n}}};p.render=function(n,l,c,p,u,d){const h=e("ol-view"),m=e("ol-source-osm"),g=e("ol-tile-layer"),k=e("ol-map");return t(),o(r,null,[a(k,{style:{height:"400px"}},{default:s((()=>[a(h,{ref:"view",center:p.center,rotation:p.rotation,zoom:p.zoom,projection:p.projection,onZoomChanged:d.zoomChanged,onCenterChanged:d.centerChanged,onResolutionChanged:d.resolutionChanged,onRotationChanged:d.rotationChanged},null,8,["center","rotation","zoom","projection","onZoomChanged","onCenterChanged","onResolutionChanged","onRotationChanged"]),a(g,null,{default:s((()=>[a(m)])),_:1})])),_:1}),a("div",null," center : "+i(u.currentCenter)+" zoom : "+i(u.currentZoom)+" resolution : "+i(u.currentResolution)+" rotation : "+i(u.currentRotation),1)],64)};const u=a("h1",{id:"ol-view"},[a("a",{class:"header-anchor",href:"#ol-view","aria-hidden":"true"},"#"),l(" ol-view")],-1),d=a("p",null,"A View object represents a simple 2D view of the map.",-1),h=a("p",null,"This is the object to act upon to change the center, resolution, and rotation of the map.",-1),m=a("p",null,"A View has a projection. The projection determines the coordinate system of the center, and its units determine the units of the resolution (projection units per pixel). The default projection is Spherical Mercator (EPSG:3857).",-1),g=c('',167),k='{"title":"ol-view","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"componentsguide/view/index.md","lastUpdated":1628604775086}',f={};const v=Object.assign(f,{expose:[],setup:function(n){return(n,i)=>{const r=e("ClientOnly");return t(),o("div",null,[u,d,h,m,a(r,null,{default:s((()=>[a(p)])),_:1}),g])}}});export default v;export{k as __pageData};