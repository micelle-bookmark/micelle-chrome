chrome.browserAction.onClicked.addListener(function(tab){
  var url = chrome.extension.getURL('app.html')
  chrome.tabs.create({ url: url });
});