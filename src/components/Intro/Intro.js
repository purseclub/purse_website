import React, { useEffect, useState } from "react";
import {
  DotContainer,
  IllustrationSvg,
  IllustrationWrapper,
  IntroContainer,
  IntroWrapper,
} from "../../styles/intro";
import { Para, ParaContainer } from "../../styles/landing";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const illustrationMotion = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const illustrationChildMotion = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const Intro = ({ onCursor }) => {
  const [illustrationRef, illustrationInView] = useInView({
    threshold: 0.2,
  });
  const [paraRef, paraInView] = useInView({
    threshold: 0,
  });
  const paraControls = useAnimation();
  const illustrationControls = useAnimation();

  const [containerHeight, setContainerHeight] = useState(null);

  const { scrollY } = useViewportScroll();
  const y2 = useTransform(scrollY, [containerHeight / 2, 2000], [0, -100]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };

  const spring2 = useSpring(y2, physics);

  useEffect(() => {
    setContainerHeight(window.innerHeight);
    if (paraInView) {
      paraControls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });
      //   return paraControls.stop();
    }

    if (illustrationInView) {
      illustrationControls.start("animate");
    }
    return () => {
      paraControls.stop();
      illustrationControls.stop();
    };
  }, [paraInView, paraControls, illustrationInView, illustrationControls]);

  return (
    <IntroWrapper>
      <IntroContainer>
        <IllustrationWrapper ref={illustrationRef}>
          <IllustrationSvg
            variants={illustrationMotion}
            initial="initial"
            animate={illustrationControls}
            viewBox="0 0 918 731"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={illustrationChildMotion}
              d="M64.6845 125.537V125.037H64.1845V125.537H64.6845ZM64.6845 570H64.1845V570.5H64.6845V570ZM184.348 570V570.5H184.848V570H184.348ZM184.348 424.695V424.195H183.848V424.695H184.348ZM329.083 424.695V425.195H329.096L329.109 425.194L329.083 424.695ZM184.348 322.126H183.848V322.626H184.348V322.126ZM184.348 222.407V221.907H183.848V222.407H184.348ZM64.1845 125.537V570H65.1845V125.537H64.1845ZM64.6845 570.5H184.348V569.5H64.6845V570.5ZM184.848 570V424.695H183.848V570H184.848ZM184.348 425.195H329.083V424.195H184.348V425.195ZM329.109 425.194C384.386 422.345 419.052 413.37 439.856 390.557C460.654 367.752 467.48 331.242 467.48 273.691H466.48C466.48 331.245 459.631 367.388 439.117 389.884C418.609 412.372 384.326 421.347 329.057 424.196L329.109 425.194ZM467.48 273.691C467.48 214.433 460.085 177.197 437.703 154.814C415.321 132.432 378.084 125.037 318.826 125.037V126.037C378.091 126.037 414.932 133.457 436.996 155.522C459.06 177.586 466.48 214.426 466.48 273.691H467.48ZM318.826 125.037H64.6845V126.037H318.826V125.037ZM184.848 322.126V222.407H183.848V322.126H184.848ZM184.348 222.907H288.056V221.907H184.348V222.907ZM288.056 222.907C301.446 222.907 311.812 223.228 319.838 224.433C327.865 225.638 333.488 227.718 337.443 231.188C341.39 234.65 343.74 239.552 345.099 246.542C346.46 253.542 346.817 262.58 346.817 274.261H347.817C347.817 262.58 347.462 253.455 346.081 246.351C344.698 239.238 342.276 234.097 338.102 230.436C333.938 226.783 328.093 224.661 319.987 223.444C311.879 222.227 301.447 221.907 288.056 221.907V222.907ZM346.817 274.261C346.817 285.088 346.46 293.446 345.101 299.907C343.744 306.355 341.4 310.864 337.459 314.045C333.503 317.237 327.877 319.143 319.845 320.242C311.815 321.341 301.447 321.626 288.056 321.626V322.626C301.446 322.626 311.876 322.342 319.98 321.233C328.081 320.124 333.922 318.184 338.087 314.823C342.266 311.451 344.694 306.7 346.079 300.113C347.462 293.54 347.817 285.088 347.817 274.261H346.817ZM288.056 321.626H184.348V322.626H288.056V321.626ZM807.219 425.265L807.719 425.276L807.731 424.765H807.219V425.265ZM693.254 425.265V424.765H692.777L692.755 425.241L693.254 425.265ZM693.254 371.701L692.754 371.721L692.773 372.201H693.254V371.701ZM807.219 371.701V372.201H807.733L807.719 371.687L807.219 371.701ZM634.562 577.338C702.079 577.338 744.712 569.8 770.795 546.942C796.897 524.067 806.294 485.97 807.719 425.276L806.719 425.253C805.295 485.932 795.888 523.621 770.136 546.19C744.364 568.775 702.094 576.338 634.562 576.338V577.338ZM807.219 424.765H693.254V425.765H807.219V424.765ZM692.755 425.241C692.042 440.056 691.153 451.563 689.442 460.5C687.731 469.437 685.208 475.745 681.269 480.207C677.339 484.658 671.95 487.327 664.386 488.88C656.81 490.436 647.097 490.864 634.562 490.864V491.864C647.1 491.864 656.903 491.438 664.587 489.86C672.284 488.279 677.899 485.535 682.019 480.869C686.129 476.213 688.698 469.7 690.424 460.688C692.15 451.675 693.041 440.104 693.753 425.289L692.755 425.241ZM634.562 490.864C619.89 490.864 608.547 490.293 599.77 488.154C591.013 486.02 584.846 482.334 580.482 476.119C576.101 469.881 573.496 461.041 571.995 448.515C570.494 435.993 570.102 419.851 570.102 399.053H569.102C569.102 419.851 569.493 436.047 571.002 448.634C572.51 461.215 575.14 470.253 579.663 476.694C584.202 483.157 590.608 486.95 599.533 489.126C608.438 491.296 619.888 491.864 634.562 491.864V490.864ZM570.102 399.053C570.102 378.254 570.494 362.112 571.995 349.591C573.496 337.064 576.101 328.224 580.482 321.986C584.846 315.771 591.013 312.086 599.77 309.952C608.547 307.812 619.89 307.241 634.562 307.241V306.241C619.888 306.241 608.438 306.81 599.533 308.98C590.608 311.155 584.202 314.948 579.663 321.412C575.14 327.853 572.51 336.891 571.002 349.472C569.493 362.059 569.102 378.254 569.102 399.053H570.102ZM634.562 307.241C647.24 307.241 657.062 307.634 664.711 309.128C672.35 310.621 677.773 313.203 681.7 317.547C685.635 321.9 688.122 328.08 689.762 336.882C691.402 345.684 692.185 357.048 692.754 371.721L693.754 371.682C693.184 357.009 692.4 345.58 690.745 336.699C689.091 327.818 686.556 321.427 682.442 316.876C678.32 312.317 672.667 309.664 664.903 308.147C657.149 306.632 647.241 306.241 634.562 306.241V307.241ZM693.254 372.201H807.219V371.201H693.254V372.201ZM807.719 371.687C806.009 311.562 796.468 273.751 770.366 251.02C744.284 228.306 701.795 220.768 634.562 220.768V221.768C701.808 221.768 743.937 229.33 769.709 251.774C795.462 274.201 805.01 311.608 806.719 371.715L807.719 371.687ZM634.562 220.768C563.054 220.768 518.125 229.587 491.113 256.384C464.1 283.183 455.137 327.828 455.137 399.053H456.137C456.137 327.822 465.125 283.574 491.817 257.094C518.511 230.613 563.045 221.768 634.562 221.768V220.768ZM455.137 399.053C455.137 470.278 464.1 514.923 491.113 541.721C518.125 568.518 563.054 577.338 634.562 577.338V576.338C563.045 576.338 518.511 567.493 491.817 541.011C465.125 514.531 456.137 470.284 456.137 399.053H455.137Z"
              fill="white"
            />
            <motion.path
              variants={illustrationChildMotion}
              d="M94.6845 151.537V151.037H94.1845V151.537H94.6845ZM94.6845 596H94.1845V596.5H94.6845V596ZM214.348 596V596.5H214.848V596H214.348ZM214.348 450.695V450.195H213.848V450.695H214.348ZM359.083 450.695V451.195H359.096L359.109 451.194L359.083 450.695ZM214.348 348.126H213.848V348.626H214.348V348.126ZM214.348 248.407V247.907H213.848V248.407H214.348ZM94.1845 151.537V596H95.1845V151.537H94.1845ZM94.6845 596.5H214.348V595.5H94.6845V596.5ZM214.848 596V450.695H213.848V596H214.848ZM214.348 451.195H359.083V450.195H214.348V451.195ZM359.109 451.194C414.386 448.345 449.052 439.37 469.856 416.557C490.654 393.752 497.48 357.242 497.48 299.691H496.48C496.48 357.245 489.631 393.388 469.117 415.884C448.609 438.372 414.326 447.347 359.057 450.196L359.109 451.194ZM497.48 299.691C497.48 240.433 490.085 203.197 467.703 180.814C445.321 158.432 408.084 151.037 348.826 151.037V152.037C408.091 152.037 444.932 159.457 466.996 181.522C489.06 203.586 496.48 240.426 496.48 299.691H497.48ZM348.826 151.037H94.6845V152.037H348.826V151.037ZM214.848 348.126V248.407H213.848V348.126H214.848ZM214.348 248.907H318.056V247.907H214.348V248.907ZM318.056 248.907C331.446 248.907 341.812 249.228 349.838 250.433C357.865 251.638 363.488 253.718 367.443 257.188C371.39 260.65 373.74 265.552 375.099 272.542C376.46 279.542 376.817 288.58 376.817 300.261H377.817C377.817 288.58 377.462 279.455 376.081 272.351C374.698 265.238 372.276 260.097 368.102 256.436C363.938 252.783 358.093 250.661 349.987 249.444C341.879 248.227 331.447 247.907 318.056 247.907V248.907ZM376.817 300.261C376.817 311.088 376.46 319.446 375.101 325.907C373.744 332.355 371.4 336.864 367.459 340.045C363.503 343.237 357.877 345.143 349.845 346.242C341.815 347.341 331.447 347.626 318.056 347.626V348.626C331.446 348.626 341.876 348.342 349.98 347.233C358.081 346.124 363.922 344.184 368.087 340.823C372.266 337.451 374.694 332.7 376.079 326.113C377.462 319.54 377.817 311.088 377.817 300.261H376.817ZM318.056 347.626H214.348V348.626H318.056V347.626ZM837.219 451.265L837.719 451.276L837.731 450.765H837.219V451.265ZM723.254 451.265V450.765H722.777L722.755 451.241L723.254 451.265ZM723.254 397.701L722.754 397.721L722.773 398.201H723.254V397.701ZM837.219 397.701V398.201H837.733L837.719 397.687L837.219 397.701ZM664.562 603.338C732.079 603.338 774.712 595.8 800.795 572.942C826.897 550.067 836.294 511.97 837.719 451.276L836.719 451.253C835.295 511.932 825.888 549.621 800.136 572.19C774.364 594.775 732.094 602.338 664.562 602.338V603.338ZM837.219 450.765H723.254V451.765H837.219V450.765ZM722.755 451.241C722.042 466.056 721.153 477.563 719.442 486.5C717.731 495.437 715.208 501.745 711.269 506.207C707.339 510.658 701.95 513.327 694.386 514.88C686.81 516.436 677.097 516.864 664.562 516.864V517.864C677.1 517.864 686.903 517.438 694.587 515.86C702.284 514.279 707.899 511.535 712.019 506.869C716.129 502.213 718.698 495.7 720.424 486.688C722.15 477.675 723.041 466.104 723.753 451.289L722.755 451.241ZM664.562 516.864C649.89 516.864 638.547 516.293 629.77 514.154C621.013 512.02 614.846 508.334 610.482 502.119C606.101 495.881 603.496 487.041 601.995 474.515C600.494 461.993 600.102 445.851 600.102 425.053H599.102C599.102 445.851 599.493 462.047 601.002 474.634C602.51 487.215 605.14 496.253 609.663 502.694C614.202 509.157 620.608 512.95 629.533 515.126C638.438 517.296 649.888 517.864 664.562 517.864V516.864ZM600.102 425.053C600.102 404.254 600.494 388.112 601.995 375.591C603.496 363.064 606.101 354.224 610.482 347.986C614.846 341.771 621.013 338.086 629.77 335.952C638.547 333.812 649.89 333.241 664.562 333.241V332.241C649.888 332.241 638.438 332.81 629.533 334.98C620.608 337.155 614.202 340.948 609.663 347.412C605.14 353.853 602.51 362.891 601.002 375.472C599.493 388.059 599.102 404.254 599.102 425.053H600.102ZM664.562 333.241C677.24 333.241 687.062 333.634 694.711 335.128C702.35 336.621 707.773 339.203 711.7 343.547C715.635 347.9 718.122 354.08 719.762 362.882C721.402 371.684 722.185 383.048 722.754 397.721L723.754 397.682C723.184 383.009 722.4 371.58 720.745 362.699C719.091 353.818 716.556 347.427 712.442 342.876C708.32 338.317 702.667 335.664 694.903 334.147C687.149 332.632 677.241 332.241 664.562 332.241V333.241ZM723.254 398.201H837.219V397.201H723.254V398.201ZM837.719 397.687C836.009 337.562 826.468 299.751 800.366 277.02C774.284 254.306 731.795 246.768 664.562 246.768V247.768C731.808 247.768 773.937 255.33 799.709 277.774C825.462 300.201 835.01 337.608 836.719 397.715L837.719 397.687ZM664.562 246.768C593.054 246.768 548.125 255.587 521.113 282.384C494.1 309.183 485.137 353.828 485.137 425.053H486.137C486.137 353.822 495.125 309.574 521.817 283.094C548.511 256.613 593.045 247.768 664.562 247.768V246.768ZM485.137 425.053C485.137 496.278 494.1 540.923 521.113 567.721C548.125 594.518 593.054 603.338 664.562 603.338V602.338C593.045 602.338 548.511 593.493 521.817 567.011C495.125 540.531 486.137 496.284 486.137 425.053H485.137Z"
              fill="white"
            />
            <motion.path
              variants={illustrationChildMotion}
              d="M121.685 171.537V616H241.348V470.695H386.083C496.629 464.997 523.98 434.796 523.98 319.691C523.98 201.168 494.35 171.537 375.826 171.537H121.685ZM241.348 368.126V268.407H345.056C398.619 268.407 404.317 273.536 404.317 320.261C404.317 363.568 398.619 368.126 345.056 368.126H241.348ZM691.562 622.838C826.61 622.838 861.37 592.637 864.219 471.265H750.254C747.405 530.526 741.707 537.364 691.562 537.364C632.87 537.364 626.602 528.247 626.602 445.053C626.602 361.858 632.87 352.741 691.562 352.741C742.276 352.741 747.975 359.009 750.254 417.701H864.219C860.8 297.468 826.041 267.268 691.562 267.268C548.536 267.268 512.637 302.597 512.637 445.053C512.637 587.509 548.536 622.838 691.562 622.838Z"
              fill="white"
            />
          </IllustrationSvg>
        </IllustrationWrapper>
        <ParaContainer
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
          <Para
            align="left"
            top={true}
            hide={true}
            ref={paraRef}
            animate={paraControls}
          >
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy.{" "}
            <br /> <br /> so we thought of creating a system that rewards its
            members for doing good and being trustworthy. this way, trust as a
            virtue becomes something to aspire to, just the way it should be.
            then we went one step ahead: we built it. we know we are on the
            right track because here you are.
          </Para>
        </ParaContainer>
      </IntroContainer>
      <DotContainer>
        <span>***</span>
      </DotContainer>
    </IntroWrapper>
  );
};

export default Intro;
