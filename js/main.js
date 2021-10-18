//menu
function menu(){
    if(document.querySelector('nav ul').classList.contains('active')){
        document.querySelector('nav ul').classList.remove('active');
        document.querySelector('nav .hambarger').classList.remove('active');
    }else{
        document.querySelector('nav ul').classList.add('active');
        document.querySelector('nav .hambarger').classList.add('active');
    }
}
document.querySelector('nav  .hambarger').addEventListener('click', menu)

//slider
var currentSlide = 1,
sliderSection = document.querySelector('.landing'),
sliderImg = document.querySelectorAll('.landing img');
checker()
function checker(){
        sliderImg.forEach((img)=>{
            img.classList.remove('active');
        });
    sliderImg[currentSlide - 1].classList.add('active');
}
let autoSlide = setInterval(function(){
    if(currentSlide == sliderImg.length){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker();
    }
},3000);
//about
window.addEventListener('scroll',function(){
let aboutSec = document.querySelector('.about').getBoundingClientRect().top + 200;
let aboutBox = document.querySelectorAll('.about .container .box');
    aboutBox.forEach((box)=>{
            if(aboutSec < window.innerHeight){
                box.classList.add('active');
            }else{
                box.classList.remove('active');
            }
        })
   
})
//portfolio
const ul = document.createElement('ul');
for(var i = 1; i < 6; i++){
    var li = document.createElement('li');
    li.style.cssText = `text-transform:uppercase; margin-right:10px; cursor:pointer; background-color:#F6F6F6; font-size:10px;
    color:#555555;
    padding:10px`;
    ul.append(li);
}
ul.children[0].classList = "active";
ul.children[0].textContent = 'all';
ul.children[1].textContent = 'graphic design';
ul.children[2].textContent = 'web design';
ul.children[3].textContent = 'photography';
ul.children[4].textContent = 'print design';
//
ul.children[0].setAttribute('data-cat', '.all');
ul.children[1].setAttribute('data-cat', '.graphic');
ul.children[2].setAttribute('data-cat', '.web');
ul.children[3].setAttribute('data-cat', '.photography');
ul.children[4].setAttribute('data-cat', '.print');

//get
const portfolioIMG = Array.from(document.querySelectorAll('.portfolio .content'))
const switKEYS = Array.from(ul.children);

switKEYS.forEach((li)=>{
    li.addEventListener('click', function(){
        switKEYS.forEach((e)=>{
                e.classList.remove('active');
                this.classList.add('active');
            })
    
    })
    li.addEventListener('click',swicther )

});
function swicther(){
    portfolioIMG.forEach((img)=>{
        img.style.display = 'none'
    })
    document.querySelectorAll(this.dataset.cat).forEach((img)=>{
        img.style.display = "block"
            })
}
document.querySelector('.portfolio .container .main-heading').after(ul);
ul.style.cssText = "display:flex; margin:60px 0; justify-content:center;";
//
window.addEventListener('scroll', function(){
    const envirSection = document.querySelector('.environment .content').getBoundingClientRect().top
    if(envirSection < window.innerHeight){
        document.querySelector('.environment .content').classList.add('active');
    }else{
        document.querySelector('.environment .content').classList.remove('active');
    }
});

//team
window.addEventListener('scroll', function(){
    const teamSec = document.querySelector('.team .container .box').getBoundingClientRect().top;
    const teamBox = document.querySelector('.team .container .box');
    if(teamSec < window.innerHeight){
        teamBox.classList.add('active')
    }else{
        teamBox.classList.remove('active')

    }
});
//work
window.addEventListener('scroll', function(){
    const workSec = document.querySelector('.work .content').getBoundingClientRect().top;
    const workSection = document.querySelector('.work .content');
    if(workSec < window.innerHeight){
        workSection.classList.add('active')
    }else{
        workSection.classList.remove('active')

    }
});
//blog
const blogImg = [`images/blog/BlogOne.jpg`,
'images/blog/blogTwo.jpeg',
'images/blog/blogThree.jpg',
'images/blog/blogFour.jpg',
'images/blog/blogFive.png',
'images/blog/blogSix.png',
'images/blog/blogSix.png',
'images/blog/blogSix.png',
'images/blog/blogSix.png',
'images/blog/blogSix.png'];

let containerBlog = document.createElement('div');
containerBlog.classList = "boxsss";

document.querySelector('.blog .container').appendChild(containerBlog)
for(let i = 0; i < blogImg.length; i++){
    var boxs = document.createElement('div');
    boxs.classList = "boxs";
    var blogImgSrc = document.createElement('img');
    blogImgSrc.style.width = "100%";
    blogImgSrc.src = blogImg[i];
    boxs.appendChild(blogImgSrc);
   var h3Blog =  document.createElement('h3');
    boxs.appendChild(h3Blog);
    boxs.appendChild(document.createElement('p'));
    document.querySelector('.blog .container').appendChild(boxs);
    document.querySelector('.blog .container .boxsss').appendChild(boxs);

    var links = document.createElement('div');
    links.classList = 'links';
    let ahref = document.createElement('a');
    ahref.textContent = "view more >"
    ahref.href = "#";
    links.appendChild(ahref);
    links.appendChild(document.createElement("span")).textContent = "web design";
    boxs.appendChild(links)

}
let allh3 = document.querySelectorAll('.blog .container h3');
let allp = Array.from( document.querySelectorAll('.blog .container .boxs p'));
allp.forEach((p)=>{
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid."
})

allh3[0].textContent = "We make the different and we love to do it";
allh3[1].textContent = "We make the different and we love to do it";
allh3[2].textContent = "Its your preparation which will make the difference";
allh3[3].textContent = "When you are done its time for fun and enjoy it";
allh3[4].textContent = "When you are done its time for fun and enjoy it";
allh3[5].textContent = "When you are done its time for fun and enjoy it";
allh3[6].textContent = "When you are done its time for fun and enjoy it";
allh3[7].textContent = "When you are done its time for fun and enjoy it";
allh3[8].textContent = "When you are done its time for fun and enjoy it";
allh3[9].textContent = "When you are done its time for fun and enjoy it";
const nextBtn = document.querySelector('.blog  .next');
const preBtn = document.querySelector('.blog  .previous');
nextBtn.onclick = function(){
    document.querySelector('.blog  .boxsss').scrollLeft += 200;
 
}
preBtn.onclick = function(){
    document.querySelector('.blog  .boxsss').scrollLeft -= 200;
 
}
document.querySelector('.blog > button').textContent = 'show all';
document.querySelector('.blog > button').onclick = function(){
    if(!document.querySelector('.blog  .boxsss').classList.contains('active')){
        document.querySelector('.blog  .boxsss').classList.add('active');
        document.querySelectorAll('.blog > i').forEach((i)=>{
            i.style.display = 'none';
        });
        this.textContent = 'show less';
    }else{
        document.querySelector('.blog  .boxsss').classList.remove('active');
        document.querySelectorAll('.blog > i').forEach((i)=>{
            i.style.display = 'block';
        });
        this.textContent = 'show all';
    }
};
//pricing
/*
const pricingCont = document.createElement('div');
pricingCont.classList = 'content';
let pricingArr = [`pre month ${"<span>$99</span>"}`,
`storage 1GB`,
`bandwidth 5GB`,
`email address 500`,
`free support 1 year`];



for(var i = 0; i < 3; i++){

    var priceul = document.createElement('ul');   
for(var k = 0; k < 10; k++){
    var priceli = document.createElement('li'); 
    priceul.appendChild(priceli);
}
    
console.log(priceul)
};*/

//numbers
var clients = document.querySelectorAll('.fact .text h4');
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var counters = false;

let clientserv =  setInterval(function(){
   if(counters == true){
    count1++;
    clients[0].innerHTML = count1;
   }else{
    counters = false;
   }if(count1 == 176){
    clearInterval(clientserv)
   }
}, 50);
let projComp =  setInterval(function(){
    if(counters == true){
     count2++;
     clients[1].innerHTML = count2;
    }else{
     counters = false;
    }if(count2 == 90){
     clearInterval(projComp)
    }
 }, 50);
 let clodeline =  setInterval(function(){
    if(counters == true){
    count3++;
     clients[2].innerHTML = `${count3}M`;
    }else{
     counters = false;
    }if(count3 == 50){
     clearInterval(clodeline)
    }
 }, 50);
 let coffedrink =  setInterval(function(){
    if(counters == true){
     count4++;
     clients[3].innerHTML = count4;
    }else{
     counters = false;
    }if(count4 == 150){
     clearInterval(coffedrink)
    }
 }, 50);

window.addEventListener('scroll', function(){
    let factSec = document.querySelector('.fact').getBoundingClientRect().top;

    if( factSec < window.innerHeight ){
        counters = true;
    }else{
        counters = false;

    }
})