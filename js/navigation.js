/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu()
{
    document.getElementById("menu-list").classList.toggle("show-list");
    document.getElementById("menu-bar").classList.toggle("expand-list");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-button')) {

        var dropdowns = document.getElementsByClassName("nav-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-list')) {
                openDropdown.classList.remove('show-list');
            }
        }
        var menus = document.getElementsByClassName("nav-menu");
        var i;
        for (i = 0; i < menus.length; i++) {
            var openDropdown = menus[i];
            if (openDropdown.classList.contains('expand-list')) {
                openDropdown.classList.remove('expand-list');
            }
        }
    }
}