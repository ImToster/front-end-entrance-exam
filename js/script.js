document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#load-pdf").addEventListener("click", () => {
    element = document.querySelector("main");
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const pxToMm = (px) => px * 0.264583;
    const mmWidth = pxToMm(width);
    const mmHeight = pxToMm(height);

    const options = {
      margin: 0, 
      filename: "document.pdf",
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "mm",
        format: [mmWidth, mmHeight],
        orientation: "portrait",
      },
    };
    html2pdf().from(element).set(options).save();
  });
});
