(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),c=t(21),r=t.n(c),s=(t(49),t(8)),d=(t(50),t(6)),o=t(7),l=t(18),p=t.n(l),b="http://localhost:3001",j="GET_BREEDS",h="GET_TEMPERAMENTS",x="GET_BREEDS_BY_QUERY",m="GET_BREEDS_BY_ID",u="DOG_ORDER_BY_AZ",g="DOG_FILTER_BY_ORIGIN",O="DOG_FILTER_BY_TEMPERAMENT",f="DOG_ORDER_BY_WEIGHT";function v(){return function(e){return p.a.get("".concat(b,"/dogs")).then((function(n){e({type:j,payload:n.data})}))}}function _(){return function(e){return p.a.get("".concat(b,"/temperament")).then((function(n){e({type:h,payload:n.data})}))}}var y,w,C,A,S,N=t(3),k=t(4),z=k.a.div(y||(y=Object(N.a)(["\n    font-family: 'Amatic SC', cursive;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 150px;\n"]))),D=k.a.div(w||(w=Object(N.a)(["\n    border: 1px solid #7D732F;;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background-color: #fff7d5;\n    border-radius: 15px;\n    padding: 15px 10px;\n    height: 400px;\n    margin: 10px 0;\n    width: 400px;\n    h1{\n        font-size: 30px;\n    }\n    h3{\n        padding: 3px 0;\n        font-size: 20px;\n    }    \n    img{\n        margin: 5px 0;\n        border-radius: 10px;\n        width: auto;\n        max-width: 90%;\n        max-height: 125px;\n    }\n    button{\n        font-family: 'Amatic SC', cursive;\n        cursor: pointer;\n        font-size: 15px;\n        text-align: center;\n        margin: 5px;\n        background: #d4c4b5;\n        color: #000;\n        height: 30px;\n        width: 70px;\n        box-shadow: transparent;\n        border-radius: 15px;\n        border: 1px solid #d4c4b5;\n        :hover{\n            font-size: 18px;\n            height: 35px;\n            width: 80px;\n            border-radius: 60px;\n            background-color: white;\n        }\n    }\n"]))),E=t(0);function B(e){var n=e.match.params.id,t=Object(o.b)(),i=Object(o.c)((function(e){return e.breedId[0]}));return Object(a.useEffect)((function(){window.scrollTo(0,0),t(function(e){return function(n){return p.a.get("".concat(b,"/dogs/").concat(e)).then((function(e){n({type:m,payload:e.data})}))}}(n))}),[t]),Object(E.jsx)(z,{children:Object(E.jsx)(D,{children:i?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:i.name&&i.name}),Object(E.jsx)("img",{src:i.image,alt:i.name}),Object(E.jsxs)("h3",{children:["Height: ",i.height.join(" to ")," cm"]}),Object(E.jsxs)("h3",{children:["Weight: ",i.weight.join(" to ")," kg"]}),Object(E.jsxs)("h3",{children:["Lifespan: ",i.life_span.join(" to ")," years"]}),Object(E.jsxs)("h3",{children:[i.temperament&&Object(E.jsx)("u",{children:"Temperament:"})," ",i.temperament&&i.temperament.join(", ")," "]}),Object(E.jsx)(s.b,{to:"/doggieland",children:Object(E.jsx)("button",{onClick:function(e){t({type:"CLEAR"})},children:"Go Back!"})})]}):Object(E.jsx)("h1",{children:"Loading..."})})})}var T=k.a.div(C||(C=Object(N.a)(["\nbackground-color: #fef8d5;\ndisplay: flex;\njustify-content: space-around;\ntext-align: center;\nalign-items: center;\nborder-bottom: #7D732F 1px solid;\nfont-size: small;\nposition: fixed;\nwidth: 100%;\nmin-height: 80px;\ntop: 0; right: 0\n    .title{\n        font-size: 50px;\n    }\n"]))),F=k.a.h1(A||(A=Object(N.a)(["\n    font-size: 50px;\n"]))),L=k.a.div(S||(S=Object(N.a)(["\n    a{\n        text-decoration: none;\n        color: black;\n        text-align: center;\n        margin: 8px 20px;\n        font-size: 30px;\n        padding: 15px 10px;\n        border-radius: 50px;\n        background: #d4c4b5;\n        border: 1px solid #d4c4b5;\n        :hover{\n            border-radius: 70px;\n            width: 60px;\n            height: 30px;\n            font-size: 35px;\n            background-color: white;\n        }\n    }\n"])));function I(){var e=Object(o.c)((function(e){return e})).breeds,n=Object(o.b)();function t(e){n({type:"CLEAR"})}return e.length>0&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(T,{children:[Object(E.jsx)(L,{onClick:t,children:Object(E.jsx)(s.b,{to:"/doggieland",children:"Home"})}),Object(E.jsx)(F,{children:"Doggieland"}),Object(E.jsx)(L,{onClick:t,children:Object(E.jsx)(s.b,{to:"/doggieland/create",children:"Create"})})]})})}var R,G,Z,M,W,Y,H,U,P,q=t(16),J=t(20),$=t(2),Q=t(13);function X(e){return/^\d+$/.test(e)}var K,V=k.a.div(R||(R=Object(N.a)(["\n    label{\n        padding: 0 5px;\n        font-size: 25px;\n    }\n    span{\n        font-size: 20px;\n    }\n    input.danger{\n        border: 2px solid red;\n    }\n"]))),ee=k.a.div(G||(G=Object(N.a)(["\n    font-size: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    p{\n        padding: 3px\n    }\n"]))),ne=k.a.div(Z||(Z=Object(N.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: max-content;\n    h3{\n        margin: 0 10px\n    }\n"]))),te=k.a.div(M||(M=Object(N.a)(["\n    font-family: 'Amatic SC', cursive;\n    padding: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    h3{\n        font-size: 40px;\n    }\n    button{\n        font-size: 20px;\n        font-family: 'Amatic SC', cursive;\n        margin: 0 2px;\n        padding: 5px 5px;\n        box-shadow: transparent;\n        border-radius: 20px;\n        border: 1px solid #d4c4b5;\n        background-color: #d4c4b5;\n        :hover{\n            font-size: 25px;\n            height: 50px;\n            width: 85px;\n            border-radius: 50px;\n            background-color: white;\n        }\n        :disabled{\n            background-color: #d4c4b5 ;\n        }\n    }\n    \n"]))),ae=k.a.div(W||(W=Object(N.a)(["\n    background-color: #fef8d5;\n    padding: 30px 10px;\n    margin: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n    min-height: 300px;\n    border-radius: 15px;\n"]))),ie=k.a.div(Y||(Y=Object(N.a)(["\n    padding: 5px;    \n    input{\n        padding: 0 5px;\n        width: 20px;\n    }\n"]))),ce=k.a.div(H||(H=Object(N.a)(["\n    padding: 5px;\n"]))),re=k.a.div(U||(U=Object(N.a)(["\n    padding: 5px;\n    span{\n        padding: 3px;\n        font-size: 18px;\n    }\n    button{\n        font-family: 'Amatic SC', cursive;\n        text-align: center;\n        font-size: 12px;\n        padding: 0;\n        width: 18px;\n        height: 18px;\n        border-radius: 10px;\n        :hover{\n            width: 30px;\n            height: 30px;\n            \n        }\n    }\n"]))),se=k.a.div(P||(P=Object(N.a)(["\n    button{\n        font-size: 20px;\n        height: 40px;\n        width: 120px;\n        :hover{\n            font-size: 25px;\n            height: 50px;\n            width: 140px;\n        }\n    }\n"])));function de(){var e={name:"",min_height:"",max_height:"",min_weight:"",max_weight:"",min_life_span:"",max_life_span:"",image:""},n=Object(a.useState)(e),t=Object(Q.a)(n,2),c=t[0],r=t[1],d=Object(a.useState)(!0),l=Object(Q.a)(d,2),j=l[0],h=l[1],x=Object(a.useState)([]),u=Object(Q.a)(x,2),g=u[0],O=u[1],f=Object(a.useState)({}),v=Object(Q.a)(f,2),y=v[0],w=v[1],C=Object(o.c)((function(e){return e})),A=C.temperaments,S=C.breedId,N=Object(o.b)();function k(e){e.preventDefault(),h(!1);var n=e.target,t=n.value,a=n.name;r(Object($.a)(Object($.a)({},c),{},Object(J.a)({},a,t))),w(function(e){var n,t={};return e.name?(n=e.username,/^[A-Za-z\s]+$/.test(n)||(t.name="Name is invalid")):t.name="Name is required",!e.name||t.name||e.min_height||e.max_height||(t.min_height="Height is required"),!e.name||t.min_height||X(e.min_height)||(t.min_height="min height is must be a number"),!e.name||t.min_height||X(e.max_height)||(t.max_height="max height is must be a number"),!e.name||t.min_height||t.max_height||e.min_weight||e.max_weight||(t.min_weight="Weight is required"),!e.name||t.min_height||!e.min_weight||t.min_weight||X(e.min_weight)||(t.min_weight="min weight is must be a number"),!e.min_weight||t.min_weight||X(e.max_weight)||(t.max_weight="max weight is must be a number"),t.max_weight||!e.min_weight||X(e.min_life_span)||(t.min_life_span="min lifespan is must be a number"),e.min_life_span&&!X(e.max_life_span)&&(t.max_life_span="max lifespan is must be a number"),t}(Object($.a)(Object($.a)({},c),{},Object(J.a)({},e.target.name,e.target.value))))}Object(a.useEffect)((function(){window.scrollTo(0,0),N(_())}),[N]);var z=Object.keys(y);function D(e){e.preventDefault(),O(g.filter((function(n){return n!==e.target.value})))}return Object(E.jsx)(V,{children:Object(E.jsxs)(te,{children:[Object(E.jsxs)(ne,{children:[Object(E.jsx)("h3",{children:"Create you own Breed!"}),Object(E.jsx)(s.b,{to:"/doggieland",children:Object(E.jsx)("button",{children:"Go back!"})})]}),Object(E.jsx)(ae,{children:Object(E.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t,a={name:c.name,height:"".concat(c.min_height," - ").concat(c.max_height),weight:"".concat(c.min_weight," - ").concat(c.max_weight),life_span:"".concat(c.min_life_span," - ").concat(c.max_life_span),image:c.image,temperament:g};N((t=a,function(e){return p.a.post("".concat(b,"/dog"),t).then((function(n){e({type:m,payload:n.data})}))})),r(e),O([]),h(!0)},children:[Object(E.jsxs)(re,{children:[Object(E.jsx)("label",{children:"Name"}),Object(E.jsx)("input",{className:y.name&&"danger",onChange:k,name:"name",type:"name",value:c.name,placeholder:"name..."}),y.name&&Object(E.jsx)(ee,{children:Object(E.jsx)("p",{className:"danger",children:y.name})})]}),Object(E.jsxs)(ie,{children:[Object(E.jsx)("label",{children:"Height"}),Object(E.jsx)("input",{className:y.min_height&&"danger",onChange:k,name:"min_height",type:"min_height",value:c.min_height,placeholder:"min"}),Object(E.jsx)("span",{children:" to "}),Object(E.jsx)("input",{className:y.max_height&&"danger",onChange:k,name:"max_height",type:"max_height",value:c.max_height,placeholder:"max"}),Object(E.jsx)("span",{children:" cm"}),Object(E.jsxs)(ee,{children:[y.min_height&&Object(E.jsx)("p",{className:"danger",children:y.min_height}),y.max_height&&Object(E.jsx)("p",{className:"danger",children:y.max_height})]})]}),Object(E.jsxs)(ie,{children:[Object(E.jsx)("label",{children:"Weight"}),Object(E.jsx)("input",{className:y.min_weight&&"danger",onChange:k,name:"min_weight",type:"min_weight",value:c.min_weight,placeholder:"min"}),Object(E.jsx)("span",{children:" to "}),Object(E.jsx)("input",{className:y.max_weight&&"danger",onChange:k,name:"max_weight",type:"max_weight",value:c.max_weight,placeholder:"max"}),Object(E.jsx)("span",{children:" kg"}),Object(E.jsxs)(ee,{children:[y.min_weight&&Object(E.jsx)("p",{className:"danger",children:y.min_weight}),y.max_weight&&Object(E.jsx)("p",{className:"danger",children:y.max_weight})]})]}),Object(E.jsxs)(ie,{children:[Object(E.jsx)("label",{children:"Lifespan"}),Object(E.jsx)("input",{className:y.min_life_span&&"danger",onChange:k,name:"min_life_span",type:"min_life_span",value:c.min_life_span,placeholder:"min"}),Object(E.jsx)("span",{children:" to "}),Object(E.jsx)("input",{className:y.max_life_span&&"danger",onChange:k,name:"max_life_span",type:"max_life_span",value:c.max_life_span,placeholder:"max"}),Object(E.jsx)("span",{children:" years "}),Object(E.jsxs)(ee,{children:[y.min_life_span&&Object(E.jsx)("p",{className:"danger",children:y.min_life_span}),y.max_life_span&&Object(E.jsx)("p",{className:"danger",children:y.max_life_span})]})]}),Object(E.jsxs)(re,{children:[Object(E.jsx)("label",{children:"Image"}),Object(E.jsx)("input",{className:y.image&&"danger",onChange:k,name:"image",type:"name",value:c.image,placeholder:"url..."}),Object(E.jsx)(ee,{children:y.image&&Object(E.jsx)("p",{className:"danger",children:y.image})})]}),Object(E.jsxs)(ce,{children:[Object(E.jsx)("label",{children:"Temperament"}),Object(E.jsxs)("select",{name:"temperaments",onChange:function(e){g.includes(e.target.value)||(g.length>0?O([].concat(Object(q.a)(g),[e.target.value])):O([e.target.value]))},type:"text",children:[Object(E.jsx)("option",{value:null}),A.map((function(e,n){return Object(E.jsx)("option",{value:e,children:e},n)}))]})]}),Object(E.jsx)(re,{children:g.map((function(e,n){return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)("span",{children:e}),Object(E.jsx)("button",{value:e,onClick:D,children:"X"})]},n)}))}),Object(E.jsx)("button",{disabled:z.length>0||!0===j,children:"Add Breed"})]})}),S.length>0&&Object(E.jsx)(se,{children:Object(E.jsx)(s.b,{to:"/doggieland/".concat(S[0].id),children:Object(E.jsx)("button",{onChange:function(e){e.preventDefault()},id:"newBreedBttn",children:"See your breed!"})})})]})})}var oe,le,pe,be,je,he=k.a.div(K||(K=Object(N.a)(["\npadding-top: 50px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-evenly;\nbackground: #ffde15 url('https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898_960_720.jpg') no-repeat center; \nbackground-size: contain;\nheight: 100%;\n    a{\n        display: block;\n    }\n    h1{\n        font-family: 'Amatic SC', cursive;\n        font-size: 60px;\n        margin: 15px;\n    }\n    span{\n        font-size: 70px;\n    }\n    button{\n        cursor: pointer;\n        text-align: center;\n        margin: 5px 20px;\n        margin-bottom: 105px;\n        padding: 10px ;  \n        padding: 15px 10px;\n        border-radius: 50px;\n        background: #d4c4b5;\n        border: 1px solid #d4c4b5;\n        font-family: 'Amatic SC', cursive;\n        font-size: 30px;\n        height: 90px;\n        width: 90px;\n        color: #000;\n        :hover{\n            font-size: 40px;\n            height: 110px;\n            width: 110px;\n            background-color: white;\n        }\n    }\nbody{\n    height: 100%;\n}\n\n"])));function xe(){return Object(E.jsxs)(he,{children:[Object(E.jsxs)("h1",{children:["Welcome to ",Object(E.jsx)("span",{children:"DoggieLand"})]}),Object(E.jsx)(s.b,{to:"/doggieland",children:Object(E.jsx)("button",{children:"Get In!"})})]})}var me,ue=k.a.div(oe||(oe=Object(N.a)(["\n    padding-top: 200px;\n"]))),ge=k.a.div(le||(le=Object(N.a)(["\n    font-family: 'Amatic SC', cursive;\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-gap: 10px;  \n    padding: 0 10px;\n"]))),Oe=k.a.div(pe||(pe=Object(N.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background-color: #fff7d5;\n    border-radius: 15px;\n    padding: 15px 10px;\n    height: 300px;\n    margin: 10px 0;\n    width: 300px;\n    a{\n        text-decoration: none;\n        color: #000;\n        font-weight: bold;\n    }\n    button{\n        font-family: 'Amatic SC', cursive;\n        cursor: pointer;\n        font-size: 15px;\n        text-align: center;\n        margin: 5px;\n        background: #d4c4b5;\n        color: #000;\n        height: 30px;\n        width: 70px;\n        box-shadow: transparent;\n        border-radius: 15px;\n        border: 1px solid #d4c4b5;\n        :hover{\n            font-size: 18px;\n            height: 35px;\n            width: 80px;\n            border-radius: 60px;\n            background-color: white;\n          \n        }\n    }\n    h3{\n        font-size: 30px;\n    }\n    p{\n        font-size: 20px;\n    }\n    \n"]))),fe=k.a.div(be||(be=Object(N.a)(["\n    img{\n        margin: 5px 0;\n        border-radius: 10px;\n        width: auto;\n        max-width: 90%;\n        max-height: 125px;\n    }\n"]))),ve=k.a.div(je||(je=Object(N.a)(["\n    font-size: 30px;\n    font-family: 'Amatic SC', cursive;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    margin-top: 50px;\n    button{\n        font-family: 'Amatic SC', cursive;\n        cursor: pointer;\n        font-size: 25px;\n        text-align: center;\n        margin: 15px;\n        background: #d4c4b5;\n        color: #000;\n        height: 50px;\n        width: 70px;\n        box-shadow: transparent;\n        border-radius: 15px;\n        border: 1px solid #d4c4b5;\n        :hover{\n            font-size: 30px; \n            background-color: white;\n            height: 65px;\n            width: 90px;\n        }\n    }\n   \n"])));function _e(e){var n=e.breed;return n?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:n.name}),n.image?Object(E.jsx)(fe,{children:Object(E.jsx)("img",{className:"dogImg",src:n.image,alt:n.name})}):Object(E.jsx)("p",{children:Object(E.jsx)("loading",{className:""})}),Object(E.jsx)("p",{children:n.temperament&&Object(E.jsx)("u",{children:"Temperament:"})}),Object(E.jsx)("p",{children:n.temperament&&n.temperament.join(", ")}),Object(E.jsx)(s.b,{to:"/doggieland/".concat(n.id),children:Object(E.jsx)("button",{children:"See More!"})})]}):null}function ye(e){var n,t=e.breeds,a=Object(o.b)();function i(e){e.preventDefault(),a(v())}return Object(E.jsx)(ue,{children:t?Object(E.jsxs)(E.Fragment,{children:[" ",(n=t,"string"===typeof n?Object(E.jsxs)(ve,{children:[Object(E.jsx)("h3",{children:"No breeds where found"}),Object(E.jsx)("button",{onClick:i,children:"See All"})]}):n&&Object(E.jsx)(ge,{children:n.map((function(e,n){return Object(E.jsx)(Oe,{children:Object(E.jsx)(_e,{breed:e},n)},n)}))}))," "]}):Object(E.jsx)("p",{children:"loading"})})}var we,Ce=k.a.div(me||(me=Object(N.a)(["\n    display: flex;  \n    align-items: center;\n    justify-content: center;\n    span{\n        font-size: 25px;\n        padding: 5px;\n    }\n    .otroDivContainer{\n        display: flex;\n        align-items: center;\n        margin: 5px;\n        justify-content: space-between;\n    }\n    \n    .filterClass{\n        padding: 10px;\n    }\n    \n    .filterSelect{\n        padding: 5px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        span{\n            font-size: 20px;\n        } \n        button{\n            font-family: 'Amatic SC', cursive;\n            font-size: 18px;\n            cursor: pointer;\n            margin: 0 2px;\n            padding: 5px 5px;\n            box-shadow: transparent;\n            border-radius: 25px;\n            border: 1px solid #d4c4b5;\n            background-color: #d4c4b5;\n            height: 40px;\n            :hover{\n                font-size: 22px;\n                width: 60px;\n                height: 50px;\n                border-radius: 30px;\n                background-color: white;\n            }\n        }  \n        input{\n            width: 100px;\n        }\n        p{\n            padding: 5px;   \n        }             \n    }\n"])));function Ae(e){var n=e.temperaments,t=e.paginate,i=Object(a.useState)(""),c=Object(Q.a)(i,2),r=c[0],s=c[1],d=Object(a.useState)("Default"),l=Object(Q.a)(d,2),j=l[0],h=l[1],m=Object(a.useState)("All"),v=Object(Q.a)(m,2),_=v[0],y=v[1],w=Object(a.useState)("Default"),C=Object(Q.a)(w,2),A=C[0],S=C[1],N=Object(a.useState)("All"),k=Object(Q.a)(N,2),z=k[0],D=k[1],B=Object(o.b)();return Object(E.jsxs)(Ce,{children:[Object(E.jsxs)("div",{className:"filterClass",children:[Object(E.jsx)("span",{children:"Order by"}),Object(E.jsxs)("div",{className:"otroDivContainer",children:[Object(E.jsxs)("div",{className:"filterSelect",children:[Object(E.jsx)("span",{children:"A-Z"}),Object(E.jsxs)("select",{value:j,onChange:function(e){var n;h(e.target.value),t(1),B((n=e.target.value,{type:u,payload:n}))},children:[Object(E.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(E.jsx)("option",{value:"Z-A",children:"Z-A"})]})]}),Object(E.jsxs)("div",{className:"filterSelect",children:[Object(E.jsx)("span",{children:"Weight"}),Object(E.jsxs)("select",{onChange:function(e){var n;t(1),S(e.target.value),B((n=e.target.value,{type:f,payload:n}))},value:A,children:[Object(E.jsx)("option",{value:"Default",children:"Default"}),Object(E.jsx)("option",{value:"Asc",children:"Asc"}),Object(E.jsx)("option",{value:"Desc",children:"Desc"})]})]})]})]}),Object(E.jsxs)("div",{className:"filterClass",children:[Object(E.jsx)("span",{children:"Filter by "}),Object(E.jsxs)("div",{className:"otroDivContainer",children:[Object(E.jsxs)("div",{className:"filterSelect",children:[Object(E.jsx)("span",{children:"Temperament"}),Object(E.jsxs)("select",{value:_,onChange:function(e){var n;t(1),y(e.target.value),B((n=e.target.value,{type:O,payload:n}))},children:[Object(E.jsx)("option",{value:"All",children:"All"}),n.map((function(e,n){return Object(E.jsx)("option",{value:e,children:e},n)}))]})]}),Object(E.jsxs)("div",{className:"filterSelect",children:[Object(E.jsx)("span",{children:"Created by"}),Object(E.jsxs)("select",{onChange:function(e){var n;t(1),D(e.target.value),B((n=e.target.value,{type:g,payload:n}))},value:z,children:[Object(E.jsx)("option",{value:"All",children:"All"}),Object(E.jsx)("option",{value:"Api",children:"Api"}),Object(E.jsx)("option",{value:"User",children:"User"})]})]})]})]}),Object(E.jsxs)("div",{className:"filterClass",children:[Object(E.jsx)("span",{children:"Search by"}),Object(E.jsxs)("div",{className:"filterSelect",children:[Object(E.jsx)("span",{children:"Name"}),Object(E.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),B((n=r,function(e){return p.a.get("".concat(b,"/dogs/?name=").concat(n)).then((function(n){e({type:x,payload:n.data})})).catch((function(n){e({type:x,payload:"No breeds where found"})}))})),s(""),t(1)},children:[Object(E.jsx)("input",{type:"text",placeholder:"breed...",value:r,onChange:function(e){s(e.target.value)}}),Object(E.jsx)("button",{type:"submit",children:"Search!"})]})]})]})]})}var Se,Ne,ke=k.a.div(we||(we=Object(N.a)(["\n    padding: 15px 0;\n    width: 100%;\n    height: auto;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    button{\n        font-size: 15px;\n        font-family: 'Amatic SC', cursive;\n        cursor: pointer;\n        margin: 0 2px;\n        padding: 2px 5px;\n        width: 30px;\n        height: 30px;\n        box-shadow: transparent;\n        border-radius: 20px;\n        border: 1px solid #d4c4b5;\n        background-color: #d4c4b5;\n        :hover{\n            font-size: 18px;\n            width: 40px;\n            height: 40px;\n            background-color: white;\n        }\n\n"])));function ze(e){var n=e.paginate,t=e.pageNumbers;return Object(E.jsx)(ke,{children:Object(E.jsx)("ul",{className:"paginationUl",children:t.length>1&&t.map((function(e){return Object(E.jsx)("button",{onClick:function(){return n(e)},className:"paginationLi",id:e,children:e},e)}))})})}var De=k.a.div(Se||(Se=Object(N.a)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 80px;\n    h1{\n        font-family: 'Amatic SC', cursive;\n        font-size: 25px;\n    }\n"]))),Ee=k.a.div(Ne||(Ne=Object(N.a)(["\n    position: fixed;\n    background-color: #FDE860;\n    font-family: 'Amatic SC', cursive;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-bottom:1px solid #7D732F;\n    border-top:1px solid #7D732F;\n    width: 100%;\n    height: 145px;\n"])));function Be(){var e=Object(o.b)();Object(a.useEffect)((function(){window.scrollTo(0,0),e(v()),e(_())}),[]);for(var n=Object(o.c)((function(e){return e})),t=n.breeds,i=n.temperaments,c=Object(a.useState)(1),r=Object(Q.a)(c,2),s=r[0],d=r[1],l=9*s,p=l-9,b=t&&t.slice(p,l),j="string"!==typeof t&&t.length,h=[],x=Math.ceil(j/9),m=1;m<=x;m++)h.push(m);function u(e){window.scrollTo(0,0),d(Number(e))}return Object(E.jsx)(De,{children:t.length>0||"string"===typeof t?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(Ee,{children:[Object(E.jsx)(Ae,{temperaments:i,paginate:u}),Object(E.jsx)(ze,{pageNumbers:h,paginate:u})]}),Object(E.jsx)(ye,{breeds:b})]}):Object(E.jsx)("h1",{children:"Loading..."})})}var Te=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(d.a,{component:I}),Object(E.jsx)(d.a,{exact:!0,path:"/",children:Object(E.jsx)(xe,{})}),Object(E.jsxs)(d.c,{children:[Object(E.jsx)(d.a,{exact:!0,path:"/doggieland",children:Object(E.jsx)(Be,{})}),Object(E.jsx)(d.a,{exact:!0,path:"/doggieland/create",children:Object(E.jsx)(de,{})}),Object(E.jsx)(d.a,{path:"/doggieland/:id",component:B})]})]})},Fe={allBreeds:[],breeds:[],breedId:[],temperaments:[]};var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLEAR":return Object($.a)(Object($.a)({},e),{},{breedId:[]});case j:return Object($.a)(Object($.a)({},e),{},{allBreeds:n.payload,breeds:n.payload});case x:return Object($.a)(Object($.a)({},e),{},{breeds:n.payload});case m:return Object($.a)(Object($.a)({},e),{},{breedId:n.payload});case u:return"A-Z"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:Object(q.a)(e.breeds).sort((function(e,n){return e.name.toLowerCase().localeCompare(n.name.toLowerCase())}))}):"Z-A"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:Object(q.a)(e.breeds).sort((function(e,n){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))}):Object($.a)(Object($.a)({},e),{},{breeds:e.allBreeds});case h:return Object($.a)(Object($.a)({},e),{},{temperaments:n.payload});case O:var t;return"All"===n.payload?t=Object($.a)(Object($.a)({},e),{},{breeds:Object(q.a)(e.allBreeds)}):(console.log(e.breeds),t=Object($.a)(Object($.a)({},e),{},{breeds:Array.isArray(e.allBreeds)&&e.allBreeds.filter((function(e){return e.temperament&&e.temperament.includes(n.payload)}))})),t.breeds.length>0?t:Object($.a)(Object($.a)({},e),{},{breeds:"empty"});case g:var a;return(a="Api"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:"string"!==typeof e.breeds&&e.breeds.filter((function(e){return"number"===typeof e.id}))}):"User"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:"string"!==typeof e.breeds&&e.breeds.filter((function(e){return e.id.length>10}))}):Object($.a)(Object($.a)({},e),{},{breeds:e.allBreeds})).breeds.length>0?a:Object($.a)(Object($.a)({},e),{},{breeds:"empty"});case f:return"Asc"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:e.breeds.sort((function(e,n){return e.weight[0]-n.weight[0]}))}):"Desc"===n.payload?Object($.a)(Object($.a)({},e),{},{breeds:e.breeds.sort((function(e,n){return n.weight[0]-e.weight[0]}))}):Object($.a)(Object($.a)({},e),{},{breeds:Object(q.a)(e.breeds).sort((function(e,n){return e.name.localeCompare(n.name)}))});default:return e}},Ie=t(23),Re=t(43),Ge=t(44),Ze=Object(Ge.composeWithDevTools)(Object(Ie.applyMiddleware)(Re.a)),Me=Object(Ie.createStore)(Le,Ze),We=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(E.jsx)(o.a,{store:Me,children:Object(E.jsx)(s.a,{children:Object(E.jsx)(Te,{})})}),document.getElementById("root")),We()}},[[79,1,2]]]);
//# sourceMappingURL=main.f0ecf7d2.chunk.js.map