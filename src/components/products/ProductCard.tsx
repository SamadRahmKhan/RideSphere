import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductCard({ product, className, style }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const categoryLabels: Record<string, string> = {
    mountain: "Mountain",
    road: "Road",
    city: "City",
    electric: "Electric",
    kids: "Kids",
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg bg-card border border-border transition-all hover:shadow-elevated hover:-translate-y-1",
        className
      )}
      style={style}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.bestSeller && (
            <Badge className="bg-accent text-accent-foreground">
              Best Seller
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="destructive">
              {discountPercent}% OFF
            </Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {categoryLabels[product.category]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.shortDescription}
        </p>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-foreground">
            ${product.price.toLocaleString()}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice!.toLocaleString()}
            </span>
          )}
        </div>

        {/* Colors Preview */}
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs text-muted-foreground mr-1">Colors:</span>
          {product.colors.slice(0, 3).map((color, i) => (
            <span
              key={i}
              className="text-xs text-muted-foreground"
            >
              {color}{i < Math.min(product.colors.length, 3) - 1 ? "," : ""}
            </span>
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{product.colors.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
