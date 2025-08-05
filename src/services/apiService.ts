export interface ApiServiceOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: Record<string, any>;
  headers?: HeadersInit;
  queryParams?: Record<string, any>;
}

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("Missing environment variable");
}

export async function apiService<T>(
  endpoint: string,
  { method = "GET", body, headers = {}, queryParams }: ApiServiceOptions = {}
): Promise<T> {
  let url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  if (queryParams) {
    const query = new URLSearchParams(queryParams as Record<string, string>);
    url += `?${query.toString()}`;
  }

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...headers,
  };

  const res = await fetch(url, {
    method,
    headers: defaultHeaders,
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw {
      status: res.status,
      message: res.statusText,
      ...errorData,
    };
  }

  return res.json();
}
