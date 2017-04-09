import React, {Component} from 'react'

class FooIdeaRow extends Component {
    render(){
        const idea = this.props.idea;
        const removeIdea = this.props.removeIdea;
        return <tr>
            <td>{idea.id} row</td>
            <td>{idea.text}</td>
            <td>
                <div className='btn-group btn-group-sm pull-right' role='group'>
                    <button 
                        className='btn btn-default glyphicon glyphicon-edit' 
                        type='button'>
                    </button>
                    <button 
                        className='btn btn-danger glyphicon glyphicon-remove-sign' 
                        type='button'
                        onClick={removeIdea}>                       
                    </button>
                </div>
            </td>
        </tr>
    }
}

export default FooIdeaRow