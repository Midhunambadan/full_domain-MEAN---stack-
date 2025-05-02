const sampleUrl = 'https://www.example.com:8080/path/to/resource?id=123&name=John#section';
const url=require('url')

const parsedURL=url.parse(sampleUrl)

console.log(parsedURL);
