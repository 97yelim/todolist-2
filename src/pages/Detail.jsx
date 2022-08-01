import React  from 'react';
import styled from "styled-components";
import { useNavigate , useParams } from "react-router-dom";
import { useSelector  } from "react-redux"; 


const Detail = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();
    const {todos} = useSelector((state) => state.todo);
   
   

    const cont = todos.filter((data)=>{
        return data.id === id*1 ? true : false
     })
    

    
 


 /* console.log(find) */


    return (
            <DetailCont>
                <div>
                    <button onClick={()=>{navigate("/")}}>
                        <i className="xi-caret-down-circle"></i>
                    </button>
                    <p>{id}</p>
                </div>
                <Title>
                    <h1>{cont[0].title}</h1>
                </Title>
                <div>
                    {cont[0].cont}
                </div>
            </DetailCont>
    );
};

const DetailCont = styled.div`
    width: 600px;
    margin: 200px auto;
    border-radius: 20px;
    background-color: var(--dark-3);
    padding: 30px;
    box-sizing: border-box;
    color: var(--font-color-1);
    box-shadow: var(--shadow);
    div:first-of-type {
        display: flex;
        justify-content:space-between ;
        align-items: center;
        button{
            background-color: transparent;
            border: none;
            font-size: 2em;
            color: var(--font-color-3);
            transform: rotate(90deg);
            transition: all .3s;
            cursor: pointer;
            &:hover{
                color: var(--font-color-1);
            }
        }
        p{
            color: var(--font-color-3);
            margin-right: 10px;
            
        }
    }
    div:last-of-type {
        margin: 20px 10px;
        color: var(--font-color-3);
        font-size: 1.2em;
        word-break: break-all;
        line-height: 1.3em;
    }
    
`
const Title = styled.div`
    margin: 0 10px;
    border-bottom: 1px solid var(--line);
    
    h1{
        font-size: 1.5em;
        font-weight: bold;
        margin: 20px 0;
        word-break: break-all;
    }
`

export default Detail;
