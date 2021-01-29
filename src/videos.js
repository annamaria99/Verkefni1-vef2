const fs = require('fs');
const express = require('express');

fs.readFile('videos.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    try {
        const videos = JSON.parse(data);
        handleFile(videos);

} catch(err) {
        console.log(err);
    }
})

function handleFile(content) {
    
    
}