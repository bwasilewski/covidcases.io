import React from 'react'
import dotenv from 'dotenv'
import About from './containers/About'
import Index from './containers/Index'
// import Page404 from './containers/404'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Helmet } from 'react-helmet'

import { GeoProvider, LoadingProvider } from './contexts'

dotenv.config()
const history = createBrowserHistory()

function App() {
  return (
		<LoadingProvider>
			<GeoProvider>
				<Helmet>
					<link rel="icon" type="image/png" href="favicon.png" sizes="16x16" />
				</Helmet>
				<Router history={history}>
					<Header />
					<Route exact path="/" component={Index} />
					<Route exact path="/about" component={About} />
					{/* <Route component={Page404} /> */}
					<Footer />
				</Router>
			</GeoProvider>
		</LoadingProvider>
  )
}

export default App
