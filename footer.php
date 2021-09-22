
<div class="app-page d-none" id="places-list">
  <br>
	<div class="places-results d-none" style="height:auto;">
		<div class="places-list list-group">
		 
		</div>
		<!-- <div class="places-hotels">

		</div> -->
	</div>	
</div>

<div class="modal fade" id="placesByTypeModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    	<div class="modal-body">
				<div class="roomDetails w-100" id="roomDetails">
					
				</div>
    	</div>
		</div>
	</div>
</div>

<!-- <div class="modal fade" id="hotelListingModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    	<div class="modal-body">
				<div class="roomDetails w-100" id="roomDetails">
					
				</div>
    	</div>
		</div>
	</div>
</div> -->


<div id="hotelDetails" class="app-page bg-white d-none">
	<?php include('hotelDetails.php'); ?>
</div>

<div id="roomDetails" class="app-page bg-white d-none">
	<div class="roomDetails w-100">
		<?php include('roomDetails.php'); ?>
	</div>
</div>
<div class="addHotelReview w-100 d-none" id="addHotelReview">
	<br>
	<div class="badge badge-danger pr-2 pt-3 bg-white closeHotelReviewForm" style="float:right;"><i class="fa fa-times"></i> Close</div>
	<form class="form-horizontal clientHotelReviews" action="javascript://"  method="post">
      	<fieldset>
        <!-- Name input-->
        <div class="form-group">
        	<!-- <center> -->
        		<label class="p-2">
        			<h6 class="text-muted">Your ratings are important for us</h6>
        		</label>
        	<!-- </center> -->
        </div>
        <!-- Message body -->

         <!-- Rating -->
        <div class="form-group p-2">
         	<section class='rating-widget'>
  
				  <!-- Rating Stars Box -->
					<div class='rating-stars'>
					<ul id='stars'>
					  <li class='star' title='Poor' data-value='1'>
					    <i class='fa fa-star fa-fw'></i>
					  </li>
					  <li class='star' title='Fair' data-value='2'>
					    <i class='fa fa-star fa-fw'></i>
					  </li>
					  <li class='star' title='Good' data-value='3'>
					    <i class='fa fa-star fa-fw'></i>
					  </li>
					  <li class='star' title='Excellent' data-value='4'>
					    <i class='fa fa-star fa-fw'></i>
					  </li>
					  <li class='star' title='WOW!!!' data-value='5'>
					    <i class='fa fa-star fa-fw'></i>
					  </li>
					</ul>
					</div>
	  
				</section>	
        </div>

        <div class="form-group p-2 w-100">
         	<label class="control-label" for="message">Your message</label>
          	<input type="hidden" name="review_stars" id="ratingStarsValue">
            <textarea class="form-control" id="message" name="review_message" placeholder="Please enter your feedback here..." rows="2"></textarea>
        </div>

        <div class="form-group w-100">
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-success btn-md">Submit</button>
            <button type="reset" class="btn btn-default btn-md">Clear</button>
          </div>
        </div>
    	</fieldset>
    </form>
    
</div>




<div class="osahan-menu-fotter fixed-bottom bg-white text-center border-top" id="footer-nav">

	<div class="row m-0">
		<a href="javascript://" onclick="appController.show('home');" class="global-link text-muted small col text-decoration-none p-2">
			<p class="h5 m-0"><i class="link-icon icofont-home" id="home-link-icon"></i></p>
			Home
		</a>
		<a href="#megaSearch" onclick="appController.show('megaSearch');" class="global-link text-muted col small text-decoration-none p-2">
			<p class="h5 m-0"><i class="link-icon fa fa-search" id="megaSearch-link-icon"></i></p>
			Search 
		</a>
		<a href="#tourListingPage" onclick="appController.show('tourListingPage', 1);fetchTours();" class="global-link text-muted small col text-decoration-none p-2">
			<p class="h5 m-0"><i class="fa fa-paper-plane-o link-icon" id="tourListingPage-link-icon"></i></p>
			Tours
		</a>
		
		<!--<a href="#notifications" onclick="appController.show('notifications', 0);showUserNotifications();" class="global-link text-muted col small text-decoration-none p-2">-->
		<!--	<p class="h5 m-0"><i class="link-icon icofont-notification" id="notifications-link-icon"></i></p>-->
		<!--	Notifications-->
		<!--</a>-->
		<a href="#myAccount" onclick="appController.show('myAccount', 1);" class="text-hover global-link text-muted small col text-decoration-none p-2">
			<p class="h5 m-0"><i class="link-icon icofont-user" id="myAccount-link-icon"></i></p>
			Account
		</a>
	</div>
</div>



<script src="<?=APP_VENDOR?>jquery/jquery.min.js"></script>
<script src="<?=APP_VENDOR?>bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="<?=APP_JS?>reviews.js" type="text/javascript"></script>
<script src="<?=APP_JS?>ui-controller.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.min.js"></script>
<script type="text/javascript">
	let appController = new APPUICONTROLLER();
	appController.show('home');
