export const EventProps = () =>{
    const HandleWelcomeUser = (user) => {
        alert(`hey,${user}`);
    };

    const handleHover = () =>{
        alert(`hey thanks for hovering me!`)
    }
    return(<>
    <WelcomeUser onClick = {() =>{
        HandleWelcomeUser("Subhu")}}
        onMouseEnter = {handleHover}
    />
    </>);
};

const WelcomeUser = (props) =>{
    const {onClick,onMouseEnter} = props;
    const handleGreeting = () =>{
        console.log(`Hey User,Welcome!`);
        onClick();
    }
    return(
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greetings</button>
        </>
    )
}