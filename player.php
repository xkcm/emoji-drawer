<?php

	$nazwy=array();
	$number=0;
	$sciezka="player_Music";
	$zrodlo=opendir($sciezka);

	 while ($plik = readdir($zrodlo)){
		 if($plik<>"." && $plik<>".." && !is_dir ($zrodlo.$plik)){
			 $number++;
			 array_push($nazwy, $plik);
		 }
	 }
	
	//creating js variable
	
	$text = "";
	$text = $text.'<script>var songs = [';
	
	
	for($i=0; $i<=$number-1; $i++)
	{
		  $text = $text.'"';
		  if ($i<$number-1) $text = $text.$nazwy[$i].'",';
		  else if($i==$number-1) $text = $text.$nazwy[$i].'"];</script>';
	}
	echo $text;
?>
