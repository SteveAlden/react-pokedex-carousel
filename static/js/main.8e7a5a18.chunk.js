(this["webpackJsonpreact-poke-caro"]=this["webpackJsonpreact-poke-caro"]||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),i=(a(47),a(7)),c=a(5),s=a(8),u=a(9),d=a(10),m=a(14),p=a.n(m),v=a(29),h=a(24),g=a(197),b=a(198);var f=function(){return o.a.createElement("div",{className:"center-navbar"},o.a.createElement(g.a,{fixed:"top",style:{backdropFilter:"blur(10px) saturate(150%)",backgroundColor:"rgba(20,20,20,0.5)"},variant:"dark"},o.a.createElement(b.a.Link,{href:"/react-pokedex-carousel"},o.a.createElement(g.a.Brand,null,o.a.createElement("h3",null,o.a.createElement("img",{alt:"",src:"https://files.thetriangle.org/assets/pokemon/ball-master.png",height:"35",className:"d-inline-block align-top"}),"   ","Steve's Pok\xe9dex")))))},E=a(32),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement(E.a,{fluid:!0,style:{marginTop:"2vh"}},o.a.createElement("span",null,o.a.createElement("p",{className:"copyright pull-right",align:"center"},"\xa9 ",(new Date).getFullYear()," S Steve Alden, all rights reserved. Made with ",o.a.createElement("img",{height:"18px",alt:"LOVE",src:"https://res.cloudinary.com/aldencloud/image/upload/v1585305047/Heart/red-heart.png"})))))}}]),t}(n.Component),k=a(42),w=a.n(k),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemonpng/poke-".concat(e,".png"),width:"100%"}))}}]),t}(n.Component),x=(a(108),n.Component,a(109),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={transform:"scale(1.0)",boxShadow:"none"},a.onMouseOver=function(){a.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},a.onMouseOut=function(){a.setState({transform:"scale(1.0)",boxShadow:"none"})},a.getStyle=function(){return{boxShadow:a.state.boxShadow,transition:"transform .2s",transform:a.state.transform,borderRadius:"20px"}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.poke;return console.log(e),o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{src:"https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-".concat(e,".png"),style:this.getStyle(),width:"100%",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onTouchStart:this.onMouseOver,onTouchEnd:this.onMouseOut}))}}]),t}(n.Component)),D=a(30),S=a.n(D),C=D.transitions.scaleDown,j=(D.transitions.fadeDown,D.transitions.flip,D.transitions.helix,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayNo:1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a;return(null===(e=this.props)||void 0===e?void 0:e.pokemons)&&(a=this.props.pokemons,console.log("Pokelist"),console.log(a)),o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{columnWidth:190,appear:C.appear,appeared:C.appeared,enter:C.enter,entered:C.entered,leaved:C.leaved,gutterWidth:15,gutterHeight:15,appearDelay:80},null===(t=a)||void 0===t?void 0:t.map((function(e){return o.a.createElement(x,{poke:e})}))))}}]),t}(n.Component)),F=a(193),A=a(196),M=(n.Component,a(194)),B=a(195),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={evWidth:"30%",transform:"scale(1.0)",boxShadow:"none"},a.onMouseOver=function(){a.setState({transform:"scale(1.05)",boxShadow:"0px 5px 15px 5px rgba(87,255,196,0.5)"})},a.onMouseOut=function(){a.setState({transform:"scale(1.0)",boxShadow:"none"})},a.getStyle=function(){return{boxShadow:a.state.boxShadow,transition:"transform .2s",transform:a.state.transform,padding:"5px",borderRadius:"50%",margin:"5px",width:"100px",height:"100px",backgroundColor:"rgb(35, 35, 35)",border:"5px solid rgb(20, 20, 20)"}},a.createEvolutionImage=function(e){return o.a.createElement(v.b,{style:{textDecoration:"none"},to:"/pokemon/".concat(e)},o.a.createElement("img",{style:a.getStyle(),onMouseOver:a.onMouseOver,onMouseOut:a.onMouseOut,onTouchStart:a.onMouseOver,onTouchEnd:a.onMouseOut,src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(e,".png"),alt:"Generic placeholder"}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.createEvolutionImage(this.props.imageid)}}]),t}(n.Component),R=(a(174),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getStatName=function(e){switch(e){case"speed":return"Speed    ";case"attack":return"Attack   ";case"defense":return"Defence  ";case"special-attack":return"S.Attack ";case"special-defense":return"S.Defence";case"hp":return"Hp"}},a.getDiv=function(e){var t,n=null===e||void 0===e?void 0:e.base_stat;return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(B.a,{align:"left",className:"col-sm-1 col-md-2"},o.a.createElement("h5",null,a.getStatName(null===e||void 0===e?void 0:null===(t=e.stat)||void 0===t?void 0:t.name))),o.a.createElement(B.a,{className:"col-sm-11 col-md-10",align:"left"},o.a.createElement("div",{class:"progress",style:{height:"15px",backgroundColor:"rgb(25, 25, 25)"}},null===e||void 0===e?void 0:e.base_stat,o.a.createElement("div",{class:"progress-bar",style:{width:n+"%",backgroundImage:"linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%"}})))),o.a.createElement("br",null))},a.getNewDiv=function(){return o.a.createElement(E.a,{style:{}},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-md-6"},o.a.createElement("h3",{class:"progress-title"},"HTML5"),o.a.createElement("div",{class:"progress"},o.a.createElement("div",{class:"progress-bar progress-bar-striped",style:{width:"50%"}}),o.a.createElement("div",{class:"progress-value"},o.a.createElement("span",null,"42"),"%")))))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a,n,r=this;(null===(e=this.props)||void 0===e?void 0:e.stats)&&(a=null===(n=this.props)||void 0===n?void 0:n.stats);return o.a.createElement("div",null,null===(t=a)||void 0===t?void 0:t.map((function(e){return r.getDiv(e)})))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateComponent=function(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e),n=p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"),o=p.a.get(t);p.a.all([n,o]).then(p.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[0].data,r=t[1].data,l=r.species;a.setState({pokemonData:o}),a.setState({pokeApiData:r}),p.a.get(l.url).then((function(e){return a.setState({speciesDescription:e.data},console.log(e.data))})),console.log(l,l.url,a.state.speciesDescription)}))).catch((function(e){console.error(e)}))},a.getChipStyle=function(e){switch(e){case"Bug":return"#C3D21F";case"Dark":return"#8E6956";case"Dragon":return"#8774FF";case"Electric":return"#FDE53D";case"Fairy":return"#F9ADFF";case"Fighting":return"#A85643";case"Fire":return"#FA5643";case"Flying":return"#79A4FF";case"Ghost":return"#7873D4";case"Grass":return"#8DD851";case"Ground":return"#EDCC56";case"Ice":return"#96F1FF";case"Normal":return"#BDBDAE";case"Poison":return"#AB5DA2";case"Psychic":return"#F662B1";case"Rock":return"#CDBD72";case"Stell":return"#C4C2DB";case"Water":return"#56AEFF"}},a.createRowCol=function(e,t){return o.a.createElement("h5",null,o.a.createElement(M.a,null,o.a.createElement(B.a,{align:"left"},e),o.a.createElement(B.a,{align:"right"},t)))},a.getDivStyle=function(e){switch(e){case"filled":return{borderRadius:"12px",paddingTop:"2vh",paddingBottom:"2vh",backgroundColor:a.state.bgColor};case"empty":return{padding:"2vh 5vw 1vh 5vw",border:"5px solid rgb(25, 25, 25)",borderRadius:"12px"};case"stats":return{padding:"2vh 5vw 1vh 5vw",backgroundColor:a.state.bgColor,borderRadius:"12px"}}},a.getEvolutions=function(e){var t=null===e||void 0===e?void 0:e.prev_evolution,n=null===e||void 0===e?void 0:e.next_evolution;return t?n?o.a.createElement("div",{style:a.getDivStyle("filled")},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(N,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(N,{imageid:a.props.match.params.id}),null===n||void 0===n?void 0:n.map((function(e){var t;return(o.a.createElement(N,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):o.a.createElement("div",{style:a.getDivStyle("filled")},o.a.createElement("h3",null,"Evolutions"),null===t||void 0===t?void 0:t.map((function(e){var t;return(o.a.createElement(N,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))})),o.a.createElement(N,{imageid:a.props.match.params.id})):n?o.a.createElement("div",{style:a.getDivStyle("filled")},o.a.createElement("h3",null,"Evolutions"),o.a.createElement(N,{imageid:a.props.match.params.id}),null===n||void 0===n?void 0:n.map((function(e){var t;return(o.a.createElement(N,{imageid:null===e||void 0===e?void 0:null===(t=e.num)||void 0===t?void 0:t.replace(/^0+/,"")}))}))):void 0},a.getHr=function(){return o.a.createElement("hr",{style:{backgroundColor:"rgb(25, 25, 25)",border:"2px solid rgb(25, 25, 25)",width:"60%"}})},a.state={pokemonNumber:a.props.match.params.id,pokemonData:{},pokeApiData:{},speciesDescription:{},flavourText:{},dataLoaded:!1,evWidth:"30%",textColor:"#898989",bodyColor:"#252525",mediaColor:"#363636",bgColor:"rgb(25, 25, 25)",border:"5px solid rgb(15, 15, 15)"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){e.match.params.id;return this.props.match.params.id===e.match.params.id||this.updateComponent(e.match.params.id)}},{key:"componentDidMount",value:function(){this.updateComponent(this.props.match.params.id)}},{key:"render",value:function(){var e,t,a,n,r,l,i,c,s,u,d,m,p,v,h,g,b,f,y=this;if(null===(e=this.state)||void 0===e?void 0:e.pokemonData){var k=this.state.pokemonData.pokemon;b=null===k||void 0===k?void 0:k.find((function(e){return e.id==y.props.match.params.id}))}else console.log("no data");if(null===(t=this.state)||void 0===t?void 0:t.speciesDescription){var w,O=(null===(w=this.state)||void 0===w?void 0:w.speciesDescription).flavor_text_entries;f=null===O||void 0===O?void 0:O.find((function(e){var t,a;return"en"===(null===e||void 0===e?void 0:null===(t=e.language)||void 0===t?void 0:t.name)&"omega-ruby"===(null===e||void 0===e?void 0:null===(a=e.version)||void 0===a?void 0:a.name)})),console.log("flavourText",f)}return o.a.createElement(E.a,{style:{marginTop:"10vh",color:this.state.textColor}},o.a.createElement(M.a,null,o.a.createElement("img",{width:"50%",className:"mr-auto",src:"https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-".concat(this.props.match.params.id,".png"),alt:"Generic placeholder",style:{margin:"auto"}})),o.a.createElement("div",{style:{margin:"auto"},align:"center"},this.getHr(),o.a.createElement("h1",{align:"center"},null===(a=b)||void 0===a?void 0:a.name),this.getHr(),o.a.createElement("div",null,null===(n=b)||void 0===n?void 0:null===(r=n.type)||void 0===r?void 0:r.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{label:e,color:"primary",style:{backgroundColor:y.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),o.a.createElement("div",{style:this.getDivStyle("empty")},o.a.createElement("h5",{style:{textAlign:"justify"}},null===(l=f)||void 0===l?void 0:l.flavor_text)),o.a.createElement("br",null),o.a.createElement("div",{style:this.getDivStyle("empty")},this.createRowCol("Number :",null===(i=b)||void 0===i?void 0:i.id),this.createRowCol("Height :",null===(c=b)||void 0===c?void 0:c.height),this.createRowCol("Weight :",null===(s=b)||void 0===s?void 0:s.weight),this.createRowCol("Spawn chance :",null===(u=b)||void 0===u?void 0:u.spawn_chance),this.createRowCol("Avg Spawn :",null===(d=b)||void 0===d?void 0:d.avg_spawns),this.createRowCol("Spawn time :",null===(m=b)||void 0===m?void 0:m.spawn_time)),o.a.createElement("br",null),o.a.createElement("div",{style:this.getDivStyle("stats")},o.a.createElement("h3",null,"Base Stats"),o.a.createElement(R,{stats:null===(p=this.state)||void 0===p?void 0:null===(v=p.pokeApiData)||void 0===v?void 0:v.stats})),o.a.createElement("br",null),o.a.createElement("div",{style:this.getDivStyle("filled")},o.a.createElement("h3",null,"Weakness"),null===(h=b)||void 0===h?void 0:null===(g=h.weaknesses)||void 0===g?void 0:g.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{size:"small",label:e,color:"primary",style:{backgroundColor:y.getChipStyle(e)}})," ")}))),o.a.createElement("br",null),this.getEvolutions(b)))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pokemons:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151],pokemonData:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(t){return e.setState({pokemonData:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(v.a,null,o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/react-pokedex-carousel",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginTop:"120px"}},o.a.createElement(j,{pokemons:e.state.pokemons})))}}),o.a.createElement(h.b,{path:"/pokemon/:id",render:function(e){return o.a.createElement(T,e)}}),o.a.createElement(h.a,{exact:!0,from:"/",to:"/react-pokedex-carousel"}))),o.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){},81:function(e,t,a){e.exports=a(175)}},[[81,1,2]]]);
//# sourceMappingURL=main.8e7a5a18.chunk.js.map