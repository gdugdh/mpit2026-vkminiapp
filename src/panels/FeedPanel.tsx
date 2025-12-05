import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  CardGrid,
  Card,
  Div,
  Title,
  Text,
  Button,
  Spacing,
  NavIdProps
} from '@vkontakte/vkui';
import { Icon28HeartOutline, Icon28CancelOutline } from '@vkontakte/icons';

export interface FeedPanelProps extends NavIdProps {}

export const FeedPanel: FC<FeedPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Знакомства</PanelHeader>
      <Group>
        <CardGrid size="l">
          <Card>
            <Div>
              <div style={{
                width: '100%',
                height: 400,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 48
              }}>
                👤
              </div>
              <Spacing size={16} />
              <Title level="2" weight="2">Анкеты закончились</Title>
              <Spacing size={8} />
              <Text>Попробуйте изменить фильтры или загляните позже</Text>
              <Spacing size={16} />
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Button
                  size="l"
                  mode="secondary"
                  before={<Icon28CancelOutline />}
                >
                  Нет
                </Button>
                <Button
                  size="l"
                  mode="primary"
                  before={<Icon28HeartOutline />}
                >
                  Да
                </Button>
              </div>
            </Div>
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};
