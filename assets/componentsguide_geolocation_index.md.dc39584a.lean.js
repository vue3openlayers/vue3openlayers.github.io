import{r as n,d as a,o as s,c as t,w as o,e as p,a as e}from"./app.381f6a48.js";const c={setup(){const a=n([40,40]),s=n("EPSG:4326"),t=n(8),o=n(0),p=n(null),e=n(null);return{center:a,projection:s,zoom:t,rotation:o,hereIcon:"/assets/here.976f4cfe.png",view:p,map:e,geoLocChange:n=>{console.log(n),p.value.fit([n[0],n[1],n[0],n[1]],{maxZoom:14})}}}};c.render=function(n,e,c,l,u,i){const k=a("ol-view"),r=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-geom-point"),m=a("ol-style-icon"),h=a("ol-style"),f=a("ol-feature"),q=a("ol-source-vector"),v=a("ol-vector-layer"),y=a("ol-geolocation"),_=a("ol-map");return s(),t(_,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"},ref:"map"},{default:o((()=>[p(k,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),p(g,null,{default:o((()=>[p(r)])),_:1}),p(y,{projection:l.projection,onPositionChanged:l.geoLocChange},{default:o((n=>[p(v,{zIndex:2},{default:o((()=>[p(q,null,{default:o((()=>[p(f,{ref:"positionFeature"},{default:o((()=>[p(d,{coordinates:n.position},null,8,["coordinates"]),p(h,null,{default:o((()=>[p(m,{src:l.hereIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1536)])),_:2},1024)])),_:2},1024)])),_:1},8,["projection","onPositionChanged"])])),_:1},512)};const l=e('',3),u=e('',14),i='{"title":"ol-geolocation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Emits","slug":"emits"}],"relativePath":"componentsguide/geolocation/index.md","lastUpdated":1628604166968}',k={};const r=Object.assign(k,{expose:[],setup:function(n){return(n,e)=>{const i=a("ClientOnly");return s(),t("div",null,[l,p(i,null,{default:o((()=>[p(c)])),_:1}),u])}}});export default r;export{i as __pageData};
