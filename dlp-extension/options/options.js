const websitesField = document.getElementById("websites");

chrome.storage.sync.get(["approvedWebsites"], (data) => {
  if (data.approvedWebsites) {
    websitesField.value = data.approvedWebsites.join("\n");
  }
});

document.getElementById("save").addEventListener("click", () => {
  const websites = websitesField.value.split("\n").map((site) => site.trim());
  chrome.storage.sync.set({ approvedWebsites: websites }, () => {
    alert("Settings saved!");
  });
});