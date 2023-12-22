import { connect } from "react-redux";
import Form from "../components/App/Form";
import { bindActionCreators } from "redux";
import { addUser } from "../../actions/UserActions";

const mapStateToProps = state => {
    return {
        characterLastId: state.characterLastId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: bindActionCreators(addUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)