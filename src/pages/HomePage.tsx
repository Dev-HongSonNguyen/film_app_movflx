import React from "react";
import "../css/HomePage.css";
// import "../javascript/HomePage.js";
const HomePage = () => {
  return (
    <div>
      <section className="slider relative z-1 p-[300px] hidden md:block">
        <div className="flex absolute top-[100px] left-0 right-0 max-w-[1280px] m-auto justify-between">
          <div className="max-w-[600px] delay-02">
            <h6 className="text-[#e4d804] text-[24px] font-bold animationTop">
              Movflx
            </h6>
            <h2 className="text-[#ffffff] text-[60px] animationTop">
              Unlimited <span className="text-[#e4d804]">Movie</span>, TV Shows,
              & More.
            </h2>
            <div className="">
              <ul className="flex gap-[20px] animationTop">
                <li>
                  <span className="bg-[#ffffff] text-[11px] py-[7px] px-[11px]">
                    PG-18
                  </span>
                  <span className="text-[#ffffff] border border-[#ffffff] font-bold text-[10px] py-[7px] px-[11px]">
                    HD
                  </span>
                </li>
                <li>
                  <a href="" className="text-[#e3dfdf] text-[14px]">
                    Romance,
                  </a>
                  <a href="" className="text-[#e3dfdf] text-[14px]">
                    Drama
                  </a>
                </li>
                <li className="">
                  <span className="text-[12px] text-[#e3dfdf] pr-[10px]">
                    <i className="fas fa-calendar-alt text-[#e4d804] text-[12px]"></i>{" "}
                    2023
                  </span>
                  <span className="text-[12px] text-[#e3dfdf]">
                    <i className="far fa-clock text-[#e4d804] text-[12px]"></i>{" "}
                    128min
                  </span>
                </li>
              </ul>
              <a
                href=""
                className="border border-[#e4d804] inline-block py-[16px] px-[34px] mt-[50px] text-[#e3dfdf] hover:bg-[#e4d804] hover:text-[#000000] animationTop ease-linear"
              >
                <i className="fas fa-play"></i>
                <label htmlFor="" className="pl-[10px]">
                  WATCH NOW
                </label>
              </a>
            </div>
          </div>
          <div className="animationTop delay-01">
            <img
              className="w-[500px]"
              src="https://res.cloudinary.com/freelencer/image/upload/v1682449583/Movie/slider_img01_cmo33s.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="categoryFilm">
        <div className="max-w-[1280px] m-auto text-[12px] text-[#bcbcbc]">
          <div className="md:flex justify-between mx-[50px] md:mx-[0px] text-center md:text-left">
            <div className="">
              <span>ONLINE STREAMING</span>
              <h2 className="text-[36px] text-[#ffffff]">New Release Movies</h2>
            </div>
            <div className="md:flex items-end md:gap-[10px]">
              <a
                href=""
                className="inline-block text-[12px] bg-[#20212b] py-[11px] px-[27px] border border-[#e4d804]"
              >
                TV Shows
              </a>
              <a
                href=""
                className="inline-block text-[12px] bg-[#20212b] py-[11px] px-[27px] border border-[#e4d804]"
              >
                Movies
              </a>
              <a
                href=""
                className=" inline-block text-[12px] bg-[#20212b] py-[11px] px-[27px] border border-[#e4d804]"
              >
                Anime
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 pt-[50px] gap-[30px] mx-[50px] md:mx-[0px]">
            <div className="movie-item bg-[#1f1e24] px-[3px] py-[30px] text-center">
              <div className="movie-poster flex justify-center ">
                <a href="" className="">
                  <img
                    className=""
                    src="https://res.cloudinary.com/freelencer/image/upload/v1682535170/Movie/s_ucm_poster05_q3moe3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="movie-content pt-[20px] leading-[30px]">
                <div className="rating">
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                </div>
                <h5>
                  <a
                    href=""
                    className="text-[#d5d5d5] text-[16px] hover:text-[#e4d804]"
                  >
                    Message in a Bottle
                  </a>
                </h5>
                <span className="text-[12px] text-[#9d9d9d]">Adventure</span>
                <div className="pt-[30px]">
                  <ul className="flex items-center justify-center gap-[20px] ">
                    <li>
                      <a
                        href=""
                        className="bg-[#02050a] text-[#4c5066] py-[7px] px-[12px] text-[10px] font-bold hover:text-[#e4d804] transition-all mr-[5px]"
                      >
                        HD
                      </a>
                      <a
                        href=""
                        className="bg-[#02050a] text-[#4c5066] py-[7px] px-[12px] text-[10px] font-bold hover:text-[#e4d804] transition-all"
                      >
                        ENGLISH
                      </a>
                    </li>
                    <li>
                      <span className="text-[#9b9b9b] text-[13px]">
                        <i className="fas fa-thumbs-up pr-[5px] text-[#c77f01]"></i>
                        3.5
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery p-[50px] md:p-[100px]">
        <div className="w3-content w3-section max-w-[1280px] m-auto">
          <img
            className="mySlides md:w-[100%] md:h-[700px] w-[700px] h-[100px]"
            src="https://res.cloudinary.com/freelencer/image/upload/v1682701253/Movie/gallery_01_gx07sj.jpg"
          />
          <img
            className="mySlides md:w-[100%] md:h-[700px] w-[700px] h-[100px]"
            src="https://res.cloudinary.com/freelencer/image/upload/v1682703652/Movie/gallery_04_sxil5n.jpg"
          />
          <img
            className="mySlides md:w-[100%] md:h-[700px] w-[700px] h-[100px]"
            src="https://res.cloudinary.com/freelencer/image/upload/v1682703940/Movie/gallery_02_rmskgm.jpg"
          />
          <img
            className="mySlides md:w-[100%] md:h-[700px] w-[700px] h-[100px]"
            src="https://res.cloudinary.com/freelencer/image/upload/v1682703950/Movie/gallery_03_vhau6s.jpg"
          />
        </div>
      </section>
      <section className="service p-[50px] md:p-[100px]">
        <div className="max-w-[1280px] m-auto grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[200px]">
          <div className="">
            <span className="text-[12px] text-[#e4d804]">ONLINE STREAMING</span>
            <h2 className="md:text-[36px] text-[#ffffff]">
              Download Your Shows Watch Offline.
            </h2>
            <div className="">
              <div className="block md:flex items-center gap-[20px] py-[20px]">
                <div className="border rounded-[50%] p-[30px] border-[#e4d804] border-dashed inline-block mb-[30px] md:mb-[0px]">
                  <i className="fas fa-tv text-[38px] text-[#ffffff]"></i>
                </div>
                <div className="">
                  <h5 className="text-[#ffffff] text-[18px]">
                    Enjoy on Your TV.
                  </h5>
                  <p className="text-[#bcbcbc] text-[14px] text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil libero modi amet, tempore tempora molestiae quasi
                    provident illo obcaecati numquam!
                  </p>
                </div>
              </div>
              <div className="block md:flex items-center gap-[20px] py-[20px]">
                <div className="border rounded-[50%] p-[30px] border-[#e4d804] border-dashed inline-block mb-[30px] md:mb-[0px]">
                  <i className="fas fa-video text-[38px] text-[#ffffff]"></i>
                </div>
                <div className="">
                  <h5 className="text-[#ffffff] text-[18px]">
                    Enjoy on Your TV.
                  </h5>
                  <p className="text-[#bcbcbc] text-[14px] text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil libero modi amet, tempore tempora molestiae quasi
                    provident illo obcaecati numquam!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://res.cloudinary.com/freelencer/image/upload/v1682838185/Movie/services_img02_jtvu9z.jpg"
              alt=""
              className="w-full rounded-[8px]"
              style={{ boxShadow: "#070707 0px 3px 24px 0px" }}
            />
            {/* <div className="flex items-center gap-[10px] bg-[#e4d804]">
              <a href="" className="">
                DOWNOAD
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 font-bold"
              >
                <path
                  strokeLinecap="ruond"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div> */}
          </div>
        </div>
      </section>
      <section className="listFilm p-[50px] md:p-[100px]">
        <div className="max-w-[1280px] m-auto">
          <div className="text-center pb-[30px] md:pb-[50px]">
            <span className="text-[12px] text-[#bcbcbc]">TOP RATED MOVIES</span>
            <h2 className="title-listFilm text-[30px] md:text-[36px] text-[#ffffff] font-bold">
              Top Online Shows Watch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px]">
            <div className="movie-item bg-[#1f1e24] px-[3px] py-[30px] text-center">
              <div className="movie-poster flex justify-center relative">
                <a href="" className="">
                  <img
                    className="pictureFilm"
                    src="https://res.cloudinary.com/freelencer/image/upload/v1682535170/Movie/s_ucm_poster05_q3moe3.jpg"
                    alt=""
                  />
                </a>
                <div className="btn-detail absolute top-[35%] left-0 right-0 ease-linear">
                  <div className="pb-[30px]">
                    <a
                      href=""
                      className="bg-[#e4d804] py-[11px] px-[18px] text-[10px]"
                    >
                      Details
                    </a>
                  </div>
                  <div className="">
                    <a
                      href=""
                      className="bg-[#e4d804] py-[11px] px-[18px] text-[10px]"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="movie-content pt-[20px] leading-[30px]">
                <div className="rating">
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                  <i className="fas fa-star text-[#e4d804] text-[10px]"></i>
                </div>
                <h5>
                  <a
                    href=""
                    className="text-[#d5d5d5] text-[16px] hover:text-[#e4d804]"
                  >
                    Message in a Bottle
                  </a>
                </h5>
                <span className="text-[12px] text-[#9d9d9d]">Adventure</span>
                <div className="pt-[30px]">
                  <ul className="flex items-center justify-center gap-[20px]">
                    <li className="">
                      <a
                        href=""
                        className="bg-[#02050a] text-[#4c5066] py-[7px] px-[12px] text-[10px] font-bold hover:text-[#e4d804] transition-all mr-[5px]"
                      >
                        HD
                      </a>
                      <a
                        href=""
                        className="bg-[#02050a] text-[#4c5066] py-[7px] px-[12px] text-[10px] font-bold hover:text-[#e4d804] transition-all"
                      >
                        ENGLISH
                      </a>
                    </li>
                    <li>
                      <span className="text-[#9b9b9b] text-[13px]">
                        <i className="fas fa-thumbs-up pr-[5px] text-[#c77f01]"></i>
                        3.5
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
