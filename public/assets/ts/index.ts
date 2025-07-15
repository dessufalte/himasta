document.addEventListener("DOMContentLoaded", () => {
    // mobile nav
    const mobileMenuBtn = document.querySelector("header .nav-toggle")!;
    const menuDiv = mobileMenuBtn.previousElementSibling!;

    mobileMenuBtn?.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("closed");
        menuDiv.classList.toggle("closed");

        const btnIcon = mobileMenuBtn.querySelector("i")!;

        if (mobileMenuBtn.classList.contains("closed")) {
            btnIcon.setAttribute("class", "fa-solid fa-xmark");
        } else {
            btnIcon.setAttribute("class", "fa-sharp fa-solid fa-bars");
        }
    });

    // faq items
    const faqItems = document.querySelectorAll("#faq dl div");

    faqItems.forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
            faqItem.classList.toggle("opened");
        });
    });

    // lomba navs
    let infografisIndex = 0,
        esaiIndex = 0;

    const lombaInfografis = document.querySelector("#lomba .lomba-infografis")!;
    const lombaEsai = document.querySelector("#lomba .lomba-esai")!;

    const infografisImages =
        lombaInfografis.querySelectorAll(".lomba-slide img");
    const esaiImages = lombaEsai.querySelectorAll(".lomba-slide img");

    const infografisNav = lombaInfografis.querySelectorAll(".slide-navigation");
    const infoLeft = lombaInfografis.querySelector(
        ".slide-navigation.left-slide"
    )!;
    const infoRight = lombaInfografis.querySelector(
        ".slide-navigation.right-slide"
    )!;

    const esaiNav = lombaEsai.querySelectorAll(".slide-navigation");
    const esaiLeft = lombaEsai.querySelector(".slide-navigation.left-slide")!;
    const esaiRight = lombaEsai.querySelector(".slide-navigation.right-slide")!;

    infografisNav.forEach((nav) => {
        nav.addEventListener("click", (e) => {
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

    esaiNav.forEach((nav) => {
        nav.addEventListener("click", (e) => {
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
