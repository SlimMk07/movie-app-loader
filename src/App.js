import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Rating from './rating-s';
import Movies from './movie-list'


const movies = [
  {
    id: 'Brightburn',
    image: require('./Brightburn.jpg'),
    titre: 'Brightburn',
    year: 2019,
    rating: 1,
    description: 'Lorem ipsum dolor sit amet consectetur elit. Commodi, cum laudantium? Ipsa eaque.',

  },
  {
    id: 'killing',
    image: require('./killing.jpg'),
    titre: 'killing Eve',
    year: 2015,
    rating: 3,
    description: 'Lorem ipsum dolor sit amet consectetur elit. Commodi, cum laudantium? Ipsa eaque.',

  },
  {
    id: 'Demise',
    image: require('./demise.jpg'),
    titre: 'Demise',
    year: 2016,
    rating: 2,
    description: 'Lorem ipsum dolor sit amet consectetur elit. Commodi, cum laudantium? Ipsa eaque.'
  },
  {
    id: 'Aquaman',
    image: require('./aqua.jpg'),
    titre: 'Aquaman',
    year: 2018,
    rating: 5,
    description: 'Lorem ipsum dolor sit amet consectetur elit. Commodi, cum laudantium? Ipsa eaque.'
  },
  {
    id: 'Jurassic',
    image: require('./jurassic.jpg'),
    titre: 'Jurassic',
    year: 2017,
    rating: 4,
    description: 'Lorem ipsum dolor sit amet consectetur elit. Commodi, cum laudantium? Ipsa eaque.'
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newmovies: movies,
      rating:1,
      title:""
    }
  }
  
  titre = (fix, rating) => {
    let filtred = movies
    if(!rating){
      filtred = movies.filter((el) => el.titre.toLowerCase().indexOf(fix) > -1)
      .filter((el) => el.rating>=this.state.rating)
      this.setState({ title: fix })
    }
    else{
      filtred = movies.filter((el) => el.titre.toLowerCase().indexOf(this.state.title) > -1)
      .filter((el) => el.rating>=rating)
      this.setState({ rating })
    }
    this.setState({ newmovies: filtred })
  }
  // test= setTimeout(
  //   () => {
  //     this.addNewMovie({
  //       id: 'newmovie',
  //       title: 'The New Movie',
  //       rating: 5,
  //       year: 2018
  //     })
  //   },
  //   5000)


  // addNewMovie=(newMovie)=> {
  //   this.setState({
  //     newmovies: this.state.newmovies.concat(newMovie)
  //   })
  // }

  

  render() {
    return (
      <div className="container">
        <div className="head">
          <Search getFix={(x) => this.titre(x)} />
          <Rating getRating={(y)=>this.titre(null, y)}/>
        </div>
        <Movies movie={this.state.newmovies} />
        
      </div>
    );
  }
}

export default App;
