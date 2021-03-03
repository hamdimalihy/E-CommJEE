import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderFifteen from "../../wrappers/hero-slider/HeroSliderFifteen";
import TabProductEight from "../../wrappers/product/TabProductEight";

const HomeFashionSeven = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>E-SHOPPER | Home</title>
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderFifteen />
        {/* tab product */}
        <TabProductEight
          category="Galaxy"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionSeven;
