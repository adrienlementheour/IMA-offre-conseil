function initBlocNotreActu(){TweenMax.to($("#bloc-actus"),0,{x:"-100px"})}function initBlocVideo(){TweenMax.to($("#bloc-videos-actus"),0,{x:"-100px"})}function animateApparitionBlocActus(){$("#content").hasClass("aucun-bloc-ouvert")&&(tlbouton1.pause(),TweenMax.to($("#bloc-actus"),0,{display:"block"}),TweenMax.to($("#ascrail2000"),0,{display:"block"}),TweenMax.to($("#ascrail2000"),blocActusAnimationTime,{opacity:"1",delay:blocActusDelay}),TweenMax.to($("#bloc-actus"),blocActusAnimationTime,{x:"0",opacity:"1",delay:blocActusDelay,onComplete:function(){$("#content").removeClass().addClass("bloc-actus-ouvert"),customActuScroll()}}),TweenMax.to($("a#btn-notre-actu"),blocActusAnimationTime,{top:"-10px"}),TweenMax.to($("#bloc-slides"),blocActusAnimationTime,{x:"300px",opacity:"0.5",onReverseComplete:function(){$("#content").removeClass().addClass("aucun-bloc-ouvert")}}))}function animateDisparitionBlocActus(){$("#content").hasClass("bloc-actus-ouvert")?(tlbouton1.play(),TweenMax.to($("#bloc-actus"),.1,{x:"-100px",opacity:"0",onComplete:function(){$("#bloc-actus").css("display","none")}}),TweenMax.to($("#bloc-slides"),.1,{x:"0",opacity:"1",onComplete:function(){$("#content").removeClass().addClass("aucun-bloc-ouvert")}}),TweenMax.to($("a#btn-notre-actu"),.1,{top:"50%",delay:blocActusAnimationTime}),removeCustomActuScroll()):$("#content").hasClass("bloc-videos-actus-ouvert")&&(stopVideos(),$("#videos-actus li.video-actu").css("display","none"),removeCustomActuOuverteScroll(),removeCustomActuScroll(),TweenMax.to($(".video-actu"),0,{display:"none"}),TweenMax.to($("#bloc-videos-actus"),actusAnimationTime,{x:"-100px",opacity:"0",onComplete:function(){TweenMax.to($("#bloc-videos-actus"),0,{display:"none"})}}),TweenMax.to($("#bloc-actus"),.2,{x:"0",onComplete:function(){customActuScroll()}}),TweenMax.to($("#bloc-slides"),.2,{x:"300px",onComplete:function(){$("#content").removeClass().addClass("bloc-actus-ouvert"),TweenMax.to($(".actu"),.2,{opacity:"1"})}}),$("li.actu.has-video.ouvert").removeClass("ouvert"))}function animateApparitionVideo(t){$("html").hasClass("no-touch")&&$(window).width()>767?$("#content").hasClass("bloc-actus-ouvert")?(removeCustomActuScroll(),tlBlocVideo=new TimelineMax,tlVideo=new TimelineMax,tlLiensActus=new TimelineMax,tlBlocVideo.to($("#bloc-videos-actus"),0,{display:"block"}),scrollToVideo(t),tlBlocVideo.to($("#video-actu-"+t),0,{display:"block"}),tlBlocVideo.to($("#bloc-videos-actus"),actusAnimationTime,{x:"0",opacity:"1",onComplete:function(){$("#content").removeClass().addClass("bloc-videos-actus-ouvert")}}),$("li.actu#"+t).addClass("ouvert"),tlVideo.to($("#video-actu-"+t),actusAnimationTime,{opacity:"1"}),tlLiensActus.to($(".actu:not('#"+t+"')"),actusAnimationTime,{opacity:"0.6"}),tlBlocActusPart2=new TimelineMax,tlBlocActusPart2.to($("#bloc-actus"),actusAnimationTime,{x:"430px",onComplete:function(){customActuOuverteScroll()},onReverseComplete:function(){customActuScroll()}}),tlBlocSlidesPart2=new TimelineMax,tlBlocSlidesPart2.to($("#bloc-slides"),actusAnimationTime,{x:"650px",onReverseComplete:function(){$("#content").removeClass().addClass("bloc-actus-ouvert")}})):$("#content").hasClass("bloc-videos-actus-ouvert")&&($("li.actu#"+t).hasClass("ouvert")?(animateDisparitionBlocActus(),$("li.actu.has-video.ouvert").removeClass("ouvert"),removeCustomActuOuverteScroll()):(stopVideos(),removeCustomActuOuverteScroll(),oldVideoActuID=$("li.actu.ouvert").attr("id"),tlVideo.to($("#video-actu-"+oldVideoActuID),0,{display:"none"}),tlVideo.to($("#video-actu-"+oldVideoActuID),actusAnimationTime,{opacity:"0"}),tlVideo=new TimelineMax,tlVideo.to($("#video-actu-"+t),0,{display:"block"}),tlVideo.to($("#video-actu-"+t),actusAnimationTime,{opacity:"1"}),tlLiensActus.to($(".actu:not('#"+t+"')"),actusAnimationTime,{opacity:"0.6"}),tlLiensActus.to($(".actu#"+t),actusAnimationTime,{opacity:"1",onComplete:function(){customActuOuverteScroll()}}),$("li.actu#"+oldVideoActuID).removeClass("ouvert"),$("li.actu#"+t).addClass("ouvert"),scrollToVideo(t))):$("#content").hasClass("bloc-actus-ouvert")?(tlBlocVideo=new TimelineMax,tlVideo=new TimelineMax,tlLiensActus=new TimelineMax,tlBlocVideo.to($("#bloc-videos-actus"),0,{display:"block"}),scrollToVideo(t),tlBlocVideo.to($("#video-actu-"+t),0,{display:"block"}),tlBlocVideo.to($("#bloc-videos-actus"),actusAnimationTime,{x:"0",opacity:"1",onComplete:function(){$("#content").removeClass().addClass("bloc-videos-actus-ouvert")}}),$("li.actu#"+t).addClass("ouvert"),tlVideo.to($("#video-actu-"+t),actusAnimationTime,{opacity:"1"}),tlLiensActus.to($(".actu:not('#"+t+"')"),actusAnimationTime,{opacity:"0.6"}),tlBlocActusPart2=new TimelineMax,$(window).width()>"767"?tlBlocActusPart2.to($("#bloc-actus"),actusAnimationTime,{x:"380px",onComplete:function(){customActuOuverteScroll()},onReverseComplete:function(){customActuScroll()}}):tlBlocActusPart2.to($("#bloc-actus"),actusAnimationTime,{x:"800px",onComplete:function(){customActuOuverteScroll()},onReverseComplete:function(){customActuScroll()}})):$("#content").hasClass("bloc-videos-actus-ouvert")&&($("li.actu#"+t).hasClass("ouvert")?(animateDisparitionBlocActus(),$("li.actu.has-video.ouvert").removeClass("ouvert"),removeCustomActuOuverteScroll()):(stopVideos(),removeCustomActuOuverteScroll(),oldVideoActuID=$("li.actu.has-video").hasClass("ouvert")?$("li.actu.has-video.ouvert").attr("id"):$("li.actu.has-actu.ouvert").attr("id"),tlVideo.to($("#video-actu-"+oldVideoActuID),0,{display:"none"}),tlVideo.to($("#video-actu-"+oldVideoActuID),actusAnimationTime,{opacity:"0"}),tlVideo=new TimelineMax,tlVideo.to($("#video-actu-"+t),0,{display:"block"}),tlVideo.to($("#video-actu-"+t),actusAnimationTime,{opacity:"1"}),tlLiensActus.to($(".actu:not('#"+t+"')"),actusAnimationTime,{opacity:"0.6"}),tlLiensActus.to($(".actu#"+t),actusAnimationTime,{opacity:"1",onComplete:function(){customActuOuverteScroll()}}),$("li.actu#"+oldVideoActuID).removeClass("ouvert"),$("li.actu#"+t).addClass("ouvert"),scrollToVideo(t)))}function initTexteIntro(){$(window).width()>767?(TweenMax.to($("#slide1"),textAnimationTime,{top:"50%",scale:"1",opacity:"1",delay:2}),TweenMax.fromTo($("a#btn-next-slide"),textAnimationTime,{y:"80px",opacity:"0"},{y:"50px",opacity:"1",delay:2.5}),TweenMax.to($("a#btn-prev-slide"),textAnimationTime,{scale:"1"})):(TweenMax.to($("#slide1"),textAnimationTime,{scale:"1",opacity:"1",delay:2}),TweenMax.to($("a#btn-prev-slide"),textAnimationTime,{scale:"1"}))}function getEtape2Slide(){$(window).width()>767?(tlSlide1=new TimelineMax,tlSlide1.to($("#slide1"),textAnimationTime,{top:"30%",scale:"0.8",opacity:"0.7",ease:textAnimationEase,onComplete:function(){etape=2}}).to($("#slide2"),textAnimationTime,{top:"50%",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{top:"75%",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-prev-slide"),textAnimationTime,{display:"block",scale:"1",ease:textAnimationEase},0)):(tlSlide1=new TimelineMax,tlSlide1.to($("#slide1"),textAnimationTime,{left:"-400px",scale:"1",opacity:"0.7",ease:textAnimationEase,onComplete:function(){etape=2}}).to($("#slide2"),textAnimationTime,{left:"0",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-prev-slide"),textAnimationTime,{display:"block",scale:"1",ease:textAnimationEase},0))}function getReverseEtape2Slide(){$(window).width()>767?(tlReverseSlide1=new TimelineMax,tlReverseSlide1.to($("#slide1"),textAnimationTime,{top:"50%",scale:"1",opacity:"1",ease:textAnimationEase,onComplete:function(){etape=1}}).to($("#slide2"),textAnimationTime,{top:"75%",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{top:"75%",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-prev-slide"),textAnimationTime,{display:"none",scale:"1",ease:textAnimationEase},0)):(tlReverseSlide1=new TimelineMax,tlReverseSlide1.to($("#slide1"),textAnimationTime,{left:"0",scale:"1",opacity:"1",ease:textAnimationEase,onComplete:function(){etape=1}}).to($("#slide2"),textAnimationTime,{left:"400px",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{left:"400px",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-prev-slide"),textAnimationTime,{display:"none",scale:"1",ease:textAnimationEase},0))}function getEtape3Slide(){$(window).width()>767?(tlSlide3=new TimelineMax,tlSlide3.to($("#slide1"),textAnimationTime,{top:"5%",scale:"0.6",opacity:"0.5",ease:textAnimationEase,onComplete:function(){etape=3}}).to($("#slide2"),textAnimationTime,{top:"28%",scale:"0.8",opacity:"0.7",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{top:"63.5%",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3 a.btn-base"),textAnimationTime,{display:"inline-block",ease:textAnimationEase},0).to($("a#btn-next-slide"),textAnimationTime,{display:"none",ease:textAnimationEase},0)):(tlSlide3=new TimelineMax,tlSlide3.to($("#slide1"),textAnimationTime,{left:"-400px",scale:"1",opacity:"0.5",ease:textAnimationEase,onComplete:function(){etape=3}}).to($("#slide2"),textAnimationTime,{left:"-400px",scale:"1",opacity:"0.7",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{left:"0",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3 a.btn-base"),textAnimationTime,{display:"inline-block",ease:textAnimationEase},0).to($("a#btn-next-slide"),textAnimationTime,{display:"none",ease:textAnimationEase},0))}function getReverseEtape3Slide(){$(window).width()>767?(tlReverseSlide3=new TimelineMax,tlReverseSlide3.to($("#slide1"),textAnimationTime,{top:"30%",scale:"0.8",opacity:"0.7",ease:textAnimationEase,onComplete:function(){etape=2,$("#slide3 a.btn-base").css("display","none")}}).to($("#slide2"),textAnimationTime,{top:"50%",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{top:"75%",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-next-slide"),textAnimationTime,{display:"block",ease:textAnimationEase},0)):(tlReverseSlide3=new TimelineMax,tlReverseSlide3.to($("#slide1"),textAnimationTime,{left:"-400px",scale:"0.8",opacity:"0.7",ease:textAnimationEase,onComplete:function(){etape=2,$("#slide3 a.btn-base").css("display","none")}}).to($("#slide2"),textAnimationTime,{left:"0",scale:"1",opacity:"1",ease:textAnimationEase},0).to($("#slide3"),textAnimationTime,{left:"400px",scale:"1",opacity:"0",ease:textAnimationEase},0).to($("a#btn-next-slide"),textAnimationTime,{display:"block",ease:textAnimationEase},0))}function getTranslationYSlideIntro(){return hauteurBlocSlides=$("#bloc-slides").height(),hauteurBlocDispo=hauteurBlocSlides/2/3}function customActuScroll(){$(window).width()>767&&niceScrolls.push($("#masque-actus").niceScroll({cursorcolor:"#fff",cursorwidth:"3px",cursorborderradius:"3px",railalign:"left",background:"rgba(255, 255, 255, 0.2)",cursorborder:"none",autohidemode:"none"}))}function removeCustomActuScroll(){if($(window).width()>767){for(var t in niceScrolls)niceScrolls[t].resize().hide().remove();niceScrolls=[]}}function customActuOuverteScroll(){$(window).width()>767&&niceScrolls.push($("#bloc-videos-actus").niceScroll({cursorcolor:"#fff",cursorwidth:"3px",cursorborderradius:"3px",railalign:"left",background:"rgba(255, 255, 255, 0.2)",cursorborder:"none",autohidemode:"none"}))}function removeCustomActuOuverteScroll(){$(window).width()>767&&$("#bloc-videos-actus").getNiceScroll().resize().hide().remove()}function mouseHandle(t,e){newDate=new Date;var o=!0;10>wheel&&newDate.getTime()-oldDate.getTime()<100?(scrollPos-=t.deltaY*(10-wheel),wheel++):newDate.getTime()-oldDate.getTime()>100?(wheel=0,scrollPos-=60*t.deltaY):o=!1,oldDate=new Date,o&&(t.deltaY<0?1==etape?getEtape2Slide():2==etape&&getEtape3Slide():2==etape?getReverseEtape2Slide():3==etape&&getReverseEtape3Slide())}function scrollToVideo(t){topLigneActuVideo=$("li.actu#"+t).offset().top,topBlocActus=$("#bloc-actus").offset().top,scrollBlocVideo=$("#masque-actus").scrollTop(),hauteurScrollAlignementVideo=topLigneActuVideo-topBlocActus+scrollBlocVideo,TweenMax.to($("#masque-actus"),.8,{scrollTo:{y:hauteurScrollAlignementVideo},onComplete:function(){customActuScroll()}})}function backgroundPictoGrid(){if($("html").hasClass("no-touch")&&$(window).width()>767&&!$("html").hasClass("lt-ie9")){largeurFenetre=$(window).width(),hauteurFenetre=$(window).height(),nbPictoHorizontal=Math.ceil(largeurFenetre/ecartementHorizontalPictosIntro),nbPictoVertical=Math.ceil(hauteurFenetre/ecartementVerticalPictosIntro);for(var t=0;nbPictoVertical>=t;t++)for(var e=0;nbPictoHorizontal>=e;e++)posPictoVertical=t*ecartementVerticalPictosIntro,posPictoHorizontal=e*ecartementHorizontalPictosIntro,$("ul#pictos-fond").append("<li class='picto-fond' id='"+currentPicto+"'></li>"),t%2==0&&$("ul#pictos-fond li#"+currentPicto).css("margin-left","-"+ecartementHorizontalPictosIntro/2+"px"),randomPictoIntro=Math.floor(Math.random()*arrayPictosIntro.length),$("ul#pictos-fond li#"+currentPicto).addClass("ligne-"+t).addClass("colonne-"+e).addClass(arrayPictosIntro[randomPictoIntro]),$("ul#pictos-fond li#"+currentPicto).css("top",posPictoVertical),$("ul#pictos-fond li#"+currentPicto).css("left",posPictoHorizontal),currentPicto++}}