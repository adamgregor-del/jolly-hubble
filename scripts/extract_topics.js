const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
const lines = content.split('\n');
const scriptContent = lines.filter(line => !line.includes('window.OCTOBER_ARTICLES_DB =') && !line.includes('document.addEventListener')).join('\n');
try {
  const getTopics = new Function(`
    ${scriptContent}
    return [
      ...(typeof RAW_OCTOBER_DATA !== 'undefined' ? RAW_OCTOBER_DATA : []),
      ...(typeof RAW_NOVEMBER_DATA !== 'undefined' ? RAW_NOVEMBER_DATA : []),
      ...(typeof RAW_DECEMBER_DATA !== 'undefined' ? RAW_DECEMBER_DATA : []),
      ...(typeof RAW_JANUARY_DATA !== 'undefined' ? RAW_JANUARY_DATA : []),
      ...(typeof RAW_FEBRUARY_DATA !== 'undefined' ? RAW_FEBRUARY_DATA : []),
      ...(typeof RAW_MARCH_DATA !== 'undefined' ? RAW_MARCH_DATA : []),
      ...(typeof RAW_APRIL_DATA !== 'undefined' ? RAW_APRIL_DATA : [])
    ];
  `);
  const topics = getTopics();
  fs.writeFileSync(path.join(__dirname, '../data/topics.json'), JSON.stringify(topics, null, 2));
  console.log('Successfully extracted ' + topics.length + ' topics.');
} catch (e) {
  console.error(e);
}
