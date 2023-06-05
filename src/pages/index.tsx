import { IProductResponse } from "@/interfaces";
import { Home } from "@/screens/Home";
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
    const res: IProductResponse = {
      count: 0,
      currentPage: 0,
      products: [
        {
          id: 1,
          isAvailable: true,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },

        {
          id: 2,
          isAvailable: false,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },
        {
          id: 3,
          isAvailable: true,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },
        {
          id: 4,
          isAvailable: true,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },
        {
          id: 5,
          isAvailable: true,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },
        {
          id: 6,
          isAvailable: true,
          photo: "/test-product.jpeg",
          price: 100,
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nisi et inventore necessitatibus officiis hic, commodi suscipit soluta nostrum perferendis laboriosam qui quia ipsum dolores iste voluptas facere possimus aut.",
          title: "Laptop Pro",
        },
      ],
      totalPages: 0,
    };

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
