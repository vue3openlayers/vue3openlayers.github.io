import{r as o,i as e,d as t,o as r,c as l,w as n,e as a}from"./app.ce43e203.js";const s={setup(){const t=o([0,0]),r=o("EPSG:4326"),l=o(3),n=o(0),a=o("https://openlayers.org/en/latest/examples/data/geojson/countries.geojson"),s=e("ol-format");console.log(s);return{center:t,projection:r,zoom:l,rotation:n,url:a,geoJson:new s.GeoJSON}}};s.render=function(o,e,s,i,c,u){const p=t("ol-view"),m=t("ol-source-osm"),f=t("ol-tile-layer"),g=t("ol-source-vector"),d=t("ol-vector-layer"),j=t("ol-map");return r(),l(j,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:n((()=>[a(p,{ref:"view",center:i.center,rotation:i.rotation,zoom:i.zoom,projection:i.projection},null,8,["center","rotation","zoom","projection"]),a(f,null,{default:n((()=>[a(m)])),_:1}),a(d,null,{default:n((()=>[a(g,{url:i.url,format:i.geoJson},null,8,["url","format"])])),_:1})])),_:1})};export{s as _};