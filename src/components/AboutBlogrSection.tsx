import React from "react";

const AboutBlogrSection = () => {
  return (
    <section className="grid grid-cols-1 justify-center text-center lg:text-left gap-12 px-6 pb-28 lg:grid-cols-2">
      <div className="laptop-bg-img" />
      <div className="flex flex-col gap-8 justify-center">
        <article className="max-w-[600px] w-full mx-auto">
          <h2 className="text-2xl font-semibold text-very-dark-blue mb-6">
            Free, Open and simple
          </h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </article>

        <article className="max-w-[600px] w-full mx-auto">
          <h2 className="text-2xl font-semibold text-very-dark-blue mb-6">
            Powerful tooling
          </h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutBlogrSection;