</script>
<script type="text/javascript">
// 	window.onload = function () {
//         if (typeof history.pushState === "function") {
//             history.pushState("jibberish", null, null);
//             window.onpopstate = function () {
//                 history.pushState('newjibberish', null, null);
//                 // Handle the back (or forward) buttons here
//                 // Will NOT handle refresh, use onbeforeunload for this.
//             };
//         }
//         else {
//             var ignoreHashChange = true;
//             window.onhashchange = function () {
//                 if (!ignoreHashChange) {
//                     ignoreHashChange = true;
//                     window.location.hash = Math.random();
//                     // Detect and redirect change here
//                     // Works in older FF and IE9
//                     // * it does mess with your hash symbol (anchor?) pound sign
//                     // delimiter on the end of the URL
//                 }
//                 else {
//                     ignoreHashChange = false;
//                 }
//             };
//         }
//     };

	$(document).on('click', '.paginationjs-prev, .paginationjs-page, .paginationjs-page, .paginationjs-next', function(){
		window.scrollTo({top: 0});
	})
    document.addEventListener("backbutton", function(){}, false);

	$(document).ready(function(){
  			
  /* 1. Visualizing things on Hover - See next part for action on click */
	  $('#stars li').on('mouseover', function(){
	    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
	   
	    // Now highlight all the stars that's not after the current hovered star
	    $(this).parent().children('li.star').each(function(e){
	      if (e < onStar) {
	        $(this).addClass('hover');
	      }
	      else {
	        $(this).removeClass('hover');
	      }
	    });
	    
	  }).on('mouseout', function(){
	    $(this).parent().children('li.star').each(function(e){
	      $(this).removeClass('hover');
	    });
	  });
	  
	  
	  /* 2. Action to perform on click */
	  $('#stars li').on('click', function(){
	    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
	    var stars = $(this).parent().children('li.star');
	    
	    for (i = 0; i < stars.length; i++) {
	      $(stars[i]).removeClass('selected');
	    }
	    
	    for (i = 0; i < onStar; i++) {
	      $(stars[i]).addClass('selected');
	    }
	    
	    // JUST RESPONSE (Not needed)
	    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
	    $('#ratingStarsValue').val(ratingValue);
	    var msg = "";
	    if (ratingValue > 1) {
	        msg = "Thanks! You rated this " + ratingValue + " stars.";
	    }
	    else {
	        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
	    }
	    responseMessage(msg);
	    
	  });
	  
	  
	});


	$('.closeHotelReviewForm').click(function(){
		$("#addHotelReview").show().animate({top: "100%"}, 700);
	});

	$('.closeRoomDetails').click(function(){
		$('#rdModal').modal('hide');
		// $("#roomDetails").show().animate({top: "100%"}, 700);
	});


	$(document).ready(function() {

	  setTimeout(function() {
	    $('#ctn-preloader').addClass('loaded');
	    
	    $('body').removeClass('no-scroll-y');

	    if ($('#ctn-preloader').hasClass('loaded')) {
	      
	      $('#preloader').delay(1000).queue(function() {
	        $(this).remove();
	      });
	    }
	  }, 2000);
	  
	});


</script>


<script type="text/javascript">
	$(document).on('submit', '.hotelDetails', function(){

		$this = $(this);
		$this.children('button').html('Please Wait...');
		$('.hdSlider').empty();
		$('.hotelNameCity').empty();
		$('.hotelStartingPrice').empty();
		$('.hotelCity').empty();
		$('.hotelAddress').empty();
		$('.hotelDescription').empty();
		$('.hotelRooms').empty();
		$('.hotelDNearbyPlaces').empty();
		$('.hotelFacilities').empty();
		$('#xVhTwIsB').remove();
		$('#hotelReviewHeader').empty();
		$.post('<?=BASEURL?>app/hd', $(this).serialize(), function(resp) {
			  
			resp = $.parseJSON(resp);
			let data = resp.hotel;
			if(resp.status==true){

				let images = data.hotel.hotelImages;
				$('.hdSlider').append('<div class="osahan-slider-item m-2"><img src="<?=IMG?>img/hotelImages/'+data.hotel.hotelInfo.hotel_image+'" class="img-fluid mx-auto shadow-sm rounded" style="height:200px;width:100%" alt="Responsive image"></div>');
				$('.hotelNameCity').html('<i class="fa fa-bed text-success"></i> '+data.hotel.hotelInfo.hotel_name);
				$('.hotelStartingPrice').text('Rs.'+data.hotel.min_room_price.room_price+'/-');
				$('.hotelCity').text(data.hotel.hotelInfo.hotel_city);
				$('.hotelAddress').text(data.hotel.hotelInfo.hotel_address);
				$('.hotelDescription').text(data.hotel.hotelInfo.hotel_desc);

				let rooms = data.hotel.hotelRooms;
				
				$('.hotelRooms').append(rooms);

				$('#hotel_location').attr('href', data.hotel.hotelInfo.hotel_location);
				let nearbyPlaces = data.hotelNearbyPlaces;


				nearbyPlaces.forEach(function(element, index) {
					$('.hotelDNearbyPlaces').append('<div class="col-6 pt-2"><a href="https://www.google.com/search?q='+element.trim()+'" class="text-muted"><p><i class="fa fa-location-arrow text-success" aria-hidden="true"></i>&emsp; '+element.trim()+'</p></a></div>');
				});

				let hotelFacilities = data.hotel.hotelFacilities;


				hotelFacilities.forEach(function(e,i){	

					$('.hotelFacilities').append('<li style="padding: 0.2rem">'+e.facility_name+'</li>');

				})
				// images.forEach(function(e, i) {
				// 	$('.hdSlider').append('<div class="osahan-slider-item m-2"><img src="<?=IMG?>img/hotelImages/'+e.hotel_img_name+'" class="img-fluid mx-auto shadow-sm rounded" alt="Responsive image"></div>');
				// });
				// $("#hotelDetails").fadeIn('slow', function() {
					
				// });
				$('#addHotelReview form').append('<input type="hidden" id="xVhTwIsB" name="hotel_id" value="'+data.hotel.hotelInfo.hotel_id+'">');

				let hotelReviews = data.hotel.hotelReviews;

				$('#hotelReviewHeader').append(hotelReviews);


				appController.show('hotelDetails', 1);
				// $("#hotelDetails").removeClass('d-none').show().animate({top: (window.innerHeight / 4 - 50) + "px"}, 500);
				// let hotelDetailsHeight = window.innerHeight / 3.7 - 50;
				// $('#hotelDetails').css('height', hotelDetailsHeight.toString());
				// $('#hotelDetails').css('width', '100%');
				$this.children('button').html('Details');

			}else{

				$this.children('button').html('Details');

			}
				
		});

	});

	$(document).on('submit', '.clientHotelReviews', function(){
		$this = $(this);
		
		$.post('<?=BASEURL?>app/addHotelReview', $(this).serialize(), function(resp) {
				
			resp = $.parseJSON(resp);

			if(resp.status==true){
				$this.empty();
				$this.append('<div class="result"><center><h5 class="text-info">Thanks for your review</h5></center></div>');
				setTimeout(function(){
					$this.parent('div').show().animate({top: "100%"}, 700);

				}, 1500);

			}
			
		});				

	});
