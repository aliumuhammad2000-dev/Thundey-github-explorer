const GITHUB_API = "https://api.github.com";

async function requestJson(path, fallbackMessage) {
  try {
    const response = await fetch(`${GITHUB_API}${path}`);
    if (!response.ok) {
      if (response.status === 403 || response.status === 429)
        throw new Error("GitHub is temporarily rate limited. Try again later.");
      if (response.status === 404)
        throw new Error("The requested GitHub resource was not found.");
      throw new Error(fallbackMessage);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to GitHub. Check your internet connection.",
        { cause: error },
      );
    }
    throw error;
  }
}

export async function searchUsers(query, page = 1) {
  const data = await requestJson(
    `/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=12`,
    "GitHub could not complete this search.",
  );
  return Array.isArray(data.items) ? data.items : [];
}

export async function searchRepositories(query, page = 1) {
  const data = await requestJson(
    `/search/repositories?q=${encodeURIComponent(query)}&page=${page}&per_page=12`,
    "GitHub could not complete this search.",
  );
  return Array.isArray(data.items) ? data.items : [];
}

export async function getUser(username) {
  return requestJson(
    `/users/${encodeURIComponent(username)}`,
    "Unable to load this GitHub profile.",
  );
}

export async function getUserRepositories(username) {
  const data = await requestJson(
    `/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`,
    "Unable to load this user repositories.",
  );
  return Array.isArray(data) ? data : [];
}
