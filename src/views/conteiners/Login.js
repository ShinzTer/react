import { bindActionCreators } from "redux";
import { loginUser } from "../../actions/UserActions";
import { connect } from "react-redux";
import Login from "../components/App/Login";

const mapDispatchToProps = dispatsh => {
    return{
        loginUser: bindActionCreators(loginUser, dispatsh)
    }
}

export default connect(null, mapDispatchToProps)(Login)