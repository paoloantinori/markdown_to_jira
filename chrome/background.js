var documentUrlPatterns = [];

chrome.storage.sync.get("domains", function(items) {
  if(items.domains.indexOf("|") > 0){
    documentUrlPatterns = items.domains.split("|");
  }
});
/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "MD to JIRA",
  "type" : "normal",
  "contexts" : ["editable"],
    "onclick" : function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {"action": 'context-click', "event": "MD to JIRA"});
  },  
  "documentUrlPatterns": documentUrlPatterns
});
chrome.contextMenus.create({
  "title" : "JIRA to MD",
  "type" : "normal",
  "contexts" : ["editable"],
    "onclick" : function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {"action": 'context-click', "event": "JIRA to MD"});
  },  
  "documentUrlPatterns": documentUrlPatterns
});

