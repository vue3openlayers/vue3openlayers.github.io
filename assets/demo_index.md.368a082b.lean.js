import{r as n,i as a,b as s,d as t,o as p,c as o,w as e,e as c,f as l,F as u,g as k,t as i,a as r}from"./app.5655de5b.js";import{m as g}from"./marker.4b23fbad.js";import{s as m}from"./star.309f7afc.js";const q={setup(){const t=n([34,39.13]),p=n("EPSG:4326"),o=n(6),e=n(0),c=new(a("ol-format").GeoJSON),l=a("ol-selectconditions").pointerMove,u=n(""),k=n([]),i=a("ol-extent"),r=a("ol-feature"),q=a("ol-geom"),d=n([]),y=n(null),v=n(null),f=n(!1),w=n("Point");d.value=[{text:"Center map here",classname:"some-style-class",callback:n=>{v.value.setCenter(n.coordinate)}},{text:"Add a Marker",classname:"some-style-class",icon:g,callback:n=>{console.log(n);let a=new r({geometry:new q.Point(n.coordinate)});y.value.source.addFeature(a)}},"-"];const h=n(null),b=n(null),S=n(null),x=n([]);s((()=>{x.value.push(b.value.tileLayer),x.value.push(S.value.tileLayer),console.log(x.value)}));const T=n([[25.6064453125,44.73302734375001],[27.759765625,44.75500000000001],[28.287109375,43.32677734375001],[30.55029296875,46.40294921875001],[31.69287109375,43.04113281250001]]),I=n(null);return{center:t,projection:p,zoom:o,rotation:e,geoJson:c,featureSelected:n=>{1==n.selected.length?(k.value=i.getCenter(n.selected[0].getGeometry().extent_),u.value=n.selected[0].values_.name):u.value=""},selectCondition:l,selectedCityName:u,selectedCityPosition:k,markerIcon:g,overrideStyleFunction:(n,a)=>{let s=n.get("features").length,t=s>20?"192,0,0":s>8?"255,128,0":"0,128,0";var p=Math.max(8,Math.min(s,20));let o=2*Math.PI*p/6,e=[0,o,o,o,o,o,o];a.getImage().getStroke().setLineDash(o),a.getImage().getStroke().setColor("rgba("+t+",0.5)"),a.getImage().getStroke().setLineDash(e),a.getImage().getFill().setColor("rgba("+t+",1)"),a.getImage().setRadius(p),a.getText().setText(s.toString())},getRandomInRange:(n,a,s)=>1*(Math.random()*(a-n)+n).toFixed(s),contextMenuItems:d,vectorsource:y,view:v,selectInteactionFilter:n=>null!=n.values_.name,drawstart:n=>{console.log(n)},drawend:n=>{console.log(n)},modifystart:n=>{console.log(n)},modifyend:n=>{console.log(n)},videoStopped:n=>{console.log(n)},drawEnable:f,drawType:w,layerList:x,jawgLayer:b,swipeControl:h,osmLayer:S,starIcon:m,changeDrawType:(n,a)=>{f.value=n,w.value=a},path:T,animationPath:I,zones:[{title:"Turkey",extent:[17.952,46.241,52.449,31.222]},{title:"Cyprus",extent:[31.2836,36.1623,35.5957,34.1823]},{title:"Brazil",extent:[-120.32,22.76,17.67,-47.52]}],webglPointsStyle:{symbol:{symbolType:"circle",size:["interpolate",["linear"],["get","population"],4e4,8,2e6,28],color:"#ffed02",rotateWithView:!1,offset:[0,0],opacity:["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]}}}}},d={class:"overlay-content"};q.render=function(n,a,s,r,g,m){const q=t("ol-view"),y=t("ol-swipe-control"),v=t("ol-layerswitcherimage-control"),f=t("ol-zone-control"),w=t("ol-source-osm"),h=t("ol-tile-layer"),b=t("ol-source-xyz"),S=t("ol-control-toggle"),x=t("ol-control-videorecorder"),T=t("ol-control-printdialog"),I=t("ol-control-bar"),C=t("ol-mouseposition-control"),_=t("ol-fullscreen-control"),j=t("ol-overviewmap-control"),L=t("ol-scaleline-control"),P=t("ol-rotate-control"),z=t("ol-zoom-control"),R=t("ol-zoomslider-control"),M=t("ol-zoomtoextent-control"),D=t("ol-context-menu"),F=t("ol-style-stroke"),N=t("ol-style-fill"),A=t("ol-style-icon"),E=t("ol-style"),J=t("ol-interaction-clusterselect"),W=t("ol-interaction-select"),G=t("ol-interaction-modify"),O=t("ol-interaction-draw"),V=t("ol-interaction-snap"),Y=t("ol-source-vector"),B=t("ol-style-circle"),X=t("ol-vector-layer"),U=t("ol-geom-point"),H=t("ol-feature"),Q=t("ol-animation-shake"),Z=t("ol-style-text"),K=t("ol-animated-clusterlayer"),$=t("ol-overlay"),nn=t("ol-geom-line-string"),an=t("ol-style-flowline"),sn=t("ol-animation-path"),tn=t("ol-source-webglpoints"),pn=t("ol-webglpoints-layer"),on=t("ol-map");return p(),o(on,{ref:"map",loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"800px"}},{default:e((()=>[c(q,{ref:"view",center:r.center,rotation:r.rotation,zoom:r.zoom,projection:r.projection},null,8,["center","rotation","zoom","projection"]),r.layerList.length>0?(p(),o(y,{key:0,ref:"swipeControl",layerList:r.layerList},null,8,["layerList"])):l("v-if",!0),c(v),null!=r.jawgLayer?(p(),o(f,{key:1,zones:r.zones,projection:r.projection,layer:r.jawgLayer.tileLayer},null,8,["zones","projection","layer"])):l("v-if",!0),c(h,{ref:"osmLayer",title:"OSM"},{default:e((()=>[c(w)])),_:1},512),c(h,{ref:"jawgLayer",title:"JAWG"},{default:e((()=>[c(b,{crossOrigin:"anonymous",url:"https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"})])),_:1},512),c(I,null,{default:e((()=>[c(S,{html:"<i class='fas fa-map-marker'></i>",className:"edit",title:"Point",onToggle:n=>r.changeDrawType(n,"Point")},null,8,["onToggle"]),c(S,{html:"<i class='fas fa-draw-polygon'></i>",className:"edit",title:"Polygon",onToggle:n=>r.changeDrawType(n,"Polygon")},null,8,["onToggle"]),c(S,{html:"<i class='fas fa-circle'></i>",className:"edit",title:"Circle",onToggle:n=>r.changeDrawType(n,"Circle")},null,8,["onToggle"]),c(S,{html:"<i class='fas fa-grip-lines'></i>",className:"edit",title:"LineString",onToggle:n=>r.changeDrawType(n,"LineString")},null,8,["onToggle"]),c(x,{onStop:r.videoStopped},null,8,["onStop"]),c(T)])),_:1}),c(C),c(_),c(j,null,{default:e((()=>[c(h,null,{default:e((()=>[c(w)])),_:1})])),_:1}),c(L),c(P),c(z),c(R),c(M,{extent:[23.906,42.812,46.934,34.597],tipLabel:"Fit to Turkey"},null,8,["extent"]),c(D,{items:r.contextMenuItems},null,8,["items"]),c(J,{onSelect:r.featureSelected,pointRadius:20},{default:e((()=>[c(E,null,{default:e((()=>[c(F,{color:"green",width:5}),c(N,{color:"rgba(255,255,255,0.5)"}),c(A,{src:r.markerIcon,scale:.05},null,8,["src","scale"])])),_:1})])),_:1},8,["onSelect"]),r.drawEnable?l("v-if",!0):(p(),o(W,{key:2,onSelect:r.featureSelected,condition:r.selectCondition,filter:r.selectInteactionFilter},{default:e((()=>[c(E,null,{default:e((()=>[c(F,{color:"green",width:10}),c(N,{color:"rgba(255,255,255,0.5)"}),c(A,{src:r.markerIcon,scale:.05},null,8,["src","scale"])])),_:1})])),_:1},8,["onSelect","condition","filter"])),c(X,{title:"AIRPORTS",preview:"https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/tr.png"},{default:e((()=>[c(Y,{ref:"cities",url:"https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json",format:r.geoJson,projection:r.projection},{default:e((()=>[r.drawEnable?(p(),o(G,{key:0,onModifyend:r.modifyend,onModifystart:r.modifystart},null,8,["onModifyend","onModifystart"])):l("v-if",!0),r.drawEnable?(p(),o(O,{key:1,type:r.drawType,onDrawend:r.drawend,onDrawstart:r.drawstart},null,8,["type","onDrawend","onDrawstart"])):l("v-if",!0),r.drawEnable?(p(),o(V,{key:2})):l("v-if",!0)])),_:1},8,["format","projection"]),c(E,null,{default:e((()=>[c(F,{color:"red",width:2}),c(N,{color:"rgba(255,255,255,0.1)"}),c(B,{radius:7},{default:e((()=>[c(N,{color:"blue"})])),_:1})])),_:1})])),_:1}),c(X,{updateWhileAnimating:!0,updateWhileInteracting:!0,title:"STAR",preview:"https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png"},{default:e((()=>[c(Y,{ref:"vectorsource"},{default:e((()=>[c(Q,{duration:2e3,repeat:5},{default:e((()=>[(p(),o(u,null,k(20,(n=>c(H,{key:n},{default:e((()=>[c(U,{coordinates:[r.getRandomInRange(24,45,3),r.getRandomInRange(35,41,3)]},null,8,["coordinates"]),c(E,null,{default:e((()=>[c(A,{src:r.starIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1024))),64))])),_:1})])),_:1},512)])),_:1}),c(K,{animationDuration:500,distance:40,title:"CLUSTER",preview:"https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/cluster.png"},{default:e((()=>[c(Y,{ref:"vectorsource"},{default:e((()=>[(p(),o(u,null,k(500,(n=>c(H,{key:n},{default:e((()=>[c(U,{coordinates:[r.getRandomInRange(24,45,3),r.getRandomInRange(35,41,3)]},null,8,["coordinates"])])),_:2},1024))),64))])),_:1},512),c(E,{overrideStyleFunction:r.overrideStyleFunction},{default:e((()=>[c(F,{color:"red",width:2}),c(N,{color:"rgba(255,255,255,0.1)"}),c(B,{radius:20},{default:e((()=>[c(F,{color:"black",width:15,lineDash:[],lineCap:"butt"}),c(N,{color:"black"})])),_:1}),c(Z,null,{default:e((()=>[c(N,{color:"white"})])),_:1})])),_:1},8,["overrideStyleFunction"])])),_:1}),""==r.selectedCityName||r.drawEnable?l("v-if",!0):(p(),o($,{key:3,position:r.selectedCityPosition},{default:e((n=>[c("div",d,i(r.selectedCityName)+" "+i(n),1)])),_:1},8,["position"])),c(X,null,{default:e((()=>[c(Y,null,{default:e((()=>[c(H,{ref:"animationPath"},{default:e((()=>[c(nn,{coordinates:r.path},null,8,["coordinates"]),c(an,{color:"red",color2:"yellow",width:10,width2:10,arrow:1})])),_:1},512),r.animationPath?(p(),o(sn,{key:0,path:r.animationPath.feature,duration:4e3,repeat:10},{default:e((()=>[c(H,null,{default:e((()=>[c(U,{coordinates:r.path[0]},null,8,["coordinates"]),c(E,null,{default:e((()=>[c(B,{radius:10},{default:e((()=>[c(N,{color:"blue"}),c(F,{color:"blue",width:2})])),_:1})])),_:1})])),_:1})])),_:1},8,["path"])):l("v-if",!0)])),_:1})])),_:1}),c(pn,{style:r.webglPointsStyle},{default:e((()=>[c(tn,{format:r.geoJson,url:"https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"},null,8,["format"])])),_:1},8,["style"])])),_:1},512)};const y=r('',2),v='{"title":"","description":"","frontmatter":{},"relativePath":"demo/index.md","lastUpdated":1644318273306}',f={};const w=Object.assign(f,{expose:[],setup:function(n){return(n,a)=>{const s=t("ClientOnly");return p(),o("div",null,[c(s,null,{default:e((()=>[c(q)])),_:1}),y])}}});export default w;export{v as __pageData};
