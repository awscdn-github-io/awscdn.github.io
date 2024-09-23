var __FS = $(document), __ose = 1488;
__FS.ready(function(){
	__FS.on('change', '.__inpbx input', function(){
		var a = $(this).val(), b = '__fx';
		if(a == ''){
			$(this).removeClass(b);
		} else {
			if($(this).hasClass(b)){ } else {
				$(this).addClass(b);
			}
		}
	}).on('mouseenter', '[data-ttip]', function(){
		var a = $(this).attr('data-ttip'), b = $(this).offset(), bX = b.left, bY = b.top, c = $(this).outerHeight(), g = $(this).outerWidth(), j = $(window).outerWidth();
		$('body').append('<div class="po ab __ttip" style="left: '+bX+'px; top: '+(bY+c)+'px">'+a+'</div>');
		var d = $('.__ttip').outerWidth(), f = (d/2), h = (bX-f+g/2), k = h;
		if((h+d) > (j-24)){
			k = (j-d-24);
		} else if(h < 24) {
			k = 24;
		}
		$('.__ttip').css({
			left: k+'px'
		});
		$(this).mouseleave(function(){
			$('.__ttip').remove();
		});
	}).on('click', '.__seBt', function(){
		var a = $(this).parent();
		a.toggleClass('open');
	}).on('click', '.__inpSe ul li[data-val]', function(){
		var a = $(this).closest('.__inpSe'), b = $(this).attr('data-val'), c = $(this).text(), d = 'active';
		a.children('.__seBt').children('.teX').text(c);
		a.children('input').val(b);
		$(this).parent().children('.'+d).removeClass(d);
		$(this).addClass(d);
		a.closest('.__inpSe').removeClass('open');
	}).on('click', '.__mnApp', function(){
		var a = $(this).attr('id'), b = '__nx'+a, c = 'body';
		$(c).addClass(b);
	}).on('click', 'body.__nxapps *', function(){
		setTimeout(()=>{
			$('body').removeClass('__nxapps');
		}, 100);
	});
});
function AXf(a, b) {
	var c = a.attr('method'), d = a.attr('data-a'), f = new FormData(a[0]);
	$.ajax({
		type: c,
		url: '/apis/'+d,
		data: f,
		processData: false,
		contentType: false,
		success: b,
		error: AXx
	});
}
function AXg(a, b, c = 'GET', d = {}){
	$.ajax({
		type: c,
		url: a,
		data: d,
		success: b,
		error: AXx
	});
}
function AXx(){
	AXy('nan');
}
function AXy(c){
	var a = $('body'), b = '', f = 'E', g = {'nan':['E','Server didn\'t response'],'unauthorized':['E','Wrong Username and Password'],'title_too_short':['E', 'Title too Short (min 2 chars)'],'theme_not_found':['E','Theme not found'],'access_denied':['E','Access Denied'],'invalid_keys':['E','Invalid TMDB Apis format'],'invalid_domain':['E', 'Invalid domain format'],'invalid_histats':['E','Invalid Histats ID'],'domain_exists':['E','Domain exists'],'choose_a_domain':['E', 'Please choose a domain'],'user_nan':['E', 'User didn\'t exists'],'user_removed':['E','User has been deleted'],'license_domain_limit':['E', 'Your license reach limit for add domain'],'username_exists':['E','Username exists'],'email_exists':['E','Email exists'],'email_invalid':['E','Invalid email format'],'username_invalid':['E','Username must be lowercase Alphabet, Numeric and or Underscore (3-20 chars)'],'fullname_invalid':['E','Fullname must be 3-30 chars'],'password_short':['E','Password too short, password must more than 8 chars'],'invalid_direct_link':['E','Invalid Direct Link'],'invalid_cdn_link':['E', 'Invalid CDN Link'],'invalid_url_network':['E', 'Invalid URL Network'],'invalid_custom_shortner':['E','Invalid Custom Shortner URL'],'video_play_long':['E', 'Please type video play between 5 and 30 (in second)'],'site_not_found':['E','Site not found'],'invalid_path':['E', 'Comments Path can\'t contains any pages link (play, movie, tv, etc)'],'invalid_path_format':['E','Comments Path only support Alphabet, Numeric, Strip (<b>-</b>), and or Underscore (<b>_</b>)']}, h = jKd();
	c.forEach((d) => {
		if(typeof g[d] == 'object'){
			f = g[d][0];
			var j = g[d][1];
		} else {
			f = 'E';
			var j = d;
		}
		b += '<div class="nTc nTc'+f+'">'+j+'</div>';
	});
	if($('.__msg').length == 0){
		a.append('<div class="fl fl-dco po fi __msg" id="'+h+'">'+b+'</div>');
		setTimeout(() => {
			$('.__msg#'+h).remove();
		}, 3000);
	} else {
		$('.__msg').html(b);
		setTimeout(() => {
			$('.__msg#'+h).attr('id', '').html('');
		}, 3000);
	}
	
}
function jKa(a){
	a.preventDefault();
}
function jKb(a, b, e = window.location.hostname, c = 0){
	if(c <= 0){
		var d = (-3600*24);
	} else {
		var d = c;
	}
	document.cookie = a+'='+b+'; max-age='+d+'; samesite=Lax; Secure; path=/; domain='+e+';';
}
function jKc(){
	$('form.nonce, form.nonce input, form.nonce textarea').attr({
		'autocomplete': 'off',
		'spellcheck': 'false'
	});
}
function jKd(a = 10, c = false){
	a = parseInt(a);
	if(a <= 0) {
		a = 10;
	}
	var b = 'abcdefghijklmnopqrstuvwxyz';
	b += b.toUpperCase();
	b += '0123456789-_';
	var d = b.split(''), e = '';
	for(var i=0; i<a; i++){
		if(i == 0){
			var h = Math.floor(Math.random() * (d.length-12));
		} else {
			var h = Math.floor(Math.random() * (d.length-2));
		}
		e += d[h];
	}
	return e;
}
function jKe(a, b = true){
	if(b){
		var c = btoa(a), d = c.split(''), e = '';
		for(var i=0; i<d.length; i++){
			e += d[i];
			if(i > 1 && i%3 == 0){
				e += jKd(1);
			}
		}
		return e;
	} else {
		var c = a.split(''), d = '';
		for(var i=0; i<c.length; i++){
			var e = (i+1);
			if(i > 1 && i%4 == 0){ } else {
				d += c[i];
			}
		}
		return atob(d);
	}
}
function jKf(){
	var a = 'index', b = window.location.pathname.substring(1);
	return b;
}
function jKg(a, b = []){
	if(typeof b == 'object' && b.length > 0){
		for(var i=0; i<b.length; i++){
			if(b[i] == a){
				return true;
			}
		}
	}
	return false;
}
function jKh(a){
	history.pushState({}, '', a);
}
function jKi(a = []){
	var b = [];
	if(typeof a == 'object'){
		b = a;
	} else {
		b.push(a);
	}
	
	if(b.length > 0){
		b.forEach((c) => {
			var d = $(c), e = d.val(), f = [], h = '', m = jKd(10), o = '<ul class="po ab fl fl-dco">', s = false;
			if(typeof d.attr('id')){
				f.push(['id', d.attr('id')]);
				s = d.attr('id');
			}
			if(typeof d.attr('name')){
				f.push(['name', d.attr('name')]);
			}
			d.children('option').each(function(p) {
				var q = $(this).val(), r = $(this).text();
				o += '<li data-val="'+q+'" class="po re aba __vh0a fl fl-ca';
				if(q == e){
					o += ' active';
					h = r;
				}
				o += '"><span class="po re teX">'+r+'</span></li>';
			});
			o += '</ul>';
			var g = '<div class="po re __inpSe"';
			if(s){
				g += ' data-id="'+s+'"';
			}
			g += '><a class="fl fl-ca po re aba __seBt"><span class="teX">'+h+'</span><i class="material-symbols-outlined">arrow_drop_down</i></a>'+o+'<input type="hidden" ';
			f.forEach((j) => {
				g += ' '+j[0]+'="'+j[1]+'"';
			});
			g += ' data-id="'+m+'" /></div>';
			d.after(g);
			
			var n = 'input[data-id="'+m+'"]', k = setInterval((l) => {
				if($(n).length == 1){
					$(n).val(e);
					clearInterval(k);
					d.remove();
				}
			}, 100);
		});
	}
}