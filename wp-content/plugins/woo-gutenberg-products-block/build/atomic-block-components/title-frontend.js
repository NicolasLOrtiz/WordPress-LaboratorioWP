(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[13],{176:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var o=function(e,t){var c=[];return Object.keys(e).forEach((function(o){if(void 0!==t[o])switch(e[o].type){case"boolean":c[o]="false"!==t[o]&&!1!==t[o];break;case"number":c[o]=parseInt(t[o],10);break;case"array":case"object":c[o]=JSON.parse(t[o]);break;default:c[o]=t[o]}else c[o]=e[o].default})),c}},279:function(e,t,c){"use strict";var o=c(11),n=c.n(o),r=c(176);t.a=function(e){return function(t){return function(c){var o=Object(r.a)(e,c);return React.createElement(t,n()({},c,o))}}}},284:function(e,t){},304:function(e,t,c){"use strict";c.r(t);var o=c(26),n=c(279),r=c(6),a=c.n(r),i=(c(4),c(5)),s=c.n(i),l=c(16),u=c(67),p=c(185),b=c(8),f=function(e){var t=e.color,c=e.fontSize;return Object(b.E)()?{color:t,fontSize:c}:{}},O=c(184),d=(c(284),Object(O.withProductDataContext)((function(e){var t,c,o,n=e.className,r=e.headingLevel,i=void 0===r?2:r,O=e.productLink,d=void 0===O||O,m=e.align,j=e.color,y=e.customColor,g=e.fontSize,v=e.customFontSize,w=Object(u.useInnerBlockLayoutContext)().parentClassName,k=Object(u.useProductDataContext)().product,E="h".concat(i),h=Object(p.getColorClassName)("color",j),S=Object(p.getFontSizeClass)(g),z=s()((t={"has-text-color":j||y,"has-font-size":g||v},a()(t,h,h),a()(t,S,S),t));if(!k.id)return React.createElement(E,{className:s()(n,"wc-block-components-product-title",(o={},a()(o,"".concat(w,"__product-title"),w),a()(o,"wc-block-components-product-title--align-".concat(m),m&&Object(b.E)()),a()(o,z,Object(b.E)()),o)),style:f({color:y,fontSize:v})});var P=Object(l.decodeEntities)(k.name);return React.createElement(E,{className:s()(n,"wc-block-components-product-title",(c={},a()(c,"".concat(w,"__product-title"),w),a()(c,"wc-block-components-product-title--align-".concat(m),m&&Object(b.E)()),c))},d?React.createElement("a",{href:k.permalink,rel:"nofollow",className:s()(a()({},z,Object(b.E)())),style:f({color:y,fontSize:v})},P):React.createElement("span",{className:s()(a()({},z,Object(b.E)())),style:f({color:y,fontSize:v})},P))})));function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function j(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){a()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var y={headingLevel:{type:"number",default:2},productLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(b.E)()&&(y=j(j({},y),{},{align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}}));var g=y;t.default=Object(o.compose)(Object(n.a)(g))(d)}}]);