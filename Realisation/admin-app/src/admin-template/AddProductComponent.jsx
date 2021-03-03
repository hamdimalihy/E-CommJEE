
import React, { useEffect, useState }  from 'react'; 
import CategorieService from './CategorieService';
import ProductsService from './ProductsService';

export default  function AddProductComponent  (){
      const [saved,setSaved]= useState(false)
      const [unsaved,setUnsaved]= useState(false)
     
      const [categories, setCategories] = useState([]);

      useEffect(()=>{CategorieService.getAllCategorie().then((res)=>setCategories(res.data))},[] )

      
     
      const [name, setName] = useState('')
      const [shortDescription, setDescreption ] = useState('')
      const [stock, setQte] = useState(0)
      const [price, setPrice] = useState(0)
      const staut =true ;
      //const [staut,setStatut] = useState(true)
      const [image, setImage] = useState('')
      const [category, SetCategorie] = useState(1)
      const formData = new FormData();
      formData.append("name",name);
      formData.append("shortDescription",shortDescription);
      formData.append("staut",staut);
      formData.append("stock",stock);
      formData.append("image",image);
      formData.append("idCategorie",category);
      formData.append("price",price);

      const saveProduct=()=>{
          ProductsService.addProduct(formData)
          .then(res=>{setUnsaved(false); setSaved(true)})
          .catch(err=>{setUnsaved(true); setSaved(false)})
      }
      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Ajout Produit</p>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-row">
                      <div className="col">
                          <div className="form-group">
                            <label htmlFor="username"><strong>ProductName</strong></label><input className="form-control" type="text" placeholder="product name"  onChange={(event)=>setName(event.target.value)}/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="price"><strong>price</strong></label><input className="form-control" type="number" placeholder="product price" min="1" onChange={(event)=>setPrice(event.target.value)}/>
                          </div>
                      <div>
                          <div className="form-group"><label htmlFor="description"><strong>description</strong><br/></label><textarea className="form-control" rows="3" onChange={(event)=>setDescreption(event.target.value)}></textarea></div>
                          <div className="form-group"><label htmlFor="Image"><strong>Image</strong></label><input className="form-control" type="text" placeholder="URL de l'image" name="img" onChange={(event)=>setImage(event.target.value)}/>
                         </div>
                          <div className="form-group"><label htmlFor="Quantity"><strong>Quantity</strong></label><input className="form-control" type="text" placeholder="stock" onChange={(event)=>setQte(event.target.value)} /></div>
                          <div className="form-floating">
                            <label htmlFor="floatingSelect" >chose the category </label><br/>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>SetCategorie(event.target.value)} onClick={console.log(category)} >
                               {
                                   categories.map( (categorie)=>
                                   <option  key={categorie.idCategorie} defaultValue value={categorie.idCategorie}>{categorie.nomCategorie}</option>
                                   )}
                            </select>
                            </div>
                       </div>
                       <div>  
                       </div>
                      </div>
                  </div>
                  { unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}
                  { saved && <div className='alert alert-success' > product was added </div>}
                  <div className="form-group"><button className="btn btn-primary btn-sm" type="button" onClick={saveProduct}>Save</button></div>
              </form>
          </div>
       </div>
      
       </div>
      );
    }
