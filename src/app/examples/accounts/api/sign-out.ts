import { Api } from '#lib/context/Api';

export class SignOut extends Api {
  async post() {
    await this.deleteSession();
  }
}
