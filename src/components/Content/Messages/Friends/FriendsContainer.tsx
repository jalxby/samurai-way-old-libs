import {connect} from "react-redux";
import Friends from "./Friends";
import {StoreType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StoreType) => {
    return {
        friends: state.messagesPage.friends
    }
}
export const FriendsContainer = connect(mapStateToProps)(Friends)