import React, { useState } from 'react'

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60
}

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA)

  const resetForm = () => setForm(DEFAULT_DATA)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    console.info('submit')
    onFormSubmit(form)
  }

  return (
    <div className="resource-form">
      <h1 className="title">Add New Resource</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              value={form.title}
              name="title"
              onChange={handleChange}
              className="input"
              type="text"
              placeholder="Learn Next JS an Sanity io"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              value={form.description}
              name="description"
              onChange={handleChange}
              className="textarea"
              placeholder="Learn these tech"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              value={form.link}
              name="link"
              onChange={handleChange}
              className="input"
              type="text"
              placeholder="https://academy.eincode.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                value={form.priority}
                name="priority"
                onChange={handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              value={form.timeToFinish}
              name="timeToFinish"
              onChange={handleChange}
              className="input"
              type="number"
              placeholder="60 (time is in minutes)"
            />
            <p className="help">Time is in minutes</p>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-link is-light"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResourceForm
