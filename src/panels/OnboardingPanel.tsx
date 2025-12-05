import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';
import { OnboardingFlow } from '../components/onboarding-flow';
import { useAuth } from '../contexts/AuthContext';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { profileAPI } from '../services/api';

export interface OnboardingPanelProps extends NavIdProps {}

export const OnboardingPanel: FC<OnboardingPanelProps> = ({ id }) => {
  const { refreshProfile, user } = useAuth();
  const routeNavigator = useRouteNavigator();

  const handleOnboardingComplete = async (data: {
    interests: string[];
    bio: string;
    bigFive: {
      openness: number;
      conscientiousness: number;
      extraversion: number;
      agreeableness: number;
      neuroticism: number;
    } | null;
  }) => {
    try {
      await profileAPI.completeOnboarding({
        display_name: user?.vk_id.toString() || 'User',
        bio: data.bio,
        interests: data.interests,
      });

      await refreshProfile();
      routeNavigator.replace('/');
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
    }
  };

  return (
    <Panel id={id}>
      <OnboardingFlow
        userName={user?.vk_id.toString() || 'User'}
        onComplete={handleOnboardingComplete}
      />
    </Panel>
  );
};
