import { makeScene2D} from '@motion-canvas/2d';
import { Circle, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { waitFor} from '@motion-canvas/core';
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
  const dot = createRef<Circle>();
  const concentric:Circle[] = [];

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
  
  
  view.add(<Circle
    ref={dot}
    size={25}
    fill={"#ffffff"}
    y={-300}
    ></Circle>)
  
  view.add(<Circle
    size={150}
    stroke={"#ffffff"}
    lineWidth={1}
    x={-500}
    ></Circle>)
  
  view.add(<Circle
    size={150}
    fill={"#ffffff"}
    x={-170}
    ></Circle>)

  view.add(<Circle
    size={150}
    fill={"#ffffff44"}
    stroke={"ffffff"}
    lineWidth={2}
    x={170}
    ></Circle>)

  view.add(range(6).map(i => (<Circle
    ref={makeRef(concentric,i)}
    size={150-(i*25)}
    stroke={"ffffff"}
    lineWidth={1}
    x={500}
  ></Circle>)))

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
    text="Circle"
    fill={"white"}
    ></Txt>
  <Txt
    x={-170}
    y={100}
    fontSize={26}
    text="Filled Circle"
    fill={"white"}
    ></Txt>
  <Txt
    x={170}
    y={100}
    fontSize={26}
    text="Stroked Circle"
    fill={"white"}
    ></Txt>
  <Txt
    x={-500}
    y={100}
    fontSize={26}
    text="Circle"
    fill={"white"}
    ></Txt>
  <Txt
    x={500}
    y={100}
    fontSize={26}
    text="Concentric Circle"
    fill={"white"}
    ></Txt>
  </>)

  
  yield* waitFor(1);
});
