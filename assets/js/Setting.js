const tabs = document.querySelectorAll(".settings-tabs button");
const forms = document.querySelectorAll(".settings-form");
console.log(tabs)
console.log(forms)
tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        forms.forEach(f => f.classList.remove("active"))
        forms[index].classList.add("active")
    })
})