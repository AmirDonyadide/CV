// Offline preparation only. Run with Sharp available via NODE_PATH; see the audit.
// Original evidence is never overwritten. Display layers follow the existing WebP workflow.
const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const evidence = path.join(root, 'assets/projects/evidence');
const target = path.join(evidence, 'native');
fs.mkdirSync(target, { recursive: true });

async function prepare() {
  const states = ['input', 'generalized'];
  const collections = states.map(state => JSON.parse(fs.readFileSync(path.join(__dirname, `data/nl2map-1069-${state}.geojson`))));
  const points = collections.flatMap(c => c.features.flatMap(f => f.geometry.coordinates.flat()));
  const minX = Math.min(...points.map(p => p[0]));
  const minY = Math.min(...points.map(p => p[1]));
  const maxX = Math.max(...points.map(p => p[0]));
  const maxY = Math.max(...points.map(p => p[1]));
  const width = maxX - minX;
  const height = maxY - minY;
  // Translation and Y-axis inversion only; no simplification. 0.001m precision.
  const maps = Object.fromEntries(collections.map((collection, i) => {
    assert.equal(collection.features.length, 441);
    return [states[i], collection.features.map(feature => {
      assert.equal(feature.geometry.type, 'Polygon');
      return feature.geometry.coordinates.map(ring => ring.map(([x,y], index) => `${index ? 'L' : 'M'}${(x-minX).toFixed(3)},${(maxY-y).toFixed(3)}`).join('')+'Z').join('');
    })];
  }));
  const geometry = { width, height, minX, minY, maxX, maxY, crs: 'EPSG:25832', maps };
  fs.writeFileSync(path.join(root, 'src/components/project-visuals/buildingGeometry.json'), JSON.stringify(geometry));

  const legendColors = {};
  for (const [name, ext, x, top, bottom] of [
    ['dtm','png',35,94,143], ['ndvi','webp',46,125,174],
    ['confidence','webp',47,99,163], ['susceptibility','png',40,76,119],
  ]) {
    const {data,info}=await sharp(path.join(evidence,`landslide-${name}.${ext}`)).removeAlpha().raw().toBuffer({resolveWithObject:true});
    legendColors[name]=Array.from({length:13},(_,i)=>{
      const y=Math.round(bottom-(bottom-top)*i/12);
      const offset=(y*info.width+x)*info.channels;
      return '#'+data.subarray(offset,offset+3).toString('hex');
    });
  }
  for(const [name, x, rows] of [['slope',47,[98,138,178,217,255]],['reclassified',42,[90,127,164,199]]]) {
    const {data,info}=await sharp(path.join(evidence,`landslide-${name}.webp`)).removeAlpha().raw().toBuffer({resolveWithObject:true});
    legendColors[name]=rows.map(y=>{const offset=(y*info.width+x)*info.channels;return '#'+data.subarray(offset,offset+3).toString('hex');});
  }
  fs.writeFileSync(path.join(root,'src/components/project-visuals/legendColors.json'),JSON.stringify(legendColors));

  const layers = [
    ['dtm', 'png', 244, 224], ['ndvi', 'webp', 256, 216],
    ['slope', 'webp', 324, 328], ['confidence', 'webp', 304, 240],
    ['reclassified', 'webp', 344, 280], ['susceptibility', 'png', 304, 178],
  ];
  for (const [name, ext, legendWidth, legendHeight] of layers) {
    const source = path.join(evidence, `landslide-${name}.${ext}`);
    const {data, info} = await sharp(source).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const original = Buffer.from(data);
    for (let y=0; y<legendHeight; y++) {
      for (let x=0; x<(name==='reclassified'?448:legendWidth); x++) {
        const offset=(y*info.width+x)*4;
        // The reclassified legend adjoins colored cells. Remove only neutral
        // legend paper/text outside the safe rectangle; keep colored cells.
        const rgb=[data[offset],data[offset+1],data[offset+2]];
        if (x<legendWidth || Math.max(...rgb)-Math.min(...rgb)<45) data[offset+3]=0;
      }
    }
    const full=path.join(target,`landslide-${name}.webp`);
    // Prove the mask changes alpha only. Encoding follows this check and is
    // ordinary quality-focused WebP compression, as with the existing assets.
    for(let i=0;i<data.length;i+=4) {
      assert.deepEqual(data.subarray(i,i+3), original.subarray(i,i+3));
    }
    await sharp(data,{raw:info}).webp({quality:90,alphaQuality:100}).toFile(full);
    for(const size of [640,800]) await sharp(full).resize(size).webp({quality:90,alphaQuality:100}).toFile(path.join(target,`landslide-${name}-${size}.webp`));
    console.log(`${name}: source RGB unchanged before WebP encoding, ${info.width}×${info.height}`);
  }
  const crop={left:296,top:106,width:804,height:340};
  await sharp(path.join(evidence,'se4g-dashboard.webp')).extract(crop).webp({quality:90}).toFile(path.join(target,'se4g-map.webp'));
  await sharp(path.join(target,'se4g-map.webp')).resize(640).webp({quality:90}).toFile(path.join(target,'se4g-map-640.webp'));
  console.log('NL2MAP: 441 features per state; SE4G: source map crop only');
}
prepare().catch(error=>{console.error(error);process.exitCode=1});
