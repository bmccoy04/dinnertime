import React, { Component } from 'react';
import { connect } from "react-redux"
import {fetchDinnerIdeas} from "./actions/dinnerIdeaActions"


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      ideas: [],
      ideaEntry:'',
      count:0
    }
    //this.props.dispatch(fetchDinnerIdeas());
  }

  addIdea(){

    this.state.ideas.push({text: this.state.ideaEntry, id:this.state.count});

    this.setState({ideas: this.state.ideas});    
    this.setState({ideaEntry: ''});
    this.setState({count: this.state.count+1});
    console.log(this.state.ideas);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const ideasList = this.state.ideas.map(idea => <tr key={idea.id}><td>{idea.id}</td><td>{idea.text}</td></tr>)
    return (
      <div className='container'>
        <div>
          <h1>
            Time for Dinner!!! (ideas)
          </h1>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='input-group'>
              <input type="text" name='ideaEntry' value={this.state.ideaEntry} className='form-control' onChange={this.handleChange.bind(this)}  placeholder='Enter Idea...'/>
              <span className='input-group-btn'>
                <button className='btn btn-primary' type='button' onClick={this.addIdea.bind(this)}>
                  Enter Item
                </button>
              </span>
            </div>
              <div className='panel panel-default'>
                <div className='panel-heading'>Ideas</div>
                <table className='table'>
                  <tbody>
                    {ideasList}
                  </tbody>
                </table>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default connect()(App);
