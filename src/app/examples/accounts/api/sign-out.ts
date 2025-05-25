import { Api } from '#lib/Api';

export class SignOut extends Api {
  async post() {
    await this.deleteSession();
  }
}
