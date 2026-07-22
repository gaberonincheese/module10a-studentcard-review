import { useState } from "react";

function StudentCard(props) {
    // We're taking in everything passed as the props and setting them to the appropriate variables.
    const { name, major, year, bio, imageUrl } = props;
    // useState is being used here. It is returning an array with two elements: showBio, which is initially set to false through useState
    // + a function that updates the state of showBio.
    const [showBio, setShowBio] = useState(false);

    // This function flips showBio's bool value.
    const toggleBio = () => {
        setShowBio(!showBio);
    };

    // Here, we're returning the way all the information will be displayed. 
    return (
        // This block of styling establishes how the box element holding the information below will be stylized.
        <div style={{
            maxWidth: '350px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            margin: '20px auto',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            {/* This block of code establishes how the image passed into imageUrl will be rendered. */}
            <img
                src={imageUrl}
                alt={name + "'s profile"}
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
            />
            {/* This line of code establishes how the name will be rendered. */}
            <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
            {/* This line of code establishes how the year and major will be rendered. */}
            <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
            {/* This code establishes a button that, when clicked, toggles the bio.
                It is then stylized. */}
            <button onClick={toggleBio} style={{
                marginTop: '12px',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#007BFF',
                color: 'white'
            }}>
            {/* This line of code asks if showBio is true (?) (meaning that the bio is currently showing), then the text "Hide Bio" should display on the button. 
                If showBio is not true, then (:) the text "Show Bio" will display instead. */}
                {showBio ? 'Hide Bio' : 'Show Bio'}
            </button>
            {/* If showBio is true, meaning it should be rendered, create a paragraph block with those style specifications and print the bio variable. */}
            {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
        </div>
    );
}

export default StudentCard;
