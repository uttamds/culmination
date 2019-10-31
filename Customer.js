import React, { Component } from "react";
import Deptname from "./Deptname";

class Customer extends Component {
 
  render() {
    return this.props.depts.map(d => (
      <Deptname dept={d} markClosed={this.props.markClosed} />
      // <h1
      // style={{
      //   color: 'red'

      // }}

      // >

      // { d.deptid } { d.deptname }   </h1>
    ));
  }
}
export default Customer;
