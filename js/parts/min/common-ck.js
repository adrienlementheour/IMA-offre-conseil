function blocContact(){TweenMax.to($("#bloc-contact"),0,{y:"30px",ease:textAnimationEase})}function boutonIMA(){$(".cercle-indic").hover(function(){$("#cn-wrapper").addClass("opened-nav")}),button=$("#cn-button"),wrapper=$("#cn-wrapper"),$(window).width()>767?(button.hover(function(){$("#cn-wrapper").addClass("opened-nav")},function(){$("#cn-wrapper").removeClass("opened-nav")}),wrapper.hover(function(){$("#cn-wrapper").addClass("opened-nav")},function(){$("#cn-wrapper").removeClass("opened-nav")}),$("html").hasClass("csstransforms")&&($(".cn-wrapper ul li a").unbind("mouseenter mouseleave"),$(".cn-wrapper ul li .zone-texte h2").css({color:"#4e4e4e",top:0}),TweenMax.to($(".cn-wrapper ul li .zone-texte h2"),0,{color:"#4e4e4e",top:"0"}),($("html").hasClass("lt-ie10")||Function("/*@cc_on return document.documentMode===10@*/")())&&$(".cn-wrapper ul li:not(.active) .zone-texte").hover(function(){var o=$(this).parent();borderColor=$(this).css("border-top-color"),tl=new TimelineMax,tl2=new TimelineMax,tl.to($(".zone-texte h2",o),0,{color:borderColor}),tl.to($(".zone-texte h2",o),.5,{color:"#fff"}),tl2.to($(".zone-texte h2",o),.3,{top:"10px"})},function(){var o=$(this).parent();tl.to($(".zone-texte h2",o),.1,{color:"#4e4e4e",top:"0"})}),$(".cn-wrapper ul li:not(.active) a").hover(function(){var o=$(this).parent();borderColor=$(this).css("border-top-color"),tl=new TimelineMax,tl2=new TimelineMax,tl.to($(".zone-texte h2",o),0,{color:borderColor}),tl.to($(".zone-texte h2",o),.5,{color:"#fff"}),tl2.to($(".zone-texte h2",o),.3,{top:"10px"})},function(){var o=$(this).parent();tl.to($(".zone-texte h2",o),.1,{color:"#4e4e4e",top:"0"})}))):button.click(function(){return $("#cn-wrapper").hasClass("opened-nav")?$("#cn-wrapper").removeClass("opened-nav"):$("#cn-wrapper").addClass("opened-nav"),!1})}function menuBottom(o,e){var n=$("#menu-bottom");o?($("#masque-offre-conseil #offre-conseil",n).css("background-color","#ffffff"),$("#masque-offre-conseil #offre-conseil",n).css("border","none")):($("#masque-offre-conseil #offre-conseil",n).css("background-color","none"),$("#masque-offre-conseil #offre-conseil",n).css("border","1px solid #ffffff")),$("#content-menu-bottom #masque-offre-conseil #offre-conseil #offre-conseil-svg",n).css("fill",e),$("#content-menu-bottom #signature #imatech-logo",n).css("fill",e),$("#content-menu-bottom #bloc-btn-bottom a.btn-base",n).css("color",e)}function animateButtonArrow(o,e,n,t,r,a){a.add(getHorizontalButtonArrowStep1(o,e,r,n,t))}function getHorizontalButtonArrowStep1(o,e,n,t,r){return tlHorizontalButtonArrow1=new TimelineMax({repeat:5,yoyo:!0,delay:n}),"x"==e?tlHorizontalButtonArrow1.to(o,arrowHorizontalAnimationTime,{x:t}):tlHorizontalButtonArrow1.to(o,arrowHorizontalAnimationTime,{y:t}),tlHorizontalButtonArrow1.to(o.parent(),arrowHorizontalAnimationTime,{scale:r},0),tlHorizontalButtonArrow1}function animateScaleBtn(o,e){e.to(o,btnAnimationTime,{scale:"0.7"})}function stopAnimateScaleBtn(o){o.reverse()}function menuOuvertDefault(){$(".cn-wrapper").addClass("opened-nav"),setTimeout(function(){$(".cn-wrapper").removeClass("opened-nav")},2e3)}var niceScrolls=[];