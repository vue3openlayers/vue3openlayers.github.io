import{r as o,d as e,o as l,c as t,w as r,e as n}from"./app.ce43e203.js";const a={setup:()=>({center:o([40,40]),projection:o("EPSG:4326"),zoom:o(8),rotation:o(0)})};a.render=function(o,a,i,s,c,u){const d=e("ol-view"),f=e("ol-source-osm"),p=e("ol-tile-layer"),m=e("ol-geom-point"),_=e("ol-style-fill"),y=e("ol-style-stroke"),h=e("ol-style-circle"),j=e("ol-style"),w=e("ol-feature"),g=e("ol-source-vector"),v=e("ol-vector-layer"),z=e("ol-map");return l(),t(z,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:r((()=>[n(d,{ref:"view",center:s.center,rotation:s.rotation,zoom:s.zoom,projection:s.projection},null,8,["center","rotation","zoom","projection"]),n(p,null,{default:r((()=>[n(f)])),_:1}),n(v,null,{default:r((()=>[n(g,null,{default:r((()=>[n(w,null,{default:r((()=>[n(m,{coordinates:[40,40]}),n(j,null,{default:r((()=>[n(h,{radius:"30"},{default:r((()=>[n(_,{color:"white"}),n(y,{color:"red",width:10})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};export{a as _};