import React from "react";

const HowWeWork = () => {
  // Data for the steps
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "We start with a detailed consultation to understand your needs and goals. This helps us align our strategies with your vision.",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "We create a customized plan tailored to your specific requirements. Our team ensures every detail is accounted for.",
    },
    {
      id: 3,
      title: "Execution",
      description:
        "Our team executes the plan with precision and delivers high-quality results. We keep you updated throughout the process.",
    },
    {
      id: 4,
      title: "Review",
      description:
        "After execution, we review the results with you to ensure everything meets your expectations.",
    },
    {
      id: 5,
      title: "Support",
      description:
        "We provide ongoing support to ensure your continued success and satisfaction.",
    },
    {
      id: 6,
      title: "Optimization",
      description:
        "We continuously optimize our processes to deliver even better results over time.",
    },
  ];

  return (
    <div className='py-12 bg-gray-900 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
            How We Work
          </h2>
          <p className='mt-4 text-lg text-gray-400'>
            Our process is designed to deliver the best results for our clients.
          </p>
        </div>

        <div className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {steps.map((step) => (
              <div
                key={step.id}
                className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  {step.id}
                </div>
                <h3 className='mt-4 text-xl font-bold text-white'>
                  {step.title}
                </h3>
                <p className='mt-2 text-gray-400'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
