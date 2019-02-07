import React, { Component } from 'react';
import logo from './logo.svg';
import QrReader from 'react-qr-reader'
import './App.css';

class App extends Component {
  state = {
    result: '',
    status: 'display'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        status: 'display'
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  changeStatus = (status) => {
    this.setState({
      status
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.status === 'read' && (
        <div className="qr-reader">
          <QrReader
            delay={100}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <button onClick={() => this.changeStatus('display')}>Cancel</button>
        </div>
        )}
        {this.state.status === 'display' && this.state.result !== '' && (
        <div>
          <h4>Your QR Code says</h4>
          <h1>{this.state.result}</h1>
          <button onClick={() => this.changeStatus('read')}>Scan again</button>
        </div>
        )}
        {this.state.status === 'display' && this.state.result === '' && (
        <div>
          <button onClick={() => this.changeStatus('read')}>Scan QR Code</button>
        </div>
        )}
      </div>
    )
  }
}

export default App;
