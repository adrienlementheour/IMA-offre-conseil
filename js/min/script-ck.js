function initLoad(){$("#cn-wrapper a").each(function(){$(this).click(function(){return loadStart($(this).attr("href")),!1})}),Modernizr.history&&$(window).bind("popstate",function(e){})}function loadStart(e){for(var i in niceScrolls)niceScrolls[i].resize().hide(),niceScrolls[i].remove();niceScrolls=[],index=e,$("#content-load").fadeOut(400),$("#content-load").load(e+" #content-load",loadFinished),$(window).bind("popstate",function(e){})}function loadInit(){$(".content-load").hide(400)}function loadFinished(){$("#content-load").fadeIn(400),$("#menu-bottom").removeClass("menu-violet").removeClass("menu-bleu"),$("#bouton-imatech").removeClass("bouton-bleu"),$("body")[0].className="",index.indexOf("vision")>=0?(updateAll("vision"),$("body").addClass("metiers"),readyMetiers()):index.indexOf("metiers")>=0?(updateAll("metiers"),$("body").addClass("metiers"),readyMetiers()):index.indexOf("references")>=0?(updateAll("references"),$("body").addClass("cas-clients"),$("#menu-bottom").addClass("menu-bleu"),$("#bouton-imatech").addClass("bouton-bleu"),readyCasClient()):(updateAll("accueil"),$("body").addClass("intro"),$("#menu-bottom").addClass("menu-violet"),readyIntro())}function updateAll(e){updateURL(e),updateMenuState(e),updateSuperfluous(e)}function updateURL(e){var i={page:index};if(Modernizr.history)switch(e){case"vision":window.history.pushState(i,"Page Vision","/vision");break;case"metiers":window.history.pushState(i,"Page Métiers","/metiers");break;case"references":window.history.pushState(i,"Page Cas Client","/references");break;default:window.history.pushState(i,"PageAccueil","/")}}function updateMenuState(e){switch($("#cn-wrapper").removeClass("opened-nav"),$(".cn-wrapper-menu-ferme").removeClass("accueil").removeClass("vision").removeClass("expertise").removeClass("references"),$(".cn-wrapper-menu-ferme li").removeClass("active"),$("#cn-wrapper li").removeClass("active"),e){case"vision":$(".cn-wrapper-menu-ferme").addClass("vision"),$(".cn-wrapper-menu-ferme li.conseil").addClass("active"),$("#cn-wrapper li.conseil").addClass("active");break;case"metiers":$(".cn-wrapper-menu-ferme").addClass("expertise"),$(".cn-wrapper-menu-ferme li.expertise").addClass("active"),$("#cn-wrapper li.expertise").addClass("active");break;case"references":$(".cn-wrapper-menu-ferme").addClass("references"),$(".cn-wrapper-menu-ferme li.references").addClass("active"),$("#cn-wrapper li.references").addClass("active");break;default:$(".cn-wrapper-menu-ferme").addClass("accueil"),$(".cn-wrapper-menu-ferme li.accueil").addClass("active"),$("#cn-wrapper li.accueil").addClass("active")}boutonIMA()}function updateSuperfluous(e){switch($("#superfluous").html(),e){case"vision":case"metiers":$("#superfluous").html('<div id="bg-office"></div>');break;case"references":$("#superfluous").html('<div id="bg-office"></div><div class="degrade haut"></div><div class="degrade bas"></div>');break;default:$("#superfluous").html('<ul id="pictos-fond"></ul>')}}function readyMentionsLegales(){customCasClientScroll()}function readyIntro(){backgroundPictoGrid(),tlbouton1=new TimelineMax({repeat:-1}),tlbouton2=new TimelineMax({repeat:-1}),tlbouton3=new TimelineMax({repeat:-1}),tlbouton4=new TimelineMax({repeat:-1}),animateButtonArrow($("#btn-next-slide .icon-arrow"),"y","4px","0.95","5",tlbouton1),animateButtonArrow($("#btn-prev-slide .icon-arrow-up"),"y","-4px","0.95","5",tlbouton2),animateButtonArrow($("#btn-notre-actu .icon-arrow-right"),"x","2px","1","7",tlbouton3),animateButtonArrow($("#btn-fermer-actus .icon-arrow-right"),"x","4px","0.95","10",tlbouton4),initBlocVideo(),initTexteIntro(),getTranslationYSlideIntro(),$("html").hasClass("no-touch")&&$(window).width()>767?(initBlocNotreActu(),$("a#btn-next-slide").hover(function(){TweenMax.isTweening($("#slide1"))||(1==etape?(getEtape2Slide(),etape=2):2==etape&&(getEtape3Slide(),etape=3),tlbouton1.pause(),tlBtnNextSlide=new TimelineMax,animateScaleBtn($("a#btn-next-slide"),tlBtnNextSlide))},function(){tlbouton1.play(),stopAnimateScaleBtn(tlBtnNextSlide)}),$("a#btn-prev-slide").hover(function(){2==etape?(getReverseEtape2Slide(),etape=1):3==etape&&(getReverseEtape3Slide(),etape=2),tlBtnPrevSlide=new TimelineMax,animateScaleBtn($("a#btn-prev-slide"),tlBtnPrevSlide)},function(){stopAnimateScaleBtn(tlBtnPrevSlide)}),$("#bloc-slides").on("mousewheel",function(e){mouseHandle(e,tlSlides)}),$("#bloc-btn-notre-actu").hover(function(){animateApparitionBlocActus()},function(){}),$("a#btn-fermer-actus").hover(function(){animateDisparitionBlocActus()},function(){}),$("#bloc-slides").hover(function(){animateDisparitionBlocActus()},function(){})):$("#content").addClass("bloc-actus-ouvert"),$("a#btn-retour-actu").click(function(){return oldVideoActuID=$("li.actu.has-video").hasClass("ouvert")?$("li.actu.has-video.ouvert").attr("id"):$("li.actu.has-actu.ouvert").attr("id"),TweenMax.to($("#video-actu-"+oldVideoActuID),0,{display:"none"}),TweenMax.to($("#video-actu-"+oldVideoActuID),actusAnimationTime,{opacity:"0"}),TweenMax.to($("#bloc-actus"),actusAnimationTime,{x:"0"}),TweenMax.to($("#bloc-videos-actus"),actusAnimationTime,{x:"-800px",onComplete:function(){stopVideos()}}),$("li.actu.has-video.ouvert").removeClass("ouvert"),TweenMax.to($(".actu"),actusAnimationTime,{opacity:"1"}),!1}),$("#btn-next-slide").click(function(){return 1==etape?(getEtape2Slide(),etape=2):2==etape&&(getEtape3Slide(),etape=3),!1}),$("#btn-prev-slide").click(function(){return 2==etape?getReverseEtape2Slide():3==etape&&getReverseEtape3Slide(),!1}),$("li.actu.has-video").click(function(){return videoID=$(this).attr("id"),animateApparitionVideo(videoID),!1}),$("a#btn-fermer-actus").click(function(){animateDisparitionBlocActus()}),$("li.actu.has-actu").click(function(){return actuID=$(this).attr("id"),animateApparitionVideo(actuID),!1})}function readyMetiers(){initSlidesVision(),tlboutonMetier1=new TimelineMax,animateButtonArrow($("#btn-next-slide-metier .icon-arrow"),"y","4px","0.95","5",tlboutonMetier1),tlboutonMetier2=new TimelineMax,animateButtonArrow($("#btn-prev-slide-metier .icon-arrow-up"),"y","-4px","0.95","5",tlboutonMetier2),$("#vision").on("mousewheel",function(e){mouseHandleVision(e,tlSlidesVision,indexPucesVision)}),$("a#btn-next-slide-metier").hover(function(){TweenMax.isTweening($("#slide1-vision"))||(tlBtnNextSlideMetier=new TimelineMax,animateScaleBtn($("a#btn-next-slide-metier"),tlBtnNextSlideMetier),majPucesVision(2),TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"block"}),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision=2}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}))},function(){stopAnimateScaleBtn(tlBtnNextSlideMetier)}),$("a#btn-next-slide-metier2").hover(function(){TweenMax.isTweening($("#slide2-vision"))||(majPucesVision(3),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0",ease:textAnimationEase,onComplete:function(){indexPucesVision=3}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}))},function(){}),$("a#btn-prev-slide-metier").hover(function(){TweenMax.isTweening($("#slide2-vision"))||(tlBtnPrevSlideMetier=new TimelineMax,animateScaleBtn($("a#btn-prev-slide-metier"),tlBtnPrevSlideMetier),indexPuceVision=$("a.lien-puce-slides-vision.active").parent().index()+1,2==indexPuceVision?(majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase,onComplete:function(){indexPucesVision--,TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"none"})}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):3==indexPuceVision&&(majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision--}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})))},function(){stopAnimateScaleBtn(tlBtnPrevSlideMetier)}),$("a#btn-prev-slide-metier").click(function(){TweenMax.isTweening($("#slide2-vision"))||(stopAnimateScaleBtn(tlBtnPrevSlideMetier),tlBtnPrevSlideMetier=new TimelineMax,indexPuceVision=$("a.lien-puce-slides-vision.active").parent().index()+1,2==indexPuceVision?(majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase,onComplete:function(){indexPucesVision--,TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"none"})}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):3==indexPuceVision&&(majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision--}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})))}),$("ul#puces-metiers li.puce-metier").hover(function(){$("html").hasClass("no-touch")&&$(window).width()>767&&(idPuceMetier=$(this).attr("id"),$(this).css("z-index",2),animAppartitionBlocQuesion(idPuceMetier))},function(){$("html").hasClass("no-touch")&&$(window).width()>767&&($(this).css("z-index",""),animDisparitionBlocQuesion())}),$("ul#puces-metiers li.puce-metier .bloc-bulle").click(function(){return idPuceMetier=$(this).parent().attr("id"),$(".bloc-question").css("display","none"),$("#bloc-question-"+idPuceMetier).slideToggle(200,function(){}),!1}),$("ul#puces-slides-vision li.puce-slides-vision a.lien-puce-slides-vision").click(function(){if(!$(this).hasClass("active")){oldIndexPucesVision=$("a.lien-puce-slides-vision.active").parent().index()+1,indexPuceVisionClic=$(this).parent().index()+1,majPucesVision(indexPuceVisionClic);var e=indexPuceVisionClic-oldIndexPucesVision;e>0?"1"==oldIndexPucesVision&&"2"==indexPuceVisionClic?(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"block"}),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision=2}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):"2"==oldIndexPucesVision&&"3"==indexPuceVisionClic?(TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),indexPucesVision=3):"1"==oldIndexPucesVision&&"3"==indexPuceVisionClic&&(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"block"}),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),indexPucesVision=3):"2"==oldIndexPucesVision&&"1"==indexPuceVisionClic?(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"none"}),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase,onComplete:function(){indexPucesVision=1}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):"3"==oldIndexPucesVision&&"2"==indexPuceVisionClic?(TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision=2}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):"3"==oldIndexPucesVision&&"1"==indexPuceVisionClic&&(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"none"}),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase,onComplete:function(){indexPucesVision=1}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}))}return!1})}function readyCasClient(){if(window.location.hash){var e=window.location.hash.substring(1);$("li#"+e).length&&setTimeout(function(){if(!$("li#"+e).hasClass("ouvert")&&!TweenMax.isTweening($("ul#slides-cas-clients li.slide-cas-client .bloc-cache"))){fermerCasClient(),$("ul.logos-cas-client li.logo-cas-client").hasClass("active")&&(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),TweenMax.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}})),indexPuceCasClientClic=$("li#"+e).index()+1,majPucesCasClient(indexPuceCasClientClic);var i=$("li#"+e);idCasClient=$("li#"+e).attr("id");var t;t=new TimelineMax;var n=$("li.slide-cas-client#"+idCasClient+" .bloc-cache").height();TweenMax.to($("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache"),.2,{height:"0",ease:textAnimationEase,onComplete:function(){$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("display","none"),$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("height","auto"),$("ul#slides-cas-clients li.slide-cas-client.ouvert").removeClass("ouvert"),TweenMax.fromTo($("li.slide-cas-client#"+idCasClient+" .bloc-cache"),.4,{display:"block",height:"0"},{height:n+"px",ease:textAnimationEase,onComplete:function(){$("li.slide-cas-client#"+idCasClient+" .bloc-cache").css("height","auto"),$("li.slide-cas-client#"+idCasClient).addClass("ouvert"),$("#masque-slides-cas-clients").animate({scrollTop:400+84*i.index()-$("ul#puces-slides-cas-clients").offset().top},{duration:300}),customCasClientScroll()}})}})}},800)}else setTimeout(function(){if(!TweenMax.isTweening($("ul#slides-cas-clients li.slide-cas-client .bloc-cache"))){fermerCasClient(),$("ul.logos-cas-client li.logo-cas-client").hasClass("active")&&(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),TweenMax.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}})),indexPuceCasClientClic=$("li#dimensionnement").index()+1,majPucesCasClient(indexPuceCasClientClic);var e=$("li#dimensionnement");idCasClient=$("li#dimensionnement").attr("id");var i;i=new TimelineMax;var t=$("li.slide-cas-client#"+idCasClient+" .bloc-cache").height();TweenMax.to($("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache"),.2,{height:"0",ease:textAnimationEase,onComplete:function(){$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("display","none"),$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("height","auto"),$("ul#slides-cas-clients li.slide-cas-client.ouvert").removeClass("ouvert"),TweenMax.fromTo($("li.slide-cas-client#"+idCasClient+" .bloc-cache"),.4,{display:"block",height:"0"},{height:t+"px",ease:textAnimationEase,onComplete:function(){$("li.slide-cas-client#"+idCasClient+" .bloc-cache").css("height","auto"),$("li.slide-cas-client#"+idCasClient).addClass("ouvert"),$("#masque-slides-cas-clients").animate({scrollTop:400+84*e.index()-$("ul#puces-slides-cas-clients").offset().top},{duration:300}),customCasClientScroll()}})}})}},800);$("ul#slides-cas-clients li.slide-cas-client").click(function(){if(!$(this).hasClass("ouvert")&&!TweenMax.isTweening($("ul#slides-cas-clients li.slide-cas-client .bloc-cache"))){fermerCasClient(),$("ul.logos-cas-client li.logo-cas-client").hasClass("active")&&(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),TweenMax.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}})),indexPuceCasClientClic=$(this).index()+1,majPucesCasClient(indexPuceCasClientClic);var e=$(this);idCasClient=$(this).attr("id"),window.history.pushState(null,null,"#"+idCasClient);var i;i=new TimelineMax;var t=$("li.slide-cas-client#"+idCasClient+" .bloc-cache").height();TweenMax.to($("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache"),.2,{height:"0",ease:textAnimationEase,onComplete:function(){$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("display","none"),$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("height","auto"),$("ul#slides-cas-clients li.slide-cas-client.ouvert").removeClass("ouvert"),TweenMax.fromTo($("li.slide-cas-client#"+idCasClient+" .bloc-cache"),.4,{display:"block",height:"0"},{height:t+"px",ease:textAnimationEase,onComplete:function(){$("li.slide-cas-client#"+idCasClient+" .bloc-cache").css("height","auto"),$("li.slide-cas-client#"+idCasClient).addClass("ouvert"),$("#masque-slides-cas-clients").animate({scrollTop:400+84*e.index()-$("ul#puces-slides-cas-clients").offset().top},{duration:300})}})}})}return!1}),$("li.logo-cas-client").click(function(){var e;e=new TimelineMax;var i=!1;$(this).hasClass("active")&&(i=!0);var t=0;if($("ul.logos-cas-client li.logo-cas-client").hasClass("active")){if(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),!i){var n=$(this).parent().parent().parent();t=$(".part-cas-client ul.textes-cas-client li.texte-cas-client",n).height()}e.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}})}else $(this).parent().parent().parent().parent().addClass("cas-client-ouvert");if(i)fermerCasClient();else{idLogoCasClient=$("a",this).attr("id");var o=$("li#texte-"+idLogoCasClient).height();$(this).addClass("active");var n=$(this).parent().parent().parent(),a=$(".part-notre-reponse",n),s=$(".part-cas-client",n),l=$(".part-notre-reponse .bloc-cache-notre-reponse",n),c=$(".part-notre-reponse a.btn-notre-reponse",n);TweenMax.to(c,0,{css:{className:"+=btn-base"}}),$(window).width()>767?(TweenMax.to(a,.4,{width:"23%",ease:textAnimationEase}),TweenMax.to(s,.4,{width:"73%",borderLeft:"1px solid #c5d4db",paddingLeft:"20px",ease:textAnimationEase})):(TweenMax.to(a,.4,{width:"100%",ease:textAnimationEase}),TweenMax.to(s,.4,{width:"100%",borderLeft:"1px solid #c5d4db",paddingLeft:"10px",ease:textAnimationEase})),TweenMax.to(l,.4,{opacity:"0",ease:textAnimationEase,onComplete:function(){TweenMax.to(l,0,{display:"none"})}}),e.fromTo($("li#texte-"+idLogoCasClient),.4,{display:"block",height:t},{height:o+"px",ease:textAnimationEase,onComplete:function(){$("li#texte-"+idLogoCasClient).css("height","auto"),$("li#texte-"+idLogoCasClient).addClass("ouvert")}})}return!1}),$("ul#puces-slides-cas-clients li.puce-slides-cas-clients a.lien-puce-slides-cas-clients").click(function(){if(!$(this).hasClass("active")&&!TweenMax.isTweening($("ul#slides-cas-clients li.slide-cas-client .bloc-cache"))){oldIndexPucesCasClient=$("a.lien-puce-slides-cas-clients.active").parent().index()+1,indexPuceCasClientClic=$(this).parent().index()+1,majPucesCasClient(indexPuceCasClientClic),fermerCasClient(),$("ul.logos-cas-client li.logo-cas-client").hasClass("active")&&(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),TweenMax.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}}));var e=$("ul#slides-cas-clients li.slide-cas-client").eq(indexPuceCasClientClic-1);idCasClient=$("ul#slides-cas-clients li.slide-cas-client").eq(indexPuceCasClientClic-1).attr("id"),window.history.pushState(null,null,"#"+idCasClient);var i;i=new TimelineMax;var t=$("li.slide-cas-client#"+idCasClient+" .bloc-cache").height();TweenMax.to($("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache"),.2,{height:"0",ease:textAnimationEase,onComplete:function(){$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("display","none"),$("ul#slides-cas-clients li.slide-cas-client.ouvert .bloc-cache").css("height","auto"),$("ul#slides-cas-clients li.slide-cas-client.ouvert").removeClass("ouvert"),TweenMax.fromTo($("li.slide-cas-client#"+idCasClient+" .bloc-cache"),.4,{display:"block",height:"0"},{height:t+"px",ease:textAnimationEase,onComplete:function(){$("#masque-slides-cas-clients").animate({scrollTop:400+84*e.index()-$("ul#puces-slides-cas-clients").offset().top},{duration:300}),$("li.slide-cas-client#"+idCasClient+" .bloc-cache").css("height","auto"),$("li.slide-cas-client#"+idCasClient).addClass("ouvert")}})}})}return!1}),$(".part-notre-reponse a.btn-notre-reponse").click(function(){return $(this).hasClass("btn-base")&&(fermerCasClient(),$("ul.logos-cas-client li.logo-cas-client").hasClass("active")&&(oldIdLogoCasClient=$("ul.logos-cas-client li.logo-cas-client.active a").attr("id"),$("ul.logos-cas-client li.logo-cas-client.active").removeClass("active"),TweenMax.to($("li#texte-"+oldIdLogoCasClient),0,{display:"none",ease:textAnimationEase,onComplete:function(){$("li#texte-"+oldIdLogoCasClient).removeClass("ouvert")}}))),!1})}function mouseHandleVision(e,i,t){newDate=new Date;var n=!0;10>wheel&&newDate.getTime()-oldDate.getTime()<100?(scrollPos-=e.deltaY*(10-wheel),wheel++):newDate.getTime()-oldDate.getTime()>100?(wheel=0,scrollPos-=60*e.deltaY):n=!1,oldDate=new Date,n&&(e.deltaY<0?1==t?(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"block"}),majPucesVision(indexPucesVision+1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision++}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):2==t&&(majPucesVision(indexPucesVision+1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0",ease:textAnimationEase,onComplete:function(){indexPucesVision++}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase})):2==t?(TweenMax.to($("a#btn-prev-slide-metier"),0,{display:"none"}),majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase,onComplete:function(){indexPucesVision--}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})):3==t&&(majPucesVision(indexPucesVision-1),TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase,onComplete:function(){indexPucesVision--}}),TweenMax.to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase}),TweenMax.to($("#slide3-vision"),textAnimationTime,{top:"100%",opacity:"0",ease:textAnimationEase})))}function animAppartitionBlocQuesion(e){tlBlocQuestion=new TimelineMax,tlBlocBulle=new TimelineMax,tlPuce=new TimelineMax,tlBlocQuestion.fromTo($("#bloc-question-"+e),blocQuestionAnimationTime,{y:"20px",display:"none"},{y:"0",opacity:"1",display:"block",ease:Back.easeOut,delay:.1}),tlBlocBulle.fromTo($("#bloc-bulle-"+e),blocQuestionAnimationTime,{opacity:"1",y:"0"},{opacity:"0",y:"-10px"}).fromTo($(".bloc-bulle:not(#bloc-bulle-"+e+")"),blocQuestionAnimationTime,{opacity:"1"},{opacity:"0"},0),tlPuce.fromTo($("li.puce-metier:not(#"+e+") .contour-puce"),blocQuestionAnimationTime,{scale:"1"},{scale:"0.6"}).fromTo($("li.puce-metier:not(#"+e+") .contour-puce .rond-cible"),blocQuestionAnimationTime,{scale:"1"},{scale:"1.4"},0)}function animDisparitionBlocQuesion(){tlBlocQuestion.reverse(),tlBlocBulle.reverse(),tlPuce.reverse()}function initSlidesVision(){TweenMax.to($("#slide1-vision"),textAnimationTime,{top:"50%",opacity:"1",delay:.5})}function getEtape2SlideVision(){return tlSlide2Vision=new TimelineMax,tlSlide2Vision.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase}).to($("#slide2-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase},0),tlSlide2Vision}function getEtape3SlideVision(){return tlSlide3Vision=new TimelineMax,tlSlide3Vision.to($("#slide1-vision"),textAnimationTime,{top:"-350px",opacity:"0",ease:textAnimationEase}).to($("#slide2-vision"),textAnimationTime,{top:"-350px",opacity:"0.5",ease:textAnimationEase},0).to($("#slide3-vision"),textAnimationTime,{top:"50%",opacity:"1",ease:textAnimationEase},0),tlSlide3Vision}function pauseVision(){tlSlidesVision.pause()}function animateSlidesVision(){tlSlidesVision.play()}function majPucesVision(e){$("ul#puces-slides-vision li.puce-slides-vision a.lien-puce-slides-vision").removeClass("active"),$("ul#puces-slides-vision li.puce-slides-vision a.lien-puce-slides-vision").eq(e-1).addClass("active")}function stopVideos(){$(".video-actu iframe").each(function(e){$(this).attr("src",$(this).attr("src"))})}function fermerCasClient(){if($(window).width()>767){if($("li.slide-cas-client.ouvert").hasClass("cas-client-ouvert")){var e=$("li.slide-cas-client.ouvert.cas-client-ouvert");e.removeClass("cas-client-ouvert");var i=$(".bloc-cache .part-notre-reponse a.btn-notre-reponse",e);TweenMax.to(i,0,{css:{className:"-=btn-base"}}),TweenMax.to($(".bloc-cache .part-notre-reponse",e),.4,{width:"40%",ease:textAnimationEase}),TweenMax.to($(".bloc-cache .part-cas-client",e),.4,{width:"56%",borderLeft:"none",paddingLeft:"0",ease:textAnimationEase}),TweenMax.to($(".bloc-cache .part-notre-reponse .bloc-cache-notre-reponse",e),0,{display:"block",onComplete:function(){TweenMax.to($(".bloc-cache .part-notre-reponse .bloc-cache-notre-reponse",e),.4,{opacity:"1",ease:textAnimationEase})}})}}else if($("li.slide-cas-client.ouvert").hasClass("cas-client-ouvert")){var e=$("li.slide-cas-client.ouvert.cas-client-ouvert");e.removeClass("cas-client-ouvert");var i=$(".bloc-cache .part-notre-reponse a.btn-notre-reponse",e);TweenMax.to(i,0,{css:{className:"-=btn-base"}}),TweenMax.to($(".bloc-cache .part-notre-reponse",e),.4,{width:"100%",ease:textAnimationEase}),TweenMax.to($(".bloc-cache .part-cas-client",e),.4,{width:"100%",borderLeft:"none",paddingLeft:"0",ease:textAnimationEase}),TweenMax.to($(".bloc-cache .part-notre-reponse .bloc-cache-notre-reponse",e),0,{display:"block",onComplete:function(){TweenMax.to($(".bloc-cache .part-notre-reponse .bloc-cache-notre-reponse",e),.4,{opacity:"1",ease:textAnimationEase})}})}}function majPucesCasClient(e){$("ul#puces-slides-cas-clients li.puce-slides-cas-clients a.lien-puce-slides-cas-clients").removeClass("active"),$("ul#puces-slides-cas-clients li.puce-slides-cas-clients a.lien-puce-slides-cas-clients").eq(e-1).addClass("active")}function customCasClientScroll(){$(window).width()>767&&niceScrolls.push($("#masque-slides-cas-clients").niceScroll({cursorcolor:"#fff",cursorwidth:"3px",cursorborderradius:"3px",railalign:"right",background:"rgba(255, 255, 255, 0.2)",cursorborder:"none",autohidemode:"none"}))}var borderColor,button,wrapper,menuBottom,violetIntro="#ab0464",etape=1,textAnimationTime=.8,textAnimationEase=Cubic.easeInOut,arrowVerticalAnimationTime=.2,arrowHorizontalAnimationTime=.2,arrowAnimationTime=.7,actusAnimationTime=.5,blocActusAnimationTime=.2,blocActusDelay=.2,btnAnimationTime=.3,videoID,actuID,oldVideoActuID,topLigneActuVideo,topBlocActus,scrollBlocVideo,hauteurScrollAlignementVideo,slide1=$("#slide1"),slide2=$("#slide2"),slide3=$("#slide3"),hauteurBlocSlides,hauteurBlocDispo,wheel,oldDate=new Date,scrollPos,largeurFenetre,hauteurFenetre,nbPictoHorizontal,nbPictoVertical,currentPicto=0,arrayPictosIntro=new Array("arobase","coeur","fille-1","fille-2","fille-3","fille-4","homme-1","homme-2","homme-3","homme-4","fille-1","fille-2","fille-3","homme-1","homme-3","homme-4","mail","videochat"),randomPictoIntro,ecartementHorizontalPictosIntro=168,ecartementVerticalPictosIntro=90,idPuceMetier,tlBlocQuestion,tlBlocBulle,tlPuce,blocQuestionAnimationTime=.3,tlBtnNextSlideMetier,tlBtnPrevSlideMetier,tlboutonMetier1,tlboutonMetier2,tlSlidesVision,tlSlide2Vision,tlSlide3Vision,oldIndexPucesVision,indexPucesVision=1,indexPuceVisionClic,idCasClient,oldIdlogoCasClient,idLogoCasClient,oldIndexPucesCasClient,indexPuceCasClientClic,tl,tl2,tlSlides,tlSlide1,tlSlide2,tlSlide3,tlBtnNextSlide,tlBtnPrevSlide,tlButtonArrow,tlButtonArrowHorizontal,tlBlocActus=new TimelineMax,tlSidebarBlocActus=new TimelineMax,tlBlocBtnActus=new TimelineMax,tlBlocSlides=new TimelineMax,tlBlocVideo,tlBlocActusPart2,tlBlocSlidesPart2,tlbouton1,tlbouton2,tlbouton3,tlbouton4,index="";$(document).ready(function(){boutonIMA(),blocContact(),$("a#btn-contact").click(function(){if($(this).hasClass("active")){$(this).removeClass("active");var e=new TimelineMax;e.to($("#bloc-contact"),.4,{opacity:"0",y:"30px",ease:textAnimationEase}),e.to($("#bloc-contact"),0,{display:"none",ease:textAnimationEase})}else{$(this).addClass("active");var e=new TimelineMax;e.to($("#bloc-contact"),0,{display:"block",ease:textAnimationEase}),e.to($("#bloc-contact"),.4,{opacity:"1",y:"0",ease:textAnimationEase})}return!1}),$("body").hasClass("mentions-legales")&&readyMentionsLegales(),($("body").hasClass("intro")||$("body").hasClass("home"))&&readyIntro(),($("body").hasClass("metiers")||$("body").hasClass("page-template-templatesvision-php")||$("body").hasClass("page-template-templatesmetiers-php"))&&readyMetiers(),($("body").hasClass("cas-clients")||$("body").hasClass("page-template-templatesreferences-php"))&&readyCasClient(),initLoad()}),$(window).resize(function(){($("body").hasClass("intro")||$("body").hasClass("home"))&&backgroundPictoGrid()}),$(window).bind("hashchange",function(e){});