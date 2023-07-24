function addRecommendation() {
    var message = document.getElementById('message').value
    if (message != null) {
        showpop(true);
        var parent = document.getElementById('flex');
        parent.innerHTML += `<p id="flexItem"><q>${message}</q></p>`; 
    }
    document.getElementById('message').value = "";
}

function showpop(visibility) {
    var popelement = document.getElementById('popup');
    if (visibility) {
        popelement.style.visibility = 'visible';
    } else {
        popelement.style.visibility = 'hidden';
    }
}