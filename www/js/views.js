/**
 * Created by dev on 2018/01/13.
 */

$(document).ready(function() {
	console.log(/(.+)(_view)/.test(location.hash));
	location.hash = /(.+)(_view)/.test(location.hash)?location.hash:"#welcome_view";
	$(window).on("hashchange",function(){
		app_events.change_views();
	});
	$(".btn.signin").click(function () {
	   app_events.show_signin();
   });
	$(".btn.signup").click(function () {
		app_events.show_signup();
	});
	$('.button-collapse').sideNav();
});

