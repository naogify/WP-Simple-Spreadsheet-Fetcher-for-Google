!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=wp.i18n.__,l=wp.blocks.registerBlockType,i=wp.components,a=i.TextControl,u=i.PanelBody,c=i.ServerSideRender,s=wp.element.Fragment,p=wp.blockEditor&&wp.blockEditor.BlockEdit?wp.blockEditor:wp.editor,f=(p.RichText,p.InspectorControls);l("wp2s2fg/parser-item",{title:o("Display Google Sheets Data Item","wp2s2fg"),parent:["wp2s2fg/parser"],icon:"smiley",category:"widgets",supports:{className:!0,html:!1},attributes:{className:{type:"string",default:""},range:{type:"string",default:""}},edit:function(e){var t=e.range,n=e.attributes,l=e.setAttributes;return Object(r.createElement)(s,null,Object(r.createElement)(f,null,Object(r.createElement)(u,{title:o("Fetch Data Setting","wp2s2fg")},Object(r.createElement)(a,{label:o("Please set the cell in A1 notation. Example : Sheets1!A1","wp2s2fg"),value:t,onChange:function(e){return l({range:void 0===e?"none":e})},initialOpen:!0}))),Object(r.createElement)(c,{block:"wp2s2fg/parser-item",attributes:n}))},save:function(){return null}})}]);