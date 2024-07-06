import "./register.css";
import { useState } from "react";
import { user_api } from "../../userapi_url";
import axios from "axios";

function Register(){
    const [name , setname]  = useState();
    const [email , setemail] = useState();
    const[password , setpassword]= useState();
    const[ address, setaddress]= useState();
    const[city, setcity]= useState();
    const[gender, setgender]= useState();
    const[output, setoutput]= useState();

    var handelsubmit=()=>{

        var userdetail = {"name":name , "email":email , "password":password , "address":address , "city":city ,"gender":gender ,}

        axios.post(user_api+"save",userdetail).then((resolve)=>{
setoutput("succesfully registered");
setname("");
setemail("");
setpassword("");
setaddress("");
setcity("");
setgender("");

        }).catch((err)=>{
            console.log(err);
        })
    }

    return(<>
    <font color="red">{output}</font>
    <form>
    <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control"  value={name}  onChange={e=>setname(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control"  value={email} onChange={e=>setemail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password</label>
    <input type="text" class="form-control"  value={password}  onChange={e=>setpassword(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">address</label>
    <input type="address" class="form-control"  value={address}  onChange={e=>setaddress(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="city" class="form-label">city</label>
    <input type="text" class="form-control"  value={city}  onChange={e=>setcity(e.target.value)}/>
  </div>
    <label for="gender">Gender</label> &nbsp;&nbsp;&nbsp;

   Male<input type="radio" value ="male" name="gender" onChange={e=>setgender(e.target.value)}/>&nbsp;&nbsp;&nbsp;
   Female <input type="radio" value ="female" name="gender"  onChange={e=>setgender(e.target.value)}/>&nbsp;&nbsp;&nbsp;
   
  <button type="button" class="btn btn-primary" onChange={handelsubmit}>Submit</button>
</form>
    </>)
}
export default Register