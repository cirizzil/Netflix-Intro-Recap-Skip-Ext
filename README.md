# Netflix-Intro-Recap-Skip-Ext

**Netflix Intro Skipper** is a Chrome extension that automatically skips intros while you are watching Netflix, enhancing your viewing experience by eliminating the need to manually click the "Skip Intro" button.

I created this extension because, while binging Law and Order: SVU, I found the show's intro to be long and repetitive. Initially, I searched for an existing Netflix intro skipper, but then realized I could create my own. To my surprise, it wasn't as difficult as I anticipated.

## Features

- Automatically skips intros on Netflix.
- Seamlessly integrates with Netflix to enhance your binge-watching experience.

## Installation

Follow these steps to install the **Netflix Intro Skipper** extension in your Chrome browser:

1. **Download the extension files**:
   - Download the repository files to your local machine.

2. **Open Chrome Extensions page**:
   - Go to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode**:
   - In the top right corner, toggle the "Developer mode" switch to the "On" position.

4. **Load the extension**:
   - Click on "Load unpacked" and select the directory where the extension files are located.

5. **Enjoy!**:
   - The extension is now installed and active. You can start watching Netflix without worrying about intros.

## Files

- **`manifest.json`**:
  - Contains the metadata for the Chrome extension, including its name, version, and permissions required.
  ```json
  {
    "manifest_version": 3,
    "name": "Netflix Intro Skipper",
    "version": "1.0",
    "description": "Automatically skips intros on Netflix.",
    "permissions": [
      "activeTab",
      "scripting"
    ],
    "background": {
      "service_worker": "background.js"
    },
    "content_scripts": [
      {
        "matches": ["https://www.netflix.com/*"],
        "js": ["content.js"]
      }
    ],
    "icons": {
      "48": "icon.png"
    }
  }
  ```

- **`background.js`**:
  - Handles the installation event for the extension.
  ```javascript
  chrome.runtime.onInstalled.addListener(() => {
    console.log('Netflix Intro Skipper extension installed.');
  });
  ```

- **`content.js`**:
  - Contains the logic to automatically skip intros by observing Netflix's DOM changes and clicking the "Skip Intro" button when it appears.
  ```javascript
  function skipIntro() {
    const skipButton = document.querySelector('.skip-credits a, .skip-credits button, .watch-video--skip-content-button');
    if (skipButton) {
      skipButton.click();
    }
  }

  const observer = new MutationObserver(skipIntro);
  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', skipIntro);
  ```

## How It Works

- The extension uses a **content script** (`content.js`) that runs on Netflix pages. 
- It continuously observes the DOM for any changes using `MutationObserver` and triggers the `skipIntro` function when necessary.
- The function searches for the "Skip Intro" button using query selectors and clicks it automatically.

## Permissions

- **activeTab**: Allows the extension to access the currently active tab in the browser.
- **scripting**: Enables the extension to execute JavaScript code in the context of web pages.

## Contribution

Feel free to contribute to the project by forking the repository, making changes, and submitting a pull request. Suggestions and improvements are welcome!
