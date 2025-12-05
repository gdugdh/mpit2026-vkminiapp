import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';
import { ProfileScreen } from '../components/profile-screen';

export interface ProfilePanelProps extends NavIdProps {}

export const ProfilePanel: FC<ProfilePanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <ProfileScreen />
    </Panel>
  );
};
