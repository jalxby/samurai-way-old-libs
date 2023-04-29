import React from "react";

type PropsType = {
  status: string;
};

class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false,
  };

  toggleEditMode(){
   this.setState({editMode:!this.state.editMode})
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} type={"text"} value={this.props.status}/>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
