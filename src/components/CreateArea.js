import React, { useState } from "react";
import api from '../services/api';

function CreateArea() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    const handleLogout = async (e) => {
        await api.get('v1/auth/logout', { withCredentials: true });
        localStorage.removeItem('user');
        localStorage.removeItem('signed');
        window.location = '/login';
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        api.post(
            "v1/notes",
            {
                title: title,
                content: content,
            },
            { withCredentials: true }
        )
            .then((res) => {
                if (res.status === 200) window.location.reload();

            })
            .catch((e) => setError(true));
    }

    const formStyle = {
        position: "relative",
        width: "480px",
        margin: "30px auto 20px auto",
        background: "#fff",
        padding: "15px",
        borderRadius: "7px",
        boxShadow: "0 1px 5px rgb(138, 137, 137)"
    }

    const formInputTextArea = {
        width: "100%",
        border: "none",
        padding: "4px",
        outline: "none",
        fontSize: "1.2em",
        fontFamily: "inherit",
        resize: "none"
    }

    const formButton = {
        position: "absolute",
        right: "18px",
        bottom: "-18px",
        background: "hsl(171, 100%, 41%)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        outline: "none"
    }

    return (
        <div>
            <form style={formStyle}>
                <input
                    style={formInputTextArea}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    maxLength="255"
                />
                <textarea
                    style={formInputTextArea}
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder="Take a note..."
                    rows="3"
                    maxLength="255"
                />
                {error && <div className="subtitle is-6 has-text-danger has-text-centered m-0">Your note must have a title and content.</div>}
                <button style={formButton} onClick={handleFormSubmit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;