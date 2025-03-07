import { useState, useEffect } from 'react'; 
import { Box, TextField, IconButton, Button, Typography, Tabs, Tab, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [newSymptom, setNewSymptom] = useState<string>('');
  const navigate = useNavigate();
  const [smokingStatus, setSmokingStatus] = useState<string>('Non-Smoker');
  const [alcoholConsumption, setAlcoholConsumption] = useState<string>('Occasional');
  const [exerciseLevel, setExerciseLevel] = useState<string>('Moderate');
  const [dietType, setDietType] = useState<string>('Balanced');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [familyCondition, setFamilyCondition] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };


  const handleContinue = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    } else {
      navigate('/result');
    }
  };

  const handleAddSymptom = () => {
    if (newSymptom) {
      setSymptoms([...symptoms, newSymptom]);
      setNewSymptom('');
    }
  };

  const handleDeleteSymptom = (index: number) => {
    const updatedSymptoms = symptoms.filter((_, i) => i !== index);
    setSymptoms(updatedSymptoms);
  };

  useEffect(() => {
  if (activeTab === 3) { // Lifestyle tab
     setSmokingStatus('');
     setAlcoholConsumption('');
     setExerciseLevel('');

    }
  }, [activeTab]);

  return (
    <Box sx={{ padding: 3, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Logo */}
      <Box sx={{ marginBottom: 2, alignSelf: 'flex-start' }}>
        <img src="/OptiHealthlogo.png" alt="Logo" style={{ height: '50px' }} />
      </Box>

      {/* Tabs Navigation */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="form tabs"
        variant="fullWidth"
        sx={{
          marginBottom: 2,
          width: '100%',
          '& .MuiTabs-flexContainer': {
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #ddd',
          },
          '& .MuiTab-root': {
          width: '25%',
          borderRight: '1px solid #ddd',
          '&:last-child': {
          borderRight: 'none', },
          },
        }}
      >
          
      <Tab
        label="Basic Info"
        sx={{
          backgroundColor: activeTab === 0 ? 'blue' : 'lightblue',
          color: 'black',
          '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'blue',
          },
          '&:hover': {
          backgroundColor: 'blue',
          color: 'white' },
        }}
      />
     
      <Tab
        label="Medical History"
        sx={{
          backgroundColor: activeTab === 1 ? 'blue' : 'lightblue',
          color: 'black',
          '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'blue',
          },
          '&:hover': { backgroundColor: 'blue' },
        }}
      />
      
      <Tab
        label="Vital Signs"
        sx={{
          backgroundColor: activeTab === 2 ? 'blue' : 'lightblue',
          color: 'black',
          '&.Mui-selected': {
            color: 'white',
            backgroundColor: 'blue',
          },
          '&:hover': { backgroundColor: 'blue' },
        }}
      />
      
      <Tab
        label="Lifestyle"
        sx={{
          backgroundColor: activeTab === 3 ? 'blue' : 'lightblue',
          color: 'black',
          '&.Mui-selected': {
            color: 'white',
            backgroundColor: 'blue',
          },
          '&:hover': { backgroundColor: 'blue' },
        }}
      />
      <Tab
        label="Symptoms"
        sx={{
          backgroundColor: activeTab === 4 ? 'blue' : 'lightblue',
          color: 'black',
          '&.Mui-selected': {
            color: 'black',
            backgroundColor: 'blue',
          },
          '&:hover': { backgroundColor: 'blue' },
        }}
      />
      </Tabs>

      {/* Form Section */}
      <Box sx={{ width: '75%', padding: 2 }}>
        {activeTab === 0 && (
          <Box>
            <Grid container spacing={2} alignItems="center">
              {/* Left Column */}
              <Grid item xs={6} container spacing={1} alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="body1">Name:</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth margin="dense" />
                </Grid>
        
                <Grid item xs={2}>
                  <Typography variant="body1">Age:</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth margin="dense" />
                </Grid>
        
                <Grid item xs={2}>
                  <Typography variant="body1">Gender:</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth margin="dense" />
                </Grid>
              </Grid>
        
              {/* Right Column */}
              <Grid item xs={6} container spacing={1} alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="body1">Weight:</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth margin="dense" placeholder="lbs" InputProps={{ endAdornment: <Typography>lbs</Typography> }} />
                </Grid>
        
                <Grid item xs={2}>
                  <Typography variant="body1">Height:</Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth margin="dense" placeholder="cm" InputProps={{ endAdornment: <Typography>cm</Typography> }} />
                </Grid>
              </Grid>
            </Grid>
        
            {/* Continue Button Centered Below */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
            <Button variant="contained" color="primary" onClick={handleContinue} sx={{ width: '200px' }}>
                Continue
              </Button>
            </Box>
          </Box>
        )}
    </Box>  
      {activeTab === 1 && (
          <Box>
            {/* Existing Medical Condition */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2, minWidth: '200px' }}>Existing Medical Condition:</Typography>
              <TextField
                value={medicalCondition}
                onChange={(e) => setMedicalCondition(e.target.value)}
                placeholder="e.g., Diabetes, Hypertension"
                sx={{ width: '400px' }}
                margin="normal"
                InputProps={{
                  style: { color: 'black' }, 
                }}
                InputLabelProps={{
                  style: { color: '#B0B0B0' }, 
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2, minWidth: '200px'  }}>Family Medical Conditions:</Typography>
              <TextField
                value={familyCondition}
                onChange={(e) => setFamilyCondition(e.target.value)}
                placeholder="e.g., Heart disease, Cancer"
                fullWidth
                sx={{ maxWidth: '500px' }}
                margin="normal"
                InputProps={{
                  style: { color: 'black' }, 
                }}
                InputLabelProps={{
                  style: { color: '#B0B0B0' }, 
                }} 
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2, minWidth: '200px'  }}>Allergies:</Typography>
              <TextField
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                placeholder="e.g., Amoxil, Sulfa Drugs"
                fullWidth
                sx={{ maxWidth: '500px' }}
                margin="normal"
                InputProps={{
                  style: { color: 'black' }, 
                }}
                InputLabelProps={{
                  style: { color: '#B0B0B0' }, 
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="body1" sx={{ marginRight: 2, minWidth: '200px'  }}>Current Medications:</Typography>
              <TextField
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                placeholder="e.g., Metoprolol, Ciprofloxacin"
                fullWidth
                sx={{ maxWidth: '500px' }}
                margin="normal"
                InputProps={{
                  style: { color: 'black' }, 
                }}
                InputLabelProps={{
                  style: { color: '#B0B0B0' }, 
                }}
              />
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
              <Button variant="contained" color="primary" onClick={handleContinue} sx={{ width: '200px' }}>
                Continue
              </Button>
            </Box>
          </Box>
        )}

        {activeTab === 2 && (
              <Box sx={{ width: '80%', maxWidth: 600, margin: '0 auto' }}>
                {/* Blood Pressure */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>
                    Blood Pressure:
                  </Typography>
                  <TextField
                    sx={{
                      width: '60%',
                      '& input': { color: 'gray' }, // Gray font color inside the text box
                    }}
                    margin="normal"
                    variant="outlined"
                    placeholder="120/80 mmHg"
                  />
                </Box>
                  
                {/* Blood Sugar */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>
                    Blood Sugar:
                  </Typography>
                  <TextField
                    sx={{
                      width: '60%', 
                      '& input': { color: 'gray' }, // Gray font color inside the text box
                    }}
                    margin="normal"
                    variant="outlined"
                    placeholder="5 mmol/L"
                  />
                </Box>
                  
                {/* Heart Rate */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>
                    Heart Rate:
                  </Typography>
                  <TextField
                    sx={{
                      width: '60%', 
                      '& input': { color: 'gray' }, // Gray font color inside the text box
                    }}
                    margin="normal"
                    variant="outlined"
                    placeholder="70 bpm"
                  />
                </Box>
                  
                {/* Temperature */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>
                    Temperature:
                  </Typography>
                  <TextField
                    sx={{
                      width: '60%', 
                      '& input': { color: 'gray' }, // Gray font color inside the text box
                    }}
                    margin="normal"
                    variant="outlined"
                    placeholder="37.5°C"
                  />
                </Box>
                  
                {/* Continue Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
                  <Button variant="contained" color="primary" onClick={handleContinue} sx={{ width: '200px' }}>
                    Continue
                  </Button>
                </Box>
              </Box>
            )}
            
            {activeTab === 3 && (
              <Box sx={{ width: '80%', maxWidth: 600, margin: '0 auto' }}> 
                {/* Smoking Selection */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px'}}>Smoking:</Typography>
                  <TextField
                    select
                    sx={{ width: 'calc(100% - 150px)' }} 
                    value={smokingStatus}
                    onChange={(e) => setSmokingStatus(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    margin="normal"
                  >
                    <option value="Please Select" style={{ color: 'lightgray' }}>Please select...</option>
                    <option value="Non-Smoker">Non-Smoker</option>
                    <option value="Former Smoker">Former Smoker</option>
                    <option value="Occasional Smoker">Occasional Smoker</option>
                    <option value="Regular Smoker">Regular Smoker</option>
                  </TextField>
                </Box>
                  
                {/* Alcohol Selection */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>Alcohol:</Typography>
                  <TextField
                    select
                    sx={{ width: 'calc(100% - 150px)' }}
                    value={alcoholConsumption}
                    onChange={(e) => setAlcoholConsumption(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    margin="normal"
                  >
                    <option value="Please Select" style={{ color: 'lightgray' }}>Please select...</option>
                    <option value="Occasional">Occasional</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Regular">Regular</option>
                    <option value="Heavy">Heavy</option>
                  </TextField>
                </Box>
                  
                {/* Exercise Selection */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>Exercise:</Typography>
                  <TextField
                    select
                    sx={{ width: 'calc(100% - 150px)' }}
                    value={exerciseLevel}
                    onChange={(e) => setExerciseLevel(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    margin="normal"
                  >
                    <option value="Please Select" style={{ color: 'lightgray' }}>Please select...</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Regular">Regular</option>
                    <option value="Occasional">Occasional</option>
                    <option value="Sedentary">Sedentary</option>
                  </TextField>
                </Box>
                  
                {/* Diet Selection */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, flexShrink: 0, width: '150px' }}>Diet:</Typography>
                  <TextField
                    select
                    sx={{ width: 'calc(100% - 150px)' }}
                    value={dietType}
                    onChange={(e) => setDietType(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    margin="normal"
                  >
                    <option value="Please Select" style={{ color: 'lightgray' }}>Please select...</option>
                    <option value="Balanced">Balanced</option>
                    <option value="Vegan">Vegan</option>
                    <option value="High Protein">High Protein</option>
                    <option value="Low Carb">Low Carb</option>
                  </TextField>
                </Box>
                  
                {/* Continue Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                  <Button variant="contained" color="primary" onClick={handleContinue} sx={{ width: '200px' }}>
                    Continue
                  </Button>
                </Box>
              </Box>
            )}

            {activeTab === 4 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                  label="Type Symptoms"
                  value={newSymptom}
                  onChange={(e) => setNewSymptom(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleAddSymptom}>
                  Add Symptom
                </Button>
            
                {/* Box for displaying symptoms */}
                <Box
                  sx={{
                    marginTop: 2,
                    width: '500px',
                    maxWidth: '600px',
                    height: '300px',
                    maxHeight: '500px', 
                    overflowY: 'auto', 
                    border: '1px solid #ddd',
                    padding: 2,
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>My symptoms:</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {symptoms.map((symptom, index) => (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor: 'lightblue',
                          padding: 1,
                          marginBottom: 1,
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>{symptom}</Typography>
                        <IconButton onClick={() => handleDeleteSymptom(index)}>
                          <Delete />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Box>
                  
                {/* Submit Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                  <Button variant="contained" color="primary" onClick={handleContinue}>
                    Submit
                  </Button>
                </Box>
              </Box>
            )}
            </Box>
          )}
export default MainPage;
          
