function handle_change()
{
  setTimeout(()=>{
    var url=location.href;
    console.info("DAZN Page Loaded at: "+url);
    if(url.match(/.*\/ContentId:.*\/.*\/.*/))
    {
      let newurl=url.replace(/(.*)\/[^\/]*/,"$1");
      console.info("Appears to be Highlights; Attempting to find Full Match at: "+newurl);
      location.replace(newurl);
    }
  },500);
}

handle_change();
navigation.addEventListener('navigate',handle_change);
