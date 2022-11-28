let id = null;
let sIndex = 0;
let i =0

function showImage(n) {
   sIndex=n;
   displaySlide();
}


function myMove() {  
    displaySlide();
    id = setInterval(displaySlide, 5000);            
}


function displaySlide() {
    let i=0;
    let slide = document.getElementsByClassName("slide");

    if (sIndex >= slide.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slide.length - 1;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[sIndex].style.display = "block";
    
    sIndex++;
}


function IndexFacebookB(){
    let image = document.getElementById("facebook")
    if (i==0){
        image.src = "img/facebookB.png"
        i=1;
    }
    else{
        image.src = "img/facebook.png"
        i=0;
    }
}

function IndexDiscordB(){
    let image = document.getElementById("discord")
    if (i==0){
        image.src = "img/discordB.png"
        i=1;
    }
    else{
        image.src = "img/discord.png"
        i=0;
    }
}

function IndexInstaB(){
    let image = document.getElementById("insta")
    if (i==0){
        image.src = "img/instaB.png"
        i=1;
    }
    else{
        image.src = "img/insta.png"
        i=0;
    }
}

function IndexTwitterB(){
    let image = document.getElementById("twitter")
    if (i==0){
        image.src = "img/twitterB.png"
        i=1;
    }
    else{
        image.src = "img/twitter.png"
        i=0;
    }
}

function IndexTwitchB(){
    let image = document.getElementById("twitch")
    if (i==0){
        image.src = "img/twitchB.png"
        i=1;
    }
    else{
        image.src = "img/twitch.png"
        i=0;
    }
}


function FacebookB(){
    let image = document.getElementById("facebook")
    if (i==0){
        image.src = "../img/facebookB.png"
        i=1;
    }
    else{
        image.src = "../img/facebook.png"
        i=0;
    }
}

function DiscordB(){
    let image = document.getElementById("discord")
    if (i==0){
        image.src = "../img/discordB.png"
        i=1;
    }
    else{
        image.src = "../img/discord.png"
        i=0;
    }
}

function InstaB(){
    let image = document.getElementById("insta")
    if (i==0){
        image.src = "../img/instaB.png"
        i=1;
    }
    else{
        image.src = "../img/insta.png"
        i=0;
    }
}

function TwitterB(){
    let image = document.getElementById("twitter")
    if (i==0){
        image.src = "../img/twitterB.png"
        i=1;
    }
    else{
        image.src = "../img/twitter.png"
        i=0;
    }
}

function TwitchB(){
    let image = document.getElementById("twitch")
    if (i==0){
        image.src = "../img/twitchB.png"
        i=1;
    }
    else{
        image.src = "../img/twitch.png"
        i=0;
    }
}


function Status(){
    let image = document.getElementById("status")
    if (i==0){
        image.src = "../img/statusB.png"
        i=1;
    }
    else{
        image.src = "../img/status.png"
        i=0;
    }
}

function formulaire(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let message = document.getElementById("MessageContact").value;
    let balise = document.getElementById("ReponseForm");

    balise.innerHTML = "Merci "+prenom+" "+nom+"pour le message suivant<br>"+message+"<br>Nous vous contacterons grâce à vos coordonée ci dessous<br>Email: "+email+"<br>Téléphone: "+tel;

}


function identification(){
    let balise = document.getElementById("jaiplusdenomenstock");
    balise.innerHTML ="<div id=\"IdentificationContainer\"><h1>Identification</h1><table><tr class=\"NousContacter\"><td><label>Email : </label></td><td><input type=\"text\" placeholder=\"Toto@email.com\" class=\"input\" id=\"mail\" required pattern=\"[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}\"></td></tr><tr class=\"NousContacter\"><td><label>Mot De Passe : </label></td><td><input type=\"password\" placeholder=\"Mot De Passe\" class=\"input\" id=\"motdepasse\" required></td></tr><tr class=\"NousContacter\"><td><label>Combien de RedBull<br>voulez-vous ? </label></td><td><input type=\"number\" placeholder=\"∞\" class=\"input\" id=\"RedBull\" onchange=\"calcul()\"></td></tr></table><div id=\"ContChoice\"><h1>Voulez vous un pull ?</h1><div id=\"choice\"><input type=\"radio\" name=\"ouiounon\" id=\"oui\" class=\"ouiounon\" value=\"oui\" onchange=\"calcul()\">oui<input type=\"radio\" name=\"ouiounon\" id=\"non\" class=\"ouiounon\" value=\"non\" onchange=\"calcul()\">non</div></div><div id=\"calcul\"><br><br><br><br><br></div><input type=\"submit\"  value=\"S'identifiez\" id=\"ButtonEnvoyer\" onclick=\"checkidentif()\"><p>Si vous avez deja un compte, <span onclick=\"Connexion()\" cursor>Connectez</span> vous</p></div>"
}

function Connexion() {
    let balise = document.getElementById("jaiplusdenomenstock");
    balise.innerHTML = "<div id=\"ConnexionContainer\"><h1>Connexion</h1><table><tr class=\"NousContacter\"><td><label>Email : </label></td><td><input type=\"text\" placeholder=\"Toto@email.com\" class=\"input\" id=\"mail\" required pattern=\"[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}\"></td></tr><tr class=\"NousContacter\"><td><label>Mot De Passe : </label></td><td><input type=\"password\" placeholder=\"Mot De Passe\" class=\"input\" id=\"motdepasse\" required></td></tr></table><input type=\"submit\"  value=\"Se connecter\" id=\"ButtonEnvoyer\" onclick=\"checkidentif()\"><p>Si vous n'avez pas de compte, <span onclick=\"identification()\" cursor>Identifiez</span> vous</p></div>"
}

function calcul(){
    let RB = document.getElementById("RedBull").value;
    let pull = document.getElementsByName("ouiounon");
    let balise = document.getElementById("calcul");
    let pullprix;
    if (pull[0].checked){
            pullprix = 34;
    }
    else {
        pullprix= 0;
    }
    let calcul = (RB*1.50)+pullprix+2;
    if (pullprix==0){
        balise.innerHTML = "le prix à payer <br>Le prix d'adhésion est de 2€<br>Vous avez pris "+RB+" Canette(s) de RedBull, sois "+RB*1.50+" €<br>Pas de pull<br>Total: "+calcul+" €";
    }
    else{
        balise.innerHTML = "le prix à payer <br>Le prix d'adhésion est de 2€<br>Vous avez pris "+RB+" Canette(s) de RedBull, sois "+RB*1.50+" €<br>Prix du pull: 34€<br>Total: "+calcul+" €";
    }
}

function checkidentif(){
    let mdp = document.getElementById("motdepasse").value
    let email = document.getElementById("mail").value

    if ((mdp!="")&&(mail!="")){
        bdd();
    }
    else {
        alert("vous devez rentrer des valeurs dans les champs");
    }
}



function bdd(){
    let balise = document.getElementById("jaiplusdenomenstock");
    balise.innerHTML = "<div id=\"BDDContainer\"><button type=\"button\" onclick=\"loadXMLDoc()\">Adhérent De Obi1</button><button type=\"button\" onclick=\"addBook()\">Add</button><button type=\"button\" onclick=\"saveBook()\" id=\"btnSave\">Save</button><br><br><table id=\"data\"></table><br><br><table id=\"tblBook\" style=\"display: none;\"><tr><td>Nom</td><td><input type=\"text\" size=\"50\" id=\"txtTitle\"></td> </tr><tr><td>Prenom</td><td><input type=\"text\" size=\"50\" id=\"txtAuthor\"></td></tr><tr><td><input type=\"hidden\" id=\"hId\"></td><td><button type=\"button\" onclick=\"updateBook()\" id=\"btnUpdate\">Update</button><button type=\"button\" onclick=\"add()\" id=\"btnadd\">Add</button></td></tr></table></div>"
}




    let xmlhttp = new XMLHttpRequest();
    function loadXMLDoc() {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                fetchData();
            }
        };
        xmlhttp.open("GET", "../data/xml.xml", true);
        xmlhttp.send();
    }
    function fetchData() {
        let i;
        let xmlDoc = xmlhttp.responseXML;
        let table = "<tr><th>Nom</th><th>Prenom</th></tr>";
        let x = xmlDoc.getElementsByTagName("adherent");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
            x[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("prenom")[0].childNodes[0].nodeValue +
            "</td>" +
            "<td><button type=\"button\" onclick=\"editBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Edit</button></td>" +
            "<td><button type=\"button\" onclick=\"deleteBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Delete</button></td>" +                
            "</tr>";

        }
        document.getElementById("data").innerHTML = table;
    }   

        function editBook(id) {
        let tblBook = document.getElementById("tblBook");
        let txtTitle = document.getElementById("txtTitle");
        let txtAuthor = document.getElementById("txtAuthor");
        let hId = document.getElementById("hId");
    
        let xmlDoc = xmlhttp.responseXML;
        let books = xmlDoc.getElementsByTagName("adherent");
        let book;
    
        for (i = 0; i < books.length; i++) {
            if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
                book = books[i];
            }
        }
    
        tblBook.style.display = "block";
        hId.value = book.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        txtTitle.value = book.getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        txtAuthor.value = book.getElementsByTagName("prenom")[0].childNodes[0].nodeValue;
    }

    function updateBook() {
        let xmlDoc = xmlhttp.responseXML;
        let id = document.getElementById("hId").value;
        let books = xmlDoc.getElementsByTagName("adherent");
        let book;
    
        for (i = 0; i < books.length; i++) {
            if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
                book = books[i];
            }
        }
    
        let txtTitle = document.getElementById("txtTitle");
        let txtAuthor = document.getElementById("txtAuthor");
    
        book.getElementsByTagName("nom")[0].childNodes[0].nodeValue = txtTitle.value;
        book.getElementsByTagName("prenom")[0].childNodes[0].nodeValue = txtAuthor.value;
    
        fetchData();
    }

    function makeTextFile (text) {
        let textFile = null;
        let data = new Blob([text], { type: 'text/plain' });

        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
    };

    function saveBook() {                
        let create = document.getElementById('btnSave');

        let link = document.createElement('a');
        link.setAttribute('download', 'dwc_bdd.xml');
        
        const s = new XMLSerializer();

        link.href = makeTextFile(s.serializeToString(xmlhttp.responseXML));
        document.body.appendChild(link);

        window.requestAnimationFrame(function () {
            let event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        });
    }

function addBook() {
    let tblBook = document.getElementById("tblBook");
    tblBook.style.display = "block";
}

function add(){
    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("adherent");
    let tblBook = document.getElementById("tblBook")
    let book = xmlDoc.createElement("BOOK");    
    let id = xmlDoc.createElement("ID");
    let title = xmlDoc.createElement("TITLE");
    let author = xmlDoc.createElement("AUTHOR");
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");

    let id_Text = xmlDoc.createTextNode(books.length+1);
    id.appendChild(id_Text);
    let NewTitle = txtTitle.value;
        let title_Text = xmlDoc.createTextNode(NewTitle);
        title.appendChild(title_Text);
        let NewAuthor = txtAuthor.value;
        let author_Text = xmlDoc.createTextNode(NewAuthor);
        author.appendChild(author_Text);
        book.append(id);
        book.appendChild(title);
        book.appendChild(author);
        let group = xmlDoc.getElementsByTagName("group")[0];
        group.appendChild(book);

         fetchData();
}