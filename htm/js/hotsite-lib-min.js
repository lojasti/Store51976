var LibHotSite$=function(){var l=[],c={},C={},h={},b={},H={},F=null,I=!1,y={},d=5,f=20;function A(){var e,t=l.length;if(0<t){for(var i=0;i<t;i++)!function(e){var t=D("DivProd"+(l=e.idProd));if(t)if(w(t)){var i="Categoria",l=c[l].replace(/'/g,""),r="filter_"+i.replace(/ /g,"_");t.setAttribute(r,l),null==C[i]?C[i]=l:C[i]=C[i]+","+l;var a=e.pFil;if("object"==typeof a)for(var n in a){var o,s=a[n];s.show&&(o=s.name,s=s.value.replace(/'/g,""),r="filter_"+o.replace(/ /g,"_"),t.setAttribute(r,s),null==C[o]?C[o]=s:C[o]=C[o]+","+s)}}}(l[i]);(I?function(){h={};var e=Object.keys(C),t=Object.values(C);for(u in y={},b={},e){var i=FCLib$.GetID("TxtSearch"+u);i&&(i.innerHTML="");i=FCLib$.GetID("InputSearch"+u);i&&(i.value="");var l="filter_"+e[u].replace(/ /g,"_"),i=t[u].split(",");k(l,i);var r=[...new Set(i)];r.sort();var a=r.length;b[l]=!1;for(var n=0;n<a;n++){var o=S(r[n].toLowerCase().replace(/ /g,"_"));y[l+"_"+o]=!0,b[l]=!0}}for(var s=F.getElementsByClassName("FilterLi"),c=s.length,u=0;u<c;u++){var d,f=s[u].getAttribute("data-key"),v=s[u].getAttribute("data-att");null==y[f]&&(y[f]=!1),y[f]||H[v]&&!(1<Object.keys(H).length)?(s[u].style.display="block",(!H[v]||1<Object.keys(H).length)&&(d=D("Qtd_"+f),f=s[u].getAttribute("data-value"),S(f.replace(/ /g,"_")),d&&(d.innerHTML=L(v,f)))):s[u].style.display="none"}for(var p=F.getElementsByClassName("FilSearch"),m=p.length,u=0;u<m;u++){var g=p[u].getAttribute("data-att");b[g]?p[u].style.display="block":p[u].style.display="none"}}:function(){var e,t="<div id='DivFiltrarPor' class='DivFiltrarPor'><span class='Label'>"+rk("products-filter-your-results")+":</span> ",i=Object.keys(C),l=Object.values(C);for(e in i){var r="",a="filter_"+i[e].replace(/ /g,"_"),n=l[e].split(",");k(a,n);var o=[...new Set(n)];o.sort();var s=o.length;t+="<ul class=FilSearch data-att='"+a+"'>",t+="  <li class='FilName Fil"+e+"' onclick='LibHotSite$.fnHideFil("+e+")'><span id='FilName"+e+"' class='SetaBaixo'>"+rk("products-filter-by")+" "+i[e]+"</span></li>",t+="  [Search_"+e+"]<li class='FilItems FilInfo"+e+"'><span style='font-size:12px;' id=TxtSearch"+e+"></span>",t+="    <ul id='FilItemsList"+e+"' class='FilItemsList'>";for(var c=0;c<s;c++){var u=S(o[c].toLowerCase().replace(/ /g,"_")),u=a+"_"+u;t+="<li name='FilterLi"+e+"' class='FilterLi' data-key=\""+u+'" data-att="'+a+'" data-value="'+o[c]+'">',t+="  <input type=checkbox id='fil"+e+"_"+c+"' data-fil-name=\""+i[e]+'" value="'+o[c]+'" name=\'filters\' onclick="LibHotSite$.fnChangeFilters()">',t+="  <label for='fil"+e+"_"+c+"'>"+o[c]+"<span id='Qtd_"+u+"'>"+L(a,o[c])+"</span></label>",t+="</li>"}t+="    </ul>",t+="  </li>",t+="</ul>",d<c&&(r+="<li class='FilInputSearch FilInfoCat'><input id='InputSearch"+e+"' maxlength="+f+" class=SearchFil placeholder='"+rk("products-filter-search")+" "+i[e]+"' onkeyup='LibHotSite$.fnSearchFil(this.value,"+e+");' type=text></li>"),t=t.replace("[Search_"+e+"]",r)}t+="</div>",(F=D("ProductsFilterFC_Hotsite"))&&(F.innerHTML="<div id=ContentFil>"+t+"</div>")})()}I?((e=D("idPagProdTop"))&&!function(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)&&e.scrollIntoView(),(FC$.Mobile||document.documentElement.clientWidth<400)&&filterCloseNav()):E(Object.keys(LibHotSite$.oDicCat).length)}function w(e){return e.classList.contains("smoothShow")}function L(e,t){t=e+"_"+S(t.replace(/ /g,"_"));return null==h[t]?"":" ("+h[t]+")"}function k(e,t){for(var i=t.length,l=0;l<i;l++){var r=e+"_"+S(t[l].replace(/ /g,"_"));null==h[r]?h[r]=1:h[r]=h[r]+1}}function D(e){return document.getElementById(e)}function S(e){var t,i="���������������������������������������������Ǵ`^�~";for(t in e)for(var l in i)e[t]==i[l]&&(e=e.replace(e[t],"aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC     "[l]));return e}function E(e){var t=D("HotSiteQtd");t&&(t.innerHTML=0==e?rk("product-list-no-products-found"):1==e?rk("product-list-found")+" <b>"+e+"</b> "+rk("product-list-product")+":":rk("product-list-found-plural")+" <b>"+e+"</b> "+rk("product-list-product-plural")+":")}return{aFiltersHotsite:l,oDicCat:c,fnGetID:D,fnInit:A,fnChangeFilters:function(){H={};var e,t,i=document.getElementsByName("filters"),l="";if(i){for(var r,a,n={},o=i.length,s=0;s<o;s++)i[s].checked&&(r=i[s].getAttribute("data-fil-name"),a=i[s].value,null==n[r]?n[r]=a:n[r]=n[r]+","+a,l+="<li>"+r+": <span class=SearchItem>"+a+"</span> <img  src='/images/x.gif' onclick=\"LibHotSite$.fnRemoveFilter('"+r+"','"+a+"')\" onmouseover='this.src=\"/images/xon.gif\"' onmouseout='this.src=\"/images/x.gif\"' title='"+rk("products-filter-remove-this-filter")+"'></li>",H["filter_"+r]=!0);for(var c=Object.keys(n),u=Object.values(n),d=document.getElementsByClassName("DivHotSiteProd"),f=d.length,v=0;v<f;v++)d[v].style.display="";var p=0,m=[];for(y in c)m[y]="filter_"+c[y].replace(/ /g,"_").toLowerCase();for(var g=m.length,h={},v=0;v<f;v++){var b=d[v],F={};h[v]=!0;for(var y=0;y<g;y++){if(FilNameAtt=m[y],null!=(S=b.getAttribute(FilNameAtt))){var L=u[y].split(","),k=L.length,S=","+S+",";F[y]=!0;for(var _=0;_<k&&(F[y]=-1!=S.search(","+L[_]+","),!F[y]);_++);h[v]=F[y]}else h[v]=!1;if(!h[v])break}h[v]?(b.classList.remove("smoothHide"),b.classList.add("smoothShow")):b.classList.contains("smoothShow")&&(b.classList.remove("smoothShow"),b.classList.add("smoothHide"))}for(v=0;v<f;v++)w(d[v])&&p++;I=!0}E(p),""!=l?(l="<span class=Label>"+rk("products-filter-filtering-by")+":</span><ul class=FiltrandoPor>"+l,l+="<li><div class='FilRemoveFilters'><a onclick=\"LibHotSite$.fnRemoveFilter('')\" style='cursor:pointer;'>"+rk("products-filter-remove-all")+"</a></div></li>",l+="</ul>",(t=D("DivFiltrandoPor"))?t.innerHTML=l:(e=D("DivFiltrarPor"))&&((t=document.createElement("div")).id="DivFiltrandoPor",t.classList.add("DivFiltrandoPor"),e.parentNode.insertBefore(t,e),t.innerHTML=l)):(t=D("DivFiltrandoPor"))&&(t.innerHTML=""),I&&(C={},A())},fnRemoveFilter:function(e,t){var i=document.getElementsByName("filters");if(i){for(var l,r,a=i.length,n=0;n<a;n++)""!=e?(l=i[n].getAttribute("data-fil-name"),r=i[n].value,l==e&&r==t&&(i[n].checked=!1)):i[n].checked=!1;LibHotSite$.fnChangeFilters()}},fnSearchFil:function(e,t){var i=document.getElementsByName("FilterLi"+t);if(i){for(var l=i.length,r=0,a=0;a<l;a++){var n,o=i[a].getAttribute("data-value");n=-1!=S(o.toLowerCase()).search(S(e));var s=i[a].getAttribute("data-att"),o=s+"_"+S(o.toLowerCase().replace(/ /g,"_"));null==y[o]&&(y[o]=!0),n&&y[o]?(i[a].style.display="block",r++):i[a].style.display="none"}console.log(s+" > "+r);t=FCLib$.GetID("TxtSearch"+t);t&&(t.innerHTML=0==r?s.replace("filter_","")+" "+rk("products-filter-not-found"):"")}},fnHideFil:function(e){for(var t=F.getElementsByClassName("FilInfo"+e),e=FCLib$.GetID("FilName"+e),i=!1,l=t.length,r=0;r<l;r++)"none"==t[r].style.display?t[r].style.display="":(t[r].style.display="none",i=!0);e&&(e.className=i?"SetaDireita":"SetaBaixo")}}}();