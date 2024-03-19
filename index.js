// Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
// Use the qr-image npm package to turn the user entered URL into a QR code image.
import qr from "qr-image";
// Create a txt file to save the user input using the native fs node module.
import fs from "fs";
inquirer
  .prompt([
    {"message": "type in your url:",
    name:"url",
  },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url; 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png')); 
    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("the file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

