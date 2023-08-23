import { Polygon, makeScene2D} from '@motion-canvas/2d';
import { Rect, Txt } from '@motion-canvas/2d/lib/components';
import { Direction, slideTransition, waitFor} from '@motion-canvas/core';
import { createRef, makeRef } from '@motion-canvas/core/lib/utils';
import { range } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here
  // Screen size = 1920 x 1080 
  // Max width - 960 + 960
  // Max height - 540 + 540
  view.fill('#dc7841');
  const total_width = 1920
  const total_height = 1080
  const pentagon = createRef<Polygon>();
  const concentric:Polygon[] = [];

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
  
  
  view.add(<Polygon
    ref={pentagon}
    sides={5}
    size={50}
    y={-300}
    fill={'#ffffff'}
  />)
  
  view.add(<Polygon
    stroke={"#ffffff"}
    lineWidth={1}
    sides={6}
    size={150}
    x={-500}
    ></Polygon>)
  
  view.add(<Polygon
    sides={7}
    size={150}
    fill={"#ffffff"}
    x={-170}
    ></Polygon>)

  view.add(<Polygon
    sides={8}
    size={150}
    fill={"#ffffff44"}
    stroke={"ffffff"}
    lineWidth={2}
    x={170}
    ></Polygon>)

  view.add(range(6).map(i => (<Polygon
    sides={9}
    size={150-(i*25)}
    ref={makeRef(concentric,i)}
    stroke={"ffffff"}
    lineWidth={1}
    x={500}
  ></Polygon>)))

  view.add(<>
  <Txt
    y={-250}
    fontSize={26}
    text="Pentagon"
    fill={"white"}
    ></Txt>
  <Txt
    x={-500}
    y={100}
    fontSize={26}
    text="Hexagon"
    fill={"white"}
    ></Txt>
  <Txt
    x={-170}
    y={100}
    fontSize={26}
    text="Filled Heptagon"
    fill={"white"}
    ></Txt>
  <Txt
    x={170}
    y={100}
    fontSize={26}
    text="Stroked Octagon"
    fill={"white"}
    ></Txt>
  <Txt
    x={500}
    y={100}
    fontSize={26}
    text="Concentric Nonagon"
    fill={"white"}
    ></Txt>
  </>)

yield* slideTransition(Direction.Right,1);
  yield* waitFor(1);
});
