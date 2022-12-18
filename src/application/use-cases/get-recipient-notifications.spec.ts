import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import {} from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    /*Criando a notificação */
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipitent-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipitent-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipitent-2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipitent-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipitent-1' }),
        expect.objectContaining({ recipientId: 'example-recipitent-1' }),
      ]),
    );
  });
});
