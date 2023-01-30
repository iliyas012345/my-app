import logo from './logo.svg';
import './App.css';

  

function App() {
  const data =[
    {
     card :"free",
     price:"$0",
     User:"Single User",
     Storage:"5GB storage",
     public:"Unlimited Public Project",
     Access:"community Access",
     private:"Unlimited private projects",
     Support:"Dedicated Phone Support",
     Subdomin:"Free Subdomin",
     Reports:"Monthly Status Reports"

    }]
    const data1=[
    {
      card :"PLUS",
      price:"$9",
      User:"5 User",
      Storage:"50GB storage",
      public:"Unlimited Public Project",
      Access:"community Access",
      private:"Unlimited private projects",
      Support:"Dedicated Phone Support",
      Subdomin:"Free Subdomin",
      Reports:"Monthly Status Reports"
 
     }
  ]
  const data2=[
    {
      card :"PRO",
      price:"$49",
      User:"Unlimited Users",
      Storage:"150GB storage",
      public:"Unlimited Public Project",
      Access:"community Access",
      private:"Unlimited private projects",
      Support:"Dedicated Phone Support",
      Subdomin:"Unlimited Free Subdomins",
      Reports:"Monthly Status Reports"
 
     }
  ]
  return (
    <div className="App">
      {data.map((item,ele)=>(
        <Samplecard
        key={ele}
        card={item.card}
        price={item.price}
        User ={item.User}
        Storage={item.Storage}
        public={item.public}
        Access={item.Access}
        private={item.private}
        Support={item.Support}
        Subdomin={item.Subdomin}
        Reports={item.Reports} />

      ))}
      {data1.map((item,ele)=>(
        <Samplecard1
        key={ele}
        card={item.card}
        price={item.price}
        User ={item.User}
        Storage={item.Storage}
        public={item.public}
        Access={item.Access}
        private={item.private}
        Support={item.Support}
        Subdomin={item.Subdomin}
        Reports={item.Reports} />

      ))}
      {data2.map((item,ele)=>(
        <Samplecard2
        key={ele}
        card={item.card}
        price={item.price}
        User ={item.User}
        Storage={item.Storage}
        public={item.public}
        Access={item.Access}
        private={item.private}
        Support={item.Support}
        Subdomin={ item.Subdomin}
        Reports={item.Reports} />

      ))}

   </div>
  );
}

export default App;

function Samplecard(props){
  return(
    <div className='card-content'>
     
      <h2 className="hander">{props.card}</h2>
      <h1 className="subhander">{props.price}<sub>/month</sub></h1>
      <hr></hr>
      
      <p><i className="fa-solid fa-check"></i> {props.User}</p>
      <p><i className="fa-solid fa-check"></i> {props.Storage}</p>
      <p><i className="fa-solid fa-check" ></i> {props.public}</p>
      <p><i className="fa-solid fa-check"></i> {props.Access}</p>
      <p><i className="fa-solid fa-xmark"></i> {props. private}</p>
      <p><i className="fa-solid fa-xmark"></i> {props. Support }</p>
      <p><i className="fa-solid fa-xmark"></i> {props. Subdomin }</p>
      <p><i className="fa-solid fa-xmark"></i> {props. Reports }</p>
      <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
      
</div>
  )
}
function Samplecard1(props){
  return(
    <div className='card-content'>
     
      <h2 className="hander">{props.card}</h2>
      <h1 className="subhander">{props.price}<sub>/month</sub></h1>
      <hr></hr>
      
      <h4><i className="fa-solid fa-check"></i> {props.User}</h4>
      <p><i className="fa-solid fa-check"></i> {props.Storage}</p>
      <p><i className="fa-solid fa-check"></i> {props.public}</p>
      <p><i className="fa-solid fa-check"></i> {props.Access}</p>
      <p> <i className="fa-solid fa-check"></i>{props. private}</p>
      <p> <i className="fa-solid fa-check"></i>{props. Support }</p>
      <p><i className="fa-solid fa-check"></i> {props. Subdomin }</p>
      <p><i className="fa-solid fa-xmark"></i> {props. Reports }</p>
      <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
  )
}
function Samplecard2(props){
  return(
    <div className='card-content'>
     
      <h2 className="hander">{props.card}</h2>
      <h1 className="subhander">{props.price}<sub>/month</sub></h1>
      <hr></hr>
      
      <h4><i className="fa-solid fa-check"></i> {props.User}</h4>
      <p><i className="fa-solid fa-check"></i> {props.Storage}</p>
      <p><i className="fa-solid fa-check"></i> {props.public}</p>
      <p><i className="fa-solid fa-check"></i> {props.Access}</p>
      <p> <i className="fa-solid fa-check"></i>{props. private}</p>
      <p><i className="fa-solid fa-check"></i> {props. Support }</p>
      <p><i className="fa-solid fa-check"></i>{props. Subdomin }</p>
      <p><i className="fa-solid fa-check"></i> {props. Reports }</p>
      
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
      
</div>

  )
 
 
}