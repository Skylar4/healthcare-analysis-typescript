const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Our Health Analysis App</h1>
      <p className="text-lg #4A4A4A max-w-2xl">
        Welcome to <strong>OptiHealth</strong>, your personal health companion!  
        Our app provides **real-time health insights, AI-powered analysis, and personalized recommendations**  
        to help you make informed decisions for a healthier life.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold #4A4A4A">Why Choose Us?</h2>
        <ul className="text-lg #4A4A4A mt-2 space-y-2">
          <li>✅ Personalized Health Reports</li>
          <li>✅ AI-Powered Wellness Insights</li>
          <li>✅ Sleep, Fitness, and Nutrition Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
