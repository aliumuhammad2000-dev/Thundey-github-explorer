import { Code2 } from 'lucide-react'
import { useState } from 'react'
import { getUser, searchRepositories, searchUsers } from './api/github'
import SearchForm from './components/SearchForm'
import RepositoryResultCard from './components/RepositoryResultCard'
import UserResultCard from './components/UserResultCard'
import UserProfile from './components/UserProfile'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [searchType, setSearchType] = useState('users')
  const [profile, setProfile] = useState(null)
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileError, setProfileError] = useState('')

  async function handleSearch({ query, type }) {
    setSearchType(type)
    setLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const items = type === 'users'
        ? await searchUsers(query)
        : await searchRepositories(query)
      setResults(items)
    } catch (requestError) {
      setResults([])
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleViewProfile(username) {
    setProfileLoading(true)
    setProfileError('')

    try {
      setProfile(await getUser(username))
    } catch (requestError) {
      setProfileError(requestError.message)
    } finally {
      setProfileLoading(false)
    }
  }

  return (
    <main className="dark min-h-screen bg-[#0b1020] px-6 py-10 text-[#eef2ff] sm:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-[#ded6ce] pb-6 dark:border-[#3b2b49]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f59e0b] text-[#172554]"><Code2 size={22} /></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f59e0b]">Thundey</p><p className="text-xs text-[#a8b5d8]">GitHub Explorer</p></div>
          </div>
          <a className="text-sm text-[#a8b5d8] transition hover:text-[#f59e0b]" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </header>

        <section className="py-20 text-center sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b]">Explore the developer community</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#eef2ff] sm:text-6xl">Find developers and projects worth discovering.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#a8b5d8] sm:text-lg">Search GitHub users and repositories, then explore real profiles, code, and open-source work through the GitHub REST API.</p>
          <SearchForm onSearch={handleSearch} />

          {profileLoading && <p className="mx-auto mt-16 max-w-3xl text-[#f59e0b]">Loading profile...</p>}
          {profileError && <p className="mx-auto mt-16 max-w-3xl text-rose-300" role="alert">{profileError}</p>}
          {profile && !profileLoading && <UserProfile onBack={() => setProfile(null)} profile={profile} />}

          {!profile && !profileLoading && hasSearched && (
            <section className="mx-auto mt-16 max-w-5xl text-left">
              <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-semibold text-[#eef2ff]">Search results</h2>{!loading && !error && <p className="text-sm text-[#a8b5d8]">{results.length} found</p>}</div>
              {loading && <p className="text-[#f59e0b]">Searching GitHub...</p>}
              {error && <p className="text-rose-300" role="alert">{error}</p>}
              {!loading && !error && results.length === 0 && <p className="text-[#a8b5d8]">No results found. Try another search.</p>}
              {!loading && !error && results.length > 0 && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{results.map((result) => searchType === 'users' ? <UserResultCard key={result.id} onView={handleViewProfile} user={result} /> : <RepositoryResultCard key={result.id} repository={result} />)}</div>}
            </section>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
