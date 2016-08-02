var documentUrlPatterns = [ "file:///*", "http://*.jboss.org/*", "https://*.jboss.org/*",
        "http://*.apache.org/*", "https://*.apache.org/*",
        "http://*.jira.com/*", "https://*.jira.com/*",
        "http://*.atlassian.com/*", "https://*.atlassian.com/*",
        "http://*.atlassian.net/*", "https://*.atlassian.net/*"];

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