</script>
<script type="text/javascript">


	let lat = document.getElementById("hotel_latitude");
    let long = document.getElementById("hotel_longitude");
	

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    function showPosition(position) {
        // let lat = position.coords.latitude;
        // let long = position.coords.longitude;
        lat.value = position.coords.latitude;
    	long.value = position.coords.longitude;
    }

    getLocation();



    window.onload = function() {
    let lastHotelId = $('last-hotel-id').attr('id');
		let lat = document.getElementById("hotel_latitude").value;
		let long = document.getElementById("hotel_longitude").value;
	    $.post('<?=BASEURL.'app/getNearbyHotels'?>', {lat:lat, long:long, lastHotelId:lastHotelId}, function(resp) {
	    resp = $.parseJSON(resp);
	        if(resp.status==true){
	        	let data = resp.data;
	        	data.forEach(function(e, i) {
	        		$('.nearby-hotels-row').append('<div class="col-12 col-md-3 pr-2 p-2"><div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><div class="list-card-image"><a href="javascript://" class="text-dark"><div class="member-plan position-absolute"><span class="badge m-1 badge-info" style="background-color: #fff">Starting From : Rs.'+e.room_price+'/night</span></div><div class="p-3"><img src="<?=IMG?>img/hotelImages/'+e.hotel_image+'" class="img-fluid item-img w-100 mb-3" style="height: 230px;"><div class="row"><div class="col-8"><h6 class="text-success">'+e.hotel_name+'</h6><p class="text-default" style="font-size: 12px;"><i class="fa fa-map-marker"></i> '+e.hotel_city+', '+e.hotel_state+'<br><i class="fa fa-map-o"></i> '+e.hotel_address+'</p></div><div class="col-4"><p class="text-primary pr-1" style="font-size: 11px;float: right;"><i class="fa fa-route"></i> Min. Dist '+e.hotel_distance+'-KM</p></div></div><div class=""><form action="javascript://"  class="ml-auto hotelDetails" method="POST"><input type="hidden" name="hotel_id" value="'+e.hotel_id+'"><button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button><div class="input-group"></div></form></div></div></a></div></div></div>');
	        	});
	        }
	    });    	  
	};


	$(document).on('click', '.showPricing',function(event) {
		
		$('.pricing').slideDown('slow', function() {
			
		});
		$('#min_price').val('500');
		$('#max_price').val('500');
		$('.showPricing').addClass('hidePricing');
		$('.showPricing').removeClass('showPricing');

	});

	$(document).on('click', '.hidePricing', function(event) {

		$('.pricing').slideUp('slow', function() {});
		$('#min_price').val('0');
		$('#max_price').val('0');
		$('.hidePricing').addClass('showPricing');
		$('.hidePricing').removeClass('hidePricing');

	});

	$(document).on('click', '.showMainForm',function(event) {
			
		$this = $(this);
		$this.children('i').removeClass('icofont-search');
		$this.children('i').addClass('icofont-close-circled');
		$('.main-form').slideDown('fast', function() { });
		
		$('.showMainForm').addClass('hideMainForm');
		$('.showMainForm').removeClass('showMainForm');

	});

	$(document).on('click', '.hideMainForm', function(event) {
		$this = $(this);
		$this.children('i').removeClass('icofont-close-circled');
		$this.children('i').addClass('icofont-search');
		$('.main-form').slideUp('fast', function() { });
		
		$('.hideMainForm').addClass('showMainForm');
		$('.hideMainForm').removeClass('hideMainForm');

	});



	$(document).on('keyup', '.place-name', function(){
		
		$this=$(this);

		let keyword = $this.val();
		let action = 'search';
		if(keyword.length>=3){
			$('.sugesstions').empty();
			$.post('<?=APP_AJAX?>main-search.php', {keyword:keyword, action:action}, function(resp) {
				$('.sugesstions').removeClass('d-none');
				resp = $.parseJSON(resp);
				let data = resp.data;
				$('.sugesstions').append('<br>');
				data.forEach(function(e) {
					$('.sugesstions').append('<div class="p-1 text-dark pushToSearch"><a href="javascript://" class="pl-2 pr-2 text-dark" style="text-decoration:none;" data="'+e.value+'">'+e.value+'<small style="float:right;">'+e.label+'</small></a><hr></div>');
				});
			});				
		}

	});
	
	$(document).on('keydown', '.place-name', function(){
		
		$this=$(this);

		let keyword = $this.val();
		let action = 'search';
		if(keyword.length<=2){
			$('.sugesstions').addClass('d-none');
			$('.sugesstions').empty();
		}

	});

	$(document).on('mouseover', '.pushToSearch', function(){

			$this = $(this);

			let keyword = $this.children('a').attr('data');
			// $('#place').val(keyword);
			document.getElementById('place').value = keyword;

	});
	
	const placesImageUrl = {
		'Mountain': '<?=APP_IMG?>places/tourism/mountains.jpg',
		'Lake': '<?=APP_IMG?>places/tourism/lakes.jpg',
		'River': '<?=APP_IMG?>places/tourism/rivers.jpg',
		'Beach': '<?=APP_IMG?>places/tourism/beaches.jpg',
		'Waterfall': '<?=APP_IMG?>places/tourism/waterfalls.jpg',
		'Island': '<?=APP_IMG?>places/tourism/islands.jpg',
		'Valley': '<?=APP_IMG?>places/tourism/valleys.jpg',
		'Desert': '<?=APP_IMG?>places/tourism/deserts.jpg',
		'Museums': '<?=APP_IMG?>places/tourism/museum.jpg',
		'National_Park': '<?=APP_IMG?>places/tourism/national-park.jpg',
		'Pass': '<?=APP_IMG?>places/tourism/passes.jpg',
		'Hill': '<?=APP_IMG?>places/tourism/hills.jpg'
	}

	$('.getPlacesByType').on('submit', function(){
		$this = $(this);
		$this.parent('div').children('div').children('label').addClass('d-none');
		$this.parent('div').children('div').children('.spinner').removeClass('d-none');
		
		let placeType = $this.children('.place_type').val();
		let searchedPlaceType;
		if(placeType=='Mountain'){
			searchedPlaceType = placesImageUrl.Mountain;
		}else if(placeType=='Lake'){
			searchedPlaceType = placesImageUrl.Lake;
		}else if(placeType=='River'){
			searchedPlaceType = placesImageUrl.River;
		}else if(placeType=='Beach'){
			searchedPlaceType = placesImageUrl.Beach;
		}else if(placeType=='Waterfall'){
			searchedPlaceType = placesImageUrl.Waterfall;
		}else if(placeType=='Island'){
			searchedPlaceType = placesImageUrl.Island;
		}else if(placeType=='Valley'){
			searchedPlaceType = placesImageUrl.Valley;
		}else if(placeType=='Desert'){
			searchedPlaceType = placesImageUrl.Desert;
		}else if(placeType=='Museums'){
			searchedPlaceType = placesImageUrl.Museums;
		}else if(placeType=='National Park'){
			searchedPlaceType = placesImageUrl.National_Park;
		}else if(placeType=='Pass'){
			searchedPlaceType = placesImageUrl.Pass;
		}else if(placeType=='Hill'){
			searchedPlaceType = placesImageUrl.Hill;
		}
		// <div class="pl-2 pr-2"><p></p></div>
		$('#place-type-list').after('<center id="spinner"><br><div class="spinner-border text-dark"></div></center>');

		$('.places-list').empty();
		$.post('<?=BASEURL?>app/getPlacesByType', $(this).serialize(), function(resp) {
				resp = $.parseJSON(resp);
				//<a href="javascript://" class="p-2 search-places-record"><input type="text" class="form-control m-0 p-0" placeholder="&#128269; Search Places..."></a>
				$('.places-list').html('<div class="row m-0" ></div>');
				if(resp.status==true){
					let data = resp.data;
					data.forEach(function(e, i) {
						$('.places-list .row').append('<div class="mb-3 pb-3 col-12"><div class="bg-white shadow-sm rounded c-it"><img src="<?=APP_IMG?>places/places-images/'+e.places_images[0]+'" style="height: 250px !important; width:100% !important;" class="rounded"><div class="pt-3"><h6 class="m-0 p-2 text-success d-inline-block"><i class="fa fa-info-circle"></i> '+e.place_name+'</h6><p class="p-2 pull-right d-inline-block mt-1"><i class="fa fa-map-marker"></i> '+e.place_location+'</p></div><br><div class="place-description p-3"><p class="text-dark text-justify">'+e.place_descriptions+'</p></div><br /><div class="pl-2 pr-2"><a href="javascript://" class="placeToSearch w-50 btn btn-dark btn-sm" data="'+e.place_name+'"><i class="fa fa-bed"></i> Find Hotels</a><a href="'+e.place_map+'" class="w-50 btn btn-success btn-sm"><i class="fa fa-map-o"></i> View Location</a></div><br></div></div>');
						$('.places-results').removeClass('d-none');
						$('.osahan-categories').addClass('d-none');
						$('.places').removeClass('d-none');
						$('#spinner').remove();
						$('.places-list-page-title').html('<i class="icofont-rounded-left back-page"></i> <font style="margin-top: 1%;"> Back</font>');;
						appController.show('places-list', 0);
						// $('#placesByTypeModal').modal('show');
					});
					$this.parent('div').children('div').children('label').removeClass('d-none');
					$this.parent('div').children('div').children('.spinner').addClass('d-none');	
				}else{
					// $('.cities').removeClass('d-none');
					$this.parent('div').children('div').children('label').removeClass('d-none');
					$this.parent('div').children('div').children('.spinner').addClass('d-none');	
				}
				
		});

	});
	
	
	

	$(document).on("keyup", ".search-places-record input", function() {
        var value = $(this).val().toLowerCase();
        $(".places-record").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


	$(document).on('click', '.backToPlaces', function(){

		$('#placesByTypeModal').modal('hide');

		$('#hotelListingModal').modal('hide');

		// $('.pv').removeClass('d-none');
		// $('.places-results').addClass('d-none');
		// $('.places-hotels').addClass('d-none');

	});

	$(document).on('click','.placeToSearch',function(){
		$this = $(this);
		let place = $this.attr('data');
		$('.places-hotels').empty();
		$('.places-hotels').removeClass('d-none');
		$('.places-results').addClass('d-none');
		// $('.pv').addClass('d-none');
		$.post('<?=BASEURL?>app/findHotelsByPlaceName', {place:place}, function(resp) {
	        // $('.places-hotels').prepend('<a href="javascript://" class="font-weight-bold list-group-item list-group-item-action backToPlaces">Here is your results. <span style="float: right;font-size: 11px;" class="text-muted font-weight-bold"><i class="fa fa-arrow-left"></i> Back</span></a>');
			resp = $.parseJSON(resp);
			if(resp.status==true){
				// $('.places-hotels').html('<p class="pl-2 pr-3 font-weight-bold" style="color:#727376;"><i class="fa fa-bed text-success"></i> Available Hotels <a href="#" class="backToPlaces text-danger text-decoration-none" style="float:right;font-size:11px;margin-top:3px"><i class="fa fa-times"></i> Close</a></p>');
				let container = $('.pagination-city-hotels');
				container.css('display','block');
				container.pagination({
					dataSource:resp.data, 
					callback: function (data, pagination){
						var dataHtml = '';
						$.each(data, function(index, item){
							dataHtml += '<div class="col-12 col-md-3 pr-2 pl-2">';
							dataHtml += '<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">';
							dataHtml += '<div class="list-card-image">';
							dataHtml += '<a href="javascript://" class="text-dark">';
							dataHtml += '<div class="member-plan position-absolute">';
							dataHtml += '<span class="badge m-1 badge-info" style="background-color: #fff">Starting From : Rs.'+item.room_price+'/night</span>';
							dataHtml += '</div>';
							dataHtml += '<div class="p-3">';
							dataHtml += '<img src="<?=IMG?>img/hotelImages/'+item.hotel_image+'" class="img-fluid item-img w-100 mb-3" style="height: 230px;">';
							dataHtml += '<div class="row">';
							dataHtml += '<div class="col-11">';
							dataHtml += '<h6 class="text-success">'+item.hotel_name+'</h6>';
							dataHtml += '<p class="text-default" style="font-size: 12px;"><i class="fa fa-map-marker"></i> '+item.hotel_city+', '+item.hotel_state+'<br><i class="fa fa-map-o"></i> '+item.hotel_address+'</p>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '<div class="">';
							dataHtml += '<form action="javascript://"  class="ml-auto hotelDetails" method="POST">';
							dataHtml += '<input type="hidden" name="hotel_id" value="'+item.hotel_id+'">';
							dataHtml += '<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>';
							dataHtml += '<div class="input-group"></div>';
							dataHtml += '</form>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '</a>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '<br>';
						})
						$(".places-hotels").html(dataHtml);
					}
				})
      	$('#spinner').remove();
      	appController.show('hotelDetailsContainer', 1);
				// let aa = resp.data;
	   //      	aa.forEach(function(e, i) {
	   //      		$('.places-hotels').append('<div class="col-12 col-md-3 pr-2 p-2"><div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><div class="list-card-image"><a href="javascript://" class="text-dark"><div class="member-plan position-absolute"><span class="badge m-1 badge-info" style="background-color: #fff">Starting From : Rs.'+e.room_price+'/night</span></div><div class="p-3"><img src="<?=IMG?>img/hotelImages/'+e.hotel_image+'" class="img-fluid item-img w-100 mb-3" style="height: 230px;"><div class="row"><div class="col-11"><h6 class="text-success">'+e.hotel_name+'</h6><p class="text-default" style="font-size: 12px;"><i class="fa fa-map-marker"></i> '+e.hotel_city+', '+e.hotel_state+'<br><i class="fa fa-map-o"></i> '+e.hotel_address+'</p></div></div><div class=""><form action="javascript://"  class="ml-auto hotelDetails" method="POST"><input type="hidden" name="hotel_id" value="'+e.hotel_id+'"><button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button><div class="input-group"></div></form></div></div></a></div></div></div><br>');
	   //      	});
	   //      	// $('#hotel-list-app-controller').attr('onclick', "appController.show('home', 0);");
	   //      	appController.show('hotelDetailsContainer', 0);
	   //      	$('#placesByTypeModal').modal('hide');
			}else if(resp.status==false){
				$('.places-hotels').html('<center><h6 class="mb-3">No Result Found </h6></center>');
				setTimeout(function(){
					$('.places-hotels').empty();
					$('.places-results').removeClass('d-none');
				}, 1000);
			}
		});

	});


	$(document).on('click','.getHotelByCity', function(){
		$this = $(this);
		$this.parent('div').children('div').children('label').addClass('d-none');
		$this.parent('div').children('div').children('.spinner').removeClass('d-none');
		let place = $this.attr('data');
		
		$('.places-hotels').empty();
		$('.places-hotels').removeClass('d-none');
		
		$.post('<?=BASEURL?>app/findHotelsByPlaceName', {place:place}, function(resp) {

	        
			resp = $.parseJSON(resp);
			if(resp.status==true){
				
						let container = $('.pagination-city-hotels');
						container.css('display','block');
						container.pagination({
							dataSource:resp.data, 
							callback: function (data, pagination){
								var dataHtml = '';
								$.each(data, function(index, item){
									dataHtml += '<div class="col-12 col-md-3 pr-2 pl-2">';
									dataHtml += '<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">';
									dataHtml += '<div class="list-card-image">';
									dataHtml += '<a href="javascript://" class="text-dark">';
									dataHtml += '<div class="member-plan position-absolute">';
									dataHtml += '<span class="badge m-1 badge-info" style="background-color: #fff">Starting From : Rs.'+item.room_price+'/night</span>';
									dataHtml += '</div>';
									dataHtml += '<div class="p-3">';
									dataHtml += '<img src="<?=IMG?>img/hotelImages/'+item.hotel_image+'" class="img-fluid item-img w-100 mb-3" style="height: 230px;">';
									dataHtml += '<div class="row">';
									dataHtml += '<div class="col-11">';
									dataHtml += '<h6 class="text-success">'+item.hotel_name+'</h6>';
									dataHtml += '<p class="text-default" style="font-size: 12px;"><i class="fa fa-map-marker"></i> '+item.hotel_city+', '+item.hotel_state+'<br><i class="fa fa-map-o"></i> '+item.hotel_address+'</p>';
									dataHtml += '</div>';
									dataHtml += '</div>';
									dataHtml += '<div class="">';
									dataHtml += '<form action="javascript://"  class="ml-auto hotelDetails" method="POST">';
									dataHtml += '<input type="hidden" name="hotel_id" value="'+item.hotel_id+'">';
									dataHtml += '<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>';
									dataHtml += '<div class="input-group"></div>';
									dataHtml += '</form>';
									dataHtml += '</div>';
									dataHtml += '</div>';
									dataHtml += '</a>';
									dataHtml += '</div>';
									dataHtml += '</div>';
									dataHtml += '</div>';
									dataHtml += '<br>';
								})
								$(".places-hotels").html(dataHtml);
							}
						})
				$this.parent('div').children('div').children('label').removeClass('d-none');
				$this.parent('div').children('div').children('.spinner').addClass('d-none');
	        	appController.show('hotelDetailsContainer', 1);
			}else if(resp.status==false){
				$('.places-response').text('No Hotel Found');
				setTimeout(function(){
					$this.parent('div').children('div').children('label').removeClass('d-none');
					$this.parent('div').children('div').children('.spinner').addClass('d-none');	
					$('.places-response').text('Fetching Hotels...');
				}, 1000);
				
			}
		});

	});

	$(document).on('click', '.showCities', function(event) {
		$('.where-heading').after('<center id="spinner"><br><div class="spinner-border text-dark"></div></center>');
		$this =$(this);
		$('.osahan-categories').removeClass('d-none');
		$('.cities').removeClass('d-none');
		$('.places-results').addClass('d-none');
		$('.places-hotels').addClass('d-none');
		$('.places').addClass('d-none');
		$this.html('<i class="fa fa-map-o"></i> Places');
		$this.addClass('showPlaces');
		$this.removeClass('showCities');
		$('#spinner').remove();
	});

	$(document).on('click', '.showPlaces', function(event) {
		$('.where-heading').after('<center id="spinner"><br><div class="spinner-border text-dark"></div></center>');
		$this =$(this);
		$('.osahan-categories').removeClass('d-none');
		$('.cities').addClass('d-none');
		$('.places-results').addClass('d-none');
		$('.places-hotels').addClass('d-none');
		$('.places').removeClass('d-none');
		$this.html('<i class="fas fa-city"></i> Cities');
		$this.addClass('showCities');
		$this.removeClass('showPlaces');
		$('#spinner').remove();
	});

	$(document).ready(function() {
		
		$('#home-link').addClass('text-success');

	});


	$(document).on('submit','.hotelListing', function(){

		$this = $(this);
		$this.children('button[type="submit"]').attr('disabled','disabled');
		// $this.attr('disabled','disabled');
		// $this.html('<div class="spinner-border text-dark"></div>');
		$('.hotelListing').after('<center id="spinner"><br><div class="spinner-border text-dark"></div></center>');
		// 	$('.cities').addClass('d-none');
		// 	$('.places').addClass('d-none');
		$('.places-hotels').empty();
		$('.places-hotels').removeClass('d-none');
		$('.places-results').addClass('d-none');
		// $('.pv').addClass('d-none');
		$.post('<?=BASEURL?>app/hotelListing', $(this).serialize(), function(resp) {
			resp = $.parseJSON(resp);
			if(resp.status==true){
				
	   		let container = $('.pagination-city-hotels');
				container.css('display','block');
				container.pagination({
					dataSource:resp.data, 
					callback: function (data, pagination){
						var dataHtml = '';
						$.each(data, function(index, item){
							dataHtml += '<div class="col-12 col-md-3 pr-2 pl-2">';
							dataHtml += '<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">';
							dataHtml += '<div class="list-card-image">';
							dataHtml += '<a href="javascript://" class="text-dark">';
							dataHtml += '<div class="member-plan position-absolute">';
							dataHtml += '<span class="badge m-1 badge-info" style="background-color: #fff">Starting From : Rs.'+item.room_price+'/night</span>';
							dataHtml += '</div>';
							dataHtml += '<div class="p-3">';
							dataHtml += '<img src="<?=IMG?>img/hotelImages/'+item.hotel_image+'" class="img-fluid item-img w-100 mb-3" style="height: 230px;">';
							dataHtml += '<div class="row">';
							dataHtml += '<div class="col-11">';
							dataHtml += '<h6 class="text-success">'+item.hotel_name+'</h6>';
							dataHtml += '<p class="text-default" style="font-size: 12px;"><i class="fa fa-map-marker"></i> '+item.hotel_city+', '+item.hotel_state+'<br><i class="fa fa-map-o"></i> '+item.hotel_address+'</p>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '<div class="">';
							dataHtml += '<form action="javascript://"  class="ml-auto hotelDetails" method="POST">';
							dataHtml += '<input type="hidden" name="hotel_id" value="'+item.hotel_id+'">';
							dataHtml += '<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>';
							dataHtml += '<div class="input-group"></div>';
							dataHtml += '</form>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '</a>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '</div>';
							dataHtml += '<br>';
						})
						$(".places-hotels").html(dataHtml);
						$this.children('button[type="submit"]').removeAttr('disabled');
					}
				})
      			$('#spinner').remove();
      			appController.show('hotelDetailsContainer', 1);
			}else if(resp.status==false){
				$('#spinner').remove();
				$('.hotelListing').after('<center id="nAN"><h6 class="mb-3">No Result Found </h6></center>');
				setTimeout(function(){
					$('#nAN').remove();
					$this.children('button[type="submit"]').removeAttr('disabled');
				}, 1000);
			}
		});

	});


	$("#userImage").on('change',function(){
    $("#validateButton1").text('Wait File Is Uploading');
    var data = new FormData();
    data.append('main_image', $(this).prop('files')[0]);
    data.append('action', 'user_image');
    $.ajax({
        type: 'POST',
        processData: false,
        contentType: false,
        data: data,
        url: '<?=AJAX?>basic.php',
        dataType : 'json',
        success: function(resp){
            // resp = $.parseJSON(resp);
            if (resp.status == true)
            {   
                $("#app_user_image").val(resp.data);
                $(".user-image-preview").attr('src', '<?=APP_IMG?>userImages/'+resp.data);
                // $("#user-image-preview").css('display', 'block');
            }
            else
            {
                $("#validateButton1").text('Upload An Image First');
            }
        }
    });
  });


	$('.updateProfile').on('submit', function(){
		$this = $(this);
		$this.fadeOut('slow', function() {
			
		});
		$.post('<?=BASEURL?>app/up', $(this).serialize(), function(resp) {
			  
			resp = $.parseJSON(resp);
			if(resp.status==true){
				let data = resp.data;

				$('#app_user_email').val(data.app_user_email);
				$('#app_user_image').val(data.app_user_image);
				$('#app_user_phone').val(data.app_user_phone);
				$('#app_user_name').val(data.app_user_name);

				$this.fadeIn('slow', function() {
	
				});		

			}else{

				$this.fadeIn('slow', function() {

				});		

			}
				
		});

	});


	$('.updatePassword').on('submit', function(){
		$this = $(this);
		$this.fadeOut('fast', function() {
			
		});
		$.post('<?=BASEURL?>app/upPass', $(this).serialize(), function(resp) {
			  
			resp = $.parseJSON(resp);
			let data = resp.data;
			if(resp.status==true){
				// $('#app_user_email').val(data.app_user_email);
				// $('#app_user_image').val(data.app_user_image);
				// $('#app_user_phone').val(data.app_user_phone);
				// $('#app_user_name').val(data.app_user_name);

				$this.fadeIn('slow', function() {
					

				});	
					$('.upPassResp').addClass('text-center text-info');	
					$('.upPassResp').text(data);

				setTimeout(function(){
					window.location.reload();
				}, 2000);		

			}else{



				$this.fadeIn('slow', function() {

				});		
					$('.upPassResp').addClass('text-center text-danger');
					$('.upPassResp').text(data);

			}
				
		});

	});




$(document).on('submit', '.roomDetails', function(){
		$this = $(this);
		$this.children('button').html('Please Wait...');
		$('.rdSlider').empty();
		$('.roomNameCity').empty();
		$('.roomPrice').empty();
		$('.roomStatus').empty();
		$('.roomFacilities').empty();
		$('.roomSpecs').empty();
		$('.roomDesc').empty();
		$.post('<?=BASEURL?>app/rd', $(this).serialize(), function(resp) {
			  
			resp = $.parseJSON(resp);
			let data = resp.data;
			if(resp.status==true){


				let images = data.roomImages;
				$('.rdSlider').append(images);


				$('.roomNameCity').html('<i class="fa fa-bed text-success"></i> '+data.roomInfo.room_title);
				$('.roomPrice').text(' Rs.'+data.roomInfo.room_price+'/night');
				$('.roomStatus').text(data.roomInfo.room_status);
				$('.bookThisRoom').val(data.roomInfo.room_id);
				

				let roomFacilities = data.roomFacilities;


				roomFacilities.forEach(function(e,i){	

					$('.roomFacilities').append('<li style="padding: 0.2rem" class="text-muted">'+e.facility_name+'</li>');

				})


				let roomSpecs = data.roomSpecs;

				roomSpecs.forEach(function(e,i){	

					$('.roomSpecs').append('<div class="col-6 pt-2"><a href="javascript://" class="text-muted"><p><i class="text-success fa fa-location-arrow" aria-hidden="true"></i>&emsp; '+e.spec_title+'</p></a></div>');

				})

				$('.roomDesc').text(data.roomInfo.room_desc);

				
				appController.show('roomDetails',1);
				// $('#rdModal').modal('show');

				// $("#roomDetails").removeClass('d-none').show().animate({top: (window.innerHeight / 4 - 50) + "px"}, 1000);
				
				$this.children('button').html('Get Details');
			}else{
				$this.children('button').html('Get Details');

			}
				
		});

	});
	

function addBookingsToInProgressElement(){
	$('.inProgressRequestsContainer').empty();
	$.post('<?=BASEURL?>app/onProgressOrders', {id:"id"}, function(resp) {

		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.inProgressRequestsContainer').append(resp.data);
		}else{

		}
	});

}

function addBookingsToCompletedElement(){
	$('.completedRequestsContainer').empty();
	$.post('<?=BASEURL?>app/completedOrders', {id:'id'}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.completedRequestsContainer').append(resp.data);
		}else{

		}
	});

}

function addBookingsToConfirmedElement(){
	$('.confirmedRequestsContainer').empty();
	$.post('<?=BASEURL?>app/confirmedRequests', {id:'id'}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.confirmedRequestsContainer').append(resp.data);
		}else{

		}
	});

}


function showUserNotifications(){
	$('.userNotifications').empty();
	$.post('<?=BASEURL?>app/notifications', {id:'id'}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.userNotifications').append(resp.data);
		}else{

		}
	});

}

function fetchTourCompanies(type){
	// $('.userNotifications').empty();
	$.post('<?=BASEURL?>app/fetchTourCompanies', {type:type}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.tourCompanies').html(resp.data);
		}else{

		}
	});
}

function toursListing(TourType){
	$('.tourListing').empty();
	$.post('<?=BASEURL?>app/tourListing', {tour_id:'0', TourType:TourType}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.tourListing').html(resp.data);
			appController.show('tourListingPage', 1);
			const data = {tour_id:resp.data.last_tour_id, TourType:TourType};
			ScrollActivate1("<?=BASEURL?>app/tourListing", data);
		}else{

		}
		
	});
	
}


function ScrollActivate1(url, dat) {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $(window).off("scroll");
			$.post(url, dat, function(resp){
				resp = $.parseJSON(resp);
				$('.tourListing').append(resp.data.data);
				// appController.show('tourListingPage',0);	
				const data = {tour_id:resp.data.last_tour_id, TourType:TourType};
				ScrollActivate1("<?=BASEURL?>app/tourListing", data);
			});
			return true;
        }
    });
}


