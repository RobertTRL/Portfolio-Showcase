import ProjectSearchBar from "./ProjectSearchBar"
import ProjectCard from "./ProjectCard"
import { useState } from "react"
import "../styles/projects.css"

export default function ViewProjects({ projects }) {
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const filtered = projects.filter((project) => {
        return project.title.toLowerCase().trim().includes(search.toLowerCase())
    })
    return (
        <div className="view-projects">
            <ProjectSearchBar handleSearch={handleSearch} searchValue={search} />
            <div id="projects">
                {filtered.map((proj) => {
                    return <ProjectCard key={proj.id} project={proj} />
                })}
            </div>
        </div>
    )
}