import React, {useState , /* useRef */}  from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux"
import { createTodo } from '../../redux/modules/todo'


    
const Form = () => {
    /* const nextId = useRef(3);
    const dispatch = useDispatch();
    const initialState = {
        // useState 에서 받아온 값 넣어줄 항목들 생성
        id: 0,
        title: "",
        cont: "",
        isDone : false
      };
    const [todo, setTodo] = useState(initialState);
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setTodo({...todo,[name]:value, id:nextId})
    }
    const  onSubmitHandler = () => {
        dispatch(createTodo({...todo}))
        setTodo({
            id: 0,
            title: "",
            cont: "",
            isDone : false
        })
        nextId.current += 1 
        console.log(todo)

        useRef를 썼을 때, 디테일 페이지로 갔다가 메인페이지로 돌아오면
        지정했던 useRef(n)를 기반으로 다시 쌓음.
        id가... 1,2,3(디테일페이지로 갔다 메인으로돌아옴),1,2,3,4
        이런식이 됨....
    } */
    
    /* const nextId = useRef(1); */
    const dispatch = useDispatch();
    
    const [todo, setTodo] = useState({
        id:0, title : "", cont: "" 
    });
    
    const onChange = (e) => {
        const {name, value} = e.target;
        setTodo({...todo,[name]:value})
        /* setTodo({...todo,id:nextId.current,[name]:value}) */
    }
    
    const onSubmit = (e) =>{
        if(todo.title === "" || todo.cont === "" ) return alert('내용을 입력하세요');
         dispatch(createTodo({...todo}))
            setTodo({
                id:0, title: "", cont: ""
            })
            /* nextId.current += 1 */
            console.log(todo)        
    }

    return (
        <FormContainer>
            <FormInner>
                <label htmlFor="">제목</label>
                <FormInput
                    inputWidth="200px"
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={onChange}
                    placeholder="제목을 입력하세요."
                    />
                <label htmlFor="">내용</label>
                <FormInput
                    inputWidth="400px"
                    type="text"
                    name="cont"
                    value={todo.cont}
                    onChange={onChange}
                    placeholder="내용을 입력하세요."
                />
            </FormInner>
            <button
                type="button"
                onClick={onSubmit}
            >
                <i className="xi-plus-circle"></i>
            </button>
        </FormContainer>
    );
};



const FormContainer = styled.form`
    background-color: var(--dark-3);
    padding: 25px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 20px 20px;
    margin-bottom: 50px;
    button{
        border-radius: 20px;
        border: none;
        background-color: transparent;
        font-size: 2em;
        
        color: var(--point-color);
        transition: all .3s;
        cursor: pointer;
        &:hover {
            color: var(--point-color-hover)
        }
    }
`;

const FormInner = styled.div`
    label{
        padding: 5px;
        margin-right: 10px;
        color: var(--font-color-1);
    }
`;

const FormInput = styled.input`
    background-color: var(--dark-2);
    border: none;
    padding: 10px;
    border-radius: 20px;
    margin-right: 30px;
    width: ${(props) => props.inputWidth} ;
    color: var(--font-color-1);
`;


export default Form;