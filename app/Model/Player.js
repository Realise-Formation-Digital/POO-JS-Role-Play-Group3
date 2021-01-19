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
    fight(){
        
    }

    //Fuir
    escape(){
        this._xp - 1;
    }

    //Mourir
    die(){
        if(this._pv === 0){
            alert("Vous êtes mort gros nazzzz !!!! \n" + "Pv : " + this._pv);
        }
    }

    //Equiper une arme
    equipWeapon(objWeapon){
        //Ajoute l'arme au joueur
        this._weapon = objWeapon;
        
        //Ajoute les points de force de l'arme au joueur
        this._strenght += objWeapon.getStrenght(); 

        //Ajoute les point d'endurance de l'arme au joueur
        this._endurance += objWeapon.getEndurance();
     
    }

    //Enlever une arme
    removeWeapon(objWeapon){
        //Eleve les point de force de l'arme au joueur
        this._strenght - objWeapon.getStrenght;

        //Eleve les point d'endurance de l'arme au joueur
        this._endurance - objWeapon.getEndurance;
    }

    //Ajoute une arme dans son inventair
    addWeaponInventory(objWeapon) {
        this._inventory.push(objWeapon);
    }
    
    //Acheter une arme
    buyWeapon() {

    }

    //Vendre une arme desequipe
    sellWeapon(){

    }
//#endregion

}

export default Player