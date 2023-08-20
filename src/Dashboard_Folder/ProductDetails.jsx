import '../navbar_use.css'
import '../Container.css'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
function ProductDetails() {
    debugger
    
    // const[currentProduct,setCurrentProduct]=useState({productId: "",
    // modelName: "",
    // productSerialNumber: ""})
    let history = useHistory();
    const [showProductDetails, setShowProductDetails] = useState([]);
    var pushUpdateProduct = (pid) => {
        debugger

        history.push('/UpdateProduct',pid)
    }
    useEffect(()=>{
        debugger
        // window.sessionStorage.getItem("uid");
        var uid=3;
        axios.get(`http://localhost:54273/api/Product/${uid}`)
        .then((response)=>{
            debugger
            if(response.status==200)
            {
                //setShowProductDetails(response.data);
                var data=response.data;
                setShowProductDetails(data);
                console.log(showProductDetails);
            }
        })
        .catch((error)=>{
            debugger
            if(error!=null)
            {
                swal("Sorry!","Something went wrong")
            }
        })
    },[])
    

    return (
        
        <div className='container-fluid' style={{ backgroundColor: "white" }}>

            <div className="table-responsive">
                <h4 className='text-center'>Product Details</h4>
                <table className="table align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Product Id</th>
                            <th>Model Name</th>
                            <th>Product Serial Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                        showProductDetails.map((currentProduct)=>{
                       return <tr key={currentProduct.pid}>
                            <td>{currentProduct.pid}</td>
                            <td>{currentProduct.pmodel_name}</td>
                            <td>{currentProduct.pserial_no}</td>
                            <td><button className='btn btn-primary' onClick={()=>{pushUpdateProduct(currentProduct.pid)}}>Edit</button></td>
                        </tr>
                        })
                        }</tbody>
                </table>
            </div>


        </div>
    )
}
export default ProductDetails;