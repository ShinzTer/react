import { connect } from "react-redux"
import App from "../components/App/App"

const mapStateToProps = state => {
    return{
        isLogined: state.isLogined
    }
}

export default connect(mapStateToProps)(App)