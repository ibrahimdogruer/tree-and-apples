import "./styles/styles.css";

import Apple from "./components/Apple";
import Basket from "./components/Basket";
import Tree from "./components/Tree";
import { useSelector, useDispatch } from "react-redux";
import { emptyBasket } from "./stores/basket";

function App() {
  const { appleCount } = useSelector((state) => state.basket);
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
          <Apple width={40} />
          <Basket width={150} />
        </div>

        <div className="mt-5 text-center">
          <h6>Apples: {appleCount}</h6>

          <button className="btn btn-outline-danger" onClick={() => dispatch(emptyBasket())}>
            Empty the Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
