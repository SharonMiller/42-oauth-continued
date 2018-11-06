
import React from 'react'
import { connect } from 'react-redux'
import * as route from '../../action/route.js'

export class LandingContainer extends React.Component {
  render() {
    let gitHubLoginBaseUrl = 'https://github.com/login/oauth/authorize';
    let options = {
      client_id: `15bcb7c2a5c0c8e61518`,
      redirect_uri: `http://localhost:3000/oauth`,
      scope: ``,
      state: ``,
      allow_signup: `true`
    };

    let querystring = Object.keys(options).map(key => `${key}=${encodeURIComponent(options[key])}`).join('&');
    let gitHubLoginURL = `${gitHubLoginBaseUrl}?${querystring}`;


    return (
      <div className='landing-container'>
        <button onClick={this.props.goToLogin}>Login</button>
        <button onClick={this.props.goToSignup}>SignUp</button>
        <a href={gitHubLoginURL}>Login with Github!</a>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(route.switchRoute('/login')),
  goToSignup: () => dispatch(route.switchRoute('/signup')),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)