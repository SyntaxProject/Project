import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class SearchBars extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Szukaj"
        onChangeText={this.updateSearch}
        value={search}
        style={{ backgroundColor: 'white', paddingHorizontal: 20, borderRadius: 20, }}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
      />
    );
  }
}