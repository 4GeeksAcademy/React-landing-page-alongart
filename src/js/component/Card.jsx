import React from "react";

export default function Card(props){
    // {props.textContent}
     
    return (

        // <div className="container-fluid">
        //     <div className="row m-2">
                <div className="col-md-3 mt-2 p-3">
                    <div className="card text-center h-100">
                        <img src={props.image} className="card-image-top" alt="image"></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.header}</h5>
                            <p className="card-text">{props.content}</p>
                            
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">{props.button}</a>
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>

       

    )
}