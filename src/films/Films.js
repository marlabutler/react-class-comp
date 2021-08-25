import React, { Component } from "react"

class Films extends Component {
  // State & Props
    constructor(props) {
    super(props)
    console.log(this.props) 
    this.state = {
        loaded: false,
        results: [],
        } 
        console.log(this.state)
    }

    // this is the same goal as useEffect(())-> {}, []
    async componentDidMount() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films")
    let json = await res.json()
    
        this.setState({
            loaded: true,
            results: json 
        })

    }


    // After the results are set, if the people [] is empty, get all the people from each film
    render() {
        let { favNumber } = this.props 
        return (
            <div>
                {favNumber}
            {!this.state.loaded 
                ? "Loading"
                /*Display films with a custom Film Class Comp? */
                : this.state.results.map((film)=> <li key={film.id}>{film.title}</li>)
            }
            {/* Display peoples names? */}
            </div>
        )
    }
}

export default Films 