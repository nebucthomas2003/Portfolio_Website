function downloadResume() {
  const resumeUrl = './assets/OriginalResume.pdf'; 
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'NebuCThomas.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
