import "./styles/styles.css";

import Apples from "./components/Apples";
import Basket from "./components/Basket";
import Tree from "./components/Tree";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./stores/basket";

function App() {
  const { applesOnTheTree } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div className="mb-5 text-center">
          <h1>Shake the Tree to drop an Apple</h1>
          <p className="fst-italic mb-0">Click the Tree to shake</p>
        </div>

        <div className="d-flex align-items-end position-relative">
          <Tree width={300} />
          <Apples />
          <Basket width={150} />
        </div>

        <div className="mt-5 text-center">
          <h6 className="text-center">Apples: {applesOnTheTree}</h6>
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
