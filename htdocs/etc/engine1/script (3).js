// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a}});function ws_turn(d,a,b){var f=jQuery;var h=f(this);var c=f("li",b);var e=f(".ws_list",b);var g=f("<div>").addClass("ws_effect ws_turn").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",perspective:500}).appendTo(b);this.go=function(q,l){var s=b.height();var j=b.width();var k={left:["0% 50%",{rotateY:90,translate:[0,0,0.1]},{left:-j}],right:["100% 50%",{rotateY:-90,translate:[0,0,0.1]},{left:j}],up:["50% 0%",{rotateX:-90,translate:[0,0,0.1]},{top:-s}],down:["50% 100%",{rotateX:90,translate:[0,0,0.1]},{top:s}]}[d.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",transformOrigin:k[0],transformStyle:"preserve-3d",outline:"1px solid transparent",zIndex:5}).append(f(a.get(q)).clone()),r=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",background:"#000",zIndex:4}).append(f(a.get(l)).clone());g.css({perspectiveOrigin:k[0]});if(d.responsive<3){i.find("img").css("width","100%");r.find("img").css("width","100%")}r.appendTo(g);i.appendTo(g);e.stop(true,true).hide().css({left:-q+"00%"});var p=k[2];var o={top:0,left:0};var n={opacity:1};var m={opacity:0.2};if(d.support.transform){p=k[1];o={rotateX:0,rotateY:0,translate:[0,0,0]}}wowAnimate(i,p,o,d.duration,"easeInOutQuart",function(){h.trigger("effectEnd");i.remove();r.remove()});wowAnimate(r.find("img"),n,m,d.duration,"easeInOutQuart")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)}});function ws_dribbles(p,k,a){var e=jQuery;var j=e(this);var n=p.noCanvas||!document.createElement("canvas").getContext;var m=p.width,f=p.height;var i=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_dribbles").appendTo(a);if(!n){var c=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(i);var o=c.get(0).getContext("2d")}var l=[["#bbbbbb",0.1,0.3,0.18],["#b3b3b3",0.9,0.8,0.15],["#b6b6b6",0.68,0.4,0.2],["#b9b9b9",0.25,0.4,0.15],["#cccccc",0.11,0.7,0.15],["#c3c3c3",0.18,0.1,0.15],["#c6c6c6",0.4,0.2,0.15],["#c9c9c9",0.55,-0.04,0.18],["#d3d3d3",0,0.95,0.13],["#d6d6d6",0.5,0.8,0.22],["#d9d9d9",0.9,0.1,0.18],["#eeeeee",0.3,0.9,0.18],["#e3e3e3",0.93,0.5,0.14],["#e6e6e6",0.7,0.9,0.15]];var d=[[[0.1,0.3,0,1],[0.9,0.8,0.15,0.85],[0.68,0.4,0,0.9],[0.25,0.4,0.21,0.79],[0.11,0.7,0.3,0.7],[0.18,0.1,0.45,0.55],[0.4,0.2,0,0.75],[0.55,-0.04,0.48,0.52],[0,0.95,0.21,0.79],[0.5,0.8,0.1,0.9],[0.9,0.1,0.25,0.75],[0.3,0.9,0.18,0.82],[0.93,0.5,0.4,0.6],[0.7,0.9,0.13,0.87]],[[-0.3,-0.2,0.06,1],[-0.1,-0.3,0.12,1],[-0.2,-0.5,0,1],[-0.1,-0.3,0.24,1],[-0.3,-0.4,0.4,1],[-0.5,-0.1,0.76,1],[-0.2,-0.1,0.62,1],[-0.3,-0.3,0.48,1],[-0.4,-0.1,0.05,1],[-0.5,-0.2,0.6,1],[-0.3,-0.25,0.75,1],[-0.1,-0.4,0.3,1],[-0.2,-0.35,0.95,1],[-0.15,-0.25,0.2,1]],[[1.3,1.2,0.06,1],[1.1,1.3,0.12,1],[1.2,1.5,0,1],[1.1,1.3,0.24,1],[1.3,1.4,0.4,1],[1.5,1.1,0.76,1],[1.2,1.1,0.62,1],[1.3,1.3,0.48,1],[1.4,1.1,0.05,1],[1.5,1.2,0.6,1],[1.3,1.25,0.75,1],[1.1,1.4,0.3,1],[1.2,1.35,0.95,1],[1.15,1.25,0.2,1]],[[0.1,1.3,0,1],[0.9,1.34,0.15,0.85],[0.68,1.23,0,0.9],[0.25,1.5,0.21,0.79],[0.11,1.2,0.3,0.7],[0.18,1.4,0.16,0.84],[0.4,1.17,0,0.75],[0.55,1.2,0,0.52],[0,1.5,0.21,0.79],[0.5,1.45,0,0.9],[0.9,1.34,0.25,0.75],[0.3,1.6,0.18,0.82],[0.93,1.2,0.09,0.91],[0.7,1.15,0.13,0.87]],[[0.1,-0.3,0,1],[0.9,-0.34,0.15,0.85],[0.68,-0.23,0,0.9],[0.25,-0.5,0.21,0.79],[0.11,-0.2,0.3,0.7],[0.18,-0.4,0.16,0.84],[0.4,-0.17,0,0.75],[0.55,-0.2,0,0.52],[0,-0.5,0.21,0.79],[0.5,-0.45,0,0.9],[0.9,-0.34,0.25,0.75],[0.3,-0.6,0.18,0.82],[0.93,-0.2,0.09,0.91],[0.7,-0.15,0.13,0.87]],[[-0.2,-0.1,0,1],[1.3,1.1,0.15,0.85],[0.48,1.4,0,0.9],[1.2,1.6,0.21,0.79],[1.11,-0.15,0.3,0.7],[0.28,1.3,0.16,0.84],[-0.1,-0.4,0,0.75],[0.15,1.3,0,0.52],[-0.5,0.85,0.21,0.79],[-0.2,0.7,0,0.9],[1.4,0.2,0.25,0.75],[1.1,1.5,0.18,0.82],[-0.43,-0.2,0.09,0.91],[0.7,1.5,0.13,0.87]]];function b(y,w,t,q){y.clearRect(0,0,m,f);for(var r=0,v=t.length;r<v;r++){var s=2-t[r][3];var x=t[r][2]*(1-w);var h=Math.max(0,Math.min(1,w*s-x));if(q&&e.easing[q]){h=e.easing[q](1,h,0,1,1,1)}var u=m;if(m/f<=1.8&&m/f>0.7){u*=2}else{if(m/f<=0.7){u=f*2}}y.beginPath();y.arc((t[r][0]+(l[r][1]-t[r][0])*h)*m,(t[r][1]+(l[r][2]-t[r][1])*h)*f,l[r][3]*h*u,0,2*Math.PI,false);y.fillStyle=l[r][0];y.fill()}}this.go=function(x,s){if(n){a.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},p.duration,"easeInOutExpo",function(){j.trigger("effectEnd")})}else{m=a.width();f=a.height();var u=Math.floor(Math.random()*(d.length));var y=d[u];var r=d[Math.floor(Math.random()*(d.length))];c.attr({width:m,height:f});var v=k.get(u==0?s:x);for(var t=0,w=l.length;t<w;t++){var q=Math.abs(l[t][1]),h=Math.abs(l[t][2]);l[t][0]=g(v,{x:q*m,y:h*f,w:2,h:2})||l[t][0]}wowAnimate(function(z){b(o,z,y,"easeOutBackCubic")},0,1,p.duration/2,function(){a.find(".ws_list").css({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});wowAnimate(function(z){b(o,1-z,r,"easeOutBackCubic")},0,1,p.duration/2,function(){o.clearRect(0,0,m,f);j.trigger("effectEnd")})})}};function g(z,q){q=q||{};var B=1,t=q.exclude||[],y;var v=document.createElement("canvas"),s=v.getContext("2d"),r=v.width=z.naturalWidth,F=v.height=z.naturalHeight;s.drawImage(z,0,0,z.naturalWidth,z.naturalHeight);try{y=s.getImageData(q.x?q.x:0,q.y?q.y:0,q.w?q.w:z.width,q.h?q.h:z.height)["data"]}catch(A){return false}var u=(q.w?q.w:z.width*q.h?q.h:z.height)||y.length,w={},D="",C=[],h={dominant:{name:"",count:0}};var x=0;while(x<u){C[0]=y[x];C[1]=y[x+1];C[2]=y[x+2];D=C.join(",");if(D in w){w[D]=w[D]+1}else{w[D]=1}if(t.indexOf(["rgb(",D,")"].join(""))===-1){var E=w[D];if(E>h.dominant.count){h.dominant.name=D;h.dominant.count=E}}x+=B*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_parallax(k,g,a){var c=jQuery;var f=c(this);var d=a.find(".ws_list");var b=k.parallax||0.25;var e=c("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(a);function j(l){return Math.round(l*1000)/1000}var i=c("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var h=i.clone().appendTo(e);this.go=function(l,r,p){var s=c(g.get(r));s={width:s.width(),height:s.height(),marginTop:s.css("marginTop"),marginLeft:s.css("marginLeft")};p=p?1:-1;var n=c(g.get(r)).clone().css(s).appendTo(i);var o=c(g.get(l)).clone().css(s).appendTo(h);var m=a.width()||k.width;var q=a.height()||k.height;d.hide();wowAnimate(function(v){v=c.easing.swing(v);var x=j(p*v*m),u=j(p*(-m+v*m)),t=j(-p*m*b*v),w=j(p*m*b*(1-v));if(k.support.transform){i.css("transform","translate3d("+x+"px,0,0)");n.css("transform","translate3d("+t+"px,0,0)");h.css("transform","translate3d("+u+"px,0,0)");o.css("transform","translate3d("+w+"px,0,0)")}else{i.css("left",x);n.css("margin-left",t);h.css("left",u);o.css("margin-left",w)}},0,1,k.duration,function(){e.hide();n.remove();o.remove();f.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b}});function ws_domino(m,i,k){$=jQuery;var h=$(this);var c=m.columns||5,l=m.rows||2,d=m.centerRow||2,g=m.centerColumn||2;var f=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(k);var b=$("<div>").addClass("ws_zoom").appendTo(f);var j=$("<div>").addClass("ws_parts").appendTo(f);var e=k.find(".ws_list");var a;this.go=function(y,x){function z(){j.find("img").stop(1,1);j.empty();b.empty();a=0}z();var s=$(i.get(x));s={width:s.width(),height:s.height(),marginTop:parseFloat(s.css("marginTop")),marginLeft:parseFloat(s.css("marginLeft"))};var D=$(i.get(x)).clone().appendTo(b).css({position:"absolute",top:0,left:0}).css(s);var p=f.width();var o=f.height();var w=Math.floor(p/c);var v=Math.floor(o/l);var t=p-w*(c-1);var E=o-v*(l-1);function I(L,K){return Math.random()*(K-L+1)+L}e.hide();var u=[];for(var C=0;C<l;C++){u[C]=[];for(var B=0;B<c;B++){var q=m.duration*(1-Math.abs((d*g-C*B)/(2*l*c)));var F=B<c-1?w:t;var n=C<l-1?v:E;u[C][B]=$("<div>").css({width:F,height:n,position:"absolute",top:C*v,left:B*w,overflow:"hidden"});var H=I(C-2,C+2);var G=I(B-2,B+2);u[C][B].appendTo(j);var J=$(i.get(y)).clone().appendTo(u[C][B]).css(s);var A={top:-H*v,left:-G*w,opacity:0};var r={top:-C*v,left:-B*w,opacity:1};if(m.support.transform&&m.support.transition){A.translate=[A.left,A.top,0];r.translate=[r.left,r.top,0];delete A.top;delete A.left;delete r.top;delete r.left}wowAnimate(J.css({position:"absolute"}),A,r,q,"easeInOutSine",function(){a++;if(a==l*c){z();e.stop(1,1);h.trigger("effectEnd")}})}}wowAnimate(D,{scale:1},{scale:1.6},m.duration,m.duration*0.2,"easeInOutSine")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blinds(m,l,a){var g=jQuery;var k=g(this);var c=m.parts||3;var j=g(".ws_list",a);var h=g("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(a);var d=g("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(h);var e=[];var b=document.addEventListener;for(var f=0;f<c;f++){e[f]=g("<div>").css({position:b?"relative":"absolute",display:b?"inline-block":"block",height:"100%",width:(100/c+0.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:b?0:((100*f/c).toFixed(3)+"%")}).appendTo(h)}this.go=function(r,p,o){if(o==undefined){o=p>r?1:0}h.find("img").stop(true,true);h.show();var s=g(l[p]);var t={width:s.width()||m.width,height:s.height()||m.height};var u=s.clone().css(t).appendTo(d);u.from={left:0};u.to={left:(!o?1:-1)*u.width()*0.5};if(m.support.transform){u.from={translate:[u.from.left,0,0]};u.to={translate:[u.to.left,0,0]}}j.hide();wowAnimate(u,u.from,u.to,m.duration,m.duration*0.1,"swing");for(var q=0;q<e.length;q++){var n=e[q];var v=g(l[r]).clone().css({position:"absolute",top:0}).css(t).appendTo(n);v.from={left:(!o?-1:1)*v.width()-n.position().left};v.to={left:-n.position().left};if(m.support.transform){v.from={translate:[v.from.left,0,0]};v.to={translate:[v.to.left,0,0]}}wowAnimate(v,v.from,v.to,(m.duration/(e.length+1))*(o?(e.length-q+1):(q+2)),"swing",((!o&&q==e.length-1||o&&!q)?function(){k.trigger("effectEnd");h.hide().find("img").remove();u.remove()}:false))}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var e=jQuery;var f=e(this);var h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var d=b.find(".ws_list");var g=e("<div>").addClass("ws_effect ws_fly").css(h).css({overflow:"visible"}).appendTo(b);this.go=function(p,m,l){if(l==undefined){l=!!c.revers}else{l=!l}var k=-(c.distance||g.width()/4),n=Math.min(-k,Math.max(0,e(window).width()-g.offset().left-g.width())),i=(l?n:k),q=(l?k:n);var j=e(a.get(m));j={width:j.width(),height:j.height()};var r=e("<div>").css(h).css({"z-index":1,overflow:"hidden"}).html(e(a.get(m)).clone().css(j)).appendTo(g);var o=e("<div>").css(h).css({"z-index":3,overflow:"hidden"}).html(e(a.get(p)).clone().css(j)).appendTo(g).show();wowAnimate(o,{opacity:0},{opacity:1},c.duration);wowAnimate(o,{left:i},{left:0},2*c.duration/3);d.hide();wowAnimate(r,{left:0,opacity:1},{left:q,opacity:0},2*c.duration/3,c.duration/3,function(){r.remove();f.trigger("effectEnd");o.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack_vertical(d,a,b){var e=jQuery;var g=e(this);var c=e("li",b);var f=e("<div>").addClass("ws_effect ws_stack_vertical").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);this.go=function(q,j,i){var k=(d.revers?1:-1)*b.height();c.each(function(s){if(i&&s!=j){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var p=e(".ws_list",b);var h=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?q:j)).clone()),r=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?j:q)).clone());if(d.responsive<3){h.find("img").css("width","100%");r.find("img").css("width","100%")}if(i){r.appendTo(f);h.appendTo(f)}else{h.insertAfter(p);r.insertAfter(p)}if(!i){p.stop(true,true).hide().css({left:-q+"00%"});if(d.fadeOut){p.fadeIn(d.duration)}else{p.show()}}else{if(d.fadeOut){p.fadeOut(d.duration)}}var o={top:i?k:0};var m={top:i?0:-k*0.5};var n={top:i?0:k};var l={top:(i?1:0)*b.height()*0.5};if(d.support.transform){o={translate:[0,o.top,0]};m={translate:[0,m.top,0]};n={translate:[0,n.top,0]};l={translate:[0,l.top,0]}}wowAnimate(h,o,n,d.duration,d.duration*(i?0:0.1),"easeInOutExpo",function(){g.trigger("effectEnd");h.remove();r.remove()});wowAnimate(r,m,l,d.duration,d.duration*(i?0.1:0),"easeInOutExpo")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"turn,dribbles,parallax,domino,blinds,basic,fly,stack_vertical",prev:"",next:"",duration:20*100,delay:20*100,width:960,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:2,fullScreen:false,gestures:2,onBeforeStep:0,images:0});