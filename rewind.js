function rewind()
{
  let pause=document.querySelector('[data-test-id*=PLAYER_BUTTON_PAUSE]'); 
  if(pause) pause.click();
  let plyr=document.querySelector('[data-test-id=DWM_PLAYER]'); 
  plyr.style.display='none'; 
  let rewindb=document.querySelector('[data-test-id*=PLAYER_BUTTON_REWIND]'); 
  setTimeout( ()=>{for(let i=0;i<600;++i) rewindb.click()}, 1000); 
  setTimeout( ()=>{plyr.style.display='block';},5000);
}
