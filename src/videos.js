const util = require('util');
const fs = require('fs');
const express = require('express');
const { nextTick } = require('process');

const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);

async function readVideos() {
    try {
    const files = await readFileAsync('videos.json','utf8');
    return JSON.parse(files);
    }
    catch(e) {
        throw new Error('error: ', e);
    }
}

async function videoList(req, res) {
    const title = 'Fræðslumyndbandaleigan';
    const videodata = await readVideos();

    res.render('videos', {title, videos: videodata});
}

async function video(req, res) {
    const title = 'Myndband';
    const id = req.params.id;

    const videodata = await readVideos();
    res.render('video', { title, id: id, video: videodata });
 
}

router.get('/', videoList);
router.get('/test/:id', video);

module.exports = router;
