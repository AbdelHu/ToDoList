const loader = document.getElementById("loader");
const unLoaded = document.getElementById("unLoaded");
unLoaded.style.display = "none";
document.body.style.margin = "0";

setTimeout(unShowLoader, 4000);
function unShowLoader() {
    loader.style.display = "none";
    unLoaded.style.display = "block";
    document.body.style.margin = "200px 0% 50% 1%";
}