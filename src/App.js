import React from 'react';
import { robots } from './robots';
import Carddisplay from './Carddisplay';
import Searchbox from './Searchbox';


class App extends React.Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredrobots= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc ma0">
                <div  className="bg-navy near-white ma0">
                    <h1 className="tc f-headline ma0">Find Your Robo</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                </div>
                <div className="bg-washed-blue flex justify-center">
                    <Carddisplay robots={filteredrobots} className="tc"/>
                </div>
            </div>
        );
    }
}

export default App;