function submitForm() {
    var loadingSigns = document.getElementsByClassName("LoadingSignClass");
    for (var i = 0; i < loadingSigns.length; i++) {
        loadingSigns[i].style.opacity = "100%";
    }
    // Put whatever you want to happen when submitting the form here
}