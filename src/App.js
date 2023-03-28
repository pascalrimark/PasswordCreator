import './App.css';
import React from 'react';

function PasswordCreator(props) {
    if(props.amount == 0) {
      return null;
    } else {
      if(props.amount > 100) {
        return("To many signs.")
      } else {
        let pwd = "";
        let charset = "";

        if(props.UseCustom === true) {
          charset = props.CustomCharset
        } else {
          if(props.UseBiggerLetters === true) {
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          }
          if(props.UseLowerLetters === true) {
            charset += 'abcdefghijklmnopqrstuvwxyz'
          }
          if(props.UseNumbers === true) {
            charset += '0123456789'
          }
          if(props.UseSigns === true) {
            charset += '!§$%&/()=?{}[]'
          }
        }
        
        for (let i = 0; i < props.amount; i++) {
          pwd += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return(pwd)
      }
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signAmount: '',
      UseBiggerLetters: true,
      UseLowerLetters: true,
      UseNumbers: true,
      UseSigns: false,
      UseCustom: false,
      CustomCharset: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBLSettingsChange = this.handleBLSettingsChange.bind(this);
    this.handleLLSettingsChange = this.handleLLSettingsChange.bind(this);
    this.handleNumSettingsChange = this.handleNumSettingsChange.bind(this);
    this.handleSigSettingsChange = this.handleSigSettingsChange.bind(this);
    this.handleCustSettingsChange = this.handleCustSettingsChange.bind(this);
    this.handleCustomSignsChange = this.handleCustomSignsChange.bind(this);
  }

  handleChange(event) {
    if(event.target.value != null) {
      this.setState({signAmount: event.target.value}) 
    }
  }

  handleBLSettingsChange(event) {
    this.setState({UseBiggerLetters: event.target.checked})
  }
  handleLLSettingsChange(event) {
    this.setState({UseLowerLetters: event.target.checked}) 
  }
  handleNumSettingsChange(event) {
    this.setState({UseNumbers: event.target.checked}) 
  }
  handleSigSettingsChange(event) {
    this.setState({UseSigns: event.target.checked}) 
  }
  handleCustSettingsChange(event) {
    this.setState({UseCustom: event.target.checked}) 
  }
  handleCustomSignsChange(event) {
    this.setState({CustomCharset: event.target.value}) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Password Creator</h2>

          <input class="ip" type="text" placeholder="How many signs? (max allowed 99 signs)" value={this.state.signAmount} onChange={this.handleChange}></input>
          <input class="ip" type="range" min="1" max="99" value={this.state.signAmount} onChange={this.handleChange}></input>

          <label class="container">Bigger Letters   
              <input name="UseBL" type="checkbox" value="Bigger Case" onChange={this.handleBLSettingsChange.bind(this)} defaultChecked={true}></input>
          </label>
         
          <label class="container">Lower Letters   
              <input name="UseLL" type="checkbox" value="Lower Case" onChange={this.handleLLSettingsChange.bind(this)} defaultChecked={true}></input>
          </label>

          <label class="container">Numbers   
              <input name="UseNum" type="checkbox" value="Numbers" onChange={this.handleNumSettingsChange.bind(this)} defaultChecked={true}></input>
          </label>

          <label class="container">Signs   
              <input name="UseSig" type="checkbox" value="Signs" onChange={this.handleSigSettingsChange.bind(this)} ></input>
          </label>

          <label class="container">Bigger Letters
            <input name="UseCust" type="checkbox" value="Custom" onChange={this.handleCustSettingsChange.bind(this)} ></input>
          </label>

          <input class="ip" type="text" placeholder="Custom Signs (Create random passwords only using the chars that are defined here)" value={this.state.custom} onChange={this.handleCustomSignsChange.bind(this)}></input>

          <p id="pass">
            <PasswordCreator 
              amount={this.state.signAmount} 
              onChange={this.handleOperatorChange} 
              UseBiggerLetters={this.state.UseBiggerLetters}
              UseLowerLetters={this.state.UseLowerLetters}
              UseNumbers={this.state.UseNumbers}
              UseSigns={this.state.UseSigns}
              UseCustom={this.state.UseCustom}
              CustomCharset={this.state.CustomCharset} 
            />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
