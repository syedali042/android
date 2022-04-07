<?php 
    date_default_timezone_set('Asia/Karachi');
    $todayDate = date('Y-m-d');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<!-- <meta name="google-signin-client_id" content=""> -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" type="image/png" href="<?=APP_IMG?>logo-n.png">
<title><?=APP_TITLE?></title>
<!-- <script src="<?=APP_VENDOR?>jquery/jquery.min.js"></script> -->
<!-- <link rel="manifest" href="<?=APP_JS?>app/manifest.json"> -->
<!--<link rel="stylesheet" type="text/css" href="css/style_p.css" media="screen and (orientation: portrait)">-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <script src="<?=APP_VENDOR?>slick/slick-theme.min.css" type="text/javascript"></script> 
 <script src="<?=APP_VENDOR?>slick/slick.min.css" type="text/javascript"></script> 
<script src="https://kit.fontawesome.com/f7e9049f48.js" crossorigin="anonymous"></script>

<link href="<?=APP_VENDOR?>icons/icofont.min.css" rel="stylesheet" type="text/css">

<link href="<?=APP_VENDOR?>bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="<?=APP_CSS?>reviews.css" rel="stylesheet">

<!-- <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" type="text/css"> -->
<link href="<?=APP_CSS?>style.css" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css"/>
<link href="<?=APP_VENDOR?>sidebar/demo.css" rel="stylesheet">

<script src="<?=APP_JS?>ui-controller.js"></script>
<script type="text/javascript">
	let appController = new APPUICONTROLLER();
	// console.log(appController);
	// if(appController.show('home')){
	// 	console.log('okay');
	// }else{
	// 	console.log('Not Okay');
	// }
	let thePath = window.location.href;
	const getLastItem = x => x.substring(x.lastIndexOf('/') + 1)
	let newPath = getLastItem(thePath);
	console.log(newPath.substring(5));
	if(newPath.substring(5) == ''){
		window.location.href += '#home';
	}
</script>
<script type="text/javascript">

window.addEventListener("hashchange", function(e) {
	if(e.oldURL.length > e.newURL.length){
		// alert("back");
	}
	// console.log(window.location.href);
	// if(window.location.href=="http://localhost/easystay/app/home"){
	// 	appController.show('home');
	// }else if(window.location.href=="http://localhost/easystay/app/home#megaSearch"){
	// 	appController.show('megaSearch');
	// }else{
		let thePath = window.location.href;
		const getLastItem = x => x.substring(x.lastIndexOf('/') + 1)
		let newPath = getLastItem(thePath);
		// console.log(newPath.substring(5));
		appController.show(newPath.substring(5), 1);

	// }
});
</script>
</head>
<body className="fixed-bottom-padding bg-light">

<!-- <div className="theme-switch-wrapper">
<label className="theme-switch" for="checkbox">
<input type="checkbox" id="checkbox" />
<div className="slider round"></div>
<i className="icofont-moon"></i>
</label>
<em>Enable Dark Mode!</em>
</div> -->
	
<div id="preloader">
	<div id="ctn-preloader" className="ctn-preloader">
		<div className="animation-preloader">
			<div className="logo p-3">
				<img src="<?=APP_IMG?>logo.png" style="width:100px;" className="rotating-logo">
			</div>
			<!-- <div className="txt-loading">
				<span data-text-preloader="E" className="letters-loading">
					E
				</span>
				
				<span data-text-preloader="A" className="letters-loading">
					A
				</span>
				
				<span data-text-preloader="S" className="letters-loading">
					S
				</span>
				
				<span data-text-preloader="Y" className="letters-loading">
					Y
				</span>
				
				<span data-text-preloader="S" className="letters-loading">
					S
				</span>
				
				<span data-text-preloader="T" className="letters-loading">
					T
				</span>
				
				<span data-text-preloader="A" className="letters-loading">
					A
				</span>

				<span data-text-preloader="Y" className="letters-loading">
					Y
				</span>
			</div> -->
		</div>	
		<div className="loader-section section-left"></div>
		<div className="loader-section section-right"></div>
	</div>
</div>
