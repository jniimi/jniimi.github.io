document.addEventListener("DOMContentLoaded", function() {
    const rssFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnote.com%2Fjniimi%2Frss";
    fetch(rssFeedUrl)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById("rss-feed");
            data.items.forEach(item => {
                const feedItem = document.createElement("div");
                feedItem.className = "feed-item";
                feedItem.innerHTML = `<li><div class="item_citation"><a href="${item.link}" target="_blank">${item.title} - ${item.pubDate}</a></div></li>`;
                feedContainer.appendChild(feedItem);
            });
        })
        .catch(error => console.error("Error fetching the RSS feed:", error));
});
