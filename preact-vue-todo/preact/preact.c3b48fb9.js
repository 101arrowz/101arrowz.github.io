(function () {var Ba,ya,b,Aa,f,da,fa,S,za,d={},q=[],ca=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function g(e,t){for(var $ in t)e[$]=t[$];return e}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,$){var n,r,o,a,s=arguments;if(t=g({},t),arguments.length>3)for($=[$],n=3;n<arguments.length;n++)$.push(s[n]);if(null!=$&&(t.children=$),null!=e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===t[r]&&(t[r]=e.defaultProps[r]);return a=t.key,null!=(o=t.ref)&&delete t.ref,null!=a&&delete t.key,i(e,t,a,o)}function i(e,t,$,n){var r={type:e,props:t,key:$,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return b.vnode&&b.vnode(r),r}function k(e){return e.children}function aa(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return i(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=i(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function j(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__p?h(e.__p,e.__p.__k.indexOf(e)+1):null;for(var $;t<e.__k.length;t++)if(null!=($=e.__k[t])&&null!=$.__e)return $.__e;return"function"==typeof e.type?h(e):null}function l(e){var t,$;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=($=e.__k[t])&&null!=$.__e){e.__e=e.__c.base=$.__e;break}return l(e)}}function o(e){(!e.__d&&(e.__d=!0)&&1===f.push(e)||fa!==b.debounceRendering)&&(fa=b.debounceRendering,(b.debounceRendering||da)(ga))}function ga(){var e;for(f.sort(function(e,t){return t.__v.__b-e.__v.__b});e=f.pop();)e.__d&&e.forceUpdate(!1)}function w(e,t,$,n,r,o,a,s,l){var p,_,i,u,P,c,G,v=$&&$.__k||q,f=v.length;if(s==d&&(s=null!=o?o[0]:f?h($,0):null),p=0,t.__k=x(t.__k,function($){if(null!=$){if($.__p=t,$.__b=t.__b+1,null===(i=v[p])||i&&$.key==i.key&&$.type===i.type)v[p]=void 0;else for(_=0;_<f;_++){if((i=v[_])&&$.key==i.key&&$.type===i.type){v[_]=void 0;break}i=null}if(u=m(e,$,i=i||d,n,r,o,a,null,s,l),(_=$.ref)&&i.ref!=_&&(G||(G=[])).push(_,$.__c||u,$),null!=u){if(null==c&&(c=u),null!=$.l)u=$.l,$.l=null;else if(o==i||u!=s||null==u.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(u);else{for(P=s,_=0;(P=P.nextSibling)&&_<f;_+=2)if(P==u)break e;e.insertBefore(u,s)}"option"==t.type&&(e.value="")}s=u.nextSibling,"function"==typeof t.type&&(t.l=u)}}return p++,$}),t.__e=c,null!=o&&"function"!=typeof t.type)for(p=o.length;p--;)null!=o[p]&&y(o[p]);for(p=f;p--;)null!=v[p]&&A(v[p],v[p]);if(G)for(p=0;p<G.length;p++)z(G[p],G[++p],G[++p])}function x(e,t,$){if(null==$&&($=[]),null==e||"boolean"==typeof e)t&&$.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)x(e[n],t,$);else $.push(t?t(aa(e)):e);return $}function U(e,t,$,n,r){var o;for(o in $)o in t||p(e,o,null,$[o],n);for(o in t)r&&"function"!=typeof t[o]||"value"===o||"checked"===o||$[o]===t[o]||p(e,o,t[o],$[o],n)}function u(e,t,$){"-"===t[0]?e.setProperty(t,$):e[t]="number"==typeof $&&!1===ca.test(t)?$+"px":$||""}function p(e,t,$,n,r){var o,a,s,l,p;if("key"===(t=r?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t){if(o=e.style,"string"==typeof $)o.cssText=$;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(a in n)$&&a in $||u(o,a,"");if($)for(s in $)n&&$[s]===n[s]||u(o,s,$[s])}}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),p=t.toLowerCase(),t=(p in e?p:t).slice(2),$?(n||e.addEventListener(t,v,l),(e.u||(e.u={}))[t]=$):e.removeEventListener(t,v,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&!r&&t in e?e[t]=null==$?"":$:"function"!=typeof $&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==$||!1===$?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),$):null==$||!1===$?e.removeAttribute(t):e.setAttribute(t,$))}function v(e){return this.u[e.type](b.event?b.event(e):e)}function m(e,t,$,n,r,o,a,s,l,p){var _,i,u,P,c,G,v,f,d,x,h=t.type;if(void 0!==t.constructor)return null;(_=b.__b)&&_(t);try{e:if("function"==typeof h){if(f=t.props,d=(_=h.contextType)&&n[_.__c],x=_?d?d.props.value:_.__p:n,$.__c?v=(i=t.__c=$.__c).__p=i.__E:("prototype"in h&&h.prototype.render?t.__c=i=new h(f,x):(t.__c=i=new j(f,x),i.constructor=h,i.render=ja),d&&d.sub(i),i.props=f,i.state||(i.state={}),i.context=x,i.__n=n,u=i.__d=!0,i.__h=[]),null==i.__s&&(i.__s=i.state),null!=h.getDerivedStateFromProps&&g(i.__s==i.state?i.__s=g({},i.__s):i.__s,h.getDerivedStateFromProps(f,i.__s)),u)null==h.getDerivedStateFromProps&&null!=i.componentWillMount&&i.componentWillMount(),null!=i.componentDidMount&&a.push(i);else{if(null==h.getDerivedStateFromProps&&null==s&&null!=i.componentWillReceiveProps&&i.componentWillReceiveProps(f,x),!s&&null!=i.shouldComponentUpdate&&!1===i.shouldComponentUpdate(f,i.__s,x)){for(i.props=f,i.state=i.__s,i.__d=!1,i.__v=t,t.__e=null!=l?l!==$.__e?l:$.__e:null,t.__k=$.__k,_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__p=t);break e}null!=i.componentWillUpdate&&i.componentWillUpdate(f,i.__s,x)}for(P=i.props,c=i.state,i.context=x,i.props=f,i.state=i.__s,(_=b.__r)&&_(t),i.__d=!1,i.__v=t,i.__P=e,_=i.render(i.props,i.state,i.context),t.__k=null!=_&&_.type==k&&null==_.key?_.props.children:_,null!=i.getChildContext&&(n=g(g({},n),i.getChildContext())),u||null==i.getSnapshotBeforeUpdate||(G=i.getSnapshotBeforeUpdate(P,c)),w(e,t,$,n,r,o,a,l,p),i.base=t.__e;_=i.__h.pop();)i.__s&&(i.state=i.__s),_.call(i);u||null==P||null==i.componentDidUpdate||i.componentDidUpdate(P,c,G),v&&(i.__E=i.__p=null)}else t.__e=ea($.__e,t,$,n,r,o,a,p);(_=b.diffed)&&_(t)}catch(e){b.__e(e,t,$)}return t.__e}function s(e,t){for(var $;$=e.pop();)try{$.componentDidMount()}catch(e){b.__e(e,$.__v)}b.__c&&b.__c(t)}function ea(e,t,$,n,r,o,a,s){var l,p,_,i,u=$.props,P=t.props;if(r="svg"===t.type||r,null==e&&null!=o)for(l=0;l<o.length;l++)if(null!=(p=o[l])&&(null===t.type?3===p.nodeType:p.localName===t.type)){e=p,o[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(P);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),o=null}return null===t.type?u!==P&&(null!=o&&(o[o.indexOf(e)]=null),e.data=P):t!==$&&(null!=o&&(o=q.slice.call(e.childNodes)),_=(u=$.props||d).dangerouslySetInnerHTML,i=P.dangerouslySetInnerHTML,s||(i||_)&&(i&&_&&i.__html==_.__html||(e.innerHTML=i&&i.__html||"")),U(e,P,u,r,s),t.__k=t.props.children,i||w(e,t,$,n,"foreignObject"!==t.type&&r,o,a,d,s),s||("value"in P&&void 0!==P.value&&P.value!==e.value&&(e.value=null==P.value?"":P.value),"checked"in P&&void 0!==P.checked&&P.checked!==e.checked&&(e.checked=P.checked))),e}function z(e,t,$){try{"function"==typeof e?e(t):e.current=t}catch(e){b.__e(e,$)}}function A(e,t,$){var n,r,o;if(b.unmount&&b.unmount(e),(n=e.ref)&&z(n,null,t),$||"function"==typeof e.type||($=null!=(r=e.__e)),e.__e=e.l=null,null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){b.__e(e,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&A(n[o],t,$);null!=r&&y(r)}function ja(e,t,$){return this.constructor(e,$)}function la(e,t,$){var n,r,o;b.__p&&b.__p(e,t),r=(n=$===S)?null:$&&$.__k||t.__k,e=c(k,null,[e]),o=[],m(t,n?t.__k=e:($||t).__k=e,r||d,d,void 0!==t.ownerSVGElement,$&&!n?[$]:r?null:q.slice.call(t.childNodes),o,!1,$||d,n),s(o,e)}ya=b={},Ba=Aa=function(e){return null!=e&&void 0===e.constructor},j.prototype.setState=function(e,t){var $=this.__s!==this.state&&this.__s||(this.__s=g({},this.state));("function"!=typeof e||(e=e($,this.props)))&&g($,e),null!=e&&this.__v&&(t&&this.__h.push(t),o(this))},j.prototype.forceUpdate=function(e){var t,$,n,r=this.__v,o=this.__v.__e,a=this.__P;a&&(t=!1!==e,$=[],n=m(a,r,g({},r),this.__n,void 0!==a.ownerSVGElement,null,$,t,null==o?h(r):o),s($,r),n!=o&&l(r)),e&&e()},j.prototype.render=k,f=[],da="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fa=b.debounceRendering,b.__e=function(e,t,$){for(var n;t=t.__p;)if((n=t.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return o(n.__E=n)}catch(t){e=t}throw e},S=d,za=0;function pa(r){return N(r)||ta(r)||qa()}function qa(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function ta(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function N(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}function O(r,t){return R(r)||Q(r,t)||M()}function M(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Q(r,t){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var e=[],o=!0,i=!1,a=void 0;try{for(var n,$=r[Symbol.iterator]();!(o=(n=$.next()).done)&&(e.push(n.value),!t||e.length!==t);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==$.return||$.return()}finally{if(i)throw a}}return e}}function R(r){if(Array.isArray(r))return r}function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(r,!0).forEach(function(e){V(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function V(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function W(t,e){return Z(t)||Y(t,e)||X()}function X(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Y(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],o=!0,n=!1,$=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(m){n=!0,$=m}finally{try{o||null==a.return||a.return()}finally{if(n)throw $}}return r}}function Z(t){if(Array.isArray(t))return t}function D(t,e){if(null==t)return{};var r,o,n=_(t,e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(t);for(o=0;o<$.length;o++)r=$[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _(t,e){if(null==t)return{};var r,o,n={},$=Object.keys(t);for(o=0;o<$.length;o++)r=$[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}var e,a,r=b.__r;b.__r=function($){r&&r($),e=0,(a=$.__c).__H&&(a.__H.t=J(a.__H.t))};var t=b.diffed;b.diffed=function($){t&&t($);var d=$.__c;if(d){var n=d.__H;n&&(n.u=(n.u.some(function($){$.ref&&($.ref.current=$.createHandle())}),[]),n.i=J(n.i))}};var F=b.unmount;function G($){b.__h&&b.__h(a);var d=a.__H||(a.__H={o:[],t:[],i:[],u:[]});return $>=d.o.length&&d.o.push({}),d.o[$]}function H($){return ha(K,$)}function ha($,d,n){var v=G(e++);return v.__c||(v.__c=a,v.v=[n?n(d):K(null,d),function(d){var n=$(v.v[0],d);v.v[0]!==n&&(v.v[0]=n,v.__c.setState({}))}]),v.v}function ia($){return I(function(){return{current:$}},[])}function I($,d){var n=G(e++);return oa(n.l,d)?(n.l=d,n.m=$,n.v=$()):n.v}b.unmount=function($){F&&F($);var d=$.__c;if(d){var n=d.__H;n&&n.o.forEach(function($){return $.p&&$.p()})}};if("undefined"!=typeof window){var xa=b.requestAnimationFrame}function J($){return $.forEach(ma),$.forEach(na),[]}function ma($){$.p&&$.p()}function na($){var d=$.v();"function"==typeof d&&($.p=d)}function oa($,d){return!$||d.some(function(d,n){return d!==$[n]})}function K($,d){return"function"==typeof d?d($):d}var L=200,ra=function(t){var e=t.data,r=t.style,o=t.removeSelf,n=D(t,["data","style","removeSelf"]),$=W(H(1),2),i=$[0],a=$[1];return c("div",B({class:"list-item",style:C({transition:"opacity ".concat(L,"ms ease-in-out"),opacity:i.toString()},r)},n),e.img&&c("img",{src:e.img}),c("div",{style:{flexDirection:"column",textAlign:"left"}},c("div",{style:{fontSize:"150%"}},e.header),e.subheader&&c("div",{style:{fontSize:"75%"}},e.subheader)),c("div",{onClick:function(){setTimeout(o,L),a(0)},class:"button"},"\xD7"))},sa=function(t){var e=t.data,r=t.setData,o=t.style,n=D(t,["data","setData","style"]);return c("div",B({style:C({transition:"height 100ms ease-in-out",textAlign:"center"},o)},n),e.length?e.map(function(t){return c(ra,{key:t.id,data:t,removeSelf:function(){return r(e.filter(function(e){return e!==t}))}})}):c("div",{style:{fontSize:"150%"}},"Nothing to do!"))};function E(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function ua(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(t,!0).forEach(function(e){va(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):E(t).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function va(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function wa(r,e){return T(r)||P(r,e)||ka()}function ka(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function P(r,e){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,$=r[Symbol.iterator]();!(n=(i=$.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==$.return||$.return()}finally{if(o)throw a}}return t}}function T(r){if(Array.isArray(r))return r}var $=function(r,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t?localStorage:sessionStorage,a=wa(H(I(function(){var t=o.getItem(r);if(null===t){var a=void 0===e?n?{}:"":e;return o.setItem(r,n?JSON.stringify(a):a),a}return n?JSON.parse(t):t},[])),2),i=a[0],$=a[1];return[i,function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=n&&t?ua({},i,{},e):e;o.setItem(r,n?JSON.stringify(a):a),$(a)}]};var ba=function(){var r=O($("preact-todo",[]),2),t=r[0],e=r[1],o=ia(null),i=function(){o.current.value&&(e(t.concat({header:o.current.value,subheader:"Example Subheader",id:Math.max.apply(Math,pa(t.map(function(r){return r.id})).concat([-1]))+1}),!1),o.current.value="")};return c("div",{style:{display:"flex",flexDirection:"column",margin:"0 auto",alignItems:"center"}},c("div",{style:{fontSize:"200%"}},"Preact Todo"),c(sa,{data:t,setData:function(r){return e(r,!1)},style:{width:"50vw"}}),c("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginTop:"1vh"}},c("input",{ref:o,onKeyPress:function(r){13===r.charCode&&i()},style:{textAlign:"center"}}),c("div",{onClick:i,class:"button",style:{marginTop:"1vh"}},"+")))};la(c(ba,null),document.getElementById("root"));})();