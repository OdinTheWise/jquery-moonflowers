/*
var menu = document.getElementById("menu");
var espresso = document.getElementById("espresso");

var p = document.createElement("p");
console.log(p)
var msg = document.createTextNode("Click a menu item to view a picture.");
p.appendChild(msg);
menu.insertBefore(msg, espresso);

var menuItems = menu.getElementsByClassName("menu-item");

var item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    // This next line no longer works 
    // the .hide has been removed from the CSS file
    item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
    item.onclick = function () {

        imgSrc = this.nextElementSibling.getAttribute("src");

        document.getElementById("aside-image").setAttribute("src", imgSrc);
        document.getElementById("aside-image").removeAttribute("class");
    }
}   
*/

(function () {
    var $NewTxt = $('h2').after('<p>Click a Menu Item To See a Picture.</p>');
    console.log($NewTxt);
    var $HideImg = $('.menu-item').siblings().hide();
    console.log($HideImg);
    var $sideImg = $('aside').children().siblings();
    console.log($sideImg);
    var $showImg =$('.menu-item').siblings();
    console.log($showImg);
    
   $('.menu-item').on('click', function () {
       $(this).siblings();
       console.log(this);
       
       $sideImg.attr('src', 'showImg');
       $sideImg.attr('class', '');
     
       
    });
    
    
    
}());


