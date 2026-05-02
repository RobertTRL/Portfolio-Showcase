export default function ProjectSearchBar({ handleSearch , searchValue }) {

    return (
        <div className="search-bar">
            <input id="search" type="search" name="search" placeholder="Search for a project..." onChange={handleSearch} value={searchValue} />
        </div>
    )
}