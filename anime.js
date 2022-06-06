
function search_anime() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
function maFonction3() {
    var div = document.getElementById("mairie");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }}