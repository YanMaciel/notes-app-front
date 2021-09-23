import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CreateArea from './CreateArea';
import NoteElement from './NoteElement';

const BASE_URL = 'http://localhost:8000/v1/notes/';

const Notes = () => {

    const [result, setResult] = useState([]);

    var options = {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    };

    useEffect(() => {
        async function getItems() {
            if (!localStorage.getItem('signed'))
                return <Redirect to="/login" />
            await fetch(BASE_URL, options)
                .then(async (res) => {
                    return res.json();
                })
                .then((result) => {
                    setResult(result)
                });
        }
        getItems();
    }, []);

    if (!localStorage.getItem('signed'))
        return <Redirect to="/login" />

    return (

        <div>
            <CreateArea />
            <div>
                {result ? (
                    result.map((item) => {
                        return (
                            <NoteElement
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                content={item.content}
                            />
                        );
                    })
                ) : (<h1>Nada encontrado</h1>)}  {/*TODO*/}
            </div>
        </div>
    )
}

export default Notes;