<html>
	<head>
		<meta charset="utf-8">
		<title>emojiDrawer</title>
		<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
		<script src="jquery-3.2.1.js"></script>
		<?php require_once("player.php"); ?>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="stylesheet" type="text/css" href="player.css">
		<script src="player.js"></script>
		<script src="script.js"></script>
	</head>
	<body>
		<div id="container">
			<div class="mode" id="specified">specified mode</div>
			<div class="mode" id="creative">creative mode</div>
			<div id="toolbar">
				<label for="lines">lines: </label>
				<input type="text" class="specs" id="lines">
				<label for="perline">emojis per line: </label>
				<input type="text"  class="specs" id="perline"> | 
				<label for="own">own emoji</label>
				<input type="checkbox" id="own">
				<label for="firstEmoji">base emoji: </label>
				<div class="selectCont"></div>
				<input id="firstEmoji" type="text" class="input ownEmoji">
				<label for="secondEmoji">drawing emoji: </label>
				<div class="selectCont"></div>
				<input id="secondEmoji" type="text" class="input ownEmoji">
				
				<div id="start">start drawing</div>
			</div>
		</div>
		<div style="position: fixed;width: 100%;bottom: 0;text-align: center;left: 0; white-space:pre-line;margin-bottom:15px;">
			draw: <span class="tip">hold mouse</span>, button change brush: <span class="tip">double mouse click</span>, play music: <span class="tip">spacebar</span>, next song: <span class="tip">right arrow</span>, previous song: <span class="tip">left arrow</span>
		</div>
	</body>
</html>
