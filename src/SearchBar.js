import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Type a term or phrase</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) =>
              this.setState({ term: e.target.value })
            }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;