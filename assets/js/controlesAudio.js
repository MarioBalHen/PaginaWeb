function accionPlayAudio()
{
	if(!medioAudio1.paused && !medioAudio1.ended) 
	{
		medioAudio1.pause();
		play1.value='\u25BA'; //\u25BA
	}
	else
	{
		medioAudio1.play();
		play1.value='||';
	}
}
function accionPlayAudio2()
{
	if(!medioAudio2.paused && !medioAudio2.ended) 
	{
		medioAudio2.pause();
		play2.value='\u25BA'; //\u25BA
	}
	else
	{
		medioAudio2.play();
		play2.value='||';
	}
}
function accionPlayAudio3()
{
	if(!medioAudio3.paused && !medioAudio3.ended) 
	{
		medioAudio3.pause();
		play3.value='\u25BA'; //\u25BA
	}
	else
	{
		medioAudio3.play();
		play3.value='||';
	}
}

function accionPlayAudio4()
{
	if(!medioAudio4.paused && !medioAudio4.ended) 
	{
		medioAudio4.pause();
		play4.value='\u25BA'; //\u25BA
	}
	else
	{
		medioAudio4.play();
		play4.value='||';
	}
}


function iniciar() 
{
	medioAudio1=document.getElementById('medioAudio1');
	play1=document.getElementById('bAudioUno');
	medioAudio2=document.getElementById('medioAudio2');
	play2=document.getElementById('bAudioDos');
	medioAudio3=document.getElementById('medioAudio3');
	play3=document.getElementById('bAudioTres');
	medioAudio4=document.getElementById('medioAudio4');
	play4=document.getElementById('bAudioCuatro');



	play1.addEventListener('click', accionPlayAudio);
	play2.addEventListener('click', accionPlayAudio2);
	play3.addEventListener('click', accionPlayAudio3);
	play4.addEventListener('click', accionPlayAudio4);

}

window.addEventListener('load', iniciar, false);
document.getElementById("audios").style.visibility="hidden";