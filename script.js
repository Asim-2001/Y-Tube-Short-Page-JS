function createCard(title, cName, views, ago, duration, thumbnail, link) {
    let viewsStr
    if (views < 1000) {
        viewsStr = views;
    }
    else if (views > 1000000) {
        viewsStr = views / 1000000 + "M";
    } else {
        viewsStr = views / 1000 + "K";
    }

    let agoStr
    if (ago < 12) {
        agoStr = ago + " months ago";
    } else {
        agoStr = Math.ceil(ago / 12) + " years ago"
    }

    let html = `<a href="${link}">
    <div class="card">
    <div class="image">
    <img src="${thumbnail}" alt="">
    <div class="capsule">${duration}</div>
    </div>
    <div class="text">
    <h2>${title}</h2>
    <p>${cName} | ${viewsStr} views | ${(agoStr)}</p>
    </div>
    </div> </a>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}



createCard("SPIDER-MAN : NO WAY HOME - Official Trailer HD", "Sony Pictures Entertainment", 81000000, 26, "3:04", "https://i.ytimg.com/vi/JfVOs4VSpmA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGqcNNYjVj0snygObBsSeAb8C0sg", "https://www.youtube.com/watch?v=JfVOs4VSpmA")

createCard("SPIDER-MAN : NO WAY HOME - Official Teaser Trailer HD", "Sony Pictures Entertainment", 92000000, 23, "3:06", "https://i.ytimg.com/vi/rt-2cxAiPJk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNgGeUPUP1j3OUhg59o148qDqGDg", "https://www.youtube.com/watch?v=rt-2cxAiPJk")