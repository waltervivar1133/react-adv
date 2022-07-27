import { ProductCard } from "../components/index";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffe",
    image: "/coffee-mug.png",
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Cafe"} />
          <ProductCard.ItemHandler />
        </ProductCard>
      </div>
    </div>
  );
};