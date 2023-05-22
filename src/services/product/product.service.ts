import { IProduct } from "@/interfaces";
import { HttpService } from "../http";

class ProductService extends HttpService {
  constructor() {
    super({ isPublic: true });
  }

  async getAllProducts(page = 1, limit = 10) {
    const { data } = await this.http.get<{ products: IProduct[] }>("products", {
      params: { page, limit },
    });
    return data;
  }
}

export const productService = new ProductService();
