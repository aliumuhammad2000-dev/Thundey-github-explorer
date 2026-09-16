import { ExternalLink, Users } from 'lucide-react'

function UserResultCard({ user }) {
  const name = user.login || user.full_name
  const avatar = user.avatar_url || user.owner?.avatar_url

  return (
    <article className="rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-5 transition hover:-translate-y-1 hover:border-[#f59e0b]">
      <div className="flex items-center gap-4">
        <img alt={`${name}'s avatar`} className="h-14 w-14 rounded-full" src={avatar} />
        <div className="min-w-0">
          <h2 className="truncate font-semibold text-[#eef2ff]">{name}</h2>
          <p className="mt-1 flex items-center gap-1 text-xs text-[#a8b5d8]"><Users size={13} />GitHub result</p>
        </div>
      </div>
      <a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24]" href={user.html_url} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15} /></a>
    </article>
  )
}

export default UserResultCard
