import {connect} from "react-redux";
import Friends from "./Friends";
import {StateType} from "../../../../redux/Types";

const mapStateToProps = (state: StateType) => {
    return {
        friends: state.messagesPage.friends
    }
}
export const FriendsContainer = connect(mapStateToProps)(Friends)