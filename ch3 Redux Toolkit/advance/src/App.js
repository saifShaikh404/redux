import { useSelector } from 'react-redux';
import './App.css';
import Amount from './comps/Amount';
import Bonus from './comps/Bonus';
import Salary from './comps/Salary';

function App() {

  let amount = useSelector((state) => state.amount.amount)
  let bonus = useSelector((state) => state.bonus.points)

  return (
    <div className="App">
      <div className="container">
        <p className="headings">Amount :- {amount}</p>
        <p className="headings">Bouns :- {bonus} </p>
      </div>

      <Amount />
      <Bonus />
      <Salary />
    </div>
  );
}

export default App;
