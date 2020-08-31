class Player {    
  nom;
  xp;
  pseudo;
  avatar;
constructor(n, x, p, a) {
  this.nom = n;
  this.xp = x;
  this.pseudo = p;
  this.avatar = a;
}
}

let player = "json/player.json";

fetch(player)
    .then((player) => {
        return player.json()
    })
    .then((player) => {
        nbarray = player.length;
        for (let nb = 0; nb < nbarray; nb++) {
            console.log(player[nb])

            let newPlayer = document.createElement("div");
            newPlayer.id = "div" + nb + "";
            newPlayer.className = "box";
            let newPlayerInfos = document.createTextNode("");
            newPlayer.innerHTML = '<b>NOM : </b>' + player[nb].Nom + '<br><b>XP : </b>' +
                    player[nb].Xp + '<br><b>PSEUDO : </b>' + player[nb].Pseudo + '<br><b>AVATAR : <' +
                    '/b><br><img src="' + player[nb].Avatar + '" style="height:50px;"<br><br>';
            newPlayer.appendChild(newPlayerInfos);
            let currentDiv = document.getElementById('div');
            document
                .body
                .insertBefore(newPlayer, currentDiv);

                let player = new Player(player[nb].Nom, player[nb].Xp, player[nb].Pseudo, player[nb].Avatar)
        }
    })
    .catch((err) => {
        console.log('Impossible de charger le fichier JSON')
    })