$(function() {
	$("#subheader").stick_in_parent()
		.on("sticky_kit:stick", function(e) {
			var margin = ($(window).width() - $(".anchorBar").width())/2;
			var str = "0px " + margin;
			$(".anchorBar").css({"margin-left" : margin, "margin-right" : margin});
			$(".pageAnchor.middle").css({"margin" : "0px 100px"});
		})
		.on("sticky_kit:unstick", function(e) {
			$(".anchorBar").css({"margin" : "0px 0px"});
			$(".pageAnchor.middle").css({"margin" : "0px 40px"});
		});
		
	$(".pageAnchor").click(function(e) {
		var id = "#" + e.target.innerHTML.toLowerCase();
		var buffer = $("#subheader").height() + parseInt($("#subheader").css("padding-top")) -5;
		$("html,body").animate({scrollTop: $(id).offset().top-buffer},"slow");
	});
});