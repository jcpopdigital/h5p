// scripts/validate-content.js
const fs = require('fs');
const path = require('path');

function validateH5PContent(contentPath) {
    // Check required files
    const requiredFiles = ['h5p.json', 'content.json'];
    for (const file of requiredFiles) {
        if (!fs.existsSync(path.join(contentPath, file))) {
            throw new Error(`Missing required file: ${file}`);
        }
    }

    // Validate h5p.json
    const h5pJson = JSON.parse(fs.readFileSync(path.join(contentPath, 'h5p.json')));
    if (!h5pJson.mainLibrary) {
        throw new Error('h5p.json missing mainLibrary');
    }

    // Validate content.json
    const contentJson = JSON.parse(fs.readFileSync(path.join(contentPath, 'content.json')));
    if (!contentJson) {
        throw new Error('Invalid content.json');
    }

    console.log('Content validation passed!');
}

validateH5PContent('content/your-h5p-content');