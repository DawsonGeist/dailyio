import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'

const buildNoteCards = (notes) => {

}

const NotesPreviewContainer = () => {
    const [notes, setNotes] = useState([])
    const [updatePage, setUpdatePage] = useState(true)

    useEffect(() => {
        if(updatePage) {
            //Do stuff
            setNotes([
                {
                    _id: "0",
                    body: "Breathe Everyday",
                    tag: "reminder"
                },
                {
                    _id: "1",
                    body: "Find health insurance (runs out in january)",
                    tag: "urgent"
                },
                {
                    _id: "2",
                    body: "Call grandpa back",
                    tag: "needs follow up"
                },
                {
                    _id: "3",
                    body: "Car is making a weird noise, bring it to shop",
                    tag: "warn"
                },
                {
                    _id: "4",
                    body: "Johns birthday is the 14th",
                    tag: "recurring"
                },
            ])
            setUpdatePage(false)
        }
    })

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='d-flex flex-column align-self-center'>
                <h1>Notes</h1>
            </div>
            <ol class="list-group-flush" style={{maxHeight:"40vh", overflow:"scroll", overflowX:"hidden"}}>{
                notes.map((note) => {
                    return (
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="card" style={{flex: "row", flexGrow:'1'}}>
                                <div class="card-body">
                                    <h5 class="card-title">{note.tag}</h5>
                                    <p class="card-text">{note.body}</p>
                                    <a href="#" class="btn btn-primary">See Details</a>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
            </ol>
        </div>
    );
}

export default NotesPreviewContainer;