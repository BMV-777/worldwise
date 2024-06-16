import PageNav from "../../PagNav/PageNav";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.product}>
      <PageNav />

      <h1>Product</h1>
    </div>
  );
}

export default Product;
