import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';


type ConditionInfo = {
  name: string;
  description: string;
  symptoms: string[];
  whenToSeekHelp: string[];
};

const Result: React.FC = () => {
  // State to track the selected prediction
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  // State to track whether to show more conditions
  const [showMore, setShowMore] = useState(false);

  // Information for each condition with explicit types
  const conditionInfo: Record<string, ConditionInfo> = { //mayoclinic.com
    hypertension: {
      name: 'High Blood Pressure (Hypertension)',
      description:
        'High blood pressure (hypertension) is a condition where the force of blood against the artery walls is consistently too high. This makes the heart work harder and increases the risk of serious health problems like heart disease and stroke.',
      symptoms: [
        'Headaches',
        'Dizziness',
        'Blurred vision',
        'Chest pain',
        'Shortness of breath',
        'Nosebleeds',
      ],
      whenToSeekHelp: [
        'Routine Check-ups: Everyone over 18 should have their blood pressure checked at least every two years (or more often if at risk).',
        'Severe Hypertension (Hypertensive Crisis): If your blood pressure is higher than 180/120 mm Hg, seek immediate emergency medical care.',
      ],
    },
    diabetes: { // https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444
      name: 'Diabetes',
      description:
        'Diabetes mellitus refers to a group of diseases that affect how the body uses blood sugar (glucose). Glucose is an important source of energy for the cells that make up the muscles and tissues. Its also the brains main source of fuel. The main cause of diabetes varies by type. But no matter what type of diabetes you have, it can lead to excess sugar in the blood. Too much sugar in the blood can lead to serious health problems. Chronic diabetes conditions include type 1 diabetes and type 2 diabetes. Potentially reversible diabetes conditions include prediabetes and gestational diabetes. Prediabetes happens when blood sugar levels are higher than normal. But the blood sugar levels arent high enough to be called diabetes. And prediabetes can lead to diabetes unless steps are taken to prevent it. Gestational diabetes happens during pregnancy. But it may go away after the baby is born.',
      symptoms: [
        'Increased thirst',
        'Frequent urination',
        'Extreme fatigue',
        'Blurred vision',
        'Slow healing of cuts or wounds',
        'Unexplained weight loss',
        'Losing weight without trying',
      ],
      whenToSeekHelp: [
        'Seek medical attention if you experience any symptoms of high blood sugar.',
        'If you have a family history of diabetes and are at risk, seek help sooner.',
      ],
    },
    highCholesterol: { // https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/symptoms-causes/syc-20350800
      name: 'High Cholesterol',
      description:
        'Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells, but high levels of cholesterol can increase your risk of heart disease. With high cholesterol, you can develop fatty deposits in your blood vessels. Eventually, these deposits grow, making it difficult for enough blood to flow through your arteries. Sometimes, those deposits can break suddenly and form a clot that causes a heart attack or stroke.',
      symptoms: ['Usually no symptoms. Can be detected through blood tests.'],
      whenToSeekHelp: [
        'According to the National Heart, Lung, and Blood Institute (NHLBI), a person\'s first cholesterol screening should occur between the ages of 9 and 11, and then be repeated every five years after that.',
        'The NHLBI recommends cholesterol screenings every 1-2 years for men ages 45-65, and women ages 55-65. People over 65 should get cholesterol tests annually.',
      ],
    },
    asthma: {  //https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653
      name: 'Asthma',
      description:
        'Asthma cant be cured, but its symptoms can be controlled. Because asthma often changes over time, its important that you work with your doctor to track your signs and symptoms and adjust your treatment as needed.',
      symptoms: ['Shortness of breath', 
        'Wheezing', 
        'Chest tightness', 
        'Coughing',
        'Shortness of breath',
        'Trouble sleeping'],
      whenToSeekHelp: [
        'Severe asthma attacks can be life-threatening. Work with your doctor to determine what to do when your signs and symptoms worsen — and when you need emergency treatment. Signs of an asthma emergency include:',

         'Rapid worsening of shortness of breath or wheezing',
         'No improvement even after using a quick-relief inhaler',
         'Shortness of breath when you are doing minimal physical activity,',
      ],
    },
    stroke: { // https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113
      name: 'Stroke',
      description:
        'A stroke occurs when blood flow to an area of the brain is cut off. It can be caused by a blocked artery or a burst blood vessel.',
      symptoms: ['Sudden numbness or weakness in the face, arm, or leg', 'Confusion or trouble speaking', 'Difficulty seeing', 'Headache', 'Trouble walking'],
      whenToSeekHelp: [
        'Call emergency services immediately if you experience symptoms of a stroke. Time is crucial in treating strokes. Think "FAST" and fo the following:', 'FACE: Ask the person to smile. Does one side of the face droop?', 'ARMS: Ask the person to raise both arms. Does the person arm drift downward? Or is one arm unable to rise?', 'SPEECH: Ask the person to repeat a simple phrase. Is the persons speech slurred or different from usual?', 'TIME: If you see any of these signs, call 911 or emergency medical help right away.'
      ],
    },
  };

  // Handler for selecting a condition
  const handleConditionClick = (condition: string) => {
    setSelectedCondition(condition);
  };

  // Render the info based on the selected condition
  const renderConditionInfo = (condition: string) => {
    if (!condition) return null;

    const info = conditionInfo[condition];
    return (
      <>
        <Typography variant="h5">{info.name}</Typography>
        <Typography>{info.description}</Typography>
        <Typography variant="h6">Symptoms:</Typography>
        <ul>
          {info.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
        <Typography variant="h6">When to Seek Help:</Typography>
        <ul>
          {info.whenToSeekHelp.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  // Add handler to load more conditions
  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 3, width: '100vw' }}>
    {/* Logo */}
    <img src="/OptiHealthlogo.png" alt="Logo" style={{ height: '50px', marginBottom: '30px' }} />

    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
        {/* Left Side: Prediction Results */}
        <Box sx={{ flex: 1, marginRight: 3 }}>
          <Typography variant="h6">Prediction Result:</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Pentagon Shape for Prediction Boxes */}
            {[{ text: 'Hypertension 40%', condition: 'hypertension' }, { text: 'Diabetes 20%', condition: 'diabetes' }, { text: 'High Cholesterol 10%', condition: 'highCholesterol' }].map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: 2,
                  width: '100%',
                  clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleConditionClick(item.condition)}
              >
                {item.text}
              </Box>
            ))}
          </Box>

          {/* Load More Prediction button */}
          <Button variant="contained" color="primary" sx={{ marginTop: 8, width: '100%' }} onClick={handleLoadMore}>
            Load More Prediction
          </Button>

          {/* Display additional predictions below the button if "showMore" is true */}
          {showMore && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
              {[{ text: 'Asthma 5%', condition: 'asthma' }, { text: 'Stroke 5%', condition: 'stroke' }].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'skyblue',
                    color: 'black',
                    padding: 2,
                    width: '100%',
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleConditionClick(item.condition)}
                >
                  {item.text}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Right Side: Info Box (1/2 screen) */}
        <Box sx={{ flex: 2, backgroundColor: 'lightblue', color: 'black', padding: 4, marginLeft: 3, width: '500px' }}>
          {selectedCondition ? renderConditionInfo(selectedCondition) : <Typography>Please select a condition</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default Result;








