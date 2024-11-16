import { Navigate } from 'react-router-dom'

function ProtectedRoute({ loggedIn, children}) {
    if(!loggedIn){
        return <Navigate to="/Login"/>
    }

    return children
}

export default ProtectedRoute