import React, { useEffect, useState } from "react";
import { Values } from "../Constants/Values";
import { Oprators } from "../Constants/Oprators";
import Result from "./calclulator/Result";
import Btn from "./calclulator/Btn";
import { evaluate } from "../utils/evaluate";

type props = {};
const Calculator: React.FC<props> = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    console.log(output);
  }, [output]);
  const lastInputElement = () => {
    return input[input.length - 1];
  };
  const AddNumber = (val: string) => {
    if (!input.endsWith(")") ) {
      setInput((preveInput) => preveInput + val);
      setNumber((preveNumber) => preveNumber + val);
    }
  };

  const addZero = (val: string) => {
    if (input !== "") {
      if (!isNaN(Number(lastInputElement()))) {
        setInput((preveInput) => preveInput + val);
        setNumber((preveNumber) => preveNumber + val);
      }
    }
  };
  const countElements = (element: string) => {
    let count = 0;
    for (let index = 0; index < input.length; index++) {
      if (input.charAt(index) === element) {
        count++;
      }
    }
    return count;
  };
  const addOpenParentheses = (val: string) => {
    if (!input.endsWith("(") && countElements(")") === countElements("(")) {
      // if it doesn't end with a Number and the last element is not ")" and there are letters and symbols do nothing
      if (
        isNaN(Number(lastInputElement())) &&
        !input.endsWith(")") &&
        !input.match(/[a-z]/)
      ) {
        setInput((preveInput) => preveInput + val);
        setNumber((preveNumber) => preveNumber + val);
      }
    }
  };
  const addCloseParentheses = (val: string) => {
    if (
      !isNaN(Number(lastInputElement())) &&
      countElements("(") > countElements(")")
    ) {
      setInput((preveInput) => preveInput + val);
      setNumber((preveNumber) => preveNumber + val);
    }
  };

  const addMinusOperator = (val: string) => {
    if (
      val === "-" &&
      (input === "" ||
        input.endsWith("(") ||
        input.endsWith("/") ||
        input.endsWith("*"))
    ) {
      setInput((preveInput) => preveInput + val);
      setNumber((preveNumber) => preveNumber + val);
    } else if (
      (!isNaN(Number(lastInputElement())) || lastInputElement() === ")")
    ) {
      setInput((preveInput) => preveInput + val);
      setNumber((preveNumber) => preveNumber + val);
    }
  };
  const addTrigonometrics = (val: string) => {
    if ( lastInputElement() !== ")" && isNaN(Number(lastInputElement()))) {
        switch (val) {
            case "sin":
                setInput((preveInput) => preveInput + `sin`);
                break;
            case "cos":
                setInput((preveInput) => preveInput + `cos`);
                break;
            case "tan":
                setInput((preveInput) => preveInput + `tan`);
                break;
            case "log":
                setInput((preveInput) => preveInput + `log`);
                break;



        }
      }
  };
  const addOperator = (val: string) => {
    if (!isNaN(Number(lastInputElement())) || lastInputElement() === ")") {
      switch (val) {
        case "^":
          if (
           
            countElements("(") === countElements(")")
          ) {
            setInput(`${input}^`);
          }
          break;
        default:
         
          if (lastInputElement() !== val) {
            setInput((preveInput) => preveInput + val);
            setNumber((preveNumber) => preveNumber + val);
          }
          break;
      }
    }
  };
  const calculate = () => {
    // if input is empty, do nothing
    if (input.length > 0) {
      // if last element is a number or ")", or "!", or "π" calculate
      if (!isNaN(Number(lastInputElement())) || input.endsWith(")")) {
        let result = input; // save the input state into result variable
        setInput(""); // reset the input state to empty string

        // // calculate sine
        // if (result.includes("sin")) {
        //     const inputNumber = eval(number);

        //     // if degrees is true, calculate sine in degrees
        //     this.setState({
        //         output: this.state.degree ? Math.sin(inputNumber * Math.PI / 180) : Math.sin(inputNumber),
        //         number: ""
        //     });
        // }

        // // calculate cosine
        // else if (result.includes("cos")) {
        //     const inputNumber = eval(this.state.number);

        //     // if degrees is true, calculate cosine in degrees
        //     this.setState({
        //         output: this.state.degree ? Math.cos(inputNumber * Math.PI / 180) : Math.cos(inputNumber),
        //         number: ""
        //     });
        // }

        // // calculate tan
        // else if (result.includes("tan")) {
        //     const inputNumber = eval(this.state.number);

        //     // if degrees is true, calculate tangent in degrees
        //     this.setState({
        //         output: this.state.degree ? Math.tan(inputNumber * Math.PI / 180) : Math.tan(inputNumber),
        //         number: ""
        //     });
        // }

        // for all common operators such as addition, subtraction, multiplication division and exponential
        // else {
        result = evaluate(result);
        if (result === "Infinity") {
          setOutput("Number is too big");
        } else {
          setOutput(result);
        }
        // }
      }
    }
  };
  return (
    <div className="bg-blue-300 w-auto h-auto float-left rounded-md py-9 px-5 ltr">
      <Result input={input} output={output} />
      <div className="mt-4 flex ">
        <div className="grid grid-cols-3  gap-6 mr-4">
          {Values.map((value, index) => (
            <Btn
              character={value.character}
              key={index}
              disabled={false}
              onClick={AddNumber}
            />
          ))}
          <Btn character="=" disabled={false} onClick={calculate} />
        </div>
        <div className="grid grid-cols-3  gap-6 ">
          {Oprators.map((opt, index) => (
            <Btn
              character={opt.character}
              key={index}
              disabled={false}
              onClick={
                opt.character === "("
                  ? addOpenParentheses
                  : opt.character === ")"
                  ? addCloseParentheses
                  : opt.character == "-"
                  ? addMinusOperator
                  : opt.character === "sin"  || opt.character === "cos" || opt.character === "tan" || opt.character === "log" 
                  ? addTrigonometrics
                  : addOperator
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
