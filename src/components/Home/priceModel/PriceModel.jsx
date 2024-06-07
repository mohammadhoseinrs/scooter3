import React from "react";
import "./PriceModel.css";

const PriceModel = ({
  allCost,
  level2,
  setLevel2,
  shape2,
  setShape2,
  size2,
  setSize2,
  colour2,
  setColour2,
  grip2,
  setGrip2,
  activity2,
  setActivity2,
  speed2,
  setSpeed2,
  surface2,
  setSurface2,
  wheels2,
  setWheels2,
  method2,
  setMethod2,
  total2,
  setTotal2,
  setWheelsColour,
  wheelsColour,
}) => {
  console.log(allCost);

  return (
    <div>
      <table className="price-model-table">
        <thead>
          <tr>
            <th colSpan={3}>Header 1</th>
          </tr>
        </thead>
        <tbody>
          <tr className="question_mark">
            <td>What is your desired skateboard shape and material?</td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{shape2.name}</td>
            <td>{shape2.cost} </td>
            <td>{shape2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What are the preferred dimensions for the scooter? Please specify
              if it's for children, teens, or adults.
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{size2.name}</td>
            <td>{size2.cost} </td>
            <td>{size2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>What is your desired deck's colour?</td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{colour2.name}</td>
            <td>{colour2.cost} </td>
            <td>{colour2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What battery capacity do you prefer for your electric scooter,
              considering factors like range and performance?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{grip2.name}</td>
            <td> {grip2.cost}</td>
            <td>{grip2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What type of braking system are you considering for your electric
              scooter?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{speed2.name}</td>
            <td>{speed2.cost} </td>
            <td>{speed2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What type of handlebar design are you considering for your
              electric scooter?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{surface2.name}</td>
            <td>{surface2.cost} </td>
            <td>{surface2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>What wheel size do you prefer for your electric scooter ?</td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{wheels2.name}</td>
            <td>{wheels2.cost} </td>
            <td>{wheels2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What colour do you prefer for your electric scooter's wheels ?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{wheelsColour.name}</td>
            <td>7.5 </td>
            <td>{wheelsColour.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What motor power range are you considering for your electric
              scooter?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{activity2.name}</td>
            <td>{activity2.cost} </td>
            <td>{activity2.price}</td>
          </tr>
          <tr className="question_mark">
            <td>
              What delivery option do you prefer for your electric scooter?
            </td>
            <td>cost </td>
            <td>price</td>
          </tr>
          <tr>
            <td>{method2.name}</td>
            <td>{method2.name === 'Home Delivery' ? 0:0} </td>
            <td>{method2.name === 'Home Delivery' ? 15:0} </td>
          </tr>
          <tr>
            <td>Total</td>
            <td> {total2.cost}</td>
            <td>{total2}</td>
          </tr>
          {/* Repeat the above <tr> for as many rows as you need */}
        </tbody>
      </table>
      <div>
        <div>
          <p>sum of the cost : {allCost} </p>
          <p>Net Profit:{total2-allCost}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceModel;
