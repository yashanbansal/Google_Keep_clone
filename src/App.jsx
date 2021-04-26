import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNotes from './CreateNotes.jsx';
import Note from './Note.jsx';
import { prettyDOM } from '@testing-library/dom';
const App = ()=>{
const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
       setAddItem((prevData)=>{
           return [...prevData,note];
       });
    };

   const onDelete =(id) =>{
    setAddItem((oldData)=>
        oldData.filter((currData,indx)=>{
            return indx!==id;
        })
    );
    };
    return(
        <>
        <Header/>
        <Footer/>
        <CreateNotes passNote={addNote}/>
        {
            addItem.map((val, index)=>{
                return (
                  <Note
                      key={index}
                      id={index}
                      title={val.title}
                      content={val.content}
                      deleteItem={onDelete}
                  />
                );
            })
        }
        </>
    );
}

export default App;