function fetchTours(){
	$('.tourListing').empty();
	$.post('<?=BASEURL?>app/tours', {tour_id:'0'},function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.tourListing').html(resp.data.data);
			appController.show('tourListingPage',1);
		}else{

		}
		const data = {tour_id:resp.data.last_tour_id};
		ScrollActivate("<?=BASEURL?>app/tours", data);
	});
}

function ScrollActivate(url, dat) {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $(window).off("scroll");
			$.post(url, dat, function(resp){
				resp = $.parseJSON(resp);
				$('.tourListing').append(resp.data.data);
				// appController.show('tourListingPage',0);	
				const data = {tour_id:resp.data.last_tour_id};
				ScrollActivate("<?=BASEURL?>app/tours", data);
			});
			return true;
        }
    });
}

$('.getAdventures').on('submit', function(){
	$('.adventureCompanies').empty();
	let pageTitle = $(this).children('.adventure_type').val()
	$.post('<?=BASEURL?>app/adventureByType', {adventure_id: '0', AdventureType:pageTitle}, function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.adventureCompanies').html(resp.data.data);
			appController.show('adventureCompaniesList', 1);
			const data = {adventure_id:resp.data.last_adventure_id, AdventureType:pageTitle};
			ScrollActivate2("<?=BASEURL?>app/adventureByType", data);
		}else{

		}
		
	});

});

