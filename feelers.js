const daznFixtureFilter = {
  url: [
    {
      urlMatches: 'https://www.dazn.com/.*/fixture/.*',
    },
  ],
};

function daznFixture(details)
{
	console.info("DAZN Fixture loaded at: "+details.url);
	if(details.url.match(/.*\/ContentId:.*\/.*\/.*/))
	{
		let newurl=details.url.replace(/(.*)\/[^\/]*/,"$1");
		console.info("Appears to be Highlights; Attempting to find Full Match at: "+newurl);
		chrome.tabs.update(details.tabId,{url: newurl});
	}
    chrome.scripting.insertCSS({
        files: ["no-stats.css"],
        target: { 
		          tabId: details.tabId
				},
		origin: "USER"
    });
 	
}

chrome.runtime.onInstalled.addListener(()=>{
	chrome.webNavigation.onCompleted.addListener(daznFixture,daznFixtureFilter);
});
chrome.runtime.onStartup.addListener(()=>{
	chrome.webNavigation.onCompleted.addListener(daznFixture,daznFixtureFilter);
});
