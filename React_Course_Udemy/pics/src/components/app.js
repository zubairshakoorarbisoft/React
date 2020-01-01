import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term){
        // One way to get the response asyncronously
        // axios.get('https://api.unsplash.com/search/photos',{
        //     params: { query: term},
        //     headers: {
        //         Authorization: 'Client-ID 383c80b11dfa5f6c5c86433762751fa44150320454937fa85a071a5ae745c977'
        //     }
        // }).
        // then(response => {
        //     console.log(response.data.results)
        // });

        // Second Way to get the response asyncronously
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 383c80b11dfa5f6c5c86433762751fa44150320454937fa85a071a5ae745c977'
            }
        });
        console.log(response.data.results);
    }
  render() {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar handleSearch={this.onSearchSubmit}/>
        </div>
    );
  }
}

export default App;
