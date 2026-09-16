import { Code2 } from 'lucide-react'
import SearchForm from './components/SearchForm'

function App() {
  function handleSearch({ query, type }) {
    console.log(`Ready to search ${type}: ${query}`)
  }

  return (
    <main className="dark min-h-screen bg-[#0b1020] px-6 py-10 text-[#eef2ff] sm:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-[#ded6ce] pb-6 dark:border-[#3b2b49]">
          <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f59e0b] text-[#172554]"><Code2 size={22} /></div><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f59e0b]">Thundey</p><p className="text-xs text-[#a8b5d8]">GitHub Explorer</p></div></div>
          <a className="text-sm text-[#a8b5d8] transition hover:text-[#f59e0b]" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </header>
        <section className="py-20 text-center sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4f46e5] dark:text-[#f59e0b]">Explore the developer community</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#eef2ff] sm:text-6xl">Find developers and projects worth discovering.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748b] dark:text-[#a8b5d8] sm:text-lg">Search GitHub users and repositories, then explore real profiles, code, and open-source work through the GitHub REST API.</p>
          <SearchForm onSearch={handleSearch} />
        </section>
      </div>
    </main>
  )
}

export default App
