﻿/*<!--*/(function() {var qss="&cb="+Math.floor(99999999999*Math.random());try{qss+="&ref="+encodeURIComponent(document.referrer)}catch(e){}try{qss+="&sc_r="+encodeURIComponent(screen.width+"x"+screen.height)}catch(e){}try{qss+="&sc_d="+encodeURIComponent(screen.colorDepth.toString())}catch(e){}var callDis=function(e,t){var n=function(){callDisInternal(e,t)};"complete"===document.readyState?setTimeout(n):window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent("onload",n)},disCalled=!1,callDisInternal=function(e,t){if(!disCalled){disCalled=!0;var n="//"+t+"/dis/dis.aspx",o=document.createElement("iframe");o.width=o.height="0",o.style.display="none",o.src=(n+"?p="+e+qss).substring(0,2e3),o.title="Criteo DIS iframe";var r=document.getElementById("criteoTagsContainer");r?(r.appendChild(o),"undefined"!=typeof criteo_q&&"function"==typeof criteo_q.removeLater&&criteo_q.removeLater(o)):criteo_q.push({event:"appendTag",element:o})}};
qss += '&idcpy=594f7930-91d1-4317-b9fc-f9170b60279c';
callDis(23739, 'dis.eu.criteo.com');
})();


/*-->*/