let filterToursOptions = (e) => {
	let val = $('.selectTourFilter').val();
	$('.filterToursForm').empty();
	if(val=='charges_per_person'){
		$('.filterToursForm').append('<input type="number" style="width:50%;padding:5px;display:inline-block" class="filterTours form-control" placeholder="Enter Some Amount.."><input type="number" style="width:50%;padding:5px;display:inline-block" class="filterTours form-control" placeholder="Enter Some Amount..">')
	}else if(val=='charges_per_couple'){
		$('.filterToursForm').append('<input type="number" style="width:50%;padding:5px;display:inline-block" class="filterTours form-control" placeholder="Enter Some Amount.."><input type="number" style="width:50%;padding:5px;display:inline-block" class="filterTours form-control" placeholder="Enter Some Amount..">')
	}else if(val=='starting_from'){
		$('.filterToursForm').append('Choose A Date <input type="date" class="filterTours form-control" placeholder="" onfocus="document.getElementById("selectTourFilter").classList.add("d-none");document.getElementById("submitFilterToursForm").classList.remove("d-none");" onblur="document.getElementById("selectTourFilter").classList.remove("d-none");document.getElementById("submitFilterToursForm").classList.add("d-none");">')
	}else if(val=='duration'){
		$('.filterToursForm').append('<input type="number" class="filterTours form-control" placeholder="Enter Number Of Days" min="1" max="20" onfocus="document.getElementById("selectTourFilter").classList.add("d-none");document.getElementById("submitFilterToursForm").classList.remove("d-none");" onblur="document.getElementById("selectTourFilter").classList.remove("d-none");document.getElementById("submitFilterToursForm").classList.add("d-none");">')
	}else{
		$('.filterToursForm').append('<input type="text" class="filterTours form-control" placeholder="Filter By Destination.." onfocus="document.getElementById("selectTourFilter").classList.add("d-none");document.getElementById("submitFilterToursForm").classList.remove("d-none");" onblur="document.getElementById("selectTourFilter").classList.remove("d-none");document.getElementById("submitFilterToursForm").classList.add("d-none");">')	
	}
}


