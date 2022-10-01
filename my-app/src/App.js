import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk'



const token = 'Your algod API token';
const server = 'http://127.0.0.1';
const port = 3000;
const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});



function App() {
  return (   
    <div id="bg">
      
     <form>
     <div class= "form-field">
        <button class="btn"  type="submit">Connecting to Algod wallet</button>
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
