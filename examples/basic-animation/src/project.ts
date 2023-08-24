import {makeProject} from '@motion-canvas/core';

import transform_motion from './scenes/transform_motion?scene';
import intro from './scenes/intro?scene';
import rotational_motion from './scenes/rotational_motion?scene';
import scale_motion from './scenes/scale_motion?scene';

export default makeProject({
  scenes: [intro,transform_motion,rotational_motion,scale_motion],
});
