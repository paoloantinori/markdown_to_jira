var cm = require("sdk/context-menu");
var pref = require("sdk/simple-prefs").prefs;

// represent our leaves in the menu
function Entry(label){ 
  this.label = label;
  this.data = label;
  this.context =  cm.SelectorContext("textarea, div, input");
}

cm.Menu({
  label: "JIRA Formatting",
  contentScriptFile: ["./content-script.js", "./J2M.js"],
  contentScriptWhen: "end",
  items: [ 
  cm.Item( new Entry("MD to JIRA") ),
  cm.Item( new Entry("JIRA to MD") ),
  ],
  context: [
    cm.URLContext(pref.domains.split("|")),
    cm.SelectorContext("textarea, div, input")
  ]
});

