import "./styles/Display.css";

function Display(props) {
    return (
        <div id="Display">
            <p id="result">{props.result}</p>
            <p id="input">{String(props.input)}</p>
        </div>
    );
}

export default Display;