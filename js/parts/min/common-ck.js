function blocContact(){TweenMax.to($("#bloc-contact"),0,{y:"30px",ease:textAnimationEase})}function boutonIMA(){$(".cercle-indic").hover(function(){$("#cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav")}),map=$("#container-map-ima"),button=$("#cn-button"),wrapper=$("#cn-wrapper"),$(window).width()>767?(map.hover(function(){$("#cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav")},function(){$("#cn-wrapper").removeClass("opened-nav"),$("#container-map-ima").removeClass("opened-nav")}),button.hover(function(){$("#cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav")},function(){$("#cn-wrapper").removeClass("opened-nav"),$("#container-map-ima").removeClass("opened-nav")}),wrapper.hover(function(){$("#cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav")},function(){$("#cn-wrapper").removeClass("opened-nav"),$("#container-map-ima").removeClass("opened-nav")}),$("html").hasClass("csstransforms")&&($(".cn-wrapper ul li a").unbind("mouseenter mouseleave"),$(".cn-wrapper ul li .zone-texte h2").css({color:"#4e4e4e",top:0}),TweenMax.to($(".cn-wrapper ul li .zone-texte h2"),0,{color:"#4e4e4e",top:"0"}),($("html").hasClass("lt-ie10")||Function("/*@cc_on return document.documentMode===10@*/")())&&$(".cn-wrapper ul li:not(.active) .zone-texte").hover(function(){var e=$(this).parent();borderColor=$(this).css("border-top-color"),tl=new TimelineMax,tl2=new TimelineMax,tl.to($(".zone-texte h2",e),0,{color:borderColor}),tl.to($(".zone-texte h2",e),.5,{color:"#fff"}),tl2.to($(".zone-texte h2",e),.3,{top:"10px"})},function(){var e=$(this).parent();tl.to($(".zone-texte h2",e),.1,{color:"#4e4e4e",top:"0"})}),$(".cn-wrapper ul li:not(.active) a").hover(function(){var e=$(this).parent();borderColor=$(this).css("border-top-color"),tl=new TimelineMax,tl2=new TimelineMax,tl.to($(".zone-texte h2",e),0,{color:borderColor}),tl.to($(".zone-texte h2",e),.5,{color:"#fff"}),tl2.to($(".zone-texte h2",e),.3,{top:"10px"})},function(){var e=$(this).parent();tl.to($(".zone-texte h2",e),.1,{color:"#4e4e4e",top:"0"})}),$("#container-map-ima area").hover(function(){var e=$(this).attr("class"),o=e.replace("area-",""),n=$(".cn-wrapper ul li."+o+":not(.active)"),t=$(".cn-wrapper ul li."+o+":not(.active) a");borderColor=t.css("border-top-color"),tl=new TimelineMax,tl2=new TimelineMax,tl.to($(".zone-texte h2",n),0,{color:borderColor}),tl.to($(".zone-texte h2",n),.5,{color:"#fff"}),tl2.to($(".zone-texte h2",n),.3,{top:"10px"})},function(){var e=$(this).attr("class"),o=e.replace("area-",""),n=$(".cn-wrapper ul li."+o+":not(.active)"),t=$(".cn-wrapper ul li."+o+":not(.active) a");tl.to($(".zone-texte h2",n),.1,{color:"#4e4e4e",top:"0"})}))):button.click(function(){return $("#cn-wrapper").hasClass("opened-nav")?($("#cn-wrapper").removeClass("opened-nav"),$("#container-map-ima").removeClass("opened-nav")):($("#cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav")),!1})}function menuBottom(e,o){var n=$("#menu-bottom");e?($("#masque-offre-conseil #offre-conseil",n).css("background-color","#ffffff"),$("#masque-offre-conseil #offre-conseil",n).css("border","none")):($("#masque-offre-conseil #offre-conseil",n).css("background-color","none"),$("#masque-offre-conseil #offre-conseil",n).css("border","1px solid #ffffff")),$("#content-menu-bottom #masque-offre-conseil #offre-conseil #offre-conseil-svg",n).css("fill",o),$("#content-menu-bottom #signature #imatech-logo",n).css("fill",o),$("#content-menu-bottom #bloc-btn-bottom a.btn-base",n).css("color",o)}function animateButtonArrow(e,o,n,t,a,r){r.add(getHorizontalButtonArrowStep1(e,o,a,n,t))}function getHorizontalButtonArrowStep1(e,o,n,t,a){return tlHorizontalButtonArrow1=new TimelineMax({repeat:5,yoyo:!0,delay:n}),"x"==o?tlHorizontalButtonArrow1.to(e,arrowHorizontalAnimationTime,{x:t}):tlHorizontalButtonArrow1.to(e,arrowHorizontalAnimationTime,{y:t}),tlHorizontalButtonArrow1.to(e.parent(),arrowHorizontalAnimationTime,{scale:a},0),tlHorizontalButtonArrow1}function animateScaleBtn(e,o){o.to(e,btnAnimationTime,{scale:"0.7"})}function stopAnimateScaleBtn(e){e.reverse()}function menuOuvertDefault(){$(window).width()>767&&($(".cn-wrapper").addClass("opened-nav"),$("#container-map-ima").addClass("opened-nav"),setTimeout(function(){$(".cn-wrapper").removeClass("opened-nav"),$("#container-map-ima").removeClass("opened-nav")},2e3))}var niceScrolls=[];