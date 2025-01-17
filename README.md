
# DLP Browser Extension

## Overview
The **DLP (Data Loss Prevention) Browser Extension** is designed to block file uploads and downloads of specific file types on unapproved websites. It provides customizable rules for managing approved websites and file types, ensuring enhanced data security.

## Features
- **Block File Downloads:** Prevents downloads of restricted file types (e.g., `.pdf`, `.docx`, `.xls`).
- **Block File Uploads:** Blocks file uploads on unapproved websites.
- **Customizable Rules:** Allows users to configure approved websites and file types through the options page.
- **User Notifications:** Displays clear notifications for blocked actions, explaining the reason.
- **Declarative Rules:** Utilizes Chrome's `declarativeNetRequest` API for efficient request blocking.

## Installation
1. **Clone the Repository:**  
   ```bash
   git clone <repository-link>
   ```

2. **Load the Extension in Chrome:**  
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode**.
   - Click **Load unpacked** and select the project folder.

3. **Configure Settings:**  
   - Use the options page to add approved websites and customize blocked file types.

## Usage
- **Blocking Downloads:**  
  - Attempt to download a file with a blocked extension (e.g., `.pdf`).  
  - The download will be canceled, and a notification will appear explaining the block.

- **Blocking Uploads:**  
  - Attempt to upload files to unapproved websites.  
  - The upload will be blocked, and a notification will display the reason.

- **Customizing Rules:**  
  - Open the extension options page.  
  - Add or remove approved websites and file extensions.  
  - Save changes to update the blocking rules.

## File Structure
```
DLP_Extension/
├── manifest.json        # Extension metadata and permissions.
├── background.js        # Core logic for blocking uploads/downloads.
├── popup/               # Files for the popup interface.
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── options/             # Files for the settings/options page.
│   ├── options.html
│   ├── options.js
│   └── options.css
├── assets/              # Icons and images.
│   └── icon.png
├── storage.js           # Helper functions for managing storage.
```

## Development Notes
- **APIs Used:**
  - `declarativeNetRequest` for request blocking.
  - `chrome.storage.sync` for storing user settings.
  - `chrome.notifications` for user alerts.

- **Dynamic Rules Management:**  
  Update blocking rules dynamically using the options page.

## Known Limitations
- The extension requires Manifest v3 and cannot use `webRequestBlocking` unless installed via enterprise policies.
- Dynamic rule updates are limited to the capabilities of `declarativeNetRequest`.

## Testing
1. Verify blocked downloads:
   - Attempt to download restricted file types.
   - Ensure the action is blocked and a notification is displayed.

2. Verify blocked uploads:
   - Attempt to upload files on unapproved websites.
   - Confirm that the action is blocked with a notification.

3. Test the options page:
   - Add or remove approved websites and file types.
   - Confirm the changes take effect immediately.

## License
This project is licensed under the MIT License.

## Contribution
Feel free to submit issues or pull requests to improve this extension.
