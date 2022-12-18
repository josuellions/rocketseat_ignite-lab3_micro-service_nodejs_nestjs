import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
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

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipitent-1',
    });

    expect(count).toEqual(2);
  });
});
