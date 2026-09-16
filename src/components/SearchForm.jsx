import { Search } from 'lucide-react'
import { useState } from 'react'

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('')
  const [searchType, setSearchType] = useState('users')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) { setError('Enter a username or repository to search.'); return }
    setError('')
    onSearch({ query: trimmedQuery, type: searchType })
  }

  return (
    <form className="mx-auto mt-10 max-w-2xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1"><span className="sr-only">Search GitHub</span><Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={20} /><input aria-describedby={error ? 'search-error' : undefined} aria-invalid={Boolean(error)} className="w-full rounded-xl border border-[#2d3a5c] bg-[#161d33] py-4 pl-12 pr-4 text-[#eef2ff] outline-none placeholder:text-[#7182ae] focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20" onChange={(event) => { setQuery(event.target.value); if (error) setError('') }} placeholder="Search GitHub users or repositories" type="search" value={query} /></label>
        <select aria-label="Search type" className="rounded-xl border border-[#2d3a5c] bg-[#161d33] px-4 py-3 text-sm font-medium text-[#cbd5e1] outline-none focus:border-[#f59e0b] sm:w-36" onChange={(event) => setSearchType(event.target.value)} value={searchType}><option value="users">Users</option><option value="repositories">Repositories</option></select>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-6 py-4 font-semibold text-[#172554] transition hover:bg-[#fbbf24]" type="submit"><Search aria-hidden="true" size={18} />Search</button>
      </div>
      {error && <p className="mt-2 text-left text-sm text-rose-300" id="search-error" role="alert">{error}</p>}
    </form>
  )
}

export default SearchForm
