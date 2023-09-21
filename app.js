const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    }
  })
});


const hiddenElement = document.querySelectorAll(".hid");
hiddenElement.forEach((element) => observer.observe(element));


// marquee 
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
root.style.setProperty("--marquee-height", marqueeContent.style.getPropertyValue("height"));


for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const logo = document.getElementsByClassName("logo");
var defHeight = [];
for (let i =0 ; i<7 ; i++){
  defHeight.push(logo[i].height);
}
for (let i =0 ; i<7 ; i++){
  logo[i].addEventListener("mouseover", function(){
    logo[i].style.height = logo[i].height*1.4 + "px";
  })
  logo[i].addEventListener("mouseout", function(){
    logo[i].style.height = defHeight[i]+ "px";
    console.log(logo[i].height);
  })
}