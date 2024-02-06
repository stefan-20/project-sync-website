import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import ContactForm from "../_components.tsx/contact-form";
const Contact = () => {
  return (
    <div
      className="mx-auto mt-20 flex items-center max-w-5xl flex-col sm:mt-40"
      id="contact"
    >
      <div className="mb-6 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Contact us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Interested? We would love to hear from you!
          </p>
        </div>
      </div>
      {/* Contact Form */}
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
