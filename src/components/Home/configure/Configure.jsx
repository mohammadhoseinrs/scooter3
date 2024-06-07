import React from "react";
import "./Configure.css";

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
const Configure = ({
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
            <td>
              SC-{shape2.code}
              {size2.code}
              {colour2.code}
              {grip2.code}
              {speed2.code}
              {surface2.code}
              {wheels2.code}
              {wheelsColour.code}
              {activity2.code}
              {method2.code}
            </td>
            <td>Final Scooter</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
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
                6 +
                size2.cost}
            </td>
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
                6 +
                size2.cost}
            </td>
          </tr>
          <tr className="operations">
            <td>.1</td>
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
            <td>
              D-{shape2.code}
              {size2.code}
              {colour2.code}
            </td>
            <td>
              Semi-finished component "Deck" for {size2.name} consists of{" "}
              {shape2.name} material and {colour2.name} colour
            </td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{9 + shape2.cost + 5 + 6 + size2.cost}</td>
            <td>{9 + shape2.cost + 5 + 6 + size2.cost}</td>
          </tr>
          <tr className="operations">
            <td>..2</td>
            <td>OP3</td>
            <td>Cutting the Deck</td>
            <td>Cycle</td>
            <td>20</td>
            <td>min</td>
            <td>0.3</td>
            <td>6</td>
          </tr>
          <tr className="operations">
            <td>..2</td>
            <td>OP2</td>
            <td>Painting the Deck</td>
            <td>Cycle</td>
            <td>30</td>
            <td>min</td>
            <td>0.3</td>
            <td>9</td>
          </tr>

          <tr>
            <td>..2 </td>
            <td>PM-{shape2.code}</td>
            <td> {shape2.name} material</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{shape2.cost}</td>
            <td>{shape2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>SS-{size2.code}</td>
            <td>{size2.name} Size</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{size2.cost}</td>
            <td>{size2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>DC-{colour2.code}</td>
            <td>{colour2.name}</td>
            <td> Material</td>
            <td>20</td>
            <td>ml</td>
            <td>0.25</td>
            <td>{colour2.cost}</td>
          </tr>

          <tr className="semi_finsided">
            <td>.1 </td>
            <td>B-{grip2.code}</td>
            <td>Semi-finished component "Battery" with the {grip2.name}</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{grip2.cost}</td>
            <td>{grip2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>BA-{grip2.code}</td>
            <td> {grip2.name}</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{grip2.cost}</td>
            <td>{grip2.cost}</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
            <td>B-{speed2.code}</td>
            <td>Semi-finished component "Brake" consists of {speed2.name}</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{speed2.cost}</td>
            <td>{speed2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>BR-{speed2.code}</td>
            <td> {speed2.name}</td>
            <td> Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{speed2.cost}</td>
            <td>{speed2.cost}</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
            <td>H-{surface2.code}</td>
            <td>
              Semi-finished component "Handlebar" in type of {surface2.name}
            </td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{surface2.cost}</td>
            <td>{surface2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>HA-{surface2.code}</td>
            <td>{surface2.name}</td>
            <td> Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{surface2.cost}</td>
            <td>{surface2.cost}</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
            <td>
              W-{wheels2.code}
              {wheelsColour.code}
            </td>
            <td>
              Semi-finished component "Wheels" in size of {wheels2.name} and{" "}
              {wheelsColour.name} colour
            </td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{6 + wheels2.cost + 7.5}</td>
            <td>{6 + wheels2.cost + 7.5}</td>
          </tr>
          <tr className="operations">
            <td>..2 </td>
            <td>OP1</td>
            <td>Painting the Wheels</td>
            <td>Cycle</td>
            <td>20</td>
            <td>min</td>
            <td>0.3</td>
            <td>6</td>
          </tr>

          <tr>
            <td>..2 </td>
            <td>WS-{wheels2.code}</td>
            <td>{wheels2.name}</td>
            <td>Material</td>
            <td>2</td>
            <td>pcs</td>
            <td>{wheels2.perCost}</td>
            <td>{wheels2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>WC-{wheelsColour.code}</td>
            <td>{wheelsColour.name}</td>
            <td>Material</td>
            <td>30</td>
            <td>ml</td>
            <td>0.25</td>
            <td>7.5</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
            <td>M-{activity2.code}</td>
            <td>Semi-finished component "Motor" in type of {activity2.name}</td>
            <td>Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{activity2.cost}</td>
            <td>{activity2.cost}</td>
          </tr>
          <tr>
            <td>..2 </td>
            <td>MO-{activity2.code}</td>
            <td>{activity2.name}</td>
            <td> Material</td>
            <td>1</td>
            <td>pcs</td>
            <td>{activity2.cost}</td>
            <td>{activity2.cost}</td>
          </tr>
          <tr className="semi_finsided">
            <td>.1 </td>
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

export default Configure;
