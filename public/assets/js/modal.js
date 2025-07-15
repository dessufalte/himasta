const deleteButtons = document.querySelectorAll("button.delete-button"),
    confirmDeleteButton = document.querySelector(
        "#confirm-delete button#confirm"
    ),
    redirectLink = document.querySelector("#confirm-delete a#redirect");

deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
        const deleteLink = deleteButton.dataset.delete;
        redirectLink.href = deleteLink;
    });
});
