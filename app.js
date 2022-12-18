class myVehicle{

    constructor(color, roues, marque){
        this.couleur = color;
        this.roues =  roues;
        this.marque = marque;
    }

    startVeh() {
        console.log("La voiture démarre" +this.couleur + this.roues + this.marque)
    }

    stopVeh(){
        console.log("La voiture s'arrête");
    }
}

class myVela extends myVehicle{

    constructor(color, roues, marque, rayon, peinture){
        super(color, roues, marque);
        this.nombreRayon = rayon;
        this.myPeinture = peinture
    }

    monter(){
        console.log("Je monte sur mon vélo" + this.myPeinture + this.nombreRayon)
    }
}

let velo = new myVela(2, "rouge");
velo.monter();

class voiture extends myVehicle{

    constructor(color, roues, marque, rayon, peinture, assurance, propriétaire){
        super(color, roues, marque);
        this.assu = assurance;
        this.proprio = propriétaire;
    }

    monter = function (){
        console.log("blabla")
    }
}