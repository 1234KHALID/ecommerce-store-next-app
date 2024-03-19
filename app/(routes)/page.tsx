import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboards from "@/components/ui/billboard";

import Container from "@/components/ui/container";

const HomePage=async()=> {
  const products=await getProducts({isFeatured:true})
  const billboad= await getBillboard("65f179e1320677057f8af129")
  return (
 <Container>
  <div>
    <Billboards data={billboad}/>
  </div>
 </Container>
  )
}

export default HomePage
