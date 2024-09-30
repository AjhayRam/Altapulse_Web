import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LeftContentService } from "../Services/Services";

const WhyChooseUs = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center space-y-4 text-center px-4 md:px-8">
            <p className="text-secondary tracking-widest text-sm sm:text-sm md:text-base lg:text-base">
              ADVANTAGES
            </p>
            <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Why Choose Altapulse?
            </h1>
          </div>
          <section class="bg-white py-20">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                <div class="flex flex-col items-center p-6 rounded-md shadow-md bg-white">
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg
                      class="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-secondary"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold">Latest Trends</h3>
                  <p class="text-gray-500 text-center">
                    We stay ahead of industry trends to ensure your content is
                    fresh and relevant.
                  </p>
                </div>
                <div class="flex flex-col items-center p-6 rounded-md shadow-md bg-white">
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg
                      class="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-secondary"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold ">
                    Versatile Storytelling
                  </h3>
                  <p class="text-gray-500  text-center">
                    Our approach to storytelling makes complex ideas relatable,
                    creating an emotional connection with your audience.
                  </p>
                </div>
                <div class="flex flex-col items-center p-6 rounded-md shadow-md bg-white ">
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg
                      class="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-secondary"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold ">Expert Writers</h3>
                  <p class="text-gray-500  text-center">
                    Our team comprises experienced writers passionate about
                    crafting content that truly engages and inspires.
                  </p>
                </div>
                <div class="flex flex-col items-center p-6 rounded-md shadow-md bg-white ">
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg
                      class="w-5 h-5 text-primary-600 lg:w-10 lg:h-10 dark:text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-secondary"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 002 0v-1.403c.94-.177 1.791-.604 2.353-1.253a1 1 0 10-1.51-1.31c-.164.187-.452.377-.843.504v-1.941a4.535 4.535 0 001.676-.662C13.398 9.765 14 9 14 8c0-.991-.602-1.765-1.324-2.246A4.535 4.535 0 0010 5.092V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold ">Tailored Solutions</h3>
                  <p class="text-gray-500  text-center">
                    We customize every piece of content to align with your
                    brand’s goals and audience preferences.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;