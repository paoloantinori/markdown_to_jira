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
// Handle the menu-item click
function requestHandler(request, sender, sendResponse) {
  var elem = findFocusedElem(window.document);
    if (!elem) {
      // Shouldn't happen. But if it does, just silently abort.
      return false;
    }
    if(request.event == "MD to JIRA"){
      elem.innerHTML = J2M.toJ(elem.innerHTML);
    } else{
      elem.innerHTML = J2M.toM(elem.innerHTML);
    }
}
chrome.extension.onMessage.addListener(requestHandler);