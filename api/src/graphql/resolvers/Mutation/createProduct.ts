import Product from "../../../db/models/products";
import { ProductAttributes } from "../../../db/models/types";

const createProductResolver = async (
  context: any,
  {
    name,
    description,
    price,
    muestraimg,
    brandId,
    CategoriesId,
    ModelsId,
  }: ProductAttributes
) => {
  const product = await Product.create({
    name,
    description,
    price,
    muestraimg: "https://asahimotors.com/images/nodisponible.png",
    brandId,
    detalleimg1: "https://asahimotors.com/images/nodisponible.png",
    detalleimg2: "https://asahimotors.com/images/nodisponible.png",
    detalleimg3: "https://asahimotors.com/images/nodisponible.png",
  });

  await product.$add("category", CategoriesId); // 3er arg , throw:{}

  await product.$add("model", ModelsId);

  return product;
};

export default createProductResolver;
