(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),r=n.n(c),s=n(2),a=n(3),o=(n(11),n(12),n(1)),u=n.n(o),i=n(4),l="https://bloggy-api.herokuapp.com",d=function(){var t=Object(i.a)(u.a.mark((function t(e){var n,c,r=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.next=3,fetch("".concat(l,"/").concat(e),n);case 3:return c=t.sent,t.abrupt("return",c.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts",{method:"GET",headers:{"Content-type":"application/json"}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts/".concat(e,"?_embed=comments")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=(n(14),n(15),n(0)),h=function(t){var e=t.onAdd,n=Object(s.useState)(""),c=Object(a.a)(n,2),r=c[0],o=c[1],u=Object(s.useState)(""),i=Object(a.a)(u,2),l=i[0],d=i[1];return Object(f.jsxs)("form",{className:"NewPostForm",onSubmit:function(t){t.preventDefault(),e({title:r,body:l}),o(""),d("")},children:[Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("input",{type:"text",name:"title",placeholder:"Your title",className:"NewPostForm__input",value:r,onChange:function(t){return o(t.target.value)}})}),Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"body",placeholder:"Type post here",className:"NewPostForm__input",value:l,onChange:function(t){return d(t.target.value)}})}),Object(f.jsx)("button",{type:"submit",className:"NewPostForm__submit-button button",children:"Add a post"})]})},O=function(t){var e=t.selectedPostId,n=t.selectPost,c=Object(s.useState)([]),r=Object(a.a)(c,2),o=r[0],u=r[1];Object(s.useEffect)((function(){p().then((function(t){return u(t)}))}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"PostsList",children:[Object(f.jsx)("h2",{children:"Posts:"}),Object(f.jsx)(h,{onAdd:function(t){b(t).then((function(){return p()})).then((function(t){return u(t)}))}}),Object(f.jsx)("ul",{className:"PostsList__list",children:o.map((function(t){return Object(f.jsxs)("li",{className:"PostsList__item",children:[Object(f.jsx)("div",{children:t.title}),Object(f.jsxs)("div",{className:"PostsList__buttons",children:[Object(f.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return e=t.id,void m(e).then((function(){return p()})).then((function(t){return u(t)}));var e},children:"Delete"}),Object(f.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c=t.id,void n(e===c?0:c);var c},children:e===t.id?"Close":"Open"})]})]},t.id)}))})]})})},x=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments?postId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=(n(17),function(t){var e=t.selectedPostId,n=t.onAdd,c=Object(s.useState)(""),r=Object(a.a)(c,2),o=r[0],u=r[1];return Object(f.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n({postId:e,body:o}),u("")},children:[Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:o,onChange:function(t){return u(t.target.value)}})}),Object(f.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),y=(n(18),function(t){var e=t.selectedPostId,n=Object(s.useState)(null),c=Object(a.a)(n,2),r=c[0],o=c[1],u=Object(s.useState)([]),i=Object(a.a)(u,2),l=i[0],d=i[1],b=Object(s.useState)(!0),p=Object(a.a)(b,2),m=p[0],h=p[1];Object(s.useEffect)((function(){j(e).then((function(t){o(t)})),x(e).then((function(t){return d(t)}))}),[e]);return Object(f.jsxs)("div",{className:"PostDetails",children:[Object(f.jsx)("h2",{children:"Post details:"}),Object(f.jsx)("section",{className:"PostDetails__post",children:Object(f.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),Object(f.jsxs)("section",{className:"PostDetails__comments",children:[Object(f.jsx)("button",{type:"button",className:"button",onClick:function(){h(!m)},children:m?"Hide ".concat(l.length," comments"):"Show ".concat(l.length," comments")}),Object(f.jsx)("ul",{className:"PostDetails__list",children:m&&Object(f.jsx)(f.Fragment,{children:l.map((function(t){return Object(f.jsxs)("li",{className:"PostDetails__list-item",children:[Object(f.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n=t.id,void _(n).then((function(){return x(e)})).then((function(t){return d(t)}));var n},children:"X"}),Object(f.jsx)("p",{children:t.body})]},t.id)}))})})]}),Object(f.jsx)("section",{children:Object(f.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(f.jsx)(N,{selectedPostId:e,onAdd:function(t){v(t).then((function(){return x(e)})).then((function(t){return d(t)}))}})})})]})}),P=function(){var t=Object(s.useState)(0),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("main",{className:"App__main",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(O,{selectedPostId:n,selectPost:c})}),0!==n&&Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)(y,{selectedPostId:n})})]})})};r.a.render(Object(f.jsx)(P,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.11ce851b.chunk.js.map