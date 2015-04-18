
(function(e){var t="openerActiveClass",n="click touchend",r="left",i="doCollapseAll",s="position",o="trigger",u="disableSelection_dropotron",a="addClass",f="doCollapse",l=!1,c="outerWidth",h="removeClass",p="preventDefault",d="length",v="dropotron",m="clearTimeout",g="right",y="parent",b=!0,w="speed",E="none",S="stopPropagation",x="doExpand",T=":visible",N="absolute",C="css",k="center",L="toggle",A="baseZIndex",O="offsetX",M="alignment",_="submenuClassPrefix",D="children",P="hover",H="relative",B="doToggle",j="ul",F="z-index",I="opacity",q="find",R="opener",U="px",z=null,W="hide",X="offset",V="detach",$="fast";e.fn[u]=function(){return e(this)[C]("user-select",E)[C]("-khtml-user-select",E)[C]("-moz-user-select",E)[C]("-o-user-select",E)[C]("-webkit-user-select",E)},e.fn[v]=function(t){var n;if(this[d]==0)return e(this);if(this[d]>1)for(n=0;n<this[d];n++)e(this[n])[v](t);return e[v](e.extend({selectorParent:e(this)},t))},e[v]=function(E){var et=e.extend({selectorParent:z,baseZIndex:1e3,menuClass:v,expandMode:P,hoverDelay:150,hideDelay:250,openerClass:R,openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:$,easing:"swing",alignment:r,offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:b,detach:b,cloneOnDetach:b},E),tt=et.selectorParent,nt=tt[q](j),rt=e("body"),it=e("body,html"),st=e(window),ot=l,ut=z,at=z;tt.on(i,function(){nt[o](f)}),nt.each(function(){var i=e(this),d=i[y]();et.hideDelay>0&&i.add(d).on("mouseleave",function(){window[m](at),at=window.setTimeout(function(){i[o](f)},et.hideDelay)}),i[u]()[W]()[a](et.menuClass)[C](s,N).on("mouseenter",function(){window[m](at)}).on(x,function(){var n,u,p,v,E,S,x,_,D,P,B;if(i.is(T))return l;window[m](at),nt.each(function(){var t=e(this);e.contains(t.get(0),d.get(0))||t[o](f)}),n=d[X](),u=d[s](),p=d[y]()[s](),v=d[c](),E=i[c](),S=i[C](F)==et[A];if(S){et[V]?x=n:x=u,P=x.top+d.outerHeight()+et.globalOffsetY,_=et[M],i[h](r)[h](g)[h](k);switch(et[M]){case g:D=x[r]-E+v,D<0&&(D=x[r],_=r);break;case k:D=x[r]-Math.floor((E-v)/2),D<0?(D=x[r],_=r):D+E>st.width()&&(D=x[r]-E+v,_=g);break;case r:default:D=x[r],D+E>st.width()&&(D=x[r]-E+v,_=g)}i[a](_)}else{d[C](s)==H||d[C](s)==N?(P=et.offsetY,D=-1*u[r]):(P=u.top+et.offsetY,D=0);switch(et[M]){case g:D+=-1*d[y]()[c]()+et[O];break;case k:case r:default:D+=d[y]()[c]()+et[O]}}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(D+=et.IEOffsetX,P+=et.IEOffsetY),i[C](r,D+U)[C]("top",P+U)[C](I,"0.01").show(),B=l,d[C](s)==H||d[C](s)==N?D=-1*u[r]:D=0,i[X]()[r]<0?(D+=d[y]()[c]()-et[O],B=b):i[X]()[r]+E>st.width()&&(D+=-1*d[y]()[c]()-et[O],B=b),B&&i[C](r,D+U),i[W]()[C](I,"1");switch(et.mode){case"zoom":ot=b,d[a](et[t]),i.animate({width:L,height:L},et[w],et.easing,function(){ot=l});break;case"slide":ot=b,d[a](et[t]),i.animate({height:L},et[w],et.easing,function(){ot=l});break;case"fade":ot=b,S&&!et.noOpenerFade?(et[w]=="slow"?B=80:et[w]==$?B=40:B=Math.floor(et[w]/2),d.fadeTo(B,.01,function(){d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l})})):(d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l}));break;case"instant":default:d[a](et[t]),i.show()}return l}).on(f,function(){return i.is(T)?(i[W](),d[h](et[t]),i[q]("."+et[t])[h](et[t]),i[q](j)[W](),l):l}).on(B,function(){return i.is(T)?i[o](f):i[o](x),l}),d[u]()[a](R)[C]("cursor","pointer").on(n,function(e){if(ot)return;e[p](),e[S](),i[o](B)}),et.expandMode==P&&d[P](function(){if(ot)return;ut=window.setTimeout(function(){i[o](x)},et.hoverDelay)},function(){window[m](ut)})}),nt[q]("a")[C]("display","block").on(n,function(t){if(ot)return;e(this).attr("href")[d]<1&&t[p]()}),tt[q]("li")[C]("white-space","nowrap").each(function(){var t=e(this),r=t[D]("a"),s=t[D](j),u=r.attr("href");r.on(n,function(e){u[d]==0||u=="#"?e[p]():e[S]()}),r[d]>0&&s[d]==0&&t.on(n,function(e){if(ot)return;tt[o](i),e[S]()})}),tt[D]("li").each(function(){var t,n,r,i,s=e(this),o=s[D](j);if(o[d]>0){et[V]&&(et.cloneOnDetach&&(t=o.clone(),t.attr("class","")[W]().appendTo(o[y]())),o[V]().appendTo(rt));for(n=et[A],r=1,i=o;i[d]>0;r++)i[C](F,n++),et[_]&&i[a](et[_]+(n-1-et[A])),i=i[q]("> li > ul")}}),st.on("scroll",function(){tt[o](i)}).on("keypress",function(e){!ot&&e.keyCode==27&&(e[p](),tt[o](i))}),it.on(n,function(){ot||tt[o](i)})}})(jQuery);
