import React, { useState } from "react";
import { connect } from "react-redux";
import {addTitles,completeTitles,removeTitles,updateTitles} from "../redux/reducer";
import {addDescriptions,removeDescriptions,updateDescriptions,completeDescriptions} from "../redux/reducer";
import TodoItem from "./TodoItem";
import './DisplayTodos.css'

const mapStateToProps = (state) => {
  return {
    Titles: state,
    Descriptions: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (obj) => dispatch(addTitles(obj)),
    removeTitle: (id) => dispatch(removeTitles(id)),
    updateTitle: (obj) => dispatch(updateTitles(obj)),
    completeTitle: (id) => dispatch(completeTitles(id)),

    addDescription: (obj) => dispatch(addDescriptions(obj)),
    removeDescription: (id1) => dispatch(removeDescriptions(id1)),
    updateDescription: (obj) => dispatch(updateDescriptions(obj)),
    completeDescription: (id1) => dispatch(completeDescriptions(id1)),
  };
};

const DisplayTodos = (props) => {

  const [sort, setSort] = useState("active");
  const [sort1, setSort1] = useState("active");

  return (
    <div className="displaytodos">
      <div className="buttons">
        
        <button
        className='all-Button'
          onClick={() => {
            setSort("active");
            setSort1("active"); }
          }
        >
          Active Projects
        </button>
        <button
        className='all-Button'
          onClick={() => {
            setSort("completed");
            setSort1("completed"); }
          }
        >
          Completed Projects
        </button>
        <button
        className='all-Button'
        onClick={() => {
          setSort("all");
          setSort1("all"); }
        }
        >
          All Projects
        </button>
      </div>
      <ul>
          {props.Titles.length > 0 && sort === "active"
            ? props.Titles.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTitle={props.removeTitle}
                      updateTitle={props.updateTitle}
                      completeTitle={props.completeTitle}
                    />
                  )
                );
              })
            : null}
          {props.Descriptions.length > 0 && sort1 === "active"
            ? props.Descriptions.map((item) => {
                return (
                  item.completed1 === false && (
                    <TodoItem
                      key={item.id1}
                      item={item}
                      removeDescription={props.removeDescription}
                      updateDescription={props.updateDescription}
                      completeDescription={props.completeDescription}
                    />
                  )
                );
              })
            : null}

          {props.Titles.length > 0 && sort === "completed"
            ? props.Titles.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTitle={props.removeTitle}
                      updateTitle={props.updateTitle}
                      completeTitle={props.completeTitle}
                    />
                  )
                );
              })
            : null}
          {props.Descriptions.length > 0 && sort1 === "completed"
            ? props.Descriptions.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id1}
                      item={item}
                      removeDescription={props.removeDescription}
                      updateDescription={props.updateDescription}
                      completeDescription={props.completeDescription}
                    />
                  )
                );
              })
            : null}
          {props.Titles.length > 0 && sort === "all"
            ? props.Titles.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTitle={props.removeTitle}
                    updateTitle={props.updateTitle}
                    completeTitle={props.completeTitle}
                  />
                );
              })
            : null}
          {props.Descriptions.length > 0 && sort === "all"
            ? props.Descriptions.map((item) => {
                return (
                  <TodoItem
                      key={item.id1}
                      item={item}
                      removeDescription={props.removeDescription}
                      updateDescription={props.updateDescription}
                      completeDescription={props.completeDescription}
                    />
                );
              })
            : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);