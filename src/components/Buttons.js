import "./styles/Buttons.css";

function Buttons(props){

    return (
        <div id="Buttons">
            <button className="function small-font" onClick={() => props.operations.singleOp('+/-')}>+/-</button> <button className="function big-font" onClick={props.operations.clean}>C</button> <button className="function big-font" onClick= {() => props.operations.backspace('7')}>⌫</button> <button className="arithmetic big-font" onClick={() => props.operations.doubleOp('%')}>%</button> 
            <button className="function small-font" onClick={() => props.operations.singleOp('1/x')}><sup>1</sup>/<sub>x</sub></button> <button className="function small-font" onClick={() => props.operations.singleOp('x^2')}>x<sup>2</sup></button> <button className="function small-font" onClick={() => props.operations.singleOp('2rootx')}>√x</button> <button className="arithmetic big-font" onClick={() => props.operations.doubleOp('/')}>÷</button>
            <button className='num big-font' onClick= {() => props.operations.addInput('7')}>7</button> <button className='num big-font' onClick= {() => props.operations.addInput('8')}>8</button> <button className='num big-font' onClick= {() => props.operations.addInput('9')}>9</button> <button className="arithmetic big-font" onClick={() => props.operations.doubleOp('*')}>X</button>
            <button className='num big-font' onClick= {() => props.operations.addInput('4')}>4</button> <button className='num big-font' onClick= {() => props.operations.addInput('5')}>5</button> <button className='num big-font' onClick= {() => props.operations.addInput('6')}>6</button> <button className="arithmetic big-font" onClick={() => props.operations.doubleOp('-')}>-</button>
            <button className='num big-font' onClick= {() => props.operations.addInput('1')}>1</button> <button className='num big-font' onClick= {() => props.operations.addInput('2')}>2</button> <button className='num big-font' onClick= {() => props.operations.addInput('3')}>3</button> <button className="arithmetic big-font" onClick={() => props.operations.doubleOp('+')}>+</button>
            <button className='num big-font' onClick= {() => props.operations.addInput('0')}>0</button> <button className="num big-font" onClick= {() => props.operations.addInput('.')}>.</button> <button className='arithmetic big-font' id="enter" onClick={props.operations.showResult}>=</button>
        </div> 
    )

}

export default Buttons;