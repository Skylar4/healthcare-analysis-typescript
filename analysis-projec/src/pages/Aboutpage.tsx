const AboutPage = () => {
  const imageArray = ['AI.png',// : https://www.vecteezy.com/vector-art/23783293-artificial-intelligence-generated-icon-vector-ai-sign-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration
                    'Predict.png', 
                    'Personalized.png', //: https://www.tpsearchtool.com/images/assessment-icon-png-61566-free-icons-library-images
                    'DataInput.png', //https://www.iconfinder.com/icons/4428044/interface_management_ui_usability_icon
                     'Tracking.png' //https://www.vecteezy.com/vector-art/11843828-heart-beat-cardiorgam-vector-logo-icon-heartbeat-pulse-flat-sign-for-medical-apps-and-websites-simple-black-line-web-symbol-illustration
                    ]; 

  return (
    <div className="relative pt-8">
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
          height: '500px',
        }} //https://demigos.com/blog-post/predictive-modeling-in-healthcare/
      >
        <div className="flex flex-col justify-start items-start h-full pl-12 pt-20 text-white">
          <p className="text-xl font-medium text-black">Welcome to</p>
          <img src="/opti.png" alt="OptiHealth Logo" className="h-20 my-2" />
          <p className="text-lg max-w-xl font-medium text-black">
            We are a health tech company that uses AI to provide personalized health insights for proactive health management.
            We analyze user data to predict potential health issues, providing personalized insights for proactive health
            management by individuals and healthcare providers.
          </p>
        </div>
      </div>

      {/* "What makes us Unique?" outside the blue box */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-blue-500">What makes us Unique?</h2>
      </div>

      {/* White Boxes Directly Under the Heading */}
      <div className="flex justify-center flex-wrap gap-6 mt-8"> {/* Added mt-8 for spacing */}
        {imageArray.map((img, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 w-[180px] h-[180px] flex items-center justify-center">
            <img src={`/${img}`} alt={`Feature ${index + 1}`} className="h-24 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

