

function InlineCSSButton() {

    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
    }
    return (
        <button style={styles}>I'm an inline CSS button!</button>
    );
}

export default InlineCSSButton