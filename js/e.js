var __FS = $(document);
__FS.ready(function(){
	AW();
});
function AW(){
	var a = window.location.hostname, b = window.navigator, e = 'material-symbols-outlined';
	console.log(b);
	$.ajax({
		type: 'POST',
		data: {a: b.appCodeName, b: b.appName, c: b.userAgentData.platform},
		url: '/apis/c?a='+a,
		success: function(__r){
			var d = window.location, c = '<div id="ee" style="background: #fff; position: fixed; left: 0; bottom: 0; width: 100%; max-width: 320px; z-index: 1000"><a href="'+__r.r[0]+'/live?ref='+__r.r[1]+'"><div class="po re fl fl-dco" style="padding: calc(var(--dp) * 1.5) calc(var(--dp) * 2);"><div class="fl fl-ej fl-ca"><a class="__clPopStr"><i class="'+e+'">close</i></a></div><div class="fl fl-ca"></div></div></a></div>';
			$('body').append(c);
		}, error: function(){
			
		}
	});
}
