import{r as t,n as e,d as o,o as i,c as n,w as r,e as a}from"./app.ff6312e5.js";const c={setup(){const o=t(2),i=t(0),n=t([1024,968]),r=t([n.value[0]/2,n.value[1]/2]),a=t([0,0,...n.value]);return{center:r,projection:e({code:"xkcd-image",units:"pixels",extent:a}),zoom:o,rotation:i,size:n,extent:a,imgUrl:t("https://imgs.xkcd.com/comics/online_communities.png"),imgCopyright:t('© <a href="http://xkcd.com/license.html">xkcd</a>')}}};c.render=function(t,e,c,l,s,m){const p=o("ol-view"),u=o("ol-zoom-control"),g=o("ol-attribution-control"),d=o("ol-source-image-static"),x=o("ol-image-layer"),h=o("ol-map");return i(),n(h,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:r((()=>[a(p,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),a(u),a(g),a(x,{id:"xkcd"},{default:r((()=>[a(d,{url:l.imgUrl,imageSize:l.size,imageExtent:l.extent,projection:l.projection,attributions:l.imgCopyright},null,8,["url","imageSize","imageExtent","projection","attributions"])])),_:1})])),_:1})};export{c as _};