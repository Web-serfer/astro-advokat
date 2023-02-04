$(document).ready(function() {
  'use strict';

  let menuOpenIcon = $(".nav__icon-menu"),
      menuCloseIcon = $(".nav__icon-close"),
      menuList = $(".menu-overlay"),
      searchOpenIcon = $(".search-button"),
      searchCloseIcon = $(".search__close"),
      searchInput = $(".search__text"),
      searchBox = $(".search");


  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function () {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
  }

  function menuClose() {
    menuList.removeClass("is-open");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 300);
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }

  $('.search, .search__box').on('click keyup', function (event) {
    if (event.target == this || event.keyCode == 27) {
      $('.search').removeClass('is-visible');
    }
  });

   // =====================
  // Поиск система - Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '{article}',
    noResultsText: '<li class="no-results"><h3>No results found</h3></li>'
  });


  /* =======================
  // Анимация подгрузки страницы
  ======================= */
  setTimeout(function(){
    $('body').addClass('is-in');
  },150)
 

  /* =======================
  // Ленивая загрузка изображений
  ======================= */
  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  })


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="player.twitch.tv"]', 'iframe[src*="facebook.com"]']
  });
  

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });

});