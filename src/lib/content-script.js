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

  switch(request.event) {
    case "md_to_jira":
      elem.value = J2M.toJ(elem.value);
      break;
    case "jira_to_md":
      elem.value = J2M.toM(elem.value);
      break;
    default:
      console.warn('Received unknown event ' + request.event);
  }
}

BROWSER_SDK.runtime.onMessage.addListener(requestHandler);
