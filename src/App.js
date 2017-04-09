import React, { Component } from 'react';
import FoodIdeaRow from './components/FoodIdeaRow'
import FoodIdeaForm from './components/FoodIdeaForm'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: [],
      ideaEntry: '',
      count: 0
    }
  }

  addIdea(event) {
    event.preventDefault();
    this.state.ideas.push({ text: this.state.ideaEntry, id: this.state.count });

    this.setState({ ideas: this.state.ideas });
    this.setState({ ideaEntry: '' });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.ideas);
  }

  removeIdea(idea, event) {
    console.log(idea);
    const index = this.state.ideas.indexOf(idea);
    this.state.ideas.splice(index, 1);
    this.setState({ ideas: this.state.ideas });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    // const ideasList = this.state.ideas.map(idea => <tr key={idea.id}><td>{idea.id}</td><td>{idea.text}</td></tr>)
    const ideasList = this.state.ideas.map(idea => <FoodIdeaRow idea={idea} key={idea.id} removeIdea={this.removeIdea.bind(this, idea)} />)
    return (
      <div className='container'>
        <div>
          <h1>
            Time for Dinner!!! (ideas)
          </h1>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div>
              <FoodIdeaForm ideaEntry={this.state.ideaEntry} handleChange={this.handleChange.bind(this)} addIdea={this.addIdea.bind(this)} />
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

export default App;
