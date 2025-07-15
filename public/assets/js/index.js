document.addEventListener("DOMContentLoaded", function () {
    // mobile nav
    var mobileMenuBtn = document.querySelector("header .nav-toggle");
    var menuDiv = mobileMenuBtn.previousElementSibling;
    mobileMenuBtn === null || mobileMenuBtn === void 0
        ? void 0
        : mobileMenuBtn.addEventListener("click", function () {
              mobileMenuBtn.classList.toggle("closed");
              menuDiv.classList.toggle("closed");
              var btnIcon = mobileMenuBtn.querySelector("i");
              if (mobileMenuBtn.classList.contains("closed")) {
                  btnIcon.setAttribute("class", "fa-solid fa-xmark");
              } else {
                  btnIcon.setAttribute("class", "fa-sharp fa-solid fa-bars");
              }
          });
    // faq items
    var faqItems = document.querySelectorAll("#faq dl div");
    faqItems.forEach(function (faqItem) {
        faqItem.addEventListener("click", function () {
            faqItem.classList.toggle("opened");
        });
    });
    // lomba navs
    var infografisIndex = 0,
        esaiIndex = 0;
    var lombaInfografis = document.querySelector("#lomba .lomba-infografis");
    var lombaEsai = document.querySelector("#lomba .lomba-esai");
    var infografisImages = lombaInfografis.querySelectorAll(".lomba-slide img");
    var esaiImages = lombaEsai.querySelectorAll(".lomba-slide img");
    var infografisNav = lombaInfografis.querySelectorAll(".slide-navigation");
    var infoLeft = lombaInfografis.querySelector(
        ".slide-navigation.left-slide"
    );
    var infoRight = lombaInfografis.querySelector(
        ".slide-navigation.right-slide"
    );
    var esaiNav = lombaEsai.querySelectorAll(".slide-navigation");
    var esaiLeft = lombaEsai.querySelector(".slide-navigation.left-slide");
    var esaiRight = lombaEsai.querySelector(".slide-navigation.right-slide");
    infografisNav.forEach(function (nav) {
        nav.addEventListener("click", function (e) {
            if (nav === infoLeft) {
                infografisImages[infografisIndex].classList.remove("selected");
                infografisImages[infografisIndex - 1].classList.add("selected");
                infografisIndex--;
            }
            if (nav === infoRight) {
                infografisImages[infografisIndex].classList.remove("selected");
                infografisImages[infografisIndex + 1].classList.add("selected");
                infografisIndex++;
            }
            if (infografisIndex === 0) {
                infoLeft.classList.add("hidden");
            }
            if (infografisIndex === infografisImages.length - 1) {
                infoRight.classList.add("hidden");
            }
            if (
                infografisIndex !== 0 &&
                infografisIndex !== infografisImages.length - 1
            ) {
                infoLeft.classList.remove("hidden");
                infoRight.classList.remove("hidden");
            }
        });
    });
    esaiNav.forEach(function (nav) {
        nav.addEventListener("click", function (e) {
            if (nav === esaiLeft) {
                esaiImages[esaiIndex].classList.remove("selected");
                esaiImages[esaiIndex - 1].classList.add("selected");
                esaiIndex--;
            }
            if (nav === esaiRight) {
                esaiImages[esaiIndex].classList.remove("selected");
                esaiImages[esaiIndex + 1].classList.add("selected");
                esaiIndex++;
            }
            if (esaiIndex === 0) {
                esaiLeft.classList.add("hidden");
            }
            if (esaiIndex === esaiImages.length - 1) {
                esaiRight.classList.add("hidden");
            }
            if (esaiIndex !== 0 && esaiIndex !== esaiImages.length - 1) {
                esaiLeft.classList.remove("hidden");
                esaiRight.classList.remove("hidden");
            }
        });
    });
});
