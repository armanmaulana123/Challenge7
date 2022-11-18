import { GoogleLogin } from 'react-google-login'
import React from 'react'

const clientId = "976670356776-c8tl101uq30deet2o0j0afoegvklj5dc.apps.googleusercontent.com"

function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }

    return (
        <div id="signButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />

        </div>
    )
}

export default Login