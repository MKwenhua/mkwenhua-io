import OrangutanPageContent from './orangutan'


const OrangutanPage = (req, res) => {
  res.send(OrangutanPageContent);
  res.end();
}

export {
  OrangutanPage
}
