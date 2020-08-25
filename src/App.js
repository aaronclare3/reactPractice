import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onFormSubmitFromApp(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmitFromApp} />
      </div>
    );
  }
}

export default App;