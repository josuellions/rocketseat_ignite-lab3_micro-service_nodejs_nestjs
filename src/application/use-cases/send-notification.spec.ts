//import { Notification } from '../entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

/* REFATORANDO - movido para .test/repositories/in-memory-notifications-repository.ts
const notifications: Notification[] = [];

//Simula salvar no banco dado (MOCKs)
const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
    //console.log(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    //const { notification } = await sendNotification.execute({
    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipitent-id',
    });

    console.log(notifications);

    //expect(notification).toBeTruthy();
    expect(notifications).toHaveLength(1);
  });
});*/

//REFATORADO
describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipitent-id',
    });

    console.log(notificationsRepository.notifications);

    //expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
