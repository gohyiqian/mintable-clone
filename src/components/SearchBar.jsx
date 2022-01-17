import React from "react";
import { Form } from "react-bootstrap";
import styles from "../App.module.css";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Work-In-Progress!");
  };
  return (
    <Form onSubmit={handleSubmit} inline="true" className={styles.search}>
      <Form.Control
        type="text"
        name="q"
        className="mr-sm-2 ml-sm-5"
        placeholder="Search for NFTs, Accounts, Attributes And More..."
        style={{ borderRadius: "20px" }}
      ></Form.Control>
    </Form>
  );
};

export default SearchBar;
