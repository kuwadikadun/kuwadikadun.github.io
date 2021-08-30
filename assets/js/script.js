// Dark Mode
const toggleSwitch = document.querySelector('input[type="checkbox"].switches');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
    $("nav").addClass("navbar-dark");
    $(".moon").css({
      display: "none",
    });
    $(".sun").css({
      display: "inline",
    });
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    $("nav").removeClass("navbar-dark");
    $(".moon").css({
      display: "inline",
    });
    $(".sun").css({
      display: "none",
    });
  }
}
toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    $("nav").addClass("navbar-dark");
    $(".moon").css({
      display: "none",
    });
    $(".sun").css({
      display: "inline",
    });
  }

  if (currentTheme === "light") {
    toggleSwitch.checked = false;
    $("nav").removeClass("navbar-dark");
    $(".moon").css({
      display: "inline",
    });
    $(".sun").css({
      display: "none",
    });
  }
}

// Load Document
$("document").ready(function () {
  $("#header .content-main").each(function (index) {
    setTimeout(function () {
      $("#header .content-main").eq(index).addClass("content-muncul");
    }, 400 * (index + 1));
  });

  setTimeout(function () {
    $("#header .right-content svg").each(function (index) {
      setTimeout(function () {
        $("#header .right-content svg").eq(index).addClass("muncul");
      }, 400 * (index + 1));
    });
  }, 1500);
});

// Fungsi Paralax Back Text
$(window).scroll(function () {
  let windowScroll = $(this).scrollTop();

  $("#about-me span").css({
    transform: "translate(0px, -" + windowScroll / 4 + "%)",
  });

  $("#tool-skill span").css({
    transform: "translate(0px, -" + windowScroll / 4 + "%)",
  });

  $("#contact span").css({
    transform: "translate(0px, -" + windowScroll / 4 + "%)",
  });

  // Add & Remove Class
  if (document.documentElement.hasAttribute("data-theme") == "dark") {
    if (windowScroll >= 10) {
      $("nav").addClass("shadow-bot-dark");
    }
    if (windowScroll <= 10) {
      $("nav").removeClass("shadow-bot-dark");
    }
  } else {
    if (windowScroll >= 10) {
      $("nav").addClass("shadow-bot-light");
    }
    if (windowScroll <= 10) {
      $("nav").removeClass("shadow-bot-light");
    }
  }

  if (windowScroll < $("#about-me").offset().top - 110) {
    $(".about-me").removeClass("active");
  }
  if (windowScroll >= $("#about-me").offset().top - 100) {
    $(".about-me").addClass("active");
  }
  if (windowScroll <= $("#contact").offset().top - 100) {
    $(".contact").removeClass("active");
  }
  if (windowScroll >= $("#contact").offset().top - 100) {
    $(".about-me").removeClass("active");
    $(".contact").addClass("active");
  }

  // Tool effect
  if (windowScroll > 992) {
    $("#tool-skill .tool-icon").each(function (index) {
      setTimeout(function () {
        $("#tool-skill .tool-icon").eq(index).addClass("tool-muncul");
      }, 600 * index);
    });
  }

  // About me effect
  if (windowScroll > 450) {
    $("#about-me .about-kiri").addClass("muncul");
    $("#about-me .about-kanan").addClass("muncul");
  }
});

// Fungsi Smooth Scrolling
$(".scrolling").on("click", function (e) {
  let href = $(this).attr("href");

  let thisHref = $(href);

  $("html,body").animate(
    {
      scrollTop: thisHref.offset().top - 100,
    },
    800
  );

  // Cek jarak halaman dari atas
  // console.log($("html,body").scrollTop());

  e.preventDefault();
});
