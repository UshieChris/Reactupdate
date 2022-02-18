import './Card.css';

function Card(props) {
    const casss = 'card ' + props.className;

    return <div className={casss}>{props.children}</div>;

}

export default Card;