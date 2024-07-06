import axios from 'axios';
import {useEffect,useState} from 'react';

function Apk (){
    const [pDetails, setPDetails]=useState([]);
    useEffect(()=>{
        var apiurl= "https://jsonplaceholder.typicode.com/posts";
        axios.get(apiurl).then((result)=>{
            console.log(result.data);
        setPDetails(result.data);
        }).catch((error)=>{
            console.log(error)
        });
    });



    return(
   <>
   <table class="table table-borderd"> 
    <tr>
        <th> userid</th> 
        <th> id</th>
        <th> title</th>
        <th> Body</th>
    </tr>
    {
        pDetails.map((row)=>
            <tr>
                <td>{row.userId}</td>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}</td>
            </tr>
    )}
   </table>
   </>
)} export default Apk ;