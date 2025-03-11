const fs = require("fs");
const path = require("path");

const directories = ["./public/slike/2023", "./public/slike/2024"];
const outputFile = "./src/data/images.json"; // Output JSON file

const generateImageList = () => {
  let imagePaths = [];

  directories.forEach((directory) => {
    const files = fs.readdirSync(directory).filter((file) => {
      return /\.(png|jpg|jpeg|gif)$/.test(file);
    });

    // Modify this to reflect the public path (remove "./public")
    const relativePaths = files.map((file) => `/slike/${directory.split('/').pop()}/${file}`);
    imagePaths = imagePaths.concat(relativePaths);
  });

  fs.writeFileSync(outputFile, JSON.stringify(imagePaths, null, 2));
  console.log("Image list generated:", imagePaths);
};

generateImageList();
