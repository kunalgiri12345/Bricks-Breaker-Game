
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">
	<title>Dark Mode</title>
	
	<script src=
"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js">
	</script>
	
	<style>
		body{
		padding:10% 3% 10% 3%;
		text-align:center;
		}
		img{
			height:140px;
				width:140px;
		}
		h1{
		color: #32a852;
		}
		.mode {
			float:right;
		}
		.change {
			cursor: pointer;
			border: 1px solid #555;
			border-radius: 40%;
			width: 20px;
			text-align: center;
			padding: 5px;
			margin-left: 8px;
		}
		.dark{
			background-color: #222;
			color: #e6e6e6;
		}
	</style>
</head>

<body>
	<div class="mode">
		Dark mode:			
		<span class="change">OFF</span>
	</div>
	
	<div>
		<h1>GeeksforGeeks</h1>
		
<p><i>A Computer Science Portal for Geeks</i></p>

		<h3>Light and Dark Mode</h3>
	
<p>
			Click on the switch on top-right
			to move to dark mode.
		</p>

	</div>
	
	<script>
		$( ".change" ).on("click", function() {
			if( $( "body" ).hasClass( "dark" )) {
				$( "body" ).removeClass( "dark" );
				$( ".change" ).text( "OFF" );
			} else {
				$( "body" ).addClass( "dark" );
				$( ".change" ).text( "ON" );
			}
		});
	</script>
</body>

</html>
