(this["webpackJsonpreact-poke-caro"]=this["webpackJsonpreact-poke-caro"]||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),l=n.n(r),c=(n(82),n(8)),i=n(7),s=n(9),u=n(10),m=n(11),d=(n(83),n(28)),p=n.n(d),v=n(20),h=n(23),g=n(191),k=n(192);var E=function(){return o.a.createElement("div",{className:"center-navbar"},o.a.createElement(g.a,{fixed:"top",style:{backdropFilter:"blur(10px) saturate(150%)",backgroundColor:"rgba(20,20,20,0.5)",paddingBottom:"5px"},variant:"dark"},o.a.createElement(k.a,{className:"mr-auto"},o.a.createElement(k.a.Link,{href:"/react-pokedex-carousel"},o.a.createElement(g.a.Brand,null,o.a.createElement("h3",null,o.a.createElement("img",{alt:"",src:"https://files.thetriangle.org/assets/pokemon/ball-master.png",height:"40",className:"d-inline-block align-top"}),"   ","Steve's Pok\xe9dex"))))))},f=n(42),b=n.n(f),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemonpng/poke-".concat(e,".png"),width:"100%"}))}}]),t}(a.Component),w=(n(106),n(34)),x=(a.Component,function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={transform:"scale(1.0)",boxShadow:"none"},n.onMouseOver=function(){n.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},n.onMouseOut=function(){n.setState({transform:"scale(1.0)",boxShadow:"none"})},n.getStyle=function(){return{boxShadow:n.state.boxShadow,transition:"transform .2s",transform:n.state.transform}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-".concat(e,".png"),style:this.getStyle(),width:"100%",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut}))}}]),t}(a.Component)),O=n(29),D=n.n(O),j=O.transitions.scaleDown,F=(O.transitions.fadeDown,O.transitions.flip,O.transitions.helix,function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayNo:1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,n;return(null===(e=this.props)||void 0===e?void 0:e.pokemons)&&(n=this.props.pokemons,console.log("Pokelist"),console.log(n)),o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{columnWidth:180,appear:j.appear,appeared:j.appeared,enter:j.enter,entered:j.entered,leaved:j.leaved,gutterWidth:10,gutterHeight:10,appearDelay:80},null===(t=n)||void 0===t?void 0:t.map((function(e){return o.a.createElement(x,{poke:e})}))))}}]),t}(a.Component)),C=n(189),S=n(190),B=(a.Component,function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getChipStyle=function(e){switch(e){case"Bug":return"#C3D21F";case"Dark":return"#8E6956";case"Dragon":return"#8774FF";case"Electric":return"#FDE53D";case"Fairy":return"#F9ADFF";case"Fighting":return"#A85643";case"Fire":return"#FA5643";case"Flying":return"#79A4FF";case"Ghost":return"#7873D4";case"Grass":return"#8DD851";case"Ground":return"#EDCC56";case"Ice":return"#96F1FF";case"Normal":return"#BDBDAE";case"Poison":return"#AB5DA2";case"Psychic":return"#F662B1";case"Rock":return"#CDBD72";case"Stell":return"#C4C2DB";case"Water":return"#56AEFF"}},n.getEvolutions=function(e){var t=null===e||void 0===e?void 0:e.prev_evolution,a=null===e||void 0===e?void 0:e.next_evolution,r=n.state.evWidth;return t?a?o.a.createElement("div",null,o.a.createElement("h4",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t,n;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,""))},o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(null===e||void 0===e?void 0:null===(n=e.num)||void 0===n?void 0:n.replace(/^0+/,""),".png"),alt:"Generic placeholder"})))})),o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(n.props.match.params.id,".png"),alt:"Generic placeholder"}),null===a||void 0===a?void 0:a.map((function(e){var t,n;return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,""))},o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(null===e||void 0===e?void 0:null===(n=e.num)||void 0===n?void 0:n.replace(/^0+/,""),".png"),alt:"Generic placeholder"}))}))):o.a.createElement("div",null,o.a.createElement("h4",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t,n;return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,""))},o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(null===e||void 0===e?void 0:null===(n=e.num)||void 0===n?void 0:n.replace(/^0+/,""),".png"),alt:"Generic placeholder"}))})),o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(n.props.match.params.id,".png"),alt:"Generic placeholder"})):a?o.a.createElement("div",null,o.a.createElement("h4",null,"Evolutions"),o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(n.props.match.params.id,".png"),alt:"Generic placeholder"}),null===a||void 0===a?void 0:a.map((function(e){var t,n;return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,""))},o.a.createElement("img",{width:r,className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(null===e||void 0===e?void 0:null===(n=e.num)||void 0===n?void 0:n.replace(/^0+/,""),".png"),alt:"Generic placeholder"}))}))):void 0},n.state={pokemonData:{},dataLoaded:!1,evWidth:"15%"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e,t,n,a,r,l,c,i,s,u,m,d,p=this;if(null===(e=this.state)||void 0===e?void 0:e.pokemonData){var v=this.state.pokemonData.pokemon;d=null===v||void 0===v?void 0:v.find((function(e){return e.id==p.props.match.params.id})),console.log(d),console.log(v)}else console.log("no data");return o.a.createElement(w.a,{style:{paddingTop:"100px",paddingBottom:"20px"}},o.a.createElement(C.a,null,o.a.createElement("img",{width:"30%",className:"mr-3",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(this.props.match.params.id,".png"),alt:"Generic placeholder"}),o.a.createElement(C.a.Body,null,o.a.createElement("h1",null,null===(t=d)||void 0===t?void 0:t.name),o.a.createElement("div",null,null===(n=d)||void 0===n?void 0:null===(a=n.type)||void 0===a?void 0:a.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{label:e,color:"primary",style:{backgroundColor:p.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),o.a.createElement("h5",null,"Height: ",null===(r=d)||void 0===r?void 0:r.height),o.a.createElement("h5",null,"Weight: ",null===(l=d)||void 0===l?void 0:l.weight),o.a.createElement("h5",null,"The spawn chance of this pok\xe9mon is ",null===(c=d)||void 0===c?void 0:c.spawn_chance," ","and the number of average spawns is ",null===(i=d)||void 0===i?void 0:i.avg_spawns," ","and it usually spawns at ",null===(s=d)||void 0===s?void 0:s.spawn_time,"."),o.a.createElement("br",null),o.a.createElement("h4",null,"Weakness"),o.a.createElement("div",null,null===(u=d)||void 0===u?void 0:null===(m=u.weaknesses)||void 0===m?void 0:m.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{size:"small",label:e,color:"primary",style:{backgroundColor:p.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),this.getEvolutions(d))))}}]),t}(a.Component)),G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pokemons:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],pokemonData:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(v.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/react-pokedex-carousel",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginTop:"85px"}},o.a.createElement(F,{pokemons:e.state.pokemons})))}}),o.a.createElement(h.b,{path:"/pokemon/:id",render:function(e){return o.a.createElement(B,e)}}),o.a.createElement(h.a,{exact:!0,from:"/",to:"/react-pokedex-caro"}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){e.exports=n(171)},82:function(e,t,n){},83:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.4eff4c23.chunk.js.map