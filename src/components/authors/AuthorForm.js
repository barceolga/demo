import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const AuthorForm = ({
  courses,
  course,
  author,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{author.id ? "Edit" : "Add"} Author</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={author.name}
        onChange={onChange}
        error={errors.name}
      />
      {/*TODO: implement a select button in common directory for multiple selection for adding /editing skills to a new author
      https://stackoverflow.com/questions/43496123/react-selected-options-for-multiple-select*/}
      <TextInput
        name="experience"
        label="Experience"
        value={author.experience}
        onChange={onChange}
        error={errors.experience}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving" : "Save"}
      </button>
    </form>
  );
};

AuthorForm.propTypes = {
  courses: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default AuthorForm;
