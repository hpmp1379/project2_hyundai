$(function () {
  // Menu Icon
  $(".hdrWrap .menu i").on("click", function () {
    $(".sideMenu").css("left", "0");
    console.log("first");
  });
  $(".menuClose i").on("click", function () {
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

  // sub1 dropdown
  $("#shop_change").on("click", function () {
    $(".shopDropdown").fadeIn();
  });
  $(".shopClose").on("click", function () {
    $(".shopDropdown").fadeOut();
  });

  $(".category p").on("click", function () {
    $(this).find("ul.shop-dropdown li").css("display", "block");
    console.log("first");
  });
});
