import React from 'react';
import styled from "@emotion/styled";

class SearchBar extends React.Component {
  state = { text: ""}
  handleInput = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit =(e) => {
    e.preventDefault();

    //Callback
    this.props.onSearchSubmit(this.state.text)
  }
  render() {
    return(
      <Box onSubmit={this.handleSubmit}>
      <label>Search Youtube</label>
      <br />
       <Input placeholder="Search" type="text" value={this.state.text} onChange={this.handleInput} />
      </Box>
    )
  }
}

export default SearchBar;

const Box = styled.form`
	width: 100%;
	padding: 0;
	font-family: Roboto, sans-serif;
	border-bottom: 1px solid black;

	label {
		padding: 1rem 0 0;
		font-weight: 800;
	}
`;

const Input = styled.input`
  width: 90%;
	border: 2px dashed grey;
  outline: none;
  padding: .4rem .5rem;
  margin: 1rem auto;
  font-size: 1rem;
	&:hover {
		border: 2px solid lightgreen;
	}

  &:focus {
    border: 2px solid green;
  }
`;