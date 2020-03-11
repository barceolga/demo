import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorsList = ({ authors, onDeleteClick }) => (
  <>
    {authors.length === 0 ? (
      <div>
        <h2>There are no authors available</h2>
      </div>
    ) : (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Years of experience</th>
            <th>Skills</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {authors
            .sort((a, b) => {
              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            })
            .map(author => {
              return (
                <tr key={author.id}>
                  <td>
                    <a
                      className="btn btn-light"
                      href={"http://pluralsight.com/authors/" + author.slug}
                    >
                      Learn more about author
                    </a>
                  </td>
                  <td>
                    <Link to={"/author/" + author.slug}>{author.name}</Link>
                  </td>
                  <td>{author.experience} years</td>
                  <td>{author.skills}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDeleteClick(author)}
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

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default AuthorsList;
