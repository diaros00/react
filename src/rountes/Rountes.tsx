import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Index from '../pages/Index'
import Register from '../pages/Register'

interface Props { }


const Rountes: React.FC<Props> = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </>
    )
}

export default Rountes