[Firefox Extension](https://chrome.google.com/webstore/detail/jjmmhbaklhogjgcccbmhfllhmfdamagg/publish-accepted?authuser=1)  
[Chrome Extension](https://addons.mozilla.org/en-US/firefox/addon/markdown-to-jira/?src=cb-dl-created)  

-----------------------------

**Markdown to JIRA** is just a tiny wrapper around [J2M](http://j2m.fokkezb.nl/), a javascript library that converts Markdown to JIRA markup (and the other way around) that does all the work.  
It's inspired by the much more powerful [Markdown Here](http://markdown-here.com/) extension, that converts Markdown to HTML (I use it for Gmail).

This extension adds an entry to your right-click menu, called `JIRA Formatting` that expands further in 2 entries:

- `MD to JIRA`
- `JIRA to MD`

When you right click on an issue page on JIRA, and select one of the 2 functionalities, the extension will replace the content with the equivalent markup.

##### Note
To keep it not intrusive, I have configured it to appear only on the following domains:

- `*.jboss.org`
- `*.apache.org`
- `*.jira.com`
- `*.atlassian.com`

You are encouraged to fork the extension and adapt it to your needs or to open a pull request if you wish to contribute back.

Consider that this was my first time writing an extension, so don't expect great engineering behind it. If you are into the topic I suggest you to read official Firefox documentation or to read [Markdown Here](https://github.com/adam-p/markdown-here/).


##### Based on:
- https://github.com/FokkeZB/J2M
- https://github.com/adam-p/markdown-here/


##### Dev tips:
- to run in dev: `jpm run -b /usr/bin/firefox`  
- to package: `jpm xpi`  
- to sign: `jpm sign --api-key='XXXXXXXXXXXXXX' --api-secret='XXXXXXXXXXXXXXXX' --xpi   /home/pantinor/md_to_jira/md_to_jira.xpi`

##### Dev docs:
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_%28jpm%29  
https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/context-menu#SelectionContext()  
https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts  


##### Screenshot

![Screenshot](/screenshot.png?raw=true "Screenshot")
