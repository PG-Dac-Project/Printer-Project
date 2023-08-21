
import axios from 'axios';
import './login.css'

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function AssignedTo(props) {
    debugger
    //   const[msg,setMsg] = useState('');
    const [tpersons, setTpersons] = useState([]);
    const [assignDetail,setAssignDetail] = useState({
        eid:props.location.state.eid,
       
    });

    let history = useHistory();

    useEffect(() => {
        const url = 'http://localhost:56304/api/AgentAssignTo';
        axios.get(url)
            .then((response) => {
                debugger
                var edata = response.data
                setTpersons(edata);
                
            })
            .catch((error) => {
                debugger
            })
    },[]);


    var formValue = (args) => {
        var copyOfLogin = { ...assignDetail }
        copyOfLogin[args.target.name] =
          args.target.value;
          setAssignDetail(copyOfLogin);

    }

   var handleSave = ()=>{
    const url = 'http://localhost:56304/api/AgentAssignTo';
    axios.post(url,{
        eid:assignDetail.eid,
        uid:assignDetail.tid
    })
        .then((response) => {
            debugger
             if (response.status == 200){
                history.push("/AgentDashboard");
             }
            
        })
        .catch((error) => {
            debugger
        })
        
   }

    return (

        <div className='cont-log'>
            <div>
                <form method='post' className='mx-auto' >

                    <div class="form-outline mb-4 mt-5">
                        <input type="text" id="form2Example1" name='EqID' value={assignDetail.eid} onChange={formValue} class="form-control" />
                        <label class="form-label" for="form2Example1">Enquity ID</label>
                    </div>

                    <div class="form-outline mb-4 mt-5">
                        <input type="text" id="form2Example1" name='custID' value={props.location.state.uid} onChange={formValue} class="form-control" />
                        <label class="form-label" for="form2Example1">Customer ID</label>
                    </div>

                    <div class="form-outline mb-4 mt-5">
                        <h4>Assign To</h4>
                    </div>

                    <div class="form-outline mb-4">
                        <select class="form-select" name='tid' value={tpersons} onChange={formValue} >
                            <option selected>Select one</option>
                            {
                                tpersons.map((sdata) => {
                                return (
                                    <option value={sdata.uid}> id {sdata.uid}:{sdata.fname} </option>
                                )
                                })
                            }

                        </select>
                       
                    </div>

                    <button type="button" onClick={handleSave}  class="btn btn-primary btn-block mb-4">Save</button>

                </form>


            </div>
        </div>


    );
}
export default AssignedTo;