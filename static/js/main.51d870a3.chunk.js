(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(56),r=a.n(s),l=(a(66),a(67),a(25)),i=a(7),o=a(109),d=a(6),j=a(13),b=a(1),m=Object(n.createContext)(),u=function(e){var t=e.children,a=Object(n.useState)({members:[]}),c=Object(j.a)(a,2),s={team:c[0],setTeam:c[1]};return Object(b.jsx)(m.Provider,{value:{data:s},children:t})},h=a(57),p=a(18),x=a(17),O=a(10),g=function(e){var t=e.member,a=Object(n.useContext)(m).data,c=a.team,s=a.setTeam,r=t.heroe,i=r.name,o=r.image,d=r.powerstats,j=d.intelligence,u=d.strength,g=d.speed,f=d.durability,N=d.power,v=d.combat,y=function(){return"good"===r.biography.alignment?"success":"danger"};return Object(b.jsx)(h.a,{xs:6,md:4,style:{},children:Object(b.jsxs)(p.a,{border:"".concat(y()),className:"card-border my-3 text-center shadow-css animate__animated animate__fadeIn",style:{borderWidth:"3px"},children:[Object(b.jsx)(p.a.Img,{src:o.url,alt:"".concat(i,"-image"),style:{objectFit:"cover",height:"20vh",width:"auto",objectPosition:"0% 10%"},className:"img-fluid"}),Object(b.jsxs)(p.a.Body,{className:"p-1",children:[Object(b.jsx)(p.a.Title,{children:Object(b.jsx)("h4",{className:"text-nowrap",children:i})}),Object(b.jsx)(p.a.Text,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-primary",children:["INT ",j]}),Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-danger",children:["STR ",u]}),Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-secondary",children:["SPD ",g]}),Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-success",children:["DUR ",f]}),Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-warning",children:["PWR ",N]}),Object(b.jsxs)(O.a,{pill:!0,variant:"",className:"bg-dark",children:["CBT ",v]})]})}),Object(b.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(b.jsx)(l.b,{to:"/alkemyChallenge/heroe/".concat(r.id),children:Object(b.jsx)(x.a,{variant:"".concat(y()),className:"p-0 p-lg-1",styles:{},onClick:function(){console.log(r.id)},children:"Detalle"})}),Object(b.jsx)(x.a,{className:"p-0 p-lg-1",variant:"".concat(y()),onClick:function(){!function(e){var t=c.members.filter((function(t){return t.heroe.id!==e}));s({members:t})}(r.id)},children:"Eliminar"})]})]})]})})},f=a(107),N=(a(32),function(e){var t=e.promedio,a=Object(n.useState)(),c=Object(j.a)(a,2),s=c[0];c[1];return Object(n.useEffect)((function(){console.log(s)}),[t]),Object(b.jsx)("div",{className:"overflow-hidden",children:Object(b.jsxs)("div",{className:"d-flex flex-wrap justify-content-evenly fs-5 align-content-around",children:[Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.intelligence," INT"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.strength," STR"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.speed," SPD"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.durability," DUR"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.power," PWR"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.combat," CBT"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.weight," KG Promedio"]}),Object(b.jsxs)(O.a,{className:"bg-primary margin-promedios",children:[t.height," CM Promedio"]})]})})}),v=function(){var e=Object(n.useState)({intelligence:null,strength:null,speed:null,durability:null,power:null,combat:null,height:null,weight:null}),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(m).data,r=s.team,l=(s.setTeam,r.members),i=l.map((function(e){return e.heroe.powerstats})),o=l.map((function(e){return parseInt(e.heroe.appearance.height[1].slice(0,-3))})),u=l.map((function(e){return parseInt(e.heroe.appearance.weight[1].slice(0,-3))})),h=function(e){var t=e;return((r.members.length?t.reduce((function(e,t){return e+t})):null)/t.length).toFixed(2)},p=function(e){for(var t=e,a=0;a<i.length;a++){return i.map((function(e){return parseInt(e[t])})).map((function(e){return isNaN(e)?e=0:e})).reduce((function(e,t){return e+t}))}};return Object(n.useEffect)((function(){c((function(e){return Object(d.a)(Object(d.a)({},e),{},{intelligence:p("intelligence")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{strength:p("strength")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{speed:p("speed")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{durability:p("durability")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{power:p("power")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{combat:p("combat")})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{height:h(o)})})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{weight:h(u)})}))}),[r]),Object(b.jsxs)("div",{className:"p-0 d-flex flex-column",children:[Object(b.jsx)("h1",{className:"text-center p-1 bg-personal rounded",children:"Equipo"}),r.members.length?Object(b.jsx)(N,{promedio:a,team:r}):null,Object(b.jsx)(f.a,{children:r.members.length>0?r.members.map((function(e,t){return Object(b.jsx)(g,{member:e},t)})):null})]})},y=a(28),w=a.n(y),C=a(34),k=a(29),S=a.n(k),I=S.a.create({baseURL:"https://superheroapi.com/api.php/"}),_=a(37),T=a(24),B=a(108),P=a(61),F=a(26),E=a.n(F),q=function(e){var t=e.heroe,a=Object(n.useContext)(m).data,c=a.team,s=a.setTeam,r=function(){return"good"===t.biography.alignment?"success":"danger"};return Object(b.jsx)(h.a,{xs:12,sm:6,md:6,lg:4,xl:3,className:"centrar",children:Object(b.jsxs)(p.a,{border:"".concat(r()),className:"card-border my-2 text-center",style:{borderWidth:"3px",width:"100%"},children:[Object(b.jsx)(p.a.Img,{src:t.image.url,alt:"".concat(t.name,"-image"),style:{objectFit:"cover",height:"20vh",width:"100%",objectPosition:"30% 20%"}}),Object(b.jsxs)(p.a.Body,{className:"",children:[Object(b.jsx)(p.a.Title,{className:"text-nowrap",children:Object(b.jsx)("h5",{children:t.name})}),Object(b.jsx)(x.a,{className:"",variant:"outline-".concat(r()),onClick:function(){!function(e){var t=c.members.find((function(t){return t.heroe.id===e.id})),a=c.members.filter((function(e){return"good"===e.heroe.biography.alignment})),n=c.members.filter((function(e){return"bad"===e.heroe.biography.alignment}));t?E.a.fire({title:"Este personaje ya se encuentra en el equipo"}):c.members.length>=6?E.a.fire({title:"Limite de 6 personajes en el equipo"}):3===a.length&&"good"===e.biography.alignment?E.a.fire({title:"Limite de 3 personajes con orientaci\xf3n buena en el equipo"}):3===n.length&&"bad"===e.biography.alignment?E.a.fire({title:"Limite de 3 personajes con orientaci\xf3n mala en el equipo"}):0===c.members.length?s(Object(d.a)(Object(d.a)({},c.members),{},{members:[{heroe:e}]})):s(Object(d.a)(Object(d.a)({},c),{},{members:[].concat(Object(P.a)(c.members),[{heroe:e}])}))}(t)},style:{fontSize:"0.7rem"},children:"Agregar"})]})]})})},L=a(60),D=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(L.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})})})},R=function(e){var t=e.resultado,a=(e.busqueda,e.show),n=e.error;return Object(b.jsx)("div",{children:Object(b.jsxs)(f.a,{className:"ms-0",children:["error"===n?Object(b.jsx)("p",{className:"fs-5 fw-bold",children:"No se encontraron resultados"}):null,!0===a?Object(b.jsx)(D,{}):null,t?t.map((function(e,t){return Object(b.jsx)(q,{heroe:e},t)})):null]})})},A=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),l=r[0],i=r[1],o=Object(n.useState)(!1),d=Object(j.a)(o,2),m=d[0],u=d[1],h=Object(n.useState)(null),p=Object(j.a)(h,2),O=p[0],g=p[1],N=localStorage.getItem("token"),v=Object(_.a)({initialValues:{nombre:"",orientacion:""},onSubmit:function(e){c(e.nombre),function(e){y.apply(this,arguments)}(e.nombre)}});function y(){return(y=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/".concat(N,"/search/").concat(t)).then((function(e){if(e.data.results){var t=e.data.results.filter((function(e){return"-"!==e.biography.alignment}));i(t)}else i(e.data.results);u(!1),g(e.data.response)})).catch((function(e){console.log(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)(T.a,{onSubmit:v.handleSubmit,className:"justify-content-center",children:[Object(b.jsx)(T.a.Control,{id:"nombre",name:"nombre",type:"text",onChange:v.handleChange,value:v.values.nombre,placeholder:"Nombre del personaje",className:"w-50 text-center mx-auto mt-4"}),Object(b.jsx)(B.a,{className:"d-flex w-50 mx-auto",children:Object(b.jsx)(x.a,{className:"my-4",type:"submit",block:!0,onClick:function(){u(!0)},children:"Buscar"})})]}),Object(b.jsx)("div",{style:{height:"auto"},children:Object(b.jsx)(R,{busqueda:a,resultado:l,show:m,error:O})})]})})},U=function(){var e=Object(i.f)(),t=Object(_.a)({initialValues:{email:"",password:""},onSubmit:function(){var t=Object(C.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={},console.log(a),a.email&&a.password){t.next=8;break}n.email="Email requerido",n.password="Contrase\xf1a requerida",E.a.fire({title:"Email y contrase\xf1a requeridos",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),t.next=11;break;case 8:return t.next=10,S.a.post("https://challenge-react.alkemy.org/",{email:a.email,password:a.password}).then((function(t){console.log("redireccionando..."),localStorage.setItem("token",0x245186c7e19eb8),e.push("/alkemyChallenge/")})).catch((function(e){console.log("".concat(e," Accesso denegado")),E.a.fire({title:"Accesso denegado",icon:"warning",confirmButtonText:"Intentar de nuevo",showCloseButton:!0})}));case 10:t.sent;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(b.jsx)(o.a,{children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(h.a,{}),Object(b.jsx)(h.a,{md:6,className:"p-4",children:Object(b.jsxs)(T.a,{className:"text-center",onSubmit:t.handleSubmit,children:[Object(b.jsx)(T.a.Label,{htmlFor:"email",children:Object(b.jsx)("h2",{children:"Email"})}),Object(b.jsx)(T.a.Control,{id:"email",name:"email",type:"email",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),Object(b.jsx)(T.a.Label,{htmlFor:"password",children:Object(b.jsx)("h2",{children:"Contrase\xf1a"})}),Object(b.jsx)(T.a.Control,{id:"password",name:"password",type:"password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password}),Object(b.jsx)(B.a,{className:"d-flex",children:Object(b.jsx)(x.a,{className:"my-4",type:"submit",block:!0,children:"Enviar"})})]})}),Object(b.jsx)(h.a,{})]})})},W=function(){return localStorage.getItem("token")?Object(b.jsxs)(f.a,{children:[Object(b.jsxs)(h.a,{xs:12,lg:6,className:"",children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{className:"mt-4 p-1 bg-personal rounded",children:"Team Builder \ud83d\udcca"})}),Object(b.jsx)(v,{})]}),Object(b.jsx)(h.a,{children:Object(b.jsx)(A,{})})]}):Object(b.jsx)(U,{})},V=a.p+"static/media/3a7c2f0bc22206abf17edf79a7d08355.72bffdde.jpg",J=function(e){var t=e.details;return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(h.a,{md:6,className:"d-flex justify-content-center p-xs-3 p-md-5 img-fluid",styles:{},children:Object(b.jsx)("div",{className:"p-3",children:Object(b.jsx)("img",{src:"".concat(t.image.url),className:"shadow-css rounded img-fluid animate__animated animate__fadeInLeft"})})}):null})},M=function(e){var t=e.details;return console.log(t),Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(h.a,{className:"py-5 px-0 animate__animated animate__fadeIn",children:Object(b.jsxs)("div",{className:"px-1",children:[Object(b.jsx)("h1",{className:"py-1 bg-dark text-light p-2 text-center rounded",children:"Informaci\xf3n"}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Alias: "}),t.name]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Nombre Completo: "}),t.biography["full-name"]]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Altura: "}),t.appearance.height[0],'" - ',t.appearance.height[1]]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Peso: "}),t.appearance.weight[0]," - ",t.appearance.weight[1]]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Color de Ojos: "}),t.appearance["eye-color"]]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Color de Pelo: "}),t.appearance["hair-color"]]}),Object(b.jsxs)("p",{className:"fs-5 bg-dark text-light p-2 m-2 rounded",children:[Object(b.jsx)("span",{className:"fw-bold fs-xs-1",children:"Lugar de Trabajo: "}),t.work.base]}),Object(b.jsx)("div",{className:"d-flex justify-content-center justify-content-lg-start pt-4",children:Object(b.jsx)(l.b,{to:"/alkemyChallenge/",children:Object(b.jsx)(x.a,{className:"test",children:"Volver Atr\xe1s"})})})]})}):null})},z=function(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),c=a[0],s=a[1],r=e.match.params.id,l=localStorage.getItem("token");return Object(n.useEffect)((function(){I.get("/".concat(l,"/").concat(r)).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[r]),l?Object(b.jsx)(o.a,{children:Object(b.jsx)(f.a,{children:c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(J,{details:c}),Object(b.jsx)(M,{details:c})]}):Object(b.jsx)("div",{className:"text-center spinner-height",children:Object(b.jsx)(D,{})})})}):Object(b.jsx)(U,{})},G=function(){return Object(b.jsx)("div",{className:"overflow-auto vh-100",style:{backgroundImage:"url(".concat(V,")")},children:Object(b.jsx)("div",{className:"box overflow-auto vh-100",style:{height:"auto"},fluid:!0,children:Object(b.jsx)(o.a,{fluid:!0,className:"",children:Object(b.jsxs)("div",{className:"p-3",style:{height:"auto"},children:[Object(b.jsx)(i.a,{exact:!0,path:"/alkemyChallenge/",component:W}),Object(b.jsx)(i.a,{exact:!0,path:"/alkemyChallenge/login",component:U}),Object(b.jsx)(i.a,{exacth:!0,path:"/alkemyChallenge/heroe/:id",component:z})]})})})})},K=function(){return Object(b.jsx)(u,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(i.c,{children:Object(b.jsx)(G,{})})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),H()},67:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.51d870a3.chunk.js.map