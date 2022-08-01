const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";
const DELET = "todo/DELET";




// todolist 추가함 
export function createTodo (todolist){
    console.log("createTodo 액션 일어남");
    return {type: CREATE, todolist}
}

// todolist done, false 버튼 구현 // dispatch
export function updateTodo (todolist){
    console.log("updateTodo 액션 일어남");
    return {type: UPDATE, todolist}
}

// todolist 삭제 
export function deletTodo (todolist){
    console.log("deletTodo 액션 일어남");
    return {type: DELET, todolist}
}



//초기 상태 값
const initialState = {
    todos :[ 
        {
            id: 0,
            title: "리액트 배우기",
            cont: "너무 어려운데 안하면 어쩌겠어",
            isDone : false
        }
    ]
};

const todos = (state = initialState, action) => {
    console.log(state.todos);
    switch (action.type) {
        case "todo/CREATE" :
            
            const createtodo = {
                id:state.todos[state.todos.length-1].id + 1 ,
                title: action.todolist.title,
                cont:action.todolist.cont,
                isDone : false
            }
            const addTodo = [...state.todos].concat(createtodo)
            // [...~] 배열에 전달받은 todo값을 추가하라
        return {
            todos:addTodo
        }

        case "todo/UPDATE": {
            const toggle = [...state.todos].map((todo)=> 
            todo.id === action.todolist ? {...todo, isDone: !todo.isDone} : todo
            ) 
            
            return{
                /*...state,
                todos: state.todos.map((todo)=>{
                     if(todo.id === action.todolist){
                        return{
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    }else{
                        return todo
                    } */
                    todos : toggle   
                }
            }
        case "todo/DELET" :
            const todoDelet = [...state.todos].filter((todo=>
            todo.id !== action.todolist))
        return{
            todos : todoDelet
        }
            
      default:
        return state;
    }
  };

export default todos;