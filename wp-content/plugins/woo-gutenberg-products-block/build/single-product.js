this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={37:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"atomic-block-components/add-to-cart~atomic-block-components/image~atomic-block-components/title",2:"atomic-block-components/add-to-cart~atomic-block-components/button",3:"atomic-block-components/sale-badge",7:"atomic-block-components/add-to-cart",8:"atomic-block-components/button",9:"atomic-block-components/category-list",10:"atomic-block-components/image",11:"atomic-block-components/price",12:"atomic-block-components/rating",13:"atomic-block-components/sku",14:"atomic-block-components/stock-indicator",15:"atomic-block-components/summary",16:"atomic-block-components/tag-list",17:"atomic-block-components/title"}[e]||e)+".js"}(e);var u=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}c[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;return o.push([897,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},121:function(e,t){},13:function(e,t){!function(){e.exports=this.wp.apiFetch}()},135:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(61),i=n(167),a=n(3),u=n(14),s=n(44);t.a=function(e){var t=(Object(s.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(r.createElement)(u.InspectorControls,null,Object(r.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(r.createElement)("a",{href:"".concat(a.ADMIN_URL,"post.php?post=").concat(t,"&action=edit"),target:"_blank",rel:"noopener noreferrer"},Object(c.__)("Edit this product's details","woo-gutenberg-products-block"),Object(r.createElement)(o.a,{srcElement:i.a,size:16}))),Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(c.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},14:function(e,t){!function(){e.exports=this.wp.blockEditor}()},142:function(e,t){!function(){e.exports=this.wp.wordcount}()},143:function(e,t,n){"use strict";var r=n(51),c=n.n(r),o=n(10),i=n.n(o),a=n(0),u=n(1),s=n(6),l=(n(2),n(50)),d=n(4),p=n(7),f=n.n(p),m=n(21),b=n.n(m),g=n(24),h=n.n(g),O=n(22),j=n.n(O),v=n(23),w=n.n(v),y=n(12),k=n.n(y),E=n(25);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var c=k()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return w()(this,n)}}var _=Object(E.createHigherOrderComponent)((function(e){var t=function(t){j()(r,t);var n=S(r);function r(){return b()(this,r),n.apply(this,arguments)}return h()(r,[{key:"render",value:function(){var t=this.props.selected;return Object(a.createElement)(e,i()({},this.props,{selected:Object(s.isNil)(t)?[]:[t]}))}}]),r}(a.Component);return t.defaultProps={selected:null},t}),"withTransformSingleSelectToMultipleSelect"),x=n(301),P=n(15),C=n.n(P),B=n(37),N=n.n(B),I=n(19),R=n.n(I),D=n(8),z=n.n(D),M=n(46),L=n.n(M),A=n(40),T=n(42);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var c=k()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return w()(this,n)}}var q=Object(E.createHigherOrderComponent)((function(e){var t=function(t){j()(r,t);var n=U(r);function r(){var e;b()(this,r);for(var t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return e=n.call.apply(n,[this].concat(c)),z()(R()(e),"state",{error:null,loading:!1,variations:{}}),z()(R()(e),"loadVariations",(function(){var t=e.props.products,n=e.state,r=n.loading,c=n.variations;if(!r){var o=e.getExpandedProduct();if(o&&!c[o]){var i=t.find((function(e){return e.id===o}));i.variations&&0!==i.variations.length?(e.setState({loading:!0}),Object(A.g)(o).then((function(t){var n=t.map((function(e){return H(H({},e),{},{parent:o})}));e.setState({variations:H(H({},e.state.variations),{},z()({},o,n)),loading:!1,error:null})})).catch(function(){var t=N()(C.a.mark((function t(n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.a)(n);case 2:r=t.sent,e.setState({variations:H(H({},e.state.variations),{},z()({},o,null)),loading:!1,error:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({variations:H(H({},e.state.variations),{},z()({},o,null)),loading:!1,error:null})}}})),e}return h()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selected,n=e.showVariations;t&&n&&this.loadVariations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isLoading,r=t.selected;t.showVariations&&(!L()(e.selected,r)||e.isLoading&&!n)&&this.loadVariations()}},{key:"isProductId",value:function(e){return this.props.products.some((function(t){return t.id===e}))}},{key:"findParentProduct",value:function(e){return this.props.products.filter((function(t){return t.variations&&t.variations.find((function(t){return t.id===e}))}))[0].id}},{key:"getExpandedProduct",value:function(){var e=this.props,t=e.isLoading,n=e.selected;if(!e.showVariations)return null;var r=n&&n.length?n[0]:null;return r?this.prevSelectedItem=r:this.prevSelectedItem&&(t||this.isProductId(this.prevSelectedItem)||(r=this.prevSelectedItem)),!t&&r?this.isProductId(r)?r:this.findParentProduct(r):null}},{key:"render",value:function(){var t=this.props,n=t.error,r=t.isLoading,c=this.state,o=c.error,u=c.loading,s=c.variations;return Object(a.createElement)(e,i()({},this.props,{error:o||n,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:u}))}}]),r}(a.Component);return z()(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),F=n(61),Q=n(58),W=Object(a.createElement)(Q.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),G=Object(a.createElement)(Q.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#6C7781",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),J=n(49);n(199);function X(e,t){if(!t)return e;var n=new RegExp(Object(s.escapeRegExp)(t),"ig");return e.replace(n,"<strong>$&</strong>")}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(a.createElement)(F.a,{srcElement:W}):Object(a.createElement)(F.a,{srcElement:G})},K={list:Object(u.__)("Products","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(u.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(u.__)("Product search results updated.","woo-gutenberg-products-block")},$=function(e){var t=e.expandedProduct,n=e.error,r=e.isLoading,o=e.onChange,p=e.onSearch,m=e.products,b=e.renderItem,g=e.selected,h=e.showVariations,O=e.variations,j=e.variationsLoading,v=function(e){var n=e.item,r=e.search,c=e.depth,o=void 0===c?0:c,p=e.isSelected,m=e.onSelect,b=n.variations&&Array.isArray(n.variations)?n.variations.length:0,g=f()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(o),{"is-searching":r.length>0,"is-skip-level":0===o&&0!==n.parent,"is-variable":b>0}),h=Object.assign({},e);delete h.isSingle;var O={role:"menuitemradio"};return n.breadcrumbs.length&&(O["aria-label"]="".concat(n.breadcrumbs[0],": ").concat(n.name)),b&&(O["aria-expanded"]=n.id===t),n.breadcrumbs.length?(Object(s.isEmpty)(n.variation)||(n.name=n.variation),Object(a.createElement)(l.b,i()({className:g},e,O))):[Object(a.createElement)(d.MenuItem,i()({key:"product-".concat(n.id),isSelected:p},h,O,{className:g,onClick:function(){m(n)()}}),Object(a.createElement)("span",{className:"woocommerce-search-list__item-state"},Y(p)),Object(a.createElement)("span",{className:"woocommerce-search-list__item-label"},Object(a.createElement)("span",{className:"woocommerce-search-list__item-name",dangerouslySetInnerHTML:{__html:X(n.name,r)}})),b?Object(a.createElement)("span",{className:"woocommerce-search-list__item-variation-count"},Object(u.sprintf)(Object(u._n)("%d variation","%d variations",b,"woo-gutenberg-products-block"),b)):null),t===n.id&&b>0&&j&&Object(a.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-search-product__itemdepth-1 is-loading is-not-active"},Object(a.createElement)(d.Spinner,null))]};if(n)return Object(a.createElement)(J.a,{error:n});var w=O&&O[t]?O[t]:[],y=[].concat(c()(m),c()(w));return Object(a.createElement)(l.a,{className:"woocommerce-products",list:y,isLoading:r,isSingle:!0,selected:y.filter((function(e){var t=e.id;return g.includes(t)})),onChange:o,renderItem:b||(h?v:null),onSearch:p,messages:K,isHierarchical:!0})};$.defaultProps={expandedProduct:null,selected:[],showVariations:!1};t.a=_(Object(x.a)(q($)))},144:function(e,t,n){"use strict";var r=n(0),c=n(58),o=Object(r.createElement)(c.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=o},147:function(e,t){},15:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},167:function(e,t,n){"use strict";var r=n(0),c=n(58),o=Object(r.createElement)(c.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=o},17:function(e,t){!function(){e.exports=this.wp.blocks}()},18:function(e,t){!function(){e.exports=this.wp.url}()},188:function(e,t,n){"use strict";var r=n(21),c=n.n(r),o=n(24),i=n.n(o),a=n(19),u=n.n(a),s=n(22),l=n.n(s),d=n(23),p=n.n(d),f=n(12),m=n.n(f),b=n(8),g=n.n(b),h=n(0),O=(n(2),n(9)),j=n(1),v=n(5),w=function(e){var t=e.imageUrl,n=void 0===t?"".concat(v.T,"img/block-error.svg"):t,r=e.header,c=void 0===r?Object(j.__)("Oops!","woo-gutenberg-products-block"):r,o=e.text,i=void 0===o?Object(j.__)("There was an error loading the content.","woo-gutenberg-products-block"):o,a=e.errorMessage,u=e.errorMessagePrefix,s=void 0===u?Object(j.__)("Error:","woo-gutenberg-products-block"):u;return Object(h.createElement)("div",{className:"wc-block-error wc-block-components-error"},n&&Object(h.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:n,alt:""}),Object(h.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},c&&Object(h.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},c),i&&Object(h.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&Object(h.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",a)))};n(261);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var c=m()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var k=function(e){l()(n,e);var t=y(n);function n(){var e;c()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),g()(u()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.imageUrl,r=e.showErrorMessage,c=e.text,o=e.errorMessagePrefix,i=this.state,a=i.errorMessage;return i.hasError?Object(h.createElement)(w,{errorMessage:r?a:null,header:t,imageUrl:n,text:c,errorMessagePrefix:o}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(h.createElement)(O.Fragment,null,Object(h.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),n}(O.Component);k.defaultProps={showErrorMessage:!0};t.a=k},199:function(e,t){},25:function(e,t){!function(){e.exports=this.wp.compose}()},261:function(e,t){},267:function(e,t){!function(){e.exports=this.wp.deprecated}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},301:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(15),i=n.n(o),a=n(37),u=n.n(a),s=n(21),l=n.n(s),d=n(24),p=n.n(d),f=n(19),m=n.n(f),b=n(22),g=n.n(b),h=n(23),O=n.n(h),j=n(12),v=n.n(j),w=n(0),y=n(6),k=n(25),E=(n(2),n(5)),S=n(40),_=n(42);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var c=v()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return O()(this,n)}}var P=Object(k.createHigherOrderComponent)((function(e){var t=function(t){g()(o,t);var n,r=x(o);function o(){var e;return l()(this,o),(e=r.apply(this,arguments)).state={list:[],loading:!0},e.setError=e.setError.bind(m()(e)),e.debouncedOnSearch=Object(y.debounce)(e.onSearch.bind(m()(e)),400),e}return p()(o,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(S.h)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,n=this.props.selected;Object(S.h)({selected:n,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:(n=u()(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(t);case 2:n=e.sent,this.setState({list:[],loading:!1,error:n});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this,n=this.state,r=n.error,o=n.list,i=n.loading;return Object(w.createElement)(e,c()({},this.props,{error:r,products:o,isLoading:i,onSearch:E.u?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),o}(w.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=P},33:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},35:function(e,t){!function(){e.exports=this.moment}()},36:function(e,t){!function(){e.exports=this.wp.data}()},4:function(e,t){!function(){e.exports=this.wp.components}()},40:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return j})),n.d(t,"a",(function(){return v}));var r=n(8),c=n.n(r),o=n(18),i=n(13),a=n.n(i),u=n(6),s=n(5);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,c=void 0===r?"":r,i=e.queryArgs,l=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,c=void 0===r?"":r,i=e.queryArgs,a=void 0===i?[]:i,u={per_page:s.u?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},l=[Object(o.addQueryArgs)("/wc/store/products",d(d({},u),a))];return s.u&&n.length&&l.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:c,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id").map((function(e){return d(d({},e),{},{parent:0})}))})).catch((function(e){throw e}))},f=function(e){return a()({path:"/wc/store/products/".concat(e)})},m=function(){return a()({path:"wc/store/products/attributes"})},b=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},g=function(e){var t=e.selected,n=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,c=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:s.x?100:0,orderby:s.x?"count":"name",order:s.x?"desc":"asc",search:r})];return s.x&&n.length&&c.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:n})),c}({selected:void 0===t?[]:t,search:e.search});return Promise.all(n.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id")}))},h=function(e){return a()({path:Object(o.addQueryArgs)("wc/store/products/categories",d({per_page:0},e))})},O=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},j=function(e){return a()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},v=function(e,t){if(!e.title.raw)return e.slug;var n=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(n?"":" - ".concat(e.slug))}},41:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(15),c=n.n(r),o=n(37),i=n.n(o),a=function(){var e=i()(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},44:function(e,t){!function(){e.exports=this.wc.wcSharedContext}()},46:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},47:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},49:function(e,t,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(47));t.a=function(e){var t,n,i,a=e.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(t=a).message,i=t.type,n?"general"===i?Object(r.createElement)("span",null,Object(c.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(c.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(n))):n:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},5:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"J",(function(){return o})),n.d(t,"P",(function(){return i})),n.d(t,"z",(function(){return a})),n.d(t,"B",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"A",(function(){return l})),n.d(t,"D",(function(){return d})),n.d(t,"n",(function(){return p})),n.d(t,"C",(function(){return f})),n.d(t,"m",(function(){return m})),n.d(t,"F",(function(){return b})),n.d(t,"u",(function(){return g})),n.d(t,"x",(function(){return h})),n.d(t,"r",(function(){return O})),n.d(t,"s",(function(){return j})),n.d(t,"t",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"L",(function(){return y})),n.d(t,"Q",(function(){return k})),n.d(t,"p",(function(){return E})),n.d(t,"q",(function(){return S})),n.d(t,"o",(function(){return _})),n.d(t,"I",(function(){return x})),n.d(t,"c",(function(){return P})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return B})),n.d(t,"T",(function(){return I})),n.d(t,"U",(function(){return R})),n.d(t,"K",(function(){return D})),n.d(t,"a",(function(){return z})),n.d(t,"N",(function(){return M})),n.d(t,"b",(function(){return L})),n.d(t,"M",(function(){return A})),n.d(t,"E",(function(){return T})),n.d(t,"h",(function(){return V})),n.d(t,"O",(function(){return q})),n.d(t,"g",(function(){return F})),n.d(t,"i",(function(){return Q})),n.d(t,"H",(function(){return W})),n.d(t,"G",(function(){return G})),n.d(t,"S",(function(){return J})),n.d(t,"R",(function(){return X})),n.d(t,"d",(function(){return Y})),n.d(t,"e",(function(){return K})),n.d(t,"f",(function(){return $})),n.d(t,"y",(function(){return Z})),n.d(t,"X",(function(){return te})),n.d(t,"Y",(function(){return ne})),n.d(t,"V",(function(){return re})),n.d(t,"W",(function(){return ce}));var r=n(3),c=Object(r.getSetting)("currentUserIsAdmin",!1),o=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),a=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),s=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),d=Object(r.getSetting)("min_rows",1),p=Object(r.getSetting)("default_rows",3),f=Object(r.getSetting)("min_height",500),m=Object(r.getSetting)("default_height",500),b=Object(r.getSetting)("placeholderImgSrc",""),g=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),j=Object(r.getSetting)("hasTags",!0),v=Object(r.getSetting)("homeUrl",""),w=Object(r.getSetting)("couponsEnabled",!0),y=Object(r.getSetting)("shippingEnabled",!0),k=Object(r.getSetting)("taxesEnabled",!0),E=Object(r.getSetting)("displayItemizedTaxes",!1),S=Object(r.getSetting)("hasDarkEditorStyleSupport",!1),_=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),x=Object(r.getSetting)("productCount",0),P=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),B=Object(r.getSetting)("isShippingCostHidden",!1),N=Object(r.getSetting)("woocommerceBlocksPhase",1),I=Object(r.getSetting)("wcBlocksAssetUrl",""),R=Object(r.getSetting)("wcBlocksBuildUrl",""),D=Object(r.getSetting)("shippingCountries",{}),z=Object(r.getSetting)("allowedCountries",{}),M=Object(r.getSetting)("shippingStates",{}),L=Object(r.getSetting)("allowedStates",{}),A=Object(r.getSetting)("shippingMethodsExist",!1),T=Object(r.getSetting)("paymentGatewaySortOrder",[]),V=Object(r.getSetting)("checkoutShowLoginReminder",!0),H={id:0,title:"",permalink:""},U=Object(r.getSetting)("storePages",{shop:H,cart:H,checkout:H,privacy:H,terms:H}),q=U.shop.permalink,F=U.checkout.id,Q=U.checkout.permalink,W=U.privacy.permalink,G=U.privacy.title,J=U.terms.permalink,X=U.terms.title,Y=U.cart.id,K=U.cart.permalink,$=Object(r.getSetting)("checkoutAllowsGuest",!1),Z=(Object(r.getSetting)("checkoutAllowsSignup",!1),Object(r.getSetting)("loginUrl","/wp-login.php")),ee=n(17),te=function(e,t){if(N>2)return Object(ee.registerBlockType)(e,t)},ne=function(e,t){if(N>1)return Object(ee.registerBlockType)(e,t)},re=function(){return N>2},ce=function(){return N>1}},532:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(15),i=n.n(o),a=n(37),u=n.n(a),s=n(21),l=n.n(s),d=n(24),p=n.n(d),f=n(19),m=n.n(f),b=n(22),g=n.n(b),h=n(23),O=n.n(h),j=n(12),v=n.n(j),w=n(8),y=n.n(w),k=n(0),E=n(25),S=n(40),_=n(42);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var c=v()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return O()(this,n)}}var P=Object(E.createHigherOrderComponent)((function(e){return function(t){g()(r,t);var n=x(r);function r(){var e;l()(this,r);for(var t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return e=n.call.apply(n,[this].concat(c)),y()(m()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),y()(m()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(S.e)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch(function(){var t=u()(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(n);case 2:r=t.sent,e.setState({product:null,loading:!1,error:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({product:null,loading:!1,error:null}))})),e}return p()(r,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var t=this.state,n=t.error,r=t.loading,o=t.product;return Object(k.createElement)(e,c()({},this.props,{error:n,getProduct:this.loadProduct,isLoading:r,product:o}))}}]),r}(k.Component)}),"withProduct");t.a=P},55:function(e,t){!function(){e.exports=this.wp.keycodes}()},57:function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()},6:function(e,t){!function(){e.exports=this.lodash}()},61:function(e,t,n){"use strict";var r=n(8),c=n.n(r),o=n(27),i=n.n(o),a=n(9);n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o))}},73:function(e,t){!function(){e.exports=this.wc.wcSharedHocs}()},75:function(e,t){!function(){e.exports=this.wp.hooks}()},77:function(e,t){!function(){e.exports=this.ReactDOM}()},78:function(e,t){!function(){e.exports=this.wp.dom}()},83:function(e,t){!function(){e.exports=this.wp.viewport}()},897:function(e,t,n){e.exports=n(903)},898:function(e,t){},9:function(e,t){!function(){e.exports=this.React}()},903:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),o=n(11),i=n.n(o),a=n(0),u=n(4),s=n(532),l=n(188),d=n(135),p=Object(a.createElement)("img",{src:c.T+"img/single-product-preview.svg",alt:"",width:"230",height:"250",style:{width:"100%"}}),f=n(14),m=(n(898),n(93)),b=function(e){var t=e.error,n=e.isLoading,r=e.getProduct;return Object(a.createElement)(m.a,{className:"wc-block-single-product-error",error:t,isLoading:n,onRetry:r})},g=n(143),h=function(e){var t=e.attributes,n=e.setAttributes;return Object(a.createElement)(g.a,{selected:t.productId||0,showVariations:!0,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0]?e[0].id:0;n({productId:t})}})},O=function(e){var t=e.isEditing,n=e.setIsEditing;return Object(a.createElement)(f.BlockControls,null,Object(a.createElement)(u.Toolbar,{controls:[{icon:"edit",title:Object(r.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return n(!t)},isActive:t}]}))},j=n(36),v=n(44),w=n(17),y=n(61),k=n(58),E=Object(a.createElement)(k.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-5 0-9 4-9 9H0l4 4 4-4H5a7 7 0 113 5.7l-1.5 1.4A9 9 0 1012 3z"})),S=n(51),_=n.n(S),x=Object(a.createElement)(k.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)("path",{d:"M21 4H3a2 2 0 00-2 2v13c0 1.1.9 2 2 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"})),P=n(927),C="woocommerce/single-product",B=Object(r.__)("Single Product","woo-gutenberg-products-block"),N=Object(a.createElement)(y.a,{srcElement:x}),I=Object(r.__)("Display a single product.","woo-gutenberg-products-block"),R=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],D=["core/columns","core/column"].concat(_()(Object.keys(Object(P.a)(C)))),z=function(e){var t=e.isLoading,n=e.product,c=e.clientId,o=Object(j.useDispatch)("core/block-editor").replaceInnerBlocks,s=Object(a.useCallback)((function(){o(c,function e(t){return t.map((function(t){var n=i()(t,3),r=n[0],c=n[1],o=void 0===c?{}:c,a=n[2],u=void 0===a?[]:a,s=u?e(u):[];return Object(w.createBlock)(r,o,s)}))}(R),!1)}),[c,o]);return Object(a.createElement)(v.InnerBlockLayoutContextProvider,{parentName:C,parentClassName:"wc-block-single-product wc-block-layout"},Object(a.createElement)(v.ProductDataContextProvider,{product:n,isLoading:t},Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(u.Button,{label:Object(r.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:s,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(a.createElement)(y.a,{srcElement:E})," ",Object(r.__)("Reset layout","woo-gutenberg-products-block")))),Object(a.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(a.createElement)(f.InnerBlocks,{template:R,allowedBlocks:D,templateLock:!1,renderAppender:!1}))))},M=Object(s.a)((function(e){var t=e.className,n=e.attributes,c=e.setAttributes,o=e.error,s=e.getProduct,m=e.product,g=e.isLoading,j=e.clientId,v=n.productId,w=n.isPreview,y=Object(a.useState)(!v),k=i()(y,2),E=k[0],S=k[1];return w?p:o?Object(a.createElement)(b,{error:o,isLoading:g,getProduct:s}):Object(a.createElement)("div",{className:t},Object(a.createElement)(l.a,{header:Object(r.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(a.createElement)(O,{setIsEditing:S,isEditing:E}),E?Object(a.createElement)(u.Placeholder,{icon:N,label:B,className:"wc-block-single-product"},I,Object(a.createElement)("div",{className:"wc-block-single-product__selection"},Object(a.createElement)(h,{attributes:n,setAttributes:c}),Object(a.createElement)(u.Button,{isDefault:!0,onClick:function(){S(!1)}},Object(r.__)("Done","woo-gutenberg-products-block")))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(a.createElement)(h,{attributes:n,setAttributes:c}))),Object(a.createElement)(d.a,{productId:v}),Object(a.createElement)(z,{clientId:j,product:m,isLoading:g}))))})),L=n(7),A=n.n(L),T=function(e){var t=e.attributes;return Object(a.createElement)("div",{className:A()("is-loading",t.className)},Object(a.createElement)(f.InnerBlocks.Content,null))},V={isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},H={title:B,icon:{src:N,foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:I,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:V,edit:M,save:T};Object(c.X)(C,H)},927:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(57),c=n(0),o=n(5);n.p=o.U,Object(r.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,533))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(10)]).then(n.bind(null,947))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,948))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(c.lazy)((function(){return n.e(12).then(n.bind(null,534))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,535))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(c.lazy)((function(){return n.e(15).then(n.bind(null,537))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(c.lazy)((function(){return n.e(3).then(n.bind(null,266))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(c.lazy)((function(){return n.e(13).then(n.bind(null,538))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(c.lazy)((function(){return n.e(9).then(n.bind(null,539))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(c.lazy)((function(){return n.e(16).then(n.bind(null,540))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(c.lazy)((function(){return n.e(14).then(n.bind(null,541))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,949))}))});var i=function(e){return Object(r.getRegisteredBlockComponents)(e)}},93:function(e,t,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(61)),i=n(144),a=n(7),u=n.n(a),s=n(4),l=n(49);n(147);t.a=function(e){var t=e.className,n=e.error,a=e.isLoading,d=e.onRetry;return Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(o.a,{srcElement:i.a}),label:Object(c.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",t)},Object(r.createElement)(l.a,{error:n}),d&&Object(r.createElement)(r.Fragment,null,a?Object(r.createElement)(s.Spinner,null):Object(r.createElement)(s.Button,{isDefault:!0,onClick:d},Object(c.__)("Retry","woo-gutenberg-products-block"))))}},94:function(e,t){!function(){e.exports=this.wp.date}()},95:function(e,t){!function(){e.exports=this.wp.autop}()}});