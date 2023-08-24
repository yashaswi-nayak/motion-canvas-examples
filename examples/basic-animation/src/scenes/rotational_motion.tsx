import {Circle, Line, Polygon, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  view.fill('#ffb400');
  const total_width = 1920
  const total_height = 1080
  // Create your animations here
  const line = createRef<Line>();
  const line_small = createRef<Line>();
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
          [-150, 0],
          [150,  0],
        ]}
        end={1}
      stroke={"white"}
      lineWidth={5}
    ></Line>
    <Line
    ref={line_small}
    points={[
        [-250, 0],
        [-200,  0],
      ]}
      end={1}
    stroke={"white"}
    lineWidth={5}
    ></Line>
    <Rect
    ref={rect}
    width={300}
    height={100}
    x={-550}
    y={-200}
    fill={"white"}
    ></Rect>
    <Rect
    ref={square}
    width={100}
    height={100}
    x={550}
    y={-200}
    fill={"white"}
    ></Rect>
    <Circle
    ref={circle}
    size={100}
    x={-550}
    y={200}
    stroke={"white"}
    lineWidth={3}
    lineDash={[10,5]}
    ></Circle>
    <Polygon
    ref={poly}
    sides={6}
    size={100}
    x={550}
    y={200}
    fill={"white"}
    >
    </Polygon>
    <Txt
    ref={title}
    fontSize={72}
    text="Rotational Motion"
    y={350}
    opacity={0}
    fill={"white"}
    ></Txt>
  </>)

  yield* waitFor(0.5);
  // Rotate Clockwise
  yield* all(line().rotation(360,1),
             line_small().rotation(360,1),
             rect().rotation(360,1),
             square().rotation(360,1),
             circle().rotation(360,1),
             poly().rotation(360,1)
             ); 

  yield* title().opacity(1,0.5).to(0,0.5);
  // Roate Counter-clockwise
  yield* all(line().rotation(0,1),
             line_small().rotation(0,1),
             rect().rotation(0,1),
             square().rotation(0,1),
             circle().rotation(0,1),
             poly().rotation(0,1)
             ); 
});
