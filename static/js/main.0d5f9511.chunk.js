(this["webpackJsonpreact-poke-caro"]=this["webpackJsonpreact-poke-caro"]||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),l=n.n(r),i=(n(49),n(8)),c=n(6),s=n(9),u=n(10),d=n(11),m=n(25),p=n.n(m),v=n(26),h=n(22),g=n(193),b=n(194);var E=function(){return o.a.createElement("div",{className:"center-navbar"},o.a.createElement(g.a,{fixed:"top",style:{backdropFilter:"blur(10px) saturate(150%)",backgroundColor:"rgba(20,20,20,0.5)"},variant:"dark"},o.a.createElement(b.a.Link,{href:"/react-pokedex-carousel"},o.a.createElement(g.a.Brand,null,o.a.createElement("h3",null,o.a.createElement("img",{alt:"",src:"https://files.thetriangle.org/assets/pokemon/ball-master.png",height:"35",className:"d-inline-block align-top"}),"   ","Steve's Pok\xe9dex")))))},f=n(42),k=n.n(f),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemonpng/poke-".concat(e,".png"),width:"100%"}))}}]),t}(a.Component),x=(n(105),n(32)),w=(a.Component,n(106),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={transform:"scale(1.0)",boxShadow:"none"},n.onMouseOver=function(){n.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},n.onMouseOut=function(){n.setState({transform:"scale(1.0)",boxShadow:"none"})},n.getStyle=function(){return{boxShadow:n.state.boxShadow,transition:"transform .2s",transform:n.state.transform,borderRadius:"20px"}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-".concat(e,".png"),style:this.getStyle(),width:"100%",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onTouchStart:this.onMouseOver,onTouchEnd:this.onMouseOut}))}}]),t}(a.Component)),O=n(30),C=n.n(O),S=O.transitions.scaleDown,D=(O.transitions.fadeDown,O.transitions.flip,O.transitions.helix,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayNo:1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,n;return(null===(e=this.props)||void 0===e?void 0:e.pokemons)&&(n=this.props.pokemons,console.log("Pokelist"),console.log(n)),o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{columnWidth:190,appear:S.appear,appeared:S.appeared,enter:S.enter,entered:S.entered,leaved:S.leaved,gutterWidth:15,gutterHeight:15,appearDelay:80},null===(t=n)||void 0===t?void 0:t.map((function(e){return o.a.createElement(w,{poke:e})}))))}}]),t}(a.Component)),j=n(189),F=n(192),M=(a.Component,n(190)),B=n(191),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={evWidth:"30%",transform:"scale(1.0)",boxShadow:"none"},n.onMouseOver=function(){n.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},n.onMouseOut=function(){n.setState({transform:"scale(1.0)",boxShadow:"none"})},n.getStyle=function(){return{boxShadow:n.state.boxShadow,transition:"transform .2s",transform:n.state.transform,padding:"5px",borderRadius:"50%",margin:"5px",width:"100px",height:"100px",backgroundColor:"rgb(35, 35, 35)",border:"5px solid rgb(20, 20, 20)"}},n.createEvolutionImage=function(e){return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{style:n.getStyle(),onMouseOver:n.onMouseOver,onMouseOut:n.onMouseOut,onTouchStart:n.onMouseOver,onTouchEnd:n.onMouseOut,src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(e,".png"),alt:"Generic placeholder"}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.createEvolutionImage(this.props.imageid)}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getChipStyle=function(e){switch(e){case"Bug":return"#C3D21F";case"Dark":return"#8E6956";case"Dragon":return"#8774FF";case"Electric":return"#FDE53D";case"Fairy":return"#F9ADFF";case"Fighting":return"#A85643";case"Fire":return"#FA5643";case"Flying":return"#79A4FF";case"Ghost":return"#7873D4";case"Grass":return"#8DD851";case"Ground":return"#EDCC56";case"Ice":return"#96F1FF";case"Normal":return"#BDBDAE";case"Poison":return"#AB5DA2";case"Psychic":return"#F662B1";case"Rock":return"#CDBD72";case"Stell":return"#C4C2DB";case"Water":return"#56AEFF"}},n.createRowCol=function(e,t){return o.a.createElement("h5",null,o.a.createElement(M.a,null,o.a.createElement(B.a,{align:"left"},e),o.a.createElement(B.a,{align:"right"},t)))},n.getDivStyle=function(){return{borderRadius:"12px",paddingTop:"2vh",paddingBottom:"2vh",backgroundColor:n.state.bgColor}},n.getEvolutions=function(e){var t=null===e||void 0===e?void 0:e.prev_evolution,a=null===e||void 0===e?void 0:e.next_evolution;return t?a?o.a.createElement("div",{style:n.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(A,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(A,{imageid:n.props.match.params.id}),null===a||void 0===a?void 0:a.map((function(e){var t;return(o.a.createElement(A,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):o.a.createElement("div",{style:n.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(A,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(A,{imageid:n.props.match.params.id})):a?o.a.createElement("div",{style:n.getDivStyle()},o.a.createElement("h3",null,"Evolutions"),o.a.createElement(A,{imageid:n.props.match.params.id}),null===a||void 0===a?void 0:a.map((function(e){var t;return(o.a.createElement(A,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):void 0},n.state={pokemonData:{},dataLoaded:!1,evWidth:"30%",textColor:"#898989",bodyColor:"#252525",mediaColor:"#363636",bgColor:"rgb(25, 25, 25)",border:"5px solid rgb(15, 15, 15)"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e,t,n,a,r,l,i,c,s,u,d,m,p,v=this;if(null===(e=this.state)||void 0===e?void 0:e.pokemonData){var h=this.state.pokemonData.pokemon;p=null===h||void 0===h?void 0:h.find((function(e){return e.id==v.props.match.params.id})),console.log(p),console.log(h)}else console.log("no data");return o.a.createElement(x.a,{style:{paddingBottom:"10vh",marginTop:"15vh",color:this.state.textColor}},o.a.createElement(M.a,null,o.a.createElement("img",{width:"50%",className:"mr-auto",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(this.props.match.params.id,".png"),alt:"Generic placeholder",style:{margin:"auto"}})),o.a.createElement("div",{style:{margin:"auto"},align:"center"},o.a.createElement("hr",{style:{border:"1px solid #898989",width:"80%"}}),o.a.createElement("h1",{align:"center"},null===(t=p)||void 0===t?void 0:t.name),o.a.createElement("hr",{style:{border:"1px solid #898989",width:"80%"}}),o.a.createElement("div",null,null===(n=p)||void 0===n?void 0:null===(a=n.type)||void 0===a?void 0:a.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{label:e,color:"primary",style:{backgroundColor:v.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),o.a.createElement("div",{style:{padding:"2vh 5vw 2vh 5vw",border:"5px solid rgb(25, 25, 25)",borderRadius:"12px"}},this.createRowCol("Number :",null===(r=p)||void 0===r?void 0:r.id),this.createRowCol("Height :",null===(l=p)||void 0===l?void 0:l.height),this.createRowCol("Weight :",null===(i=p)||void 0===i?void 0:i.weight),this.createRowCol("Spawn chance :",null===(c=p)||void 0===c?void 0:c.spawn_chance),this.createRowCol("Avg Spawn :",null===(s=p)||void 0===s?void 0:s.avg_spawns),this.createRowCol("Spawn time :",null===(u=p)||void 0===u?void 0:u.spawn_time)),o.a.createElement("br",null),o.a.createElement("div",{style:{backgroundColor:this.state.bgColor,borderRadius:"12px",paddingTop:"2vh",paddingBottom:"2vh"}},o.a.createElement("h3",null,"Weakness"),null===(d=p)||void 0===d?void 0:null===(m=d.weaknesses)||void 0===m?void 0:m.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{size:"small",label:e,color:"primary",style:{backgroundColor:v.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),this.getEvolutions(p)))}}]),t}(a.Component),W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pokemons:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],pokemonData:{}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(v.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/react-pokedex-carousel",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginTop:"120px"}},o.a.createElement(D,{pokemons:e.state.pokemons})))}}),o.a.createElement(h.b,{path:"/pokemon/:id",render:function(e){return o.a.createElement(R,e)}}),o.a.createElement(h.a,{exact:!0,from:"/",to:"/react-pokedex-carousel"}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){},78:function(e,t,n){e.exports=n(171)}},[[78,1,2]]]);
//# sourceMappingURL=main.0d5f9511.chunk.js.map