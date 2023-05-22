import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center ">
      <p>
        Product <span>{router.query.id}</span> details
        <a className="block" onClick={() => router.back()}>
          Back
        </a>
      </p>
    </section>
  );
};

export default ProductPage;
