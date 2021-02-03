const util = require('util');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function readVideos() {
  try {
    const files = await readFileAsync('videos.json', 'utf8');
    return JSON.parse(files);
  } catch (e) {
    throw new Error('error: ', e);
  }
}

async function videoList(req, res) {
  const title = 'Fræðslumyndbandaleigan';
  const videodata = await readVideos();

  res.render('videos', { title, videos: videodata });
}

async function video(req, res, next) {
  const title = 'Myndband';
  const { id } = req.params;

  const videodata = await readVideos();

  if (!videodata.videos[id]) {
    return next();
  }
  return res.render('video', { title, id, video: videodata });
}

router.get('/', catchErrors(videoList));
router.get('/test/:id', catchErrors(video));

module.exports = router;
