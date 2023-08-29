function switcher_register()
{
  var main=document.querySelector('main');
    
  if(main)
  {  
    console.info('Main found');
    console.info("checking for switcher");
    let switcher=document.querySelector('[data-test-id=VIDEO_SWITCHER]');
    if(switcher)
    {
      console.info("Switcher found");
      switcher.addEventListener('click',() =>
        {
          console.info("Switcher clicked");
          chrome.storage.local.set({switcher_used: true});
          setTimeout( () => {chrome.storage.local.set({switcher_used: false});}, 5000);
        }
      );
    }
  }
  else
  {
    setTimeout(switcher_register,500);
  }
}

function handle_change()
{
  setTimeout(()=>
  {
    var url=location.href;
    console.info("DAZN Page Loaded at: "+url);
    chrome.storage.local.get('switcher_used').then( (result) =>
    {
      console.log("result is "+result.switcher_used);
      if(!result.switcher_used&&url.match(/.*\/ContentId:.*\/.*\/.*/))
      {
        let newurl=url.replace(/(.*)\/[^\/]*/,"$1");
        console.info("Appears to be Highlights; Attempting to find Full Match at: "+newurl);
        location.replace(newurl);
      }
    }
    );
  },1000);
  
  switcher_register();
}



handle_change();
navigation.addEventListener('navigate',handle_change);
