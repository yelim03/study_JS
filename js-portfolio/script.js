const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("span");

for (let el of items) {
  el.addEventListener('mouseenter', (e) => {
    e.currentTarget.querySelector("video").play();//currentTarget : article 안에 video 가져오기
  });
  el.addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector("video").pause();//currentTarget : article 안에 video 가져오기
  });
  el.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.classList.add("on");
    aside.querySelector("video").play();

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
};