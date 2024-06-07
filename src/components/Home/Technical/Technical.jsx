import React from "react";
import "./Technical.css";
import {
  level,
  colourAdult,
  colourChildren,
  colourTeen,
  grip,
  activity,
  speed,
  surface,
  wheels,
  method,
  shape,
  size,
  motorPower,
} from "../../../data";
const Technical = ({
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
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table_container_header">
            <th>Level</th>
            <th></th>
            <th>Code</th>
            <th>Description</th>
            <th>Element Type</th>
            <th>Quantity</th>
            <th>UM</th>
            <th>Unitary Cost</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr className="finishing">
            <td>0</td>
            <td></td>
            <td>
            SC-{shape2.code}
              {size2.code}
              {colour2.code}{grip2.code}{speed2.code}{surface2.code}
              {wheels2.code}
              {wheelsColour.code}{activity2.code}{method2.code}
            </td>
            <td>Final Scooter</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>      {14 +
                9 +
                shape2.cost +
                5 +
                grip2.cost +
                speed2.cost +
                surface2.cost +
                6 +
                wheels2.cost +
                7.5 +
                activity2.cost +
                8 + 
                4 +
                6 + size2.cost}</td>
            <td>
              {14 +
                9 +
                shape2.cost +
                5 +
                grip2.cost +
                speed2.cost +
                surface2.cost +
                6 +
                wheels2.cost +
                7.5 +
                activity2.cost +
                8 + 
                4 +
                6 + size2.cost}
            </td>
          </tr>
          <tr className="operations">
            <td>.1</td>
            <td></td>
            <td>OP4</td>
            <td>
              Assembly of deck, Battery, Brake, Handlebar, wheels, Motor,
              bearings and hardware
            </td>
            <td>Cycle</td>
            <td>70</td>
            <td>min</td>
            <td>0,2</td>
            <td>14</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1</td>
            <td></td>
            <td>
              D-{shape2.code}
              {size2.code}
              {colour2.code}
            </td>
            <td>Semi-finished component "Deck"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{9 + shape2.cost + 5 + 6 + size2.cost}</td>
            <td>{9 + shape2.cost + 5 + 6 + size2.cost}</td>
          </tr>
          <tr className="operations">
            <td>..2</td>
            <td></td>
            <td>OP3</td>
            <td>Painting the Deck</td>
            <td>Cycle</td>
            <td>30</td>
            <td>min</td>
            <td>0.3</td>
            <td>9</td>
          </tr>
          <tr className="operations">
            <td>..2</td>
            <td></td>
            <td>OP2</td>
            <td>cutting the Deck</td>
            <td>Cycle</td>
            <td>20</td>
            <td>min</td>
            <td>0.3</td>
            <td>6</td>
          </tr>
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>PM-{shape2.code}</td>
            <td>Type AA component "Material and Shape of the Deck"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{shape2.cost}</td>
            <td>{shape2.cost}</td>
          </tr>
          {shape.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>PM-{item.code}</td>
              <td>Purchased {item.name} shape and material</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
                    <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>SS-{size2.code}</td>
            <td>Type ZZ component "size of the Deck"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{size2.cost}</td>
            <td>{size2.cost}</td>
          </tr>
          {size.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>SS-{item.code}</td>
              <td>Purchased {item.name} shape and material</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>DC-{colour2.code}</td>
            <td>Type BB component "Colour of the Deck"</td>
            <td>Virtual Material</td>
            <td>20</td>
            <td>ml</td>
            <td>0.25</td>
            <td>{colour2.cost}</td>
          </tr>
          {colourChildren.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>DC-{item.code}</td>
              <td>Raw Material {item.name} colour</td>
              <td> Material</td>
              <td>20</td>
              <td>ml</td>
              <td>0.25</td>
              <td>{item.cost}</td>
            </tr>
          ))}

          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>B-{grip2.code}</td>
            <td>Semi-finished component "Battery"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{grip2.cost}</td>
            <td>{grip2.cost}</td>
          </tr>
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>BA-{grip2.code}</td>
            <td>Type CC component "Type of Battery"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{grip2.cost}</td>
            <td>{grip2.cost}</td>
          </tr>
          {grip.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>BA-{item.code}</td>
              <td>Purchased {item.name}</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>B-{speed2.code}</td>
            <td>Semi-finished component "Brake"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{speed2.cost}</td>
            <td>{speed2.cost}</td>
          </tr>
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>BR-{speed2.code}</td>
            <td>Type DD component "Type of Brake"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{speed2.cost}</td>
            <td>{speed2.cost}</td>
          </tr>
          {speed.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>BR-{item.code}</td>
              <td>Purchased {item.name}</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>H-{surface2.code}</td>
            <td>Semi-finished component "Handlebar"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{surface2.cost}</td>
            <td>{surface2.cost}</td>
          </tr>
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>HA-{surface2.code}</td>
            <td>Type EE component "Type of Handlebar"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{surface2.cost}</td>
            <td>{surface2.cost}</td>
          </tr>
          {surface.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>HA-{item.code}</td>
              <td>Purchased {item.name}</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>
              W-{wheels2.code}
              {wheelsColour.code}
            </td>
            <td>Semi-finished component "Wheels"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{6 + wheels2.cost + 7.5}</td>
            <td>{6 + wheels2.cost + 7.5}</td>
          </tr>
          <tr className="operations">
            <td>..2 </td>
            <td></td>
            <td>OP1</td>
            <td>Painting the Wheels</td>
            <td>Cycle</td>
            <td>20</td>
            <td>min</td>
            <td>0.3</td>
            <td>6</td>
          </tr>

          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>WS-{wheels2.code}</td>
            <td>Type FF component "Type of Wheels"</td>
            <td>Virtual Material</td>
            <td>2</td>
            <td>pcs</td>
            <td>{wheels2.perCost}</td>
            <td>{wheels2.cost}</td>
          </tr>
          {wheels.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>WS-{item.code}</td>
              <td>Purchased {item.name} wheels</td>
              <td> Material</td>
              <td>2</td>
              <td>pcs</td>
              <td>{item.perCost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>WC-{wheelsColour.code}</td>
            <td>Type GG component "colour of Wheels"</td>
            <td>Virtual Material</td>
            <td>30</td>
            <td>ml</td>
            <td>0.25</td>
            <td>7.5</td>
          </tr>
          {colourAdult.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>WC-{item.code}</td>
              <td>Raw Mayerial {item.name} colour</td>
              <td> Material</td>
              <td>30</td>
              <td>ml</td>
              <td>0.25</td>
              <td>{30 * 0.25}</td>
            </tr>
          ))}
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>M-{activity2.code}</td>
            <td>Semi-finished component "Motor"</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{activity2.cost}</td>
            <td>{activity2.cost}</td>
          </tr>
          <tr className="type_component">
            <td>..2 </td>
            <td></td>
            <td>MO-{activity2.code}</td>
            <td>Type HH component "Type of Motor"</td>
            <td>Virtual Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{activity2.cost}</td>
            <td>{activity2.cost}</td>
          </tr>
          {motorPower.map((item) => (
            <tr key={item.id}>
              <td>..2</td>
              <td>{item.name}</td>
              <td>MO-{item.code}</td>
              <td>Purchased {item.name} per motor</td>
              <td> Material</td>
              <td>1</td>
              <td>pcs</td>
              <td>{item.cost}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>B-Z</td>
            <td>Purchased Semi-finished component "Bearings"</td>
            <td>Material</td>
            <td>4</td>
            <td>pcs</td>
            <td>2</td>
            <td>8</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
            <td></td>
            <td>H-X</td>
            <td>Purchased Semi-finished component "Hardware"</td>
            <td>Material</td>
            <td>4</td>
            <td>pcs</td>
            <td>1</td>
            <td>4</td>
          </tr>
          {/* Repeat the above <tr> for as many rows as you need */}
        </tbody>
      </table>
    </div>
  );
};

export default Technical;
