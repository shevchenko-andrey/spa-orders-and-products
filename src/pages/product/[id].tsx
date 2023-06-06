// import { useRouter } from "next/router";

const ProductPage = () => {
  // const router = useRouter();

  return (
    <section className="container p-3 ">
      <h2 className="text-4xl mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eveniet.
      </h2>
      <div className="flex">
        <img
          src="https://content2.rozetka.com.ua/goods/images/big/221214151.jpg"
          alt="iphone"
          className="mr-10"
        />
        <div>
          <p className="text-4xl mb-5">$ 1000</p>
          <p className="text-green-600 mb-5">Available</p>
          <p className="mb-5">Detail: 1000000</p>
          <button className="mb-10 py-3.5 px-11 border-solid border-green-500 bg-green-500 text-white rounded-md uppercase">
            Add to cart
          </button>
          <p className="mb-5 font-medium text-amber-800">Description</p>
          <p className="mb-5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error animi illo
            accusantium sapiente ratione.
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium, nisi
            aspernatur cupiditate doloremque praesentium repellendus ipsa, cumque, facilis
            reprehenderit error repudiandae reiciendis velit. Minus animi ducimus dolore
            necessitatibus. Fugit!
          </p>
          <p className="mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quae rem totam amet
            officia! Facilis officia enim suscipit quaerat hic reiciendis voluptatem fugiat maxime
            eum repellendus ipsam ducimus consequuntur cumque rerum unde distinctio illo voluptas
            atque odit, aspernatur aliquid doloribus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
