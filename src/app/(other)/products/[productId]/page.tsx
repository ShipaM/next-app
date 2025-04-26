import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> => {
  const id = (await params).productId;

  return {
    title: `Product ${id}`,
    description: `Product ${id} - description`,
  };
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Product Details {productId}</h1>;
}

// export default async function ProductDetails({ params }) {
//   const productId = (await params).productId;
//   return <h1>Описание продукта {productId}</h1>;
// }
