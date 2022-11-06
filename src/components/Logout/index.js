import { GoogleLogin, GoogleLogout } from 'react-google-login'

const clientId = "976670356776-c8tl101uq30deet2o0j0afoegvklj5dc.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Log out successful!")
    }

    return(
        <div id='signOutButton'>
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout