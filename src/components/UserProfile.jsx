import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, MapPin, Users } from "lucide-react";
import { getUserRepositories } from "../api/github";
import { RepositoriesSkeleton } from "./LoadingSkeleton";
import RepositoryResultCard from "./RepositoryResultCard";

function UserProfile({ onBack, profile }) {
  const [repositories, setRepositories] = useState([]);
  const [loadingRepositories, setLoadingRepositories] = useState(true);
  const [repositoriesError, setRepositoriesError] = useState("");

  useEffect(() => {
    async function loadRepositories() {
      setLoadingRepositories(true);
      setRepositoriesError("");

      try {
        const items = await getUserRepositories(profile.login);
        setRepositories(items);
      } catch (requestError) {
        setRepositoriesError(requestError.message);
      } finally {
        setLoadingRepositories(false);
      }
    }

    loadRepositories();
  }, [profile.login]);

  return (
    <section className="mx-auto mt-16 max-w-3xl text-left">
      <button
        className="inline-flex items-center gap-2 text-sm text-[#a8b5d8] transition hover:text-[#f59e0b]"
        onClick={onBack}
        type="button"
      >
        <ArrowLeft size={16} />
        Back to results
      </button>

      <article className="mt-6 rounded-2xl border border-[#2d3a5c] bg-[#161d33] p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <img
            alt={`${profile.login}'s avatar`}
            className="h-24 w-24 rounded-2xl"
            loading="lazy"
            src={profile.avatar_url}
          />
          <div>
            <h2 className="text-2xl font-bold text-[#eef2ff]">
              {profile.name || profile.login}
            </h2>
            <p className="mt-1 text-[#f59e0b]">@{profile.login}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-[#a8b5d8]">
              {profile.bio || "This user has not added a bio yet."}
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-5 text-sm text-[#a8b5d8]">
          <span className="flex items-center gap-2">
            <Users size={16} />
            {profile.followers} followers
          </span>
          <span>{profile.following} following</span>
          <span>{profile.public_repos} public repos</span>
          {profile.location && (
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
          )}
        </div>

        <a
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24]"
          href={profile.html_url}
          rel="noreferrer"
          target="_blank"
        >
          Open GitHub profile
          <ExternalLink size={15} />
        </a>
      </article>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-[#eef2ff]">Repositories</h2>
        {loadingRepositories && <RepositoriesSkeleton />}
        {repositoriesError && (
          <p className="mt-4 text-rose-300" role="alert">
            {repositoriesError}
          </p>
        )}
        {!loadingRepositories &&
          !repositoriesError &&
          repositories.length === 0 && (
            <p className="mt-4 text-[#a8b5d8]">
              This user has no public repositories.
            </p>
          )}
        {!loadingRepositories &&
          !repositoriesError &&
          repositories.length > 0 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {repositories.map((repository) => (
                <RepositoryResultCard
                  key={repository.id}
                  repository={repository}
                />
              ))}
            </div>
          )}
      </div>
    </section>
  );
}

export default UserProfile;
