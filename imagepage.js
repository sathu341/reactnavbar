import React, { Component } from 'react';
const pic=new URL("../images/73ab2632db.jpg",import .meta.url)
const vd=new URL("./videos/Coronavirus - 33646.mp4",import .meta.url)
class Imagepage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <h1> Image</h1>
             <img src={pic} width="200" height="200"></img>
             <div> 
                   <video  width="100%" height="420" controls>
                       <source type="video/mp4" src={vd}></source>
                   </video>
                 </div>
            </>
        );
    }
}
 
export default Imagepage;
