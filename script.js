
function downloadResume() {
 
  var resumePath = 'Abish Resume.pdf';
  var link = document.createElement('a');

  link.download = 'Abish Resume.pdf';
  link.href = resumePath;

 
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}


function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    
    var form = document.getElementById('contactForm');
    form.reset();
  
    alert('Thank you for your message! I will get back to you soon.');
  }
  
  