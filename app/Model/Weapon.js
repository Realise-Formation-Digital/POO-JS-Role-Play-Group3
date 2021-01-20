class Weapon {
//#region Attributs 

    //nom de l'arme
    _name = "";

    //Point de force de l'arme
    _strenght = 0;

    //point d'endurance de l'arme
    _endurance = 0;

    //Prix de l'arme
    _price = 0;

    //Arme équipé ou pas
    _equipped = false;
//#endregion

//#region Get
    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getStrenght(){
        return this._strenght;
    }

    getEndurance(){
        return this._endurance
    }

    getPrice(){
        return this._price;
    }

    getEquipped(){
        return this._equipped;
    }

//#endregion

//#region Set
    setName(name){
        this._name = name;
    }
    setStrenght(strenght){
        this._strenght = strenght;
    }

    setEndurance(endurance){
        this._endurance = endurance;
    }

    setPrice(price){
        this._price = price;
    }

    setEquipped(equipped){
        this._equipped = equipped;
    }

//#endregion

//#region Methodes

    //Constructeur
    constructor(name, strenght, endurance){      
        this._name = name;
        this._strenght = strenght;
        this._endurance = endurance;
        this._price =  Math.floor(Math.random() * 10) + 1; //revoie un int entre 1 et 10
    }
    



//#endregion
}

export default Weapon