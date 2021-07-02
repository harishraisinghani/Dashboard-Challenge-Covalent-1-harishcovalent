import Title from "../components/Title";
import Card from "../components/Card";
import "../styles.css";
const Screen_one = (props) => {
  console.log(props.data)
  return (
    <div>
      <Title name="SpiritSwap Pools"/>
      <div className="containerCards">
      {
        
        props.data.data !== [] ? props.data.map( (dat) => {
          return (
            <div className="flex-one">
              <Card data = {dat}/>
            </div>
          )
        }) : <p>No Data</p>
        
      }
        
      </div>
      
    </div>
  );
};

export default Screen_one;
