import { makeScene2D} from '@motion-canvas/2d';
import { Rect, Txt } from '@motion-canvas/2d/lib/components';
import { Direction, slideTransition, waitFor} from '@motion-canvas/core';
import { createRef, makeRef } from '@motion-canvas/core/lib/utils';
import { range } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here
  // Screen size = 1920 x 1080 
  // Max width - 960 + 960
  // Max height - 540 + 540
  view.fill('#e56b6f');
  const total_width = 1920
  const total_height = 1080
  const dot = createRef<Rect>();
  const concentric:Rect[] = [];

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
  
  
  view.add(<Rect
    ref={dot}
    height={25}
    width={25}
    fill={"#ffffff"}
    y={-300}
    ></Rect>)
  
  view.add(<Rect
    width={150}
    height={150}
    stroke={"#ffffff"}
    lineWidth={1}
    x={-500}
    ></Rect>)
  
  view.add(<Rect
    width={150}
    height={150}
    fill={"#ffffff"}
    x={-170}
    ></Rect>)

  view.add(<Rect
    width={150}
    height={150}
    fill={"#ffffff44"}
    stroke={"ffffff"}
    lineWidth={2}
    x={170}
    ></Rect>)

  view.add(range(6).map(i => (<Rect
    ref={makeRef(concentric,i)}
    width={150-(i*25)}
    height={150-(i*25)}
    stroke={"ffffff"}
    lineWidth={1}
    x={500}
  ></Rect>)))

  view.add(<>
  <Txt
    y={-250}
    fontSize={26}
    text="Dot"
    fill={"white"}
    ></Txt>
  <Txt
    x={-500}
    y={100}
    fontSize={26}
    text="Square"
    fill={"white"}
    ></Txt>
  <Txt
    x={-170}
    y={100}
    fontSize={26}
    text="Filled Square"
    fill={"white"}
    ></Txt>
  <Txt
    x={170}
    y={100}
    fontSize={26}
    text="Stroked Square"
    fill={"white"}
    ></Txt>
  <Txt
    x={500}
    y={100}
    fontSize={26}
    text="Concentric Square"
    fill={"white"}
    ></Txt>
  </>)

yield* slideTransition(Direction.Bottom,1);
  yield* waitFor(1);
});
