import CreateCustomer from "./feautures/customers/CreateCustomer";
import Customer from "./feautures/customers/Customer";
import AccountOperations from "./feautures/accounts/AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector(state => state.customer.fullName)
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? <CreateCustomer /> : <>
        <Customer />
        <AccountOperations />
        <BalanceDisplay />
      </>}
    </div>
  );
}

export default App;
