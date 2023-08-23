import {makeProject} from '@motion-canvas/core';

import circles from './scenes/circles?scene';
import squares from './scenes/squares?scene';
import rectangles from './scenes/rectangles?scene';
import lines from './scenes/lines?scene';
import polygons from './scenes/polygons?scene';
import intro from './scenes/intro?scene';

export default makeProject({
  scenes: [intro, circles, lines, squares, rectangles, polygons],
});
