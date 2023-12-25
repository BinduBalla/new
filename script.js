let activeLink = document.querySelector(".nav-item .active");
let activeData = activeLink.getAttribute('href');
document.querySelector(activeData.toString()).style.display = 'block';

const navlinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navlinks.length; i++) {
    let navlink = navlinks[i];
    navlink.onclick = (event) => {
        event.preventDefault();
        let activeLink = document.querySelector(".nav-item .active");
        let activeData = activeLink.getAttribute('href');
        document.querySelector(activeData.toString()).style.display = 'none';
        activeLink.classList.remove("active");
        navlink.classList.add('active');
        let newData = navlink.getAttribute('href');
        document.querySelector(newData.toString()).style.display = 'block';
    }
}
