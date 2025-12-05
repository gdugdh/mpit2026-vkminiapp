import { useState, useEffect } from 'react';
import {
  View,
  SplitLayout,
  SplitCol,
  ScreenSpinner,
  Tabbar,
  TabbarItem
} from '@vkontakte/vkui';
import {
  Icon28FavoriteOutline,
  Icon28MessageOutline,
  Icon28UserCircleOutline,
  Icon28Fire
} from '@vkontakte/icons';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_VIEW_PANELS } from './routes';
import { useAuth } from './contexts/AuthContext';

import { FeedPanel } from './panels/FeedPanel';
import { LikesPanel } from './panels/LikesPanel';
import { MessagesPanel } from './panels/MessagesPanel';
import { ProfilePanel } from './panels/ProfilePanel';
import { OnboardingPanel } from './panels/OnboardingPanel';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.FEED } = useActiveVkuiLocation();
  const { profile, isLoading, isAuthenticated } = useAuth();
  const routeNavigator = useRouteNavigator();
  const [popout, setPopout] = useState<React.ReactNode | null>(<ScreenSpinner />);

  useEffect(() => {
    if (!isLoading) {
      setPopout(null);

      if (isAuthenticated && profile && !profile.is_onboarding_complete) {
        routeNavigator.push(`/${DEFAULT_VIEW_PANELS.ONBOARDING}`);
      }
    }
  }, [isLoading, isAuthenticated, profile, routeNavigator]);

  const handleTabChange = (panel: string) => {
    routeNavigator.push(`/${panel}`);
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <FeedPanel id={DEFAULT_VIEW_PANELS.FEED} />
          <LikesPanel id={DEFAULT_VIEW_PANELS.LIKES} />
          <MessagesPanel id={DEFAULT_VIEW_PANELS.MESSAGES} />
          <ProfilePanel id={DEFAULT_VIEW_PANELS.PROFILE} />
          <OnboardingPanel id={DEFAULT_VIEW_PANELS.ONBOARDING} />
        </View>
        <Tabbar>
          <TabbarItem
            selected={activePanel === DEFAULT_VIEW_PANELS.FEED}
            onClick={() => handleTabChange(DEFAULT_VIEW_PANELS.FEED)}
            text="Знакомства"
          >
            <Icon28Fire />
          </TabbarItem>
          <TabbarItem
            selected={activePanel === DEFAULT_VIEW_PANELS.LIKES}
            onClick={() => handleTabChange(DEFAULT_VIEW_PANELS.LIKES)}
            text="Лайки"
          >
            <Icon28FavoriteOutline />
          </TabbarItem>
          <TabbarItem
            selected={activePanel === DEFAULT_VIEW_PANELS.MESSAGES}
            onClick={() => handleTabChange(DEFAULT_VIEW_PANELS.MESSAGES)}
            text="Сообщения"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem
            selected={activePanel === DEFAULT_VIEW_PANELS.PROFILE}
            onClick={() => handleTabChange(DEFAULT_VIEW_PANELS.PROFILE)}
            text="Профиль"
          >
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </SplitCol>
    </SplitLayout>
  );
};
