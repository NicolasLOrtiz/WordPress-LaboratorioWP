(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[11],{191:function(e,t){},253:function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return y}));var c=r(7),n=r.n(c),o=r(52),a=r.n(o),i=r(3);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l,p,m={code:i.CURRENCY.code,symbol:i.CURRENCY.symbol,thousandSeparator:i.CURRENCY.thousandSeparator,decimalSeparator:i.CURRENCY.decimalSeparator,minorUnit:i.CURRENCY.precision,prefix:(l=i.CURRENCY.symbol,p=i.CURRENCY.symbolPosition,{left:l,left_space:" "+l,right:"",right_space:""}[p]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(i.CURRENCY.symbol,i.CURRENCY.symbolPosition)},b=function(e){if(!e||"object"!==a()(e))return m;var t=e.currency_code,r=e.currency_symbol,c=e.currency_thousand_separator,n=e.currency_decimal_separator,o=e.currency_minor_unit,i=e.currency_prefix,s=e.currency_suffix;return{code:t||"USD",symbol:r||"$",thousandSeparator:"string"==typeof c?c:",",decimalSeparator:"string"==typeof n?n:".",minorUnit:Number.isFinite(o)?o:2,prefix:"string"==typeof i?i:"$",suffix:"string"==typeof s?s:""}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u(u({},m),e)},y=function(e,t){if(""===e||void 0===e)return"";var r=parseInt(e,10);if(!Number.isFinite(r))return"";var c=f(t),n=r/Math.pow(10,c.minorUnit),o=c.prefix+n+c.suffix,a=document.createElement("textarea");return a.innerHTML=o,a.value}},517:function(e,t,r){"use strict";r.r(t);var c=r(7),n=r.n(c),o=r(0),a=(r(2),r(8)),i=r.n(a),s=r(59),u=r(253),l=r(42),p=r(14),m=r(5),b=r(72),f=(r(537),function(e){return e.price_range&&e.price_range.min_amount&&e.price_range.max_amount}),y=function(e){var t,r=e.currency,c=e.minAmount,a=e.maxAmount,u=e.classes,p=e.style,b=Object(l.useInnerBlockLayoutContext)().parentClassName;return Object(o.createElement)("span",{className:i()("wc-block-components-product-price__value",(t={},n()(t,"".concat(b,"__product-price__value"),b),n()(t,u,Object(m.V)()),t)),style:Object(m.V)()?p:{}},Object(o.createElement)(s.a,{currency:r,value:c})," — ",Object(o.createElement)(s.a,{currency:r,value:a}))},O=function(e){var t,r,c=e.currency,a=e.price,u=e.regularPrice,p=e.saleClasses,b=void 0===p?"":p,f=e.saleStyle,y=void 0===f?{}:f,O=e.classes,d=void 0===O?"":O,j=e.style,v=void 0===j?{}:j,_=Object(l.useInnerBlockLayoutContext)().parentClassName;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("del",{className:i()("wc-block-components-product-price__regular",(t={},n()(t,"".concat(_,"__product-price__regular"),_),n()(t,d,Object(m.V)()),t)),style:Object(m.V)()?v:{}},Object(o.createElement)(s.a,{currency:c,value:u})),Object(o.createElement)("span",{className:i()("wc-block-components-product-price__value","is-discounted",(r={},n()(r,"".concat(_,"__product-price__value"),_),n()(r,b,Object(m.V)()),r)),style:Object(m.V)()?y:{}},Object(o.createElement)(s.a,{currency:c,value:a})))},d=function(e){var t=e.currency,r=e.price,c=e.classes,a=void 0===c?"":c,u=e.style,p=void 0===u?{}:u,b=Object(l.useInnerBlockLayoutContext)().parentClassName;return Object(o.createElement)("span",{className:i()("wc-block-components-product-price__value","".concat(b,"__product-price__value"),n()({},a,Object(m.V)())),style:Object(m.V)()?p:{}},Object(o.createElement)(s.a,{currency:t,value:r}))};t.default=Object(b.withProductDataContext)((function(e){var t,r,c,a=e.className,s=e.align,b=e.fontSize,j=e.customFontSize,v=e.saleFontSize,_=e.customSaleFontSize,g=e.color,C=e.customColor,h=e.saleColor,w=e.customSaleColor,E=Object(l.useInnerBlockLayoutContext)().parentClassName,S=Object(l.useProductDataContext)().product,N=Object(p.getColorClassName)("color",g),x=Object(p.getFontSizeClass)(b),P=Object(p.getColorClassName)("color",h),k=Object(p.getFontSizeClass)(v),R=i()((t={"has-text-color":g||C,"has-font-size":b||j},n()(t,N,N),n()(t,x,x),t)),U=i()((r={"has-text-color":h||w,"has-font-size":v||_},n()(r,P,P),n()(r,k,k),r)),V={color:C,fontSize:j},D={color:w,fontSize:_};if(!S.id)return Object(o.createElement)("div",{className:i()(a,"price","wc-block-components-product-price",n()({},"".concat(E,"__product-price"),E))});var z=S.prices,F=Object(u.c)(z);return Object(o.createElement)("div",{className:i()(a,"price","wc-block-components-product-price",(c={},n()(c,"".concat(E,"__product-price"),E),n()(c,"wc-block-components-product-price--align-".concat(s),s&&Object(m.V)()),c))},f(z)?Object(o.createElement)(y,{currency:F,minAmount:z.price_range.min_amount,maxAmount:z.price_range.max_amount,classes:R,style:V}):z.price!==z.regular_price?Object(o.createElement)(O,{currency:F,price:z.price,regularPrice:z.regular_price,saleClasses:U,saleStyle:D,classes:R,style:V}):Object(o.createElement)(d,{currency:F,price:z.price,classes:R,style:V}))}))},537:function(e,t){},59:function(e,t,r){"use strict";var c=r(10),n=r.n(c),o=r(7),a=r.n(o),i=r(27),s=r.n(i),u=r(0),l=r(182),p=r(8),m=r.n(p);r(191);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.className,r=e.value,c=e.currency,o=e.onValueChange,a=s()(e,["className","value","currency","onValueChange"]);if("-"===r)return null;var i=r/Math.pow(10,c.minorUnit);if(!Number.isFinite(i))return null;var p=m()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),b=f(f(f({displayType:"text"},a),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(c)),{},{value:void 0,currency:void 0,onValueChange:void 0}),y=o?function(e){var t=e.value*Math.pow(10,c.minorUnit);o(t)}:function(){};return Object(u.createElement)(l.a,n()({className:p},b,{value:i,onValueChange:y}))}}}]);