import './dashboard.css'
import cardImage from './images/slider2.jpg'
import arrow from './images/arrow-icon-1177.png'
function Dashboard() {
    return (
        <div className="container-fluid ">
            <div className='Dashboard-div1-content'>
                <center>
                    <div className='container card-div'>
                        <div className='one-card'>
                            <div class="card">
                                <img src={cardImage} class="card-img-top" alt="create_inqury" />
                                <div class="card-body">
                                    <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
                                </div>
                            </div>
                        </div>

                        <div className='one-card'>
                            <div class="card">
                                <img src={cardImage} class="card-img-top" alt="create_inqury" />
                                <div class="card-body">
                                    <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
                                </div>
                            </div>
                        </div>

                        <div className='one-card'>
                            <div class="card">
                                <img src={cardImage} class="card-img-top" alt="create_inqury" />
                                <div class="card-body">
                                    <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
                                </div>
                            </div>
                        </div>

                        <div className='one-card'>
                            <div class="card">
                                <img src={cardImage} class="card-img-top" alt="create_inqury" />
                                <div class="card-body">
                                    <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
                                </div>
                            </div>
                        </div>

                        <div className='one-card'>
                            <div class="card">
                                <img src={cardImage} class="card-img-top" alt="create_inqury" />
                                <div class="card-body">
                                    <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
                                </div>
                            </div>
                        </div>



                    </div>
                </center>
            </div>
        </div>
        // <div className="container-fluid">
        //     <div className='home-div1-content'>
        //         <div className='card-collection'>
        //             <div className='for_card'>
        //                 <div class="card">
        //                     <img src={cardImage} class="card-img-top" alt="create_inqury" />
        //                     <div class="card-body">
        //                         <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
        //                     </div>
        //                 </div>
        //             </div>


        //             <div className='for_card'>
        //                 <div class="card">
        //                     <img src={cardImage} class="card-img-top" alt="create_inqury" />
        //                     <div class="card-body">
        //                         <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='for_card'>
        //                 <div class="card">
        //                     <img src={cardImage} class="card-img-top" alt="create_inqury" />
        //                     <div class="card-body">
        //                         <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='for_card'>
        //                 <div class="card">
        //                     <img src={cardImage} class="card-img-top" alt="create_inqury" />
        //                     <div class="card-body">
        //                         <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='for_card'>
        //                 <div class="card">
        //                     <img src={cardImage} class="card-img-top" alt="create_inqury" />
        //                     <div class="card-body">
        //                         <img src={arrow} style={{ height: '20px', width: '10px', paddingLeft: "259px", }} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Dashboard;