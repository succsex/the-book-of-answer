import styled from "styled-components";
import InnerWrapper from "components/Layout";
import Cover from 'components/Cover'

const Book = styled.div`
  .book {
    position: relative;
    width: 160px;
    height: 220px;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  /* HARDCOVER FRONT */
  .hardcover_front li:first-child {
    background-color: #eee;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /* reverse */
  .hardcover_front li:last-child {
    background: #fffbec;
  }

  /* HARDCOVER BACK */
  .hardcover_back li:first-child {
    background: #fffbec;
  }

  /* reverse */
  .hardcover_back li:last-child {
    background: #fffbec;
  }

  .book_spine li:first-child {
    background: #eee;
  }
  .book_spine li:last-child {
    background: #333;
  }

  /* thickness of cover */

  .hardcover_front li:first-child:after,
  .hardcover_front li:first-child:before,
  .hardcover_front li:last-child:after,
  .hardcover_front li:last-child:before,
  .hardcover_back li:first-child:after,
  .hardcover_back li:first-child:before,
  .hardcover_back li:last-child:after,
  .hardcover_back li:last-child:before,
  .book_spine li:first-child:after,
  .book_spine li:first-child:before,
  .book_spine li:last-child:after,
  .book_spine li:last-child:before {
    background: #999;
  }

  /* page */

  .page > li {
    background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
    background: -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
    background: -ms-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
    background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
    box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1),
      inset -1px 0px 1px rgba(150, 150, 150, 0.2);
    border-radius: 0px 5px 5px 0px;
  }

  /*
          3. opening cover, back cover and pages
        */

  .hardcover_front {
    -webkit-transform: rotateY(-34deg) translateZ(8px);
    -moz-transform: rotateY(-34deg) translateZ(8px);
    transform: rotateY(-34deg) translateZ(8px);
    z-index: 100;
  }

  .hardcover_back {
    -webkit-transform: rotateY(-15deg) translateZ(-8px);
    -moz-transform: rotateY(-15deg) translateZ(-8px);
    transform: rotateY(-15deg) translateZ(-8px);
  }

  .page li:nth-child(1) {
    -webkit-transform: rotateY(-28deg);
    -moz-transform: rotateY(-28deg);
    transform: rotateY(-28deg);
  }

  .page li:nth-child(2) {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg);
  }

  .page li:nth-child(3) {
    -webkit-transform: rotateY(-32deg);
    -moz-transform: rotateY(-32deg);
    transform: rotateY(-32deg);
  }

  .page li:nth-child(4) {
    -webkit-transform: rotateY(-34deg);
    -moz-transform: rotateY(-34deg);
    transform: rotateY(-34deg);
  }

  .page li:nth-child(5) {
    -webkit-transform: rotateY(-36deg);
    -moz-transform: rotateY(-36deg);
    transform: rotateY(-36deg);
  }

  /*
          4. position, transform & transition
        */

  .hardcover_front,
  .hardcover_back,
  .book_spine,
  .hardcover_front li,
  .hardcover_back li,
  .book_spine li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .hardcover_front,
  .hardcover_back {
    -webkit-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }

  .hardcover_front {
    -webkit-transition: all 0.8s ease, z-index 0.6s;
    -moz-transition: all 0.8s ease, z-index 0.6s;
    transition: all 0.8s ease, z-index 0.6s;
  }

  /* HARDCOVER front */
  .hardcover_front li:first-child {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-transform: translateZ(2px);
    -moz-transform: translateZ(2px);
    transform: translateZ(2px);
  }

  .hardcover_front li:last-child {
    -webkit-transform: rotateY(180deg) translateZ(2px);
    -moz-transform: rotateY(180deg) translateZ(2px);
    transform: rotateY(180deg) translateZ(2px);
  }

  /* HARDCOVER back */
  .hardcover_back li:first-child {
    -webkit-transform: translateZ(2px);
    -moz-transform: translateZ(2px);
    transform: translateZ(2px);
  }

  .hardcover_back li:last-child {
    -webkit-transform: translateZ(-2px);
    -moz-transform: translateZ(-2px);
    transform: translateZ(-2px);
  }

  /* thickness of cover */
  .hardcover_front li:first-child:after,
  .hardcover_front li:first-child:before,
  .hardcover_front li:last-child:after,
  .hardcover_front li:last-child:before,
  .hardcover_back li:first-child:after,
  .hardcover_back li:first-child:before,
  .hardcover_back li:last-child:after,
  .hardcover_back li:last-child:before,
  .book_spine li:first-child:after,
  .book_spine li:first-child:before,
  .book_spine li:last-child:after,
  .book_spine li:last-child:before {
    position: absolute;
    top: 0;
    left: 0;
  }

  /* HARDCOVER front */
  .hardcover_front li:first-child:after,
  .hardcover_front li:first-child:before {
    width: 4px;
    height: 100%;
  }

  .hardcover_front li:first-child:after {
    -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  }

  .hardcover_front li:first-child:before {
    -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
    -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
    transform: rotateY(90deg) translateZ(158px) translateX(2px);
  }

  .hardcover_front li:last-child:after,
  .hardcover_front li:last-child:before {
    width: 4px;
    height: 160px;
  }

  .hardcover_front li:last-child:after {
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
      translateX(-2px) translateY(-78px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
      translateX(-2px) translateY(-78px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px)
      translateY(-78px);
  }
  .hardcover_front li:last-child:before {
    box-shadow: 0px 0px 30px 5px #333;
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
      translateX(-2px) translateY(-78px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
      translateX(-2px) translateY(-78px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px)
      translateY(-78px);
  }

  /* thickness of cover */

  .hardcover_back li:first-child:after,
  .hardcover_back li:first-child:before {
    width: 4px;
    height: 100%;
  }

  .hardcover_back li:first-child:after {
    -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  }
  .hardcover_back li:first-child:before {
    -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
    -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
    transform: rotateY(90deg) translateZ(158px) translateX(2px);
  }

  .hardcover_back li:last-child:after,
  .hardcover_back li:last-child:before {
    width: 4px;
    height: 160px;
  }

  .hardcover_back li:last-child:after {
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
      translateX(2px) translateY(-78px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px)
      translateX(2px) translateY(-78px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px)
      translateY(-78px);
  }

  .hardcover_back li:last-child:before {
    box-shadow: 10px -1px 80px 20px #666;
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
      translateX(2px) translateY(-78px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px)
      translateX(2px) translateY(-78px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px)
      translateY(-78px);
  }

  /* BOOK SPINE */
  .book_spine {
    -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    -moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
    width: 16px;
    z-index: 0;
  }

  .book_spine li:first-child {
    -webkit-transform: translateZ(2px);
    -moz-transform: translateZ(2px);
    transform: translateZ(2px);
  }

  .book_spine li:last-child {
    -webkit-transform: translateZ(-2px);
    -moz-transform: translateZ(-2px);
    transform: translateZ(-2px);
  }

  /* thickness of book spine */
  .book_spine li:first-child:after,
  .book_spine li:first-child:before {
    width: 4px;
    height: 100%;
  }

  .book_spine li:first-child:after {
    -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    transform: rotateY(90deg) translateZ(-2px) translateX(2px);
  }

  .book_spine li:first-child:before {
    -webkit-transform: rotateY(-90deg) translateZ(-12px);
    -moz-transform: rotateY(-90deg) translateZ(-12px);
    transform: rotateY(-90deg) translateZ(-12px);
  }

  .book_spine li:last-child:after,
  .book_spine li:last-child:before {
    width: 4px;
    height: 16px;
  }

  .book_spine li:last-child:after {
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px)
      translateX(2px) translateY(-6px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px)
      translateX(2px) translateY(-6px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px)
      translateY(-6px);
  }

  .book_spine li:last-child:before {
    box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px)
      translateX(2px) translateY(-6px);
    -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px)
      translateX(2px) translateY(-6px);
    transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px)
      translateY(-6px);
  }

  .page,
  .page > li {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .page {
    width: 100%;
    height: 98%;
    top: 1%;
    left: 3%;
    z-index: 10;
  }

  .page > li {
    width: 100%;
    height: 100%;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    transform-origin: left center;
    -webkit-transition-property: transform;
    -moz-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    transition-timing-function: ease;
  }

  .page > li:nth-child(1) {
    -webkit-transition-duration: 0.6s;
    -moz-transition-duration: 0.6s;
    transition-duration: 0.6s;
  }

  .page > li:nth-child(2) {
    -webkit-transition-duration: 0.6s;
    -moz-transition-duration: 0.6s;
    transition-duration: 0.6s;
  }

  .page > li:nth-child(3) {
    -webkit-transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  .page > li:nth-child(4) {
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }

  .page > li:nth-child(5) {
    -webkit-transition-duration: 0.6s;
    -moz-transition-duration: 0.6s;
    transition-duration: 0.6s;
  }

  /*
          5. events
        */

  .book:hover > .hardcover_front {
    -webkit-transform: rotateY(-145deg) translateZ(0);
    -moz-transform: rotateY(-145deg) translateZ(0);
    transform: rotateY(-145deg) translateZ(0);
    z-index: 0;
  }

  .book:hover > .page li:nth-child(1) {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg);
    -webkit-transition-duration: 1.5s;
    -moz-transition-duration: 1.5s;
    transition-duration: 1.5s;
  }

  .book:hover > .page li:nth-child(2) {
    -webkit-transform: rotateY(-35deg);
    -moz-transform: rotateY(-35deg);
    transform: rotateY(-35deg);
    -webkit-transition-duration: 1.8s;
    -moz-transition-duration: 1.8s;
    transition-duration: 1.8s;
  }

  .book:hover > .page li:nth-child(3) {
    -webkit-transform: rotateY(-118deg);
    -moz-transform: rotateY(-118deg);
    transform: rotateY(-118deg);
    -webkit-transition-duration: 1.6s;
    -moz-transition-duration: 1.6s;
    transition-duration: 1.6s;
  }

  .book:hover > .page li:nth-child(4) {
    -webkit-transform: rotateY(-130deg);
    -moz-transform: rotateY(-130deg);
    transform: rotateY(-130deg);
    -webkit-transition-duration: 1.4s;
    -moz-transition-duration: 1.4s;
    transition-duration: 1.4s;
  }

  .book:hover > .page li:nth-child(5) {
    -webkit-transform: rotateY(-140deg);
    -moz-transform: rotateY(-140deg);
    transform: rotateY(-140deg);
    -webkit-transition-duration: 1.2s;
    -moz-transition-duration: 1.2s;
    transition-duration: 1.2s;
  }


  /* Media Queries */
  @media screen and (max-width: 37.8125em) {
    .align > li {
      width: 100%;
      min-height: 440px;
      height: auto;
      padding: 0;
      margin: 0 0 30px 0;
    }

    .book {
      margin: 0 auto;
    }

    figcaption {
      text-align: center;
      width: 320px;
      top: 250px;
      padding-left: 0;
      left: -80px;
      font-size: 90%;
    }
  }
`;

export default function StyledBook() {
  return (
    <InnerWrapper>
      <Book>
        <div className="book">
          <ul className="hardcover_front">
            <Cover />
            <li></li>
          </ul>
          <ul className="page">
            <li></li>
            <li>
              <a className="btn" href="#">
                Download
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hardcover_back">
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine">
            <li></li>
            <li></li>
          </ul>
        </div>
      </Book>
    </InnerWrapper>
  );
}
