import React, { useState } from "react";
import "./Home.css";
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
} from "../../data";
import { Commercial } from "./commercial/Commercial";
import BOM from "./BOM/BOM";
import PriceModel from "./priceModel/PriceModel";
import Technical from "./Technical/Technical";
import ProductCoding from "./productCoding/ProductCoding";
import Configure from "./configure/Configure";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("commercial");

  const [shape2, setShape2] = React.useState(shape[0]);
  const [size2, setSize2] = React.useState(size[0]);
  const [colour2, setColour2] = React.useState(colourChildren[0]);
  const [grip2, setGrip2] = React.useState(grip[0]);
  const [activity2, setActivity2] = React.useState(motorPower[0]);
  const [speed2, setSpeed2] = React.useState(speed[0]);
  const [surface2, setSurface2] = React.useState(surface[0]);
  const [wheels2, setWheels2] = React.useState(wheels[0]);
  const [method2, setMethod2] = React.useState(method[0]);
  const [total2, setTotal2] = React.useState(0);
  const [show2, setShow2] = React.useState(false);
  const [level2, setLevel2] = React.useState(level[0]);
  const [wheelsColour, setWheelsColour] = React.useState(colourAdult[0]);
  console.log(shape2);
  const [activeItem, setActiveItem] = useState("commercial");
  const allCost =
    14 +
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
    size2.cost;
  React.useEffect(() => {
    const total =
      shape2.price +
      size2.price +
      colour2.price +
      grip2.price +
      activity2.price +
      speed2.price +
      surface2.price +
      wheels2.price +
      method2.price +
      wheelsColour.price;
    setTotal2(total);
  }, [
    shape2,
    size2,
    colour2,
    grip2,
    activity2,
    speed2,
    surface2,
    wheels2,
    method2,
  ]);
  const renderComponent = () => {
    switch (activeComponent) {
      case "commercial":
        return (
          <Commercial
          wheelsColour={wheelsColour}
          setWheelsColour={setWheelsColour}
            shape2={shape2}
            level2={level2}
            setLevel2={setLevel2}
            setShape2={setShape2}
            size2={size2}
            setSize2={setSize2}
            colour2={colour2}
            setColour2={setColour2}
            grip2={grip2}
            setGrip2={setGrip2}
            activity2={activity2}
            setActivity2={setActivity2}
            speed2={speed2}
            setSpeed2={setSpeed2}
            surface2={surface2}
            setSurface2={setSurface2}
            wheels2={wheels2}
            setWheels2={setWheels2}
            method2={method2}
            setMethod2={setMethod2}
            total2={total2}
            setTotal2={setTotal2}
          />
        );
      case "bom":
        return <BOM />;
      case "priceModel":
        return <PriceModel 
        allCost={allCost}
        wheelsColour={wheelsColour}
        setWheelsColour={setWheelsColour}
          shape2={shape2}
          level2={level2}
          setLevel2={setLevel2}
          setShape2={setShape2}
          size2={size2}
          setSize2={setSize2}
          colour2={colour2}
          setColour2={setColour2}
          grip2={grip2}
          setGrip2={setGrip2}
          activity2={activity2}
          setActivity2={setActivity2}
          speed2={speed2}
          setSpeed2={setSpeed2}
          surface2={surface2}
          setSurface2={setSurface2}
          wheels2={wheels2}
          setWheels2={setWheels2}
          method2={method2}
          setMethod2={setMethod2}
          total2={total2}
          setTotal2={setTotal2} />;
      case "technical":
        return <Technical  
        wheelsColour={wheelsColour}
        setWheelsColour={setWheelsColour}
          shape2={shape2}
          level2={level2}
          setLevel2={setLevel2}
          setShape2={setShape2}
          size2={size2}
          setSize2={setSize2}
          colour2={colour2}
          setColour2={setColour2}
          grip2={grip2}
          setGrip2={setGrip2}
          activity2={activity2}
          setActivity2={setActivity2}
          speed2={speed2}
          setSpeed2={setSpeed2}
          surface2={surface2}
          setSurface2={setSurface2}
          wheels2={wheels2}
          setWheels2={setWheels2}
          method2={method2}
          setMethod2={setMethod2}
          total2={total2}
          setTotal2={setTotal2}
        
        />;
      case "productCoding":
        return (
          <ProductCoding
          wheelsColour={wheelsColour}
            shape2={shape2}
            size2={size2}
            colour2={colour2}
            grip2={grip2}
            activity2={activity2}
            speed2={speed2}
            surface2={surface2}
            wheels2={wheels2}
            method2={method2}
          />  
        );
        case 'configure':
          return(
            <Configure          wheelsColour={wheelsColour}
            setWheelsColour={setWheelsColour}
              shape2={shape2}
              level2={level2}
              setLevel2={setLevel2}
              setShape2={setShape2}
              size2={size2}
              setSize2={setSize2}
              colour2={colour2}
              setColour2={setColour2}
              grip2={grip2}
              setGrip2={setGrip2}
              activity2={activity2}
              setActivity2={setActivity2}
              speed2={speed2}
              setSpeed2={setSpeed2}
              surface2={surface2}
              setSurface2={setSurface2}
              wheels2={wheels2}
              setWheels2={setWheels2}
              method2={method2}
              setMethod2={setMethod2}
              total2={total2}
              setTotal2={setTotal2}/>
          )
      default:
        return <Commercial />;
    }
  };
  return (
    <>
      <div className="home">
        <nav className="navbar">
          <ul>
            <li
              onClick={() => {
                setActiveComponent("commercial");
                setActiveItem("commercial");
              }}
              className={activeItem === "commercial" ? "active" : ""}
            >
              Commercial Model
            </li>
            <li
              onClick={() => {
                setActiveComponent("productCoding");
                setActiveItem("productCoding");
              }}
              className={activeItem === "productCoding" ? "active" : ""}
            >
              Product Coding
            </li>
            <li
              onClick={() => {
                setActiveComponent("bom");
                setActiveItem("bom");
              }}
              className={activeItem === "bom" ? "active" : ""}
            >
              BOM & Production Cycles
            </li>
            <li
              onClick={() => {
                setActiveComponent("configure");
                setActiveItem("configure");
              }}
              className={activeItem === "configure" ? "active" : ""}
            >
              configured Technical Production Model
            </li>
            <li
              onClick={() => {
                setActiveComponent("technical");
                setActiveItem("technical");
              }}
              className={activeItem === "technical" ? "active" : ""}
            >
              Virtual Technical Production Model
            </li>
            <li
              onClick={() => {
                setActiveComponent("priceModel");
                setActiveItem("priceModel");
              }}
              className={activeItem === "priceModel" ? "active" : ""}
            >
              Price Model
            </li>
          </ul>
        </nav>
        {renderComponent()}
      </div>
    </>
  );
};

export default Home;
