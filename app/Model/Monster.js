class Monster {

//#region Attributs
    
    //Point de vie
    _pv = 0;
    
    //Point experience
    _xp = 0;
    
    //Point de force
    _strenght = 0;

    //point d'endurance
    _endurance = 0;

    //Arme que porte le monstre
    _weapon = {};

    //Argent du monstre
    _gold = 0;
//#endregion

//#region Get
//#endregion

//#region Set
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
    fight(){

    }

    //Mourir
    die(){
        if(this._pv === 0){
            alert("le monstre meurt")            
        }
    }

//#endregion

}

export default Monster