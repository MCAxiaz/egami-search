const id = "egami-search"

browser.contextMenus.create({
    id,
    title: "Reverse Image Search",
    contexts: ["image"]
})

browser.contextMenus.onClicked.addListener(info => {
    switch (info.menuItemId) {
        case id:
            if (info.srcUrl) {
                browser.tabs.create({
                    url: generateSearchUrl(info.srcUrl)
                })
            }
            break;
    }
})

const generateSearchUrl = (imageUrl) => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(imageUrl)}`