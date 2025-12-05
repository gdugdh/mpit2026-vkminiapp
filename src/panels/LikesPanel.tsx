import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';
import { LikesScreen } from '../components/likes-screen';

export interface LikesPanelProps extends NavIdProps {}

export const LikesPanel: FC<LikesPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <LikesScreen />
    </Panel>
  );
};
