const GITHUB_API = 'https://api.github.com'

export async function searchUsers(query, page = 1) {
  const response = await fetch(`${GITHUB_API}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=12`)
  if (!response.ok) throw new Error(response.status === 403 ? 'GitHub search is temporarily rate limited. Try again later.' : 'GitHub could not complete this search.')
  const data = await response.json()
  return data.items
}

export async function searchRepositories(query, page = 1) {
  const response = await fetch(`${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&page=${page}&per_page=12`)
  if (!response.ok) throw new Error(response.status === 403 ? 'GitHub search is temporarily rate limited. Try again later.' : 'GitHub could not complete this search.')
  const data = await response.json()
  return data.items
}

export async function getUser(username) {
  const response = await fetch(`${GITHUB_API}/users/${encodeURIComponent(username)}`)
  if (!response.ok) throw new Error('Unable to load this GitHub profile.')
  return response.json()
}

export async function getUserRepositories(username) {
  const response = await fetch(`${GITHUB_API}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`)
  if (!response.ok) throw new Error('Unable to load this user repositories.')
  return response.json()
}
