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
        let weapon = new Weapon(0,"hache aiguisé",10, 5, 4);
        
        let weapon2 = new Weapon(1,"épée rouillé",1,1,1);
        let weapon3 = new Weapon(2,"dague en bois",1,1,1);

        //Player(pv, xp, strenght, endurance, gold)
        let player = new Player(10, 0, 10, 1, 10);

        player.addWeaponInventory(weapon);
        player.addWeaponInventory(weapon2);
        player.addWeaponInventory(weapon3);

        player.sellWeapon(weapon);

        // player.sellWeapon(weapon2);
        // player.sellWeapon(weapon3);
        
        //console.log("inventair du joueur: "+player.getInventory());
        
        //console.log("Gold player : " + player.getGold());


        /*
        console.log("Arme du joueur avant d'équiper : "+player.getWeapon());

        player.equipWeapon(weapon);
        */

        //console.log(player.getWeapon());
        
    }

    //Game Loop

//#endregion

}

export default Game