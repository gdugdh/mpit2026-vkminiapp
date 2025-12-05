import { FC } from 'react';
import { Panel, NavIdProps } from '@vkontakte/vkui';
import { MessagesScreen } from '../components/messages-screen';

export interface MessagesPanelProps extends NavIdProps {}

export const MessagesPanel: FC<MessagesPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <MessagesScreen />
    </Panel>
  );
};
