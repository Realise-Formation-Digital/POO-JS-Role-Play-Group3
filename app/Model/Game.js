import Monster from './Monster.js';
import Player from './Player.js';
import Weapon from './Weapon.js';
import Pnj from './Pnj.js';


class Game {
//#region Attributs  
      
    //_player = require('./Player.js');
    
    //_weapon;

    //_monter = new Monster();

//#endregion

//#region Methodes

    //Constructeur
    constructor(){
        
        //Initialisation des objets pour le jeu

        //Weapon(name, strenght, endurance, price)
        let weapon = new Weapon("hache aiguisé",10, 5, 4);

        //Player(pv, xp, strenght, endurance, gold)
        let player = new Player(10, 0, 10, 1, 10);
        


        
        player.addWeaponInventory(weapon);

        console.log("Arme du joueur avant d'équiper : "+player.getWeapon());

        player.equipWeapon(weapon);

        //console.log(player.getWeapon());
        
        /*
        console.log("Player Pv : " + player.getPv());
        console.log("Player force : " + player.getStrenght());
        */
        

        /*
        _player.addWeaponInventory(weapon);
        _player.equipWeapon(weapon);
        */
    }

    //Game Loop

//#endregion

}

export default Game