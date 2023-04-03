import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout Component", () => {
  it("should render one children", () => {
    const { getByText } = render(
      <Layout title="Test Title">
        <h1>Hello World</h1>
      </Layout>
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("should render more one children", () => {
    const { getByText } = render(
      <Layout title="Test Title">
        <h1>Hello World</h1>
        <p>Test</p>
      </Layout>
    );
    expect(getByText("Hello World")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });
});
