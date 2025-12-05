import { FC, useState } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Div,
  Title,
  Text,
  Button,
  Spacing,
  Input,
  FormItem,
  NavIdProps
} from '@vkontakte/vkui';
import { useAuth } from '../contexts/AuthContext';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { profileAPI } from '../services/api';

export interface OnboardingPanelProps extends NavIdProps {}

export const OnboardingPanel: FC<OnboardingPanelProps> = ({ id }) => {
  const { refreshProfile, user } = useAuth();
  const routeNavigator = useRouteNavigator();
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');

  const handleComplete = async () => {
    try {
      await profileAPI.completeOnboarding({
        display_name: displayName || user?.vk_id.toString() || 'User',
        bio: bio,
        interests: [],
      });

      await refreshProfile();
      routeNavigator.replace('/');
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader>Создание профиля</PanelHeader>
      <Group>
        <Div>
          <Title level="1" weight="1">Добро пожаловать!</Title>
          <Spacing size={8} />
          <Text>Расскажите немного о себе</Text>
          <Spacing size={24} />

          <FormItem top="Имя">
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Как вас зовут?"
            />
          </FormItem>

          <FormItem top="О себе">
            <Input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Расскажите о своих интересах"
            />
          </FormItem>

          <Spacing size={24} />

          <Button
            size="l"
            stretched
            onClick={handleComplete}
            disabled={!displayName}
          >
            Продолжить
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};
