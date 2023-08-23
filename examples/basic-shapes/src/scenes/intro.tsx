import { makeScene2D} from '@motion-canvas/2d';
import { Circle, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { Direction, slideTransition, waitFor} from '@motion-canvas/core';
import { createRef, makeRef } from '@motion-canvas/core/lib/utils';
import { range } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here
  // Screen size = 1920 x 1080 
  // Max width - 960 + 960
  // Max height - 540 + 540
  view.fill('#212936');
  const total_width = 1920
  const total_height = 1080
  const intro = createRef<Txt>();

  view.add(<Rect
    width={total_width-20}
    height={total_height-20}
    lineWidth={1}
    stroke={"white"}></Rect>)
  view.add(<Rect
    width={total_width-40}
    height={total_height-40}
    lineWidth={1}
    lineDash={[30,30]}
    stroke={"white"}></Rect>)

  view.add(<Txt
    ref={intro}
    fontSize={96}
    text="Basic Shapes"
    fill={"white"}
    ></Txt>)

  
  yield* waitFor(1);
  yield* intro().opacity(0,1);
  
});
