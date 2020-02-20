import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCourses } from "../../redux/actions/courseActions";

const Header = courses => {
  const activeStyle = { color: "#F15B2A" };
  const coursesNumber = courses.courses.length;

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      <div>
        {coursesNumber === 0 ? null : (
          <h3>Total courses number: {coursesNumber}</h3>
        )}
      </div>
    </nav>
  );
};
Header.propTypes = {
  courses: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDisptachToProps = {
  loadCourses
};

export default connect(mapStateToProps, mapDisptachToProps)(Header);
