import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxCheck,
  requiredField,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../../common/FormsControl/FormsControls";

export type FormDataType = {
  post: string;
};
const maxLength10 = maxCheck(10);
const PostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <form name={"PostForm"} action="" onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"post"}
            placeholder={"write post"}
            component={Textarea}
            type={"text"}
            validate={[requiredField, maxLength10]}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export const ReduxPostForm = reduxForm<FormDataType>({ form: "postForm" })(
  PostForm
);
