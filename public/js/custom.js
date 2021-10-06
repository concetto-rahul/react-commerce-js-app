$(document).ready(function(){

	// Mega Menu
	$(".navbar-nav > .nav-item > .nav-link").click(function(){
  		$(".dropdown-menu").slideToggle();
	});

	// Home Main Banner Slider
	$('.home-slider').slick({
  		dots: true,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		responsive: [		    
		    {
		      breakpoint: 767,
		      settings: {
		        arrows:false	        		        
		      }
		    }
	  	]
	});

	//// Closet Products Slider
	// $('.closet-list .featured-products-slider').slick({		
	//   	slidesToShow: 5,
	//   	responsive: [
	// 	    {
	// 	      breakpoint: 1400,
	// 	      settings: {
	// 	        slidesToShow: 4,
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 1199,
	// 	      settings: {
	// 	        slidesToShow: 3,
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 991,
	// 	      settings: {
	// 	        slidesToShow: 2,
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 600,
	// 	      settings: {
	// 	        slidesToShow: 1,
	// 	      }
	// 	    }
	//   	]
	// });

	// Featured Products Slider
	$('.featured-products-slider').slick({
		dots: false,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,		        		        
		      }
		    }
	  	]
	});	

	setTimeout(function(){
		// Product Detail Slider
		$('.product-detail-slider-main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.product-detail-slider-thumb'
		});
		$('.product-detail-slider-thumb').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.product-detail-slider-main',
				dots: false,
				arrows:false,
				centerMode: true,
				focusOnSelect: true,
				vertical:true,
				verticalSwiping:true,
				responsive: [
				{
					breakpoint: 1500,
					settings: {
					slidesToShow: 4,		        
					}
				},
				{
					breakpoint: 1400,
					settings: {
					slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
					slidesToShow: 4,
					}
				},
				{
					breakpoint: 767,
					settings: {
					slidesToShow: 2,
					}
				}
				]
		});
	},4000)
	

	// Scroll to Top
	$(window).scroll(function() {
	  	if ($(window).scrollTop() > 300) {
	    	$("#back-to-top").addClass('show');
	  	} else {
	    	$("#back-to-top").removeClass('show');
	  	}
	});

	$("#back-to-top").on('click', function(e) {
	  $('html, body').animate({scrollTop:0}, '300');
	});

	// Play YouTube or Vimeo Videos in Bootstrap Modal
	var $videoSrc;
	$(".video-btn").click(function () {
		$videoSrc = $(this).data("src");
	});
	// console.log($videoSrc);

	// when the modal is opened autoplay it
	$("#modallive").on("shown.bs.modal", function (e) {
		// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	    $("#video").attr(
	    	"src",
	      	$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
	    );
	});

	// stop playing the youtube video when I close the modal
	$("#modallive").on("hide.bs.modal", function (e) {
	    // a poor man's stop video
	    $("#video").attr("src", $videoSrc);
	});


	// On Scroll Fix Sidebar
	// var offset = $(".fix-sidebar").offset();
 //    var topPadding = 15;
 //    $(window).scroll(function() {
 //        if ($(window).scrollTop() > offset.top) {
 //            $(".fix-sidebar").stop().animate({
 //                marginTop: $(window).scrollTop() - offset.top + topPadding
 //            });
 //        } else {
 //            $(".fix-sidebar").stop().animate({
 //                marginTop: 0
 //            });
 //        };
 //    });


	// // Upload Multiple Photos
	// document.getElementById('pro-image').addEventListener('change', readImage, false);
    // $( ".preview-images-zone" ).sortable();
    // $(document).on('click', '.image-cancel', function() {
    //     let no = $(this).data('no');
    //     $(".preview-image.preview-show-"+no).remove();
    // });

    // // Select 2 Dropdown
    // $(".js-select2-multi").select2();

  	

});	


// Upload Multiple Photos
var num = 4;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;
            
            var picReader = new FileReader();
            
            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html =  '<div class="preview-image preview-show-' + num + '">' +
                            '<div class="image-cancel" data-no="' + num + '"><img src="images/close.svg" alt="Close"></div>' +
                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                            //'<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
                            '</div>';
                output.append(html);
                num = num + 1;
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val('');
    } else {
        console.log('Browser not support');
    }
}

