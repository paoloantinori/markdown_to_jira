// Saves options to chrome.storage.sync.
function save_options() {
  var domains = document.getElementById('domains').value;
  chrome.storage.sync.set({
    domains: domains
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    domains: 'file://*|*://issues.jboss.org/*|*://*.apache.org/*|*://*.jira.com/*|*://*.atlassian.com/*|*://*.atlassian.net/*'
  }, function(items) {
    document.getElementById('domains').value = items.domains;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);