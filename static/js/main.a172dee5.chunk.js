(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(59),l=a.n(c),o=a(2),s=a.n(o),u=a(5),i=a(60),d=a(61),m=a(64),p=a(63),f=a(191),v=(a(71),a(190)),h=a(32),E=a(34),b=function(e){return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-4"},r.a.createElement(f.a,{style:{width:"15rem"}},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(f.a.Title,null,"infected")),r.a.createElement("div",{className:"col-4"},r.a.createElement(h.a,{icon:E.a,color:"blue",size:"lg"}))),r.a.createElement("h5",null,e.data.confirmed.value)))),r.a.createElement("div",{className:"col-xs-12 col-md-4"},r.a.createElement(f.a,{style:{width:"15rem"}},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(f.a.Title,null,"Recovered")),r.a.createElement("div",{className:"col-4"},r.a.createElement(v.a,{color:"green",size:24}))),r.a.createElement("h5",null,e.data.recovered.value)))),r.a.createElement("div",{className:"col-xs-12 col-md-4"},r.a.createElement(f.a,{style:{width:"15rem"}},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(f.a.Title,null,"Deaths")),r.a.createElement("div",{className:"col-4"},r.a.createElement(h.a,{icon:E.b,color:"red",size:"lg"}))),r.a.createElement("h5",null,e.data.deaths.value))))),r.a.createElement("span",{className:"mb-2 text-muted"},"Last update: ",new Date(e.data.lastUpdate).toUTCString()))},y=a(20),w=a(21),g=a.n(w),N="https://covid19.mathdro.id/api",x=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,l,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.next=5,g.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,l=r.deaths,o=r.recovered,u=r.lastUpdate,e.abrupt("return",{confirmed:c,deaths:l,recovered:o,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(N+"/countries");case 3:return t=e.sent,a=t.data.countries,console.log(a),e.abrupt("return",a.map((function(e){return e.name})));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(N+"/daily");case 3:return t=e.sent,a=t.data,console.log(a),n=a.map((function(e){return{totalConfirmed:e.totalConfirmed,reportDate:e.reportDate,totalDeaths:e.deaths.total}})),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(y.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),o),r.a.createElement("div",{class:"countrypicker"},r.a.createElement("strong",{className:"mr-3"},"Select the country: "),r.a.createElement("select",{defaultValue:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"global"),l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},k=a(62),D=function(e){var t=Object(n.useState)([]),a=Object(y.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",null,r.a.createElement(k.Line,{data:{labels:c.map((function(e){return e.reportDate})),datasets:[{label:"Infected",data:c.map((function(e){return e.totalConfirmed})),borderColor:"blue",pointRadius:0,borderWidth:2},{data:c.map((function(e){return e.totalDeaths})),label:"Deaths",borderColor:"red",pointRadius:0,borderWidth:2}]},options:{elements:{line:{fill:!0}}}}))},S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x(t);case 3:a=e.sent,console.log(a),n.setState({data:a,country:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:"",loaded:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t,loaded:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data;e.country;return this.state.loaded?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"mt-2 mb-3"},r.a.createElement(C,{handleCountryChange:this.handleCountryChange})),r.a.createElement("div",{className:"mb-2"},r.a.createElement(b,{data:t})),r.a.createElement("div",{className:""},r.a.createElement(D,null))):null}}]),a}(r.a.Component);a(186);l.a.render(r.a.createElement(S,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(187)}},[[65,1,2]]]);
//# sourceMappingURL=main.a172dee5.chunk.js.map