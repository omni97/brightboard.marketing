// Form submission tracker - logs to local storage
// Add to your website's </body> tag

let CURRENT_LANGUAGE = 'nl';

// Listen for form submissions
document.addEventListener('submit', function(e) {
  const form = e.target;
  
  // Check if this is one of our tracked forms
  const isTrackedForm = 
    form.id === 'proLeagueForm' || 
    form.id === 'redDevilsForm' || 
    form.id === 'vbrBrochureForm';
  
  if (!isTrackedForm) return;
  
  // Determine source
  let source = 'Unknown';
  if (form.id === 'proLeagueForm') source = 'Pro League';
  if (form.id === 'redDevilsForm') source = 'Red Devils';
  if (form.id === 'vbrBrochureForm') source = 'Brochure';
  
  // Collect form data
  const formData = new FormData(form);
  const submission = {
    source: source,
    firstName: formData.get('firstname') || '',
    lastName: formData.get('lastname') || '',
    email: formData.get('email') || '',
    phone: formData.get('phone') || '',
    company: formData.get('company') || '',
    region: formData.get('region') || '',
    message: formData.get('message') || '',
    language: CURRENT_LANGUAGE
  };
  
  // Log to dashboard (if it exists on the page)
  if (window.addFormSubmission) {
    window.addFormSubmission(submission);
  }
  
  console.log('✓ Form submission logged:', submission);
  
  // If you also want to send to an email service (optional), add here
  // Example with Formspree: form.submit();
}, true);

// Track language changes
const observer = new MutationObserver(() => {
  const htmlLang = document.documentElement.lang;
  if (htmlLang) {
    CURRENT_LANGUAGE = htmlLang.substring(0, 2).toLowerCase();
  }
});

observer.observe(document.documentElement, { attributes: true });
