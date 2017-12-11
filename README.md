[Chrome Extension](https://chrome.google.com/webstore/detail/jjmmhbaklhogjgcccbmhfllhmfdamagg)  
[Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/markdown-to-jira/?src=cb-dl-created)  

-----------------------------

**Markdown to JIRA** is just a tiny wrapper around [J2M](http://j2m.fokkezb.nl/), a javascript library that converts Markdown to JIRA markup (and the other way around) that does all the work.  
It's inspired by the much more powerful [Markdown Here](http://markdown-here.com/) extension, that converts Markdown to HTML (I use it for Gmail).

This extension adds an entry to your right-click menu, called `JIRA Formatting` that expands further in 2 entries:

- `MD to JIRA`
- `JIRA to MD`

When you right click on an issue page on JIRA, and select one of the 2 functionalities, the extension will replace the content with the equivalent markup.

##### Note
The extension has been tested on the following domains:

- `*.jboss.org`
- `*.apache.org`
- `*.jira.com`
- `*.atlassian.com`
- `*.atlassian.net`

But you can edit the list of enabled domains inside the extension options. Mind that Firefox and Chrome syntaxes are different, but the default values should be able to guide you.

You are encouraged to fork the extension and adapt it to your needs or to open a pull request if you wish to contribute back.

Consider that this was my first time writing an extension, so don't expect great engineering behind it. If you are into the topic I suggest you to read official Firefox documentation or to read [Markdown Here](https://github.com/adam-p/markdown-here/).


##### Based on:
- https://github.com/FokkeZB/J2M
- https://github.com/adam-p/markdown-here/


##### Developers
This plugin is a [web extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)
that runs with Chrome and Firefox. To work around vendor specific issues,
[Webpack](https://webpack.js.org/) is used to build the packages.

###### Build
1. Install [yarn](https://yarnpkg.com/en/)
1. Run `yarn install`
1. Run `webpack` to produce the distribution source code (see `dist/`)

###### Development (Firefox)
Run with `web-ext run` from within `dist/firefox`.

###### Development (Chrome)
Visit `chrome://extensions` and load `dist/chrome`.

###### Releasing (Firefox)
1. Run build (see above)
1. `web-ext sign -s ./dist/firefox --api-key='XXXXXXXXXXXXXX' --api-secret='XXXXXXXXXXXXXXXX'`
1. Upload the build (see [docs](https://developer.mozilla.org/en-US/Add-ons/Distribution))

###### Releasing (Chrome)
1. Run build (see above)
1. Visit `chrome://extensions/`
1. Use `dist/chrome` as the extension root directory
1. Add the secret private key to sign
1. Upload the build (see [docs](https://developer.chrome.com/extensions/packaging))

##### Screenshot

![Screenshot](/screenshot.png?raw=true "Screenshot")
