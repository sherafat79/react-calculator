import React, { useContext, useState } from "react";
import { Values } from "../Constants/Values";
import { Operators } from "../Constants/Oprators";
import Result from "./calclulator/Result";
import Btn from "./calclulator/Btn";
import evaluate from "../utils/evaluate";
import AppContext from "../context/AppContext";

type props = {};
const Calculator: React.FC<props> = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const { insertResult } = useContext(AppContext);

    const lastInputElement = () => {
        return input[input.length - 1];
    };
    const AddNumber = (val: string) => {
        if (!input.endsWith(")")) {
            setInput((preveInput) => preveInput + val);
        }
    };

    const addZero = (val: string) => {
        if (input !== "") {
            if (!isNaN(Number(lastInputElement()))) {
                setInput((preveInput) => preveInput + val);
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

            if (
                isNaN(Number(lastInputElement())) &&
                !input.endsWith(")")
            ) {
                setInput((preveInput) => preveInput + val);

            }
        }
    };
    const addCloseParentheses = (val: string) => {
        if (
            !isNaN(Number(lastInputElement())) &&
            countElements("(") > countElements(")") && lastInputElement() !== " "
        ) {
            setInput((preveInput) => preveInput + val);

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

        } else if (
            (!isNaN(Number(lastInputElement())) || lastInputElement() === ")")
        ) {
            setInput((preveInput) => preveInput + val);

        }
    };
    const addTrigonometrics = (val: string) => {
        if (lastInputElement() !== ")" && isNaN(Number(lastInputElement()))) {
            switch (val) {
                case "sin":
                    setInput((preveInput) => preveInput + `sin `);
                    break;
                case "cos":
                    setInput((preveInput) => preveInput + `cos `);
                    break;
                case "tan":
                    setInput((preveInput) => preveInput + `tan `);
                    break;
                case "log":
                    setInput((preveInput) => preveInput + `log `);
                    break;
            }
        }
    };
    const addOperator = (val: string) => {
        if (!isNaN(Number(lastInputElement())) || lastInputElement() === ")") {
            switch (val) {
                case "^":
                    if (countElements("(") === countElements(")")) {
                        setInput(`${input}^`);
                    }
                    break;
                default:
                    if (lastInputElement() !== val) {
                        setInput((preveInput) => preveInput + val);

                    }
                    break;
            }
        }
    };
    const addSqrt = () => {
        setInput(`${input}√`);
    };
    const clear = () => {
        setInput("");
        setOutput("");
    }
    const calculate = () => {
        if (input.length > 0 && countElements("(") === countElements(")")) {
            if (!isNaN(Number(lastInputElement())) || input.endsWith(")")) {
                let exp = input;
                setInput("");
                let result = evaluate(exp);
                setOutput(result);
                insertResult({ result: `${exp} = ${result}` });
            }
        }
    };
    return (
        <div className="bg-blue-300 dark:bg-indigo-700 w-auto h-auto float-left rounded-md py-9 px-5 ltr">
            <Result input={input} output={output} />
            <div className="mt-4 flex ">
                <div className="grid grid-cols-3  gap-6 mr-4">
                    {Values.map((value, index) => (
                        <Btn
                            character={value.character}
                            key={index}
                            disabled={false}
                            onClick={
                                value.character === "0" ?
                                    addZero : value.character === "CLS" ? clear
                                        : AddNumber
                            }
                        />
                    ))}
                    <Btn character="=" disabled={false} onClick={calculate} />
                </div>
                <div className="grid grid-cols-3  gap-6 ">
                    {Operators.map((opt, index) => (
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
                                            : opt.character == "√"
                                                ? addSqrt
                                                : opt.character === "sin" || opt.character === "cos" || opt.character === "tan" || opt.character === "log"
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
