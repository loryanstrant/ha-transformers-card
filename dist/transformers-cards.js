/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;let i=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=s.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(r,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,r,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new i(s,t,r)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",u=g.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!n(t,e),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);i?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,s)=>{if(e)r.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),i=t.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(void 0!==s&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=r.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const a=i.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const s=this.constructor,i=this[t];if(r??=s.getPropertyOptions(t),!((r.hasChanged??y)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==i||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,r,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,u?.({ReactiveElement:_}),(g.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=$.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,C=`<${k}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,z="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,I=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,H=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),W=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Y=new WeakMap,V=T.createTreeWalker(T,129);function F(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const q=(t,e)=>{const r=t.length-1,s=[];let i,a=2===e?"<svg>":3===e?"<math>":"",o=O;for(let e=0;e<r;e++){const r=t[e];let n,c,l=-1,d=0;for(;d<r.length&&(o.lastIndex=d,c=o.exec(r),null!==c);)d=o.lastIndex,o===O?"!--"===c[1]?o=P:void 0!==c[1]?o=N:void 0!==c[2]?(H.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=I):void 0!==c[3]&&(o=I):o===I?">"===c[0]?(o=i??O,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?I:'"'===c[3]?D:L):o===D||o===L?o=I:o===P||o===N?o=O:(o=I,i=void 0);const p=o===I&&t[e+1].startsWith("/>")?" ":"";a+=o===O?r+C:l>=0?(s.push(n),r.slice(0,l)+S+r.slice(l)+E+p):r+E+(-2===l?e:p)}return[F(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,a=0;const o=t.length-1,n=this.parts,[c,l]=q(t,e);if(this.el=G.createElement(c,r),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&n.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[a++],r=s.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:X}),s.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:i}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)s.append(t[r],U()),V.nextNode(),n.push({type:2,index:++i});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===k)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)n.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function K(t,e,r=t,s){if(e===W)return e;let i=void 0!==s?r._$Co?.[s]:r._$Cl;const a=M(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,s)),void 0!==s?(r._$Co??=[])[s]=i:r._$Cl=i),void 0!==i&&(e=K(t,i._$AS(t,e.values),i,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);V.currentNode=s;let i=V.nextNode(),a=0,o=0,n=r[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new J(i,i.nextSibling,this,t):1===n.type?e=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(e=new rt(i,this,t)),this._$AV.push(e),n=r[++o]}a!==n?.index&&(i=V.nextNode(),a++)}return V.currentNode=T,s}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=G.createElement(F(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new J(this.O(U()),this.O(U()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}_$AI(t,e=this,r,s){const i=this.strings;let a=!1;if(void 0===i)t=K(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const s=t;let o,n;for(t=i[0],o=0;o<i.length-1;o++)n=K(this,s[r+o],e,o),n===W&&(n=this._$AH[o]),a||=!M(n)||n!==this._$AH[o],n===j?t=j:t!==j&&(t+=(n??"")+i[o+1]),this._$AH[o]=n}a&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class et extends X{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??j)===W)return;const r=this._$AH,s=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==j&&(r===j||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(G,J),($.litHtmlVersions??=[]).push("3.3.1");const it=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const s=r?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=r?.renderBefore??null;s._$litPart$=i=new J(e.insertBefore(U(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,it.litElementHydrateSupport?.({LitElement:at});const ot=it.litElementPolyfillSupport;ot?.({LitElement:at}),(it.litElementVersions??=[]).push("4.2.1");const nt=a`
  :host {
    --transformers-primary-color: #e31e24;
    --transformers-secondary-color: #1e3a8a;
    --transformers-accent-color: #fbbf24;
    --transformers-background-color: #0a0e27;
    --transformers-panel-color: #1a1f3a;
    --transformers-border-color: #e31e24;
    --transformers-text-color: #ffffff;
    --transformers-glow-color: rgba(227, 30, 36, 0.6);
    --transformers-font-family: 'Transformers Movie', 'Arial Black', sans-serif;
    --transformers-header-font: 'Transformers Movie', 'Arial Black', sans-serif;
    --transformers-grid-opacity: 0.15;
  }

  .card {
    background: linear-gradient(135deg, var(--transformers-background-color) 0%, #0f1632 100%);
    color: var(--transformers-text-color);
    border: 3px solid var(--transformers-border-color);
    border-left: 6px solid var(--transformers-border-color);
    box-shadow: 
      0 0 20px var(--transformers-glow-color),
      inset 0 0 30px rgba(227, 30, 36, 0.1),
      inset 4px 0 8px rgba(30, 58, 138, 0.3);
    padding: 20px;
    position: relative;
    overflow: hidden;
    clip-path: polygon(
      0 0,
      calc(100% - 12px) 0,
      100% 12px,
      100% 100%,
      12px 100%,
      0 calc(100% - 12px)
    );
  }

  /* Angular corner accents */
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, var(--transformers-border-color) 1px, transparent 1px),
      linear-gradient(0deg, var(--transformers-border-color) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: var(--transformers-grid-opacity);
    pointer-events: none;
    z-index: 1;
  }

  /* Tech panel effect */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(30, 58, 138, 0.3),
      rgba(30, 58, 138, 0.2)
    );
    pointer-events: none;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
  }

  .card-header {
    font-family: var(--transformers-header-font);
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--transformers-border-color);
    font-weight: bold;
    text-shadow: 
      0 0 10px var(--transformers-glow-color),
      2px 2px 4px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    position: relative;
  }

  .card-header::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid var(--transformers-border-color);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-right: 12px;
    filter: drop-shadow(0 0 4px var(--transformers-glow-color));
  }

  .card-header::after {
    content: '';
    position: absolute;
    right: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--transformers-accent-color),
      transparent
    );
  }

  .status-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    position: relative;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }

  .status-indicator::before {
    content: '';
    position: absolute;
    inset: 0;
    background: currentColor;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .status-ok {
    color: #10b981;
    filter: drop-shadow(0 0 4px #10b981);
  }

  .status-warning {
    color: var(--transformers-accent-color);
    filter: drop-shadow(0 0 4px var(--transformers-accent-color));
  }

  .status-error {
    color: var(--transformers-primary-color);
    filter: drop-shadow(0 0 4px var(--transformers-primary-color));
  }

  /* Decepticon theme variant */
  .card.theme-decepticon {
    --transformers-primary-color: #7c3aed;
    --transformers-secondary-color: #4c1d95;
    --transformers-accent-color: #a78bfa;
    --transformers-border-color: #7c3aed;
    --transformers-glow-color: rgba(124, 58, 237, 0.6);
  }

  /* Autobot theme variant (default red/blue) */
  .card.theme-autobot {
    --transformers-primary-color: #e31e24;
    --transformers-secondary-color: #1e3a8a;
    --transformers-border-color: #e31e24;
    --transformers-glow-color: rgba(227, 30, 36, 0.6);
  }

  /* Icon styling */
  .transformers-icon {
    display: inline-block;
    filter: drop-shadow(0 0 2px var(--transformers-glow-color));
  }

  /* Blinking cursor for terminal effects */
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Tech panel divider */
  .tech-divider {
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--transformers-border-color),
      var(--transformers-accent-color),
      var(--transformers-border-color),
      transparent
    );
    margin: 16px 0;
    position: relative;
  }

  .tech-divider::before,
  .tech-divider::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--transformers-accent-color);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    top: -2px;
  }

  .tech-divider::before {
    left: 0;
  }

  .tech-divider::after {
    right: 0;
  }
`;class ct extends at{static get properties(){return{hass:{type:Object},config:{type:Object}}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}getCardSize(){return 3}}customElements.define("transformers-status-card",class extends ct{static get styles(){return[nt,a`
        .status-grid {
          display: grid;
          gap: 12px;
        }

        .status-item {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          background: linear-gradient(
            90deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border-left: 3px solid var(--transformers-border-color);
          position: relative;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        .status-item::after {
          content: '';
          position: absolute;
          right: 8px;
          top: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          opacity: 0.3;
        }

        .status-label {
          flex: 1;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 1.5px;
          font-family: var(--transformers-font-family);
        }

        .status-value {
          font-family: var(--transformers-font-family);
          font-size: 1.1em;
          margin-left: 8px;
          text-shadow: 0 0 4px var(--transformers-glow-color);
        }

        .system-status {
          margin-top: 16px;
          padding: 14px;
          border: 2px solid var(--transformers-secondary-color);
          background: linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.2) 0%,
            rgba(227, 30, 36, 0.1) 100%
          );
          position: relative;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .system-status::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .system-status::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .system-status-header {
          font-size: 0.75em;
          margin-bottom: 8px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .system-message {
          font-family: var(--transformers-font-family);
          line-height: 1.6;
          font-weight: bold;
        }

        /* Red/Warning theme styles */
        .card.theme-red {
          --transformers-primary-color: #dc2626;
          --transformers-border-color: #dc2626;
          --transformers-glow-color: rgba(220, 38, 38, 0.6);
        }

        /* Yellow/Caution theme styles */
        .card.theme-yellow {
          --transformers-primary-color: #fbbf24;
          --transformers-border-color: #fbbf24;
          --transformers-glow-color: rgba(251, 191, 36, 0.6);
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.entities||[],e=this.config.title||"SYSTEM STATUS",r=this.config.message||"ALL SYSTEMS OPERATIONAL",s=!1!==this.config.show_message,i=this.config.theme||"autobot";return B`
      <div class="card theme-${i}">
        <div class="card-content">
          <div class="card-header">${e}</div>
          <div class="status-grid">
            ${t.map(t=>this._renderEntity(t))}
          </div>
          ${s?B`
            <div class="system-status">
              <div class="system-status-header">SYSTEM MESSAGE</div>
              <div class="system-message">> ${r}</div>
            </div>
          `:""}
        </div>
      </div>
    `}_renderEntity(t){const e="string"==typeof t?t:t.entity,r=this.hass.states[e];if(!r)return B`
        <div class="status-item">
          <span class="status-indicator status-error"></span>
          <span class="status-label">${e}</span>
          <span class="status-value">UNAVAILABLE</span>
        </div>
      `;const s=t.name||r.attributes.friendly_name||e,i=this._getStatusClass(r);return B`
      <div class="status-item">
        <span class="status-indicator ${i}"></span>
        <span class="status-label">${s}</span>
        <span class="status-value">${this._formatState(r)}</span>
      </div>
    `}_getStatusClass(t){const e=t.state.toLowerCase();return"on"===e||"open"===e||"active"===e||"home"===e?"status-ok":"unavailable"===e||"unknown"===e||"problem"===e?"status-error":"warning"===e||"low"===e?"status-warning":"status-ok"}_formatState(t){const e=t.state,r=t.attributes.unit_of_measurement||"";return"on"===e||"off"===e?e.toUpperCase():`${e}${r}`.toUpperCase()}static getConfigElement(){return document.createElement("transformers-status-card-editor")}static getStubConfig(){return{title:"SYSTEM STATUS",entities:[],message:"ALL SYSTEMS OPERATIONAL",show_message:!0,theme:"autobot"}}});customElements.define("transformers-sensor-card",class extends ct{static get styles(){return[nt,a`
        .sensor-display {
          text-align: center;
          padding: 20px;
        }

        .sensor-name {
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .sensor-value {
          font-size: 3em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
          margin: 16px 0;
        }

        .sensor-unit {
          font-size: 1.2em;
          margin-left: 8px;
          opacity: 0.8;
        }

        .progress-container {
          margin-top: 20px;
          background: rgba(0, 0, 0, 0.4);
          height: 24px;
          border: 1px solid var(--transformers-border-color);
          position: relative;
          overflow: hidden;
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--transformers-border-color),
            var(--transformers-accent-color)
          );
          transition: width 0.3s ease;
          position: relative;
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.entity,e=this.hass.states[t];if(!e)return B`
        <div class="card">
          <div class="card-content">
            <div class="card-header">SENSOR ERROR</div>
            <div class="sensor-display">
              <div class="sensor-value">UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `;const r=this.config.name||e.attributes.friendly_name||t,s=parseFloat(e.state)||0,i=this.config.unit||e.attributes.unit_of_measurement||"",a=!1!==this.config.show_graph,o=this.config.max||100,n=Math.min(s/o*100,100);return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${r}</div>
          <div class="sensor-display">
            <div class="sensor-value">
              ${e.state}
              <span class="sensor-unit">${i}</span>
            </div>
            ${a?B`
              <div class="progress-container">
                <div class="progress-bar" style="width: ${n}%"></div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{entity:"",name:"",unit:"",show_graph:!0,max:100}}});customElements.define("transformers-button-card",class extends ct{static get styles(){return[nt,a`
        .buttons-container {
          display: grid;
          gap: 12px;
        }

        .buttons-container.columns-1 { grid-template-columns: 1fr; }
        .buttons-container.columns-2 { grid-template-columns: repeat(2, 1fr); }
        .buttons-container.columns-3 { grid-template-columns: repeat(3, 1fr); }

        .button {
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.3) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 0.9em;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .button::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .button:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.5) 0%,
            rgba(30, 58, 138, 0.4) 100%
          );
          box-shadow: 0 0 15px var(--transformers-glow-color);
          transform: translateY(-2px);
        }

        .button:active {
          transform: translateY(0);
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .button.active {
          background: linear-gradient(
            135deg,
            var(--transformers-border-color) 0%,
            var(--transformers-secondary-color) 100%
          );
          box-shadow: 0 0 20px var(--transformers-glow-color);
        }

        .button-icon {
          margin-right: 8px;
          font-size: 1.2em;
        }

        .button-state {
          display: block;
          font-size: 0.75em;
          margin-top: 4px;
          opacity: 0.8;
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.title||"CONTROL PANEL",e=Math.min(Math.max(this.config.columns||1,1),3),r=this.config.buttons||[];return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="buttons-container columns-${e}">
            ${r.map(t=>this._renderButton(t))}
          </div>
        </div>
      </div>
    `}_renderButton(t){const e=t.name||"BUTTON",r=t.icon||"",s=t.show_state||!1;let i=!1,a="";if(t.entity){const e=this.hass.states[t.entity];e&&(i="on"===e.state,a=e.state.toUpperCase())}return B`
      <button 
        class="button ${i?"active":""}"
        @click=${()=>this._handleButtonClick(t)}
      >
        ${r?B`<span class="button-icon">${r}</span>`:""}
        ${e}
        ${s&&a?B`<span class="button-state">${a}</span>`:""}
      </button>
    `}_handleButtonClick(t){if(t.tap_action)this._handleTapAction(t.tap_action,t);else if(t.service){const[e,r]=t.service.split(".");this.hass.callService(e,r,t.service_data||{})}else if(t.entity){const e=t.action||"toggle";"toggle"===e?this.hass.callService("homeassistant","toggle",{entity_id:t.entity}):"turn_on"===e?this.hass.callService("homeassistant","turn_on",{entity_id:t.entity}):"turn_off"===e&&this.hass.callService("homeassistant","turn_off",{entity_id:t.entity})}}_handleTapAction(t,e){if("navigate"===t.action)window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed"));else if("url"===t.action)window.open(t.url_path,"_blank");else if("more-info"===t.action&&e.entity){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:e.entity},this.dispatchEvent(t)}else if("call-service"===t.action){const[e,r]=t.service.split(".");this.hass.callService(e,r,t.service_data||{})}else"toggle"===t.action&&e.entity&&this.hass.callService("homeassistant","toggle",{entity_id:e.entity})}static getStubConfig(){return{title:"CONTROL PANEL",columns:1,buttons:[]}}});customElements.define("transformers-text-card",class extends ct{static get styles(){return[nt,a`
        .text-content {
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          font-family: var(--transformers-font-family);
          line-height: 1.8;
          position: relative;
        }

        .text-content.size-small { font-size: 0.85em; }
        .text-content.size-medium { font-size: 1em; }
        .text-content.size-large { font-size: 1.2em; }

        .text-content.align-left { text-align: left; }
        .text-content.align-center { text-align: center; }
        .text-content.align-right { text-align: right; }

        .text-prompt {
          color: var(--transformers-accent-color);
          margin-right: 8px;
        }

        .text-line {
          margin: 4px 0;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40);
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.title||"MESSAGE",e=this.config.size||"medium",r=this.config.align||"left",s=!1!==this.config.show_prompt,i=this.config.typing_effect||!1;let a=this.config.content||"";if(this.config.entity&&this.config.state_content){const t=this.hass.states[this.config.entity];if(t){const e=t.state;a=this.config.state_content[e]||this.config.state_content.default||a,a=a.replace(/\{\{state\}\}/g,t.state).replace(/\{\{friendly_name\}\}/g,t.attributes.friendly_name||this.config.entity).replace(/\{\{unit\}\}/g,t.attributes.unit_of_measurement||"");const r=Array.from(a.matchAll(/\{\{attribute\.([^}]+)\}\}/g));for(const e of r){const r=e[1],s=t.attributes[r]||"";a=a.replace(e[0],s)}}}else if(this.config.entity){const t=this.hass.states[this.config.entity];if(t&&a){a=a.replace(/\{\{state\}\}/g,t.state).replace(/\{\{friendly_name\}\}/g,t.attributes.friendly_name||this.config.entity).replace(/\{\{unit\}\}/g,t.attributes.unit_of_measurement||"");const e=Array.from(a.matchAll(/\{\{attribute\.([^}]+)\}\}/g));for(const r of e){const e=r[1],s=t.attributes[e]||"";a=a.replace(r[0],s)}}}const o=a.split("\n");return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="text-content size-${e} align-${r} ${i?"typing-effect":""}">
            ${o.map(t=>B`
              <div class="text-line">
                ${s&&t.trim()?B`<span class="text-prompt">></span>`:""}
                ${t}
              </div>
            `)}
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{title:"MESSAGE",content:"System message here",size:"medium",align:"left",show_prompt:!0,typing_effect:!1}}});customElements.define("transformers-gauge-card",class extends ct{static get styles(){return[nt,a`
        .gauge-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .gauge-svg {
          width: 200px;
          height: 200px;
        }

        .gauge-background {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 12;
        }

        .gauge-progress {
          fill: none;
          stroke: var(--transformers-border-color);
          stroke-width: 12;
          stroke-linecap: round;
          filter: drop-shadow(0 0 8px var(--transformers-glow-color));
          transition: stroke-dashoffset 0.5s ease;
        }

        .gauge-progress.severity-yellow {
          stroke: var(--transformers-accent-color);
          filter: drop-shadow(0 0 8px var(--transformers-accent-color));
        }

        .gauge-progress.severity-red {
          stroke: #dc2626;
          filter: drop-shadow(0 0 8px #dc2626);
        }

        .gauge-value {
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
          margin-top: 16px;
        }

        .gauge-unit {
          font-size: 0.4em;
          margin-left: 4px;
        }

        .gauge-name {
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 8px;
          opacity: 0.9;
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.entity,e=this.hass.states[t];if(!e)return B`
        <div class="card">
          <div class="card-content">
            <div class="card-header">GAUGE ERROR</div>
            <div class="gauge-container">
              <div class="gauge-value">N/A</div>
            </div>
          </div>
        </div>
      `;const r=this.config.name||e.attributes.friendly_name||t,s=parseFloat(e.state)||0,i=this.config.unit||e.attributes.unit_of_measurement||"",a=this.config.min||0,o=this.config.max||100,n=void 0!==this.config.decimals?this.config.decimals:1,c=Math.min(Math.max((s-a)/(o-a),0),1),l=2*Math.PI*80,d=l*(1-c);let p="";return this.config.severity&&(this.config.severity.red&&s>=this.config.severity.red?p="severity-red":this.config.severity.yellow&&s>=this.config.severity.yellow&&(p="severity-yellow")),B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${r}</div>
          <div class="gauge-container">
            <svg class="gauge-svg" viewBox="0 0 200 200">
              <circle
                class="gauge-background"
                cx="100"
                cy="100"
                r="${80}"
              />
              <circle
                class="gauge-progress ${p}"
                cx="100"
                cy="100"
                r="${80}"
                stroke-dasharray="${l}"
                stroke-dashoffset="${d}"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div class="gauge-value">
              ${s.toFixed(n)}
              <span class="gauge-unit">${i}</span>
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{entity:"",name:"",unit:"",min:0,max:100,decimals:1,severity:{}}}});customElements.define("transformers-clock-card",class extends ct{static get styles(){return[nt,a`
        .clock-display {
          text-align: center;
          padding: 24px;
        }

        .time-display {
          font-size: 3.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 15px var(--transformers-glow-color);
          letter-spacing: 4px;
          margin: 16px 0;
        }

        .date-display {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 12px;
          opacity: 0.9;
        }

        .timezone-display {
          font-size: 0.9em;
          margin-top: 8px;
          opacity: 0.7;
        }

        .time-separator {
          animation: blink 1s infinite;
        }
      `]}constructor(){super(),this._time=new Date}connectedCallback(){super.connectedCallback(),this._updateTime(),this._interval=setInterval(()=>this._updateTime(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearInterval(this._interval)}_updateTime(){this._time=new Date,this.requestUpdate()}render(){if(!this.config)return B``;const t=this.config.title||"SYSTEM TIME",e=!1!==this.config.format_24h,r=!1!==this.config.show_seconds,s=!1!==this.config.show_date,i=this.config.show_timezone||!1,a=e?String(this._time.getHours()).padStart(2,"0"):String(this._time.getHours()%12||12).padStart(2,"0"),o=String(this._time.getMinutes()).padStart(2,"0"),n=String(this._time.getSeconds()).padStart(2,"0"),c=e?"":this._time.getHours()>=12?" PM":" AM",l=this._time.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).toUpperCase(),d=Intl.DateTimeFormat().resolvedOptions().timeZone;return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="clock-display">
            <div class="time-display">
              ${a}<span class="time-separator">:</span>${o}${r?B`<span class="time-separator">:</span>${n}`:""}${c}
            </div>
            ${s?B`<div class="date-display">${l}</div>`:""}
            ${i?B`<div class="timezone-display">${d}</div>`:""}
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{title:"SYSTEM TIME",format_24h:!0,show_seconds:!0,show_date:!0,show_timezone:!1}}});customElements.define("transformers-glance-card",class extends ct{static get styles(){return[nt,a`
        .glance-grid {
          display: grid;
          gap: 16px;
        }

        .glance-grid.columns-2 { grid-template-columns: repeat(2, 1fr); }
        .glance-grid.columns-3 { grid-template-columns: repeat(3, 1fr); }
        .glance-grid.columns-4 { grid-template-columns: repeat(4, 1fr); }
        .glance-grid.columns-5 { grid-template-columns: repeat(5, 1fr); }

        .glance-item {
          text-align: center;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border: 1px solid var(--transformers-border-color);
          position: relative;
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .glance-item:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .glance-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .glance-icon {
          font-size: 1.8em;
          margin-bottom: 8px;
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          opacity: 0.8;
        }

        .glance-state {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          margin-top: 8px;
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.title||"SYSTEM GLANCE",e=this.config.entities||[],r=Math.min(Math.max(this.config.columns||Math.min(e.length,4),2),5);return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="glance-grid columns-${r}">
            ${e.map(t=>this._renderEntity(t))}
          </div>
        </div>
      </div>
    `}_renderEntity(t){const e="string"==typeof t?t:t.entity,r=this.hass.states[e];if(!r)return B`
        <div class="glance-item">
          <div class="glance-state">N/A</div>
        </div>
      `;const s=t.name||r.attributes.friendly_name||e,i=r.state,a=r.attributes.unit_of_measurement||"",o=r.attributes.icon||this._getDefaultIcon(e);return B`
      <div class="glance-item" @click=${()=>this._handleClick(e)}>
        ${o?B`<div class="glance-icon">${this._renderIcon(o)}</div>`:""}
        <div class="glance-state">${i}${a}</div>
        ${!1!==this.config.show_name?B`<div class="glance-name">${s}</div>`:""}
      </div>
    `}_renderIcon(t){return{"mdi:lightbulb":"💡","mdi:thermometer":"🌡️","mdi:water-percent":"💧","mdi:motion-sensor":"🔍","mdi:door":"🚪","mdi:window":"🪟"}[t]||"⚡"}_getDefaultIcon(t){return t.startsWith("light.")?"mdi:lightbulb":t.startsWith("sensor.temperature")?"mdi:thermometer":t.startsWith("sensor.humidity")?"mdi:water-percent":t.startsWith("binary_sensor.motion")?"mdi:motion-sensor":null}_handleClick(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}static getStubConfig(){return{title:"SYSTEM GLANCE",entities:[],columns:4,show_name:!0}}});customElements.define("transformers-light-card",class extends ct{static get styles(){return[nt,a`
        .light-container {
          padding: 16px;
        }

        .light-status {
          text-align: center;
          margin-bottom: 20px;
        }

        .light-icon {
          font-size: 3em;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .light-icon.on {
          filter: drop-shadow(0 0 15px var(--transformers-accent-color));
          color: var(--transformers-accent-color);
        }

        .light-name {
          font-size: 1.1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .light-state {
          font-size: 0.9em;
          opacity: 0.8;
        }

        .light-controls {
          margin-top: 20px;
        }

        .toggle-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.3) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 1em;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          transition: all 0.2s ease;
        }

        .toggle-button:hover {
          box-shadow: 0 0 15px var(--transformers-glow-color);
        }

        .toggle-button.on {
          background: linear-gradient(
            135deg,
            var(--transformers-border-color) 0%,
            var(--transformers-secondary-color) 100%
          );
        }

        .brightness-control {
          margin-top: 16px;
        }

        .brightness-label {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        .brightness-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          border: 1px solid var(--transformers-border-color);
        }

        .brightness-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--transformers-border-color);
          cursor: pointer;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          box-shadow: 0 0 8px var(--transformers-glow-color);
        }

        .brightness-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--transformers-border-color);
          cursor: pointer;
          border: none;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          box-shadow: 0 0 8px var(--transformers-glow-color);
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.entity,e=this.hass.states[t];if(!e)return B`
        <div class="card">
          <div class="card-content">
            <div class="card-header">LIGHT ERROR</div>
            <div class="light-container">
              <div class="light-status">UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `;const r=this.config.name||e.attributes.friendly_name||t,s="on"===e.state,i=e.attributes.brightness||0,a=Math.round(i/255*100),o=1&e.attributes.supported_features;return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${r}</div>
          <div class="light-container">
            <div class="light-status">
              <div class="light-icon ${s?"on":""}">💡</div>
              <div class="light-name">${r}</div>
              <div class="light-state">${s?"ONLINE":"OFFLINE"}</div>
            </div>
            <div class="light-controls">
              <button 
                class="toggle-button ${s?"on":""}"
                @click=${()=>this._toggleLight()}
              >
                ${s?"DEACTIVATE":"ACTIVATE"}
              </button>
              ${s&&o?B`
                <div class="brightness-control">
                  <div class="brightness-label">
                    <span>BRIGHTNESS</span>
                    <span>${a}%</span>
                  </div>
                  <input 
                    type="range" 
                    class="brightness-slider"
                    min="0" 
                    max="100" 
                    .value=${a}
                    @input=${t=>this._setBrightness(t.target.value)}
                  />
                </div>
              `:""}
            </div>
          </div>
        </div>
      </div>
    `}_toggleLight(){this.hass.callService("light","toggle",{entity_id:this.config.entity})}_setBrightness(t){const e=Math.round(t/100*255);this.hass.callService("light","turn_on",{entity_id:this.config.entity,brightness:e})}static getStubConfig(){return{entity:"",name:""}}});customElements.define("transformers-picture-card",class extends ct{static get styles(){return[nt,a`
        .picture-container {
          position: relative;
          overflow: hidden;
        }

        .picture-image {
          width: 100%;
          height: auto;
          display: block;
          filter: 
            contrast(1.2)
            brightness(0.9)
            sepia(0.1)
            hue-rotate(-10deg);
          border: 2px solid var(--transformers-border-color);
        }

        .picture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          pointer-events: none;
        }

        .picture-caption {
          margin-top: 12px;
          padding: 8px;
          background: rgba(0, 0, 0, 0.5);
          border-left: 3px solid var(--transformers-border-color);
          font-family: var(--transformers-font-family);
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .picture-timestamp {
          margin-top: 8px;
          font-size: 0.75em;
          opacity: 0.7;
          text-align: right;
        }
      `]}connectedCallback(){super.connectedCallback(),this.config?.camera_refresh_interval&&this._startRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._stopRefresh()}_startRefresh(){this._stopRefresh();const t=1e3*this.config.camera_refresh_interval;this._refreshInterval=setInterval(()=>{this.requestUpdate()},t)}_stopRefresh(){this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}render(){if(!this.config||!this.hass)return B``;const t=this.config.title||"VISUAL FEED",e=this.config.caption||"",r=this.config.show_timestamp||!1;let s="";if(this.config.entity){const t=this.hass.states[this.config.entity];t&&t.attributes.entity_picture&&(s=t.attributes.entity_picture,this.config.camera_refresh_interval&&(s+=(s.includes("?")?"&":"?")+"t="+Date.now()))}else this.config.image&&(s=this.config.image);const i=(new Date).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="picture-container">
            ${s?B`
              <img class="picture-image" src="${s}" alt="${e||t}" />
              <div class="picture-overlay"></div>
            `:B`
              <div style="padding: 40px; text-align: center; opacity: 0.5;">
                NO IMAGE SOURCE
              </div>
            `}
          </div>
          ${e?B`
            <div class="picture-caption">> ${e}</div>
          `:""}
          ${r?B`
            <div class="picture-timestamp">CAPTURED: ${i}</div>
          `:""}
        </div>
      </div>
    `}static getStubConfig(){return{title:"VISUAL FEED",entity:"",image:"",caption:"",show_timestamp:!1,camera_refresh_interval:0}}});customElements.define("transformers-weather-card",class extends ct{static get styles(){return[nt,a`
        .weather-container {
          padding: 12px;
        }

        .current-weather {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border-left: 3px solid var(--transformers-border-color);
          margin-bottom: 16px;
        }

        .weather-icon {
          font-size: 3em;
        }

        .weather-info {
          flex: 1;
          margin-left: 20px;
        }

        .weather-temp {
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .weather-condition {
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          font-size: 0.9em;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .weather-detail {
          padding: 8px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          font-size: 0.85em;
        }

        .detail-label {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.8em;
          opacity: 0.8;
          margin-bottom: 4px;
        }

        .detail-value {
          font-family: var(--transformers-font-family);
          font-weight: bold;
        }

        .forecast-container {
          margin-top: 16px;
        }

        .forecast-title {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--transformers-border-color);
        }

        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 8px;
        }

        .forecast-day {
          text-align: center;
          padding: 12px 8px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .forecast-date {
          font-size: 0.75em;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .forecast-icon {
          font-size: 1.5em;
          margin: 4px 0;
        }

        .forecast-temp {
          font-size: 0.85em;
          font-family: var(--transformers-font-family);
          margin-top: 4px;
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.entity,e=this.hass.states[t];if(!e)return B`
        <div class="card">
          <div class="card-content">
            <div class="card-header">WEATHER ERROR</div>
            <div class="weather-container">UNAVAILABLE</div>
          </div>
        </div>
      `;const r=this.config.name||e.attributes.friendly_name||"WEATHER",s=!1!==this.config.show_forecast,i=this.config.forecast_days||5;return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${r}</div>
          <div class="weather-container">
            ${this._renderCurrentWeather(e)}
            ${s?this._renderForecast(e,i):""}
          </div>
        </div>
      </div>
    `}_renderCurrentWeather(t){const e=t.attributes.temperature,r=this.hass.config.unit_system.temperature,s=t.state,i=t.attributes.humidity,a=t.attributes.pressure,o=t.attributes.wind_speed,n=t.attributes.wind_bearing;return B`
      <div class="current-weather">
        <div class="weather-icon">${this._getWeatherIcon(s)}</div>
        <div class="weather-info">
          <div class="weather-temp">${e}°${r}</div>
          <div class="weather-condition">${s}</div>
        </div>
      </div>
      <div class="weather-details">
        ${void 0!==i?B`
          <div class="weather-detail">
            <div class="detail-label">HUMIDITY</div>
            <div class="detail-value">${i}%</div>
          </div>
        `:""}
        ${void 0!==a?B`
          <div class="weather-detail">
            <div class="detail-label">PRESSURE</div>
            <div class="detail-value">${a} hPa</div>
          </div>
        `:""}
        ${void 0!==o?B`
          <div class="weather-detail">
            <div class="detail-label">WIND SPEED</div>
            <div class="detail-value">${o} ${this.hass.config.unit_system.wind_speed}</div>
          </div>
        `:""}
        ${void 0!==n?B`
          <div class="weather-detail">
            <div class="detail-label">WIND DIR</div>
            <div class="detail-value">${this._getWindDirection(n)}</div>
          </div>
        `:""}
      </div>
    `}_renderForecast(t,e){const r=(t.attributes.forecast||[]).slice(0,e);return 0===r.length?B``:B`
      <div class="forecast-container">
        <div class="forecast-title">FORECAST</div>
        <div class="forecast-grid">
          ${r.map(t=>this._renderForecastDay(t))}
        </div>
      </div>
    `}_renderForecastDay(t){const e=new Date(t.datetime).toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),r=this.hass.config.unit_system.temperature;return B`
      <div class="forecast-day">
        <div class="forecast-date">${e}</div>
        <div class="forecast-icon">${this._getWeatherIcon(t.condition)}</div>
        <div class="forecast-temp">
          ${t.temperature}°${r}
        </div>
      </div>
    `}_getWeatherIcon(t){return{"clear-night":"🌙",cloudy:"☁️",fog:"🌫️",hail:"🧊",lightning:"⚡","lightning-rainy":"⛈️",partlycloudy:"⛅",pouring:"🌧️",rainy:"🌦️",snowy:"❄️","snowy-rainy":"🌨️",sunny:"☀️",windy:"💨","windy-variant":"🌬️",exceptional:"⚠️"}[t]||"🌡️"}_getWindDirection(t){return["N","NE","E","SE","S","SW","W","NW"][Math.round(t%360/45)%8]}static getStubConfig(){return{entity:"",name:"",show_forecast:!0,forecast_days:5}}});customElements.define("transformers-alarm-card",class extends ct{constructor(){super(),this._code=""}static get styles(){return[nt,a`
        .alarm-container {
          padding: 16px;
        }

        .alarm-status {
          text-align: center;
          padding: 20px;
          margin-bottom: 20px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          border: 2px solid var(--transformers-border-color);
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .alarm-status.armed {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.3) 0%,
            rgba(153, 27, 27, 0.2) 100%
          );
          border-color: #dc2626;
        }

        .alarm-status.pending {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.3) 0%,
            rgba(217, 119, 6, 0.2) 100%
          );
          border-color: #fbbf24;
        }

        .alarm-status.triggered {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.5) 0%,
            rgba(153, 27, 27, 0.3) 100%
          );
          border-color: #dc2626;
          animation: alarm-flash 1s infinite;
        }

        @keyframes alarm-flash {
          0%, 50% { opacity: 1; }
          25%, 75% { opacity: 0.5; }
        }

        .alarm-state {
          font-size: 2em;
          font-weight: bold;
          font-family: var(--transformers-header-font);
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .code-display {
          margin: 16px 0;
          padding: 12px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--transformers-border-color);
          text-align: center;
          font-family: var(--transformers-font-family);
          font-size: 1.5em;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 16px;
        }

        .key {
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 1.3em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .key:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.4) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .key:active {
          transform: scale(0.95);
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 16px;
        }

        .action-button {
          padding: 14px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.3) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 0.9em;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          transition: all 0.2s ease;
        }

        .action-button:hover {
          box-shadow: 0 0 15px var(--transformers-glow-color);
        }

        .action-button.arm {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.4) 0%,
            rgba(153, 27, 27, 0.3) 100%
          );
          border-color: #dc2626;
        }

        .action-button.disarm {
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.3) 0%,
            rgba(5, 150, 105, 0.2) 100%
          );
          border-color: #10b981;
        }
      `]}render(){if(!this.config||!this.hass)return B``;const t=this.config.title||"SECURITY SYSTEM",e=this.config.entity,r=this.hass.states[e],s=!1!==this.config.show_keypad;if(!r)return B`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="alarm-container">
              <div class="alarm-status">
                <div class="alarm-state">UNAVAILABLE</div>
              </div>
            </div>
          </div>
        </div>
      `;const i=r.state,a=this._getStateClass(i);return B`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          <div class="alarm-container">
            <div class="alarm-status ${a}">
              <div class="alarm-state">${this._formatState(i)}</div>
            </div>
            
            ${s?B`
              <div class="code-display">
                ${this._code?"•".repeat(this._code.length):"ENTER CODE"}
              </div>
              
              <div class="keypad">
                ${[1,2,3,4,5,6,7,8,9,"CLR",0,"OK"].map(t=>B`
                  <button class="key" @click=${()=>this._handleKeyPress(t)}>
                    ${t}
                  </button>
                `)}
              </div>
            `:""}

            <div class="action-buttons">
              ${"disarmed"===i?B`
                <button class="action-button arm" @click=${()=>this._armAway()}>
                  ARM AWAY
                </button>
                <button class="action-button arm" @click=${()=>this._armHome()}>
                  ARM HOME
                </button>
              `:B`
                <button class="action-button disarm" @click=${()=>this._disarm()}>
                  DISARM
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `}_getStateClass(t){return"triggered"===t?"triggered":t.includes("pending")||t.includes("arming")?"pending":t.includes("armed")?"armed":""}_formatState(t){return t.replace(/_/g," ").toUpperCase()}_handleKeyPress(t){"CLR"===t?this._code="":"OK"===t?this.requestUpdate():this._code+=t.toString(),this.requestUpdate()}_armAway(){this.hass.callService("alarm_control_panel","alarm_arm_away",{entity_id:this.config.entity,code:this._code||void 0}),this._code="",this.requestUpdate()}_armHome(){this.hass.callService("alarm_control_panel","alarm_arm_home",{entity_id:this.config.entity,code:this._code||void 0}),this._code="",this.requestUpdate()}_disarm(){this.hass.callService("alarm_control_panel","alarm_disarm",{entity_id:this.config.entity,code:this._code||void 0}),this._code="",this.requestUpdate()}static getStubConfig(){return{title:"SECURITY SYSTEM",entity:"",show_keypad:!0}}}),window.customCards=window.customCards||[],window.customCards.push({type:"transformers-status-card",name:"Transformers Status Card",description:"Display system status in Transformers style",preview:!0}),window.customCards.push({type:"transformers-sensor-card",name:"Transformers Sensor Card",description:"Display sensor data with Transformers aesthetics",preview:!0}),window.customCards.push({type:"transformers-button-card",name:"Transformers Button Card",description:"Control entities with Transformers-style buttons",preview:!0}),window.customCards.push({type:"transformers-text-card",name:"Transformers Text Card",description:"Display text messages in Transformers format",preview:!0}),window.customCards.push({type:"transformers-gauge-card",name:"Transformers Gauge Card",description:"Display gauge visualization for numeric sensors",preview:!0}),window.customCards.push({type:"transformers-clock-card",name:"Transformers Clock Card",description:"Display current time in Transformers format",preview:!0}),window.customCards.push({type:"transformers-glance-card",name:"Transformers Glance Card",description:"Compact multi-entity overview in Transformers style",preview:!0}),window.customCards.push({type:"transformers-light-card",name:"Transformers Light Card",description:"Control lights with Transformers-style interface",preview:!0}),window.customCards.push({type:"transformers-picture-card",name:"Transformers Picture Card",description:"Display images and camera feeds in Transformers style",preview:!0}),window.customCards.push({type:"transformers-weather-card",name:"Transformers Weather Card",description:"Display weather information in Transformers format",preview:!0}),window.customCards.push({type:"transformers-alarm-card",name:"Transformers Alarm Card",description:"Control alarm systems with Transformers-style keypad",preview:!0}),console.info("%c TRANSFORMERS CARDS %c v1.0.0 ","color: #e31e24; background: #000; font-weight: bold;","color: #000; background: #e31e24; font-weight: bold;"),console.info("More than meets the eye - Transformers");
//# sourceMappingURL=transformers-cards.js.map
