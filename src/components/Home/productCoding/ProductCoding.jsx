import React from "react";
import "./ProductCoding.css";
import {
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
const ProductCoding = ({
  shape2,
  size2,
  surface2,
  grip2,
  colour2,
  activity2,
  wheels2,
  method2,
  wheelsColour,
  speed2,
}) => {
  return (
    <div className="product">
      <table className="product-coding">
        <tbody>
          <tr className="green">
            <td>Scooter shape and material</td>
            <td>Code</td>
          </tr>
          {shape.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Scooter dimension</td>
            <td>Code</td>
          </tr>
          {size.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Deck's colour</td>
            <td>Code</td>
          </tr>
          {colourChildren.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Battery Capacity</td>
            <td>Code</td>
          </tr>
          {grip.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Braking System</td>
            <td>Code</td>
          </tr>
          {speed.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Handebar</td>
            <td>Code</td>
          </tr>
          {surface.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Wheels' type</td>
            <td>Code</td>
          </tr>
          {wheels.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Wheels' colour</td>
            <td>Code</td>
          </tr>
          {colourAdult.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>motorPower</td>
            <td>Code</td>
          </tr>
          {motorPower.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
          <tr className="green">
            <td>Delivery option</td>
            <td>Code</td>
          </tr>
          {method.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td>ROOT</td>
              <td colSpan={10}>SC-</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>POLYCODE</td>
              <td>{shape2.code}</td>
              <td>{size2.code}</td>
              <td>{colour2.code}</td>
              <td>{grip2.code}</td>
              <td>{speed2.code}</td>
              <td>{surface2.code}</td>
              <td>{wheels2.code}</td>
              <td>{wheelsColour.code}</td>
              <td>{activity2.code}</td>
              <td>{method2.code}</td>
            </tr>
          </tbody>
          <tr>
            <td>Final Product configured Code:</td>
            <td colSpan={10}>
              {`SC-${shape2.code}${size2.code}${colour2.code}${grip2.code}${speed2.code}${surface2.code}${wheels2.code}${wheelsColour.code}${activity2.code}${method2.code}`}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductCoding;
