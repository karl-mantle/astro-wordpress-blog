interface gqlParams {
  query: String;
  variables?: object;
}

export async function wpQuery({ query, variables = {} }: gqlParams) {

  const res = await fetch(import.meta.env.WP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },

    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();
  return data;
}

// for basic auth
export async function wpQueryAuth({ query, variables = {} }: gqlParams) {
  const username = import.meta.env.BASIC_USERNAME;
  const password = import.meta.env.BASIC_PASSWORD;

  const authString = `Basic ${btoa(`${username}:${password}`)}`;

  const res = await fetch(import.meta.env.WP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authString,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();
  return data;
}