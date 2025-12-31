import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return <Layout><div className="container py-20 text-center"><h1 className="text-2xl font-bold">Product not found</h1><Button asChild className="mt-4"><Link to="/products">Back to Products</Link></Button></div></Layout>;
  }

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />Back to Bikes</Link>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-primary">${product.price.toLocaleString()}</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>}
            </div>
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Specs */}
            <div className="mb-8">
              <h3 className="font-display font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-3 bg-muted rounded-md">
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes & Colors */}
            <div className="space-y-4 mb-8">
              <div><span className="font-semibold">Sizes:</span> {product.sizes.join(", ")}</div>
              <div><span className="font-semibold">Colors:</span> {product.colors.join(", ")}</div>
            </div>

            <Button size="lg" asChild className="w-full md:w-auto"><Link to="/contact">Inquire About This Bike</Link></Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
