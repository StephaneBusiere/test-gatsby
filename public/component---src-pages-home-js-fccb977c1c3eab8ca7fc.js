(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[79,636],{7636:function(e,t,n){e.exports=function(e){"use strict";var t="default"in e?e.default:e;function n(e,t){return r(e)||o(e,t)||i(e,t)||c()}function r(e){if(Array.isArray(e))return e}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=e.useRef();e.useEffect((function(){o.current=n}),[n]),e.useEffect((function(){if(r&&r.addEventListener){var e=function(e){return o.current(e)};return r.addEventListener(t,e),function(){r.removeEventListener(t,e)}}}),[t,r])}var s=function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;return{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){return s.Android()||s.BlackBerry()||s.iOS()||s.OperaMini()||s.IEMobile()}}}}();function l(r){var o=r.color,i=void 0===o?"220, 90, 90":o,a=r.outerAlpha,c=void 0===a?.3:a,s=r.innerSize,l=void 0===s?8:s,f=r.innerScale,m=void 0===f?.7:f,d=r.outerSize,v=void 0===d?8:d,y=r.outerScale,p=void 0===y?5:y,E=e.useRef(),b=e.useRef(),h=e.useRef(),g=e.useRef(),S=n(e.useState({x:0,y:0}),2),k=S[0],w=S[1],x=n(e.useState(!1),2),A=x[0],C=x[1],N=n(e.useState(!1),2),P=N[0],R=N[1],L=n(e.useState(!1),2),O=L[0],I=L[1],z=e.useRef(0),Z=e.useRef(0),M=e.useCallback((function(e){var t=e.clientX,n=e.clientY;w({x:t,y:n}),b.current.style.top=n+"px",b.current.style.left=t+"px",z.current=t,Z.current=n}),[]),B=e.useCallback((function(e){void 0!==g.current&&(k.x+=(z.current-k.x)/8,k.y+=(Z.current-k.y)/8,E.current.style.top=k.y+"px",E.current.style.left=k.x+"px"),g.current=e,h.current=requestAnimationFrame(B)}),[h]);e.useEffect((function(){return h.current=requestAnimationFrame(B),function(){cancelAnimationFrame(h.current)}}),[B]);var F=e.useCallback((function(){R(!0)}),[]),_=e.useCallback((function(){R(!1)}),[]),j=e.useCallback((function(){C(!0)}),[]),q=e.useCallback((function(){C(!1)}),[]);u("mousemove",M),u("mousedown",F),u("mouseup",_),u("mouseover",j),u("mouseout",q),e.useEffect((function(){P?(b.current.style.transform="translateZ(0) scale(".concat(m,")"),E.current.style.transform="translateZ(0) scale(".concat(p,")")):(b.current.style.transform="translateZ(0) scale(1)",E.current.style.transform="translateZ(0) scale(1)")}),[m,p,P]),e.useEffect((function(){O&&(b.current.style.transform="translateZ(0) scale(".concat(1.2*m,")"),E.current.style.transform="translateZ(0) scale(".concat(1.4*p,")"))}),[m,p,O]),e.useEffect((function(){A?(b.current.style.opacity=1,E.current.style.opacity=1):(b.current.style.opacity=0,E.current.style.opacity=0)}),[A]),e.useEffect((function(){var e=document.querySelectorAll('a, input[type="submit"], input[type="image"], label[for], select, button, .link');return e.forEach((function(e){e.style.cursor="none",e.addEventListener("mouseover",(function(){R(!0)})),e.addEventListener("click",(function(){R(!0),I(!1)})),e.addEventListener("mousedown",(function(){I(!0)})),e.addEventListener("mouseup",(function(){R(!0)})),e.addEventListener("mouseout",(function(){R(!1),I(!1)}))})),function(){e.forEach((function(e){e.removeEventListener("mouseover",(function(){R(!0)})),e.removeEventListener("click",(function(){R(!0),I(!1)})),e.removeEventListener("mousedown",(function(){I(!0)})),e.removeEventListener("mouseup",(function(){R(!0)})),e.removeEventListener("mouseout",(function(){R(!1),I(!1)}))}))}}),[P]);var T={cursorInner:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",width:l,height:l,pointerEvents:"none",backgroundColor:"rgba(".concat(i,", 1)"),transition:"opacity 0.15s ease-in-out, transform 0.25s ease-in-out",backfaceVisibility:"hidden",willChange:"transform"},cursorOuter:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",pointerEvents:"none",width:v,height:v,backgroundColor:"rgba(".concat(i,", ").concat(c,")"),transition:"opacity 0.15s ease-in-out, transform 0.15s ease-in-out",backfaceVisibility:"hidden",willChange:"transform"}};return document.body.style.cursor="none",t.createElement(t.Fragment,null,t.createElement("div",{ref:E,style:T.cursorOuter}),t.createElement("div",{ref:b,style:T.cursorInner}))}function f(e){var n=e.color,r=void 0===n?"220, 90, 90":n,o=e.outerAlpha,i=void 0===o?.3:o,a=e.innerSize,c=void 0===a?8:a,u=e.outerSize,f=void 0===u?8:u,m=e.outerScale,d=void 0===m?5:m,v=e.innerScale,y=void 0===v?.7:v;return"undefined"!=typeof navigator&&s.any()?t.createElement(t.Fragment,null):t.createElement(l,{color:r,outerAlpha:i,innerSize:c,innerScale:y,outerSize:f,outerScale:d})}return f}(n(7294))},9458:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=(n(3310),n(2932)),a=n(2884);t.Z=function(){(0,r.useRef)(null);var e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)(null),c=((0,r.useRef)(null),(0,r.useRef)(null));return a.p8.registerPlugin(i.i),(0,r.useEffect)((function(){if("undefined"!=typeof window){a.p8.registerPlugin(i.i),a.p8.defaults({ease:"none",duration:2}),a.p8.timeline().from(c.current,{yPercent:-100}).from(n.current,{yPercent:100});var e=a.p8.timeline();e.from(t.current,{xPercent:-100}).from(n.current,{xPercent:100}),i.i.create({animation:e,trigger:c.current,start:"top top",end:"+=3000",scrub:!0,pin:!0,anticipatePin:1})}}),[c]),r.createElement(o.StaticQuery,{query:"1899981222",render:function(o){return r.createElement("div",{className:"hero-section-container"},r.createElement("section",{className:"hero-top-title"},r.createElement("p",null,o.wpPage.title)),r.createElement("div",{ref:function(e){return c.current=e},className:"hero-section"},r.createElement("section",{ref:function(t){return e.current=t},className:"heroContainer1"}),r.createElement("section",{ref:function(e){return t.current=e},className:"heroContainer2"}),r.createElement("section",{ref:function(e){return n.current=e},className:"heroContainer3"})),r.createElement("div",{className:"hero-tex-container"},r.createElement("p",{className:"hero-title",style:{color:o.wpPage.homePageTitle.couleurTitreSecondaire}},o.wpPage.homePageTitle.titreSecondaire)))}})}},5516:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=(n(5444),n(7198),n(6179),n(2580)),i=n(9458),a=n(7636),c=n.n(a);t.default=function(e){e.data,e.location;return r.createElement("div",{className:"content-container"},r.createElement(c(),null),r.createElement("div",{className:"top-content"},r.createElement(o.Z,null)),r.createElement("div",{className:"hero-content"},r.createElement(i.Z,null)),r.createElement("div",{className:"third-section"},r.createElement("p",{className:"about-us-text"},"About us"),r.createElement("div",{className:"about-us-section"}),r.createElement("div",{className:"about-us-text"},"Abene Mendizabal"),r.createElement("div",{className:"about-us-text"},"Founder et CEO Spain Collection")))}}}]);
//# sourceMappingURL=component---src-pages-home-js-fccb977c1c3eab8ca7fc.js.map