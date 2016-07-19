// Finds and returns the page element that currently has focus. Drills down into
// iframes if necessary.
function findFocusedElem(document) {
  var focusedElem = document.activeElement;

  // If the focus is within an iframe, we'll have to drill down to get to the
  // actual element.
  while (focusedElem && focusedElem.contentDocument) {
    focusedElem = focusedElem.contentDocument.activeElement;
  }

  // There's a bug in Firefox/Thunderbird that we need to work around. For
  // details see https://github.com/adam-p/markdown-here/issues/31
  // The short version: Sometimes we'll get the <html> element instead of <body>.
  if (focusedElem instanceof document.defaultView.HTMLHtmlElement) {
    focusedElem = focusedElem.ownerDocument.body;
  }

  return focusedElem;
}

// Assigning a string directly to `element.innerHTML` is potentially dangerous:
// e.g., the string can contain harmful script elements. (Additionally, Mozilla
// won't let us pass validation with `innerHTML` assignments in place.)
// This function provides a safer way to append a HTML string into an element.
function saferSetInnerHTML(parentElem, htmlString) {
  // Jump through some hoops to avoid using innerHTML...
  console.log("parent eleme: " + parentElem);
  console.log("parent ownerDocument: " + parentElem.ownerDocument);
  var range = parentElem.ownerDocument.createRange();
  range.selectNodeContents(parentElem);

  var docFrag = range.createContextualFragment(htmlString);
  console.log("docFrag: " + docFrag);

  range.deleteContents();
  range.insertNode(docFrag);
  range.detach();
  return docFrag;
}

function getCaretPositionAndTextNode(editableDiv) {
  var caretPos = 0,
    sel, range, textNode;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editableDiv) {
        caretPos = range.endOffset;
        textNode = range.commonAncestorContainer;
      } else {
        caretPos = sel.anchorOffset;
        textNode = sel.anchorNode;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editableDiv) {
      var tempEl = document.createElement("span");
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      var tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
      textNode = range.commonAncestorContainer;
    }
  }
  return {caretPos, textNode};
}


self.on("click", function (node, data) {
  debugger;
  //unsafeWindow.JIRA.Issue.CommentForm.getField()[0];
  console.log("in click");
  var found = findFocusedElem(document);
  var scrollPos = found.scrollTop;
  // this is for gmail messages
    // find cursor position
  var elem = unsafeWindow.JIRA.Issue.CommentForm.getField()[0];
  elem.value = J2M.toJ(elem.value);


  found.focus();
  found.scrollTop = scrollPos;
  console.log("[content script] node: " + node.innerHTML);
  console.log("[content script] data: " + data);  
  //self.postMessage([node, found]);
  return true;
});

// self.port.on("replacePage", function(message) {
//   document.body.innerHTML = "<h1>" + message + "</h1>";
// });

// self.on("context", function (node) {
//  console.log("in context");
//     console.log(node.nodeName);
//     self.postMessage([node]);
//     return true;
//  });