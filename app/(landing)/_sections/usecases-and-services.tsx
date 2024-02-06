import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
const UseCasesAndServices = () => {
  return (
    <MaxWidthWrapper>
      <div
        className="mx-auto mt-20 flex max-w-5xl flex-col sm:mt-40"
        id="use-cases-and-services"
      >
        <div className="mb-6 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              What we offer to tackle real life scenarios
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We utilize our extensive experience from real life scenarios to
              arrive at a sustainable solution that helps you achieve your
              business goals.
            </p>
          </div>
        </div>
        {/* steps */}

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-6 md:flex-row">
            <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
              <CardTitle>Applications</CardTitle>
              <CardDescription className="mb-3 text-center">
                Utilizing our <span className="text-blue-600">ProjectSync</span>{" "}
                web application to provide you with scalable and performant
                solution for project management & fulfillment.
              </CardDescription>
              <Image
                src="/coffee.webp"
                alt="cafe scenario"
                width={128}
                height={128}
                quality={100}
              />
            </Card>
            <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
              <CardTitle>Software Development</CardTitle>
              <CardDescription className="mb-3 text-center">
                Providing our development expertise for niche applications.
              </CardDescription>
              <Image
                src="/taxi.webp"
                alt="cafe scenario"
                width={128}
                height={128}
                quality={100}
              />
            </Card>

            <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
              <CardTitle>Data Infrastructure</CardTitle>
              <CardDescription className="mb-3 text-center">
                Database design, setup and data pipelines to enable a
                sustainable and scalable data landscape.
              </CardDescription>
              <Image
                src="/schedule.webp"
                alt="cafe scenario"
                width={128}
                height={128}
                quality={100}
              />
            </Card>
          </div>
        </div>
        <div className="mb-6 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-4 text-lg text-gray-600">and many more...</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default UseCasesAndServices;
