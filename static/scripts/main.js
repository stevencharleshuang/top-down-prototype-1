$(document).ready(() => {
  console.log('jQuery up and running!');
  
  Crafty.init();
  let contact = false;

  // Helper Functions //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // Entity Declarations ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  
  // Gameboard Entity
  const gameBoard = Crafty.e('2D, DOM, Color')
  .attr({x: 0, y: 0, h: 600, w: 800})
  .color('white');
  
  // Walls
  const leftWall = Crafty.e("2D, DOM, Color, solid, left")
  .attr({x: 0, y: 0, w: 5, h: 600})
  .color('brown');
  
  const rightWall = Crafty.e("2D, DOM, Color, solid, right")
  .attr({x: 795, y: 0, w: 5, h: 600})
  .color('brown');
  
  const topWall = Crafty.e("2D, DOM, Color, solid, top")
  .attr({x: 0, y: 0, w: 800, h: 5})
  .color('brown');
  
  const bottomWall = Crafty.e("2D, DOM, Color, solid, bottom")
  .attr({x: 0, y: 570, w: 800, h: 5})
  .color('brown');
  
  // Player Entity
  const player = Crafty.e('2D, DOM, Fourway, Collision, Color, player')
    .attr({x: 10, y: 10, h: 30, w: 30})
    .color('blue')
    .fourway(250)
    .collision()
    // Prevent player from clipping through border walls
    .onHit('solid', () => {
      // console.log('collided with a wall');
      if (player._x <= leftWall._x) player.x = leftWall._x + 5;
      if (player._x + 35 >= rightWall._x) player.x = rightWall._x - 30;
      if (player._y <= topWall._y) player.y = topWall._y + 5;
      if (player._y + 35 >= bottomWall._y) player.y = bottomWall._y - 30;
    })
    // Prevent player from clipping through enemy div
    .onHit('enemy', 
      // On Collision
      () => {
        // console.log('collided with the enemy');
        contact = true;
        // console.log('contact')
        if (player._x <= enemy._x) player.x = enemy._x - 25;
        if (player._x >= enemy._x) player.x = enemy._x + 25; 
        if (player._y <= enemy._y) player.y = enemy._y - 25;
        if (player._y >= enemy._y) player.y = enemy._y + 25;
      }, 
      // Off Collision
      () => {
        contact = false;
        // console.log('no contact');
      })
    // Player Attack Control
    .bind('KeyDown', (e) => {
      // 'E' Key attack binding
      if (e.key === Crafty.keys.E && contact === true) {
        // console.log('Player attacked!', player);
        player.color('green');
      }
    })
    .bind('KeyUp', () => {
      player.color('blue');
    });
    
  // Enemy Entity
  const enemy = Crafty.e('2D, DOM, Collision, enemy, Color')
  .attr({x: 400, y: 300, h: 30, w: 30})
  .color('red')
  .collision()
  // Prevent enemy from clipping through border walls
  .onHit('solid', () => {
    if (enemy._x <= leftWall._x) enemy.x = leftWall._x + 5;
    if (enemy._x + 35 >= rightWall._x) enemy.x = rightWall._x - 30;
    if (enemy._y <= topWall._y) enemy.y = topWall._y + 5;
    if (enemy._y + 35 >= bottomWall._y) enemy.y = bottomWall._y - 30;
  });

  // Text Entities
  let playerHP = Crafty.e('2D, DOM, Text')
    .attr({ x: 100, y: 100 })
    .text('Player HP: ')
    .textFont({ size: '20px', weight: '400', family: 'Press Start 2P' })
    .textColor('#000');

  // console.log({ player, });

// Closes jQuery    
});