(this.webpackJsonpwebfood=this.webpackJsonpwebfood||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},109:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),o=(n(99),n(100),n(101),n(18)),i=n(11),l=(n(102),n(2));var j=function(){return Object(l.jsxs)("div",{className:"appbar-container",children:[Object(l.jsx)(o.b,{className:"logo-container",to:"/webfood",children:"WEBFOOD"}),Object(l.jsxs)("div",{className:"nav-container",children:[Object(l.jsx)("div",{className:"addproduct-container",children:Object(l.jsx)(o.b,{className:"category-item",to:"/Produtos",children:"Adicionar Produtos"})}),Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsx)(o.b,{className:"category-item",to:"/webfood",children:"Produtos"}),Object(l.jsx)(o.b,{className:"category-item",to:"Login",children:"Login"})]})]})]})},u=n(16),d=n.n(u),b=n(22),h=n(12),O=(n(109),n(221)),p=n(222),x=n(220),m=n(87),v=n.n(m).a.create({baseURL:"https://webfood-api.herokuapp.com"});var f=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(h.a)(s,2),j=o[0],u=o[1],m=Object(c.useState)(""),f=Object(h.a)(m,2),g=f[0],N=f[1],C=Object(c.useState)(""),w=Object(h.a)(C,2),y=w[0],k=w[1],S=function(){var t=Object(b.a)(d.a.mark((function t(n){var c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==r&&""!==j&&""!==g&&""!==y){t.next=3;break}return alert("Usu\xe1rio e Senha incorretos"),t.abrupt("return");case 3:return t.prev=3,t.next=6,v.post("/products/createproducts",{name:r,description:j,price:g,url:y});case 6:if(c=t.sent,a=c.data,console.log(a),!a.error){t.next=12;break}return alert("Houve um erro: "+a.result),t.abrupt("return");case 12:a.result?e.push("/"):alert("Erro ao inserir Produto"),console.log(a),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),alert("Houve um erro: "+t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"products-container",children:[Object(l.jsx)("h1",{children:" Insira um novo produto"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Nome"}),Object(l.jsx)("input",{type:"text",placeholder:"Nome",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Descri\xe7\xe3o"}),Object(l.jsx)("input",{type:"text",placeholder:"Descri\xe7\xe3o",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Pre\xe7o"}),Object(l.jsx)("input",{type:"text",placeholder:"Pre\xe7o",onChange:function(e){return N(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"URL"}),Object(l.jsx)("input",{type:"text",placeholder:"URL",onChange:function(e){return k(e.target.value)}})]}),Object(l.jsx)("div",{className:"order-button",children:Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{size:"lg",children:Object(l.jsx)(x.a,{color:"green",onClick:S,children:"Adicionar Produto"})})})})]})]})},g=(n(168),n(219));n(169),n(170);var N=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),r=(n[0],n[1]),a=Object(c.useState)(""),s=Object(h.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(""),u=Object(h.a)(j,2),d=u[0],b=u[1],m=Object(c.useState)(""),v=Object(h.a)(m,2),f=v[0],g=v[1],N=e.product.price,C=e.product.name;return Object(l.jsx)("div",{className:"order-container",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"CEP "}),Object(l.jsx)("input",{type:"text",placeholder:"CEP",onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Bairro"}),Object(l.jsx)("input",{type:"text",placeholder:"Bairro",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("label",{children:"Rua"}),Object(l.jsx)("input",{type:"text",placeholder:"Endere\xe7o",onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("label",{children:"N\xfamero"}),Object(l.jsx)("input",{type:"text",placeholder:"N\xfamero",onChange:function(e){return g(e.target.value)}}),Object(l.jsx)("div",{className:"order-button",children:Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{size:"lg",children:Object(l.jsx)(x.a,{color:"green",onClick:function(){var e="http://api.whatsapp.com/send?phone=5538991292333&text= Endere\xe7o: Bairro:".concat(o," Rua: ").concat(d," N\xfamero:").concat(f," Produto: ").concat(C,", Pre\xe7o: ").concat(N);window.open(e),console.log(e)},children:"Confirmar entrega"})})})})]})})};var C=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(h.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(!1),u=Object(h.a)(j,2),O=u[0],p=u[1];Object(c.useEffect)((function(){f()}),[]);var x=function(){return r(!0)},m=function(){return r(!1)},f=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/products");case 2:t=e.sent,i(t.data),p(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return O?Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("div",{className:"tittle-container",children:Object(l.jsx)("h1",{children:"Produtos"})}),Object(l.jsx)("div",{className:"products-container",children:o.map((function(e){return Object(l.jsxs)("div",{className:"home-box",children:[Object(l.jsx)("img",{src:e.url,alt:""}),Object(l.jsx)("h1",{children:e.name}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("button",{onClick:x,children:"Fazer Pedido"}),Object(l.jsxs)("span",{children:["Pre\xe7o R$ ",e.price]}),Object(l.jsxs)(g.a,{show:n,onHide:m,center:!0,children:[Object(l.jsx)(g.a.Header,{children:Object(l.jsx)(g.a.Title,{classPrefix:"modal-title",children:" Insira o endere\xe7o de Entrega "})}),Object(l.jsx)(g.a.Body,{children:Object(l.jsx)(N,{product:e})})]})]})}))})]}):Object(l.jsx)("h1",{children:" Carregando ... "})};n(215);var w=function(){var e=Object(i.f)(),t=Object(c.useState)(!0),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(h.a)(s,2),j=o[0],u=o[1],O=Object(c.useState)(""),p=Object(h.a)(O,2),x=p[0],m=p[1],f=Object(c.useState)(""),g=Object(h.a)(f,2),N=g[0],C=g[1],w=function(){var t=Object(b.a)(d.a.mark((function t(n){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,v.post("/users/login",{email:x,password:N});case 4:if(c=t.sent,!(r=c.data).error){t.next=9;break}return alert("Houve um erro: "+r.result),t.abrupt("return");case 9:r.result?e.push("./"):alert("Usu\xe1rio ou Senha Inv\xe1lidos"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),alert("Houve um erro: "+t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,""!==j&&""!==x&&""!==N){t.next=5;break}return alert("Preencha todos os campos"),t.abrupt("return");case 5:return t.next=7,v.post("/users",{name:j,email:x,password:N});case 7:!0===t.sent.data?e.push("/webfood"):alert(Error),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),alert("Houve um erro: "+t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r?Object(l.jsx)("div",{className:"login-container",children:Object(l.jsxs)("div",{className:"login-section",children:[Object(l.jsx)("h1",{children:"Entre com seu email e senha "}),Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsxs)("form",{action:"",children:[Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return m(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Senha"}),Object(l.jsx)("input",{type:"password",placeholder:"Senha",onChange:function(e){return C(e.target.value)}})]}),Object(l.jsx)("div",{className:"login-btn",children:Object(l.jsx)("button",{type:"submit",onClick:function(e){return w(e)},children:"Login"})})]}),Object(l.jsx)("div",{className:"login-link",children:Object(l.jsx)("a",{href:"#",onClick:function(){return a(!1)},children:" Ainda n\xe3o tenho uma conta "})})]})]})}):Object(l.jsx)("div",{className:"login-container",children:Object(l.jsxs)("div",{className:"login-section",children:[Object(l.jsx)("h1",{children:"Entre com seu email e senha "}),Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsxs)("form",{action:"",children:[Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Nome"}),Object(l.jsx)("input",{type:"text",placeholder:"Nome",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return m(e.target.value)}})]}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{children:"Senha"}),Object(l.jsx)("input",{type:"password",placeholder:"Senha",onChange:function(e){return C(e.target.value)}})]}),Object(l.jsx)("div",{className:"login-btn",children:Object(l.jsx)("button",{type:"submit",onClick:function(e){return y(e)},children:"Criar Conta"})})]}),Object(l.jsx)("div",{className:"login-link",children:Object(l.jsx)("a",{href:"#",onClick:function(){return a(!0)},children:" Fazer Login "})})]})]})})};var y=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/webfood",component:C}),Object(l.jsx)(i.a,{exact:!0,path:"/Login",component:w}),Object(l.jsx)(i.a,{exact:!0,path:"/Produtos",component:f})]})]})};var k=function(){return Object(l.jsx)(y,{})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.36b7a393.chunk.js.map