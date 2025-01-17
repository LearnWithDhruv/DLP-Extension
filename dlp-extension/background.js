const blockedFileExtensions = [".pdf", ".docx", ".xls"];
let approvedWebsites = [];

chrome.storage.sync.get(["approvedWebsites"], (data) => {
  if (data.approvedWebsites) {
    approvedWebsites = data.approvedWebsites;
  }
});

chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  const fileExtension = item.filename.split(".").pop();
  if (blockedFileExtensions.includes(`.${fileExtension}`)) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "assets/icon.png",
      title: "Download Blocked",
      message: `Files with extension .${fileExtension} are not allowed.`,
    });
    return suggest({ cancel: true });
  }
  suggest({});
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const isApproved = approvedWebsites.some((site) => details.url.includes(site));
    if (!isApproved) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "assets/icon.png",
        title: "Upload Blocked",
        message: "File uploads are not allowed on this website.",
      });
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

chrome.runtime.onInstalled.addListener(() => {
  console.log("DLP Extension installed and ready!");
});

const rules = [
  {
    id: 1,
    priority: 1,
    action: {
      type: "block"
    },
    condition: {
      resourceTypes: ["xmlhttprequest", "sub_frame", "main_frame"],
      urlFilter: "|*.pdf|*.docx|*.xls" 
    }
  }
];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: rules
}, () => {
  console.log("Rules updated");
});