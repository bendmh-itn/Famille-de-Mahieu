(this.webpackJsonpfamille=this.webpackJsonpfamille||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),i=n.n(c),r=n(24),s=n.n(r),o=(n(47),n(6)),l=n(8),m=(n(28),n(17)),b=(n(48),n(75),n(74),new m.a.auth.GoogleAuthProvider),j=(m.a.apps.length?m.a.app():m.a.initializeApp({apiKey:"AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",authDomain:"demahieu-file.firebaseapp.com",projectId:"demahieu-file",storageBucket:"demahieu-file.appspot.com",messagingSenderId:"192092843689",appId:"1:192092843689:web:d490269a5a93671c3483b8"})).firestore();var d=m.a.storage(),u=m.a.auth(),h=(m.a.firestore(),{findAll:function(){return j.collection("famille").orderBy("numberFamilly","asc").get()},signInWithGoogle:function(){u.signInWithPopup(b).then((function(e){var t=e.user.email;localStorage.setItem("email",t)})).then((function(){window.location.reload()}))},FindIdPerson:function(e){return j.collection("famille").where("numberFamilly","==",e).get()},ModifyUserFireBase:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return void 0===t.dateMariage&&(t.dateMariage=""),j.collection("famille").doc(e).set({firstName:t.firstName,lastName:t.lastName,generation:t.generation,birthDate:t.birthDate,numberFamilly:t.numberFamilly,pictureName:""===n?t.pictureName:n,famillyName:t.famillyName,dateMariage:t.dateMariage,email:t.email})},FindEmailPerson:function(e){return j.collection("famille").where("email","==",e).get()},Disconnect:function(){u.signOut().then((function(){localStorage.setItem("email",""),window.location.reload()})).catch((function(e){console.log(e)}))},MessageSended:function(){return j.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").get()},ChangeMessageSended:function(){return j.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").set({send:!0})}}),f=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Famille de Mahieu"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/anniversaire",children:"Anniversaires"})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)(o.b,{className:"navbar-brand dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"G\xe9n\xe9ration"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation2",children:"G\xe9n\xe9ration 2"}),Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation3",children:"G\xe9n\xe9ration 3"}),Object(a.jsx)(o.b,{className:"dropdown-item",to:"/generation4",children:"G\xe9n\xe9ration 4"})]})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/events",children:"\xc9v\xe9nements"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/jeu",children:"Jeu"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/profil",children:"Profil"})})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.signInWithGoogle()},children:"Connexion"}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.Disconnect()},children:"D\xe9connexion"})]})]})})},O=n(18),g=n(19),x=n(20),p=n(41),v=Object(c.createContext)({user:null}),N=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e.componentDidMount=function(){u.onAuthStateChanged((function(t){e.setState({user:t})}))},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(a.jsx)(v.Provider,{value:this.state.user,children:this.props.children})}}]),n}(c.Component),y=n(5),F=function(e){var t=e.lienImage,n=e.prenomNom,c=e.dateDeNaissance,i=e.link,r=void 0===i?"#":i,s=e.dateDeces,o=(e.generation,e.myBirthday),m=void 0!==o&&o,b=e.className,j=void 0===b?"elementFlexible":b,d=(e.description,Object(l.f)());return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:j,children:["#"!==r&&Object(a.jsx)("button",{className:"myButton",onClick:function(){return d.push(r)},children:Object(a.jsx)("img",{src:t,alt:n})}),"#"===r&&Object(a.jsx)("img",{className:"picture",src:t,alt:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{children:n}),Object(a.jsxs)("h6",{children:[c,s&&Object(a.jsxs)("span",{children:[" - ",s]})]})]}),m&&Object(a.jsx)("h2",{className:"clignote",children:"Happy birthday"})]})})},C="4",S=[],D=function(){return S},k=function(e){S=[],e.forEach((function(e){S.push(e)}))},w=function(e,t){var n=[],a=e.toString().slice(0,t-1);return S.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push(e)})),n},E=function(e,t){var n=[],a=e.toString().slice(0,t-1);return"3"===t?S.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})):S.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<=10*a})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})),n},M=function(){var e=[];return S.filter((function(e){return e.generation!==C})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e},I=function(e){var t=[];return S.filter((function(t){return t.numberFamilly===e})).map((function(e){return t.push(e)})),t[0]},P=function(e){var t=[];return S.filter((function(t){return t.email===e})).map((function(e){return t.push(e)})),t[0]};function A(e,t){var n=e.birthDate.split("/")[2],a=t.birthDate.split("/")[2],c=e.birthDate.split("/")[1],i=t.birthDate.split("/")[1],r=e.birthDate.split("/")[0],s=t.birthDate.split("/")[0];return n!==a?n>a?1:-1:c!==i?c>i?1:-1:r!==s?r>s?1:-1:0}function B(e,t){return e.birthDate!==t.birthDate?e.birthDate>t.birthDate?1:-1:0}var L=function(){var e=[],t=new Date,n=t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():(t.getMonth()+1).toString();return S.forEach((function(t){t.birthDate.split("/")[1]===n&&e.push(t)})),e.sort(B),e},G=function(e){var t=[];return S.forEach((function(n){n.generation===e&&t.push(n)})),t.sort(A),t},T=function(){var e=function(e){var t=[];return S.forEach((function(e){"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fnaruto-g5ac97839f_640.png?alt=media&token=89f220af-2915-4dcc-9fd7-6e69de09fe7c"!==e.pictureName&&"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fhomme.PNG?alt=media&token=e9014335-a2b9-48a8-9732-f9997269b515"!==e.pictureName&&"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Ffemme.PNG?alt=media&token=1e2723b0-31a3-44de-a503-d2d7c0694e88"!==e.pictureName&&t.push(e)})),t}();return function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}(e)};var V=n(32),U=function(e){var t=e.data,n=Object(l.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(V.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){null!==e&&n.push("/"+e.value)}})})},R=function(e){var t=e.match,n=Object(c.useState)([]),i=Object(y.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)(""),l=Object(y.a)(o,2),m=l[0],b=l[1],j=Object(c.useState)([]),d=Object(y.a)(j,2),u=d[0],f=d[1];return Object(c.useEffect)((function(){var e=t.params.numberFamilly,n=t.params.generation;if(b(t.params.generation),void 0!==n&&void 0!==e||(e=0,n="1",b("1")),0===D().length)h.findAll().then((function(t){var a=t.docs.map((function(e){return e.data()}));k(a);var c=w(e,n);s([]),s(c),f(M()),window.scroll(0,0)}));else{var a=w(e,n);f(M()),s([]),s(a),window.scroll(0,0)}}),[t.params.generation,t.params.numberFamilly]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U,{data:u}),void 0!==r[0]&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"mb-0",children:r[0].famillyName}),void 0!==r[0].dateMariage&&Object(a.jsx)("h4",{className:"text-center mb-4",children:r[0].dateMariage}),void 0===r[0].dateMariage&&Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"containerFlexible",children:r.filter((function(e){return e.generation===m})).map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"#",generation:e.generation},e.firstName+""+e.famillyName)}))}),Object(a.jsx)("div",{className:"containerFlexible",children:r.filter((function(e){return e.generation!==m})).map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===C||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},Y=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(y.a)(r,2),o=s[0],l=s[1],m=Object(c.useState)(""),b=Object(y.a)(m,2),j=b[0],d=b[1];return Object(c.useEffect)((function(){var e,t=new Date;l(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]),d(t.getDate()),0===D().length?h.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));k(n),e=L(),i(e)})):(e=L(),i(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("h2",{className:"text-center mb-3",children:[n.length," anniversaire(s) en ",o]})}),Object(a.jsx)("div",{className:"containerFlexible",children:void 0!==n&&n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===C||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation,myBirthday:e.birthDate.split("/")[0]===(j.toString()<10?"0"+j.toString():j.toString())},e.firstName+""+e.famillyName)}))})]})},z=function(){var e=Object(c.useState)("generation2"),t=Object(y.a)(e,2),n=t[0],i=t[1],r=function(e){i(e)},s=Object(l.g)();return Object(c.useEffect)((function(){i(s.pathname.substring(1))}),[s]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark space-around",children:[Object(a.jsxs)(o.b,{onClick:function(){return r("generation2")},className:"navbar-brand",to:"/generation2",children:["generation2"===n&&Object(a.jsx)("ion-icon",{name:"reorder-two-sharp"}),"generation2"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-two-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("generation3")},className:"navbar-brand",to:"/generation3",children:["generation3"===n&&Object(a.jsx)("ion-icon",{name:"reorder-three-sharp"}),"generation3"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-three-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("generation4")},className:"navbar-brand",to:"/generation4",children:["generation4"===n&&Object(a.jsx)("ion-icon",{name:"reorder-four-sharp"}),"generation4"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-four-outline"})]})]})})},q=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e;0===D().length?h.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));k(n),e=G("2"),i(e)})):(e=G("2"),i(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(z,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 2",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===C||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},J=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e;0===D().length?h.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));k(n),e=G("3"),i(e)})):(e=G("3"),i(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(z,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 3",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===C||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},W=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e;0===D().length?h.findAll().then((function(t){var n=t.docs.map((function(e){return e.data()}));k(n),e=G("4"),i(e)})):(e=G("4"),i(e))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(z,{})}),Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 4",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"/3/"+Math.round(e.numberFamilly/10),generation:e.generation},e.firstName+""+e.famillyName)}))})]})},_=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(y.a)(r,2),o=s[0],l=s[1],m=Object(c.useState)(0),b=Object(y.a)(m,2),j=b[0],d=b[1],u=Object(c.useState)(0),f=Object(y.a)(u,2),O=f[0],g=f[1],x=Object(c.useState)(""),p=Object(y.a)(x,2),v=p[0],N=p[1],F=Object(c.useState)(!1),C=Object(y.a)(F,2),S=C[0],w=C[1],E=Object(c.useState)(0),M=Object(y.a)(E,2),I=M[0],P=M[1],A=Object(c.useState)(""),B=Object(y.a)(A,2),L=B[0],G=B[1],V=Object(c.useState)(0),U=Object(y.a)(V,2),R=U[0],Y=U[1];return Object(c.useEffect)((function(){0===D().length&&h.findAll().then((function(e){var t=e.docs.map((function(e){return e.data()}));k(t);var n=T(),a=[];1===R?(n.forEach((function(e){"4"===e.generation&&a.push(e)})),g(0),d(0),i(a),l(a[0])):(g(0),d(0),i(n),l(n[0]))}));var e=T(),t=[];1===R?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),g(0),d(0),i(t),l(t[0])):(g(0),d(0),i(e),l(e[0]))}),[R]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[!o&&Object(a.jsx)("h2",{children:"Les donn\xe9es arrivent. Soyez patient"}),o&&20!==O&&Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"text-center",children:"Quel est mon pr\xe9nom ?"}),Object(a.jsx)("img",{src:o.pictureName,alt:o.firstName}),S&&Object(a.jsx)("h2",{children:o.lastName}),Object(a.jsx)("div",{className:"form-group mt-4",children:Object(a.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}})}),Object(a.jsxs)("div",{className:"containerFlexible",children:[Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){v.toLowerCase()===o.firstName.toLowerCase().replace(/\s+/g,"")?(d(S?j+.5:j+1),G("")):G(o.firstName),function(){var e=I;P(I+1),l(n[e+=1])}(),w(!1),O!==n.length&&g(O+1),N("")},className:"btn btn-primary mt-3",children:"V\xe9rifier"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){w(!0)},className:"btn btn-secondary mt-3",children:"indice"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(e){Y(0===R?1:0)},className:"btn btn-danger mt-3",children:0===R?"Difficile":"Facile"})})]}),Object(a.jsxs)("h3",{className:"mt-3",children:["Votre score : ",j," sur ",O]}),L&&Object(a.jsxs)("p",{children:["Son pr\xe9nom \xe9tait ",L]})]}),20===O&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Bravo tu as obtenu ",j," sur ",O]}),Object(a.jsx)("button",{onClick:function(){!function(){var e=T(),t=[];1===R?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),g(0),d(0),i(t),l(t[0])):(g(0),d(0),i(e),l(e[0]))}(),G(""),P(0)},className:"btn btn-primary mt-3",children:"Recommencer"})]})]})})},K=n(10),X=n(15),Z=function(e){var t=e.data,n=e.modifyPerson,c=e.isClearable,i=void 0===c||c;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(V.a,{id:"searchFamilly",options:t,isClearable:i,isSearchable:!0,onChange:function(e){n(null!==e?e.value:null)}})})},H=n(23),Q=n.n(H),$=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(y.a)(r,2),o=s[0],l=s[1],m=Object(c.useState)(""),b=Object(y.a)(m,2),j=b[0],u=b[1],f=Object(c.useState)(""),O=Object(y.a)(f,2),g=O[0],x=O[1],p=Object(c.useState)(""),N=Object(y.a)(p,2),F=N[0],w=N[1],M=Object(c.useState)(!1),A=Object(y.a)(M,2),B=A[0],L=A[1],G=Object(c.useState)(!1),T=Object(y.a)(G,2),V=T[0],U=T[1],R=Object(c.useState)("backCard"),Y=Object(y.a)(R,2),z=Y[0],q=Y[1],J=Object(c.useState)(""),W=Object(y.a)(J,2),_=W[0],H=W[1],$=Object(c.useState)([]),ee=Object(y.a)($,2),te=ee[0],ne=ee[1],ae=Object(c.useContext)(v),ce=function(e){if(null!==e){var t=e.split("/")[1],n=I(t);void 0===n.email&&(n.email=""),ne(n),h.FindIdPerson(t).then((function(e){var t=e.docs.map((function(e){return e.id}));x(t[0])}))}q("backCard")},ie=function(e){var t=e.target,n=t.name,a=t.value;ne(Object(X.a)(Object(X.a)({},te),{},Object(K.a)({},n,a)))};return Object(c.useEffect)((function(){var e;if(0===D().length&&h.findAll().then((function(e){var t=e.docs.map((function(e){return e.data()}));k(t),H(t)})),null!==ae&&(H(ae),e=ae.email,i(ae.email),l(function(){var e=[];return S.filter((function(e){return"1"!==e.generation&&e.generation!==C&&void 0===e.email||""===e.email})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e}())),B||""===_||h.FindEmailPerson(e).then((function(t){var n=t.docs.map((function(e){return e.id}));if(void 0!==n[0]){x(n[0]),L(!0);var a=P(e);void 0!==a&&(ne(a),l(E(a.numberFamilly,a.generation)))}})),B){var t=P(e);void 0!==t&&(ne(t),l(E(t.numberFamilly,t.generation)))}}),[_,B,ae]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container mt-4",children:[""===_&&Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Les donn\xe9es arrivent. Soyez patient"})}),""!==n&&!B&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Votre adresse mail : ",Object(a.jsx)("span",{className:"email",children:n})]}),Object(a.jsx)("p",{children:"Ce sera votre adresse pour modifier vos donn\xe9es"}),Object(a.jsx)("p",{children:"Trouve ton nom dans la liste pour ajouter ton adresse mail \xe0 ton compte"}),Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Ne te trompe surtout pas"}),Object(a.jsx)(Z,{data:o,modifyPerson:ce}),Object(a.jsx)("button",{className:"btn btn-success mt-4 mb-4",onClick:function(){var e,t;te.email=n,h.ModifyUserFireBase(g,te).then((function(){u("Votre adresse a bien \xe9t\xe9 ajout\xe9e.")})).catch((function(e){u("Error writing document: "+e)})),e=te.numberFamilly,t=n,I(e).email=t,L(!0),q("frontCard")},children:"Valider"}),Object(a.jsx)("div",{className:"alert alert-success "+z,role:"alert",children:Object(a.jsx)("p",{children:j})})]}),B&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Votre profil"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de mariage"}),Object(a.jsx)("input",{className:"form-control",name:"dateMariage",value:te.dateMariage||"",placeholder:"Date de mariage",onChange:ie})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Nom"}),Object(a.jsx)("input",{className:"form-control",name:"lastName",value:te.lastName||"",placeholder:"Nom...",onChange:ie})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pr\xe9nom"}),Object(a.jsx)("input",{className:"form-control",name:"firstName",value:te.firstName||"",placeholder:"Pr\xe9nom...",onChange:ie})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de naissance"}),Object(a.jsx)("input",{className:"form-control",name:"birthDate",value:te.birthDate||"",placeholder:"Date de naissance...",onChange:ie})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"form-control",name:"email",value:void 0===te.email?"":te.email,placeholder:"Email...",onChange:ie})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Image profil"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",onChange:function(e){var t=e.target.name,n=e.target.files[0];ne(Object(X.a)(Object(X.a)({},te),{},Object(K.a)({},t,n))),new Q.a(n,{quality:.6,success:function(e){w(e),U(!0)}})}})]}),Object(a.jsx)("button",{className:"btn btn-secondary m-4",onClick:function(){V?d.ref("images/".concat(F.name)).put(F).on("state_changed",(function(e){}),(function(e){u("Error writing document: "+e)}),(function(){d.ref("images").child(F.name).getDownloadURL().then((function(e){h.ModifyUserFireBase(g,te,e).then((function(){u("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){u("Error writing document: "+e)}))}))})):h.ModifyUserFireBase(g,te).then((function(){u("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){u("Error writing document: "+e)}));q("frontCard")},children:"Modifier"}),Object(a.jsx)("div",{className:"alert alert-success "+z,role:"alert",children:Object(a.jsx)("p",{children:j})}),1!==o.length&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Pour modifier une personne de votre famille, s\xe9lectionne-le dans la liste ci-dessous"}),Object(a.jsx)(Z,{data:o,modifyPerson:ce,isClearable:!1})]})]})]})})},ee=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],i=t[1],r=function(e){i(e)},s=Object(l.g)();return Object(c.useEffect)((function(){i(s.pathname.substring(1))}),[s]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsxs)(o.b,{onClick:function(){return r("")},className:"navbar-brand",to:"/",children:[""===n&&Object(a.jsx)("ion-icon",{name:"home-sharp"}),""!==n&&Object(a.jsx)("ion-icon",{name:"home-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("anniversaire")},className:"navbar-brand",to:"/anniversaire",children:["anniversaire"===n&&Object(a.jsx)("ion-icon",{name:"balloon-sharp"}),"anniversaire"!==n&&Object(a.jsx)("ion-icon",{name:"balloon-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("generation")},className:"navbar-brand",to:"/generation2",children:[n.includes("generation")&&Object(a.jsx)("ion-icon",{name:"list-sharp"}),!n.includes("generation")&&Object(a.jsx)("ion-icon",{name:"list-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("jeu")},className:"navbar-brand",to:"/jeu",children:["jeu"===n&&Object(a.jsx)("ion-icon",{name:"game-controller-sharp"}),"jeu"!==n&&Object(a.jsx)("ion-icon",{name:"game-controller-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("events")},className:"navbar-brand",to:"/events",children:[n.includes("events")&&Object(a.jsx)("ion-icon",{name:"newspaper-sharp"}),!n.includes("events")&&Object(a.jsx)("ion-icon",{name:"newspaper-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return r("profil")},className:"navbar-brand",to:"/profil",children:["profil"===n&&Object(a.jsx)("ion-icon",{name:"person-sharp"}),"profil"!==n&&Object(a.jsx)("ion-icon",{name:"person-outline"})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.signInWithGoogle()},children:Object(a.jsx)("ion-icon",{name:"log-in-outline"})}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.Disconnect()},children:Object(a.jsx)("ion-icon",{name:"log-out-outline"})})]})})},te=n(40),ne=n.n(te),ae=function(e){var t=e.event,n=e.id,i=void 0===n?null:n,r=Object(c.useState)([]),s=Object(y.a)(r,2),o=s[0],b=s[1],u=Object(l.f)(),h=Object(c.useState)("d-none"),f=Object(y.a)(h,2),O=f[0],g=f[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h4",{children:t.value.Titre}),Object(a.jsx)("h6",{children:ne.a.unix(t.value.Date.seconds).format("DD/MM/YYYY")}),i&&Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t.value.PhotoEvent,alt:t.value.Titre}),Object(a.jsxs)("div",{className:"row mb-4",children:[Object(a.jsx)("div",{className:"col-sm",children:Object(a.jsxs)("div",{className:"form-group mt-2",children:[Object(a.jsx)("label",{className:"mb-2",children:"Ajouter une image"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",multiple:!0,onChange:function(e){for(var t=e.target.files,n=[],a=0;a<t.length;a++){var c=t[a];console.log(c),new Q.a(c,{quality:.6,success:function(e){n.push(e)}})}b(n),g("d-block")}})]})}),Object(a.jsx)("div",{className:"col-sm",children:Object(a.jsx)("button",{className:"btn btn-primary mt-4 mb-3 "+O,onClick:function(){o.forEach((function(e){d.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){d.ref("images").child(e.name).getDownloadURL().then((function(e){(function(e,t){return j.collection("evenement").doc(e).update({Photos:m.a.firestore.FieldValue.arrayUnion(t)})})(i,e).then((function(){window.location.reload(!1)})).catch((function(e){console.log(e)}))}))}))}))},children:"Ajouter l'image"})})]}),Object(a.jsx)("h4",{children:"Les photos de l'event"}),t.value.Photos.map((function(e){return Object(a.jsx)("div",{className:"mt-2 mb-2",children:Object(a.jsx)("img",{src:e,alt:"li\xe9 \xe0 l'event"},e)})}))]}),!i&&Object(a.jsx)("button",{className:"myButton mb-3",onClick:function(){return u.push("/events/"+t.id)},children:Object(a.jsx)("img",{src:t.value.PhotoEvent,alt:t.value.Titre})})]})})},ce=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary mr-3","data-toggle":"modal","data-target":"#exampleModalCreate",children:"Cr\xe9er un \xe9v\xe9nement"}),Object(a.jsx)("div",{className:"modal fade",id:"exampleModalCreate",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Modifier l'\xe9quipe"}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"modal-body",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titre de l'\xe9v\xe9nement"}),Object(a.jsx)("input",{className:"form-control",placeholder:"Titre de l'\xe9v\xe9nement",name:"titre",onChange:function(e){if(null!==e){var t=e.target,a=t.name,c=t.value;i(Object(X.a)(Object(X.a)({},n),{},Object(K.a)({},a,c)))}}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de l'\xe9v\xe9nement"}),Object(a.jsx)("input",{className:"form-control",type:"date",name:"date",onChange:function(e){if(null!==e){var t=e.target,a=t.name,c=t.value;i(Object(X.a)(Object(X.a)({},n),{},Object(K.a)({},a,c)))}}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"mb-2",children:"Ajouter une image"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",onChange:function(e){var t=e.target.name,a=e.target.files[0];new Q.a(a,{quality:.6,success:function(e){i(Object(X.a)(Object(X.a)({},n),{},Object(K.a)({},t,e)))}})}})]})]}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(a.jsx)("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:function(){var e=n.pictureName;d.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){console.log("Error writing document: "+e)}),(function(){d.ref("images").child(e.name).getDownloadURL().then((function(e){(function(e,t){return j.collection("evenement").add({Titre:e.titre,Photos:[],PhotoEvent:t,Date:m.a.firestore.Timestamp.fromDate(new Date(e.date))})})(n,e).then((function(){window.location.reload(!1)})).catch((function(e){console.log("Error writing document: "+e)}))}))}))},children:"Cr\xe9er"})]})]})})})]})},ie=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(l.h)().id;return Object(c.useEffect)((function(){j.collection("evenement").orderBy("Date","desc").get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,value:e.data()})})),i(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[!r&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center mb-3 moreSize",children:"Fil d'actualit\xe9"}),Object(a.jsx)("div",{className:"text-center mb-3",children:Object(a.jsx)(ce,{})}),n.map((function(e){return Object(a.jsx)(ae,{event:e},e.id)}))]}),r&&n.filter((function(e){return e.id===r})).map((function(e){return Object(a.jsx)(ae,{event:e,id:r},e.id)}))]})};var re=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)("div",{className:"d-none d-sm-none d-md-block",children:Object(a.jsx)(f,{})}),Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(ee,{})}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/events/:id",component:ie}),Object(a.jsx)(l.a,{path:"/events",component:ie}),Object(a.jsx)(l.a,{path:"/:generation/:numberFamilly",component:R}),Object(a.jsx)(l.a,{path:"/generation4",component:W}),Object(a.jsx)(l.a,{path:"/generation3",component:J}),Object(a.jsx)(l.a,{path:"/generation2",component:q}),Object(a.jsx)(l.a,{path:"/anniversaire",component:Y}),Object(a.jsx)(l.a,{path:"/jeu",component:_}),Object(a.jsx)(l.a,{path:"/profil",component:$}),Object(a.jsx)(l.a,{path:"/",component:R})]})})})]})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(re,{})}),document.getElementById("root")),se()}},[[73,1,2]]]);
//# sourceMappingURL=main.4894eec8.chunk.js.map