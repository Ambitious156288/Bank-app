(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(e,s,n){"use strict";n.r(s);var t=n(0),g=n.n(t),v=n(28),a=n(26),r=n(101);function o(){var e=Object(v.a)(["\n    ","\n \n    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');\n\n    *, *::before, *::after{\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    html{\n        font-size: 62.5%;\n    }\n\n    body{\n        font-size: 1.6rem;\n        font-family: 'Montserrat', sans-serif;\n        \n    }\n\n"]);return o=function(){return e},e}var l=Object(a.createGlobalStyle)(o(),r.normalize),c={colors:{dark:{grey100:"hsl(0, 0%, 98%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"black"}}},i=n(95),m=n(79),u=function(){return g.a.createElement(g.a.Fragment,null,"Desktop")},p=function(){return g.a.createElement(g.a.Fragment,null,"Payments")},f=function(){return g.a.createElement(g.a.Fragment,null,"Finance")},b=function(){return g.a.createElement(g.a.Fragment,null,"Help")},d=n(98),h=n(356),k=n(357),E=n(360),y=n(358),w=n(364),z=n(363),j=n(361),x=n(355);function F(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return F=function(){return e},e}function O(){var e=Object(v.a)(["\n  font-size: 14px;\n"]);return O=function(){return e},e}var C=a.default.h1(O()),S=a.default.p(F()),U=function(e){return g.a.createElement(x.a,Object.assign({},e,{direction:"left"}))},D=function(e){var s=e.textUp,n=e.textBottom,t=g.a.useState(!0),v=Object(d.a)(t,2),a=v[0],r=v[1],o=U,l=function(){r(!1)};return g.a.createElement(g.a.Fragment,null,g.a.createElement(z.a,{open:a,autoHideDuration:7e3,onClose:l,TransitionComponent:o},g.a.createElement(j.a,{onClose:l,severity:"error"},g.a.createElement(C,null,s),g.a.createElement(S,null,n))))},P=n(342),L=(n(324),function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(P.a,{searchable:!0,defaultCountry:"US",countries:["US","PL","DE","FR"],customLabels:{US:"English",PL:"Polish",DE:"German",FR:"French"},selectedSize:18,optionsSize:14}))}),q=Object(k.a)({root:{flexGrow:1,maxWidth:800,margin:20}}),G=function(e){var s=e.items,n=void 0===s?[]:s,t=q(),v=g.a.useState(0),a=Object(d.a)(v,2),r=a[0],o=a[1],l=Object(w.a)(),c=l.t,m=l.i18n,u=function(e){m.changeLanguage(e)};return g.a.createElement(g.a.Fragment,null,g.a.createElement(h.a,{className:t.root,elevation:15},g.a.createElement(E.a,{value:r,onChange:function(e,s){o(s)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary"},n.map(function(e){return g.a.createElement(y.a,{key:e.content,style:{fontSize:17},icon:e.icon,label:c(e.content),component:i.b,to:e.to})}))),g.a.createElement("button",{type:"submit",onClick:function(){return u("pl")}},"pl"),g.a.createElement("button",{type:"submit",onClick:function(){return u("en")}},"en"),g.a.createElement(D,{textUp:"Uwa\u017caj! Przest\u0119pcy podszywaj\u0105 si\u0119 pod pracownik\xf3w infolinii.",textBottom:"Oszu\u015bci pr\xf3buj\u0105 podszywa\u0107 si\u0119 pod pracownik\xf3w infolinii lub dzia\u0142u bezpiecze\u0144stwa banku."}),g.a.createElement(L,null))},H=n(339),M=n.n(H),N=n(341),T=n.n(N),B={desktop:"/",payments:"/payments",finance:"/finance",help:"/help",login:"/login",register:"/register"};s.default=function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(l,null),g.a.createElement(a.ThemeProvider,{theme:c},g.a.createElement(i.a,null,g.a.createElement(G,{items:[{content:"Desktop",to:B.desktop,icon:g.a.createElement(M.a,null)},{content:"Payments",to:B.payments,icon:g.a.createElement(T.a,null)},{content:"Finance",to:B.finance,icon:g.a.createElement(T.a,null)},{content:"Help",to:B.help,icon:g.a.createElement(T.a,null)}]}),g.a.createElement(m.c,null,g.a.createElement(m.a,{exact:!0,path:B.desktop,component:u}),g.a.createElement(m.a,{path:B.payments,component:p}),g.a.createElement(m.a,{path:B.finance,component:f}),g.a.createElement(m.a,{path:B.help,component:b})))))}},94:function(e,s,n){var t={"./ad.svg":102,"./ae.svg":103,"./af.svg":104,"./ag.svg":105,"./ai.svg":106,"./al.svg":107,"./am.svg":108,"./ao.svg":109,"./ar.svg":110,"./as.svg":111,"./at.svg":112,"./au.svg":113,"./aw.svg":114,"./az.svg":115,"./ba.svg":116,"./bb.svg":117,"./bd.svg":118,"./be.svg":119,"./bf.svg":120,"./bg.svg":121,"./bh.svg":122,"./bi.svg":123,"./bj.svg":124,"./bm.svg":125,"./bo.svg":126,"./br.svg":127,"./bs.svg":128,"./bt.svg":129,"./bw.svg":130,"./by.svg":131,"./bz.svg":132,"./ca.svg":133,"./cd.svg":134,"./cf.svg":135,"./cg.svg":136,"./ch.svg":137,"./ci.svg":138,"./ck.svg":139,"./cl.svg":140,"./cm.svg":141,"./cn.svg":142,"./co.svg":143,"./cr.svg":144,"./cu.svg":145,"./cv.svg":146,"./cw.svg":147,"./cy.svg":148,"./cz.svg":149,"./de.svg":150,"./dj.svg":151,"./dk.svg":152,"./dm.svg":153,"./do.svg":154,"./dz.svg":155,"./ec.svg":156,"./ee.svg":157,"./eg.svg":158,"./er.svg":159,"./es.svg":160,"./et.svg":161,"./fi.svg":162,"./fj.svg":163,"./fk.svg":164,"./fm.svg":165,"./fo.svg":166,"./fr.svg":167,"./ga.svg":168,"./gb.svg":169,"./gd.svg":170,"./ge.svg":171,"./gg.svg":172,"./gh.svg":173,"./gi.svg":174,"./gl.svg":175,"./gm.svg":176,"./gn.svg":177,"./gq.svg":178,"./gr.svg":179,"./gt.svg":180,"./gu.svg":181,"./gw.svg":182,"./hk.svg":183,"./hn.svg":184,"./hr.svg":185,"./ht.svg":186,"./hu.svg":187,"./id.svg":188,"./ie.svg":189,"./il.svg":190,"./im.svg":191,"./in.svg":192,"./io.svg":193,"./iq.svg":194,"./ir.svg":195,"./is.svg":196,"./it.svg":197,"./je.svg":198,"./jm.svg":199,"./jo.svg":200,"./jp.svg":201,"./ke.svg":202,"./kg.svg":203,"./kh.svg":204,"./ki.svg":205,"./km.svg":206,"./kn.svg":207,"./kp.svg":208,"./kr.svg":209,"./kw.svg":210,"./ky.svg":211,"./kz.svg":212,"./la.svg":213,"./lb.svg":214,"./li.svg":215,"./lk.svg":216,"./lr.svg":217,"./ls.svg":218,"./lt.svg":219,"./lu.svg":220,"./lv.svg":221,"./ly.svg":222,"./ma.svg":223,"./mc.svg":224,"./md.svg":225,"./me.svg":226,"./mg.svg":227,"./mh.svg":228,"./mk.svg":229,"./ml.svg":230,"./mm.svg":231,"./mn.svg":232,"./mo.svg":233,"./mp.svg":234,"./mq.svg":235,"./mr.svg":236,"./ms.svg":237,"./mt.svg":238,"./mu.svg":239,"./mv.svg":240,"./mw.svg":241,"./mx.svg":242,"./my.svg":243,"./mz.svg":244,"./na.svg":245,"./nato.svg":246,"./ne.svg":247,"./nf.svg":248,"./ng.svg":249,"./ni.svg":250,"./nl.svg":251,"./no.svg":252,"./np.svg":253,"./nr.svg":254,"./nu.svg":255,"./nz.svg":256,"./om.svg":257,"./pa.svg":258,"./pe.svg":259,"./pf.svg":260,"./pg.svg":261,"./ph.svg":262,"./pk.svg":263,"./pl.svg":264,"./pn.svg":265,"./pr.svg":266,"./ps.svg":267,"./pt.svg":268,"./pw.svg":269,"./py.svg":270,"./qa.svg":271,"./ro.svg":272,"./rs.svg":273,"./ru.svg":274,"./rw.svg":275,"./sa.svg":276,"./sb.svg":277,"./sc.svg":278,"./sd.svg":279,"./se.svg":280,"./sg.svg":281,"./si.svg":282,"./sk.svg":283,"./sl.svg":284,"./sm.svg":285,"./sn.svg":286,"./so.svg":287,"./sr.svg":288,"./ss.svg":289,"./st.svg":290,"./sv.svg":291,"./sx.svg":292,"./sy.svg":293,"./sz.svg":294,"./tc.svg":295,"./td.svg":296,"./tg.svg":297,"./th.svg":298,"./tibet.svg":299,"./tj.svg":300,"./tk.svg":301,"./tm.svg":302,"./tn.svg":303,"./to.svg":304,"./tr.svg":305,"./tt.svg":306,"./tv.svg":307,"./tw.svg":308,"./tz.svg":309,"./ua.svg":310,"./ug.svg":311,"./us.svg":312,"./uy.svg":313,"./uz.svg":314,"./ve.svg":315,"./vi.svg":316,"./vn.svg":317,"./vu.svg":318,"./ws.svg":319,"./ye.svg":320,"./za.svg":321,"./zm.svg":322,"./zw.svg":323};function g(e){var s=v(e);return n(s)}function v(e){var s=t[e];if(!(s+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s}g.keys=function(){return Object.keys(t)},g.resolve=v,e.exports=g,g.id=94}}]);
//# sourceMappingURL=4.9398a11a.chunk.js.map