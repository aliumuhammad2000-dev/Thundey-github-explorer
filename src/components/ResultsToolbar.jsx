function ResultsToolbar({ onSortChange, searchType, sortBy }) {
  if (searchType !== 'repositories') return null

  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <p className="text-sm text-[#a8b5d8]">Sort repositories by</p>
      <select aria-label="Sort repositories" className="rounded-lg border border-[#2d3a5c] bg-[#161d33] px-3 py-2 text-sm text-[#cbd5e1] outline-none focus:border-[#f59e0b]" onChange={(event) => onSortChange(event.target.value)} value={sortBy}>
        <option value="stars">Most stars</option>
        <option value="forks">Most forks</option>
        <option value="updated">Recently updated</option>
      </select>
    </div>
  )
}

export default ResultsToolbar
