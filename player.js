var copiedMode,  songName, song, changePlayerState, actualizeSongName;
function player_START(el = document.body,rand=true,copyMode=false){
	var player, changeSong, isMobile;
	songName = (rand) ? songs[Math.sqrt(Math.round(Math.random()*songs.length-1)**2)] : songs[0];
	function checkMobile() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
	};
	isMobile=checkMobile();
	copiedMode = function(src){
		song.src = "player_Music/"+src+".mp3";
		songName = src+".mp3";
		actualizeSongName();
		if(!isMobile) changePlayerState();
	}
	
	var playerTableContainer = document.createElement('div');
	playerTableContainer.classList.add("playerTableCont");
	var playerCont = document.createElement('div');
	playerCont.classList.add("playerCont");
	var playerArrow = document.createElement('div');
	playerArrow.classList.add("playerArrow");
	var playerArrow2=playerArrow.cloneNode(true);
	playerArrow2.classList.add("nextSong");
	playerArrow.classList.add("previousSong");
	var playerBtn = document.createElement('div');
	playerBtn.classList.add("player");
	playerBtn.classList.add("stopped");
	var playerSpan = document.createElement('span');
	playerSpan.classList.add("playerCaption");
	var pSpan = document.createElement("p");
	playerSpan.appendChild(pSpan);
	var playerProgress = document.createElement("div");
	playerProgress.classList.add("playerProgress");
	var playerProgressBar = document.createElement('div');
	playerProgressBar.classList.add("playerProgressBar");
	var playerProgressValue = document.createElement('div');
	playerProgressValue.classList.add("playerProgressValue");
	if(copyMode){
		var optionBtn = document.createElement("div");
		optionBtn.classList.add("optionsBtn");
		var optionsList = document.createElement("ul");
		var optionItem = document.createElement("li");
		optionsList.classList.add("optionsList");
		optionItem.classList.add("optionItem");
		optionItem.textContent = "copy";
		optionsList.appendChild(optionItem);
		var playerContCopy = document.createElement("div");
		playerContCopy.classList.add("playerContCopy");
		var playerContCopySpan = document.createElement("span");
		playerContCopySpan.textContent = "link to be copied";
		var playerContCopyBtn = document.createElement("div");
		playerContCopyBtn.classList.add("playerContCopyBtn");
		var playerContCopyInput = document.createElement("input");
		playerContCopy.appendChild(playerContCopySpan);
		playerContCopy.appendChild(playerContCopyInput);
		playerContCopy.appendChild(playerContCopyBtn);
	}
	playerProgressBar.appendChild(playerProgressValue);
	playerProgress.appendChild(playerProgressBar);
	playerCont.appendChild(playerArrow);
	playerCont.appendChild(playerBtn);
	playerCont.appendChild(playerArrow2);
	playerCont.appendChild(playerSpan);
	playerCont.appendChild(playerProgress);
	if(copyMode){
	playerCont.appendChild(playerContCopy);
		playerCont.appendChild(optionBtn);
		playerCont.appendChild(optionsList);
	}
	playerTableContainer.appendChild(playerCont);
	el.appendChild(playerTableContainer);
	
	song = new Audio("player_Music/"+songName);
	
	changeSong = function(num){
		try{
			pSpan.removeAttribute("style");
		} catch(e){}
		if(num<0 && song.currentTime>10){
			song.currentTime=0;
			actualizeSongName();
			return;
		}
		else{
			var index=songs.indexOf(decodeURIComponent(song.src.split('/')[song.src.split('/').length-1]));
			if (index==songs.length-1 && num>0) index=0;
			else if (num<0 && index==0) index=songs.length-1;
			else index+=num;
			songName=songs[index];
			playerProgressValue.style.width='0';
			
			if(!song.paused || song.ended) {
				song.pause();
				playerBtn.classList.remove('played');
				playerBtn.classList.add('stopped');
			}
			song.src="player_Music/"+songName;
			changePlayerState();
			actualizeSongName();
		}
	}
	playerArrow2.addEventListener('click',function(){
		changeSong(1);
	});
	playerArrow.addEventListener('click',function(){
		changeSong(-1);
	});
	song.addEventListener("ended",function(){
		changeSong(1);
	});
	
	currValue = function(){
		playerProgressValue.style.width = song.currentTime/song.duration*100+"%";
	}
	
	song.addEventListener("ended",currValue);
	song.addEventListener("timeupdate",currValue);
	song.addEventListener("play",currValue);
	
	actualizeSongName = function(){
		pSpan.textContent = songName.substring(0,songName.length-songName.split(".")[songName.split(".").length-1].length-1);
		playerSpan.setAttribute("title",songName.substring(0,songName.length-songName.split(".")[songName.split(".").length-1].length-1));
		if(copyMode) playerContCopyInput.value = window.location.origin+window.location.pathname+"?song="+encodeURIComponent(songName.substr(0,songName.length-songName.split(".")[songName.split(".").length-1].length-1));
		if(pSpan.clientWidth>130){
			try{
				pSpan.removeAttribute("style");
			} catch(e){}
			pSpan.style.animationName="slidingSongName";
			pSpan.style.animationDuration=String((0.2/3)*pSpan.clientWidth)+"s";
		} else {
			try{
				pSpan.removeAttribute("style");
				pSpan.style.marginLeft="10px";
			} catch(e){}
		}
	}
	actualizeSongName();
	
	changePlayerState = function(){
		if(!song.paused) song.pause();
		else {
			song.play();
		}		
		function changeIcon(){
			try{
				song.removeEventListener("playing",changeIcon);
			}catch(e){}
			try{
				song.removeEventListener("pause",changeIcon);
			}catch(e){}
			playerBtn.classList.toggle("played");
			playerBtn.classList.toggle("stopped");
		}
		song.addEventListener("playing",changeIcon);
		song.addEventListener("pause",changeIcon);
	}
	playerBtn.addEventListener('click',changePlayerState);
	if(copyMode){
		optionBtn.addEventListener("click",function(){
			optionsList.classList.toggle("shown");
		});
		optionItem.addEventListener("click",function(){
			playerContCopy.classList.add("shown");
			optionsList.classList.toggle("shown");
		});
		playerContCopyBtn.addEventListener("click",function(){
			playerContCopy.classList.remove("shown");
		});
	}
	var isHeld=false;
	document.addEventListener('keyup',function(){isHeld=false});
	document.addEventListener("keydown",function(ev){
		switch(ev.keyCode){
			case 32:
				if(!isHeld) changePlayerState();
				isHeld=true;
				break;
			case 39:
				if(!isHeld) changeSong(1);
				isHeld=true;
				break;
			case 37:
				if(!isHeld) changeSong(-1);
				isHeld=true;
				break;
		}
	});
}
