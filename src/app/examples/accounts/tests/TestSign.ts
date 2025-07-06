import { Test } from '#lib/context/Test';
import type { TestParents } from '@uah/server';
import { SignUp } from '../api/sign-up';

export class SignUpTest extends Test {
  async test() {
    const username = 'test';

    const uid = await SignUp.mock({ lang: 'en' }).post({
      username,
    });

    return {
      uid,
      username,
    };
  }
}

export class SignInTest extends Test {
  async test(
    data: TestParents<{
      user: SignUpTest;
    }>,
  ) {
    return {
      user: data.user,
    };
  }
}

export class SignOutTest extends Test {
  override skipped = false;
  override description = 'My description';

  async test(
    data: TestParents<{
      in: SignInTest;
      up: SignInTest;
    }>,
  ) {
    return data;
  }
}
