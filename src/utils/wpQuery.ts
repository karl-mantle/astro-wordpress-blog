import dotenv from 'dotenv';
dotenv.config();
const TARGET_URL: string = process.env.WP_URL as string;

interface gqlParams {
  query: String;
  variables?: object;
}

export async function wpQuery({ query, variables = {} }: gqlParams) {

  const res = await fetch(TARGET_URL, {
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