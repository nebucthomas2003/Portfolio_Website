function downloadResume() {
    // Replace 'path_to_your_resume_file.pdf' with the actual path to your resume file
    const resumeUrl = './assets/NebuCThomasResume Updated- 14.01.2024.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nebu_C_Thomas_Resume.pdf'; // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  