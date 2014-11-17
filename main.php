<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Bayes Hack Mining</title>
	<link rel="stylesheet" href="css/foundation.css" />
	<script src="js/vendor/modernizr.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script type="text/javascript" src="js/fuzzyset.js"></script>
	<script type="text/javascript">
		google.load("visualization", "1", {packages:["corechart","geochart"]});
	</script>
	<script src="js/vendor/jquery.js"></script>
	<script type="text/javascript" src="main.js"></script>


</head>
<body>
	<div class="row">
		<div class="large-12 columns">
			<h1>MR.E</h1>
			<h3 class="subheader">Mine Risk Evaluator</h3>
		</div>
	</div>
	<div class="row">
	<div class="small-12 large-6  columns" >
			<div class="row">
				<div class="large-11 columns small-centered radius" id="maintable">
					<div class="row">
						<div class="small-6 columns">
							<h3>Mine Name</h3>
						</div>
						<div class="small-6 columns">
							<h3>Riskiness</h3>
						</div>

					</div>
					<div class="row">
						<div class="small-12">
							<input type="search" placeholder="Search" id="example">
							<div id="results">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="small-12 large-6  columns " >
			<div class="large-11 columns small-centered panel radius" id="breakoutPanel">
				<p>
					click on something to fill this space up
				</p>
			</div>
		</div>
	</div>
	<script src="js/foundation.min.js"></script>
	<script>
		$(document).foundation();

	</script>

	<div class="row">
		<div class="small-6 small-centered columns">
			<center>
				<small> 
					Developed by Tristan, Nick & Alex (Team Poutine!)
				</small>
				<br>

			</center>
		</div>
	</div>

</body>
</html>
<?php
/*

if ($_POST['mine']){
	?>
	<pre>
		<?php
		var_dump($_POST);
		?>
	</pre>
	<script type="text/javascript">
		google.setOnLoadCallback(drawChart);

	</script>
	<div id="chart_div" style="width: 900px; height: 500px; background-color:rgba(255,255,255,0.8)"></div>
	<script type="text/javascript">
		google.setOnLoadCallback(drawRegionsMap);

	</script>
	<div id="regions_div" style="width: 900px; height: 500px; background-color:rgba(255,255,255,0.8)"></div>

	<?php
}else{
	?>
	<div class="row panel">
		<h3>Mining Accidents</h3>
		<div class="large-6 medium-12 columns " id="regions_div">
			<p >
				CHORUS: Dig and I dig and dig and dig 
				Dig diggy dig dig dig a dig 
				Dig diggy diggy dig dig 
				And I dig my life away-o 
				And I dig my life away

				Precious metal is hard to find 
				Precious metal is hard to find 
				Down in the hole and down in the mine 
				And I dig my life away-o 
				And I dig my life away

				Perfect ruby is hard to find 
				Perfect ruby is hard to find 
				Down in the gold slush and shine 
				And I dig my life away-o 
				And I dig my life away

				Good-shaped diamond's hard to find 
				Good-shaped diamond's hard to find 
				Go in the hole both day and night 
				And I dig my life away-o 
				And I dig my life away
			</p>
		</div>
		<div class="large-6 medium-12 columns">
			<form method="POST" action="/" data-abide>

				<div class="row">
					<div class="large-12 columns">
						<fieldset>
							<legend>Fieldset Legend</legend>

							<label>Input Label
								<input type="text" placeholder="Inputs and other form elements go inside...">
							</label>
						</fieldset>
						<label>
							<span data-tooltip aria-haspopup="true" class="has-tip" title="Tooltips are awesome, you should totally use them!">tooltip label</span>
							<input type="text" name="mine" placeholder="mine-large-12.columns" required />
						</label>
						<small class="error">You've gotta fill this out</small>
					</div>
				</div>
				<div class="row">
					<div class="large-4 columns">
						<label>Input Label
							<input type="text" placeholder="large-4.columns" />
						</label>
					</div>
					<div class="large-4 columns">
						<label>Input Label
							<input type="text" placeholder="large-4.columns" />
						</label>
					</div>
					<div class="large-4 columns">
						<div class="row collapse">
							<label>Input Label</label>
							<div class="small-9 columns">
								<input type="text" placeholder="small-9.columns" />
							</div>
							<div class="small-3 columns">
								<span class="postfix">.com</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="large-12 columns">
						<label>Select Box
							<select>
								<option value="husker">Husker</option>
								<option value="starbuck">Starbuck</option>
								<option value="hotdog">Hot Dog</option>
								<option value="apollo">Apollo</option>
							</select>
						</label>
					</div>
				</div>
				<div class="row">
					<div class="large-6 columns">
						<label>Choose Your Favorite</label>
						<input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
						<input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
					</div>
					<div class="large-6 columns">
						<label>Check these out</label>
						<input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
						<input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
					</div>
				</div>
				<div class="row">
					<div class="large-12 columns">
						<label>Textarea Label
							<textarea placeholder="small-12.columns"></textarea>
						</label>
					</div>
				</div>
				<a href="#" class="button expand"> Submit Form</a>
			</form>
		</div>
	</div>
	<?php
}
?>
*/


