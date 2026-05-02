import "../styles/projects.css"

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img className='card-img' src={project.imageUrl} alt={project.title} />
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
        </div>

            )
}