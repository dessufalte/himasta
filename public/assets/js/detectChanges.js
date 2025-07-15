// detect input changes
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    const inputs = card.querySelectorAll("input");

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            // change border color
            card.classList.remove("border-left-success");
            card.classList.remove("border-left-error");

            card.classList.add("border-left-warning");

            // change submit button able
            const submit = card.querySelector("button");
            submit.removeAttribute("disabled");
        });
    });
});
