function klikni(IdSlike)

{

    var slika1 = document.getElementById("Trenerka");
    var slika2 = document.getElementById("Patika");
    var slika3 = document.getElementById("Torba");
    var slika4 = document.getElementById("Majica");
    var niz1 = ["Trenerke" , "Patike" , "Torbe" , "Majice"];
    var niz2 = ["Ovde mozete kupiti trenerke" ,
                "Ovde mozete kupiti patike" ,
                "Ovde mozete kupiti torbe" ,
                "Ovde mozete kupiti majice"];
    var text=document.getElementById("tekst");
    text.innerHTML="";

    if (IdSlike === "slika1") {

        text.innerHTML = "<p>" + niz1[0] + "</p><br>" + "<p>" + niz2[0] + "</p>";

    }
    else if (IdSlike === "slika2") {

        text.innerHTML = "<p>" + niz1[1] + "</p><br>" + "<p>" + niz2[1] + "</p>";

    }
    else if (IdSlike === "slika3") {

        text.innerHTML = "<p>" + niz1[2] + "</p><br>" + "<p>" + niz2[2] + "</p>";

    }

    else if (IdSlike === "slika4") {

        text.innerHTML = "<p>" + niz1[3] + "</p><br>" + "<p>" + niz2[3] + "</p>";

    }
}

function promena() {
    document.getElementById("onama").style.color = "blue";
  }

  function bezHover() {
    document.getElementById("onama").style.color = "white";
  }



function tajmer() {
    var vreme = 10000;
    while (vreme > 0) {
        console.log(vreme);
        vreme = vreme -1;
        }

    alert("Paznja! Dobili ste kod za popust: POPUST");
}