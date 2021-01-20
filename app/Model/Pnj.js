class Pnj {
//#region Attributs  
    
    //Nom du pnj
    _name = "";

    //Point experience
    _xp = 0;

    //Point de force
    _strenght = 0;

    //Point d'endurance
    _endurance = 0;

    //arme que porte le pnj
    _weapon;   

    _inventory = [];
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

    getInventory(){
        return this._inventory;
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

    setInventory(inventory){
        this._inventory = inventory;
    }
//#endregion

//#region Methodes

    //Constructeur
    constructor(name){
       this._name = name;
       this._xp = this.nbRandom(50, 0);
       this._strenght = this.nbRandom(this._xp, 1);
       this._endurance = this.nbRandom(this._xp, 1);
    }

    nbRandom(max, min){
        return Math.ceil((Math.random() * max) + min)
    }

    //Ajoute une arme dans son inventair
    addWeaponInventory(objWeapon) {
        this._inventory.push(objWeapon);
    }

    //Eleve une arme dans l'inventair
    deleteWeaponInventory(objWeapon) {
        //Map compart l'objet arme avec celui present dans le tableau '_Inventory' de la classe
        this._inventory.map((value, index) => {
            if (value === objWeapon) {
                this._inventory.splice(index, 1); //splice(index, nbElement) enleve un item du tableaux
            }
        });  
    }

    //Acheter une arme
    buyWeapon(objWeapon){
        //let priceWeapon = objWeapon.getPrice() / 2;
        this.addWeaponInventory(objWeapon);
    }

    //Vendre une arme de son inventair
    sellWeapon(objWeapon) {
        //suprime l'arme de l'inventaire
        this.deleteWeaponInventory(objWeapon);
    }
    

//#endregion
}

export default Pnj