import {makeScene2D} from '@motion-canvas/2d';
import {Img, Rect, RectProps, Txt} from '@motion-canvas/2d/lib/components';
import {all, waitUntil} from '@motion-canvas/core/lib/flow';
import {Container} from '../components';
import {BlackLabel, Colors} from '../styles';
import {createRef, makeRef, makeRefs} from '@motion-canvas/core/lib/utils';
import layers from '../images/icons/layers.svg';
import flare from '../images/icons/flare.svg';
import desktop from '../images/icons/desktop.svg';
import functions from '../images/icons/functions.svg';
import {BBox} from '@motion-canvas/core/lib/types';
import {zoomOutTransition} from '@motion-canvas/core/lib/transitions';
import videoMock from '../videos/outro.png';

export default makeScene2D(function* (view) {
  view.fill('#141414');
  const renderer = createRef<Rect>();
  const pass = makeRefs<typeof Pass>();

  function Pass({
    name,
    src,
    refs,
    ref,
    ...props
  }: {
    name: string;
    src: string;
    refs?: {
      value: Rect;
      label: Txt;
    };
  } & RectProps) {
    return (
      <Rect
        layout
        fill={Colors.surfaceLight}
        radius={8}
        ref={refs ? makeRef(refs, 'value') : ref}
        {...props}
      >
        <Img opacity={0.87} width={40} height={40} margin={20} src={src} />
        <Txt
          ref={refs ? makeRef(refs, 'label') : null}
          paddingRight={40}
          {...BlackLabel}
          lineHeight={80}
          cache
        >
          {name}
        </Txt>
      </Rect>
    );
  }

  yield view.add(
    <>
       <Img width={'100%'} src={videoMock} />
       <Rect ref={renderer} layout clip>
         <Container label="PIXEL ART RENDERER">
           <Pass name="Simulation Pass" src={functions} />
           <Pass refs={pass} name="Parallax Pass" src={layers} />
           <Pass name="Post Effects Pass" src={flare} />
           <Pass name="HUD Pass" src={desktop} />
         </Container>
       </Rect>
    </>,
  );

  yield* all(
    pass.label.opacity(0).opacity(1, 0.6),
    zoomOutTransition(
      new BBox(
        pass.value.position.x(),
        pass.value.position.y(),
        (pass.value.height() / 9) * 16,
        pass.value.height(),
      ),
    ),
  );

  yield* waitUntil('hide');
  yield* renderer().height(0, 0.6);

  yield* waitUntil('next');
});
