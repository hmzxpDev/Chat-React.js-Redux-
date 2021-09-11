import React, { useState } from "react";

export const Counter = () => {
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];

    const [count, setCount] = useState({ number: 0 });

    return (
        <div>
            <span>{count.number}</span>
            <button onClick={() => setCount({ number: count.number + 1 })}>click</button>
        </div >
    )
}


// import React from "react";

// export class Counter extends React.Component {
//     state = {
//         count: 0,
//     }

//     updateCounter = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.updateCounter}>click</button>
//             </div>
//         )
//     }
// }