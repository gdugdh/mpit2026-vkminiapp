import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  FEED: 'feed',
  LIKES: 'likes',
  MESSAGES: 'messages',
  PROFILE: 'profile',
  ONBOARDING: 'onboarding',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.FEED, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.LIKES, `/${DEFAULT_VIEW_PANELS.LIKES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MESSAGES, `/${DEFAULT_VIEW_PANELS.MESSAGES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PROFILE, `/${DEFAULT_VIEW_PANELS.PROFILE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.ONBOARDING, `/${DEFAULT_VIEW_PANELS.ONBOARDING}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
