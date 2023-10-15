// Importing required dependencies
import { useState } from 'react';
import countries from 'i18n-iso-countries';
import 'tailwindcss/tailwind.css';
import 'src/app/globals.css';

// Registering the English locale for the `i18n-iso-countries` library
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function Form() {

  // State management for form data
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    originCountry: '',
    teamSize: '',
    additionalInfo: ''
  });

  // State to track form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the formData in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Mark the form as submitted
    setSubmitted(true);
  };

   // Generating a list of countries for the dropdown
  const countryList = Object.entries(countries.getNames('en')).map(([code, name]) => ({ code, name }));

  return (
    
    // Setting up the gradient background for the main container
    
    <div className="bg-gradient-to-r from-blue-400 to-green-400 animate-gradient-x animate-gradient-y min-h-screen flex items-center justify-center p-8">
     
     <h1 className="text-4xl font-bold text-white mb-8 title">Founder Application Form</h1>
      <div className="bg-white p-8 rounded shadow-lg form-container mx-auto">
        {/* Conditional rendering based on form submission status */}
        {!submitted ? (
           // Render the form when not submitted
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ... form fields ... */}
            <input type="text" name="projectName" placeholder="Project Name" value={formData.projectName} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded mb-4" />
            <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded mb-4 h-32" />
            <select name="originCountry" value={formData.originCountry} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded mb-4">
              <option value="" disabled>Select your country</option>
              {countryList.map((country, index) => (
                <option value={country.code} key={index}>{country.name}</option>
              ))}
            </select>
            <input type="number" name="teamSize" placeholder="Size of the Team" value={formData.teamSize} onChange={handleChange} required min="1" className="w-full p-4 border border-gray-300 rounded mb-4" />
            <textarea name="additionalInfo" placeholder="Additional Information" value={formData.additionalInfo} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded mb-4" />
            <button type="submit" className="bg-blue-500 text-white p-4 rounded w-full">Submit</button>
          </form>
        ) : (
          // Render the success message after submission
          <div class="text-white">
            <h2>Application received! We will contact you soon!</h2>
            {/* ... display form data ... */}
            <p>Project Name: {formData.projectName}</p>
            <p>Project Description: {formData.projectDescription}</p>
            <p>Origin Country: {formData.originCountry}</p>
            <p>Size of the Team: {formData.teamSize}</p>
            <p>Additional Information: {formData.additionalInfo || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Exporting the Form component
export default Form;
