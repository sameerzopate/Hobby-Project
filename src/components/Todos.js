import React, { useState } from 'react';
import './Todos.css'
import {connect} from 'react-redux'
import { addTitles,addDescriptions} from "../redux/reducer";
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
      titles: state,
      descriptions:state,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        addTitle: (obj) => dispatch(addTitles(obj)),
        addDescription: (obj) => dispatch(addDescriptions(obj)),
        
    };
};


function Todos(props) {
    

    const [img, setImg] = useState('https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False');

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(props);

    
      const add =() =>{
        if (title === "") {
          alert("Please write down the title");
        } 
        else {
          props.addTitle({
            id: Math.floor(Math.random() * 1000),
            item: title,
            completed: false,
          });
          setTitle("");
        }
      };
      
      const add1 = () => {
        if (description === "") {
          alert("Please write down the description.");
        } else if (description <= description.charAt(150)){
          alert("Description needs to be a minimum of 150 characters.");
  
        }else {
          props.addDescription({
            id1: Math.floor(Math.random() * 1000),
            item1: description,
            completed1: false,
          });
          setDescription("");
        }
      };

  
    
    


    const titleHandler = (e) =>{
        setTitle(e.target.value);
    }
    const descriptionHandler = (e) =>{
      setDescription(e.target.value);
  }
    
    const imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setImg({img: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
        
    

    return (
        <div className='project'>
            
            <h1 className='title'>Hobby Projects</h1>

            <div className='box'>
                <div className='box1'>
                    <div className='Project-Title input-fields'>
                        <h2>Project Title:</h2>
                        <input
                            type="text"
                            onChange={(e) => titleHandler(e)}
                            className="todo-input"
                            value={title}
                        />
                    </div>
                    <div className='Project-Description input-fields'>
                        <h2>Project Description:</h2>
                        <textarea cols="36" rows="5"
                          onChange={(e) => descriptionHandler(e)}
                          className="todo-input"
                          value={description}
                        />

                          

                    </div>

                    <div className='input-fields1'>
                        <h2>Add image:</h2>
                        <img className='img' src={img} alt='img'/>
                        <input type='file' name='upload-img' onChange={(e) =>imageHandler(e)} accept='image/*'/>
                    </div>

                    <div className="btn">
                        <Link to='/DisplayTodos' className='link'>
                            <button
                                
                                className="add-btn"
                                onClick={()=>{
                                  add();
                                  add1(); }
                                }
                                >Add Project
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
