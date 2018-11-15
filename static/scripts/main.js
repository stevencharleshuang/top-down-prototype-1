$(document).ready(() => {
  console.log('jQuery up and running!');
  Crafty.init();

  const gameBoard = Crafty.e('2D, Canvas, Color')
    .attr({x: 0, y: 0, h: 600, w: 800})
    .color('white');

  const player = Crafty.e('2D, Canvas, Fourway, Color')
    .attr({x: 10, y: 10, h: 30, w: 30})
    .color('blue')
    .fourway(100);

  const enemy = Crafty.e('2D, Canvas, Color')
    .attr({x: 400, y: 300, h: 30, w: 30})
    .color('red')

// Closes jQuery    
});