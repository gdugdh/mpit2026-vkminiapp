import { AdaptivityProps, ViewHeight, ViewWidth } from '@vkontakte/vkui';

interface VKBridgeAdaptivity {
  viewportWidth: number;
  viewportHeight: number;
}

export function transformVKBridgeAdaptivity({
  viewportWidth,
  viewportHeight,
}: VKBridgeAdaptivity): AdaptivityProps {
  let viewWidth: typeof ViewWidth[keyof typeof ViewWidth];
  if (viewportWidth >= 1280) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (viewportWidth >= 768) {
    viewWidth = ViewWidth.TABLET;
  } else {
    viewWidth = ViewWidth.MOBILE;
  }

  let viewHeight: typeof ViewHeight[keyof typeof ViewHeight];
  if (viewportHeight >= 720) {
    viewHeight = ViewHeight.MEDIUM;
  } else {
    viewHeight = ViewHeight.SMALL;
  }

  return {
    viewWidth,
    viewHeight,
    sizeX: viewWidth >= ViewWidth.TABLET ? 'regular' : 'compact',
    sizeY: viewHeight >= ViewHeight.MEDIUM ? 'regular' : 'compact',
  };
}
