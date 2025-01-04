import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Business Standard",
    text: "Indian IT ecosystem is poised for a promising growth trajectory in the coming years with emerging technologies expected to witness a 20 per cent increase in new jobs in 2025, Human Resources (HR) platform FirstMeridian Business Services said on Tuesday Looking back at 2024, it said the Indian IT and tech ecosystem witnessed a 17 per cent surge in new employment opportunities, driven by rapid digital transformation and the concurrent rising demand for emerging tech niche job profiles.",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/21/full/1734719582-0644.jpg?im=FitAndFill=(826,465)",
  },
  {
    id: 1,
    name: "The Times of India",
    text: "Good news for IT sector job seekers! Technology talent demand surged to a new high in February, sparking hopes of recovery in the IT services job market. In February, hiring mandates for IT professionals reached 124,000, a significant 50% increase from January and 33% higher than December, according to data from Xpheno, a staffing firm.",
    img: "https://static.toiimg.com/thumb/msid-108810255,imgsize-35614,width-400,resizemode-4/108810255.jpg",
  },
  {
    id: 1,
    name: "Lucas Merian, New York",
    text: "While those with specialized skills remain in high demand, others may find the report doesn’t reflect their experience,” she said. “Looking ahead, the demand for workers is shifting. Knowledge workers are increasingly sought after, surpassing blue-collar roles.",
    img: "https://www.computerworld.com/wp-content/uploads/2024/12/1618780-0-11990000-1733855373-arrows-showing-upward-trend_growth_chart_graph-100747015-orig.jpg?resize=1024%2C683&quality=50&strip=all",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[200px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
