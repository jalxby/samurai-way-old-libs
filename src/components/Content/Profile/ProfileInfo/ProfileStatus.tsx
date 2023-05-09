import React, { ChangeEvent } from "react";

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};

class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidMount() {}

  onEditMode() {
    this.setState({ editMode: true });
  }

  offEditMode() {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  }

  onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ status: e.currentTarget.value });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log(prevState, "prevState");
    console.log(prevProps, "prevProps");
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.onEditMode.bind(this)}>
              {this.props.status || "double click to set yours status"}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.offEditMode.bind(this)}
              type={"text"}
              value={this.state.status}
              onChange={this.onChangeInput.bind(this)}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
