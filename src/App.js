import React from "react";
import unsplash from './api/unsplash';
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {images: []};

  onFormSubmitFromApp = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmitFromApp} />
        There are {this.state.images.length} photos
      </div>
    );
  }
}

export default App;