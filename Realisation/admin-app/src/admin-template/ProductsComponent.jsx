import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsService from './ProductsService';

export default function ProductsComponenet() {

    const [products,setProducts]=useState([]);
    useEffect(() => {
        ProductsService.allProducts().then(res=>(setProducts(res.data)));
    },[]);
    
    const [details,setDetails]= useState(false);
    const [product,setProduct]= useState('');

    const hideDetails = ()=>{
        setDetails(false);}
    
    const showDetails = (product)=>{

        setProduct(product)
        setDetails(true);
    }
    
    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Products</p>
                </div>
           {!details && <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <Link to="/adminMain/new-product"  className="btn btn-success" ><i className="fas fa-plus-circle"></i> new product</Link>
                    </div>
                   
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>statut</th>                               
                                <th>image</th>
                                <th>price</th>
                                <th></th>       
                           </tr>
                        </thead>
                        <tbody>
                           {
                               products.map(
                                   product => 
                                   <tr key={product.id} >
                                   <td>{product.id}</td>
                                   <td >{product.name}</td>
                                   <td>{product.status}</td>
                                   <td> <img src="/assets/img/admins/" width="100" height="100"alt='product img'></img></td>
                                   <td>{product.price} dhs</td>
                                   <td><button className="btn btn-sm btn-warning" onClick ={()=>showDetails(product)} >show</button></td> 
                                   </tr>  
                               )
                           }
                        </tbody>
                    </table>
                </div>
            </div> }    
            { details &&
                <div className="card-body">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>details</th>       
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.stock}</td>
                                <td>{product.shortDescription}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-sm btn-warning " onClick={hideDetails}> returner</button> 
                 </div>                
            }     
            </div>
    )
}