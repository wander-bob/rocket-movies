import {Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home";
import {MoviePreview} from "../pages/MoviePreview";
import {NewMovie} from "../pages/NewMovie";
import {Profile} from "../pages/Profile";
import {NotFound} from "../pages/NotFound";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/new-movie" element={<NewMovie/>}/>
      <Route path="/movie-preview" element={<MoviePreview/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}