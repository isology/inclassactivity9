$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
				
		var caption = $(this).attr("title");
		$("#caption").text(caption);

		// cancel the default action of the link
	    evt.preventDefault();

		 $("#image").fadeOut(1000, "swing", function() {
			$("#image").fadeIn(1000, "swing")

			if(imageURL=="images/h1.jpg") {
				imageURL = "images/h2.jpg";
				$("#image").attr("src", imageURL);
				var caption = "Halis Karataş 2";
				$("#caption").text(caption);
				}
			else if(imageURL=="images/h2.jpg") {
			 imageURL = "images/h3.jpg";
			$("#image").attr("src", imageURL);
			var caption = "Halis Karataş 3";
		$("#caption").text(caption);
			}
			
			else if(imageURL=="images/h3.jpg") {
			imageURL = "images/h4.jpg";
			$("#image").attr("src", imageURL);
			var caption = "Halis Karataş 4";
		$("#caption").text(caption);
			}
			else if(imageURL=="images/h4.jpg") {
			imageURL = "images/h5.jpg";
			$("#image").attr("src", imageURL);
			var caption = "Halis Karataş 5 ";
		$("#caption").text(caption);
			}
			else if(imageURL=="images/h5.jpg") {
			imageURL = "images/h6.jpg";
			$("#image").attr("src", imageURL);
			var caption = "Halis Karataş 6";
		$("#caption").text(caption);
			}
			else if(imageURL=="images/h6.jpg") {
			imageURL = "images/h1.jpg";
			$("#image").attr("src", imageURL);
			var caption = "Halis Karataş 1";
		$("#caption").text(caption);
			}

		
		 });
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready