//Ajax - file has to exist for status to remain at 200 or 404
// first open(prep request) then send req
const xhr = new XMLHttpRequest();
xhr.open('get','data.json',true);
xhr.send();

xhr.onload = function(){
  if(xhr.status == 200){
    respObj = JSON.parse(xhr.responseText);
    let shopsInfo = respObj.shopsInfo;

    // dropdown menu에 있는 링크 클릭시 지점안내 정보 바뀜
    // json - shopInfo 에서 불러옴
    $('ul.shop-dropdown a').on('click',function(e){
      e.preventDefault();
      const aa = this.innerHTML;
      
      let newShopInfo ='';
      for(i=0; i<shopsInfo.length;i++){
        if(aa === shopsInfo[i].linkname){
          newShopInfo += `<p id="shop_type">${shopsInfo[i].type}</p>`;
          newShopInfo += `<h2 id="shop_name">${shopsInfo[i].name}</h2>`;
          newShopInfo += `<div class="shop_contact">`;
          newShopInfo += `<p id="num">대표전화: ${shopsInfo[i].phone}</p>`;
          newShopInfo += `<p id="hour">영업: ${shopsInfo[i].openhour}</p>`;
          newShopInfo += `<p id="store">식당: ${shopsInfo[i].foodhour}</p>`;
          newShopInfo += `<p id="address">${shopsInfo[i].address}</p>`;
          newShopInfo += `</div>`;
        }
        document.getElementById('newShopInfo').innerHTML = newShopInfo;
        // 지점 바꾸면 드랍다운 없어지고 지점리스트 slideUp
        $('.shopDropdown').fadeOut().find('ul.shop-dropdown').children('li').slideUp();
      }
    })
    }
}

$(function () {
  // Menu Icon
  $(".hdrWrap .menu i").stop().on("click", function () {
    $(".sideMenu").css("left", "0");
    console.log("first");
  });
  $(".menuClose i").stop().on("click", function () {
    $(".sideMenu").css("left", "-100%");
    console.log("first");
  });

  // Search Icon
  $(".searchIcon").on("click", function () {
    $(".searchWrap").slideToggle();
  });
  $(".searchClose i").on("click", function () {
    $(".searchWrap").slideToggle();
  });

  // footer dropdown menu
  $(".ftrDropdown #langSel").on("click", function () {
    $("ul.langBox").slideToggle(300);
  });
  $(".ftrDropdown #familySite").on("click", function () {
    $("ul.famBox").slideToggle(300);
  });

  // sub1 dropdown 열기
  $("#shop_change").on("click", function () {
    $(".shopDropdown").fadeIn();
  });
  $(".shopClose").on("click", function () {
    $(".shopDropdown").fadeOut();
  });
  // dropdown menu accordion
  $(".category p").on("click", function () {
    $(this).parent().siblings().find('ul li').slideUp();
    $(this).next().children('li').stop().slideToggle();
  });

  // index main change bg background
  // $('')
});
