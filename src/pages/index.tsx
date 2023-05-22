import { IProductResponse } from "@/interfaces";
import { Home } from "@/screens/Home";
import { productService } from "@/services/product/product.service";
import { detectErrorMessage } from "@/utils/detect-error-message";
import { errorAlert } from "@/utils/error-alert";
import { FC } from "react";

const initialProps: IProductResponse = {
  count: 0,
  currentPage: 0,
  products: [],
  totalPages: 0,
};

const HomePage: FC<IProductResponse> = ({ products, count, currentPage, totalPages }) => {
  return (
    <Home products={products} count={count} currentPage={currentPage} totalPages={totalPages} />
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  try {
    const res = await productService.getAllProducts();

    return {
      props: { ...res },
    };
  } catch (error) {
    const message = detectErrorMessage(error);
    errorAlert(message);
    return {
      props: initialProps,
    };
  }
};
