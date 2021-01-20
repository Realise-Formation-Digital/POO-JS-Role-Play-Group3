class Pnj {
//#region Attributs  
    
    //Nom du pnj
    _name = "";

    //Point experience
    _xp = this.nbRandom(50, 0);

    //Point de force
    _strenght = this.nbRandom(this._xp, 1);

    //Point d'endurance
    _endurance = this.nbRandom(this._xp, 1);


    //arme que porte le joueur
    _weapon;   
//#endregion

//#region Get
    getName(){
        return this._name;
    }    

    getXp(){
        return this._xp;
    }

    getStrenght(){
        return this._strenght;
    }

    getEndurance(){
        return this._endurance;
    }

    getWeapon(){
        return this._weapon;
    }

//#endregion

//#region Set
    setXp(xp){
        this._xp = xp;
    }

    setStrenght(strenght){
        this._strenght = strenght;
    }

    setEndurance(endurance){
        this._endurance = endurance;
    }
    

    setWeapon(weapon){
        this._weapon = weapon;
    }
//#endregion

//#region Methodes

    //Constructeur
    constructor(name){
       this._name = name;
    }

    nbRandom(max, min){
        return Math.ceil((Math.random() * max) + min)
    }

    //Acheter une arme
    BuyWeapon(){

    }

    //Vendre une arme de son inventair
    SellWeapon(){

    }
    

//#endregion
}

export default Pnj