const submitFilterToursForm = () => {

	
	let condition = $('.selectTourFilter').val();
	if(condition == 'charges_per_person' || condition == 'charges_per_couple'){
		let toSearch = $('.filterTours');
		let values = [];
		toSearch.map(function(i, e){	
			values.push(e.value);
		})		
		let min = values[0]; let max = values[1]; let newToSearch = {min:min, max:max};
		let data = {toSearch:JSON.stringify(newToSearch), condition:condition, tour_id:'0'};
		$.post('<?=BASEURL?>app/filterTours', data, function(resp){
			resp = $.parseJSON(resp);
			$('.tourListing').html(resp.data.data);
			// appController.show('tourListingPage',0);	
			// const data = {adventure_id:resp.data.last_adventure_id, AdventureType:pageTitle};
			// ScrollActivate2("<?=BASEURL?>app/adventureByType", data);
		});
	}else{
		let toSearch = $('.filterTours').val();
		let data = {toSearch:toSearch, condition:condition, tour_id:'0'};
		$.post('<?=BASEURL?>app/filterTours', data, function(resp){
			resp = $.parseJSON(resp);
			$('.tourListing').html(resp.data.data);
			// appController.show('tourListingPage',0);	
			// const data = {adventure_id:resp.data.last_adventure_id, AdventureType:pageTitle};
			// ScrollActivate2("<?=BASEURL?>app/adventureByType", data);
		});
	}

}

