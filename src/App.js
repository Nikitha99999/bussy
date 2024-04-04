import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Fashion from './components/Fashion'
import Home from './components/Home'
import Environment from './components/Environment'
import LifeStyle from './components/LifeStyle'
import Technology from './components/Technology'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Fashion" component={Fashion} />
          <Route exact path="/Technology" component={Technology} />
          <Route exact path="/LifeStyle" component={LifeStyle} />
          <Route exact path="/Environment" component={Environment} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default App
