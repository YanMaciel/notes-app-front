import React from "react";
import api from '../services/api';



const NoteElement = ({ id, title, content }) => {

    const handleLogout = async (e) => {
        await api.get('v1/auth/logout', { withCredentials: true });
        localStorage.removeItem('user');
        localStorage.removeItem('signed');
        window.location = '/login';
    };

    async function deleteNote(id) {
        await api.delete('v1/notes', { withCredentials: true, data: { id: id } })
            .then((res) => {
                if (res.status === 204) window.location.reload();
                else handleLogout();
            })
    };

    const noteStyle = {
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        width: "240px",
        margin: "16px",
        float: "left"
    };

    const titleStyle = {
        fontSize: "1.1em",
        marginBottom: "6px"
    }

    const contentStyle = {
        fontSize: "1.1em",
        marginBottom: "10px",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
    }

    const buttonStyle = {
        position: "relative",
        float: "right",
        marginRight: "10px",
        color: "red",
        border: "none",
        width: "36px",
        height: "36px",
        cursor: "pointer",
        outline: "none"
    }
    return (
        <div className="note" style={noteStyle}>
            <h1 style={titleStyle} className="title">{title}</h1>
            <p style={contentStyle}>{content}</p>
            <button style={buttonStyle} onClick={(e) => deleteNote(id)}>DELETE</button>
        </div>
    );
}

export default NoteElement;