import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Cell,
  Switch,
  Div,
  Title,
  NavIdProps
} from '@vkontakte/vkui';
import {
  Icon28UserCircleOutline,
  Icon28SettingsOutline,
  Icon28Notifications,
  Icon28LockOutline
} from '@vkontakte/icons';
import { useAuth } from '../contexts/AuthContext';

export interface ProfilePanelProps extends NavIdProps {}

export const ProfilePanel: FC<ProfilePanelProps> = ({ id }) => {
  const { user, profile } = useAuth();

  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Div>
          <div style={{
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 48,
            margin: '0 auto 16px'
          }}>
            👤
          </div>
          <Title level="2" weight="2" style={{ textAlign: 'center' }}>
            {profile?.display_name || `User ${user?.vk_id}`}
          </Title>
        </Div>
      </Group>

      <Group header={<Title level="3" weight="3">Настройки</Title>}>
        <Cell
          before={<Icon28UserCircleOutline />}
          subtitle="Имя, фото, интересы"
        >
          Редактировать профиль
        </Cell>
        <Cell
          before={<Icon28SettingsOutline />}
          subtitle="Возраст, расстояние"
        >
          Фильтры поиска
        </Cell>
        <Cell
          before={<Icon28Notifications />}
          after={<Switch />}
        >
          Уведомления
        </Cell>
        <Cell
          before={<Icon28LockOutline />}
        >
          Конфиденциальность
        </Cell>
      </Group>
    </Panel>
  );
};
