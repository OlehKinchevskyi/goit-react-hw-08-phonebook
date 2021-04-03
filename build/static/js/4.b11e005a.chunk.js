(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{142:function(t,e,n){"use strict";var r=n(36),a=function(t){return t.phoneBook.filter},c=function(t){return t.phoneBook.contacts},o={getLoading:function(t){return t.phoneBook.loading},getFilter:a,getVisibleContacts:Object(r.a)([c,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:c,getError:function(t){return t.phoneBook.error}};e.a=o},143:function(t,e,n){"use strict";var r=n(2),a=n(46),c=n(47),o=n(49),i=n(48),s=n(0),u=n(12),l=n(13),b=n(154),f=(n(144),n(142)),m=n(20),h=n(4),j=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){var t=this;this.props.errorAuth?setTimeout((function(){t.props.clearErrorAuth(t.state)}),2500):this.props.errorPb&&setTimeout((function(){t.props.clearErrorPb(t.state)}),2500)}},{key:"render",value:function(){return Object(r.jsx)(b.a,{in:this.props.message,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(r.jsx)("div",{className:"Overlay",children:Object(r.jsx)("p",{className:"Notification",children:this.props.message})})})}}]),n}(s.Component);e.a=Object(l.b)((function(t){return{errorPb:f.a.getError(t),errorAuth:m.a.getError(t)}}),(function(t){return{clearErrorPb:function(){return t(u.e())},clearErrorAuth:function(){return t(h.a.clearError())}}}))(j)},144:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},149:function(t,e,n){},153:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(46),c=n(47),o=n(49),i=n(48),s=n(0),u=n(13),l=n(59),b=n(3),f=n(25),m=n.n(f),h=n(12),j={fetchContacts:function(){return function(t){t(Object(h.g)()),m.a.get("/contacts").then((function(e){var n=e.data;return t(Object(h.h)(n))})).catch((function(e){return t(Object(h.f)(e.message))}))}},addContact:function(t,e){return function(n){var r={name:t,number:e};n(Object(h.b)()),m.a.post("/contacts",r).then((function(t){var e=t.data;return n(Object(h.c)(e))})).catch((function(t){return n(Object(h.a)(t.message))}))}},removeContact:function(t){return function(e){e(Object(h.j)()),m.a.delete("/contacts/".concat(t)).then((function(){return e(Object(h.k)(t))})).catch((function(t){return e(Object(h.i)(t.message))}))}}},p=n(142),d=n(143),O=(n(146),function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",message:null},t.setMessage=function(e){t.setState({message:e}),setTimeout((function(){t.setState({message:null})}),2500)},t.handleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(b.a)({},r,a))},t.handleSubmit=function(e){var n=t.state,r=n.name,a=n.number;e.preventDefault(),""!==r?""!==a?t.props.contacts.find((function(t){return t.name.toLowerCase()===r.toLowerCase()}))?t.setMessage("Contact already exists!"):(t.props.onSubmit(r,a),t.setState({name:"",number:""})):t.setMessage("Enter concact phone, please!"):t.setMessage("Enter contact name, please!")},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.message;return Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{message:a}),Object(r.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(r.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(r.jsx)("input",{type:"text",value:e,id:"name",className:"Input",onChange:this.handleChange,name:"name"}),Object(r.jsx)("label",{htmlFor:"number",className:"Label",children:"Number"}),Object(r.jsx)("input",{type:"tel",value:n,id:"number",className:"Input",onChange:this.handleChange,name:"number"}),Object(r.jsx)("button",{type:"submit",className:"Button",children:"Add contact"})]})]})}}]),n}(s.Component)),g=Object(u.b)((function(t){return{contacts:p.a.getAllContacts(t)}}),(function(t){return{onSubmit:function(e,n){return t(j.addContact(e,n))}}}))(O),v=(n(147),n(154)),x=Object(u.b)((function(t){return{value:p.a.getFilter(t),contacts:p.a.getAllContacts(t)}}),(function(t){return{onChangeFilter:function(e){return t(h.d(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter,a=t.contacts;return Object(r.jsx)(v.a,{in:a.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,children:Object(r.jsxs)("div",{className:"FindForm",children:[Object(r.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact"}),Object(r.jsx)("input",{type:"text",value:e,id:"find",className:"FindInput",onChange:n})]})})})),C=(n(148),n(37)),y=(n(149),function(t){var e=t.children,n=t.onClick;Object(C.a)(t,["children","onClick"]);return Object(r.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:e})});y.defaultProps={onClick:function(){return null},children:null};var k=y;function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var E=s.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"});function L(t,e){var n=t.title,r=t.titleId,a=N(t,["title","titleId"]);return s.createElement("svg",w({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:e,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,E)}var F=s.forwardRef(L),S=(n.p,n(140)),A=Object(u.b)((function(t){return{contacts:p.a.getVisibleContacts(t)}}),(function(t){return{onRemoveContact:function(e){return t(j.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.onRemoveContact;return Object(r.jsx)(S.a,{component:"ul",children:e.map((function(t,e){var a=t.id,c=t.name,o=t.number;return Object(r.jsx)(v.a,{timeout:250,classNames:"ContactItem-fade",children:Object(r.jsxs)("li",{className:"ContactItem",children:[e+1,". ",c,": ",o,Object(r.jsx)(k,{onClick:function(){return n(a)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(r.jsx)(F,{width:"17",height:"17",fill:"#fff"})})]})},a)}))})})),I=function(){return Object(r.jsx)(v.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(r.jsx)("h1",{className:"Title",children:"Phonebook"})})},P=n(33),B=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(I,{}),Object(r.jsx)(d.a,{message:this.props.error}),Object(r.jsx)(g,{}),Object(r.jsx)(x,{}),this.props.isLoadingContacts&&Object(r.jsx)(P.a,{}),Object(r.jsx)(v.a,{in:this.props.contacts.length>0,timeout:0,ommountOnExit:!0,children:Object(r.jsx)(A,{})})]})}}]),n}(s.Component);e.default=Object(u.b)((function(t){return{contacts:p.a.getAllContacts(t),isLoadingContacts:p.a.getLoading(t),error:p.a.getError(t)}}),(function(t){return{fetchContacts:function(){return t(j.fetchContacts())}}}))(B)}}]);
//# sourceMappingURL=4.b11e005a.chunk.js.map