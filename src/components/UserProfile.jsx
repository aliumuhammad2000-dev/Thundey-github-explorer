import { ArrowLeft, ExternalLink, MapPin, Users } from 'lucide-react'

function UserProfile({ onBack, profile }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl text-left">
      <button className="inline-flex items-center gap-2 text-sm text-[#a8b5d8] transition hover:text-[#f59e0b]" onClick={onBack} type="button"><ArrowLeft size={16} />Back to results</button>
      <article className="mt-6 rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start"><img alt={`${profile.login}'s avatar`} className="h-24 w-24 rounded-2xl" src={profile.avatar_url} /><div><h2 className="text-2xl font-bold text-[#eef2ff]">{profile.name || profile.login}</h2><p className="mt-1 text-[#f59e0b]">@{profile.login}</p><p className="mt-4 max-w-xl leading-relaxed text-[#a8b5d8]">{profile.bio || 'This user has not added a bio yet.'}</p></div></div>
        <div className="mt-7 flex flex-wrap gap-5 text-sm text-[#a8b5d8]"><span className="flex items-center gap-2"><Users size={16} />{profile.followers} followers</span><span>{profile.following} following</span><span>{profile.public_repos} public repos</span>{profile.location && <span className="flex items-center gap-2"><MapPin size={16} />{profile.location}</span>}</div>
        <a className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24]" href={profile.html_url} target="_blank" rel="noreferrer">Open GitHub profile <ExternalLink size={15} /></a>
      </article>
    </section>
  )
}

export default UserProfile
