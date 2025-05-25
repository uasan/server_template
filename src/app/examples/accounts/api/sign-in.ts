import { Api } from '#lib/Api';

export class SignIn extends Api {
  async post() {
    await this.createSession({
      id: 'My user ID',
      roles: ['admin'],
    });
  }
}
