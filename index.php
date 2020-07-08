<!DOCTYPE html>
<html lang="en">
<head id="head">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{title}}</title>
</head>
<body>

<div id="body">
	<?php 
		include("app.php");
		include("link.php");
		include("model/ip.php");
	?>
</div>
<style>
	.w50p{
		width: 70%;
		margin: auto;
		margin-top: 100px;
	}
	@media screen and (max-width: 1280px)
{
	.w50p{
		width: 90%;
		margin-top:50px;
	}
}
	.fa-exclamation-triangle {
		color:#f2a1b2;
		font-size: 2em;
		padding-left: 50px;
	} 
th {
background-color: #d8e8dd;
margin: 1px;

padding: 20px;
}
th,td {
	border:1px solid rgba(0, 0, 0, 0.2);
}
td {
	padding: 10px; 
}

.fau{
	font-size: 4em;
	color:red;
}
</style>

<div id="allselect"></div>
</body>
</html>

