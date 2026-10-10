// 1000 == 1 second
setInterval(updateLATime, 1000);
updateLATime();
// fetchNasa();

// function toggleNasa() {
//   const nasa = document.getElementById('nasa-container');
//   const current = getComputedStyle(nasa).display;
//
//   nasa.style.display = current === 'none' ? 'inline' : 'none';
// }

function updateLATime()
{
    const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };
    const now = new Date();
    const laTime = new Intl.DateTimeFormat('en-US', options)
    .format(now)
    .replace(/\s+/g, '')
    .toLowerCase();

  const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        // weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    document.getElementById('la-time').textContent = `${formattedDate} ${laTime} LA`;
}

function toggleAB(before, after) {
    var prev = document.getElementById(before);
    var next = document.getElementById(after);
    if (prev.style.display === "inline") {
        next.style.display = "inline";
        prev.style.display = "none";
    } else if (next.style.display === "inline") {
        prev.style.display = "inline";
        next.style.display = "none";
    }
    // console.log("toggleAB ran");
}

// tracks which section div is currently shown so any link can hide it
var openPanel = 'list';

function openSection(id) {
    // always closes what is already open and then opens what user clicked
    var target = (id === openPanel) ? 'list' : id;
    toggleAB(openPanel, target);
    openPanel = target;
}

function emailToClipboard() {
    navigator.clipboard.writeText("paulocamachodev@gmail.com");
    alert("paulocamachodev@gmail.com copied to clipboard");
}

// function fetchNasa() {
//   const nasaContainer = document.getElementById('nasa-container');
//   if (!nasaContainer) return;
//
//   const MAX_WIDTH = "300px";
//
//   const apiKey = "2chhj1QzxvfYe72oA2Mmvqg3wmEyJ20aHDefx2Sj";
//   const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=true`;
//
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       let mediaHtml = '';
//       const mediaUrl = data.thumbnail_url || data.url;
//
//       if (data.media_type === 'image' || data.thumbnail_url) {
//         mediaHtml = `<img src="${mediaUrl}" alt="${data.title}" loading="eager" fetchpriority="high">`;
//       } else if (data.url.includes('.mp4') || data.url.includes('.webm')) {
//         mediaHtml = `<video src="${data.url}" controls autoplay loop muted></video>`;
//       } else {
//         mediaHtml = `<iframe src="${data.url}" allowfullscreen style="border: none;"></iframe>`;
//       }
//
//       // margin: 0 auto handles centering the inner div wrapper
//       nasaContainer.innerHTML = `
//         <div style="max-width: ${MAX_WIDTH}; width: 100%; margin: 0 auto;">
//           <p style="margin-top: 8px; font-size: 0.9rem; text-align: center;">NASA's Image of the Day · ${data.title}</p>
//           ${mediaHtml}
//         </div>`;
//     })
//     .catch(err => console.error("NASA Fetch Error:", err));
// }
