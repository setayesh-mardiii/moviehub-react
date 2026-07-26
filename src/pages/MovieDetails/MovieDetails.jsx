import { useParams } from "react-router-dom";


function MovieDetails() {


  const { id } = useParams();


  return (

    <div style={{ paddingTop: "100px" }}>


      <h1>
        Movie Details Page
      </h1>


      <h2>
        Movie ID: {id}
      </h2>


    </div>

  );

}


export default MovieDetails;