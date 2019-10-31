import React , {Component} from 'react';
import Customer from './components/Customer'
import Hr from './components/Hr'


class App extends Component {
  state = {
       depts:  [
            {
              deptid : 1,
              deptname :"Accounts",
              closed : false
            },
            {
              deptid : 2,
              deptname : "Sales",
              closed : false
            },
            {
              deptid:3,
              deptname : "HR",
              closed : false
            }
        ]
  }

  markClosed = (did) => {

    this.setState ({ depts: this.state.depts.map(t => {
        if ( t.deptid ===did){
            t.closed = !t.closed      
          
        }
        return t
    })
  });
}
  render() { 
    
  return (
    <div className="App">
      
        <h1>This is from Root</h1>
        <Customer  depts = {this.state.depts} markClosed = { this.markClosed } />
        <Hr />
    </div>
  );
}
}
export default App;
