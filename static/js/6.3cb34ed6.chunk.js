/*! For license information please see 6.3cb34ed6.chunk.js.LICENSE.txt */
(this["webpackJsonpresearch-lab-website"]=this["webpackJsonpresearch-lab-website"]||[]).push([[6],{106:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(88);const r=Object(c.a)("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(88);const r=Object(c.a)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]])},108:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(88);const r=Object(c.a)("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]])},111:function(e,a,t){"use strict";var c=t(3),r=t(6),s=t(8),n=t.n(s),o=t(0),i=t(39),l=t(9),b=t(52);function d(e,a){return Array.isArray(e)?e.includes(a):e===a}const j=o.createContext({});j.displayName="AccordionContext";var f=j,O=t(4);const m=["as","bsPrefix","className","children","eventKey"],x=o.forwardRef((e,a)=>{let{as:t="div",bsPrefix:s,className:i,children:j,eventKey:x}=e,u=Object(r.a)(e,m);const{activeEventKey:y}=Object(o.useContext)(f);return s=Object(l.c)(s,"accordion-collapse"),Object(O.jsx)(b.a,Object(c.a)(Object(c.a)({ref:a,in:d(y,x)},u),{},{className:n()(i,s),children:Object(O.jsx)(t,{children:o.Children.only(j)})}))});x.displayName="AccordionCollapse";var u=x;const y=o.createContext({eventKey:""});y.displayName="AccordionItemContext";var N=y;const v=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h=o.forwardRef((e,a)=>{let{as:t="div",bsPrefix:s,className:i,onEnter:b,onEntering:d,onEntered:j,onExit:f,onExiting:m,onExited:x}=e,y=Object(r.a)(e,v);s=Object(l.c)(s,"accordion-body");const{eventKey:h}=Object(o.useContext)(N);return Object(O.jsx)(u,{eventKey:h,onEnter:b,onEntering:d,onEntered:j,onExit:f,onExiting:m,onExited:x,children:Object(O.jsx)(t,Object(c.a)(Object(c.a)({ref:a},y),{},{className:n()(i,s)}))})});h.displayName="AccordionBody";var p=h;const k=["as","bsPrefix","className","onClick"];const w=o.forwardRef((e,a)=>{let{as:t="button",bsPrefix:s,className:i,onClick:b}=e,j=Object(r.a)(e,k);s=Object(l.c)(s,"accordion-button");const{eventKey:m}=Object(o.useContext)(N),x=function(e,a){const{activeEventKey:t,onSelect:c,alwaysOpen:r}=Object(o.useContext)(f);return s=>{let n=e===t?null:e;r&&(n=Array.isArray(t)?t.includes(e)?t.filter(a=>a!==e):[...t,e]:[e]),null==c||c(n,s),null==a||a(s)}}(m,b),{activeEventKey:u}=Object(o.useContext)(f);return"button"===t&&(j.type="button"),Object(O.jsx)(t,Object(c.a)(Object(c.a)({ref:a,onClick:x},j),{},{"aria-expanded":Array.isArray(u)?u.includes(m):m===u,className:n()(i,s,!d(u,m)&&"collapsed")}))});w.displayName="AccordionButton";var P=w;const C=["as","bsPrefix","className","children","onClick"],g=o.forwardRef((e,a)=>{let{as:t="h2",bsPrefix:s,className:o,children:i,onClick:b}=e,d=Object(r.a)(e,C);return s=Object(l.c)(s,"accordion-header"),Object(O.jsx)(t,Object(c.a)(Object(c.a)({ref:a},d),{},{className:n()(o,s),children:Object(O.jsx)(P,{onClick:b,children:i})}))});g.displayName="AccordionHeader";var E=g;const A=["as","bsPrefix","className","eventKey"],R=o.forwardRef((e,a)=>{let{as:t="div",bsPrefix:s,className:i,eventKey:b}=e,d=Object(r.a)(e,A);s=Object(l.c)(s,"accordion-item");const j=Object(o.useMemo)(()=>({eventKey:b}),[b]);return Object(O.jsx)(N.Provider,{value:j,children:Object(O.jsx)(t,Object(c.a)(Object(c.a)({ref:a},d),{},{className:n()(i,s)}))})});R.displayName="AccordionItem";var K=R;const M=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],B=o.forwardRef((e,a)=>{const t=Object(i.a)(e,{activeKey:"onSelect"}),{as:s="div",activeKey:b,bsPrefix:d,className:j,onSelect:m,flush:x,alwaysOpen:u}=t,y=Object(r.a)(t,M),N=Object(l.c)(d,"accordion"),v=Object(o.useMemo)(()=>({activeEventKey:b,onSelect:m,alwaysOpen:u}),[b,m,u]);return Object(O.jsx)(f.Provider,{value:v,children:Object(O.jsx)(s,Object(c.a)(Object(c.a)({ref:a},y),{},{className:n()(j,N,x&&"".concat(N,"-flush"))}))})});B.displayName="Accordion";a.a=Object.assign(B,{Button:P,Collapse:u,Item:K,Header:E,Body:p})},88:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var c=t(3),r=t(6),s=t(0);const n=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((e,a,t)=>Boolean(e)&&t.indexOf(e)===a).join(" ")};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"],l=Object(s.forwardRef)((e,a)=>{let{color:t="currentColor",size:l=24,strokeWidth:b=2,absoluteStrokeWidth:d,className:j="",children:f,iconNode:O}=e,m=Object(r.a)(e,i);return Object(s.createElement)("svg",Object(c.a)(Object(c.a)({ref:a},o),{},{width:l,height:l,stroke:t,strokeWidth:d?24*Number(b)/Number(l):b,className:n("lucide",j)},m),[...O.map(e=>{let[a,t]=e;return Object(s.createElement)(a,t)}),...Array.isArray(f)?f:[f]])}),b=["className"],d=(e,a)=>{const t=Object(s.forwardRef)((t,o)=>{let{className:i}=t,d=Object(r.a)(t,b);return Object(s.createElement)(l,Object(c.a)({ref:o,iconNode:a,className:n("lucide-".concat((j=e,j.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())),i)},d));var j});return t.displayName="".concat(e),t}},90:function(e,a,t){"use strict";var c=t(3),r=t(6),s=t(8),n=t.n(s),o=t(0),i=t(9),l=t(4);const b=["className","bsPrefix","as"],d=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o="div"}=e,d=Object(r.a)(e,b);return s=Object(i.c)(s,"card-body"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},d))});d.displayName="CardBody";var j=d;const f=["className","bsPrefix","as"],O=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o="div"}=e,b=Object(r.a)(e,f);return s=Object(i.c)(s,"card-footer"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});O.displayName="CardFooter";var m=O,x=t(49);const u=["bsPrefix","className","as"],y=o.forwardRef((e,a)=>{let{bsPrefix:t,className:s,as:b="div"}=e,d=Object(r.a)(e,u);const j=Object(i.c)(t,"card-header"),f=Object(o.useMemo)(()=>({cardHeaderBsPrefix:j}),[j]);return Object(l.jsx)(x.a.Provider,{value:f,children:Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:a},d),{},{className:n()(s,j)}))})});y.displayName="CardHeader";var N=y;const v=["bsPrefix","className","variant","as"],h=o.forwardRef((e,a)=>{let{bsPrefix:t,className:s,variant:o,as:b="img"}=e,d=Object(r.a)(e,v);const j=Object(i.c)(t,"card-img");return Object(l.jsx)(b,Object(c.a)({ref:a,className:n()(o?"".concat(j,"-").concat(o):j,s)},d))});h.displayName="CardImg";var p=h;const k=["className","bsPrefix","as"],w=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o="div"}=e,b=Object(r.a)(e,k);return s=Object(i.c)(s,"card-img-overlay"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});w.displayName="CardImgOverlay";var P=w;const C=["className","bsPrefix","as"],g=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o="a"}=e,b=Object(r.a)(e,C);return s=Object(i.c)(s,"card-link"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});g.displayName="CardLink";var E=g,A=t(47);const R=["className","bsPrefix","as"],K=Object(A.a)("h6"),M=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o=K}=e,b=Object(r.a)(e,R);return s=Object(i.c)(s,"card-subtitle"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});M.displayName="CardSubtitle";var B=M;const S=["className","bsPrefix","as"],H=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o="p"}=e,b=Object(r.a)(e,S);return s=Object(i.c)(s,"card-text"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});H.displayName="CardText";var I=H;const W=["className","bsPrefix","as"],q=Object(A.a)("h5"),z=o.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:o=q}=e,b=Object(r.a)(e,W);return s=Object(i.c)(s,"card-title"),Object(l.jsx)(o,Object(c.a)({ref:a,className:n()(t,s)},b))});z.displayName="CardTitle";var L=z;const T=["bsPrefix","className","bg","text","border","body","children","as"],Z=o.forwardRef((e,a)=>{let{bsPrefix:t,className:s,bg:o,text:b,border:d,body:f=!1,children:O,as:m="div"}=e,x=Object(r.a)(e,T);const u=Object(i.c)(t,"card");return Object(l.jsx)(m,Object(c.a)(Object(c.a)({ref:a},x),{},{className:n()(s,u,o&&"bg-".concat(o),b&&"text-".concat(b),d&&"border-".concat(d)),children:f?Object(l.jsx)(j,{children:O}):O}))});Z.displayName="Card";a.a=Object.assign(Z,{Img:p,Title:L,Subtitle:B,Body:j,Link:E,Text:I,Header:N,Footer:m,ImgOverlay:P})}}]);
//# sourceMappingURL=6.3cb34ed6.chunk.js.map