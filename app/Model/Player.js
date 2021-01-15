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
    _weapon = {};

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
    constructor(pv, xp, strenght, endurance, weapon, gold){
        this._pv = pv;
        this._xp = xp;
        this._strenght = strenght;
        this_endurance = endurance;
        this._weapon = weapon;
        this._gold = gold;
    }

    //Combattre
    Fight(){
        
    }

    //Fuir
    Escape(){

    }

    //Mourir
    Die(){

    }

    //Equiper une arme
    EquipWeapon(){

    }

    //Enlever une arme
    RemoveWeapon(){

    }
    
    //Acheter une arme
    BuyWeapon(){

    }

    //Vendre une arme desequipe
    SellWeapon(){

    }
//#endregion

}