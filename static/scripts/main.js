$(document).ready(() => {
  console.log('jQuery up and running!');
  
  Crafty.init();
  
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
  .attr({x: 0, y: 595, w: 800, h: 5})
  .color('brown');
  
  // Player Entity
  const player = Crafty.e('2D, DOM, Fourway, Collision, Color, player')
    .attr({x: 10, y: 10, h: 30, w: 30})
    .color('blue')
    .fourway(250)
    .collision()
    .onHit('solid', (e) => {
      console.log('hit a wall', bottomWall._y);
      if (player._x <= leftWall._x) {
        player.x = leftWall._x + 5;
      }
      if (player._x >= rightWall._x) {
        player.x = rightWall._x - 10;
      }
      if (player._y <= topWall._y) {
        player.y = topWall._y + 5;
      }
      if (player._y >= bottomWall._y) {
        player.y = bottomWall._y - 5;
      }
    });
    
  // Enemy Entity
  const enemy = Crafty.e('2D, DOM, Collision, Battle, Color')
  .attr({x: 400, y: 300, h: 30, w: 30})
  .color('red')
  .collision();
  
  
// Closes jQuery    
});