import ProductCard from "./ProductCard"

const Products = ({products}) => {
   
  return (
    <div className="product-list">
    {products.map((urun)=>(
        <ProductCard key={urun.id} {...urun}/>
    ))
    }
    </div>
  )
}

export default Products
