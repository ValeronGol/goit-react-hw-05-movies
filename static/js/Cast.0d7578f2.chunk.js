(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{74:function(t,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return j}));var e,i,c,r,o=a(35),s=a(0),p=a(34),l=a(8),m=a(9),b=m.a.ul(e||(e=Object(l.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=m.a.img(i||(i=Object(l.a)(["\n  width: 250px;\n  height: 350px;\n  border-radius: 15px;\n"]))),u=m.a.li(c||(c=Object(l.a)(["\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),g=m.a.span(r||(r=Object(l.a)(["\n  display: block;\n  font-weight: 700;\n"]))),h=a(1);function j(t){var n=t.movieId,a=t.baseImg,e=t.noImg,i=Object(s.useState)(null),c=Object(o.a)(i,2),r=c[0],l=c[1];return Object(s.useEffect)((function(){Object(p.a)(n).then((function(t){l(t.data.cast)}))}),[n]),Object(h.jsx)(h.Fragment,{children:r&&Object(h.jsx)(b,{children:r.map((function(t){return Object(h.jsxs)(u,{children:[Object(h.jsx)(d,{src:t.profile_path?"".concat(a).concat(t.profile_path):"".concat(e),alt:t.name}),Object(h.jsx)(g,{children:t.name})]},t.id)}))})})}}}]);
//# sourceMappingURL=Cast.0d7578f2.chunk.js.map