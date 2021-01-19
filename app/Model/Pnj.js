class Pnj {
//#region Attributs  
    //Point experience
    _xp = 0;

    //arme que porte le joueur
    _weapon = {};   
//#endregion

//#region Get
    getXp(){
        return this._xp;
    }

    getWeapon(){
        return this._weapon;
    }

//#endregion

//#region Set
    setXp(xp){
        this._xp = xp;
    }

    setWeapon(weapon){
        this._weapon = weapon;
    }
//#endregion

//#region Methodes

    //Constructeur
    constructor(xp, weapon){
        this._xp = xp;
        this._weapon = weapon;
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