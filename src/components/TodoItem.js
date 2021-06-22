
import React, { useRef } from "react";
import './TodoItem.css'


const TodoItem = (props) => {
  const { item, updateTitle, removeTitle, completeTitle } = props;
  const { updateDescription, removeDescription, completeDescription } = props;

  const inputRef = useRef(true);
  const inputRef1 = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const changeFocus1 = () => {
    inputRef1.current.disabled = false;
    inputRef1.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      
      updateTitle({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  const update1 = (id1, value, e) => {
    if (e.which === 13) {
      
      updateDescription({ id1, item1: value });
      inputRef1.current.disabled = true;
    }
  };
  return (
      <div>
        <li>
        <ul
        
        key={item.id}
        className="card"
        >
        <div className='created-projects'>

          <div className='cards'>

            <div className='Project-Title1'>
              
              <p>Project Title:</p>

              <input
                  ref={inputRef}
                  disabled={inputRef}
                  defaultValue={item.item}
                  onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
              />

            </div>
              
            

          </div>

        </div>

        </ul>

        <ul
        
        key={item.id1}
        className="card"
        >
        <div className='created-projects'>

          <div className='cards'>

            
              
            <div className='Description1'>
              <p>Project Description:</p>

              <input
                  ref={inputRef1}
                  disabled={inputRef1}
                  defaultValue={item.item}
                  onKeyPress={(e) => update1(item.id1, inputRef1.current.value, e)}
              />
            </div>

          </div>

        </div>

        </ul>
        <div className="btns">
            <button
            
            onClick={() => {
              changeFocus();
              changeFocus1(); }
            }
            >Edit
            </button>
            {item.completed === false && item.completed1 === false (
            <button
                
                onClick={() => {
                  completeTitle(item.id);
                  completeDescription(item.id1); }
                }
            >
                done
            </button>
            )}
            <button
            
            onClick={() => {
              removeTitle(item.id);
              removeDescription(item.id1); }
            }
            >
            
            Delete
            </button>
        </div>
        
        

        
        </li>
    </div>
  );
};

export default TodoItem;