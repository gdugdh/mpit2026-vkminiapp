import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Placeholder,
  NavIdProps
} from '@vkontakte/vkui';
import { Icon56MessageOutline } from '@vkontakte/icons';

export interface MessagesPanelProps extends NavIdProps {}

export const MessagesPanel: FC<MessagesPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Сообщения</PanelHeader>
      <Group>
        <Placeholder
          icon={<Icon56MessageOutline />}
          header="Нет сообщений"
        >
          Начните общаться с людьми, которым вы понравились
        </Placeholder>
      </Group>
    </Panel>
  );
};
