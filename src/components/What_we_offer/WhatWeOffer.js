import React, { forwardRef, useEffect, useRef, useState } from "react";

import {
  ContentBox,
  Heading,
  HeadingSpan,
  ImgWrp,
  Item,
  ItemEnter,
  ItemEnterCircle,
  ItemExcerpt,
  ItemExcerptLink,
  ItemImg,
  ItemMeta,
  ItemMetaRow,
  WwoWrapper,
} from "../../styles/whatWeOffer";

import { Para } from "../../styles/landing";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const datas = [
  {
    id: 0,
    subtitle: "Reward",
    title: "Overloaded",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Explore rewards",
  },
  {
    id: 1,
    subtitle: "Conni",
    title: "Personal Card",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Experience the upgrade",
  },
  {
    id: 2,
    subtitle: "Share",
    title: "Smooth",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Start sharing",
  },
  {
    id: 3,
    subtitle: "Security",
    title: "Shepherd",
    body: "Purse Club focused on storing your important cards at one place which can be accessed anytime, anywhere. Get rewards for managing your important cards.",
    buttonText: "Become a member",
  },
];

const Splitting = ({ copy, role, controls }) => {
  return (
    <HeadingSpan aria-label={copy} role={role}>
      {copy.split("").map(function (char, index) {
        return (
          <span
            aria-hidden="true"
            key={index}
            className="char"
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.span
              animate={controls}
              style={{
                display: "inline-block",
                willChange: "transform",
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </HeadingSpan>
  );
};

const imageWrpMotion = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  animate: {
    scale: 0.95,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  animate: {
    scale: 1.1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const ImageComponent = forwardRef((props, ref) => {
  return <GatsbyImage image={props.image} alt="texture" ref={ref} />;
});

const WhatWeOffer = ({ showModal, onCursor }) => {
  const [hoveredEl, setHoveredEl] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "002.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  `);
  const image = getImage(data.placeholderImage.childImageSharp);

  return (
    <WwoWrapper>
      {datas.map((item, index) => {
        return (
          <Box
            key={index}
            item={item}
            image={image}
            hoveredEl={hoveredEl}
            setHoveredEl={setHoveredEl}
            onCursor={onCursor}
            showModal={showModal}
          />
        );
      })}
    </WwoWrapper>
  );
};

const Box = ({ item, image, hoveredEl, setHoveredEl, onCursor, showModal }) => {
  const [width, setWidth] = useState(null);
  const isHovered = item.id === hoveredEl;
  const controls = useAnimation();
  const headingControls = useAnimation();
  const circleControls = useAnimation();
  const itemControls = useAnimation();
  const [itemRef, itemInView] = useInView();

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [1000, 4500], [0, -70]);
  const y2 = useTransform(scrollY, [1000, 4500], [0, -50]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };

  //   scrollY.onChange((x) => {
  //     console.log(x);
  //   });

  const spring1 = useSpring(y1, physics);
  const spring2 = useSpring(y2, physics);

  //   scrollY.onChange((x) => {
  //     console.log(x);
  //   });

  const [isInverted, setIsInverted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const sequenceForward = async () => {
    circleControls.start({
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    });
    await controls.start({
      x: isInverted ? "103%" : "-103%",
      transition: {
        duration: 0.2,
        ease: [0.11, 0, 0.5, 0],
      },
    });
    headingControls.set({
      x: isInverted ? "20%" : "-20%",
      transition: {
        duration: 0.2,
      },
    });
    controls.set({
      x: isInverted ? "-103%" : "103%",
      transition: {
        duration: 0.4,
      },
    });
    await controls.start({
      x: "0%",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    });
  };

  const sequenceBackward = async () => {
    circleControls.start({
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    });
    await controls.start({
      x: isInverted ? "-103%" : "103%",
      transition: {
        duration: 0.2,
        ease: [0.11, 0, 0.5, 0],
      },
    });
    headingControls.set({
      x: "0%",
      transition: {
        duration: 0.2,
      },
    });
    controls.set({
      x: isInverted ? "103%" : "-103%",
      transition: {
        duration: 0.4,
      },
    });
    await controls.start({
      x: "0%",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    });
  };
  useEffect(() => {
    const val = ref.current.className.includes("invert");
    setIsInverted(val);
  }, []);

  useEffect(() => {
    if (itemInView) {
      itemControls.start({
        opacity: 1,

        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });
    }
  });
  return (
    <ContentBox ref={itemRef} animate={itemControls}>
      <Item ref={ref} className={(item.id + 1) % 2 === 0 ? "invert" : ""}>
        <ImgWrp
          variants={imageWrpMotion}
          animate={isHovered ? "animate" : "initial"}
          initial={isHovered ? "animate" : "initial"}
          style={{
            y: spring1,
          }}
        >
          <ItemImg variants={imageVariants}>
            <ImageComponent image={image} />
          </ItemImg>
        </ImgWrp>
        <ItemEnter
          onClick={showModal}
          className="unbutton"
          onHoverStart={() => {
            onCursor("hovered");
            setHoveredEl(item.id);
            sequenceForward();
          }}
          onHoverEnd={() => {
            setHoveredEl(null);
            sequenceBackward();
            onCursor();
          }}
        >
          <ItemEnterCircle
            animate={circleControls}
            vectorEffect="non-scaling-stroke"
            width="800"
            height="800"
            viewBox="0 0 800 800"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="400"
              cy="400"
              r="150"
            />
          </ItemEnterCircle>
        </ItemEnter>
        <Heading
          animate={headingControls}
          style={{
            y: spring2,
          }}
        >
          <Splitting copy={item.title} role="title" controls={controls} />
          <Splitting copy={item.subtitle} role="subtitle" controls={controls} />
        </Heading>
        <ItemMeta
          className={(item.id + 1) % 2 === 0 ? "invert-meta" : ""}
          style={{
            y: spring2,
          }}
        >
          <ItemMetaRow>
            <span>Purse Club Rewards</span>
          </ItemMetaRow>
        </ItemMeta>
        <ItemExcerpt
          style={{
            y: spring2,
          }}
          onMouseEnter={() => {
            onCursor("bar");
          }}
          onMouseLeave={() => {
            onCursor();
          }}
        >
          <Para align="left">{item.body}</Para>
          <ItemExcerptLink
            onClick={showModal}
            onMouseEnter={() => {
              onCursor("hovered");
              setHoveredEl(item.id);
              sequenceForward();
            }}
            onMouseLeave={() => {
              setHoveredEl(null);
              sequenceBackward();
              onCursor();
            }}
          >
            <span>{item.buttonText}</span>
          </ItemExcerptLink>
        </ItemExcerpt>
      </Item>
    </ContentBox>
  );
};

export default WhatWeOffer;
