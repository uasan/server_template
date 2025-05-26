import { Api } from '#lib/context/Api';

export class SignIn extends Api {
  async post() {
    await this.createSession({
      id: 'My user ID',
      roles: ['admin'],
    });
  }
}
