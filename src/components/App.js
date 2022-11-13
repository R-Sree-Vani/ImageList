import React from "react";
import axios from "axios";
import SearchInput from "./Searchinput";
import ImageList from "./ImageList";

class App extends React.Component{

    state={images:[]}

    onSearchSubmit=async(entry)=>{
        
      const response=await axios.get(`https://pixabay.com/api/?key=31292653-c001768c3ec98ad11d53acd32&q=${entry}&image_type=photo&pretty=true`)
      // console.log(this)

      this.setState({images:response.data.hits})
       
    }
    render(){
    return(
        <div className="ui container" style={{marginTop:"30px"}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            {/* We have {this.state.images.length} images */}
            <ImageList images={this.state.images}/>
        </div>
    )
    }
}

export default App;