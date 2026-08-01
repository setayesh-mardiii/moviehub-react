import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import "./Login.css";


function Login() {


  const [formData, setFormData] = useState({

    username:"",
    email:"",
    password:"",

  });



  const [errors,setErrors] = useState({});


  const [showModal,setShowModal] = useState(false);




  const handleChange = (e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value,

    });


  };





  const validate = ()=>{


    let newErrors={};



    if(!formData.username.trim()){

      newErrors.username="Username is required";

    }




    if(!formData.email.trim()){

      newErrors.email="Email is required";

    }

    else if(!/\S+@\S+\.\S+/.test(formData.email)){

      newErrors.email="Invalid email address";

    }




    if(!formData.password){

      newErrors.password="Password is required";

    }

    else if(formData.password.length < 6){

      newErrors.password="Password must be at least 6 characters";

    }



    setErrors(newErrors);


    return Object.keys(newErrors).length===0;


  };







  const handleSubmit=(e)=>{


    e.preventDefault();



    if(validate()){


      setShowModal(true);


      console.log(formData);


    }


  };





  return (


    <div className="login-page">



      <div className="login-card">


        <h1>
          Welcome Back
        </h1>





        <form onSubmit={handleSubmit}>



          <div className="input-box">

            <FaUser/>


            <input

              type="text"

              name="username"

              placeholder="Username"

              value={formData.username}

              onChange={handleChange}

            />


          </div>


          {
            errors.username &&
            <span className="error">
              {errors.username}
            </span>
          }







          <div className="input-box">


            <FaEnvelope/>


            <input

              type="email"

              name="email"

              placeholder="Email"

              value={formData.email}

              onChange={handleChange}

            />


          </div>



          {
            errors.email &&
            <span className="error">
              {errors.email}
            </span>
          }







          <div className="input-box">


            <FaLock/>


            <input

              type="password"

              name="password"

              placeholder="Password"

              value={formData.password}

              onChange={handleChange}

            />


          </div>




          {
            errors.password &&
            <span className="error">
              {errors.password}
            </span>
          }







          <button type="submit">

            Login

          </button>




        </form>







        <p className="register-link">


          Don't have an account?


          <Link to="/register">

            Register

          </Link>


        </p>



      </div>








      {
        showModal && (


          <div className="success-overlay">


            <div className="success-modal">



              <div className="success-icon">

                ✓

              </div>





              <h2>

                Login Successful

              </h2>





              <p>

                Welcome back to MovieHub 🎬

              </p>





              <button

                onClick={()=>setShowModal(false)}

              >

                OK

              </button>



            </div>


          </div>


        )
      }





    </div>


  );

}



export default Login;