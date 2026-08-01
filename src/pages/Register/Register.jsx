import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import "./Register.css";


function Register(){


  const [formData,setFormData] = useState({

    username:"",
    email:"",
    password:"",
    confirmPassword:"",

  });




  const [errors,setErrors] = useState({});



  const [showModal,setShowModal] = useState(false);







  const handleChange = (e)=>{


    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });


  };







  const validate = ()=>{


    let newErrors = {};





    if(!formData.username.trim()){


      newErrors.username = "Username is required";


    }







    if(!formData.email.trim()){


      newErrors.email = "Email is required";


    }

    else if(!/\S+@\S+\.\S+/.test(formData.email)){


      newErrors.email = "Invalid email address";


    }







    if(!formData.password){


      newErrors.password = "Password is required";


    }

    else if(formData.password.length < 6){


      newErrors.password = "Password must be at least 6 characters";


    }







    if(!formData.confirmPassword){


      newErrors.confirmPassword = "Please confirm your password";


    }

    else if(formData.password !== formData.confirmPassword){


      newErrors.confirmPassword = "Passwords do not match";


    }







    setErrors(newErrors);



    return Object.keys(newErrors).length === 0;



  };







  const handleSubmit = (e)=>{


    e.preventDefault();




    if(validate()){


      setShowModal(true);


      console.log(
        "Register Data:",
        formData
      );


    }


  };








  return (

    <div className="register-page">


      <div className="register-card">


        <h1>

          Create Account

        </h1>





        <form onSubmit={handleSubmit}>




          {/* Username */}


          <div className="input-box">


            <FaUser />


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
          




          {/* Email */}


          <div className="input-box">


            <FaEnvelope />


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








          {/* Password */}


          <div className="input-box">


            <FaLock />


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









          {/* Confirm Password */}


          <div className="input-box">


            <FaLock />


            <input

              type="password"

              name="confirmPassword"

              placeholder="Confirm Password"

              value={formData.confirmPassword}

              onChange={handleChange}

            />


          </div>





          {
            errors.confirmPassword &&

            <span className="error">

              {errors.confirmPassword}

            </span>
          }









          <button type="submit">

            Register

          </button>





        </form>









        <p className="register-link">


          Already have an account?


          <Link to="/login">

            Login

          </Link>


        </p>





      </div>
      




      {/* Success Modal */}



      {
        showModal && (



          <div className="success-overlay">



            <div className="success-modal">





              <div className="success-icon">

                ✓

              </div>






              <h2>

                Registration Successful

              </h2>






              <p>

                Welcome to MovieHub 🎬

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





export default Register;