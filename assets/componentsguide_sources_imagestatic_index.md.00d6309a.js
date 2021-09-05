import{d as n,o as a,c as s,e as t,w as o,j as p,a as e}from"./app.ce43e203.js";import{_ as c}from"./ImageLayerDemo.2ff3bec6.js";const u=t("h1",{id:"ol-source-image-static"},[t("a",{class:"header-anchor",href:"#ol-source-image-static","aria-hidden":"true"},"#"),p(" ol-source-image-static")],-1),l=t("p",null,"A layer source for displaying a single, static image.",-1),i=e('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Example below shows how to use ol-image-layer component together with ol-source-image-static to render custom image on the map. The map view is configured with a custom projection that translates image coordinates directly into map coordinates.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-zoom-control</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-attribution-control</span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-image-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-image-static</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:imageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:imageExtent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>extent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:attributions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgCopyright<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-image-static</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-image-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref<span class="token punctuation">,</span>\n    reactive\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">968</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>size<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> extent <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">...</span>size<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            code<span class="token operator">:</span> <span class="token string">&#39;xkcd-image&#39;</span><span class="token punctuation">,</span>\n            units<span class="token operator">:</span> <span class="token string">&#39;pixels&#39;</span><span class="token punctuation">,</span>\n            extent<span class="token operator">:</span> extent<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> imgUrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;https://imgs.xkcd.com/comics/online_communities.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> imgCopyright <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;© &lt;a href=&quot;http://xkcd.com/license.html&quot;&gt;xkcd&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            size<span class="token punctuation">,</span>\n            extent<span class="token punctuation">,</span>\n            imgUrl<span class="token punctuation">,</span>\n            imgCopyright\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="attributions"><a class="header-anchor" href="#attributions" aria-hidden="true">#</a> attributions</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Attributions</p><h1 id="crossorigin"><a class="header-anchor" href="#crossorigin" aria-hidden="true">#</a> crossOrigin</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>ol-layer</code></li></ul><p>The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.</p><h1 id="imageextent"><a class="header-anchor" href="#imageextent" aria-hidden="true">#</a> imageExtent</h1><ul><li><strong>Type</strong>: <code>Array</code></li></ul><p>Extent of the image in map coordinates. This is the [left, bottom, right, top] map coordinates of your image.</p><h1 id="imagesmoothing"><a class="header-anchor" href="#imagesmoothing" aria-hidden="true">#</a> imageSmoothing</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Enable image smoothing.</p><h1 id="projection"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h1><ul><li><strong>Type</strong>: <code>string or object (options projection)</code></li><li><strong>Default</strong>: <code>Projection. Default is the view projection.</code></li></ul><p>The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.</p><h1 id="imagesize"><a class="header-anchor" href="#imagesize" aria-hidden="true">#</a> imageSize</h1><ul><li><strong>Type</strong>: <code>Array</code></li></ul><p>Size of the image in pixels. Usually the image size is auto-detected, so this only needs to be set if auto-detection fails for some reason.</p><h1 id="url"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Image URL.</p>',26),r='{"title":"ol-source-image-static","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/imagestatic/index.md","lastUpdated":1628604607911}',k={};const g=Object.assign(k,{expose:[],setup:function(p){return(p,e)=>{const r=n("ClientOnly");return a(),s("div",null,[u,l,t(r,null,{default:o((()=>[t(c)])),_:1}),i])}}});export default g;export{r as __pageData};