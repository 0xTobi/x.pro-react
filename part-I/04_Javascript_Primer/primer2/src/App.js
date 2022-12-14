import { Component } from "react";

// const count = 4

// function isEven() {
//   return count % 2 === 0 ? "Even" : "Odd";
// }

// export default class App extends Component {

//   render = () =>
//     <h4 className="bg-primary text-white text-center p-2 m-1">
//       Number of things: { isEven() }
//     </h4>
// }


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 4
        }
    }

    isEven(val) {
        return val % 2 === 0 ? "Even" : "Odd";
    }

    getClassName(val) {
        return val % 2 === 0 ?
            "bg-primary text-white text-center p-2 m-1" :
            "bg-secondary text-white text-center p-2 m-1"
    }

    handleClick = () => this.setState({ count: this.state.count + 1 });

    render = () =>
        <div className = "m-2" >
            <div className = "form-group" >
                <label > Name: </label> 
                <input className = "form-control"/>
            </div> 
            <div className = "form-group" >
                <label > City: </label> 
                <input className = "form-control"/>
            </div> 
        </div>
}


class MyData {     
    constructor(name, weather) { 
        this.name = name; 
        this.weather = weather; 
    }

    printMessages = () => { 
        console.log(`Hello ${this.name}.`); 
        console.log(`Today is ${this.weather}.`);     
    } 
}

let myData = new MyData("Tobi", "Sunny");
myData.printMessages();