import { makeScene2D} from '@motion-canvas/2d';
import { Rect, Txt, Line } from '@motion-canvas/2d/lib/components';
import { Direction, slideTransition, waitFor} from '@motion-canvas/core';
import { createRef, makeRef } from '@motion-canvas/core/lib/utils';
import { range } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here
  // Screen size = 1920 x 1080 
  // Max width - 960 + 960
  // Max height - 540 + 540
  view.fill('#6d597a');
  const total_width = 1920
  const total_height = 1080
  const liney = createRef<Line>();
  const parallels:Line[] = [];

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
  
  
  view.add(<Line
    ref={liney}
    points={[
        [-500, -100],
        [-100, -100],
      ]}
      end={1}
    stroke={"white"}
    lineWidth={5}
    ></Line>)

  
  view.add(range(9).map(i => (<Line
    ref={makeRef(parallels,i)}
    points={[
        [-500, (i*50)],
        [-100, (i*50)],
      ]}
      end={1}
    stroke={"white"}
    lineWidth={5*i}
    ></Line>)))

    view.add(<Line
        ref={liney}
        points={[
            [100, -100],
            [500, -100],
          ]}
          end={1}
        stroke={"white"}
        lineWidth={5}
        lineDash={[30,5]}
        ></Line>)

  view.add(range(9).map(i => (<Line
    ref={makeRef(parallels,i)}
    points={[
        [100, i*50],
        [500, i*50],
      ]}
      end={1}
    stroke={"white"}
    lineWidth={5*i}
    lineDash={[30*i,5*i]}
    ></Line>)))

  view.add(<>
  <Txt
    y={-120}
    x={-300}
    fontSize={36}
    text="Line"
    fill={"white"}
    ></Txt>
  <Txt
    y={-120}
    x={300}
    fontSize={36}
    text="Dashed Line"
    fill={"white"}
    ></Txt>
  </>)


  yield* slideTransition(Direction.Left,1);
  yield* waitFor(1);
});
