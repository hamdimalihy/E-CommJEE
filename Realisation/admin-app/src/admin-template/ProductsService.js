import axios from 'axios'
class ProductsService {
    allProducts=() =>{
        return axios.get("http://localhost:8080/products")
    } 
    productById=(id) =>{
        return axios.get(`http://localhost:8080/product/${id}`)
    } 
    modifyProductPrice=(data) =>{
        return axios.put(`http://localhost:8080/modifyProductPrice`,data)
    }
    addProduct=(data) =>{
        return axios.post(`http://localhost:8080/addProduct`,data)
    }
}

export default new ProductsService () ;