function ScrollActivate2(url, dat) {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $(window).off("scroll");
			$.post(url, dat, function(resp){
				resp = $.parseJSON(resp);
				$('.tourListing').append(resp.data.data);
				// appController.show('tourListingPage',0);	
				const data = {adventure_id:resp.data.last_adventure_id, AdventureType:pageTitle};
				ScrollActivate2("<?=BASEURL?>app/adventureByType", data);
			});
			return true;
        }
    });
}


$(document).on('submit', '.bookingDetails', function(){

	$.post('<?=BASEURL?>app/bookingDetails', $(this).serialize(), function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('#bookingDetails').html(resp.data);
			appController.show('bookingDetails', 1);
		}else{

		}
	});

});


$(document).on('submit', '.createBooking', function(){
	$this = $(this);
	$this.children('button').html('Please Wait...');
	$.post('<?=BASEURL?>app/cb', $(this).serialize(), function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			let roomInfo = resp.data.roomInfo;
			$('.roomBookingPrice').html('Rs.'+roomInfo.room_price+'/night');
			$('.roomBookingImage').attr('src','<?=IMG?>img/roomImages/'+roomInfo.room_title_img);
			$('.roomBookingType').html(roomInfo.room_type);
			$('.roomBookingStatus').html(roomInfo.room_status);
			$('.roomBookingTitle').html(roomInfo.room_title);
			$('.roomBookingUser').html(resp.userInfo);
			// $('#bookingDetails').append(resp.data);
			appController.show('createBooking', 1);
			$this.children('button').html('Book Now');
		}else{

		}
	});

});


$(document).on('submit', '.createTourBooking', function(){
	$this = $(this);
	$this.children('button').html('Please Wait...');
	$.post('<?=BASEURL?>app/cb', $(this).serialize(), function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.ctBForm').append('<input type="hidden" name="request_tour_id" value="'+resp.data.tour_id+'">');
			appController.show('createTourBooking', 0);
			$this.children('button').html('Book Now');
		}else{

		}
	});

});

$(document).on('submit', '.createAdventureBooking', function(){
	$this = $(this);
	$this.children('button').html('Please Wait...');
	$.post('<?=BASEURL?>app/cb', $(this).serialize(), function(resp) {
		resp = $.parseJSON(resp);
		if(resp.status==true){
			$('.caBForm').append('<input type="hidden" name="request_adventure_id" value="'+resp.data.adventure_id+'">');
			appController.show('createAdventureBooking', 0);
			$this.children('button').html('Book Now');
		}else{

		}
	});

});


$(document).on('click', 'button, input[submit]', function(){

	

});

</script>
<!-- <script src="<?=APP_JS?>ui-controller.js"></script>
<script type="text/javascript">
	let appController = new APPUICONTROLLER();
	appController.show('home');
</script> -->


<script src="<?=APP_JS?>rocket-loader.min.js" data-cf-settings="81ae74730aeeb58a05b006a6-|49" defer=""></script>
</script>

</body>

<!-- Mirrored from askbootstrap.com/preview/grofar/account-setup.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 10 Oct 2020 12:49:11 GMT -->
</html>