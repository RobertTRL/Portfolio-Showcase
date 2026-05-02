export default function AddProjectsForm({ formInput, handleChange, handleSubmit, warningMsg }) {
    return (
        <div className="add-form">
            <h3>Add Project</h3>
            <p ref={warningMsg} className="hidden">Please enter a title and/or description for your project.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Add Title" onChange={handleChange} value={formInput.title}/>
                <label htmlFor="description">Description</label>
                <textarea name="description" placeholder="Add Description" onChange={handleChange} value={formInput.description}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}