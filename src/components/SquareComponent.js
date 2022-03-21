import { Square } from "../style/AppCss";
function SquareComponent(props) {
  return <Square onClick={props.onClick}>{props.state}</Square>;
}

export default SquareComponent;
