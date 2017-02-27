import * as angular from 'angular';

export default angular.module('app.brainEaters.constants', [])
  .constant('UNIT', 50)
  .constant('IMAGES', {
    player: 'client/assets/player.png'
  })
  .constant('LEVELS', [
    {
      walls: [
        ['client/assets/bricks.jpg', 50, 50 * 2],
        ['client/assets/bricks.jpg', 50, 50 * 3],
        ['client/assets/bricks.jpg', 50, 50 * 4],
        ['client/assets/bricks.jpg', 50, 50 * 5],
        ['client/assets/bricks.jpg', 50, 50 * 6],
        ['client/assets/bricks.jpg', 50, 50 * 7],
        ['client/assets/bricks.jpg', 50, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 2, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 3, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 4, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 5, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 6, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 7, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 8],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 7],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 6],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 5],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 4],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 3],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 2],
        ['client/assets/bricks.jpg', 50 * 8, 50 * 1],
        ['client/assets/bricks.jpg', 50 * 8, 50],
        ['client/assets/bricks.jpg', 50 * 8, 0]
      ]
    }
  ])
  .name;
