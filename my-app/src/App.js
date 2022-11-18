import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk'


// export default ConnectAlgoSigner

function App() {

  const token = 'Your algod API token';
  const server = 'http://127.0.0.1';
  const port = 3000;
  const client = new algosdk.Algodv2(token, server, port);
  
  const ConnectAlgoSigner = ({userAccount}) =>{
  
    const connectAlgoSigner = async () => {
      let resp = await ConnectAlgoSigner.connect()
      console.log(resp)
      getUserAccount()
    }
  
    const getUserAccount = async () =>{
      userAccount.current = await ConnectAlgoSigner.accounts({
        ledger: 'TestNet'
      })
      console.log(userAccount.current)
    }
  }
  return (   
    <div id="bg">
      
     <form>
     <div class= "form-field">
        <button class="btn"  type="submit" onClick={connectAlgoSigner}>Connecting to Algod wallet</button>
      </div>
     <p>Public Address</p>
      <div class= "form-field">
      
        <input type="text" placeholder="Public address" required=""></input>
      </div>
      <p>Amount of Algod</p>
      <div class= "form-field">
        <input type="number" placeholder="0" required=""></input>
      </div>
      <div class= "form-field">
        <button class="btn" type="submit">Transfer</button>
      </div>
      </form> 
      
    </div>
    
  )
}

export default App;
