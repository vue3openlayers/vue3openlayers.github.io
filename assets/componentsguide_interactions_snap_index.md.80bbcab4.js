import{d as n,o as s,c as a,e as t,w as p,j as o,a as e}from"./app.ce43e203.js";import{_ as c}from"./SnapModifyDemo.d2e4a8aa.js";const u=t("h1",{id:"ol-interaction-snap"},[t("a",{class:"header-anchor",href:"#ol-interaction-snap","aria-hidden":"true"},"#"),o(" ol-interaction-snap")],-1),l=t("blockquote",null,[t("p",null,"Handles snapping of vector features while modifying or drawing them.")],-1),k=t("h2",{id:"usage"},[t("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),o(" Usage")],-1),i=e('<div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnabled = !drawEnabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Draw<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n{{drawEnabled}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:load-tiles-while-animating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:load-tiles-while-interacting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 350px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vectorStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span> <span class="token attr-name">:features</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zones<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-modify</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modifyEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:features</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedFeatures<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-interaction-modify</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-draw</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:stopClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Polygon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@drawend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawend<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-snap</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modifyEnabled<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-select</span> <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>featureSelected<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:condition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectCondition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:features</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedFeatures<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-stroke</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>red<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-stroke</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-fill</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`rgba(255, 0, 0, 0.4)`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-fill</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-interaction-select</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref<span class="token punctuation">,</span>\n    inject\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    GeoJSON\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/format&quot;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    Fill<span class="token punctuation">,</span>\n    Stroke<span class="token punctuation">,</span>\n    Style\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/style&quot;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    Collection\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol&quot;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">102.13121</span><span class="token punctuation">,</span> <span class="token number">40.2436</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> modifyEnabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> drawEnabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> geojsonObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n            type<span class="token operator">:</span> <span class="token string">&quot;FeatureCollection&quot;</span><span class="token punctuation">,</span>\n            crs<span class="token operator">:</span> <span class="token punctuation">{</span>\n                type<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n                properties<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    name<span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            features<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                    type<span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>\n                    geometry<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        type<span class="token operator">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>\n                        coordinates<span class="token operator">:</span> <span class="token punctuation">[</span>\n                            <span class="token punctuation">[</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86923852630616</span><span class="token punctuation">,</span> <span class="token number">43.45599322423934</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.90891107984544</span><span class="token punctuation">,</span> <span class="token number">39.34240191087722</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.76630637117387</span><span class="token punctuation">,</span> <span class="token number">39.558687199211114</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.89435771175386</span><span class="token punctuation">,</span> <span class="token number">43.945405844902986</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86923852630616</span><span class="token punctuation">,</span> <span class="token number">43.45599322423934</span><span class="token punctuation">]</span>\n                            <span class="token punctuation">]</span>\n                        <span class="token punctuation">]</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    type<span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>\n                    geometry<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        type<span class="token operator">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>\n                        coordinates<span class="token operator">:</span> <span class="token punctuation">[</span>\n                            <span class="token punctuation">[</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.85636392303468</span><span class="token punctuation">,</span> <span class="token number">38.10970692739486</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86770698495866</span><span class="token punctuation">,</span> <span class="token number">33.218572724914544</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.20654544301988</span><span class="token punctuation">,</span> <span class="token number">33.6532810221672</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.4408283538437</span><span class="token punctuation">,</span> <span class="token number">38.31894739375114</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.85636392303468</span><span class="token punctuation">,</span> <span class="token number">38.10970692739486</span><span class="token punctuation">]</span>\n                            <span class="token punctuation">]</span>\n                        <span class="token punctuation">]</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">const</span> zones <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> selectedFeatures <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Collection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> <span class="token function-variable function">drawend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\n            zones<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>feature<span class="token punctuation">)</span>\n            selectedFeatures<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>feature<span class="token punctuation">)</span>\n\n            modifyEnabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n            drawEnabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>\n\n        <span class="token punctuation">}</span>\n\n        zones<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFeatures</span><span class="token punctuation">(</span>geojsonObject<span class="token punctuation">)</span>\n\n        <span class="token keyword">function</span> <span class="token function">vectorStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                stroke<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    color<span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>\n                    width<span class="token operator">:</span> <span class="token number">3</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                fill<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    color<span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 255, 0.4)&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token keyword">return</span> style\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">const</span> geoJsonFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> selectConditions <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;ol-selectconditions&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> selectCondition <span class="token operator">=</span> selectConditions<span class="token punctuation">.</span>click\n\n        <span class="token keyword">function</span> <span class="token function">featureSelected</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            modifyEnabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>selected<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                modifyEnabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span>\n            selectedFeatures<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            map<span class="token punctuation">,</span>\n            vectorStyle<span class="token punctuation">,</span>\n            geoJsonFormat<span class="token punctuation">,</span>\n            featureSelected<span class="token punctuation">,</span>\n            selectCondition<span class="token punctuation">,</span>\n            zones<span class="token punctuation">,</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            modifyEnabled<span class="token punctuation">,</span>\n            drawEnabled<span class="token punctuation">,</span>\n            drawend<span class="token punctuation">,</span>\n            selectedFeatures\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="pixeltolerance"><a class="header-anchor" href="#pixeltolerance" aria-hidden="true">#</a> pixelTolerance</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>10</code></li></ul><h1 id="edge"><a class="header-anchor" href="#edge" aria-hidden="true">#</a> edge</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="vertex"><a class="header-anchor" href="#vertex" aria-hidden="true">#</a> vertex</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul>',9),r='{"title":"ol-interaction-snap","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/interactions/snap/index.md","lastUpdated":1628604956060}',d={};const g=Object.assign(d,{expose:[],setup:function(o){return(o,e)=>{const r=n("ClientOnly");return s(),a("div",null,[u,l,k,t(r,null,{default:p((()=>[t(c)])),_:1}),i])}}});export default g;export{r as __pageData};