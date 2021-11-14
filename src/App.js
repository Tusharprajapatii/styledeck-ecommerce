import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/Cart";
import { SignInAndSignUpPage } from "./pages/signinsignup/signin-signup";
import { SingleProduct } from "./pages/SingleProduct";
import { Header } from "./components/Header/header";
import { Footer } from "./components/footer";
import { Customers } from "./pages/Customers";
import { Wholesalers } from "./pages/Wholesalers";
import { Latest } from "./pages/latest";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/wholesalers" component={Wholesalers} />
          <Route exact path="/trends" component={Latest} />
          <Route exact path="/customer" component={SingleProduct} />
          <Route exact path="/wholesalers" component={SingleProduct} />
          <Route exact path="/trends" component={SingleProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
