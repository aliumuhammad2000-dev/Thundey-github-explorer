import { ExternalLink, GitFork, Star } from "lucide-react";

function RepositoryResultCard({ repository }) {
  return (
    <article className="rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-5 transition hover:-translate-y-1 hover:border-[#f59e0b]">
      <p className="text-xs text-[#a8b5d8]">{repository.owner.login}</p>
      <h3 className="mt-2 truncate font-semibold text-[#eef2ff]">
        {repository.name}
      </h3>
      <p className="mt-3 min-h-10 text-sm leading-relaxed text-[#a8b5d8]">
        {repository.description || "No description provided."}
      </p>
      <div className="mt-5 flex items-center gap-4 text-xs text-[#a8b5d8]">
        <span className="flex items-center gap-1">
          <Star size={14} />
          {repository.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={14} />
          {repository.forks_count}
        </span>
        {repository.language && <span>{repository.language}</span>}
      </div>
      <a
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24]"
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View repository <ExternalLink size={15} />
      </a>
    </article>
  );
}

export default RepositoryResultCard;
