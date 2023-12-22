import { bindActionCreators } from "redux"
import {deleteUser, loginOut} from "../../actions/UserActions"
import { connect } from "react-redux"
import Table from "../components/App/Table"

const mapStateToProps = state => {
    return {
        characterData: state.characters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCharacter: bindActionCreators(deleteUser, dispatch),
        logOut: bindActionCreators(loginOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)