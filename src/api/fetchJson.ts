import type { ApiResponse } from "../types";

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const json: ApiResponse<T> = await res.json();

  if (!json.success) {
    throw new Error(json.message ?? "Unknown API error");
  }

  return json.data;
};

export default fetchJson;