import { ReactElement, useLayoutEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import styles from "./products.module.css";
import {
  Button,
  CaloriesTable,
  Medias,
  PackItem,
  Popper,
} from "@/src/components";
import demoImage0 from "@/public/images/Espresso_Martini1x1.jpg";
import demoImage1 from "@/public/images/Espresso_Martini_125ml_with_Glass_MOTH_Cocktail_Category_Image_1_1_Ratio.gif";
import demoImage2 from "@/public/images/Espresso_Martini_125ml_MOTH_Cocktail_Category_Image_1_1_Ratio-Lifestyle_4.png";
import Image from "next/image";
import woodbrothers from "@/public/images/woodbrothers.png";
import happyDrinkersImage from "@/public/images/Happy_Drinkers_Xmas.jpg";

import {
  clock,
  earth,
  fivestarts,
  gift,
  glass,
  logo,
  recycle,
  truck,
  truck_black,
  vegan,
} from "@/src/assets/icons";
// import demoMedia3 from "@/public/images/33d4363dac114fd3850e0fd1a7c3cc0f.mp4";
const Fakedata = [
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
  {
    images: ["Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png", "", ""],
    name: "margarita",
    price: "20",
    formula: "Tequila, Triple Sec, Lime",
    details: "125ml — 14.9% vol.",
    description:
      "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
    size: [6, 12, 24],
    reviews: 88,
    "PRODUCT DESCRIPTION": {
      Taste:
        "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
      "(Im)perfect Serve":
        "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
    },
    "SPIRIT PARTNERS": {
      GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
    },
    "NUTRITION & ALLERGENS": {
      "Energy (kcal)": [108, 215],
    },
  },
];
const Products = () => {
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const changePath = (path: string) => {
    let str = path.split("/products/").join("").replaceAll("-", " ");
    let newstr = str.split(" ");
    return newstr
      .map((a) => {
        return a[0].toUpperCase() + a.substring(1);
      })
      .join(" ");
  };
  const router = useRouter();
  const asPath = changePath(router.asPath);
  const medias = [demoImage0, demoImage1, demoImage2];
  const onScroll = () => {
    if (!mediaRef.current || !contentRef.current) return 0;
    let mediaHeigth = mediaRef.current.getBoundingClientRect().height;
    let contentHeigth = contentRef.current.getBoundingClientRect().height;
    let distance =
      mediaHeigth > contentHeigth
        ? mediaHeigth - contentHeigth
        : contentHeigth - mediaHeigth;
    let topTopDistance = mediaRef.current?.getBoundingClientRect().top;
    topTopDistance *= -1;
    if (topTopDistance >= 0 && topTopDistance < distance) {
      contentRef.current?.classList.add(styles.products_content_fixed);
      contentRef.current?.classList.remove(
        styles.products_content_fixed_bottom
      );
    } else if (topTopDistance >= distance) {
      contentRef.current?.classList.add(styles.products_content_fixed_bottom);
      contentRef.current?.classList.remove(styles.products_content_fixed);
    } else {
      contentRef.current?.classList.remove(styles.products_content_fixed);
      contentRef.current?.classList.remove(
        styles.products_content_fixed_bottom
      );
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Head>
        <title>{asPath} - MOTH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.products_media_wrapper}>
          <div className={styles.products_media} ref={mediaRef}>
            <Medias medias={medias} />
          </div>
          <div className={`${styles.products_content}`} ref={contentRef}>
            <div className={styles.products_content_wrapper}>
              <div
                className={`${styles.products_content_inner} ${styles.row_mobile} ${styles.j_space_between}`}
              >
                <div>
                  <h1 className={styles.title}>MOTH:</h1>
                  <h1 className={styles.title}>ESPRESSO</h1>
                  <h1 className={styles.title}>MARTINI</h1>
                </div>
                <div className={styles.title}>£20</div>
              </div>
              <div
                className={`${styles.products_content_inner}  ${styles.border_mobile}`}
              >
                <Image src={fivestarts} alt="icon" />
                <span
                  style={{
                    fontSize: "12px",
                  }}
                >
                  66 reviews
                </span>
              </div>
              <div
                style={{
                  margin: "0 0 15px",
                }}
                className={`${styles.products_content_inner} ${styles.column_mobile} ${styles.normal_text}`}
              >
                <div>
                  <p>KEY INGREDIENTS</p>
                  <p className={styles.small_text}>
                    Vodka, Cold Brew, Coffee Liqueur
                  </p>
                </div>
                <div>
                  <p>DETAILS</p>
                  <p className={styles.small_text}>125ml - 14.9% vol.</p>
                </div>
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: " 1.3rem",
                  marginTop: "20px",
                }}
              >
                Count on this to open your eyes. Smooth, bitter, balanced. Likes
                a glass icy enough to write your name on. Goes with sweet
                things, like a lover. Perfect with your favourite playlist.
              </h3>
            </div>
            <div className={styles.packsize}>
              <span>Pack size</span>
              <ul>
                <li className={styles.active}>6</li>
                <li>12</li>
                <li>24</li>
              </ul>
            </div>
            <Button>ADD TO BAG</Button>
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              <Image src={truck_black} alt="icon" />
              &nbsp; Free Standard Delivery over £25
            </p>
            <div className={styles.keypoints_grid}>
              <div className={styles.keypoint_item}>
                <span>
                  <Image src={clock} alt="clock_icon" />
                </span>
                <span>Next Working Day delivery available before 2pm</span>
              </div>
              <div className={styles.keypoint_item}>
                <span>
                  <Image src={vegan} width={40} alt="vegan_icon" />
                </span>
                <span>Vegan</span>
              </div>
              <div className={styles.keypoint_item}>
                <span>
                  <Image src={gift} alt="gift_icon" />
                </span>
                <span>Gift message available</span>
              </div>
              <div className={styles.keypoint_item}>
                <span>
                  <Image src={recycle} width={20} alt="recycle_icon" />
                </span>
                <span>Infinitely recyclable</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.runing_text_container}>
          <div className={styles.runing_text}>
            <p>If you were to live somewhere forever, where would it be.</p>
            <span>
              <Image src={logo} alt="logo" />
            </span>
            <p>If you were to live somewhere forever, where would it be.</p>
            <span>
              <Image src={logo} alt="logo" />
            </span>
            <p>If you were to live somewhere forever, where would it be.</p>
            <span>
              <Image src={logo} alt="logo" />
            </span>
            <p>If you were to live somewhere forever, where would it be.</p>
            <span>
              <Image src={logo} alt="logo" />
            </span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.product_description}>
            <Popper title={"PRODUCT DESCRIPTION"}>
              <div className={styles.product_description_content}>
                <u
                  style={{
                    fontSize: "18px",
                    color: "#121212BF",
                  }}
                >
                  <strong>Taste</strong>
                </u>
                <br />
                <br />
                <p
                  style={{
                    color: "#434343",
                  }}
                >
                  Soft, bitter, like sliding freely over smooth ice. Our
                  Espresso Martini introduces Wood Brothers vodka to the smooth
                  flavours of cold brew and coffee liqueur, like old friends
                  coming together again. A rich, chocolatey reunion, with a
                  delicious foamy texture - count on it to keep your eyes open.
                </p>
                <br />
                <u
                  style={{
                    fontSize: "18px",
                    color: "#121212BF",
                  }}
                >
                  <strong>(Im)perfect Serve</strong>
                </u>
                <br />
                <br />
                <p
                  style={{
                    color: "#434343",
                  }}
                >
                  Shake and squeeze into a martini glass for a serious layer of
                  froth, and garnish with coffee beans if you’re looking to
                  impress. The world’s favourite pick-me-up, decades of tales
                  locked away in one little can. Born from a simple request, or
                  so the story goes - an alcoholic drink to keep us up all
                  night. It’s come a long way since the late 80s, ours is a
                  delicate, balanced drink. But maybe some things never change.
                </p>
              </div>
            </Popper>
            <Popper title={"SPIRIT PARTNERS"}>
              <div className={styles.spirit_partners}>
                <small>VODKA</small>
                <Image src={woodbrothers} loading={"lazy"} alt="woodbrother" />
                <span className={styles.spirit_partners_content}>
                  Sixth generation farmers, first generation distillers. Two
                  brothers who have put as much love into their spirits as they
                  have their family’s land - their vodka is the perfect kick in
                  our Espresso Martini.
                </span>
              </div>
            </Popper>
            <Popper title={"NUTRITION & ALLERGENS"}>
              <CaloriesTable />
            </Popper>
          </div>
        </div>
        <br />
        <div className={styles.product_review_wrapper}>
          <div className={styles.product_review_content}>
            <h1 className={`t-40 ${styles.product_review_title}`}>
              OUR HAPPY DRINKERS
            </h1>
            <div className={styles.fivestars_group}>
              <Image src={fivestarts} alt="icon" />
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                66 reviews
              </span>
            </div>
            <Button small>ALL REVIEWS</Button>
          </div>
          <div className={styles.product_review_image}>
            <Image src={happyDrinkersImage} alt="Happy drinkers Image" />
          </div>
        </div>
        <div className={styles.product_customer_reviews}>
          <ul>
            <li className={styles.product_customer_review}>
              <Image src={fivestarts} alt="fivestart" />
              <p>
                I am not a coffee drinker at all, but when I tried the espresso
                martini I am converted. It was lovely and I would definitely buy
                that one....They taste fresh and really well mixed.
                <br />
                <br />
                <span>RYAN - 29/11/21</span>
              </p>
            </li>
            <li className={styles.product_customer_review}>
              <Image src={fivestarts} alt="fivestart" />
              <p>
                Best espresso martini I've ever had. Fantastic strong taste of
                the coffee.
                <br />
                <br />
                <span>GILLIAN - 26/11/21</span>
              </p>
            </li>
            <li className={styles.product_customer_review}>
              <Image src={fivestarts} alt="fivestart" />
              <p>
                Fab little can of fun. The can has a nice look and feel to start
                with then the cocktail that emerges is a surprise and a delight.
                This is perfect as a little pre dinner drink, it gives you that
                little boost of a freshly made cocktail without the cost or
                hassle...
                <br />
                <br />
                <span>ROSIE - 21/11/21</span>
              </p>
            </li>
          </ul>
        </div>
        <div
          className={styles.product_customer_reviews}
          style={{
            marginTop: "80px",
          }}
        >
          <div
            style={{
              width: "25%",
            }}
          >
            <h1 className="t-40">MIX</h1>
            <h1 className="t-40">OF</h1>
            <h1 className="t-40">TOTAL</h1>
            <h1 className="t-40">HAPPINESS</h1>
          </div>
          <ul>
            <li className={styles.product_customer_review}>
              <Image src={glass} alt="glass" />
              <h1 className="t-30">BAR STRENGTH</h1>
              <p>
                We’re serious about cocktails. These aren’t your ordinary
                tinnies — they’re full-strength classics, made with best of the
                best craft spirits. Perfect every time.
              </p>
            </li>
            <li className={styles.product_customer_review}>
              <Image src={truck} alt="truck" />
              <h1 className="t-30">READY TO GO</h1>
              <p>
                Premixed, as handy as a can of beer, as ready to go as you are.
                No need to splash big on spirits. Grab it on the way to the
                party. Get it to your door.
              </p>
            </li>
            <li className={styles.product_customer_review}>
              <Image src={earth} alt="earth" />
              <h1 className="t-30">PLANET FRIENDLY</h1>
              <p>
                No pointless plastic. No heavy glass bottles. Just carefully
                sourced ingredients from partners we trust, and aluminium cans
                that can be recycled again and again—and again. Infinitely.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.related_products}>
          <div
            style={{
              width: "25%",
            }}
          >
            <h1 className="t-40">RELATED</h1>
            <h1 className="t-40">PRODUCTS</h1>
          </div>
          <div className={styles.related_products_inner}>
            {Fakedata.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <PackItem props={item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

Products.getLayout = function getLayout(Products: ReactElement) {
  return <DefaultLayout>{Products}</DefaultLayout>;
};

export default Products;
