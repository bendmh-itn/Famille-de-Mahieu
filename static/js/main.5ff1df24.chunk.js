(this.webpackJsonpfamille=this.webpackJsonpfamille||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n.n(i),c=n(23),s=n.n(c),o=(n(59),n(9)),l=n(7),m=(n(36),n(22)),b=(n(60),n(102),n(101),new m.a.auth.GoogleAuthProvider),j=(m.a.apps.length?m.a.app():m.a.initializeApp({apiKey:"AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",authDomain:"demahieu-file.firebaseapp.com",projectId:"demahieu-file",storageBucket:"demahieu-file.appspot.com",messagingSenderId:"192092843689",appId:"1:192092843689:web:d490269a5a93671c3483b8"})).firestore();var u=m.a.storage(),d=m.a.auth(),h=(m.a.firestore(),{findAll:function(){return j.collection("famille").orderBy("numberFamilly","asc").get()},signInWithGoogle:function(){d.signInWithPopup(b).then((function(e){var t=e.user.email;localStorage.setItem("email",t)})).then((function(){window.location.reload()}))},FindIdPerson:function(e){return j.collection("famille").where("numberFamilly","==",e).get()},ModifyUserFireBase:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return void 0===t.dateMariage?t.dateMariage="":t.dateMariage=t.dateMariage,j.collection("famille").doc(e).set({firstName:t.firstName,lastName:t.lastName,generation:t.generation,birthDate:t.birthDate,numberFamilly:t.numberFamilly,pictureName:""===n?t.pictureName:n,famillyName:t.famillyName,dateMariage:t.dateMariage,email:t.email})},FindEmailPerson:function(e){return j.collection("famille").where("email","==",e).get()},Disconnect:function(){d.signOut().then((function(){localStorage.setItem("email",""),window.location.reload()})).catch((function(e){console.log(e)}))}}),f=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Famille de Mahieu"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/anniversaire",children:"Annif"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/generation3",children:"G\xe9n\xe9ration 3"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/generation4",children:"G\xe9n\xe9ration 4"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/jeu",children:"Jeu"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"navbar-brand",to:"/profil",children:"Profil"})})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.signInWithGoogle()},children:"Connexion"}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.Disconnect()},children:"D\xe9connexion"})]})]})})},O=n(17),g=n(18),x=n(19),p=n(53),v=Object(i.createContext)({user:null}),N=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={user:null},e.componentDidMount=function(){d.onAuthStateChanged((function(t){e.setState({user:t})}))},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(a.jsx)(v.Provider,{value:this.state.user,children:this.props.children})}}]),n}(i.Component),y=n(5),F=function(e){var t=e.lienImage,n=e.prenomNom,i=e.dateDeNaissance,r=e.link,c=void 0===r?"#":r,s=e.dateDeces,o=(e.generation,e.myBirthday),m=void 0!==o&&o,b=e.className,j=void 0===b?"elementFlexible":b,u=(e.description,Object(l.f)());return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:j,children:["#"!==c&&Object(a.jsx)("button",{className:"myButton",onClick:function(){return u.push(c)},children:Object(a.jsx)("img",{src:t,alt:n})}),"#"===c&&Object(a.jsx)("img",{className:"picture",src:t,alt:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{children:n}),Object(a.jsxs)("h6",{children:[i,s&&Object(a.jsxs)("span",{children:[" - ",s]})]})]}),m&&Object(a.jsx)("h2",{className:"clignote",children:"Happy birthday"})]})})},S="4",D=[],C=function(){return D},k=function(e){D=[],e.forEach((function(e){D.push(e)}))},M=function(e,t){var n=[],a=e.toString().slice(0,t-1);return D.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push(e)})),n},I=function(e,t){var n=[],a=e.toString().slice(0,t-1);return"3"===t?D.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})):D.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<=10*a})).map((function(e){return n.push({value:e.generation+"/"+e.numberFamilly,label:e.firstName+" "+e.lastName})})),n},w=function(){var e=[];return D.filter((function(e){return e.generation!==S})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e},E=function(e){var t=[];return D.filter((function(t){return t.numberFamilly===e})).map((function(e){return t.push(e)})),t[0]},P=function(e){var t=[];return D.filter((function(t){return t.email===e})).map((function(e){return t.push(e)})),t[0]};function B(e,t){var n=e.birthDate.split("/")[2],a=t.birthDate.split("/")[2],i=e.birthDate.split("/")[1],r=t.birthDate.split("/")[1],c=e.birthDate.split("/")[0],s=t.birthDate.split("/")[0];return n!==a?n>a?1:-1:i!==r?i>r?1:-1:c!==s?c>s?1:-1:0}function A(e,t){return e.birthDate!==t.birthDate?e.birthDate>t.birthDate?1:-1:0}var L=function(){var e=[],t=new Date,n=t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():(t.getMonth()+1).toString();return D.forEach((function(t){t.birthDate.split("/")[1]===n&&e.push(t)})),e.sort(A),e},V=function(e){var t=[];return D.forEach((function(n){n.generation===e&&t.push(n)})),t.sort(B),t},G=function(){return function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}(D)};var U=n(33),z=function(e){var t=e.data,n=Object(l.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(U.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){null!==e&&n.push("/"+e.value)}})})},J=function(e){var t=e.match,n=Object(i.useState)([]),r=Object(y.a)(n,2),c=r[0],s=r[1],o=Object(i.useState)(""),l=Object(y.a)(o,2),m=l[0],b=l[1],j=Object(i.useState)([]),u=Object(y.a)(j,2),d=u[0],f=u[1];return Object(i.useEffect)((function(){var e=t.params.numberFamilly,n=t.params.generation;if(b(t.params.generation),void 0!==n&&void 0!==e||(e=0,n="1",b("1")),0===C().length)h.findAll().then((function(t){var a=t.docs.map((function(e){return e.data()}));k(a);var i=M(e,n);s([]),s(i),f(w()),window.scroll(0,0)}));else{var a=M(e,n);f(w()),s([]),s(a),window.scroll(0,0)}}),[t.params.generation,t.params.numberFamilly]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{data:d}),void 0!==c[0]&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"mb-0",children:c[0].famillyName}),void 0!==c[0].dateMariage&&Object(a.jsx)("h4",{className:"text-center mb-4",children:c[0].dateMariage}),void 0===c[0].dateMariage&&Object(a.jsx)("h4",{className:"text-center mb-4"})]}),Object(a.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation===m})).map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"#",generation:e.generation},e.firstName+""+e.famillyName)}))}),Object(a.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation!==m})).map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===S||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},T=(n(51),function(){var e=Object(i.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(""),s=Object(y.a)(c,2),o=s[0],l=s[1],m=Object(i.useState)(""),b=Object(y.a)(m,2),j=b[0],u=b[1];return Object(i.useEffect)((function(){var e=new Date;l(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][e.getMonth()]),u(e.getDate());var t;0===C().length?h.findAll().then((function(e){var n=e.docs.map((function(e){return e.data()}));k(n),t=L(),r(t)})):(t=L(),r(t))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("h2",{className:"text-center mb-3",children:[n.length," anniversaire(s) en ",o]})}),Object(a.jsx)("div",{className:"containerFlexible",children:void 0!==n&&n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===S||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation,myBirthday:e.birthDate.split("/")[0]===(j.toString()<10?"0"+j.toString():j.toString())},e.firstName+""+e.famillyName)}))})]})}),W=function(){var e=Object(i.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=V("3");r(e)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 3",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:e.generation===S||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},K=function(){var e=Object(i.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=V("4");r(e)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h1",{className:"text-uppercase text-center",children:["La 4",Object(a.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(a.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(a.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(a.jsx)(F,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"/3/"+Math.round(e.numberFamilly/10),generation:e.generation},e.firstName+""+e.famillyName)}))})]})},R=function(){var e=Object(i.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)([]),s=Object(y.a)(c,2),o=s[0],l=s[1],m=Object(i.useState)(0),b=Object(y.a)(m,2),j=b[0],u=b[1],d=Object(i.useState)(0),h=Object(y.a)(d,2),f=h[0],O=h[1],g=Object(i.useState)(""),x=Object(y.a)(g,2),p=x[0],v=x[1],N=Object(i.useState)(!1),F=Object(y.a)(N,2),S=F[0],D=F[1],C=Object(i.useState)(0),k=Object(y.a)(C,2),M=k[0],I=k[1],w=Object(i.useState)(""),E=Object(y.a)(w,2),P=E[0],B=E[1],A=Object(i.useState)(0),L=Object(y.a)(A,2),V=L[0],U=L[1];return Object(i.useEffect)((function(){var e=G(),t=[];1===V?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),u(0),r(t),l(t[0])):(O(0),u(0),r(e),l(e[0]))}),[V]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[!o&&Object(a.jsx)("h2",{children:"No data Selected. go back to the first page :'("}),o&&20!==f&&Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"text-center",children:"Quel est mon pr\xe9nom ?"}),0===f&&Object(a.jsx)("p",{children:"D\xe9sol\xe9, pour ceux qui n'ont pas mis de photo, c'est d'office faux sauf si vous devinez au hasard"}),Object(a.jsx)("img",{src:o.pictureName,alt:o.firstName}),S&&Object(a.jsx)("h2",{children:o.lastName}),Object(a.jsx)("div",{className:"form-group mt-4",children:Object(a.jsx)("input",{type:"text",value:p,onChange:function(e){return v(e.target.value)}})}),Object(a.jsxs)("div",{className:"containerFlexible",children:[Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){p.toLowerCase()===o.firstName.toLowerCase().replace(/\s+/g,"")?(u(S?j+.5:j+1),B("")):B(o.firstName),function(){var e=M;I(M+1),l(n[e+=1])}(),D(!1),f!==n.length&&O(f+1),v("")},className:"btn btn-primary mt-3",children:"V\xe9rifier"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(){D(!0)},className:"btn btn-secondary mt-3",children:"indice"})}),Object(a.jsx)("div",{className:"elementFlexible",children:Object(a.jsx)("button",{onClick:function(e){U(0===V?1:0)},className:"btn btn-danger mt-3",children:0===V?"Difficile":"Facile"})})]}),Object(a.jsxs)("h3",{className:"mt-3",children:["Votre score : ",j," sur ",f]}),P&&Object(a.jsxs)("p",{children:["Son pr\xe9nom \xe9tait ",P]})]}),20===f&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Bravo tu as obtenu ",j," sur ",f]}),Object(a.jsx)("button",{onClick:function(){!function(){var e=G(),t=[];1===V?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),u(0),r(t),l(t[0])):(O(0),u(0),r(e),l(e[0]))}(),B(""),I(0)},className:"btn btn-primary mt-3",children:"Recommencer"})]})]})})},q=n(11),H=n(27),Q=function(e){var t=e.data,n=e.modifyPerson,i=e.isClearable,r=void 0===i||i;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(U.a,{id:"searchFamilly",options:t,isClearable:r,isSearchable:!0,onChange:function(e){n(null!==e?e.value:null)}})})},X=n(52),Y=n.n(X),_=function(){var e=Object(i.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)([]),s=Object(y.a)(c,2),o=s[0],l=s[1],m=Object(i.useState)(""),b=Object(y.a)(m,2),j=b[0],d=b[1],f=Object(i.useState)(""),O=Object(y.a)(f,2),g=O[0],x=O[1],p=Object(i.useState)(""),N=Object(y.a)(p,2),F=N[0],C=N[1],k=Object(i.useState)(!1),M=Object(y.a)(k,2),w=M[0],B=M[1],A=Object(i.useState)(!1),L=Object(y.a)(A,2),V=L[0],G=L[1],U=Object(i.useState)("backCard"),z=Object(y.a)(U,2),J=z[0],T=z[1],W=Object(i.useState)(""),K=Object(y.a)(W,2),R=K[0],X=K[1],_=Object(i.useState)([]),Z=Object(y.a)(_,2),$=Z[0],ee=Z[1],te=Object(i.useContext)(v),ne=function(e){if(null!==e){var t=e.split("/")[1],n=E(t);void 0===n.email&&(n.email=""),ee(n),h.FindIdPerson(t).then((function(e){var t=e.docs.map((function(e){return e.id}));x(t[0])}))}T("backCard")},ae=function(e){var t=e.target,n=t.name,a=t.value;ee(Object(H.a)(Object(H.a)({},$),{},Object(q.a)({},n,a)))};return Object(i.useEffect)((function(){var e;if(null!==te&&(X(te),e=te.email,r(te.email),l(function(){var e=[];return D.filter((function(e){return"1"!==e.generation&&e.generation!==S&&void 0===e.email||""===e.email})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e}())),w||""===R||h.FindEmailPerson(e).then((function(t){var n=t.docs.map((function(e){return e.id}));if(void 0!==n[0]){x(n[0]),B(!0);var a=P(e);void 0!==a&&(ee(a),l(I(a.numberFamilly,a.generation)))}})),w){var t=P(e);void 0!==t&&(ee(t),l(I(t.numberFamilly,t.generation)))}}),[R,w]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container mt-4",children:[""===R&&Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Les donn\xe9es n'ont pas charg\xe9es, retourne \xe0 la page de Famille de Mahieu"})}),""!==n&&!w&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Votre adresse mail : ",Object(a.jsx)("span",{className:"email",children:n})]}),Object(a.jsx)("p",{children:"Ce sera votre adresse pour modifier vos donn\xe9es"}),Object(a.jsx)("p",{children:"Trouve ton nom dans la liste pour ajouter ton adresse mail \xe0 ton compte"}),Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Ne te trompe surtout pas"}),Object(a.jsx)(Q,{data:o,modifyPerson:ne}),Object(a.jsx)("button",{className:"btn btn-success mt-4 mb-4",onClick:function(){var e,t;$.email=n,h.ModifyUserFireBase(g,$).then((function(){d("Votre adresse a bien \xe9t\xe9 ajout\xe9e.")})).catch((function(e){d("Error writing document: "+e)})),e=$.numberFamilly,t=n,E(e).email=t,B(!0),T("frontCard")},children:"Valider"}),Object(a.jsx)("div",{className:"alert alert-success "+J,role:"alert",children:Object(a.jsx)("p",{children:j})})]}),w&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Votre profil"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de mariage"}),Object(a.jsx)("input",{className:"form-control",name:"dateMariage",value:$.dateMariage||"",placeholder:"Date de mariage",onChange:ae})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Nom"}),Object(a.jsx)("input",{className:"form-control",name:"lastName",value:$.lastName||"",placeholder:"Nom...",onChange:ae})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Pr\xe9nom"}),Object(a.jsx)("input",{className:"form-control",name:"firstName",value:$.firstName||"",placeholder:"Pr\xe9nom...",onChange:ae})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date de naissance"}),Object(a.jsx)("input",{className:"form-control",name:"birthDate",value:$.birthDate||"",placeholder:"Date de naissance...",onChange:ae})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"form-control",name:"email",value:void 0===$.email?"":$.email,placeholder:"Email...",onChange:ae})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Image profil"}),Object(a.jsx)("input",{className:"form-control",name:"pictureName",type:"file",onChange:function(e){var t=e.target.name,n=e.target.files[0];ee(Object(H.a)(Object(H.a)({},$),{},Object(q.a)({},t,n))),new Y.a(n,{quality:.6,success:function(e){C(e),G(!0)}})}})]}),Object(a.jsx)("button",{className:"btn btn-secondary m-4",onClick:function(){V?u.ref("images/".concat(F.name)).put(F).on("state_changed",(function(e){}),(function(e){d("Error writing document: "+e)}),(function(){u.ref("images").child(F.name).getDownloadURL().then((function(e){h.ModifyUserFireBase(g,$,e).then((function(){d("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){d("Error writing document: "+e)}))}))})):h.ModifyUserFireBase(g,$).then((function(){d("Vos donn\xe9es ont bien \xe9t\xe9 modifi\xe9es")})).catch((function(e){d("Error writing document: "+e)}));T("frontCard")},children:"Modifier"}),Object(a.jsx)("div",{className:"alert alert-success "+J,role:"alert",children:Object(a.jsx)("p",{children:j})}),1!==o.length&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Pour modifier une personne de votre famille, s\xe9lectionne-le dans la liste ci-dessous"}),Object(a.jsx)(Q,{data:o,modifyPerson:ne,isClearable:!1})]})]})]})})},Z=function(){var e=Object(i.useState)("home"),t=Object(y.a)(e,2),n=t[0],r=t[1],c=function(e){r(e)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(a.jsxs)(o.b,{onClick:function(){return c("home")},className:"navbar-brand",to:"/",children:["home"===n&&Object(a.jsx)("ion-icon",{name:"home-sharp"}),"home"!==n&&Object(a.jsx)("ion-icon",{name:"home-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return c("annif")},className:"navbar-brand",to:"/anniversaire",children:["annif"===n&&Object(a.jsx)("ion-icon",{name:"balloon-sharp"}),"annif"!==n&&Object(a.jsx)("ion-icon",{name:"balloon-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return c("generation3")},className:"navbar-brand",to:"/generation3",children:["generation3"===n&&Object(a.jsx)("ion-icon",{name:"reorder-three-sharp"}),"generation3"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-three-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return c("generation4")},className:"navbar-brand",to:"/generation4",children:["generation4"===n&&Object(a.jsx)("ion-icon",{name:"reorder-four-sharp"}),"generation4"!==n&&Object(a.jsx)("ion-icon",{name:"reorder-four-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return c("jeu")},className:"navbar-brand",to:"/jeu",children:["jeu"===n&&Object(a.jsx)("ion-icon",{name:"game-controller-sharp"}),"jeu"!==n&&Object(a.jsx)("ion-icon",{name:"game-controller-outline"})]}),Object(a.jsxs)(o.b,{onClick:function(){return c("profil")},className:"navbar-brand",to:"/profil",children:["profil"===n&&Object(a.jsx)("ion-icon",{name:"person-sharp"}),"profil"!==n&&Object(a.jsx)("ion-icon",{name:"person-outline"})]}),(null===localStorage.getItem("email")||""===localStorage.getItem("email"))&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.signInWithGoogle()},children:Object(a.jsx)("ion-icon",{name:"log-in-outline"})}),null!==localStorage.getItem("email")&&""!==localStorage.getItem("email")&&Object(a.jsx)("button",{className:"buttonConnexion navbar-brand text-right",onClick:function(){h.Disconnect()},children:Object(a.jsx)("ion-icon",{name:"log-out-outline"})})]})})};var $=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)("div",{className:"d-none d-sm-none d-md-block",children:Object(a.jsx)(f,{})}),Object(a.jsx)("div",{className:"d-block d-sm-block d-md-block d-lg-none",children:Object(a.jsx)(Z,{})}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/:generation/:numberFamilly",component:J}),Object(a.jsx)(l.a,{path:"/generation4",component:K}),Object(a.jsx)(l.a,{path:"/generation3",component:W}),Object(a.jsx)(l.a,{path:"/anniversaire",component:T}),Object(a.jsx)(l.a,{path:"/jeu",component:R}),Object(a.jsx)(l.a,{path:"/profil",component:_}),Object(a.jsx)(l.a,{path:"/",component:J})]})})})]})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root")),ee()},36:function(e,t,n){},59:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.5ff1df24.chunk.js.map