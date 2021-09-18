import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: ${(props) => props.width}px;
`;

const WhiteLogo = ({ width }) => {
  return (
    <Svg
      width={width}
      viewBox="0 0 102 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16016 1.80003C8.16016 1.22327 8.69157 0.793108 9.25568 0.913246L30.109 5.35439C30.5276 5.44353 30.8268 5.81321 30.8268 6.24117V44.8541C30.8268 45.4433 30.2736 45.876 29.7018 45.734L8.84842 40.5583C8.44407 40.4579 8.16016 40.0949 8.16016 39.6783V1.80003Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0 7.23997C0 6.66321 0.531418 6.23305 1.09552 6.35319L21.9489 10.7943C22.3674 10.8835 22.6667 11.2532 22.6667 11.6811V50.294C22.6667 50.8832 22.1135 51.3159 21.5416 51.174L0.688261 45.9982C0.283916 45.8978 0 45.5348 0 45.1182V7.23997Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M43.081 15.7094V11.2922H45.4964C47.2154 11.2922 47.977 12.119 47.977 13.5117C47.977 14.8608 47.2154 15.7094 45.4964 15.7094H43.081ZM51.1105 13.5117C51.1105 10.8787 49.2826 8.81152 45.627 8.81152H40.0346V24H43.081V18.1683H45.627C49.5438 18.1683 51.1105 15.8182 51.1105 13.5117ZM64.6539 11.945H61.5857V18.5818C61.5857 20.5184 60.5412 21.5629 58.8875 21.5629C57.2772 21.5629 56.211 20.5184 56.211 18.5818V11.945H53.1646V19.017C53.1646 22.3245 55.1883 24.1523 57.9953 24.1523C59.4968 24.1523 60.8241 23.4995 61.5857 22.4768V24H64.6539V11.945ZM70.706 17.9942C70.706 15.6659 71.794 14.9696 73.6001 14.9696H74.4052V11.7709C72.7297 11.7709 71.4676 12.576 70.706 13.8163V11.945H67.6596V24H70.706V17.9942ZM85.8139 20.5619C85.7269 16.1446 79.0466 17.5155 79.0466 15.3178C79.0466 14.6214 79.6341 14.1645 80.7656 14.1645C81.9624 14.1645 82.7023 14.7955 82.7893 15.7312H85.7051C85.5311 13.3376 83.7685 11.7491 80.8527 11.7491C77.8715 11.7491 76.0872 13.3594 76.0872 15.3613C76.0872 19.7786 82.8981 18.4077 82.8981 20.5619C82.8981 21.2582 82.2453 21.8022 81.0485 21.8022C79.8299 21.8022 78.9813 21.1059 78.8725 20.192H75.8043C75.9349 22.4333 78.0456 24.1958 81.0703 24.1958C84.0079 24.1958 85.8139 22.6291 85.8139 20.5619ZM93.4935 14.2515C95.0603 14.2515 96.3223 15.2525 96.3659 16.841H90.643C90.8823 15.1872 92.0356 14.2515 93.4935 14.2515ZM99.2164 20.2138H95.9307C95.539 21.0189 94.8209 21.6717 93.5153 21.6717C91.9921 21.6717 90.7735 20.6707 90.6212 18.8864H99.434C99.4993 18.4947 99.5211 18.103 99.5211 17.7114C99.5211 14.121 97.0622 11.7491 93.5806 11.7491C90.0119 11.7491 87.5313 14.1645 87.5313 17.9725C87.5313 21.7587 90.0772 24.1958 93.5806 24.1958C96.5617 24.1958 98.5636 22.4333 99.2164 20.2138ZM39.7082 38.384C39.7082 42.9318 42.8199 46.1523 46.9978 46.1523C50.5447 46.1523 52.9166 44.368 54.0046 41.5174H52.873C52.0244 43.737 50.0442 45.2819 46.9978 45.2819C43.4945 45.2819 40.7092 42.649 40.7092 38.384C40.7092 34.0538 43.4945 31.4426 46.9978 31.4426C50.0442 31.4426 52.0244 32.9875 52.873 35.207H54.0046C52.9166 32.3565 50.5447 30.5722 46.9978 30.5722C42.8199 30.5722 39.7082 33.7926 39.7082 38.384ZM57.0625 46H58.0417V29.8976H57.0625V46ZM71.6191 34.1843H70.6399V40.5165C70.6399 43.8022 68.8991 45.3472 66.4402 45.3472C64.0684 45.3472 62.4799 43.8893 62.4799 40.9952V34.1843H61.5225V41.0605C61.5225 44.6291 63.6767 46.1958 66.3097 46.1958C68.2463 46.1958 69.9654 45.2819 70.6399 43.4323V46H71.6191V34.1843ZM76.168 37.296V29.8976H75.1888V46H76.168V42.9101C76.8208 44.7162 78.5833 46.1741 81.1728 46.1741C84.4803 46.1741 86.8739 43.8022 86.8739 40.0813C86.8739 36.3386 84.4803 34.032 81.1728 34.032C78.6051 34.032 76.8643 35.4682 76.168 37.296ZM85.8729 40.0813C85.8729 43.3453 83.8928 45.3037 81.0205 45.3037C78.2787 45.3037 76.168 43.28 76.168 40.0813C76.168 36.9261 78.2787 34.8806 81.0205 34.8806C83.8928 34.8806 85.8729 36.8173 85.8729 40.0813Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="30.8268"
          y1="5.33044"
          x2="9.34165"
          y2="40.3082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C2C2C2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="22.6667"
          y1="12.821"
          x2="-0.519463"
          y2="43.8979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C2C2C2" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

const BlackLogo = ({ width }) => {
  return (
    <Svg
      width={width}
      viewBox="0 0 84 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.73242 0.924081C6.73242 0.448254 7.17084 0.0933708 7.63623 0.192485L24.8403 3.85644C25.1856 3.92998 25.4325 4.23497 25.4325 4.58804V36.4438C25.4325 36.9299 24.9761 37.2869 24.5043 37.1698L7.30024 32.8997C6.96665 32.8169 6.73242 32.5175 6.73242 32.1738V0.924081Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0 5.41236C0 4.93654 0.438422 4.58165 0.903811 4.68077L18.1079 8.34472C18.4532 8.41826 18.7001 8.72325 18.7001 9.07632V40.9321C18.7001 41.4182 18.2437 41.7751 17.7719 41.658L0.567816 37.388C0.23423 37.3052 0 37.0058 0 36.662V5.41236Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M35.3926 13.1603V9.51599H37.3853C38.8035 9.51599 39.4318 10.1982 39.4318 11.3471C39.4318 12.4601 38.8035 13.1603 37.3853 13.1603H35.3926ZM42.0169 11.3471C42.0169 9.1749 40.5089 7.46946 37.493 7.46946H32.8793V20H35.3926V15.1888H37.493C40.7244 15.1888 42.0169 13.25 42.0169 11.3471ZM53.1903 10.0546H50.659V15.5299C50.659 17.1277 49.7973 17.9894 48.433 17.9894C47.1045 17.9894 46.2249 17.1277 46.2249 15.5299V10.0546H43.7116V15.889C43.7116 18.6177 45.3811 20.1257 47.6969 20.1257C48.9356 20.1257 50.0307 19.5871 50.659 18.7434V20H53.1903V10.0546ZM58.1833 15.0452C58.1833 13.1244 59.0809 12.5499 60.5709 12.5499H61.2352V9.91094C59.8529 9.91094 58.8116 10.5752 58.1833 11.5984V10.0546H55.67V20H58.1833V15.0452ZM70.6474 17.1636C70.5756 13.5193 65.0643 14.6503 65.0643 12.8371C65.0643 12.2627 65.549 11.8857 66.4825 11.8857C67.4699 11.8857 68.0802 12.4063 68.152 13.1782H70.5576C70.414 11.2035 68.9599 9.89299 66.5543 9.89299C64.0949 9.89299 62.6228 11.2214 62.6228 12.873C62.6228 16.5173 68.2418 15.3863 68.2418 17.1636C68.2418 17.738 67.7032 18.1868 66.7159 18.1868C65.7106 18.1868 65.0104 17.6124 64.9207 16.8584H62.3894C62.4971 18.7075 64.2385 20.1616 66.7338 20.1616C69.1574 20.1616 70.6474 18.869 70.6474 17.1636ZM76.9831 11.9575C78.2756 11.9575 79.3168 12.7833 79.3527 14.0938H74.6313C74.8288 12.7294 75.7803 11.9575 76.9831 11.9575ZM81.7045 16.8763H78.9937C78.6706 17.5406 78.0781 18.0791 77.001 18.0791C75.7444 18.0791 74.7391 17.2533 74.6134 15.7813H81.884C81.9378 15.4581 81.9558 15.135 81.9558 14.8119C81.9558 11.8498 79.9272 9.89299 77.0549 9.89299C74.1107 9.89299 72.0642 11.8857 72.0642 15.0273C72.0642 18.1509 74.1646 20.1616 77.0549 20.1616C79.5143 20.1616 81.1659 18.7075 81.7045 16.8763ZM32.61 31.7168C32.61 35.4688 35.1772 38.1257 38.624 38.1257C41.5502 38.1257 43.5069 36.6536 44.4045 34.3019H43.471C42.7709 36.133 41.1373 37.4076 38.624 37.4076C35.7337 37.4076 33.4358 35.2354 33.4358 31.7168C33.4358 28.1443 35.7337 25.9901 38.624 25.9901C41.1373 25.9901 42.7709 27.2647 43.471 29.0958H44.4045C43.5069 26.7441 41.5502 25.272 38.624 25.272C35.1772 25.272 32.61 27.9289 32.61 31.7168ZM46.9274 38H47.7352V24.7155H46.9274V38ZM58.9366 28.252H58.1288V33.4761C58.1288 36.1868 56.6926 37.4614 54.664 37.4614C52.7072 37.4614 51.3967 36.2586 51.3967 33.871V28.252H50.6068V33.9249C50.6068 36.869 52.3841 38.1616 54.5563 38.1616C56.154 38.1616 57.5722 37.4076 58.1288 35.8817V38H58.9366V28.252ZM62.6894 30.8192V24.7155H61.8816V38H62.6894V35.4508C63.228 36.9408 64.6821 38.1436 66.8184 38.1436C69.5471 38.1436 71.5218 36.1868 71.5218 33.117C71.5218 30.0293 69.5471 28.1264 66.8184 28.1264C64.7001 28.1264 63.2639 29.3112 62.6894 30.8192ZM70.6961 33.117C70.6961 35.8098 69.0624 37.4255 66.6927 37.4255C64.4308 37.4255 62.6894 35.756 62.6894 33.117C62.6894 30.514 64.4308 28.8265 66.6927 28.8265C69.0624 28.8265 70.6961 30.4242 70.6961 33.117Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="25.4325"
          y1="3.83669"
          x2="7.70716"
          y2="32.6934"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#474747" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="18.7001"
          y1="10.0167"
          x2="-0.428558"
          y2="35.6553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#474747" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

const Logo = ({ color, width }) => {
  return (
    <>
      {color === "white" ? (
        <WhiteLogo width={width} />
      ) : (
        <BlackLogo width={width} />
      )}
    </>
  );
};

export default Logo;
