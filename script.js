function downloadResume() {
    // Replace 'path_to_your_resume_file.pdf' with the actual path to your resume file
    const resumeUrl = './assets/Original Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nebu_C_Thomas_Resume.pdf'; // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  