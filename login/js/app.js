function send_info() {
    let name = document.getElementById("id-name").value;
    let pass = document.getElementById("id-pass").value;
    if (name == "" || pass == ""){
        alert("Fill out ID and Password completely");
    }
}