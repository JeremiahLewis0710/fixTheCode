// You will use this Object for the answers
// DO NOT CHANGE THIS SECTION
var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1 }
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            {
                name: "Bow", arrow: [
                    { name: "+1 Arrows of Punishing", damage: 40, qty: 3 },
                    { name: "Wooden Arrows", damage: 10, qty: 4 }
                ]
            }
        ]
    }
}

// MAKE CHANGES AFTER THIS

// This function lists all characters in the party
function listCharacters() {
    console.log("Characters:")
    for (var i in adventuringParty) {
        console.log(" * " + adventuringParty[i].name);
    }
};

// This function should list all weapons for the character
function listWeapons(character) {
    console.log("Listing weapons for " + character.name + ":");
    for(i in character.weapons) {
        var weapon = character.weapons[i].name;
        console.log(" * " + weapon);
    }
};
//Alternate Way to Do second function
// function listWeaponsWizard() {
//     console.log("Listing weapons for " + adventuringParty.wizard.name + ":");
//     for(i in adventuringParty.wizard.weapons) {
//         var weapon = adventuringParty.wizard.weapons[i].name;
//         console.log(" * " + weapon);
//     }
// }

// function listWeaponsWarrior() {
//     console.log("Listing weapons for " + adventuringParty.warrior.name + ":");
//     for(i in adventuringParty.warrior.weapons) {
//         var weapon = adventuringParty.warrior.weapons[i].name;
//         console.log(" * " + weapon);
//     }
// }

// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(character, weaponName) {
    console.log(character +" attacks with his " + weaponName);
    var maxdamage = 0;
    if(weaponName == "Axe"){
        maxdamage = adventuringParty.warrior.weapons[0].damage;
        var possibleDamage =Math.round( Math.random() * maxdamage );
    }
    else if(weaponName == "Staff"){
        maxdamage = adventuringParty.wizard.weapons[0].damage;
        var possibleDamage =Math.round( Math.random() * maxdamage );
    };
   
    console.log("He hits for "+ possibleDamage+ " damage" );
}

// Run the functions
listCharacters(adventuringParty);
listWeapons(adventuringParty.warrior);
listWeapons(adventuringParty.wizard);
// listWeaponsWizard();
// listWeaponsWarrior();
weaponAttack("Conan", "Axe");
weaponAttack("Gandalf", "Staff");



/*
EXAMPLE OUTPUT:


Characters:                                                                                                                                                                                                  
 * Gandalf                                                                                                                                                                                                   
 * Conan                                                                                                                                                                                                     
Listing weapons for Gandalf:                                                                                                                                                                                 
 * Staff                                                                                                                                                                                                     
 * Dagger                                                                                                                                                                                                    
Listing weapons for Conan:                                                                                                                                                                                   
 * Axe                                                                                                                                                                                                       
 * Bow                                                                                                                                                                                                       
Conan attacks with his axe                                                                                                                                                                                   
He hits for 17 damage                                                                                                                                                                                        
Gandalf attacks with his STAFF                                                                                                                                                                               
He hits for 3 damage         
 */
