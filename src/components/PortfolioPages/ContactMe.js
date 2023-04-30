import React, { useState } from "react";


export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div>
            <h2>Get in Touch!</h2>
            <p>Feel free to reach out if you have any questions or would like to discuss potential opportunities.</p>
            (isSubmitted ? <h1>Thank you for your message! You can expect to hear back soon.</h1> 
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Message:
                        <textarea  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label> 
                    <button type='submit'>Send</button>
                </form>
            )
        </div>
    )
}


