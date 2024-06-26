import React, {Component} from "react"
import './Splash.css'
import { Redirect } from "react-router"
import LoaderLogo from "../../../components/loader/LoaderLogo"

function AnimatedSplash(props) {
     return (
          <div className="logo_wrapper">
               <div className="screen" style={{backgroundColor: "#000000"}}>
                    <LoaderLogo id="logo" theme={props.theme} />
               </div>
          </div>
     )
}

class Splash extends Component {
     constructor(props) {
          super(props)
          this.state = {
               redirect: false
          }
     }

     componentDidMount() {
          this.id = setTimeout(() => this.setState({redirect: true}), 5700)
     }

     componentWillMount() {
          clearTimeout(this.id)
     }

     render() {
          return this.state.redirect ? (
               <Redirect to='/home' />
          ) : (
               <AnimatedSplash theme={this.props.theme} />
          )
     }

}

export default Splash