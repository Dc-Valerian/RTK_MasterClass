import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Services/reducers";
import { useGetAllUsersQuery } from "./Services/RTK";

function App() {
  const dispatch = useDispatch();
  const readData = useSelector((state: any) => state.CounterReducer);

  const { data, isLoading, isFetching, isError } = useGetAllUsersQuery({});

  if (isLoading) return <div>Loading.........</div>;

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment(1));
          }}
        >
          Add Count
        </button>
        <div>count is {readData?.count}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>All users</div>
    </>
  );
}

export default App;
