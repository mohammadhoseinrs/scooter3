import React from "react";
import "./Commercial.css";
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
export const Commercial = ({
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
  console.log(size2);
  return (
    <>
      <table className="beautiful-table">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What is your riding experience level?</td>
            <td>
              <select
                value={level2.name}
                onChange={() => {
                  const selectedValue = level.find(
                    (item) => item.name === event.target.value
                  );
                  setLevel2(selectedValue);
                }}
              >
                {level.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>What is your desired skateboard shape and material?</td>
            <td>
              <select
                value={shape2.name}
                onChange={() => {
                  const selectedValue = shape.find(
                    (item) => item.name === event.target.value
                  );
                  setShape2(selectedValue);
                }}
              >
                {shape.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{shape2.price}</td>
          </tr>
          <tr>
            <td>
              What are the preferred dimensions for the scooter? Please specify
              if it's for children, teens, or adults.
            </td>
            <td>
              {" "}
              <select
                value={size2.name}
                onChange={() => {
                  const selectedValue = size.find(
                    (item) => item.name === event.target.value
                  );
                  setSize2(selectedValue);
                }}
              >
                {size.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>{" "}
            </td>
            <td>{size2.price}</td>
          </tr>
          <tr>
            <td>What is your desired deck's colour?</td>
            <td>

                <select
                  value={colour2.name}
                  onChange={(event) => {
                    const selectedValue = colourChildren.find(
                      (item) => item.name === event.target.value
                    );
                    setColour2(selectedValue);
                  }}
                >
                  {colourChildren.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              
            </td>
            <td>{colour2.price}</td>
          </tr>
          <tr>
            <td>What battery capacity do you prefer for your electric scooter, considering factors like range and performance?</td>
            <td>
              <select
                value={grip2.name}
                onChange={(event) => {
                  const selectedValue = grip.find(
                    (item) => item.name === event.target.value
                  );
                  setGrip2(selectedValue);
                }}
              >
                {grip.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{grip2.price}</td>
          </tr>

          <tr>
            <td>What type of braking system are you considering for your electric scooter?</td>
            <td>
              <select
                value={speed2.name}
                onChange={(event) => {
                  const selectedValue = speed.find(
                    (item) => item.name === event.target.value
                  );
                  setSpeed2(selectedValue);
                }}
              >
                {speed.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{speed2.price}</td>
          </tr>
          <tr>
            <td>What type of handlebar design are you considering for your electric scooter?</td>
            <td>
              <select
                value={surface2.name}
                onChange={(event) => {
                  const selectedValue = surface.find(
                    (item) => item.name === event.target.value
                  );
                  setSurface2(selectedValue);
                }}
              >
                {surface.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{surface2.price}</td>
          </tr>
          <tr>
            <td>What wheel size do you prefer for your electric scooter ? </td>
            <td>
              <select
                value={wheels2.name}
                onChange={(event) => {
                  const selectedValue = wheels.find(
                    (item) => item.name === event.target.value
                  );
                  setWheels2(selectedValue);
                }}
              >
                {wheels.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{wheels2.price}</td>
          </tr>
          <tr>
            <td>What colour do you prefer for your electric scooter's wheels ? </td>
            <td>
              <select
                value={wheelsColour?.name}
                onChange={(event) => {
                  const selectedValue = colourAdult.find(
                    (item) => item.name === event.target.value
                  );
                  setWheelsColour(selectedValue);
                }}
              >
                {colourAdult.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{wheelsColour.price}</td>
          </tr>
          <tr>
            <td>What motor power range are you considering for your electric scooter?</td>
            <td>
              <select
                value={activity2.name}
                onChange={(event) => {
                  const selectedValue = motorPower.find(
                    (item) => item.name === event.target.value
                  );
                  setActivity2(selectedValue);
                }}
              >
                {motorPower.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{activity2.price}</td>
          </tr>

          <tr>
            <td>What delivery option do you prefer for your electric scooter?</td>
            <td>
              <select
                value={method2.name}
                onChange={(event) => {
                  const selectedValue = method.find(
                    (item) => item.name === event.target.value
                  );
                  setMethod2(selectedValue);
                }}
              >
                {method.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{method2.price}</td>
          </tr>
        </tbody>
      </table>
      <div className="commercial_item">
        <div className="codingProduct">
          <p>Product Code:</p>
          <p>
          {`SC-${shape2.code}${size2.code}${colour2.code}${grip2.code}${speed2.code}${surface2.code}${wheels2.code}${wheelsColour.code}${activity2.code}${method2.code}`}
          </p>
        </div>

        <div className="ProductPrice">
          <p>Product Price:</p>
          <p>{total2}</p>
        </div>
      </div>
    </>
  );
};
