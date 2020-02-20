import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick }) => (
  <>
    {courses.length === 0 ? (
      <div>
        <h2>There are no courses available</h2>
      </div>
    ) : (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {courses
            .sort((a, b) => {
              return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
            })
            .map(course => {
              return (
                <tr key={course.id}>
                  <td>
                    <a
                      className="btn btn-light"
                      href={"http://pluralsight.com/courses/" + course.slug}
                    >
                      Watch
                    </a>
                  </td>
                  <td>
                    <Link to={"/course/" + course.slug}>{course.title}</Link>
                  </td>
                  <td>{course.authorName}</td>
                  <td>{course.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDeleteClick(course)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )}
  </>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
