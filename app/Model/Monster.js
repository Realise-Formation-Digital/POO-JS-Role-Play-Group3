class Monster {

//#region Attributs
    
    _name = "";

    //Point de vie
    _pv = 100;
    
    //Point experience
    _xp = this.nbRandom(50, 0);
    
    //Point de force
    _strenght = this.nbRandom(this._xp, 1);

    //point d'endurance
    //_endurance = Math.ceil((Math.random() * this._xp) + 1);
    _endurance = this.nbRandom(this._xp, 1);

    //Arme que porte le monstre
    _weapon;

    //Argent du monstre
    _gold = this.nbRandom(20, 0); //Math.ceil(objWeapon.getPrice() / 2)

//#endregion

//#region Get
    getName(){
        return this._name;
    }

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
    setName(name){
        this._name = name;
    }

    setPv(pv){
        this._pv = pv;
    }

    setStrenght(strenght){
        this._strenght = strenght;
    }

    setStrenght(endurance){
        this._strenght = endurance;
    }

    /*
    setWeapon(weapon){
        //Ajoute l'arme au monstre
        this._weapon = weapon;
        //Ajoute la force de l'arme au monstre
        this._strenght += weapon.getStrenght();
        //Ajoute l'endurance de l'arme au monstre
        this._endurance += weapon.getEndurance();
        
    }
    */

//#endregion

//#region Methodes

    //Constructeur
    constructor(name){
        this._name = name;
    }

    nbRandom(max, min){
        return Math.ceil((Math.random() * max) + min)
    }

    //Combattre
    fight(){

    }

    //Mourir
    die(){
        if(this._pv === 0){

            //le monstre l'ache l'Or qu'il possede au joueur


            alert("le monstre meurt")          
        }
    }

    addWeapon(weapon){
        //Ajoute l'arme au monstre
        this._weapon = weapon;
        //Ajoute la force de l'arme au monstre
        this._strenght += weapon.getStrenght();
        //Ajoute l'endurance de l'arme au monstre
        this._endurance += weapon.getEndurance();
    }

    

//#endregion

}

export default Monster