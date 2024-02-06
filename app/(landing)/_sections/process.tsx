import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const Process = () => {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-60 sm:gap-40 ">
        {/* Intro */}
        <div>
          <div className="mb-6 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                Start your consulting session free
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Gaining a competitive edge via digital solutions has never been
                easier.
              </p>
            </div>
          </div>
          {/* steps */}

          <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 1
                </span>
                <span className="text-xl font-semibold">
                  Evaluate your needs and business goals.
                </span>
                {/* <span className="mt-2 text-zinc-700">
          Either starting out with a free plan or choose our{" "}
          <Link
            href="/pricing"
            className="text-blue-700 underline underline-offset-2"
          >
            pro plan
          </Link>
          .
        </span> */}
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 2
                </span>
                <span className="text-xl font-semibold">
                  Develop a <span className="text-blue-600">scalable</span> &{" "}
                  <span className="text-blue-600">sustainable</span> solution
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 3
                </span>
                <span className="text-xl font-semibold">
                  Monitor and validate during operation
                </span>
                {/* <span className="mt-2 text-zinc-700">
          
        </span> */}
              </div>
            </li>
          </ol>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Process;
