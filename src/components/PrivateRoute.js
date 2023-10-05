import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Logo from 'assets/images/logo.png'
import { useHistory } from 'react-router-dom'
import Btn from './Btn'


function PrivateRoute(props) {
    const history = useHistory()
    const { ...rest } = props
    const [ skimToken, setSkimToken ] = useState(sessionStorage.getItem("skimToken"))

    useEffect(() => setSkimToken(sessionStorage.getItem("skimToken")), [])

    return (
        <div>
            {
                skimToken ? (
                    <Route { ...rest } >
                        <div className='py-5 h-screen flex flex-col'>
                            <div className='flex justify-between mx-20'>
                                <div className='flex items-center cursor-pointer' onClick={() => history.push("/")}>
                                    <img src={ Logo } alt="logo" />
                                    <h2 className='text-2xl pt-2'>SKIM</h2>
                                </div>

                                { rest.path !== "/join" && <Btn onClick={() => history.push("/join")} className="shadow-md shadow-zinc-600 animate-pulse">Join us!</Btn>}
                            </div>

                            <div className='mx-20 px-5 py-5 flex-1'>
                                {props.children}
                            </div>
                        </div>
                    </Route>
                ) : (
                    <Redirect to="/" />
                )
            }
        </div>
    )
}

export default PrivateRoute
