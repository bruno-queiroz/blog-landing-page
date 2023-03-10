import React from "react";

const DesignedForTheFutureSection = () => {
  return (
    <section className="flex flex-col gap-4 p-4 lg:p-8 py-24 lg:relative max-w-[1440px] w-full mx-auto">
      <h2 className="font-semibold text-very-dark-blue text-2xl mb-4 text-center lg:text-4xl lg:absolute lg:top-24 lg:right-[50%] lg:translate-x-[50%]">
        Designed for the future
      </h2>
      <div className="lg:grid lg:grid-cols-2 gap-8 lg:mt-24">
        <div className="illustration-bg-img order-2 self-end" />
        <div className="flex flex-col gap-8 order-1 justify-center">
          <article>
            <h3 className="font-semibold text-very-dark-blue text-2xl text-center mb-4">
              Introducing an extensible editor
            </h3>
            <p className="text-very-dark-grayish-blue text-lg text-center">
              {" "}
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </article>
          <article>
            <h3 className="font-semibold text-very-dark-blue text-2xl text-center mb-4">
              Robust content management
            </h3>
            <p className="text-very-dark-grayish-blue text-lg text-center">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DesignedForTheFutureSection;
