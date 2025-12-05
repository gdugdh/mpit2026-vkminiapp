import { useState, useEffect } from 'react';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
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
      </SplitCol>
    </SplitLayout>
  );
};
