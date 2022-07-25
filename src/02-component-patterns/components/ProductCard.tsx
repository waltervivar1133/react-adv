import { ReactElement } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  image?: string;
}

interface ItemHandlerProps {
  counter: number;
  increaseBy: (value: number) => void;
}
export const ProductImage = ({ image = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={image ? image : noImage}
      alt="coffee-mug"
    />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ItemHandler = ({ counter, increaseBy }: ItemHandlerProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();
  return <div className={styles.productCard}>{children}</div>;
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.ItemHandler = ItemHandler;
