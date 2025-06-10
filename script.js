function downloadResume() {
  const resumeUrl = './assets/NEBU C THOMAS 2025.PDF'; 
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'NebuCThomas.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
