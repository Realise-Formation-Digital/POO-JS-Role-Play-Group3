//import Game from "./Game";

class Player {
    
//#region Attributs
    
    //Point de vie
    _pv = 0;
    
    //Point experience
    _xp = 0;
    
    //Point de force
    _strenght = 0;

    //point d'endurance
    _endurance = 0;

    //arme que porte le joueur
    _weapon = null;
    
    _inventory = [];
    
    //Argent du joueur
    _gold = 0;

    //Niveau du joueur
    //_level = 0;

//#endregion

//#region Get

    //Accesseur Get
    getPv(){
        return this._pv;
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

    getGold(){
        return this._gold;
    }

//#endregion

//#region Set
    
    setPv(pv){
        this._pv = pv;
    }

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

    setGold(gold){
        this._gold = gold;
    }
//#endregion
 
//#region Methodes

    //Constructeur
    constructor(pv, xp, strenght, endurance, gold) {
        this._pv = pv;
        this._xp = xp;
        this._strenght = strenght;
        this._endurance = endurance;
        this._gold = gold;
    }

    //Combattre
    fight(objMonster){
        //objMonster
    }

    //Fuir
    escape(){
        this._xp -= 1;
    }

    //Mourir
    die(){
        if(this._pv === 0){
            alert("Vous êtes mort gros nazzzz !!!! \n" + "Pv : " + this._pv);
        }
    }

    //Equiper une arme
    equipWeapon(objWeapon){
        if(objWeapon.getEquipped !== false){
            //Ajoute l'arme a l'etat équipé
            objWeapon.setEquipped(true);
            
            //Ajoute les points de force de l'arme au joueur
            this._strenght += objWeapon.getStrenght(); 

            //Ajoute les point d'endurance de l'arme au joueur
            this._endurance += objWeapon.getEndurance();
        }else{
            alert("L'arme est deja équipé par le joueur !!!");
        }
    }

    //Desequiper une arme
    unquipWeapon(objWeapon){
        //Si l'arme n'est pas équipé par le joueur
        if(objWeapon.getEquipped !== true){
            //Modifie l'etat de l'arme sur déséquipé
            objWeapon.setEquipped(false);

            //Ajoute l'arme dans l'inventaire du joueur
            this.addWeaponInventory(objWeapon);
    
            //Eleve les point de force de l'arme au joueur
            this._strenght -= objWeapon.getStrenght();

            //Eleve les point d'endurance de l'arme au joueur
            this._endurance -= objWeapon.getEndurance();
        }else{
            alert("L'arme n'est pas équipé par le joueur !!!");
        }
    }

    //Ajoute une arme dans son inventair
    addWeaponInventory(objWeapon) {
        this._inventory.push(objWeapon);
    }

    deleteWeaponInventory(objWeapon) {
        //Map compart l'objet arme avec celui present dans le tableau '_Inventory' de la classe
        this._inventory.map((value, index) => {
            if (value === objWeapon) {
                this._inventory.splice(index, 1); //splice(index, nbElement) enleve un item du tableaux
            }
        });  
    }
    
    //Acheter une arme
    buyWeapon(objWeapon) {
       let priceWeapon = objWeapon.getPrice();
       if(this._gold >= priceWeapon){
            //Eleve le prix de l'arme au joueur
            this._gold -= priceWeapon;
            //Ajoute la nouvelle arme dans l'inventair du joueur
            this.addWeaponInventory(objWeapon);
       }
    }

    //Vendre une arme
    sellWeapon(objWeapon) {
        //Si l'arme est déséquipé
        if(objWeapon.getEquipped() === false){
            //let priceWeapon = Math.ceil(objWeapon.getPrice() / 2); //Math.ceil arrondis vers le hault pour qu'il n'y ai pas de reste apres la division
            //Ajoute le prix de l'arme a la bourse du joueur
            let priceWeapon = objWeapon.getPrice() / 2;
            this._gold += priceWeapon;
    
            //suprime l'arme de l'inventaire
            this.deleteWeaponInventory(objWeapon);
        }
    }

    pickUpGold(objMonster){
        let gold = this._gold += objMonster.getGold();
        this._gold = gold; 
    }
//#endregion

}

export default Player