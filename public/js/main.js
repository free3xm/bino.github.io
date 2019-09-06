window.onload = function(){
// Hidden menu activator
let btnMenu = document.querySelector(".hambMenuWrapper");
let hiddenMenu = document.querySelector(".hiddenMenuNav");
btnMenu.onclick = function(){
  this.classList.toggle("activeMenu");
  hiddenMenu.classList.toggle("activeHiddenMenu");
}
// Header slaider
let btnSlaider = document.querySelectorAll(".btnSlaiderWrapper");
let headerSlaider = document.querySelector(".contentSlaider");
let headerSlaiderOffset;
btnSlaider[0].onclick = function(){
  if(headerSlaider.style.left <= -headerSlaiderOffset*2 +"px") return
  headerSlaider.style.left =  parseFloat(headerSlaider.style.left) -headerSlaiderOffset + "px";
}
btnSlaider[1].onclick = function(){
  if(headerSlaider.style.left == "0px") return
  headerSlaider.style.left = parseFloat(headerSlaider.style.left) + headerSlaiderOffset + "px";
}
// recnet works sort
let recentsWork = document.querySelectorAll(".recentWorkItem");
let sortBtns = document.querySelectorAll(".navWorkItem");
let blockW;
let blockH;
sortBtns.forEach(e => {
  e.onclick = function(e){
    let sortType = e.target.classList[1];
      if(sortType == "all" ) recentsWork.forEach(e => {
        e.style.display = "block";
        e.style.width = blockW;
        e.style.height = blockH;
        e.style.opacity = 1;
      })
      else {
        recentsWork.forEach(e =>{
          if(!e.classList.contains(sortType)){
            e.style.opacity = 0;
            e.style.width = "0";
            e.style.height = "0";
            setTimeout(function(){
            e.style.display = "none";
          },400)

        }
          else {
                  e.style.display = "block";
                  e.style.width = blockW;
                  e.style.height = blockH;
                  e.style.opacity = 1;
                }
        })
      }
  }
})
// slider fo case studya and some feature
let caseStudy = document.querySelector(".caseStudySlaider");
let dots = document.querySelectorAll(".dotSlaiderItem");
let caseStudyOffset;
let arrOfSrc = ["../img/lightbulbwhite.svg", "../img/commentswhite.svg",
                "../img/glasseswhite.svg", "../img/lightbulb.svg",
                "../img/comments.svg", "../img/glasses.svg"]
let caseItem = document.querySelectorAll(".caseStudyItem");
let imgs = document.querySelectorAll(".caseStudyItemImg img");
caseItem.forEach((e,i) => {
  e.addEventListener("mouseover", function(){
    imgs[i].src=arrOfSrc[i];
    })
  e.addEventListener("mouseout", function(){
    imgs[i].src=arrOfSrc[i+3];
  })
})
dotSlaider(0);
dotSlaider(1);
dotSlaider(2);
function dotSlaider(n){
 dots[n].onclick = function(){
   dots.forEach(e => e.classList.remove("redDotActive"));
   dots[n].classList.add("redDotActive");
   if(n == 0 ) caseStudy.style.left = 0;
   if(n == 1 ) caseStudy.style.left = -caseStudyOffset + "px";
   if(n == 2 ) caseStudy.style.left = -caseStudyOffset*2 + "px";
 }
}

// scroll to sections
let linksVisibleMenu = document.querySelectorAll(".navBar a");
let linksHiddenMenu = document.querySelectorAll(".hiddenMenuNav a");
let btnUp = document.querySelector(".up");
let sections = document.querySelectorAll(".header, .features, .recentWork, .pricing, .ourTeam, .blog, .contact");
linksVisibleMenu.forEach((e,i) => {
  e.onclick = function(){
    event.preventDefault();
    sections[i].scrollIntoView({block: "start", behavior: "smooth"})
  }
})
linksHiddenMenu.forEach((e,i) => {
  e.onclick = function(){
    event.preventDefault();
    sections[i].scrollIntoView({block: "start", behavior: "smooth"})
    btnMenu.classList.toggle("activeMenu");
    hiddenMenu.classList.toggle("activeHiddenMenu");
  }
})
btnUp.onclick = function(){
  sections[0].scrollIntoView({block: "center", behavior: "smooth"})
}
//blockText location change
let blogItems = document.querySelectorAll(".blogItem");
let child1 = blogItems[2].childNodes[1];
let child2 = blogItems[3].childNodes[1];
function changeLocations(b1Pos, b2Pos, to){
  blogItems[b1Pos].insertBefore(blogItems[b1Pos].childNodes[to],child1);
  blogItems[b2Pos].insertBefore(blogItems[b2Pos].childNodes[to],child2);
  }

  // resize section
  window.onresize = function(){
    checkResolution()
    }
  checkResolution();
  function checkResolution(){
    caseStudyOffset = document.querySelector(".caseStudyItem").offsetWidth;
    headerSlaiderOffset = document.querySelector(".content").offsetWidth;
    if(document.body.clientWidth <= 700) changeLocations(2,3,4);
    if(document.body.clientWidth > 700) changeLocations(2,3,4);
    if(document.body.clientWidth <= 630){
      blockW = "100%"
      blockH = "70vw"
    }
    else if(document.body.clientWidth <= 1250){
      blockW = "50%"
      blockH = "70vw"
    }
    else {
      blockW = "25%"
      blockH = "23vw"
    }
  }
}
