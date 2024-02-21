import React from "react";
import notes from "../notes";
import Content from "./content";

function Note() {
    return (
        <div>
        {notes.map(x => {
                return (
                    <Content 
                    key= {x.id}
                    id={x.id}
                    title ={x.title}
                    cont={x.content}
                    />
            )
            })
        }
        </div>
    );
}

export default Note;