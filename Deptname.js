import React, { Component } from 'react'


export class Deptname extends Component {

    getStyle =  () => {
    return {
        
        textDecoration: this.props.dept.closed ? 'line-through' : 'none',
        background: this.props.dept.closed ?  'red' : 'green'
     };}

    foo(e){
        console.log(this.props)
    }
    render() {
        return (
            <div style = { this.getStyle() }>
                <p>{this.props.dept.deptid}   {this.props.dept.deptname }  { this.props.dept.closed} </p>
                <input type="button" value = "Test Button" onClick={this.foo.bind(this)}></input>
                <input type="checkbox" onChange = { this.props.markClosed.bind(this, this.props.dept.deptid) } /> {' Click to mark the dept '}
                 { this.props.dept.deptname} { ' as closed for the day'}
            </div>

            
        )
    }
}

export default Deptname
