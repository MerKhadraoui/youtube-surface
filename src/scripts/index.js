const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  const body = document.querySelector("body").style;

  const topeMenu = document.querySelector(".subscribe-box");
  const section2 = document.querySelector(".main-menu");
  const section3 = document.querySelector(".section3");
  const section4 = document.querySelector(".videos-list");
  const videos = document.querySelector(".videos");
  const videosH2 = document.querySelectorAll(".videos nav");
  const sideMenu = document.querySelectorAll(".side-menu nav");
  const search = document.querySelector("#site-search");
  const topIcons = document.querySelector(".top-section1 ul ");
  const hover = document.querySelectorAll(".main-menu a");
  const logoBlack = document.querySelector("#youtube-logo");
  const logoWhite = document.querySelector("#white-logo");
  const subscrb = document.querySelector("#subs h1");
  if (mood) {
    body.backgroundColor = "#262626";
    topeMenu.style.backgroundColor = "#1e1e1e";
    section2.style.backgroundColor = "#1e1e1e";
    section3.style.backgroundColor = "#262626";
    section4.style.backgroundColor = "#262626";
    videos.style.backgroundColor = "#262626";
    search.style.backgroundColor = "#262626";
    topIcons.style.color = "white";
    sideMenu[0].style.backgroundColor = "#262626";
    sideMenu[1].style.backgroundColor = "#262626";
    sideMenu[2].style.backgroundColor = "#262626";
    logoBlack.style.display = "block";
    logoWhite.style.display = "none";
    subscrb.style.cssText = "color:white;";
    for (let i = 0; i < hover.length; i++) {
      hover[i].style.cssText = "color:#8f8f8f;";
    }
  } else {
    body.backgroundColor = "white";
    topeMenu.style.backgroundColor = "white";
    section2.style.backgroundColor = "#f1f1f1";
    section3.style.backgroundColor = "#f1f1f1";
    section4.style.backgroundColor = "#f1f1f1";
    subscrb.style.cssText = "color:rgb(66, 63, 63);";
    for (let i = 0; i < videosH2.length; i++) {
      videosH2[i].style.cssText = "color:rgb(66, 63, 63);";
    }
    videos.style.backgroundColor = "#f1f1f1";
    topIcons.style.color = "#494747";
    logoBlack.style.display = "none";
    logoWhite.style.display = "block";
    search.style.backgroundColor = "rgb(175, 170, 170)";
    sideMenu[0].style.backgroundColor = "#f1f1f1";
    sideMenu[1].style.backgroundColor = "#f1f1f1";
    sideMenu[2].style.backgroundColor = "#f1f1f1";
    for (let i = 0; i < hover.length; i++) {
      hover[i].style.cssText = "color:rgb(66, 63, 63);";
    }
  }
};
