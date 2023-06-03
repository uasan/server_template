class Context {
  permission = [];
}

type Payload = {
  id: number;
};

export async function getEntities(context: Context, payload: Payload) {
  return payload.id;
}
