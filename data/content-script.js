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

self.on("click", function (node, data) {
  debugger;
  //unsafeWindow.JIRA.Issue.CommentForm.getField()[0];
  var elem = node;

  if("MD to JIRA" === data){
    elem.value = J2M.toJ(elem.value);
  } else{
    elem.value = J2M.toM(elem.value);
  }

  found.focus();
  found.scrollTop = scrollPos;
  return true;
});
