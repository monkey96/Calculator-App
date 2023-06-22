import {
    useState,
    useRef
  } from "react"; 

import Display from "./Display";
import Buttons from "./Buttons";
import "./styles/Calculator.css";

/*

to do : 1. deal with possibility of dividing a number by zero
        2. make it pretty 

*/


  function Calculator() {

    const [input, setInput] = useState('0');
    // input is going to be number, starting from '0'
    const [result, setResult] = useState('');
    // result will be string, starting with empty
    const [previousInput, setPrevInput] = useState(null);

    const [previousOp, setPrevOp] = useState(null);

    const [newInputBool, setNewInput] = useState('true');


    // function responsible for all the number inputs, from 0 to 9 and . to make it float value
    function addInput(number) {

      //console.log(`input: ${input}, number: ${number}, newInputBool: ${newInputBool}`);
      if (newInputBool) {
        if (number == '.') {
          setInput('0.');
          setNewInput(false);
          return;
        }
        setInput(number);
        setNewInput(false);
        return;
      }
      else {
        if(input.includes('.')&& number == '.'){
          return;
        }
        if(input == '0') {
          setInput(number);
          return;
        }
        setInput(input + number);
        return;
      }
      
    }


    // function for operation that require only one input, then operation.
    // result will be updated to show string of previous result + new operation
    // if previous result is empty, just input + new operation
    // input is updated to be the result of operation.
    // includes '+/-', '1/x', 'x^2' '2rootx'
    function singleOp(operation) {

      let newInput;
      let newResult;

      switch (operation) {
        case '+/-' : 
          if (input == '0') {
          }
          else {
            if(input[0] == '-') {
              setInput(input.substring(1));
            }
            else {
              setInput('-' + input);
            }
          }
          setNewInput(false);
          return;
        
        case '1/x' :
          if (input == '0') {
            console.log("error, cannot divide by 0");
            alert("Cannot divide by zero");
            return;
          }
          else {
            newResult = '1/(' + input + ')';
            newInput = 1 / Number(input)
            break;
          }

        case 'x^2' :
          newResult = 'sqr(' + input + ')';
          newInput = Number(input) * Number(input);
          break;

        case '2rootx' :
          if (input[0] == '-') {
            // cannot support square root of negative number,
            console.log("error, cannot calculate square root of negative number");
            alert("Cannot calculate square root of negative number");
            return;
          }
          else {
            newResult = '√(' + input + ')';
            newInput = Math.sqrt(Number(input));
            break;
          }

        default: 
          console.log("error");
          break;


      }

      setInput(String(newInput));
      setResult(String(newResult));
      setPrevOp(null);
      setNewInput(true);
      return;
    }

    // function for % and + and - and * and /
    function doubleOp(operation) {

      let newInput;
      let newResult;

      if (previousInput === null) {
        newResult = input + ' ' + operation;
        setPrevInput(input);
        setPrevOp(operation);
        setResult(newResult);
        setNewInput(true);
        return;
      }
      else{
        if (previousOp == '+') {
          newInput = Number(previousInput) + Number(input);

        }
        else if (previousOp == '-') {
          newInput = Number(previousInput) - Number(input);

        }
        else if (previousOp == '*') {
          newInput = Number(previousInput) * Number(input);

        }
        else if (previousOp == '/') {
          if (Number(input) == 0) {
            console.log("Cannot divide by 0");
            alert("cannot divide by zero");
            return;
          }
          newInput = Number(previousInput) / Number(input);
        }
        else if (previousOp == '%') {
          if (Number(input) == 0 ) {
            console.log("Cannot divide by 0");
            alert("cannot divide by zero");
            return;
          }
          newInput = Number(previousInput) % Number(input);

        }
        else {
          console.log("error");
          return;
        }
        
        setPrevOp(operation);
        setPrevInput(String(newInput));
        newResult = String(newInput) + ' ' + operation;
        setInput(String(newInput));
        setResult(String(newResult));
        setNewInput(true);
      }
      

    }

    // function for C button. will clear result to be empty string, and input to be 0
    function clean() {
      console.log('clear is called')
      setInput('0');
      setResult('');
      setPrevInput(null);
      setPrevOp(null);
      setNewInput(true);
    }

    // removes last character from input
    function backspace() {
      if (input == '0') {
        return;
      }
      else if (input.length == 1) {
        setInput('0');
      }
      else {
        let newInput = input.slice(0, -1);
        if (newInput == '-') {
          newInput = '0';
        }
        setInput(newInput);
        setNewInput(false);
      }
    }

    // functionality of = operator
    // if previous operation was single operator, simple append = at the result
    // if previous operation was double operator, just do input (last operation) input. change input to result, result show the string
    function showResult() {

      console.log(`input: ${input}, result: ${result}, newInputBool: ${newInputBool}, prevOp: ${previousOp}, prevIn: ${previousInput}`);

      if (result == '') {
        setResult(String(input) + ' =');
        setNewInput(true);
        setPrevOp(null);
        setPrevInput(null);
        return;
      }
      else if (previousOp === null) {
        console.log("i should be called");
        setResult(String(input) + ' =');
        setNewInput(true);
        setPrevOp(null);
        setPrevInput(null);
        return;
      }
      else {
        console.log("i should not be called");
        
        let newInput;
        if (previousOp == '%') {
          newInput = Number(previousInput) % Number(input);
          if (Number(input) == 0) {
            console.log("Cannot divide by 0");
            alert("cannot divide by zero");
            return;
          }
        }
        else if (previousOp == '+') {
          newInput = Number(previousInput) + Number(input);
        }
        else if (previousOp == '-') {
          newInput = Number(previousInput) - Number(input);
        }
        else if (previousOp == '*') {
          newInput = Number(previousInput) * Number(input);
        }
        else if (previousOp == '/') {
          newInput = Number(previousInput) / Number(input);
          if (Number(input) == 0) {
            console.log("Cannot divide by 0");
            alert("cannot divide by zero");
            return;
          }
        }
        setResult(String(result) + ' ' + String(input) + '=');
        setInput(String(newInput));
        setPrevOp(null);
        setPrevInput(null);
        setNewInput(true);
        return;
      }

    }

    const operations = {
      'addInput' : addInput,
      'singleOp' : singleOp,
      'doubleOp' : doubleOp,
      'clean' : clean,
      'backspace' : backspace,
      'showResult' : showResult,
    }

    return (
        <div id="Calculator">
            <Display input={input} result={result}/>
            <Buttons operations={operations} input={input} result={result} setInput={setInput} setResult={setResult} prevInput={previousInput} setPrevInput={setPrevInput} previousOp={previousOp} setPrevOp={setPrevOp}/>
        </div>
    );
  }

  export default Calculator;