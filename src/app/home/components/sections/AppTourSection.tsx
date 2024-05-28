"use client";

import React from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import { BsArrowDown, BsFillArrowLeftCircleFill } from "react-icons/bs";
import useWindowWidth from "src/app/custom-hooks/useWindowWidth";
import useScreenType from "src/app/custom-hooks/useScreenType";

const AppTourSection = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.apptour_section}>
      <div className={styles.apptour_section_container}>
        <p className={styles.take_app_tour}>
          Take our App Tour <BsArrowDown />
        </p>

        <h3 className={styles.take_app_tour_heading}>
          A Marketplace for your favourite ethnic stores
        </h3>

        <div className={styles.tours_content}>
          {windowWidth && windowWidth <= 767 && (
            <div className={styles.tour_images}>
              <div className={styles.tour_image}>
                <Image
                  src="/images/woman-with-pineapple.jpg"
                  alt="woman shopping"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.tour_image}>
                <Image
                  src="/images/tour2.jpg"
                  alt="fruits and vegetables"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.tour_image}>
                <Image
                  src="/images/tour1.jpg"
                  alt="plate of food"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.tour_image}>
                <Image
                  src="/images/andy-unsplash.jpg"
                  alt="fruits and vegetables"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}

          {windowWidth && windowWidth > 767 && (
            <div className={styles.app_preview_image}>
              <Image
                src="/svgs/app_preview.svg"
                alt="app preview image"
                width={100}
                height={205}
                loading="eager"
                layout="responsive"
              />
            </div>
          )}

          <div className={styles.arrows}>
            <BsFillArrowLeftCircleFill />
            <BsFillArrowLeftCircleFill />
            <BsFillArrowLeftCircleFill />
            <BsFillArrowLeftCircleFill />
          </div>

          <div className={styles.tours_text_content_cards}>
            <div className={styles.tours_text_content_card}>
              <h3>
                <span>Search</span> for all your ethnic stores
              </h3>
              <p>
                Discover new ethnic stores in your area from your favorite
                african corner to your asian pop store.{" "}
                <u>
                  Our advanced search tool makes it easy to find them easily.
                </u>
              </p>
            </div>
            <div className={styles.tours_text_content_card}>
              <h3>
                <span>Shop</span> from all your favorite stores
              </h3>
              <p>
                No more navigating through crowded aisles or hunting for elusive{" "}
                {"ingredients - now "}
                you can effortlessly shop from the convenience of your home.{" "}
                <u>
                  Dive into a diverse selection of products from the stores you
                  love.
                </u>
              </p>
            </div>

            <div className={styles.tours_text_content_card}>
              <h3>
                <span>Browse</span> over 100,000 products
              </h3>
              <p>
                Dive into a world of cultural richness where we have over 100,00
                of products spring from your{" "}
                <u>
                  fav spices to your beauty product from your local beauty
                  supply stores.
                </u>
              </p>
            </div>
            <div className={styles.tours_text_content_card}>
              <h3>
                <span>Enjoy</span> Delivery & Convenience
              </h3>
              <p>
                Simply browse, select, and let us handle the rest. We'll have
                your handpicked items <u>delivered right to your doorstep.</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTourSection;
