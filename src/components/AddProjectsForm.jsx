export default function AddProjectsForm({ formInput, handleChange, handleSubmit, showWarning}) {
   return (
        <div className="add-form" id="add-form">
            <h3>Add Project</h3>
            {showWarning && <p className="warning">Please enter a title and/or description for your project.</p>}
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