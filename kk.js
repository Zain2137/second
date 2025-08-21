function btn() {
    event.preventDefault();
    let namee = document.getElementById('name').value;
    document.getElementById('namechange').textContent = namee;

    let linkss = document.getElementById('link').value;
    document.getElementById('addlink').links = linkss;

    let bioo = document.getElementById('bio').value;
    document.getElementById('biochange').textContent = bioo;

    let user = document.getElementById('Usernamee').value;
    document.getElementById('Username').textContent = user;

    let linkkk = document.getElementById('link').value;
    document.getElementById('linkk').textContent = linkkk;
}

function formm() {
    document.getElementById('profileChanger').style.display = 'block';
}

function previewImage() {
    var file = document.getElementById('fileInput').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
