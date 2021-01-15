class Weapon {
//#region Attributs 
    //Point de force de l'arme
    _strenght = 0;

    //point d'endurance de l'arme
    _endurance = 0;

    //Prix de l'arme
    _price = 0;
//#endregion

//#region Get
    getStrenght(){
        return this._strenght;
    }

    getEndurance(){
        return this._endurance
    }

    getPrice(){
        return this._price;
    }
//#endregion

//#region Set
    setStrenght(strenght){
        this._strenght = strenght;
    }

    setEndurance(endurance){
        this._endurance = endurance;
    }

    setPrice(price){
        this._price = price;
    }

//#endregion

//#region Methodes

    //Constructeur
    constructor(strenght, endurance, price){
        this._strenght = strenght;
        this._endurance = endurance;
        this._price = price;
    }
    

//#endregion
}