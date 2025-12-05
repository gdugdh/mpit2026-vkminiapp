import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';
import { FeedScreen } from '../components/feed-screen';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_VIEW_PANELS } from '../routes';

export interface FeedPanelProps extends NavIdProps {}

export const FeedPanel: FC<FeedPanelProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  const handleOpenProfile = () => {
    routeNavigator.push(`/${DEFAULT_VIEW_PANELS.PROFILE}`);
  };

  return (
    <Panel id={id}>
      <FeedScreen onOpenProfile={handleOpenProfile} />
    </Panel>
  );
};
