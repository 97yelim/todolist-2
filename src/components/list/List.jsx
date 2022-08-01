import React from 'react';
import { useSelector, useDispatch  } from "react-redux"; 
import { updateTodo, deletTodo } from '../../redux/modules/todo'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";


const List = () => {
    
    //const my_lists = useSelector((state) => state.todo.list);
    const my_lists = useSelector((state) => state.todo.todos);
    console.log(my_lists);

    const dispatch = useDispatch();
    
    const onToggle = (id) =>{
      dispatch(updateTodo(id));
    };

    const onDelet = (id) =>{
      dispatch(deletTodo(id));
    };

    let navigate = useNavigate();
 

    return (
        <div>
      <Title>WORKING</Title>
      <TodoWrap>
        {my_lists.map((todo) => {
                return(
                  todo.isDone === false ?
                    <div key={todo.id}>
                      <h2>{todo.title}</h2>
                        <p>{todo.cont}</p>
                      <div>
                        <div className="leftBtn">
                          <button onClick={()=> navigate("/detail/" + todo.id)} key={todo.id}>
                            <i className="xi-plus-circle"></i>
                          </button>
                          <button onClick={()=> onToggle(todo.id)}>
                            {todo.isDone === false ? <i className='xi-check-circle'></i> : <i className="xi-minus-circle"></i>}
                          </button>
                        </div>
                        <div className="rightBtn">
                          <button onClick={()=>onDelet(todo.id)}>
                            <i className="xi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    : null
                )}
            )}

      </TodoWrap>
      <Title>DONE</Title>
      <TodoWrap>
        {my_lists.map((todo) => {
            return(
              todo.isDone === true ?
                <div key={todo.id}>
                  <h2>{todo.title}</h2>
                    <p>{todo.cont}</p>
                    <div>
                        <div className="leftBtn">
                        <button onClick={()=> navigate("/detail/" + todo.id)} key={todo.id}>
                            <i className="xi-plus-circle"></i>
                          </button>
                          <button onClick={()=> onToggle(todo.id)}>
                            {todo.isDone === false ? <i className='xi-check-circle'></i> : <i className="xi-minus-circle"></i>}
                          </button>
                        </div>
                        <div className="rightBtn">
                          <button onClick={()=>onDelet(todo.id)}>
                            <i className="xi-trash"></i>
                          </button>
                        </div>
                      </div>
                </div>
                : null
            )}
        )}
      </TodoWrap>
    </div>
    );
};


const Title = styled.h1`
  color: var(--font-color-3);
  font-family: 'LeferiPoint-BlackObliqueA';
  font-size: 2em;
  line-height: 2em;
`;

const TodoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--line);
  &:last-of-type{
    border: none;
    opacity: .4;
  }
  >div {
    width: 386px;
    background-color: var(--dark-3);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 10px 0;
    margin-right: 20px;
    box-shadow: var(--shadow);
    &:nth-child(3n){
      margin-right: 0;
    }
    h2 {
      color : var(--font-color-1);
      font-size: 1.3em;
      font-weight: bold;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--line);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    p {
      color: var(--font-color-3);
      padding: 10px 0;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    div{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      button{
        background-color: transparent;
        border: none;
        i{
          font-size: 1.4em;
          transition: all .3s;
          cursor: pointer;
        }
      }
      .xi-plus-circle{
        color :var(--font-color-3);
        margin-right: 10px;
        &:hover{
          color: var(--font-color-1);
        }
      }
      .xi-check-circle {
        color: #0acb8a;
        &:hover{
          color: #29f8b2;
        }
      }
      .xi-trash{
        color:var(--font-color-3);
        &:hover{
          color: #db4545;
        }
      }
      .xi-minus-circle{
        color:var(--font-color-3);
        &:hover{
          color: #db4545;
        }
      }
    }
  }
`;

export default List;