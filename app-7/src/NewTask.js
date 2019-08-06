import React from 'react'

class NewTask extends React.Component{
    constructor(){
        super()
    
        this.state ={
          input: ''
        }
      }
    
    
      input = (val) => {
        this.setState ({
          input: val
        })
      }
      add = () => {
        this.props.add(this.state.input)
        this.setState({
          input: ''
        })
      }



    render(){
        return(
            <div>
          <input val={this.state.input} onChange={(e) => this.input(e.target.value)} />

          <button onClick={this.add}>Add</button>
        </div>
        )
    }
}

export default NewTask