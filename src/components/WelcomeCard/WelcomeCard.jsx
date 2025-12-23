import './WelcomeCard.css'

function WelcomeCard(props) {
    const sayHello = () => {
        alert("Dive IN " + props.name + "!");
    };

    return (
        <div className="card-style">
            <h1>Welcome, {props.name}!</h1>
            <p>I am a React component.</p>
            <button className="card-button" onClick={sayHello}>Click Me</button>
        </div>
    );
}

export default WelcomeCard;