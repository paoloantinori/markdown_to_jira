// Saves options to browser.storage.sync.
function save_options() {
  var domains = document.getElementById('domains').value;
  BROWSER_SDK.storage.sync.set({
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
// stored in browser.storage.
function restore_options() {
  BROWSER_SDK.storage.sync.get({
    domains: MD_TO_JIRA_DEFAULT_DOMAINS
  }, function(items) {
    document.getElementById('domains').value = items.domains;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
