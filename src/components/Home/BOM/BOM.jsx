import React from "react";
import "./BOM.css";
import {
  shape,
  motorPower,
  level,
  wheelsColour,
  size,
  colourAdult,
  colourChildren,
  colourTeen,
  grip,
  activity,
  speed,
  surface,
  wheels,
  method,
} from "../../../data";
const BOM = () => {
  return (
    <div className="bom_show">
      <div className="bom">
        <table className="bom_table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>UM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="level0">
              <td>0</td>
              <td>Final Scooter</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level1">
              <td>.1</td>
              <td>final Deck</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Material and Shape of the Deck</td>
              <td>1</td>
              <td>pcs</td>
            </tr>

            {shape.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level2">
              <td>..2</td>
              <td>Colour of the Deck</td>
              <td>20</td>
              <td>ml</td>
            </tr>
            {colourChildren.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>20</td>
                <td>ml</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Wheels</td>
              <td>2</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Type of Wheels</td>
              <td>2</td>
              <td>pcs</td>
            </tr>
            {wheels.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>2</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level2">
              <td>..2</td>
              <td>colour of Wheels</td>
              <td>2</td>
              <td>pcs</td>
            </tr>
            {colourAdult.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>30</td>
                <td>ml</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Motor Power</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Type of Motor Power</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            {motorPower.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Battery Pack</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Type of Battery Pack</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            {grip.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Brake System</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Type of Brake System</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            {speed.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Handlebar</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            <tr className="level2">
              <td>..2</td>
              <td>Type of Handlebar</td>
              <td>1</td>
              <td>pcs</td>
            </tr>
            {surface.map((item) => (
              <tr>
                <td>..3</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>pcs</td>
              </tr>
            ))}
            <tr className="level1">
              <td>.1</td>
              <td>Bearings</td>
              <td>4</td>
              <td>pcs</td>
            </tr>
            <tr className="level1">
              <td>.1</td>
              <td>Hardware</td>
              <td>4</td>
              <td>pcs</td>
            </tr>
          </tbody>
        </table>
      </div>
 
    </div>
  );
};

export default BOM;
