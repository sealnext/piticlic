import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import styles from "../styles/products.module.scss";
import productData from "./products.json";

const ProductsPage = () => {
  const ageOptions = [
    { label: "0-3 years", value: "0-3" },
    { label: "4-6 years", value: "4-6" },
    { label: "7-9 years", value: "7-9" },
    { label: "10+ years", value: "10+" },
  ];
  const categories = [
    { label: "treding", value: "Trending" },
    { label: "popular", value: "Popular" },
    { label: "recent", value: "Recent" },
  ];
  return (
    <div
      style={{
        backgroundImage: 'url("/kids.webp")',
        backgroundAttachment: "fixed",
      }}
      className="flex justify-center items-center min-h-[105vh] bg-teal-100"
    >
      <div className="container mx-auto px-4 py-8 relative">
        {/* Search bar */}
        <div
          className=" rounded-xl p-12"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <div className="flex justify-center">
            <div className={`${styles.searchContainer} rounded-lg`}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Cautati..."
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.ageDropdown}>
                <select className={styles.ageDropdown}>
                  {ageOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <img
                src="/products-img/search-icon.png"
                alt="Search Icon"
                className="w-14 h-14"
              />
            </div>
          </div>
          {/* Categories */}
          <div className="flex mb-4 mt-12">
            {categories.map((category, index) => (
              <div key={index} className="mr-4">
                <h2 className="text-xl font-bold">{category.value}</h2>
              </div>
            ))}
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {productData.map((product, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: "#edead7" }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto sm:w-[sm:w-[33vw]] h-auto rounded-xl">
                    <CardItem className="w-full mt-4">
                      <Image
                        src={product.image}
                        height="200"
                        width="200"
                        className="h-60 w-full object-cover rounded-xl"
                        alt={`${product.title} Thumbnail`}
                      />
                    </CardItem>
                    <CardItem className="invert text-xl font-bold text-neutral-600 text-white mt-2">
                      <h3>{product.title}</h3>
                    </CardItem>
                    <CardItem
                      as="p"
                      className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                    >
                      {product.description}
                    </CardItem>
                    <CardItem
                      as="p"
                      className="invert text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                    >
                      {product.age}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
