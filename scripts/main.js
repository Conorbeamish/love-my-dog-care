document.getElementById("dropdown-toggle").addEventListener("click", function(){
    let dropdownList = document.getElementById("dropdown-list")
    if(dropdownList.classList.contains("dropdown-show")){
        dropdownList.classList.replace("dropdown-show", "dropdown-hide");
    } else {
        dropdownList.classList.replace("dropdown-hide", "dropdown-show");
    }
});
