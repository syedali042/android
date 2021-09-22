<div class="loading d-none" id="ui-loader">Loading&#8230;</div>
	<div class="pl-2 pr-2 pt-1 bg-light" id="main-form">
		<div class="title d-flex align-items-center">
			<a href="javascript://" onclick="appController.show('home', 1);" class="text-decoration-none text-dark d-flex align-items-center">
				<img class="osahan-logo mr-2" src="<?=APP_IMG?>logo-n.png">
			</a>
			<p class="ml-auto mr-2 mt-3">
				<a href="javascript://" style="font-size:17px;" onclick="appController.show('notifications', 1);showUserNotifications();" class="text-decoration-none bg-white p-1 rounded shadow-sm d-inline-block align-items-center">
					<i class="text-success icofont-notification"></i>
				</a>
			</p>
		</div>
	</div>
	<div class="app-page" id="home" data-role="page">
		<div class="pl-2 cities">
			<p class="mb-1 where-heading" style="color:#727376;line-height: 5px;font-weight: bold;"><i class="fa fa-map-marker text-success"></i> Choose A City ?</p>
		</div>
		<br>
		<div class="cities" id="city-list">
			<div id="byCities" class="carousel slide" data-ride="carousel">

				  <!-- Indicators -->
				<ul class="carousel-indicators d-none">
					<li data-target="#byCities" data-slide-to="0" class="active"></li>
					<li data-target="#byCities" data-slide-to="1"></li>
					<li data-target="#byCities" data-slide-to="2"></li>
					<li data-target="#byCities" data-slide-to="3"></li>
					<li data-target="#byCities" data-slide-to="4"></li>
				</ul>

				  <!-- The slideshow -->
				<div class="carousel-inner">
				    <div class="carousel-item active">
				    	<div style="display:flex; align-items: center;justify-content: center;">
					      	<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Lahore" method="POST">
									<input type="hidden" name="city_name" value="Lahore">
									<input type="submit" id="findLahore" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findLahore">
										<img src="<?=APP_IMG?>places/lahore.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Lahore</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
							<div class="places-slclass" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Islamabad" method="POST">
									<input type="hidden" name="city_name" value="Islamabad">
									<input type="submit" id="findIslamabad" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findIslamabad">
										<img src="<?=APP_IMG?>places/islamabad.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Islamabad</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
						</div>
				    </div>
				    <div class="carousel-item">
				    	<div style="display:flex; align-items: center;justify-content: center;">
					      	<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Karachi" method="POST">
									<input type="hidden" name="city_name" value="Karachi">
									<input type="submit" id="findKarachi" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findKarachi">
										<img src="<?=APP_IMG?>places/karachi.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Karachi</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
							<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Peshawar" method="POST">
									<input type="hidden" name="city_name" value="Peshawar">
									<input type="submit" id="findPeshawar" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findPeshawar">
										<img src="<?=APP_IMG?>places/peshawar.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Peshawar</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
						</div>
				    </div>
				    <div class="carousel-item">
				    	<div style="display:flex; align-items: center;justify-content: center;">
					      	<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Skardu" method="POST">
									<input type="hidden" name="city_name" value="Skardu">
									<input type="submit" id="findSkardu" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findSkardu">
										<img src="<?=APP_IMG?>places/skardu.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Skardu</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
							<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Multan" method="POST">
									<input type="hidden" name="city_name" value="Multan">
									<input type="submit" id="findMultan" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findMultan">
										<img src="<?=APP_IMG?>places/multan.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Multan</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
						</div>
				    </div>
				    <div class="carousel-item">
				    	<div style="display:flex; align-items: center;justify-content: center;">
					      	<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Gilgit" method="POST">
									<input type="hidden" name="city_name" value="Gilgit">
									<input type="submit" id="findGilgit" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findGilgit">
										<img src="<?=APP_IMG?>places/gilgit.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Gilgit</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
							<div class="places-slider" style="width: 48%;padding:5px;">
								<form action="javascript://" class="getHotelByCity" data="Sialkot" method="POST">
									<input type="hidden" name="city_name" value="Sialkot">
									<input type="submit" id="findSialkot" name="findByCity" class="d-none">
								</form>
								<div class="bg-white shadow-sm rounded text-center c-it">
									<label for="findSialkot">
										<img src="<?=APP_IMG?>places/sialkot.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
										<p class="m-0 pt-2 text-muted text-center">Sialkot</p>
									</label>
									<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><p class="places-response">Fetching Hotels...</p><br></center>
								</div>
							</div>
						</div>
				    </div>
				</div>

				<!-- Left and right controls -->
				<a class="carousel-control-prev" href="#byCities" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#byCities" data-slide="next">
				<span class="carousel-control-next-icon"></span>
				</a>

			</div>
		</div>
		<br>
		<div class="pl-2">
			<p class="mb-1 where-heading" style="color:#727376;line-height: 5px;font-weight: bold;"><i class="fa fa-free-code-camp text-success font-weight-bold"></i> What you want to do ?</p>
		</div>
		<br>
		<div id="byAdventures" class="carousel slide" data-ride="carousel">

			  <!-- Indicators -->
			<ul class="carousel-indicators d-none">
				<li data-target="#byAdventures" data-slide-to="0" class="active"></li>
				<li data-target="#byAdventures" data-slide-to="1"></li>
				<li data-target="#byAdventures" data-slide-to="2"></li>
				<li data-target="#byAdventures" data-slide-to="3"></li>
				<li data-target="#byAdventures" data-slide-to="4"></li>
			</ul>
			<!-- http://easypay.easypaisa.com.pk/easypay-merchant/faces/pg/site/Login.jsf -->
			  <!-- The slideshow -->
			<div class="carousel-inner">
			    <div class="carousel-item active">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Rafting">
								<input type="submit" id="findRafting" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findRafting">
									<img src="<?=APP_IMG?>places/adventures/rafting.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Rafting</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Hiking">
								<input type="submit" id="findHiking" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findHiking">
									<img src="<?=APP_IMG?>places/adventures/hiking.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Hiking</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Chairlift">
								<input type="submit" id="findChairlift" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findChairlift">
									<img src="<?=APP_IMG?>places/adventures/chairlift.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Chairlift</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Camping">
								<input type="submit" id="findCamping" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findCamping">
									<img src="<?=APP_IMG?>places/adventures/camping.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Camping</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Jet-Skiing">
								<input type="submit" id="findJetskiing" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findJetskiing">
									<img src="<?=APP_IMG?>places/adventures/jet-skiing.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Jet Skiing</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Speed-Boating">
								<input type="submit" id="findSpeedboating" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findSpeedboating">
									<img src="<?=APP_IMG?>places/adventures/speed-boating.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Speed Boating</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Skiing">
								<input type="submit" id="findSkiing" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findSkiing">
									<img src="<?=APP_IMG?>places/adventures/skiing.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Skiing</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Rappling">
								<input type="submit" id="findRappling" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findRappling">
									<img src="<?=APP_IMG?>places/adventures/rappling.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Rappling</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Zip-Line">
								<input type="submit" id="findZipline" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findZipline">
									<img src="<?=APP_IMG?>places/adventures/zipline.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Zip Line</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Para-Gliding">
								<input type="submit" id="findParagliding" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findParagliding">
									<img src="<?=APP_IMG?>places/adventures/paragliding.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Para-Gliding</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Cycling">
								<input type="submit" id="findCycling" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findCycling">
									<img src="<?=APP_IMG?>places/adventures/cycling.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Cycling</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 33%;padding:5px;">
							<form action="javascript://" class="getAdventures" method="POST">
								<input type="hidden" class="adventure_type" name="adventure_type" value="Paint-Ball">
								<input type="submit" id="findPaintball" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center  px-2 py-3 c-it">
								<label for="findPaintball">
									<img src="<?=APP_IMG?>places/adventures/paint-ball.png" class="img-fluid px-2">
									<p class="m-0 pt-1 text-muted text-center">Paint Ball</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Adventures...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			</div>

			<!-- Left and right controls -->
			<a class="carousel-control-prev" href="#byAdventures" data-slide="prev">
			<span class="carousel-control-prev-icon"></span>
			</a>
			<a class="carousel-control-next" href="#byAdventures" data-slide="next">
			<span class="carousel-control-next-icon"></span>
			</a>

		</div>
		<br>
		<div class="pl-2">
			<p class="mb-1 where-heading" style="color:#727376;line-height: 5px;font-weight: bold;"><i class="fa fa-map-o text-success"></i> Where Do You Want To Go ?</p>
		</div>
		<br>
		<div id="byPlaces" class="carousel slide" data-ride="carousel">

			  <!-- Indicators -->
			<ul class="carousel-indicators d-none">
				<li data-target="#byPlaces" data-slide-to="0" class="active"></li>
				<li data-target="#byPlaces" data-slide-to="1"></li>
				<li data-target="#byPlaces" data-slide-to="2"></li>
				<li data-target="#byPlaces" data-slide-to="3"></li>
				<li data-target="#byPlaces" data-slide-to="4"></li>
			</ul>

			  <!-- The slideshow -->
			<div class="carousel-inner">
			    <div class="carousel-item active">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Mountain">
								<input type="submit" id="findMountains" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findMountains">
									<img src="<?=APP_IMG?>places/tourism/mountains.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Mountains</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Lake">
								<input type="submit" id="findLakes" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findLakes">
									<img src="<?=APP_IMG?>places/tourism/lakes.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Lakes</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="River">
								<input type="submit" id="findRivers" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findRivers">
									<img src="<?=APP_IMG?>places/tourism/rivers.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Rivers</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Beach">
								<input type="submit" id="findBeach" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findBeach">
									<img src="<?=APP_IMG?>places/tourism/beaches.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Beaches</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Waterfall">
								<input type="submit" id="findWaterfalls" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findWaterfalls">
									<img src="<?=APP_IMG?>places/tourism/waterfalls.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Waterfalls</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Island">
								<input type="submit" id="findIslands" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findIslands">
									<img src="<?=APP_IMG?>places/tourism/islands.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Islands</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Valley">
								<input type="submit" id="findValleys" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findValleys">
									<img src="<?=APP_IMG?>places/tourism/valleys.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Valleys</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Desert">
								<input type="submit" id="findDeserts" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findDeserts">
									<img src="<?=APP_IMG?>places/tourism/deserts.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Deserts</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Museums">
								<input type="submit" id="findMuseum" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findMuseum">
									<img src="<?=APP_IMG?>places/tourism/museum.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Museums</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="National Park">
								<input type="submit" id="findNationalParks" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findNationalParks">
									<img src="<?=APP_IMG?>places/tourism/national-park.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">National Parks</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			    <div class="carousel-item">
			    	<div style="display:flex; align-items: center;justify-content: center;">
				      	<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Pass">
								<input type="submit" id="findTop" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findTop">
									<img src="<?=APP_IMG?>places/tourism/passes.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Passes / Tops</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
						<div class="places-slider" style="width: 48%;padding:5px;">
							<form action="javascript://" class="getPlacesByType" method="POST">
								<input type="hidden" class="place_type" name="place_type" value="Hill">
								<input type="submit" id="findHill" name="findByType" class="d-none">
							</form>
							<div class="bg-white shadow-sm rounded text-center c-it">
								<label for="findHill">
									<img src="<?=APP_IMG?>places/tourism/hills.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
									<p class="m-0 pt-1 text-muted text-center">Hills</p>
								</label>
								<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
							</div>
						</div>
					</div>
			    </div>
			</div>

			<!-- Left and right controls -->
			<a class="carousel-control-prev" href="#byPlaces" data-slide="prev">
			<span class="carousel-control-prev-icon"></span>
			</a>
			<a class="carousel-control-next" href="#byPlaces" data-slide="next">
			<span class="carousel-control-next-icon"></span>
			</a>

		</div>
		
		<br>
		<div class="pl-2 cities">
			<p class="mb-1 where-heading" style="color:#727376;line-height: 5px;font-weight: bold;"><i class="fa fa-map-marker text-success"></i> Get Your Tours ?</p>
		</div>
		<br>

		<div style="display:flex; align-items: center;justify-content: center;">
			<div class="places-slider" style="width: 48%;padding:5px;">
				<!-- <form action="javascript://" class="getPlacesByType" method="POST">
					<input type="hidden" class="place_type" name="place_type" value="Hill">
					<input type="submit" id="findHill" name="findByType" class="d-none">
				</form> -->
				<div class="bg-white shadow-sm rounded text-center c-it">
					<label for="" onclick="toursListing('National')//toursListing('National')">
						<img src="<?=APP_IMG?>places/tourism/nat-tours.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
						<p class="bg-white m-0 pt-1 text-dark text-center">National</p>
					</label>
					<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
				</div>
			</div>
	      	<div class="places-slider" style="width: 48%;padding:5px;">
				<!-- <form action="javascript://" class="getPlacesByType" method="POST">
					<input type="hidden" class="place_type" name="place_type" value="Pass">
					<input type="submit" id="findTop" name="findByType" class="d-none">
				</form> -->
				<div class="bg-white shadow-sm rounded text-center c-it">
					<label for="" onclick="toursListing('International')//toursListing('International')">
						<img src="<?=APP_IMG?>places/tourism/inter-tours.jpg" style="height:100px !important;" class="img-fluid w-100 rounded">
						<p class="bg-white m-0 pt-1 text-dark text-center">International</p>
					</label>
					<center class="spinner d-none"><br><div class="spinner-border text-dark"></div><br>Fetching Places...<br><br></center>
				</div>
			</div>
		</div>

		<div class="pv">
			<br>
			<p class="mb-3 pl-2 where-heading" style="color:#727376;line-height: 5px;font-weight: bold;"><i class="fa fa-bed text-success"></i> Featured Hotels </p>
			<div class="col-12 col-md-3 mb-3">
				<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
					<div class="list-card-image">
						<a href="javascript://" class="text-dark">
							<div class="p-3">
								<video  muted="" style="border-radius: 10px;width:100%;height: auto;background-color: #fff;"  loop controls preload="auto"><source src="<?=APP_IMG?>places/tourism/hp.mp4" type="video/mp4">Your browser does not support the video tag.</video>
								<div class="row mr-0 pt-3">
									<div class="col-8">
										<h6 class="text-success">Satpara Hotel</h6>
										<p class="text-default" style="font-size: 12px;color:#6c757d;">
											<i class="fa fa-map-marker"></i> Skardu, Gilgit-Baltistan
										</p>
									</div>
								</div>
								<div class="">
									<form action="javascript://"  class="ml-auto hotelDetails" method="POST">
										<input type="hidden" name="hotel_id" value="1">
										<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>
										<div class="input-group"></div>
									</form>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-3 mb-3">
				<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
					<div class="list-card-image">
						<a href="javascript://" class="text-dark">
							<div class="p-3">
								<video  muted="" style="border-radius: 10px;width:100%;height: auto;background-color: #fff;"  loop controls preload="auto"><source src="<?=APP_IMG?>places/tourism/Hilton_Berlin(360p).mp4" type="video/mp4">Your browser does not support the video tag.</video>
								<div class="row mr-0 pt-3">
									<div class="col-8">
										<h6 class="text-success">Hotel Berlin</h6>
										<p class="text-default" style="font-size: 12px;color:#6c757d;">
											<i class="fa fa-map-marker"></i> Skardu, Gilgit-Baltistan
										</p>
									</div>
								</div>
								<div class="">
									<form action="javascript://"  class="ml-auto hotelDetails" method="POST">
										<input type="hidden" name="hotel_id" value="1">
										<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>
										<div class="input-group"></div>
									</form>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-3 mb-3">
				<div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
					<div class="list-card-image">
						<a href="javascript://" class="text-dark">
							<div class="p-3">
								<video  muted="" style="border-radius: 10px;width:100%;height: auto;background-color: #fff;"  loop controls preload="auto"><source src="<?=APP_IMG?>places/tourism/Inkaterra_Machu_Picchu_Pueblo_Hotel(360p).mp4" type="video/mp4">Your browser does not support the video tag.</video>
								<div class="row mr-0 pt-3">
									<div class="col-8">
										<h6 class="text-success">Inkaterra Hotel</h6>
										<p class="text-default" style="font-size: 12px;color:#6c757d;">
											<i class="fa fa-map-marker"></i> Skardu, Gilgit-Baltistan
										</p>
									</div>
								</div>
								<div class="">
									<form action="javascript://"  class="ml-auto hotelDetails" method="POST">
										<input type="hidden" name="hotel_id" value="1">
										<button class="btn btn-success btn-sm w-100" style="border-radius:3px"> Details</button>
										<div class="input-group"></div>
									</form>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>


	<div class="app-page d-none" id="hotelDetailsContainer" data-role="page">
	    <br><br>
	    <!-- <input type="hidden" id="activePlaceInContainer">
	    <input type="hidden" id="activeListLastId"> -->
		<div class="places-hotels">

		</div>
		<div class="pagination-city-hotels d-flex align-items-center justify-content-center pb-3 d-none"></div>
	</div>

	<div class="app-page d-none" id="adventureCompaniesList" data-role="page">
	    <br><br>
	    <!-- <input type="hidden" id="activePlaceInContainer">
	    <input type="hidden" id="activeListLastId"> -->
		<div class="adventureCompanies">
			
		</div>
	</div>

	<div class="app-page d-none" id="tourListingPage" data-role="page">
	    <br>
		<div class="row m-1">
			<div class="col-md-8 col-8 filterToursForm">
				<input type="text" class="filterTours form-control" placeholder="Filter By Destination" onfocus="document.getElementById('selectTourFilter').classList.add('d-none');document.getElementById('submitFilterToursForm').classList.remove('d-none');" onblur="document.getElementById('selectTourFilter').classList.remove('d-none');document.getElementById('submitFilterToursForm').classList.add('d-none');">
			</div>
			<div class="col-md-2 col-2">
				<select class="selectTourFilter form-control" onchange="filterToursOptions(this)">
					<option value="" selected>Filter By Destination</option>
					<option value="charges_per_person">Filter By Charges</option>
					<option value="charges_per_couple">Filter By Couple Charges</option>
					<option value="starting_from">Filter By Starting Date</option>
					<option value="duration">Filter By Duration</option>
				</select>
			</div>
			<div class="col-md-2 col-2">
				<button type="submit" onclick="submitFilterToursForm()" class="btn btn-success btn-sm w-100 h-100"><i class="fa fa-search"></i></button>
			</div>
		</div>
		<br>
		<div class="tourListing">
			
		</div>
		<!-- <center>
			<div class="spinner-border text-secondary tours-spinner d-none" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</center> -->
	</div>

	<div class="app-page d-none" id="createBooking" data-role="page">
	    
	    <?php
	    	include('createBooking.php');
	    ?>

	</div>

	<div class="app-page d-none" id="createTourBooking" data-role="page">
	    
	    <?php
	    	include('createTourBooking.php');
	    ?>

	</div>

	<div class="app-page d-none" id="createAdventureBooking" data-role="page">
	    
	    <?php
	    	include('createAdventureBooking.php');
	    ?>

	</div>
	
	<div class="app-page d-none" id="adventurePlaces" data-role="page">
	    <br><br>
		<div class="adventure-places d-flex align-items-center justify-content-center">
            <h5 class="text-warning"><i class="fa fa-clock-o" aria-hidden="true"></i>
                Coming Soon !</h5>
		</div>
	</div>
	
	<!-- <div class="app-page d-none" id="tours" data-role="page">
	    <br><br>
		<div class="tours-listing d-flex align-items-center justify-content-center">
            
		</div>
	</div> -->

	<div class="app-page container d-none" id="megaSearch" data-role="page">
		<form class="user_location" method="POST">
			<input type="hidden" name="hotel_latitude" id="hotel_latitude" value="">
	        <input type="hidden" name="hotel_longitude" id="hotel_longitude" value="">	
		</form>
		<br><br>
		<div class="bg-white p-1 main-form" style="border-radius: 3px; display:block; border:0px solid #fff;" >
			<br>
			<h5 style="color:#727376;text-align:center;padding:10px;">Check Availability</h5>
			<form action="javascript://" class="hotelListing" method="POST">
				<!-- <h6>Destination</h6> -->
				<br>
				<div class="mr-0 pt-2">
					<div class="col-12 from-group w-100">
						<!-- <label for="place"> Enter Hotel Name, City Or Place</label> -->
						<input type="text" style="width:100%" id="place" name="place" required="" class="border-2 form-control place-name d-inline-block" placeholder="&#128269; Hotel Name, City Or Place.." onblur="document.getElementById('sugesstions').style.display='none'" onfocus="document.getElementById('sugesstions').style.display='block'" autocomplete="off">&nbsp;&nbsp;
						<!-- <a href="javascript://" style="background-color: #42aaf5;" class="btn btn-sm d-inline-block pull-right mt-1 text-default showPricing"><i class="fa fa-usd text-white"></i></a> -->
						<div class="sugesstions bg-light row w-100 d-none" id="sugesstions" style="position:absolute;z-index: 1;max-height: 300px;overflow: scroll;background-color: #fff;color: #303030;">
						</div>
					</div>
				</div>

				<br>
				<!--<a href="javascript://" class="btn btn-info btn-sm showPricing" style="text-decoration: none;font-size: 10px;"><i class="fa fa-money"></i> &nbsp;Your Budget</a><br><br>-->
				<div class="pricing m-3">
					<img src="<?=APP_IMG?>pkr.jpeg" class="d-inline-block" style="width: 30px;"> <p class="font-weight-bold" style="color:#727376; display: inline-block;margin-top: 2px;">Choose your own pricing</p>
					<br>
					<div class="row mr-0">
						<div class="col-md-6 col-6 form-group">
							<label for="min_price"> Min.</label>
							<input type="number" id="min_price" name="min_price" class="form-control" min="0" max="25000" value="0">
						</div>
						<div class="col-md-6 col-6 form-group">
							<label for="max_price">Max.</label>
							<input type="number" id="max_price" name="max_price" class="form-control w-100" min="0" max="25000" value="0">
						</div>
					</div>
				</div>
				<button type="submit" style="background-color: #ac0700;" class="btn btn-sm mt-1 text-white w-100"><i class="fa fa-search text-white"></i> Search</button>
				<br><br><br>
				<!--<div class="row mr-0">-->
				<!--	<div class="col-12 col-md-12">-->
				<!--		<button type="submit" name="findHotel" class="btn btn-success btn-sm w-100" value="null">Find Hotel</button>-->
				<!--	</div>-->
				<!--</div>-->
			</form>
			
		</div>
	</div>

	<div class="app-page d-none" id="notifications" data-role="page">
		<div class="p-3 border-bottom bg-white">
			<div class="d-flex align-items-center">
				<h5 class="font-weight-bold m-0 text-success"><i class="fa fa-bell-o"></i> Notifications</h5>
				<!-- <a class="toggle ml-auto" href="#"><i class="icofont-navigation-menu"></i></a> -->
			</div>
		</div>
		<div class="userNotifications">
				
		</div>
	</div>

	<div class="app-page d-none" id="myAccount" data-role="page">
		<?php include 'myAccount.php'; ?>
	</div>

	<div class="app-page d-none" id="editProfile" data-role="page">
		<?php include 'editProfile.php'; ?>
	</div>	

	
	<div class="app-page d-none" id="myBookings" data-role="page">
		<div class="osahan-order">
			<div class="order-menu">

				<div class="row mr-0 m-0  text-center">
					<div class="col pb-2 border-bottom">
						<a href="#completedOrders" onclick="appController.show('completedOrders', 1);addBookingsToCompletedElement();" class="text-muted text-decoration-none">Completed</a>
					</div>
					<div class="col pb-2 border-success border-bottom">
						<a href="#myBookings" onclick="appController.show('myBookings', 1);addBookingsToInProgressElement();" class="text-muted font-weight-bold text-decoration-none">On Progress</a>
					</div>
					<div class="col pb-2 border-bottom">
						<a href="#confirmedOrders" onclick="appController.show('confirmedOrders', 1);addBookingsToConfirmedElement()" class="text-muted text-decoration-none">Confirmed
						</a>
					</div>
				</div>
			</div>
			<div class="order-body p-3 inProgressRequestsContainer">
				
			</div>
		</div>
	</div>

	<div class="app-page d-none" id="terms" data-role="page">
		<?php include 'terms.php'; ?>
	</div>


	<div class="app-page d-none" id="termsconditions" data-role="page">
		<?php include 'termsconditions.php'; ?>
	</div>

	<div class="app-page d-none" id="privacyPolicy" data-role="page">
		<?php include 'privacy.php'; ?>
	</div>

	<div class="app-page d-none" id="faq" data-role="page">
		<?php include 'faq.php'; ?>		
	</div>

	<div class="app-page d-none" id="bookingDetails" data-role="page">
		
	</div>
    
    <div class="app-page d-none" id="nationaTours" data-role="page">
		<div class="container">
			<div class="row tourCompanies">
				
			</div>
		</div>
	</div>
    
	<div class="app-page d-none" id="completedOrders" data-role="page">
		<div class="osahan-order">
			<div class="order-menu">
				<div class="row mr-0 m-0 text-center">
					<div class="col pb-2 border-success border-bottom">
						<a href="#completedOrders" onclick="appController.show('completedOrders', 1);addBookingsToCompletedElement();" class="text-muted font-weight-bold text-decoration-none">Completed</a>
					</div>
					<div class="col pb-2 border-bottom">
						<a href="#myBookings" onclick="appController.show('myBookings', 1);addBookingsToInProgressElement();" class="text-muted text-decoration-none">On Progress</a>
					</div>
					<div class="col pb-2 border-bottom">
						<a href="#confirmedOrders" onclick="appController.show('confirmedOrders', 1);addBookingsToConfirmedElement()" class="text-muted text-decoration-none">Confirmed
						</a>
					</div>
				</div>
			</div>
			<div class="order-body px-3 pt-3 completedRequestsContainer">
				
			</div>
		</div>		
	
	</div>

	<div class="app-page d-none" id="confirmedOrders" data-role="page">
		<div class="osahan-order">
			<div class="order-menu">
				<div class="row mr-0 m-0 text-center">
					<div class="col pb-2 border-bottom">
						<a href="#completedOrders" onclick="appController.show('completedOrders', 1);addBookingsToCompletedElement();" class="text-muted text-decoration-none">Completed</a>
					</div>
					<div class="col pb-2 border-bottom">
						<a href="#myBookings" onclick="appController.show('myBookings', 1);addBookingsToInProgressElement();" class="text-muted text-decoration-none">On Progress</a>
					</div>
					<div class="col pb-2 border-success border-bottom">
						<a href="#confirmedOrders" onclick="appController.show('confirmedOrders', 1);addBookingsToConfirmedElement()" class="text-muted font-weight-bold text-decoration-none">Confirmed
						</a>
					</div>
				</div>
			</div>
			<div class="order-body px-3 pt-3 confirmedRequestsContainer">
				
			</div>
		</div>

	</div>


</div>

<script type="text/javascript">
	const user = '<?=$_SESSION['login_user']['app_user_id']?>';
	localStorage.setItem('loggedInUser', user);
	if(localStorage.getItem('loggedInUser')){
	    // alert(localStorage.getItem('loggedInUser'));
	}else{
	    alert('not working');
	}
	// console.log(localStorage.getItem('loggedInUser'));

	if(localStorage.getItem('loggedInUser')){
    const user_id = localStorage.getItem('loggedInUser');
    $.post('<?=BASEURL?>app/loginDefaultUser', {user_id:user_id}, function(resp) {
      resp = $.parseJSON('resp');
      console.log(resp);
    });
    
	}else{
		// alert('no');
	}


var demoButtons;

function start () {
  
  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll ('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  
  // Add event "click" to "save buttons"
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

// Toggle "effect" classes
function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

// Toggle "active" class
function toggleActive () {
  this.classList.toggle ('active');
}

// Invoke "start ()" function
window.addEventListener ('load', start);
</script>