import { Scheduler } from '#lib/context/Scheduler';

export class UserReminder extends Scheduler {
  interval = 'P1D';

  override async init() {
  }

  async start() {
    console.log('Start UserReminder', new Date().toISOString());
  }

  override async stop() {
    //
  }
}
