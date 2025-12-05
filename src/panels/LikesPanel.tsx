import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Placeholder,
  NavIdProps
} from '@vkontakte/vkui';
import { Icon56FavoriteOutline } from '@vkontakte/icons';

export interface LikesPanelProps extends NavIdProps {}

export const LikesPanel: FC<LikesPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Лайки</PanelHeader>
      <Group>
        <Placeholder
          icon={<Icon56FavoriteOutline />}
          header="Пока пусто"
        >
          Здесь появятся люди, которым вы понравились
        </Placeholder>
      </Group>
    </Panel>
  );
};
