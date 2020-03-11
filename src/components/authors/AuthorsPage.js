import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuthorsList from "./AuthorsList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class AuthorsPage extends React.Component {
  state = {
    redirectToAddAuthorPage: false
  };
  componentDidMount() {
    const { courses, authors } = this.props;
    if (courses.length === 0) {
      this.props.actions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      this.props.actions.loadAuthors().catch(error => {
        alert("Loading authors failed " + error);
      });
    }
  }
  // Async await instead of simple promise.
  handleDeleteAuthor = async author => {
    toast.success("Author deleted");
    try {
      await this.props.actions.deleteCourse(author);
    } catch (error) {
      toast.error("Delete failed " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirectToAddAuthorPage && <Redirect to="/author" />}
        <h2>Authors</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            {/*this is called fragment, and it's preferible to use this element instead of a div when wrapping up JSX syntax in single parent element*/}
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddAuthorPage: true })}
            >
              Add Course
            </button>
            <AuthorsList
              authors={this.props.authors}
              onDeleteClick={this.handleDeleteAuthor}
            ></AuthorsList>
          </>
        )}
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    authors:
      state.courses.length === 0
        ? []
        : state.authors.map(author => {
            return {
              ...author,
              id: state.authors.find(a => a.id === author.authorId)
            };
          }),
    courses: state.courses,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
