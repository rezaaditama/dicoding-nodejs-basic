const Tiger = require('./Tiger'); //To Do 3
const Wolf = require('./Wolf'); // To Do 4

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.growl();
    return;
  }

  console.log('Tiger and Wolf have same strength');
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
