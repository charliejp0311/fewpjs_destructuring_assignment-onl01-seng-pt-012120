const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let animals = farmAnimals.split(' ');
const [moo,neigh,baa,oink,cluck] = animals;
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const afterBoltTookOff = animals.filter(function(a){
  return a !== 'horse';
})

let Bessie = afterBoltTookOff[0];
let Dolly = afterBoltTookOff[1];
let Little = afterBoltTookOff[3];
let Babe = afterBoltTookOff[2];

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

let black_and_white = afterBoltTookOff[0];
let black = afterBoltTookOff[1];
let pink = afterBoltTookOff[2];

// 4. Use destructuring to assign appropriate variables using the color names.
let [red,orange,yellow,green,blue,indigo,violet] = colors;
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let [r, o, y, g, b, i, v] = colors;
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let indg = indigo;

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names

const {name,color,song,job,partner} = muppet;


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// let color = k_muppet.k_color;
let song_2 = k_muppet.k_album.the_muppet_movie.song_2;
let song_4 = k_muppet.k_album.the_muppet_movie.song_4;
let kermitJob = k_muppet.k_job;
let kermitPartner = k_muppet.k_partner;