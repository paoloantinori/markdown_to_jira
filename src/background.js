BROWSER_SDK.storage.sync.get("domains", function(items) {
  var patterns = null;
  if (items.domains) {
    patterns = items.domains.split('|');
  } else {
    patterns = MD_TO_JIRA_DEFAULT_DOMAINS.split('|');
  }

  BROWSER_SDK.contextMenus.create({
    "title" : "MD to JIRA",
    "type" : "normal",
    "contexts" : ["editable"],
    "onclick" : function(info, tab) {
      BROWSER_SDK.tabs.sendMessage(tab.id, {
        "action": 'context-click',
        "event": "md_to_jira"
      });
    },
    "documentUrlPatterns": patterns
  });

  BROWSER_SDK.contextMenus.create({
    "title" : "JIRA to MD",
    "type" : "normal",
    "contexts" : ["editable"],
    "onclick" : function(info, tab) {
      BROWSER_SDK.tabs.sendMessage(tab.id, {
        "action": 'context-click',
        "event": "jira_to_md"
      });
    },
    "documentUrlPatterns": patterns
  });
});
