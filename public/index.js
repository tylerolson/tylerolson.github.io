window.onscroll = checkScroll

checkScroll()
function checkScroll() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("top-navbar").classList.remove("navbar-transparent")
    } else {
        document.getElementById("top-navbar").classList.add("navbar-transparent")
    }
}