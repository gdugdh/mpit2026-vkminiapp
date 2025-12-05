import { Adaptivity } from '@vkontakte/vk-bridge';
import { AdaptivityProps, ViewHeight, ViewWidth } from '@vkontakte/vkui';

export function transformVKBridgeAdaptivity({
  viewportWidth,
  viewportHeight,
}: Adaptivity): AdaptivityProps {
  let viewWidth: ViewWidth;
  if (viewportWidth >= 1280) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (viewportWidth >= 768) {
    viewWidth = ViewWidth.TABLET;
  } else {
    viewWidth = ViewWidth.MOBILE;
  }

  let viewHeight: ViewHeight;
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
    hasMouse: viewportWidth >= 1280,
  };
}
