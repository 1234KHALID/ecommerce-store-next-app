import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboards from "@/components/ui/billboard";

import Container from "@/components/ui/container";

const HomePage=async()=> {
  const products=await getProducts({isFeatured:true})
  const billboad= await getBillboard("65f94107f12a5288c4164296")
  
  return (
 <Container>
  <div className="space-y-10 pb-10">
    <Billboards data={billboad}/>
  </div>
  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
    <ProductList title="Featured Products" items={products}/>
  </div>
 </Container>
  )
}

export default HomePage
