function Button () {

    const handleClick = () => console.log("ouch");
    let count = 0;
    const handleClick2 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name}, you clicked me ${count} times`);
        }
        else console.log(`${name} stop clicking me`);
    };
    const handleClick3 = (e) => e.target.textContent = "ouch!";
    return(
        <>
        <button onClick={handleClick}>Click me :{")"}</button>
        <button onClick={() => handleClick2("Nitansh")}>Click me :{")"}</button>
        <button onClick={(e) => handleClick3(e)}>Click me :{")"}</button>
        </>
    );
}

export default Button