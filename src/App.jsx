import { Code2, Search } from 'lucide-react'

function App() {
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
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="relative flex-1"><span className="sr-only">Search GitHub</span><Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] dark:text-[#7182ae]" size={20} /><input className="w-full rounded-xl border border-[#dce3f4] bg-white py-4 pl-12 pr-4 text-[#172554] outline-none placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 dark:border-[#2d3a5c] dark:bg-[#161d33] dark:text-[#eef2ff] dark:placeholder:text-[#7182ae] dark:focus:border-[#f59e0b]" placeholder="Search GitHub users or repositories" type="search" /></label><button className="rounded-xl bg-[#4f46e5] px-6 py-4 font-semibold text-white transition hover:bg-[#3730a3] dark:bg-[#f59e0b] dark:text-[#172554] dark:hover:bg-[#fbbf24]" type="button">Search</button></div>
        </section>
      </div>
    </main>
  )
}

export default App
