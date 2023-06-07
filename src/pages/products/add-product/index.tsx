import { ProductInputField } from "@/components/ui/ProductInputField";
import { Formik, Form, Field } from "formik";

enum Categories {
  Laptops = "Laptops",
  Phones = "Phones",
  Computers = "Computers",
}

interface INewProduct {
  title: string;
  description: string;
  fullDescription: "";
  price: number;
  warrantyPeriod: number;
  category: Categories;
  image: string;
}

const NewProduct: React.FC = () => {
  const initialValues: INewProduct = {
    title: "",
    description: "",
    fullDescription: "",
    price: 0,
    warrantyPeriod: 1,
    category: Categories.Computers,
    image: "",
  };
  return (
    <div>
      <h1 className="ml-5 text-emerald-800 text-4xl font-medium">Add new product</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="flex flex-col p-3 ml-2 w-[600px]">
          <ProductInputField name="title" title="Title" />
          <label
            htmlFor="category"
            style={{ display: "block" }}
            className="block text-green-800 mb-2 text-xl"
          >
            Select category
          </label>
          <Field
            as="select"
            name="category"
            className="rounded-full border py-1 px-4 outline-none focus:border-purple-500 w-[600px] text-lime-700 cursor-pointer"
          >
            <option value={Categories.Computers} label={Categories.Computers}>
              {Categories.Computers}
            </option>
            <option value={Categories.Laptops} label={Categories.Laptops}>
              {Categories.Laptops}
            </option>
            <option value={Categories.Phones} label={Categories.Phones}>
              {Categories.Phones}
            </option>
          </Field>
          <ProductInputField name="description" title="Description" />
          <ProductInputField name="fullDescription" title="Full description" />
          <ProductInputField name="price" title="Price" />
          <ProductInputField name="warrantyPeriod" title="Warranty period" />
          <ProductInputField name="image" title="Image" type="file" accept="image/*" />
          <button
            type="submit"
            className="w-[100px] border-solid rounded border-2 border-green-800 mt-4 px-5 py-3 ml-auto mr-auto"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default NewProduct;
