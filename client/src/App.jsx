import { Switch, Route } from "react-router-dom"
// Pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  )
}

export default App
