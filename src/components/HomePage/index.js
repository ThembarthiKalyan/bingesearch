import {useState, useEffect} from "react";
import Header from "../Header";
import "./index.css";

function HomePage(){
    const [movies,setMovies]=useState([]);
    const [searchValue,setSearchValue]=useState('');
    const [favorites, setAddFavorites]=useState([]);

    const getMovie= async(searchValue)=>{
        const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=14e2d7e8`;
        const res= await fetch(url);
        const response= await res.json();

        console.log(response);
        if(response.Search){
            setMovies(response.Search);
        }
    }


    useEffect(()=>{
        setTimeout(()=>{getMovie(searchValue);},2000);
        
    },[searchValue]);

    useEffect(()=>{
        const movieFavorites=JSON.parse(localStorage.getItem('savedFavorites'));
        if(movieFavorites!==null){
        setAddFavorites(movieFavorites);
        }
    },[]);

    const saveToLS=(items)=>{
        localStorage.setItem('savedFavorites', JSON.stringify(items));
    }

    const addFavorite=(movie)=>{
        const newList=[...favorites, movie];
        setAddFavorites(newList);
        saveToLS(newList);
    }

    const removeFavorite=(movie)=>{
        const newList=favorites.filter(
            (favorite)=>favorite.imdbID !== movie.imdbID
        );
        setAddFavorites(newList);
        saveToLS(newList);
    }
    console.log("favorites", favorites);

    return(
        <div>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="movies-div">
                {movies.map((movie,index)=>
                    <div className="card" Style={"width:300px; margin:10px"}>
                        <img className="card-img-top" src={movie.Poster} alt="movie" Style={"width:300px; height:500px"}/>
                        <div className="card-body">
                            <h4 className="card-title">{movie.Title}</h4>
                            <button onClick={()=>addFavorite(movie)} Style={"background: black; color: white; text-align:center;"}>Add to favorite <i className='fas fa-heart' Style={"color: red;"}></i></button>
                        </div>
                    </div>
                )}
            </div>
            <div Style={"text-align: center; background: rgb(0, 255, 255);"}><h3>Favorites</h3></div>
            <div className="movies-div">
                {favorites.length === parseInt(0) ? <div>No favorites</div> :
                favorites.map((favorite,index)=>
                    <div className="card" Style={"width:300px; margin:10px"}>
                        <img className="card-img-top" src={favorite.Poster} alt="movie" Style={"width:300px; height:500px"}/>
                        <div className="card-body">
                            <h4 className="card-title">{favorite.Title}</h4>
                            <button onClick={()=>removeFavorite(favorite)} Style={"background: black; color: white; text-align:center;"}>Remove Favorite</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default HomePage;