// scripts/fix-paths.js
const fs = require('fs');
const path = require('path');

function fixContentPaths(contentPath) {
    const contentJsonPath = path.join(contentPath, 'content.json');
    const content = JSON.parse(fs.readFileSync(contentJsonPath));

    // Function to recursively update paths
    function updatePaths(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string' && obj[key].startsWith('files/')) {
                obj[key] = obj[key].replace('files/', 'content/');
            } else if (typeof obj[key] === 'object') {
                updatePaths(obj[key]);
            }
        }
    }

    updatePaths(content);
    fs.writeFileSync(contentJsonPath, JSON.stringify(content, null, 2));
}

fixContentPaths('content/your-h5p-content');