import {Circle, Line, Polygon, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  view.fill('#f6511d');
  const total_width = 1920
  const total_height = 1080
  // Create your animations here
  const line = createRef<Line>();
  const circle = createRef<Circle>();
  const rect = createRef<Rect>();
  const square = createRef<Rect>();
  const poly = createRef<Polygon>();
  const title = createRef<Txt>();

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

  view.add(<>
    <Line
      ref={line}
      points={[
          [-800, -400],
          [-500, -400],
        ]}
        end={1}
      stroke={"white"}
      lineWidth={5}
    ></Line>
    <Rect
    ref={rect}
    width={300}
    height={100}
    x={-650}
    y={-200}
    fill={"white"}
    ></Rect>
    <Rect
    ref={square}
    width={100}
    height={100}
    x={-750}
    y={0}
    fill={"white"}
    ></Rect>
    <Circle
    ref={circle}
    size={100}
    x={-750}
    y={200}
    fill={"white"}
    ></Circle>
    <Polygon
    ref={poly}
    sides={6}
    size={100}
    x={-750}
    y={400}
    fill={"white"}
    >
    </Polygon>
    <Txt
    ref={title}
    fontSize={72}
    text="Transform Motion"
    x={-350}
    opacity={0}
    fill={"white"}
    ></Txt>
  </>)

  yield* waitFor(0.5);
  // Move to Right
  yield* all(line().position.x(0,0).to(1300,1),
             rect().position.x(-650,0).to(650,1),
             square().position.x(-750,0).to(750,1),
             circle().position.x(-750,0).to(750,1),
             poly().position.x(-750,0).to(750,1)
             ); 
  yield* title().opacity(1,0.5).to(0,0.5);
  // Move Back
  yield* all(line().position.x(1300,0).to(0,1),
  rect().position.x(650,0).to(-650,1),
  square().position.x(750,0).to(-750,1),
  circle().position.x(750,0).to(-750,1),
  poly().position.x(750,0).to(-750,1)
  ); 
});
