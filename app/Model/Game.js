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
        let weapon2 = new Weapon("épée rouillé",1,1,1);
        let weapon3 = new Weapon("dague en bois",1,1,1);

        //Player(pv, xp, strenght, endurance, gold)
        let player = new Player(10, 0, 10, 1, 10);
        player.addWeaponInventory(weapon);
        player.addWeaponInventory(weapon2);
        player.addWeaponInventory(weapon3);

        let monster = new Monster("Philipe");
        monster.addWeapon(weapon3);

        let pnj = new Pnj("Joe le pnj");

        console.log("Pnj name: ", pnj.getName());

        console.log("Pnj xp: ", pnj.getXp());
        console.log("Pnj force: ", pnj.getStrenght());
        console.log("Pnj endurance: ", pnj.getEndurance());

        /*
        console.log('Monstre nom : ', monster.getName());
        console.log('Monstre or : ', monster.getGold());
        
        console.log('Joueur or : ', player.getGold());
        
        monster.setPv(0);
        console.log('Monstre meurt, pv : ',monster.getPv());
        //monster.die();
        
        player.pickUpGold(monster);
        
        console.log('Joueur or : ', player.getGold());
        */
        




        

    }

    //Game Loop

//#endregion

}

export default Game