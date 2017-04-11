import React from 'react'

const FoodIdeaForm = ({ ideaEntry, handleChange, addIdea }) => {
    return (
        <form onSubmit={addIdea}>
            <div className='input-group'>
                <input type="text" name='ideaEntry' 
                    value={ideaEntry} 
                    className='form-control' 
                    onChange={handleChange} 
                    placeholder='Enter Idea...' 
                    required={true}
                />
                <span className='input-group-btn'>
                    <button className='btn btn-primary' type='submit' value='Enter Item'>
                        Enter Item
                </button>
                </span>
            </div>
        </form>
    );
}

export default FoodIdeaForm;