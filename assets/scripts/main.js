!function e(n,t,i){function o(a,r){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!r&&u)return u(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=t[a]={exports:{}};n[a][0].call(c.exports,function(e){var t=n[a][1][e];return o(t?t:e)},c,c.exports,e,n,t,i)}return t[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,n,t){n.exports=function(e){function n(){var n=$(window).height(),t=$(window).width();e.height(n),e.width(t),$("h2",e).css("top",n/3)}var t,e=$(e);n(),$(window).on("resize",function(e){clearTimeout(t),timeoutResize=setTimeout(function(){n()},300)}).trigger("resize")}},{}],2:[function(e,n,t){n.exports=function(e){var e=$(e),n=$('a[href ^= "#"]',e),t=60,i=$(".nav-line");n.on("click",function(n){n.preventDefault();var o=this.hash,s=$(o);$("html, body").stop().animate({scrollTop:s.offset().top-t},500,"swing",function(){history.pushState?history.pushState(null,null,o):location.hash=o}),i.hasClass("is-open")&&(i.removeClass("is-open"),e.slideToggle("hide"))})}},{}],3:[function(e,n,t){n.exports=function(e){$(".nav-burger",e).on("click",function(n){n.preventDefault(),$(".navbar-menu",e).slideToggle(),$(".nav-line",e).toggleClass("is-open")})}},{}],4:[function(e,n,t){n.exports=function(e){function n(){slideWidth=c.width(),$("img",l).width(slideWidth),l.width(slideWidth*f)}function t(){clearTimeout(r),r=setTimeout(function(){i()},6e3)}function i(){var n=$(".current",e).data("count");s(n!=f-1?n+1:0)}function o(){var n=$(".current",e).data("count");s(0!=n?n-1:f-1)}function s(n){var i=$("a",m),o=d.filter("[data-count="+n+"]");$(".current",e).removeClass("current"),d.not(".current").find(".slide-name, .slide-place").removeClass("is-show"),l.css("left",-n*slideWidth),o.addClass("current"),i.filter("[data-count="+n+"]").addClass("current"),setTimeout(function(){$(".slide-name",o).addClass("is-show")},800),setTimeout(function(){$(".slide-place",o).addClass("is-show")},1500),t()}function a(){for(var e=0;f>e;e++)$("<a/>",{html:e+1,"data-count":e,"class":"pagination"}).appendTo(m)}var r,u,e=$(e),c=$(".slide-window",e),l=$(".slide-list",e),d=$(".slide",e),f=d.length,m=$(".paginations",e),p=0;$(window).on("resize",function(e){clearTimeout(u),u=setTimeout(function(){n()},300)}).trigger("resize"),d.each(function(){$(this).attr("data-count",p),p++}),n(),a(),s(0),$(".next",e).on("click",function(e){e.preventDefault(),i()}),$(".previous",e).on("click",function(e){e.preventDefault(),o()}),$(".pagination",m).on("click",function(e){e.preventDefault(),s($(this).data("count"))})}},{}],5:[function(e,n,t){n.exports=function(e,n){var t=$(e),n=$(n),i="./submit-form.php",o=$(".succeed"),s=$(".fail");t.on("click",function(){n.submit()}),n.validate({rules:{name:"required",email:{required:!0,email:!0},subject:"required",message:"required"},messages:{name:"Please enter your name.",email:{required:"Please enter your email.",email:"Please enter a valid email address."},subject:"Please enter your subject.",message:"Please enter your message."},errorPlacement:function(e,n){e.appendTo(n.parent())},submitHandler:function(){$.ajax({type:"POST",url:i,data:n.serialize(),success:function(e){n.addClass("is-hide"),1==e?o.addClass("is-show"):0==e&&s.addClass("is-show")}})}})}},{}],6:[function(e,n,t){!function(n){var t=e("./components/submit-form.js"),i=e("./components/inner-link.js"),o=e("./components/slide-show.js"),s=e("./components/navigation.js");Home=e("./components/home.js"),n(function(){new t(".submit-btn","#contact-form"),new i(".navbar"),new o(".slide-show"),new s(".navbar"),new Home(".home")})}(jQuery)},{"./components/home.js":1,"./components/inner-link.js":2,"./components/navigation.js":3,"./components/slide-show.js":4,"./components/submit-form.js":5}]},{},[6]);