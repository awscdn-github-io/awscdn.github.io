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
	}).on('click', '.__calIt', function(){
		var a = $(this).text(), b = $(this).closest('.__inpCa'), c = b.attr('data-mm'), d = b.attr('data-yy'), f = $(this).closest('.__calWi').find('.__yearSelect').children('span').text();
		b.children('[type=hidden]').val(d+'-'+c+'-'+jKr(a));
		$(this).parent().children('.__calIt').removeClass('__calAc');
		$(this).addClass('__calAc');
		setTimeout(() => {
			b.children('.__calOp').children('span').text(jKr(a)+' '+f);
			b.children('.__calOp').removeClass('__calOpAc');
		}, 100);
	}).on('click', '.__calOp', function(){
		$(this).toggleClass('__calOpAc');
	}).on('click', '.__calMonth a', function(){
		var a = $(this).closest('.__inpCa'), b = a.attr('data-yy'), c = a.attr('data-mm'), d = new Date();
		b = parseInt(b), c = parseInt(c);
		if($(this).hasClass('__prevMonth')){
			d = new Date(b, (c-1), 1, 0, 0, 0);
		} else {
			d = new Date(b, (c+1), 1, 0, 0, 0);
		}
		var e = d.getTime(), f = (e-3600000*24), g = new Date(f), g1 = g.getFullYear(), g2 = g.getMonth(), g3 = g.getDate(), g4 = new Date(g1, g2, 1, 0, 0, 0).getDay(), h = '';
		g2 = jKr(g2+1);
		$(this).parent().parent().children('.__yearSelect').children('.teX').text(jKp(g.getMonth())+' '+g1);
		if(g4 > 0){
			for(var i=0; i<g4; i++){
				h += '<span></span>';
			}
		}
		for(var i=1; i<= g3; i++){
			h += '<span class="__calIt">'+i+'</span>';
		}
		a.find('.__calBoxiB').html(h);
		a.attr('data-yy', g1);
		a.attr('data-mm', g2);
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
	var a = $('body'), b = '', f = 'E', g = {'nan':['E','Server didn\'t response'],'unauthorized':['E','Wrong Username and Password'],'title_too_short':['E', 'Title too Short (min 2 chars)'],'theme_not_found':['E','Theme not found'],'access_denied':['E','Access Denied'],'invalid_keys':['E','Invalid TMDB Apis format'],'invalid_domain':['E', 'Invalid domain format'],'invalid_histats':['E','Invalid Histats ID'],'domain_exists':['E','Domain exists'],'choose_a_domain':['E', 'Please choose a domain'],'user_nan':['E', 'User didn\'t exists'],'user_removed':['E','User has been deleted'],'license_domain_limit':['E', 'Your license reach limit for add domain'],'username_exists':['E','Username exists'],'email_exists':['E','Email exists'],'email_invalid':['E','Invalid email format'],'username_invalid':['E','Username must be lowercase Alphabet, Numeric and or Underscore (3-20 chars)'],'fullname_invalid':['E','Fullname must be 3-30 chars'],'password_short':['E','Password too short, password must more than 8 chars'],'invalid_direct_link':['E','Invalid Direct Link'],'invalid_cdn_link':['E', 'Invalid CDN Link'],'invalid_url_network':['E', 'Invalid URL Network'],'invalid_custom_shortner':['E','Invalid Custom Shortner URL'],'video_play_long':['E', 'Please type video play between 5 and 30 (in second)'],'site_not_found':['E','Site not found'],'invalid_path':['E', 'Comments Path can\'t contains any pages link (play, movie, tv, etc)'],'invalid_path_format':['E','Comments Path only support Alphabet, Numeric, Strip (<b>-</b>), and or Underscore (<b>_</b>)'],'wrong_password':['E', 'Wrong Password'],'new_wrong_password':['E', 'New Password missmatch'],'invalid_paid':['E','Nominal pembayaran tidak valid']}, h = jKd();
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
function jKj(b){
	var a = new URLSearchParams(window.location.search);
	if(a.has(b)){
		return a.get(b);
	}
	return false;
}
function jKk(a, f = 0, b = 'asc'){
	if(f){
		var c = a.sort((d, e) => {
			if(d[f] < e[f]){
				return -1;
			} else if(d[f] > e[f]){
				return 1;
			}
			return 0;
		});
	} else {
		var c = a.sort((d, e) => {
			if(d < e){
				if(b == 'asc'){
					return -1;
				} else {
					return 1;
				}
			} else if(d > e){
				if(b == 'asc'){
					return 1;
				} else {
					return -1;
				}
			}
			return 0;
		});
	}
	
	return c;
}
function jKl(a = '', b = '', d = '', f = 'text'){
	var c = '<label class="po re __inpbx"><input type="';
	if(f){
		c += f;
	} else {
		if(a.match(/password/gi)){
			c += 'password';
		} else {
			c += 'text';
		}
	}
	
	c += '" name="'+a+'" id="'+a+'" class="po re" /><span class="po ab __vh0 __inpBr"></span><span class="po ab __inpTt">'+d+'</span></label>';
	var e = setInterval(()=>{
		if($('#'+a).length == 1){
			clearInterval(e);
			$('#'+a).val(b).trigger('change');
		}
	}, 100);
	return c;
}
function jKm(b = 'material-symbols-outlined', c = 'Submit', d = 'save'){
	var a = '<div class="fl fl-ca __frBtn"><button type="submit" class="fl fl-ca"><i class="'+b+'">'+d+'</i><span class="teX">'+c+'</span></button></div>';
	return a;
}
function jKn(a, f = ''){
	var b = new Blob([a], {type: 'text/csv'}), c = document.createElement('a'), d = jKj('id');
	if(f !== ''){
		d = f;
	}
	c.download = d+'.csv';
	c.href = window.URL.createObjectURL(b);
	c.className = 'po ab __vh0 __nnn';
	c.target = '_blank';
	document.body.appendChild(c);
	c.click();
	document.body.removeChild(c);
}
function jKo(a = [], j = 'en'){
	var b = [];
	if(typeof a == 'string'){
		b.push(a);
	} else {
		b = a;
	}
	if(b.length > 0){
		b.forEach((c) => {
			var d = '', e = $(c), fA = '', fB = '', fC = '', fD = '', fE = e.val(), h = fE, l = 30, o = 0, p = 1, q = jKd(10), r = 2024, s = 1;
			if(typeof e.attr('min') == 'string'){
				fA = e.attr('min');
			}
			if(typeof e.attr('max') == 'string'){
				fB = e.attr('max');
			}
			if(typeof e.attr('name') == 'string'){
				fC = e.attr('name');
			}
			if(typeof e.attr('id') == 'string'){
				fD = e.attr('id');
			}
			if(fE.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/g)){
				var g = fE.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/m), g1 = parseInt(g[1]), g2 = parseInt(g[2]), g3 = parseInt(g[3]), p = g3;
				r = g1, s = g2;
				g2 = (g2-1);
				h = jKr(g3)+' '+jKp(g2, j)+' '+g1;
				var m = new Date(g1, (g2+1), 1, 0, 0, 0).getTime(), l = new Date((m-(3600000*24))).getDate(), o = new Date(g1, g2, 1, 0, 0, 0).getDay();
			}
			var n = '';
			if(o > 0){
				for(var iB=0; iB<o; iB++){
					n += '<span class="e"></span>';
				}
			}
			for(var iA=1; iA<=l; iA++){
				n += '<span class="__calIt ';
				if(iA == p){
					n += ' __calAc';
				}
				n += '">'+iA+'</span>';
			}
			d += '<div class="po re fl fl-ca __inpCa" data-attr="'+q+'" data-mm="'+s+'" data-yy="'+r+'"><a class="fl fl-ca po re __calOp"><span class="teX">'+h+'</span><i class="material-symbols-outlined">calendar_month</i></a>';
			d += '<div class="po ab fl fl-dco __calWi"><div class="fl fl-ca fl-sbj __calWiData"><a class="fl fl-ca __yearSelect"><span class="teX">'+jKp(g2, j)+' '+g1+'</span><i class="material-symbols-outlined">arrow_drop_down</i></a><div class="fl fl-ca fl-sbj __calMonth"><a data-ttip="Prev" class="fl fl-cc __prevMonth"><i class="material-symbols-outlined">chevron_left</i></a><a data-ttip="Next" class="fl fl-cc __nextMonth"><i class="material-symbols-outlined">chevron_right</i></a></div></div><div class="fl fl-dco __calBox"><div class="fl fl-ca fl-sbj __calBoxi __calBoxiA">';
			jKq('id').forEach((k) => {
				d += '<span>'+k+'</span>';
			});
			d += '</div><div class="fl fl-ca fl-wr __calBoxi __calBoxiB">'+n+'</div></div></div>';
			d += '<input type="hidden" id="'+fD+'" name="'+fC+'" value="'+fE+'" /></div>';
			e.after(d);
			e.remove();
		});
	}
}
function jKp(a, c = 'id'){
	var b = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
	if(c !== 'id'){
		b = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	}
	return b[a];
}
function jKq(a = 'id'){
	var b = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
	if(a !== 'id'){
		b = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	}
	return b;
}

function jKr(a){
	if(a.toString().length == 1){
		return '0'+a;
	}
	return a;
}