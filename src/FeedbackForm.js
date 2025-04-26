import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function FeedbackForm() {
    const[name,setname] = useState(' ');
    const[email,setemail] = useState('');
    const[comments,setcomments] = useState('');
    const[list,setList] = useState([]);
    //editing hookl
    const[editname,seteditname] = useState('');
    const[editemail,seteditemail] = useState('');
    const[editcomments,seteditcomments] = useState('');
    const[editvalue,seteditvalue] = useState(null);


async function getform() {
   try{
    const response  = await axios.get("https://tasks-bd851-default-rtdb.firebaseio.com/form.json");
    const dataarray = Object.entries(response.data).map(([id,form]) => ({
        id,
        ...form
 
    }));
       
    setList(dataarray);
    console.log(list);
   }
   catch(error){
  
   }
}
   
    

    
    



   async function addForm(){
        if(name.trim() === " " || email.trim() === " " || comments.trim() === " "){
            alert("enter the all input fields");
            return;
        }
        try{
           await axios.post("https://tasks-bd851-default-rtdb.firebaseio.com/form.json",{
            name:name,
            email:email,
            comments:comments
           })
           setcomments('')
           setname('')
           setemail('')
           alert("Data Adding successfully")
        }
        catch(error){
           alert("Somethig occured"+{error})
        }
        
        
    }
async function updateform(id,editcomments,editemail,editname) {
    try{
        await axios.patch(`https://tasks-bd851-default-rtdb.firebaseio.com/form/${id}.json`,{
        name:editname,
        email:editemail,
        comments:editcomments
        })
        alert("Updating scucessfully")
    }
    catch(error){
        alert("Error ocuuring in the update" +(error));
    }
    
}

async function deleteform(id) {
    try{
        await axios.delete(`https://tasks-bd851-default-rtdb.firebaseio.com/form/${id}.json`);
       
        alert("Delete Successfullt" + id);
    }
    catch(error){
        alert("Problem in Deleteting")
    }
    
}
    useEffect(()=>{
        getform();
    })
  return (
    <>
    <div className='container'>
    <input type="text" placeholder='Enter the Name' value={name} onChange={(e) =>setname(e.target.value)}/>
    <input type='text'placeholder='Enter The Email' value={email} onChange={(e) => setemail(e.target.value)}/>
    <textarea type="text" placeholder='Write Comments' value={comments} onChange={(e) => setcomments(e.target.value)}/>
    <button onClick={addForm}>Add</button>
    </div>
     
    {list.map((data) =>{
        return(
            <>
        <div class="dataconatiner" key={data.id}>
           
                  
             <p>Name :{data.name}</p>
                 
          
            <p>Email:{data.email}</p>
            <p>Comments:{data.comments}</p>
            <button onClick={() => (
                seteditcomments(data.comments),
                seteditemail(data.email),
                seteditname(data.name),
                seteditvalue(data.id)
        )}>Edit</button>
            <button onClick ={() => (
                deleteform(data.id)
                
            )}>Delete</button>
        </div>
        </>
        )
    })}

    {editvalue && (
        <>
        <input type="text" placeholder='enter update name' value={editname} onChange={(e) => seteditname(e.target.value)}/>
        <input type="text" placeholder='enter update email' value={editemail} onChange={(e) => seteditemail(e.target.value)}/>

        <input type="text" placeholder='enter update comments' value={editcomments} onChange={(e) => seteditcomments(e.target.value)}/>
        <button onClick ={()=>(
            updateform(editvalue,editemail,editname,editcomments),
            seteditcomments(editcomments),
            seteditemail(editemail),
            seteditname(editname),
            seteditvalue(editvalue)

    )}>Save</button>

        <button onClick = {() => (
            seteditcomments(''),
            seteditemail(''),
            seteditname(''),
            seteditvalue(null)

    )}>Cancel</button>
        </>

    )}
    </>
    
  )
}

export default FeedbackForm