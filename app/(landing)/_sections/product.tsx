import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
const Product = () => {
  return (
    <div
      className="mx-auto mt-20 flex max-w-5xl flex-col sm:mt-40"
      id="product"
    >
      <div className="mb-6 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 text-4xl font-bold text-blue-600 sm:text-5xl">
            ProjectSync
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The project management tool{" "}
            <span className="text-blue-600">you</span> need, to scale your
            business.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 md:flex-row">
          <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
            <CardTitle>Project Templates</CardTitle>
            <CardDescription className="mb-3 text-center">
              Template generation for frequently recurring projects.
            </CardDescription>
            <Image
              src="/"
              alt="template generation"
              width={128}
              height={128}
              quality={100}
              className="rounded-xl"
            />
          </Card>
          <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
            <CardTitle>Worker pools</CardTitle>
            <CardDescription className="mb-3 text-center">
              Create worker pools to allow a group of employees to claim tasks
              themselves.
            </CardDescription>
            <Image
              src=""
              alt="pooling"
              width={128}
              height={128}
              quality={100}
              className="rounded-xl"
            />
          </Card>

          <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
            <CardTitle>Milestones</CardTitle>
            <CardDescription className="mb-3 text-center">
              Set Milestones with complex conditions taylored to your reporting
              requirements.
            </CardDescription>
            <Image
              src="/"
              alt="milestones"
              width={128}
              height={128}
              quality={100}
              className="rounded-xl"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Product;
