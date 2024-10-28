var __FS = $(document);
__FS.ready(function(){
	AW();
});
function AW(){
	var a = window.location.hostname;
	$.ajax({
		type: 'GET',
		data: {a: a},
		url: '/apis/c',
		succes: function(){
			
		}, error: function(){
			
		}
	});
}