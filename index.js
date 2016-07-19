var cm = require("sdk/context-menu");

var data = require("sdk/self").data;

// represent our leaves in the menu
function Entry(label){ 
  this.label = label;
  this.data = label;
  this.context =  cm.SelectorContext("textarea, div, input");
  this.contentScriptFile = ["./content-script.js", data.url("J2M.js")];
  this.contentScriptWhen = "end";

}

// represents a submenu
function SubMenu(label, arrEntries){
  this.label = label;
  this.context =  cm.SelectorContext("textarea, div, input");
  this.items = function(arr){
    var items = [];
    for( id in arr){    
      items.push( cm.Item( new Entry(arr[id]) ) );
    }
    return items;
  }(arrEntries);
} 

cm.Item({
  label: "MD to JIRA",
  contentScriptFile: ["./content-script.js", data.url("J2M.js")],
  context: cm.SelectorContext("textarea, div, input")
});

