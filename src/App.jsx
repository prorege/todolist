import TodoListTemplate  from "./components/TodoListTemplate.jsx";
import Form from "./components/Form.jsx";

function App(){
  return(
    <div>
      <TodoListTemplate form ={<Form/>}>
        템플릿 완성
      </TodoListTemplate>
    </div>

  );
}

export default App