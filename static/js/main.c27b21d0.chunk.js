(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(298)},152:function(e,t,n){},180:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),l=(n(152),n(123)),u=n(124),i=n(136),s=n(125),h=n(138),m=n(53),p=n(21),d=n(127),v=n.n(d),f=function(e){return function(t){return v.a.get("https://viacep.com.br/ws/".concat(e,"/json")).then(function(e){t({type:"CLICK_UPDATE_VALUE",lugar:e.data})}).catch(function(e){throw e})}},g=n(305),E=n(306),w=(n(177),n(180),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={cep:""},n.inputChange=function(e){n.setState({cep:e.target.value})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.consultarCEP,n=e.lugar,a=this.state.cep;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Consult"},r.a.createElement("h4",null,"Consultar"),r.a.createElement("div",{className:"FormContainer"},"CEP",r.a.createElement(g.a,{className:"Input",type:"text",onChange:this.inputChange,value:a}),r.a.createElement(E.a,{className:"Button",color:"blue",size:"small",onClick:function(){return t(a)}},"Buscar"))),r.a.createElement("div",null,n&&r.a.createElement("h2",null,n.logradouro)))}}]),t}(a.Component)),b=Object(m.b)(function(e){return{lugar:e.clickState.lugar}},function(e){return Object(p.b)({consultarCEP:f},e)})(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(137),j={newValue:""},O=Object(p.c)({clickState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_UPDATE_VALUE":return Object(C.a)({},e,{lugar:t.lugar});default:return e}}}),k=n(135),y=Object(p.a)(k.a)(p.d)(O);o.a.render(r.a.createElement(m.a,{store:y},r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,2,1]]]);
//# sourceMappingURL=main.c27b21d0.chunk.js.map