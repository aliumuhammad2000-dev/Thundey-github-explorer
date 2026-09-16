const GITHUB_API = 'https://api.github.com'

export async function searchUsers(query) {
  const response = await fetch(`${GITHUB_API}/search/users?q=${encodeURIComponent(query)}&per_page=12`)
  if (!response.ok) throw new Error(response.status === 403 ? 'GitHub search is temporarily rate limited. Try again later.' : 'GitHub could not complete this search.')
  const data = await response.json()
  return data.items
}

export async function searchRepositories(query) {
  const response = await fetch(`${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&per_page=12`)
  if (!response.ok) throw new Error(response.status === 403 ? 'GitHub search is temporarily rate limited. Try again later.' : 'GitHub could not complete this search.')
  const data = await response.json()
  return data.items
}
