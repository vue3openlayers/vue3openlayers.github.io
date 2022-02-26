import{r as n,i as s,d as a,o as t,c as p,w as o,e,j as c,a as l}from"./app.4dd796d2.js";const u={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(3),rotation:n(0),geoJson:new(s("ol-format").GeoJSON),webglPointsStyle:{symbol:{symbolType:"circle",size:["interpolate",["linear"],["get","population"],4e4,8,2e6,28],color:"#ffed02",rotateWithView:!1,offset:[0,0],opacity:["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]}}})};u.render=function(n,s,c,l,u,i){const r=a("ol-view"),k=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-source-webglpoints"),m=a("ol-webglpoints-layer"),y=a("ol-map");return t(),p(y,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[e(r,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),e(g,null,{default:o((()=>[e(k)])),_:1}),e(m,{style:l.webglPointsStyle},{default:o((()=>[e(d,{format:l.geoJson,url:"https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"},null,8,["format"])])),_:1},8,["style"])])),_:1})};const i=e("h1",{id:"ol-webglpoints-layer"},[e("a",{class:"header-anchor",href:"#ol-webglpoints-layer","aria-hidden":"true"},"#"),c(" ol-webglpoints-layer")],-1),r=l('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span>\n            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span>\n        <span class="token punctuation">/&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-webglpoints-layer</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webglPointsStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-webglpoints</span>\n                <span class="token attr-name">:format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>geoJson<span class="token punctuation">&quot;</span></span>\n                <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson<span class="token punctuation">&quot;</span></span>\n            <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-webglpoints-layer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref<span class="token punctuation">,</span>\n    inject\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;ol-format&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> geoJson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">format<span class="token punctuation">.</span>GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">const</span> webglPointsStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n            symbol<span class="token operator">:</span> <span class="token punctuation">{</span>\n                symbolType<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>\n                size<span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;population&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token number">40000</span><span class="token punctuation">,</span>\n                    <span class="token number">8</span><span class="token punctuation">,</span>\n                    <span class="token number">2000000</span><span class="token punctuation">,</span>\n                    <span class="token number">28</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                color<span class="token operator">:</span> <span class="token string">&#39;#ffed02&#39;</span><span class="token punctuation">,</span>\n                rotateWithView<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                offset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                opacity<span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;population&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token number">40000</span><span class="token punctuation">,</span>\n                    <span class="token number">0.6</span><span class="token punctuation">,</span>\n                    <span class="token number">2000000</span><span class="token punctuation">,</span>\n                    <span class="token number">0.92</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            geoJson<span class="token punctuation">,</span>\n            webglPointsStyle\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="disablehitdetection"><a class="header-anchor" href="#disablehitdetection" aria-hidden="true">#</a> disableHitDetection</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="style"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h1><ul><li><strong>Type</strong>: <code>object</code></li><li><strong>Default</strong>: <code>() =&gt; ({ symbol: { symbolType: &#39;circle&#39;, size: 8, color: &#39;#33AAFF&#39;, opacity: 0.9 } })</code></li></ul>',8),k='{"title":"ol-webglpoints-layer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/layers/webglpointslayer/index.md","lastUpdated":1645895483719}',g={};const d=Object.assign(g,{expose:[],setup:function(n){return(n,s)=>{const c=a("ClientOnly");return t(),p("div",null,[i,e(c,null,{default:o((()=>[e(u)])),_:1}),r])}}});export default d;export{k as __pageData};