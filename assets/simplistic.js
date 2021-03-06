// HoverIntent r6 // 2011.02.26 // jQuery 1.5.1+ <http://cherne.net/brian/resources/jquery.hoverIntent.html> || @param  f  onMouseOver function || An object with configuration options || @param  g  onMouseOut function  || Nothing (use configuration options object) || @author Brian Cherne brian(at)cherne(dot)net
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

// ScrollTo // Copyright (c) 2007-2015 Ariel Flesler - aflesler@gmail.com | http://flesler.blogspot.com | Licensed under MIT | @author Ariel Flesler | @version 2.1.0
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));

// isMobile
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

// Makes it safe to do console.log() always.
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try{console.log();return window.console;}catch(err){return window.console={};}})());

///JavaScript Cookie v2.0.3 // https://github.com/js-cookie/js-cookie // Copyright 2006, 2015 Klaus Hartl & Fagner Brack // Released under the MIT license
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=n,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,i,r){var c;if(arguments.length>1){if("number"==typeof(r=e({path:"/"},t.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{c=JSON.stringify(i),/^[\{\[]/.test(c)&&(i=c)}catch(e){}return i=(i=encodeURIComponent(String(i))).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[n,"=",i,r.expires&&"; expires="+r.expires.toUTCString(),r.path&&"; path="+r.path,r.domain&&"; domain="+r.domain,r.secure?"; secure":""].join("")}n||(c={});for(var a=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,d=0;d<a.length;d++){var f=a[d].split("="),l=f[0].replace(p,decodeURIComponent),u=f.slice(1).join("=");'"'===u.charAt(0)&&(u=u.slice(1,-1));try{if(u=o&&o(u,l)||u.replace(p,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(e){}if(n===l){c=u;break}n||(c[l]=u)}catch(e){}}return c}return t.get=t.set=t,t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}()});

jQuery.fn.sortDomElements = (function() {
    return function(comparator) {
        return Array.prototype.sort.call(this, comparator).each(function(i) {
              this.parentNode.appendChild(this);
        });
    };
})();

jQuery(function($) {
  	if(!isMobile.any) {
      $('body').addClass('isNotMobile'); 
    }

  	$(document).on("click", ".quantity-box .minus", function() {
      	var wrapper = $(this).parent();
    	try {
          wrapper.find('input[type=number]').get(0).stepDown();
          wrapper.find('input[type=number]').change();
        } catch(e) {
          var value = (parseInt(wrapper.find('input[type=number]').val())-1);
          wrapper.find('input[type=number]').val((value>=0 ? value : 0));
          wrapper.find('input[type=number]').change();
        }
  	});
  	$(document).on("click", ".quantity-box .plus", function() {
      	var wrapper = $(this).parent();
    	try {
          wrapper.find('input[type=number]').get(0).stepUp();
          wrapper.find('input[type=number]').change();
        } catch(e) {
          var value = (parseInt(wrapper.find('input[type=number]').val())+1);
          wrapper.find('input[type=number]').val(value);
          wrapper.find('input[type=number]').change();
        }
  	});

  	/********* QUICK VIEW *********/
  	$(document).on('click', '.product-item .quick-view-btn', function(){
      var url = $(this).data('url');
      $('#loading-overlay').show();

      $.ajax({
        url: url,
        cache: false
      }).success(function(data){
        $('#loading-overlay').hide();
        Simplistic.openModal(data, 'quick-view');
      });

      return false;
    });

  	if($('#side-cart').length > 0) {
    	initSideCart();
  	}

  	
  		$('body').delegate('.add-to-cart-form', 'submit', function(){
            if(validateAddCart($(this))) {
              addToCart($(this));
            }
            return false;
        });
  	

  	$(window).scroll(function(){
      if($(this).scrollTop()<=200) {
        $('.scrollup').fadeOut();
      } else {
        $('.scrollup').fadeIn();
      }

      
    });
  
  	setupDropdownMenus();  
});

/**
 * Support for dropdown menus
 */
function setupDropdownMenus(){
  $('.header-drop .main-menu').html($('#header .main-menu').html());
    var config = {
      over: function () {
          $(this).addClass('active').find('.submenu:first').slideDown();
      }, 
      timeout: 400, 
      out: function () {
        $(this).removeClass('active').find('.submenu:first').slideUp();
      }
    };
    $('.main-menu .has-dropdown').hoverIntent(config);
}

function validateAddCart(form) {
  if(form.find('input[name=id]').val()=='') {
        var allOptionsSelected;
      	if(form.find('.single-option-selector').length > 0) {
            allOptionsSelected = true;
            form.find('.single-option-selector').each(function(){
                if($(this).val()=="") {
                    allOptionsSelected = false;
                    return false;
                }
            });
        } else {
          	allOptionsSelected = false;
        }
      	
      	if(allOptionsSelected) {
          	var errorMsg = form.find('.validation-msg').text();
          	if(errorMsg) {
          		alert(errorMsg);
            } else {
            	alert("The selected variant is sold out.");
            }
        } else {
        	var labels = [];
            form.find('.options label').each(function(key, obj){
                labels.push($(obj).text().replace(':', '').trim());
            });
            alert("You must select a "+labels.join('/')+".");
        }
      	return false;
    }
  	return true;
}

function initSideCart() {
	$('.header .cart-wrap').click(function(e){
      e.stopPropagation();
      showSideCart(true);
      return false;
    });

    $(document).click(function(event){
      if(!$(event.target).closest('#side-cart').length && $(event.target).attr('id')!="loading-overlay" && $('#side-cart').hasClass('open')) {
        hideSideCart();
      }
    });
}

/**
 * Ajax add-to-cart
 */
function addToCart(form){
	$('#loading-overlay').show();
  	if(modal) modal.close();

	$.ajax({
		type: 'POST',
		url: '/cart/add.js',
		data: form.serialize(),
		dataType: 'json',
		error: addToCartFail,
		success: addToCartSuccess,
		cache: false
	});
}

function addToCartSuccess(jqXHR, textStatus, errorThrown){
	updateCartDesc();
}

function addToCartFail(jqXHR, textStatus, errorThrown){
  	var response = $.parseJSON(jqXHR.responseText);
  	$('#loading-overlay').hide();
  	Simplistic.openModal('<div class="error-itemincart">'+response.description+'</div>', 'message');
}

function updateCartDesc(){
  	$.ajax({
		type: 'GET',
		url: '/cart?view=side-cart',
		cache: false,
      	success: function(data){
          	$('#loading-overlay').hide();
          
      		var animate = true;
          	if($('#side-cart').width()>0 && $('#side-cart').hasClass('open')) {
              	animate = false;
            }
          	$('#side-cart').remove();
          	$('#page').append(data);
          	if(modal) modal.close();
          	showSideCart(animate);
      			
      	}
	});
}

function showSideCart(animate) {
  $('body, html').css({overflow: 'hidden'});
  $('#page').addClass('mode-overlay');
  if(animate) {
    setTimeout(function(){$('#side-cart').addClass('open')}, 100);
  } else {
    $('#side-cart').removeClass('ease-animation-slow');
  	$('#side-cart').addClass('open');
    setTimeout(function(){$('#side-cart').addClass('ease-animation-slow')}, 200);
  }
  window.Rebuy.init();
}

function hideSideCart() {
  $('#side-cart').removeClass('open');
  $('#page').removeClass('mode-overlay');
  $('body, html').css({overflow: ''});
}

window.SimplisticJS = function (){
  this.formatMoney = "$ \{\{amount\}\}";
  
  this.handleize = function (str) {
    //basic implementation
    //source https://gist.github.com/dlindenkreuz/a439ec4b939f0561d6d9
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
  };

  this.getQueryParam = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  this.randomstring = function(L){
    var s= '';
    var randomchar=function(){
      var n= Math.floor(Math.random()*62);
      if(n<10) return n; //1-10
      if(n<36) return String.fromCharCode(n+55); //A-Z
      return String.fromCharCode(n+61); //a-z
    }
    while(s.length< L) s+= randomchar();
    return s;
  }

  this.validateEmail = function(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  this.openModal = function(content, css) {
    modal = new tingle.modal({
      closeMethods: ['overlay', 'button', 'escape'],
      closeLabel: "Close",
      cssClass: [css]
    });
    modal.setContent(content);
    modal.open();
  }

  this.onImagesLoaded = function(images, callback){
    var imagesLoaded = 0;
    images.each(function(){
      var img = new Image();
      img.onload = function() {
        imagesLoaded++;
        if(imagesLoaded==images.length) {
          callback();
        }
      };
      img.src = $(this).attr('src');
    });
  };
};
window.Simplistic = new SimplisticJS();