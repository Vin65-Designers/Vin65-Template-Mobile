var v65 = {
	home: {
		initPhotoGallery : function(){
			if($("#slider").length){
				$('#slider').v65mPhotoGallery({
					galleryId: "faeca5fe-2264-112b-b112-de10559a1183",
					auto: 3000
				});
			}
		}
	},
	page : {
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65mPhotoGallery();
			}
		}
	}
}

$(document).ready(function() {
	v65.home.initPhotoGallery();
	v65.page.initPhotoGallery();
});

// This plugin is built to integrate with Swipe.js - https://github.com/bradbirdsall/Swipe

;(function($,undefined){
	$.fn.v65mPhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			timestamp : "&timestamp="+ new Date().getTime(),
			startSlide : 0, // Set starting Slide (0 index)
			speed : 500, // Slide transition speed
			auto : 5000, // How long each slide will show
			controlNav : true, // bullet navigation
			continuous: true
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("");
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var siteURL = $(xml).find('album').attr('siteURL'), images = '<div class="v65-galleryWrap">';
				$(xml).find('img').each(function() {
					var 	location = 'assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption');
					images += '<img src="'+siteURL+location+photo+'" alt="'+caption+'"/>';
				});
				gallery.append(images + '</div>');
			},
			complete: function(){
	   			gallery.Swipe({
					startSlide:settings.startSlide, // Set starting Slide (0 index)
					speed:settings.speed, // Slide transition speed
					auto:settings.auto, // How long each slide will show
					continuous: settings.continuous,
					callback : function(pos){
						if(settings.controlNav){
							$(".v65-swipeNav li").removeClass("active").eq(pos).addClass("active")
						}
					}
				}).data("Swipe");

				if(settings.controlNav){
					var 	swipeNav = '<div class="v65-swipeNav"><ul>', i;

					for(i = 1; i <= gallery.data("Swipe").getNumSlides(); i++){
						swipeNav += '<li>' + i + '</li>'
					}

					gallery.after(swipeNav + '</div>');
					$(".v65-swipeNav li").first().addClass("active")
				}
	   		}
	   	});
	}
})(jQuery);