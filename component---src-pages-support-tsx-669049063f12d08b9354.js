(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(e,a,t){"use strict";t.r(a);var l=t(279),n=t(278),r=t(1),c=t(5),o=t(0),i=t.n(o),d=(t(9),t(12)),m=t(40),s=i.a.createContext(),p=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,n=e.component,o=void 0===n?"table":n,m=e.padding,p=void 0===m?"default":m,u=e.size,b=void 0===u?"medium":u,g=e.stickyHeader,h=void 0!==g&&g,E=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=i.a.useMemo((function(){return{padding:p,size:b,stickyHeader:h}}),[p,b,h]);return i.a.createElement(s.Provider,{value:v},i.a.createElement(o,Object(r.a)({ref:a,className:Object(d.a)(t.root,l,h&&t.stickyHeader)},E)))})),u=Object(m.a)({root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0},stickyHeader:{borderCollapse:"separate"}},{name:"MuiTable"})(p),b=i.a.createContext(),g={variant:"body"},h=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,n=e.component,o=void 0===n?"tbody":n,m=Object(c.a)(e,["classes","className","component"]);return i.a.createElement(b.Provider,{value:g},i.a.createElement(o,Object(r.a)({className:Object(d.a)(t.root,l),ref:a},m)))})),E=Object(m.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(h),v=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,n=e.component,o=void 0===n?"tr":n,m=e.hover,s=void 0!==m&&m,p=e.selected,u=void 0!==p&&p,g=Object(c.a)(e,["classes","className","component","hover","selected"]),h=i.a.useContext(b);return i.a.createElement(o,Object(r.a)({ref:a,className:Object(d.a)(t.root,l,h&&{head:t.head,footer:t.footer}[h.variant],s&&t.hover,u&&t.selected)},g))})),f=Object(m.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(v),y=t(30),x=t(32),j=i.a.forwardRef((function(e,a){var t,l=e.align,n=void 0===l?"inherit":l,o=e.classes,m=e.className,p=e.component,u=e.padding,g=e.scope,h=e.size,E=e.sortDirection,v=e.variant,f=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=i.a.useContext(s),j=i.a.useContext(b);t=p||(j&&"head"===j.variant?"th":"td");var O=g;!O&&j&&"head"===j.variant&&(O="col");var k=u||(x&&x.padding?x.padding:"default"),w=h||(x&&x.size?x.size:"medium"),C=v||j&&j.variant,N=null;return E&&(N="asc"===E?"ascending":"descending"),i.a.createElement(t,Object(r.a)({ref:a,className:Object(d.a)(o.root,m,"inherit"!==n&&o["align".concat(Object(y.a)(n))],"default"!==k&&o["padding".concat(Object(y.a)(k))],"medium"!==w&&o["size".concat(Object(y.a)(w))],{head:[o.head,x&&x.stickyHeader&&o.stickyHeader],body:o.body,footer:o.footer}[C]),"aria-sort":N,scope:O},f))})),O=Object(m.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(x.d)(Object(x.b)(e.palette.divider,1),.88):Object(x.a)(Object(x.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:1,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(j),k=t(130),w=t(258);a.default=function(){return i.a.createElement(l.a,null,i.a.createElement(k.Helmet,null,i.a.createElement("title",null,"支援服務")),i.a.createElement(l.a,{component:"section",m:2,mb:4},i.a.createElement(l.a,{component:"header",mb:1},i.a.createElement(n.a,{variant:"h4"},"被捕支援")),i.a.createElement(u,null,i.a.createElement(E,null,i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"反送中傷者被捕者人道支援基金 / ",i.a.createElement("br",null),"612人道支援基金"),i.a.createElement(O,null,"9845-6641 (致電 / SMS)")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"星火同盟律師"),i.a.createElement(O,null,"9819-0979")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"民間人權陣線 / ",i.a.createElement("br",null),"民陣"),i.a.createElement(O,null,"6549-9452 (Telegram / SMS / WhatsApp)")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"民權觀察法律支援"),i.a.createElement(O,null,"9463-2945 (Telegram / SMS / WhatsApp only)")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"韋智達律師行"),i.a.createElement(O,null,"9167-7091")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"港大"),i.a.createElement(O,null,"9139-0589",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(w.b,{tgid:"hkusulegal"}))),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"中大"),i.a.createElement(O,null,"9443-3459")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"科大"),i.a.createElement(O,null,"6019-6339 /",i.a.createElement("br",null),"2335-1732 /",i.a.createElement("br",null),"2335-5672")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"理大"),i.a.createElement(O,null,"6800-0560 /",i.a.createElement("br",null),"2766-7025 /",i.a.createElement("br",null),"6253-2359")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"城大"),i.a.createElement(O,null,"9545-4172 /",i.a.createElement("br",null),"3442-5570")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"浸大"),i.a.createElement(O,null,"6110-3860")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"教大"),i.a.createElement(O,null,"5108-3519")),i.a.createElement(f,{hover:!0},i.a.createElement(O,null,"演藝學院"),i.a.createElement(O,null,"6679-0772 /",i.a.createElement("br",null),"9464-5078"))))))}}}]);
//# sourceMappingURL=component---src-pages-support-tsx-669049063f12d08b9354.js.map