import { Formik, Form, Field } from "formik";

interface INewProduct {
  title: string;
  description: string;
  price: number;
  from: string;
  to: string;
  isNew: boolean;
  group: string;
  order: string;
  date: string;
  image: string;
}

const NewProduct: React.FC = () => {
  const initialValues: INewProduct = {
    title: "",
    description: "",
    price: 0,
    from: "",
    to: "",
    isNew: true,
    group: "",
    order: "",
    date: "",
    image: "",
  };
  return (
    <div>
      <h1>Add new product</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" />
          <label htmlFor="description">Description</label>
          <Field id="description" name="description" placeholder="Description" />
          <label htmlFor="price">Price</label>
          <Field id="price" name="price" placeholder="Price" />
          <label htmlFor="from">From</label>
          <Field id="from" name="from" placeholder="From" />
          <label htmlFor="to">To</label>
          <Field id="to" name="to" placeholder="To" />
          <label htmlFor="isNew">isNew</label>
          <Field id="isNew" name="isNew" placeholder="isNew" />
          <label htmlFor="group">Group</label>
          <Field id="group" name="group" placeholder="Group" />
          <label htmlFor="title">Order</label>
          <Field id="order" name="order" placeholder="Order" />
          <label htmlFor="date">Date</label>
          <Field id="date" name="date" placeholder="Date" />
          <label htmlFor="image">Image</label>
          <Field id="image" name="image" placeholder="Image" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default NewProduct;
