function saveToggleCookie(isToggled) {
    document.cookie = `toggled=${isToggled ? "1" : "0"}; path=/`;
}

// get cookie
const savedToggle = document.cookie
    ?.split("; ")
    .find(row => row.startsWith("toggled"))
    ?.split("=")[1];

let isToggled = savedToggle === "1";

const body = document.querySelector("body"),
    accordionSidebar = document.querySelector("#accordionSidebar");

function toggleCookie() {
    isToggled = !isToggled;
    saveToggleCookie(isToggled);
}

// toggle init
if (isToggled) {
    body.classList.add("sidebar-toggle");
    accordionSidebar.classList.add("toggled");
}

const toggleSidebarButton = document.querySelector("button#sidebarToggle");
toggleSidebarButton.addEventListener("click", e => {
    toggleCookie();
});
