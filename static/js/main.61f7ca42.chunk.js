(this.webpackJsonpfamille=this.webpackJsonpfamille||[]).push([[0],{31:function(e,t,n){},57:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(20),s=n.n(i),o=(n(57),n(7)),l=n(9),j=(n(31),n(38)),d=n.n(j),b=n(45),u=n(19),m=(n(59),n(86),n(85),{}),h=new u.a.auth.GoogleAuthProvider,f=(u.a.apps.length?u.a.app():u.a.initializeApp({apiKey:"AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",authDomain:"demahieu-file.firebaseapp.com",projectId:"demahieu-file",storageBucket:"demahieu-file.appspot.com",messagingSenderId:"192092843689",appId:"1:192092843689:web:d490269a5a93671c3483b8"})).firestore();var O=u.a.storage(),x=u.a.auth(),p=(u.a.firestore(),function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,f.collection("famille").where("email","==",t).get().then((function(e){return e.forEach((function(e){var t,a;n.id=e.id,n.data=e.data(),t=e.id,a=e.data(),(m={}).id=t,m.data=a})),n})).catch((function(e){console.log("Error getting documents: ",e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var g={findAll:function(){return f.collection("famille").orderBy("numberFamilly","asc").get()},signInWithGoogle:function(){x.signInWithPopup(h).then((function(e){var t=e.user.email;localStorage.setItem("email",t)})).then((function(){window.location.reload()}))},FindIdPerson:function(e){return f.collection("famille").where("numberFamilly","==",e).get()},ModifyUserFireBase:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return void 0===t.dateMariage&&(t.dateMariage=""),f.collection("famille").doc(e).update({firstName:t.firstName,lastName:t.lastName,generation:t.generation,birthDate:t.birthDate,numberFamilly:t.numberFamilly,pictureName:""===n?t.pictureName:n,PhotosHistory:""===n?u.a.firestore.FieldValue.arrayUnion(t.pictureName):u.a.firestore.FieldValue.arrayUnion(n),famillyName:t.famillyName,dateMariage:t.dateMariage,email:t.email})},FindEmailPerson:function(e){return f.collection("famille").where("email","==",e).get()},Disconnect:function(){x.signOut().then((function(){localStorage.setItem("email",""),window.location.reload()})).catch((function(e){console.log(e)}))},MessageSended:function(){return f.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").get()},ChangeMessageSended:function(){return f.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").set({send:!0})}},v=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Famille de Mahieu"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/anniversaire",children:"Anniversaires"})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)(o.b,{className:"navbar-brand dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"G\xe9n\xe9ration"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation2",children:"G\xe9n\xe9ration 2"}),Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation3",children:"G\xe9n\xe9ration 3"}),Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation4",children:"G\xe9n\xe9ration 4"})]})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/jeu",children:"Jeu"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/events",children:"\xc9v\xe9nements"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/profil",children:"Profil"})})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){g.signInWithGoogle()},children:"Connexion"}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){g.Disconnect()},children:"D\xe9connexion"})]})]})})},N=n(21),y=n(22),S=n(23),F=n(51),C=Object(c.createContext)({user:null}),k=function(e){Object(S.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e.componentDidMount=function(){x.onAuthStateChanged((function(t){e.setState({user:t})}))},e}return Object(y.a)(n,[{key:"render",value:function(){return Object(a.jsx)(C.Provider,{value:this.state.user,children:this.props.children})}}]),n}(c.Component),w=n(4),D=function(e){var t=e.person,n=e.link,c=void 0===n?"#":n,r=e.myBirthday,i=void 0!==r&&r,s=e.className,o=void 0===s?"elementFlexible":s,j=Object(l.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:o,children:["#"!==c&&Object(a.jsx)("button",{className:"myButton",onClick:function(){return j.push(c)},children:Object(a.jsx)("img",{src:t.pictureName,alt:t.firstName+" "+t.lastName})}),"#"===c&&Object(a.jsx)("img",{className:"picture",src:t.pictureName,alt:t.firstName+" "+t.lastName}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{children:t.firstName+" "+t.lastName}),Object(a.jsxs)("h6",{children:[t.birthDate,t.deathDate&&Object(a.jsxs)("span",{children:[" - ",t.deathDate]})]})]}),i&&Object(a.jsx)("h2",{className:"clignote",children:"Happy birthday"})]})})},E="4",M=[],I=function(){return M},P=function(e){M=[],e.forEach((function(e){M.push(e)}))},A=function(e,t){var n=[],a=e.toString().slice(0,t-1);return M.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push(e)})),n},B=function(){var e=[];return M.filter((function(e){return e.generation!==E})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e},L=function(e){var t=[];return M.filter((function(t){return t.numberFamilly===e})).map((function(e){return t.push(e)})),t[0]};function V(e,t){var n=e.birthDate.split("/")[2],a=t.birthDate.split("/")[2],c=e.birthDate.split("/")[1],r=t.birthDate.split("/")[1],i=e.birthDate.split("/")[0],s=t.birthDate.split("/")[0];return n!==a?n>a?1:-1:c!==r?c>r?1:-1:i!==s?i>s?1:-1:0}function G(e,t){return e.birthDate!==t.birthDate?e.birthDate>t.birthDate?1:-1:0}var T=function(){var e=[],t=new Date,n=t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():(t.getMonth()+1).toString();return M.forEach((function(t){t.birthDate.split("/")[1]===n&&e.push(t)})),e.sort(G),e},U=function(e){var t=[];return M.forEach((function(n){n.generation===e&&t.push(n)})),t.sort(V),t},R=function(){return function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}(M.filter((function(e){return"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fnaruto-g5ac97839f_640.png?alt=media&token=89f220af-2915-4dcc-9fd7-6e69de09fe7c"!==e.pictureName&&"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fhomme.PNG?alt=media&token=e9014335-a2b9-48a8-9732-f9997269b515"!==e.pictureName&&"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Ffemme.PNG?alt=media&token=1e2723b0-31a3-44de-a503-d2d7c0694e88"!==e.pictureName})))};var Y=n(34),q=function(e){var t=e.data,n=Object(l.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Y.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){null!==e&&n.push("/"+e.value)}})})},z=function(e){var t=e.match,n=Object(c.useState)([]),r=Object(w.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)(""),l=Object(w.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)([]),u=Object(w.a)(b,2),m=u[0],h=u[1];return Object(c.useEffect)((function(){var e=t.params.numberFamilly,n=t.params.generation;if(d(t.params.generation),void 0!==n&&void 0!==e||(e=0,n="1",d("1")),0===I().length)g.findAll().then((function(t){var a=t.docs.map((function(e){return e.data()}));P(a);var c=A(e,n);s([]),s(c),h(B()),window.scroll(0,0)}));else{var a=A(e,n);h(B()),s([]),s(a),window.scroll(0,0)}}),[t.params.generation,t.params.numberFamilly]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{data:m}),void 0!==i[0]&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"mb-0",children:i[0].famillyName}),void 0!==i[0].dateMariage&&Object(a.jsx)("h4",{className:"text-center mb-4",children:i[0].dateMariage}),void 0===i[0].dateMariage&&Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"containerFlexible",children:i.filter((function(e){return e.generation===j})).map((function(e){return Object(a.jsx)(D,{person:e,link:"#"},e.firstName+""+e.famillyName)}))}),Object(a.jsx)("div",{className:"containerFlexible",children:i.filter((function(e){return e.generation!==j})).map((function(e){return Object(a.jsx)(D,{person:e,link:e.generation===E||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly},e.firstName+""+e.famillyName)}))})]})},_=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(w.a)(i,2),o=s[0],l=s[1],j=Object(c.useState)(""),d=Object(w.a)(j,2),b=d[0],u=d[1];return Object(c.useEffect)((function(){var e,t=new Date;l(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]),u(t.getDate()),0===I().length?g.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));P(n),e=T(),r(e)})):(e=T(),r(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("h2",{className:"text-center mb-3",children:[n.length," anniversaire(s) en ",o]})}),Object(a.jsx)("div",{className:"containerFlexible",children:void 0!==n&&n.map((function(e){return Object(a.jsx)(D,{person:e,link:e.generation===E||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,myBirthday:e.birthDate.split("/")[0]===(b.toString()<10?"0"+b.toString():b.toString())},e.firstName+""+e.famillyName)}))})]})},H=function(){var e=Object(c.useState)("generation2"),t=Object(w.a)(e,2),n=t[0],r=t[1],i=function(e){r(e)},s=Object(l.g)();return Object(c.useEffect)((function(){r(s.pathname.substring(1))}),[s]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark space-around",children:[Object(a.jsxs)(o.b,{onClick:function(){return i("generation2")},className:"navbar-brand",to:"/generation2",children:["generation2"===n&&Object(a.jsx)("ion-icon",{name:"reorder-two-sharp"}),"generation2"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-two-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("generation3")},className:"navbar-brand",to:"/generation3",children:["generation3"===n&&Object(a.jsx)("ion-icon",{name:"reorder-three-sharp"}),"generation3"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-three-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("generation4")},className:"navbar-brand",to:"/generation4",children:["generation4"===n&&Object(a.jsx)("ion-icon",{name:"reorder-four-sharp"}),"generation4"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-four-outline"})]})]})})},J=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e;0===I().length?g.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));P(n),e=U("2"),r(e)})):(e=U("2"),r(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(H,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 2",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(D,{person:e,link:e.generation===E||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly},e.firstName+""+e.famillyName)}))})]})},W=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e;0===I().length?g.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));P(n),e=U("3"),r(e)})):(e=U("3"),r(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(H,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 3",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(D,{person:e,link:e.generation===E||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly},e.firstName+""+e.famillyName)}))})]})},K=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e;0===I().length?g.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));P(n),e=U("4"),r(e)})):(e=U("4"),r(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(H,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 4",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(D,{person:e,dateDeces:e.deathDate,link:"/3/"+Math.round(e.numberFamilly/10)},e.firstName+""+e.famillyName)}))})]})},X=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(w.a)(i,2),o=s[0],l=s[1],j=Object(c.useState)(0),d=Object(w.a)(j,2),b=d[0],u=d[1],m=Object(c.useState)(0),h=Object(w.a)(m,2),f=h[0],O=h[1],x=Object(c.useState)(""),p=Object(w.a)(x,2),v=p[0],N=p[1],y=Object(c.useState)(!1),S=Object(w.a)(y,2),F=S[0],C=S[1],k=Object(c.useState)(0),D=Object(w.a)(k,2),E=D[0],M=D[1],A=Object(c.useState)(""),B=Object(w.a)(A,2),L=B[0],V=B[1],G=Object(c.useState)(0),T=Object(w.a)(G,2),U=T[0],Y=T[1];return Object(c.useEffect)((function(){0===I().length&&g.findAll().then((function(e){var t=e.docs.map((function(e){return e.data()}));P(t);var n=R(),a=[];1===U?(n.forEach((function(e){"4"===e.generation&&a.push(e)})),O(0),u(0),r(a),l(a[0])):(O(0),u(0),r(n),l(n[0]))}));var e=R(),t=[];1===U?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),u(0),r(t),l(t[0])):(O(0),u(0),r(e),l(e[0]))}),[U]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[!o&&Object(a.jsx)("h2",{children:"Les donn\xe9es arrivent. Soyez patient"}),o&&20!==f&&Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"text-center",children:"Quel est mon pr\xe9nom ?"}),Object(a.jsx)("img",{src:o.pictureName,alt:o.firstName}),F&&Object(a.jsx)("h2",{children:o.lastName}),Object(a.jsx)("div",{className:"form-group mt-4",children:Object(a.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}})}),Object(a.jsxs)("div",{className:"containerFlexible",children:[Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){v.toLowerCase()===o.firstName.toLowerCase().replace(/\s+/g,"")?(u(F?b+.5:b+1),V("")):V(o.firstName),function(){var e=E;M(E+1),l(n[e+=1])}(),C(!1),f!==n.length&&O(f+1),N("")},className:"btn btn-primary mt-3",children:"V\xe9rifier"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){C(!0)},className:"btn btn-secondary mt-3",children:"indice"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(e){Y(0===U?1:0)},className:"btn btn-danger mt-3",children:0===U?"Difficile":"Facile"})})]}),Object(a.jsxs)("h3",{className:"mt-3",children:["Votre score : ",b," sur ",f]}),L&&Object(a.jsxs)("p",{children:["Son pr\xe9nom \xe9tait ",L]})]}),20===f&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Bravo tu as obtenu ",b," sur ",f]}),Object(a.jsx)("button",{onClick:function(){!function(){var e=R(),t=[];1===U?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),u(0),r(t),l(t[0])):(O(0),u(0),r(e),l(e[0]))}(),V(""),M(0)},className:"btn btn-primary mt-3",children:"Recommencer"})]})]})})},Z=n(11),Q=n(6),$=function(e){var t=e.data,n=e.modifyPerson,c=e.isClearable,r=void 0===c||c;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Y.a,{id:"searchFamilly",options:t,isClearable:r,isSearchable:!0,onChange:function(e){n(null!==e?e.value:null)}})})},ee=n(27),te=n.n(ee),ne=n(89),ae=function(e){var t=e.person,n=Object(c.useState)(0),r=Object(w.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)(ne.a,{activeIndex:i,onSelect:function(e,t){s(e)},indicators:!1,children:t.PhotosHistory&&t.PhotosHistory.map((function(e){return Object(a.jsx)(ne.a.Item,{children:Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("img",{className:"d-block",src:e,alt:"Slide n\xb0 "+i})})},e)}))})},ce=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(w.a)(i,2),o=s[0],l=s[1],j=Object(c.useState)(""),d=Object(w.a)(j,2),b=d[0],u=d[1],m=Object(c.useState)(""),h=Object(w.a)(m,2),f=h[0],x=h[1],p=Object(c.useState)(""),v=Object(w.a)(p,2),N=v[0],y=v[1],S=Object(c.useState)(!0),F=Object(w.a)(S,2),k=F[0],D=F[1],A=Object(c.useState)(!1),B=Object(w.a)(A,2),V=B[0],G=B[1],T=Object(c.useState)("backCard"),U=Object(w.a)(T,2),R=U[0],Y=U[1],q=Object(c.useState)(""),z=Object(w.a)(q,2),_=z[0],H=z[1],J=Object(c.useState)([]),W=Object(w.a)(J,2),K=W[0],X=W[1],ee=Object(c.useContext)(C),ne=function(e){if(null!==e){var t=e.split("/")[1],n=L(t);void 0===n.email&&(n.email=""),X(n),g.FindIdPerson(t).then((function(e){var t=e.docs.map((function(e){return e.id}));x(t[0])}))}Y("backCard")},ce=function(e){var t=e.target,n=t.name,a=t.value;X(Object(Q.a)(Object(Q.a)({},K),{},Object(Z.a)({},n,a)))};return Object(c.useEffect)((function(){var e=function(){var e;null!==ee&&(e=ee.email,r(ee.email),g.FindEmailPerson(e).then((function(t){var n=t.docs.map((function(e){return e.id}));if(void 0!==n[0]){x(n[0]),D(!0);var a=function(e){var t=[];return M.filter((function(t){return t.email===e})).map((function(e){return t.push(e)})),t[0]}(e);void 0!==a&&(X(a),l(function(e,t){var n=[],a=e.toString().slice(0,t-1);return"3"===t?M.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})):M.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<=10*a})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})),n}(a.numberFamilly,a.generation))),H(ee)}else l(function(){var e=[];return M.filter((function(e){return"1"!==e.generation&&e.generation!==E&&void 0===e.email||""===e.email})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e}()),D(!1),H(ee)})))};0===I().length?g.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));P(n),e()})):e()}),[ee]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container mt-4",children:[""===_&&Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Les donn\xe9es arrivent. Soyez patient"})}),""!==_&&!k&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Votre adresse mail : ",Object(a.jsx)("span",{className:"email",children:n})]}),Object(a.jsx)("p",{children:"Ce sera votre adresse pour modifier vos donn\xe9es"}),Object(a.jsx)("p",{children:"Trouve ton nom dans la liste pour ajouter ton adresse mail \xe0 ton compte"}),Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Ne te trompe surtout pas"}),Object(a.jsx)($,{data:o,modifyPerson:ne}),Object(a.jsx)("button",{className:"btn btn-success mt-4 mb-4",onClick:function(){K.email=n,g.ModifyUserFireBase(f,K).then((function(){u("Votre adresse a bien \xe9t\xe9 ajout\xe9e."),window.location.reload()})).catch((function(e){u("Error writing document: "+e)}))},children:"Valider"}),Object(a.jsx)("div",{className:"alert alert-success "+R,role:"alert",children:Object(a.jsx)("p",{children:b})})]}),""!==_&&k&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Votre profil"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de mariage"}),Object(a.jsx)("input",{className:"form-control",name:"dateMariage",value:K.dateMariage||"",placeholder:"Date de mariage",onChange:ce})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Nom"}),Object(a.jsx)("input",{className:"form-control",name:"lastName",value:K.lastName||"",placeholder:"Nom...",onChange:ce})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pr\xe9nom"}),Object(a.jsx)("input",{className:"form-control",name:"firstName",value:K.firstName||"",placeholder:"Pr\xe9nom...",onChange:ce})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de naissance"}),Object(a.jsx)("input",{className:"form-control",name:"birthDate",value:K.birthDate||"",placeholder:"Date de naissance...",onChange:ce})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"form-control",name:"email",value:void 0===K.email?"":K.email,placeholder:"Email...",onChange:ce})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Image profil"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",onChange:function(e){var t=e.target.name,n=e.target.files[0];X(Object(Q.a)(Object(Q.a)({},K),{},Object(Z.a)({},t,n))),new te.a(n,{quality:.6,success:function(e){y(e),G(!0)}})}})]}),Object(a.jsx)("button",{className:"btn btn-secondary m-4",onClick:function(){V?O.ref("images/".concat(N.name)).put(N).on("state_changed",(function(e){}),(function(e){u("Error writing document: "+e)}),(function(){O.ref("images").child(N.name).getDownloadURL().then((function(e){g.ModifyUserFireBase(f,K,e).then((function(){u("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){u("Error writing document: "+e)}))}))})):g.ModifyUserFireBase(f,K).then((function(){u("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){u("Error writing document: "+e)}));Y("frontCard")},children:"Modifier"}),Object(a.jsx)("div",{className:"alert alert-success "+R,role:"alert",children:Object(a.jsx)("p",{children:b})}),1!==o.length&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Pour modifier une personne de votre famille, s\xe9lectionne-le dans la liste ci-dessous"}),Object(a.jsx)($,{data:o,modifyPerson:ne,isClearable:!1})]}),K.PhotosHistory&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"mt-4",children:"Votre historique photo"}),Object(a.jsx)(ae,{person:K})]})]})]})})},re=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],i=function(e){r(e)},s=Object(l.g)();return Object(c.useEffect)((function(){r(s.pathname.substring(1))}),[s]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsxs)(o.b,{onClick:function(){return i("")},className:"navbar-brand",to:"/",children:[""===n&&Object(a.jsx)("ion-icon",{name:"home-sharp"}),""!==n&&Object(a.jsx)("ion-icon",{name:"home-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("anniversaire")},className:"navbar-brand",to:"/anniversaire",children:["anniversaire"===n&&Object(a.jsx)("ion-icon",{name:"balloon-sharp"}),"anniversaire"!==n&&Object(a.jsx)("ion-icon",{name:"balloon-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("generation")},className:"navbar-brand",to:"/generation2",children:[n.includes("generation")&&Object(a.jsx)("ion-icon",{name:"list-sharp"}),!n.includes("generation")&&Object(a.jsx)("ion-icon",{name:"list-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("jeu")},className:"navbar-brand",to:"/jeu",children:["jeu"===n&&Object(a.jsx)("ion-icon",{name:"game-controller-sharp"}),"jeu"!==n&&Object(a.jsx)("ion-icon",{name:"game-controller-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("events")},className:"navbar-brand",to:"/events",children:[n.includes("events")&&Object(a.jsx)("ion-icon",{name:"newspaper-sharp"}),!n.includes("events")&&Object(a.jsx)("ion-icon",{name:"newspaper-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return i("profil")},className:"navbar-brand",to:"/profil",children:["profil"===n&&Object(a.jsx)("ion-icon",{name:"person-sharp"}),"profil"!==n&&Object(a.jsx)("ion-icon",{name:"person-outline"})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){g.signInWithGoogle()},children:Object(a.jsx)("ion-icon",{name:"log-in-outline"})}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){g.Disconnect()},children:Object(a.jsx)("ion-icon",{name:"log-out-outline"})})]})})},ie=n(50),se=n.n(ie),oe=function(e){var t=e.event,n=e.id,r=void 0===n?null:n,i=e.userId,s=void 0===i?null:i,o=Object(c.useState)([]),j=Object(w.a)(o,2),d=j[0],b=j[1],m=Object(l.f)(),h=Object(c.useState)("d-none"),x=Object(w.a)(h,2),p=x[0],g=x[1],v=function(e){var t;window.confirm("\xcates-vous s\xfbr de vouloir supprimer?")&&(t=e,f.collection("evenement").doc(t).delete().then((function(){window.location.reload(!1)})).catch((function(e){console.log(e)})))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h4",{children:t.value.Titre}),Object(a.jsx)("h6",{children:se.a.unix(t.value.Date.seconds).format("DD/MM/YYYY")}),r&&Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t.value.PhotoEvent,alt:t.value.Titre}),Object(a.jsxs)("div",{className:"row mb-4",children:[Object(a.jsx)("div",{className:"col-sm",children:Object(a.jsxs)("div",{className:"form-group mt-2",children:[Object(a.jsx)("label",{className:"mb-2",children:"Ajouter des images"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",multiple:!0,onChange:function(e){for(var t=e.target.files,n=[],a=0;a<t.length;a++){var c=t[a];new te.a(c,{quality:.6,success:function(e){n.push(e)}})}b(n),g("d-block")}})]})}),Object(a.jsx)("div",{className:"col-sm",children:Object(a.jsx)("button",{className:"btn btn-primary mt-4 mb-3 "+p,onClick:function(){d.forEach((function(e){O.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){O.ref("images").child(e.name).getDownloadURL().then((function(e){(function(e,t){return f.collection("evenement").doc(e).update({Photos:u.a.firestore.FieldValue.arrayUnion(t)})})(r,e).then((function(){window.location.reload(!1)})).catch((function(e){console.log(e)}))}))}))}))},children:"Ajouter l'image"})})]}),Object(a.jsx)("h4",{children:"Les photos de l'event"}),t.value.Photos.map((function(e){return Object(a.jsx)("div",{className:"mt-2 mb-2",children:Object(a.jsx)("img",{src:e,alt:"li\xe9 \xe0 l'event"},e)})}))]}),!r&&Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"myButton mb-3",onClick:function(){return m.push("/events/"+t.id)},children:Object(a.jsx)("img",{src:t.value.PhotoEvent,alt:t.value.Titre})}),t.value.Created_By===s&&Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-danger mb-3",onClick:function(){return v(t.id)},children:"Supprimer"})})]})]})})},le=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-primary mr-3","data-toggle":"modal","data-target":"#exampleModalCreate",children:"Cr\xe9er un \xe9v\xe9nement"}),Object(a.jsx)("div",{className:"modal fade",id:"exampleModalCreate",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Cr\xe9er l'\xe9v\xe9nement"}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"modal-body",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titre de l'\xe9v\xe9nement"}),Object(a.jsx)("input",{className:"form-control",placeholder:"Titre de l'\xe9v\xe9nement",name:"titre",onChange:function(e){if(null!==e){var t=e.target,a=t.name,c=t.value;r(Object(Q.a)(Object(Q.a)({},n),{},Object(Z.a)({},a,c)))}},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de l'\xe9v\xe9nement"}),Object(a.jsx)("input",{className:"form-control",type:"date",name:"date",onChange:function(e){if(null!==e){var t=e.target,a=t.name,c=t.value;r(Object(Q.a)(Object(Q.a)({},n),{},Object(Z.a)({},a,c)))}},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"mb-2",children:"Ajouter une image"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",onChange:function(e){var t=e.target.name,a=e.target.files[0];new te.a(a,{quality:.6,success:function(e){r(Object(Q.a)(Object(Q.a)({},n),{},Object(Z.a)({},t,e)))}})}})]})]}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(a.jsx)("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:function(){var e=n.pictureName;O.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){console.log("Error writing document: "+e)}),(function(){O.ref("images").child(e.name).getDownloadURL().then((function(e){(function(e,t){return f.collection("evenement").add({Titre:e.titre,Photos:[],PhotoEvent:t,Date:u.a.firestore.Timestamp.fromDate(new Date(e.date)),Created_By:localStorage.getItem("userId")})})(n,e).then((function(){window.location.reload(!1)})).catch((function(e){console.log("Error writing document: "+e)}))}))}))},children:"Cr\xe9er"})]})]})})})]})},je=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(l.h)().id,s=Object(c.useState)("d-none"),o=Object(w.a)(s,2),j=o[0],d=o[1],b=Object(c.useState)(),u=Object(w.a)(b,2),h=u[0],O=u[1];return Object(c.useEffect)((function(){var e=m.id;void 0===e?p(localStorage.getItem("email")).then((function(e){void 0===e||void 0===e.id?d("d-none"):(d("d-block"),O(e.id))})):(d("d-block"),O(e)),f.collection("evenement").orderBy("Date","desc").get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,value:e.data()})})),r(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[!i&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center mb-3 moreSize",children:"Fil d'actualit\xe9"}),Object(a.jsx)("div",{className:"text-center mb-3 "+j,children:Object(a.jsx)(le,{})}),n.map((function(e){return Object(a.jsx)(oe,{event:e,userId:h},e.id)}))]}),i&&n.filter((function(e){return e.id===i})).map((function(e){return Object(a.jsx)(oe,{event:e,id:i},e.id)}))]})},de=function(){var e=Object(c.useState)("d-none"),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){p(localStorage.getItem("email")).then((function(e){e&&void 0===e.id?r("d-block"):r("d-none")}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"alert alert-warning "+n,role:"alert",children:Object(a.jsxs)("p",{children:["Tu n'a pas encore valid\xe9 ton compte. Suis ce ",Object(a.jsx)(o.b,{to:"/profil",children:"Lien"})," pour le faire"]})})})},be=function(){var e=Object(c.useState)("d-none"),t=Object(w.a)(e,2),n=t[0],r=t[1],i=Object(c.useContext)(C);return Object(c.useEffect)((function(){r(null===i?"d-block":"d-none")}),[i]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"alert alert-danger "+n,role:"alert",children:Object(a.jsx)("p",{children:"Les donn\xe9es ne vont pas arriver, il faut te connecter"})})})};var ue=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(k,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)("div",{className:"d-none d-sm-none d-md-block",children:Object(a.jsx)(v,{})}),Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(re,{})}),Object(a.jsxs)("main",{children:[Object(a.jsx)(de,{}),Object(a.jsx)(be,{}),Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/events/:id",component:je}),Object(a.jsx)(l.a,{path:"/events",component:je}),Object(a.jsx)(l.a,{path:"/:generation/:numberFamilly",component:z}),Object(a.jsx)(l.a,{path:"/generation4",component:K}),Object(a.jsx)(l.a,{path:"/generation3",component:W}),Object(a.jsx)(l.a,{path:"/generation2",component:J}),Object(a.jsx)(l.a,{path:"/anniversaire",component:_}),Object(a.jsx)(l.a,{path:"/jeu",component:X}),Object(a.jsx)(l.a,{path:"/profil",component:ce}),Object(a.jsx)(l.a,{path:"/",component:z})]})})]})]})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ue,{})}),document.getElementById("root")),me()}},[[84,1,2]]]);
//# sourceMappingURL=main.61f7ca42.chunk.js.map