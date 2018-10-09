window.addEventListener("load",function(){
//GENERATING EMOJIS
	//EMOJIS PASTE TO THIS VARIABLE
	var emojisDefault="😦😧😥😢😪😓😭😵😲😷😴💤💩😈👿👹👺💀👻👽😺😸😹😻😼😽🙀😿😾",
		select = document.createElement("select");
	select.setAttribute('id','firstEmoji');
	//APPENDING SELECT LISTS
	for (var i=0;i<=emojisDefault.length-1;i+=2){
		var emoji = document.createTextNode(String.fromCodePoint(emojisDefault.codePointAt(i)));
		var option = document.createElement("option");
		option.appendChild(emoji);
		select.appendChild(option);
	}
	document.querySelectorAll(".selectCont")[0].appendChild(select);
	document.querySelectorAll(".selectCont")[1].appendChild(select.cloneNode(true));
	document.querySelectorAll(".selectCont select")[1].setAttribute('id','secondEmoji');
					
	//CREATIVE OR SPECIFIED MODE - EVENTS
	
	var specifiedMode = document.querySelector("#specified"),
		creativeMode = document.querySelector("#creative"),
		toolbar = document.querySelector("#toolbar");
	
	function slide(){
		if(toolbar.style.height!="100px"){
			toolbar.style.height="100px"
			toolbar.style.marginTop="30px";
		} else{
			toolbar.removeAttribute("style");
		}
	}
	specifiedMode.addEventListener('click',slide);
	
	//START FUNCTION
		//MODE ( CREATIVE = FALSE ; SPECIFIED = TRUE )
	function start(mode){
		var lines = (document.querySelector("#lines").value != '') ? parseInt(document.querySelector("input").value) : 7,
			firstEmoji = (document.querySelector("#own").checked) ? document.querySelector("input#firstEmoji").value : document.querySelector("select#firstEmoji").value,
			secondEmoji = (document.querySelector("#own").checked) ? document.querySelector("input#secondEmoji").value : document.querySelector("select#secondEmoji").value,
			perLine = (document.querySelector("#perline").value != '') ? parseInt(document.querySelector("#perline").value) : 7,
			currBrush = (!mode) ? "" : secondEmoji,
			color;
		if(!mode) firstEmoji = "";
		//Math.sqrt(Math.round(Math.random()*songs.length-1)**2)
		
		
		function changeColor(){
			color=$("input[type=color]")[0].value;
			changeBrush();
		};
		
		var HTML ='<div class="text"></div>\
			<div class="clean">clean (press M)</div>\
			<div class="clean copy">safe mode (press K)</div>\
			<div class="curr">current brush: <span id="brush">'+currBrush+'</span></div>\
			<div class="curr color">current color: <span id="color"><input type="color" value="#0000ff"></span></div>\
			<div class="curr brushMode">current mode: <span id="ON_OFF"></span></div>';
		document.body.innerHTML=HTML;
		player_START();
		
		if(!mode){
			document.querySelector("#brush").innerHTML="";
			select.removeAttribute("id");
			document.querySelector("#brush").appendChild(select);
		}
		
		if(!mode) {
			songName="scatman.mp3";
			song.src = "player_Music/"+songName;
			actualizeSongName();
			changePlayerState();
		}
		
		//COLOR PICKER EVENT LISTENER
		$("input[type=color]").on("change keyup paste click",changeColor);
		changeColor();
		
		function generateText(m){
			var text="";
			if(m){
				for (var i=1;i<=lines*perLine;i++){
					text+="<span class='draw'>"+firstEmoji+"</span>";
					if(i%perLine==0){
						text+="<br>";
					}
				}
			}
			else if(!m){
				for (var i=1;i<=2000;i++){
					text+="<span class='draw'></span>";
				}
				var styleSheet=document.createElement("style");
				var styleText='span.draw{\
					font-size:20px;\
					width:20px;\
					height:20px;\
					overflow:hidden;\
					text-align:center;\
					color:#fff;\
					margin:0;\
				}\
				.text{\
					display:flex;\
					width:100%;\
					height:calc(100% - 60px);\
					overflow:hidden;\
					position:fixed;\
					top:0;\
					margin:0;\
					flex-wrap:wrap;\
				}';
				styleSheet.appendChild(document.createTextNode(styleText));
				document.head.appendChild(styleSheet);
			}
			div.innerHTML=text;
		}
		
		var clicked = true,
			copy = false,
			div = document.querySelector(".text");
			
		generateText(mode);
		if(mode && lines>=14) document.querySelector(".text").style.height = document.querySelector(".text").clientHeight+130;
		document.querySelector(".clean").addEventListener("click",function(){
			generateText(mode);
		});
		function copyChange(){
			if(copy) {
				copy=false;
				document.querySelector(".copy").removeAttribute('style');
				changeModeCaption();
				return;
			}
			if(!copy) {
				copy=true;
				document.querySelector(".copy").style.backgroundColor="#0d0";
				changeModeCaption();
				return;
			}
		};
		document.querySelector(".copy").addEventListener("click",copyChange);
		
		function changeModeCaption(){
			var e = document.querySelector("#ON_OFF");
			function tryRemove(){
				try{
					e.removeAttribute('style');
				} catch(e){}
			}
			if(!copy){
				if(clicked){
					e.textContent = 'drawing';
					tryRemove();
					e.style.color="#aaa";
				} else{
					e.textContent = 'erasing';
					tryRemove();
					e.style.color="#d00";
				}
			} else{
				e.textContent = 'safe mode';
				tryRemove();
				e.style.color="#0d0";
			}
		}
		changeModeCaption();
		function changeBrush(){
			if(!copy){
				if(mode){
					if(clicked) {
						currBrush = firstEmoji;
						document.querySelector("#brush").textContent=currBrush;
						document.querySelector("#brush").removeAttribute('style');
						clicked=false;
						changeModeCaption();
						return;
					}
					if(!clicked) {
						currBrush = secondEmoji;
						document.querySelector("#brush").textContent=currBrush;
						document.querySelector("#brush").style.color=color;
						clicked=true;
						changeModeCaption();
						return;
					}
				}
				else{
					if(clicked) {
						currBrush = firstEmoji;
						clicked=false;
						changeModeCaption();
						return;
					}
					if(!clicked) {
						currBrush = document.querySelector("#brush select").value;
						clicked=true;
						changeModeCaption();
						return;
					}
				}
			}
		}
		document.addEventListener('dblclick',changeBrush);
		document.addEventListener("keydown",function(ev){
			switch(ev.keyCode){
				case 75:
					copyChange();
					break;
				case 77:
					generateText(mode);
					break;
			}
		});
		var isClicked=false;
		document.addEventListener("mousedown",function(){
			isClicked=true;
		});
		document.addEventListener("mouseup",function(){
			isClicked=false;
		});
		
		div.addEventListener('mouseover',function(ev){
			if (isClicked){
				if(ev.target.matches('span')){	
					if(!copy){
						if(clicked && (currBrush==secondEmoji || currBrush!='')) {
							ev.target.style.color=color;
						}
						else {
							ev.target.removeAttribute('style');
						}
						ev.target.textContent = currBrush;
					}
				}
			}
		});
	}
	document.querySelector("div#start").addEventListener("click",function(){
		start(true);
	});
	creativeMode.addEventListener('click',function(){
		start(false);
	});
});
