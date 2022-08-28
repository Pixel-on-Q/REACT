// import React, {Component} from "react"; import Person from "./Person/Person";
// class App extends Component {     state = {         persons: [             {
//               name: 'Jigmat',                 age: 26             }, {
//    name: 'Del',                 age: 15             }, {   name: 'Maddy',
//             age: 26             }         ]     } switchNameHandler = () => {
//         console.log('button pressed'); this.setState({           persons: [
//           {                 name: 'Tashi',                 age: 22
//  }, {                 name: 'Delex',                 age: 5             }, {
//                name: 'Maddy',                 age: 2             },         ]
//         });     }  render() {         return (             <div>
//    <button onClick={this.switchNameHandler}>Switch Names</button> <Person
// name={this.state.persons[0].name} age={this.state.persons[0].age}>I am from
// Chuchot</Person>                 <Person name={this.state.persons[1].name}
// age={this.state.persons[1].age}></Person>               <Person
// name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
//           </div>         );     } } export default App; import
// React,{Component} from 'react'; class App extends Component{ render(){
// return( <h1>Hello</h1>);   } } export default App; /REACT HOOK useSTATE
import React, {useState} from "react";
import Person from "./Person/Person";

const App = prop => {
    //useState returns an array of two elements
    const [PersonState,
        setPersonState] = useState({
        persons: [
            {
                name: 'RD',
                age: 10
            }, {
                name: 'MD',
                age: 20
            }
        ]
    });

    const [otherState,
        setOtherState] = useState('Some other value');

    console.log(PersonState, otherState);

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                {
                    name: 'DR',
                    age: 100
                }, {
                    name: 'RD',
                    age: 3000
                }
            ]
        })
        setOtherState('Some changed value');
        

    }

    return (
        <div>
            <button onClick={switchNameHandler}>Switch</button>
            <Person name={PersonState.persons[0].name} age={PersonState.persons[0].age}></Person>
            <Person name={PersonState.persons[1].name} age={PersonState.persons[1].age}></Person>
        </div>

    );

}

export default App;