import { Test } from '#lib/context/Test';
import type { TestParents } from '@uah/server';

export class A extends Test {
  async test() {
    return 'A';
  }
}

export class B extends Test {
  async test() {
    return 'B';
  }
}

export class C extends Test {
  async test() {
    return 'C';
  }
}

export class AB extends Test {
  async test(
    payload: TestParents<{
      a: A;
      b: B;
    }>,
  ) {
    return {
      a: payload.a,
      b: payload.b,
      ab: 'AB',
    };
  }
}

export class BC extends Test {
  async test(
    payload: TestParents<{
      b: B;
      c: C;
    }>,
  ) {
    return {
      b: payload.b,
      c: payload.c,
      bc: 'BC',
    };
  }
}

export class AC extends Test {
  async test(
    payload: TestParents<{
      a: A;
      c: C;
    }>,
  ) {
    return {
      a: payload.a,
      c: payload.c,
      ac: 'AC',
    };
  }
}

export class ABC extends Test {
  async test(
    payload: TestParents<{
      a: A;
      b: B;
      c: C;
    }>,
  ) {
    return {
      a: payload.a,
      b: payload.b,
      c: payload.c,
      abc: 'ABC',
    };
  }
}

export class ABC_A_B_C extends Test {
  async test(
    payload: TestParents<{
      abc: ABC;
      a: A;
      b: B;
      c: C;
    }>,
  ) {
    return {
      abc: payload.abc,
      a: payload.a,
      b: payload.b,
      c: payload.c,
      abc_a_b_c: 'ABC_A_B_C',
    };
  }
}

export class AB_BC extends Test {
  async test(
    payload: TestParents<{
      ab: AB;
      bc: BC;
    }>,
  ) {
    return {
      ab: payload.ab,
      bc: payload.bc,
      ab_bc: 'ab_bc',
    };
  }
}

export class AB_AC extends Test {
  async test(
    payload: TestParents<{
      ab: AB;
      ac: AC;
    }>,
  ) {
    return {
      ab: payload.ab,
      ac: payload.ac,
      ab_ac: 'AB_AC',
    };
  }
}

export class BC_AC extends Test {
  async test(
    payload: TestParents<{
      bc: BC;
      ac: AC;
    }>,
  ) {
    return {
      bc: payload.bc,
      ac: payload.ac,
      bc_ac: 'BC_AC',
    };
  }
}

export class AB_BC_AB_AC extends Test {
  async test(
    payload: TestParents<{
      ab_bc: AB_BC;
      ab_ac: AB_AC;
    }>,
  ) {
    return {
      ab_bc: payload.ab_bc,
      ab_ac: payload.ab_ac,
      ab_bc_ab_ac: 'AB_BC_AB_AC',
    };
  }
}

export class ABC_AB_AC_BC extends Test {
  async test(
    payload: TestParents<{
      abc: ABC;
      ab: AB;
      ac: AC;
      bc: BC;
    }>,
  ) {
    return {
      abc: payload.abc,
      ab: payload.ab,
      ac: payload.ac,
      bc: payload.bc,
      abc_ab_ac_bc: 'ABC_AB_AC_BC',
    };
  }
}

export class ABC_AB_BC_AB_AC extends Test {
  async test(
    payload: TestParents<{
      abc: ABC;
      ab_bc_ab_ac: AB_BC_AB_AC;
    }>,
  ) {
    return {
      abc: payload.abc,
      ab_bc_ab_ac: payload.ab_bc_ab_ac,
      abc_ab_bc_ab_ac: 'ABC_AB_BC_AB_AC',
    };
  }
}
