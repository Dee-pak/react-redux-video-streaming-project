import React from 'react';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null}

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId : '170973719497-fk3s66uio7vhpv67c89tnk4clklv6ch4.apps.googleusercontent.com',
        scope : 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn : this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(() => {this.setState({isSignedIn : this.auth.isSignedIn.get()})})
      })
    });
  }

  renderAuthButton(){
    if (this.state.isSignedIn == null){
      return <div>Loading...</div>
    } else if (this.state.isSignedIn){
      return (
        <button className="ui red google button" onClick={() => {this.auth.signOut()}}>
          <i className="google icon"/>
          Sign Out
        </button>
      )
    }else{
      return (
        <button className="ui blue google button" onClick={() => {this.auth.signIn()}}>
          <i className="google icon"/>
            Sign in with Google
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth