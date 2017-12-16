const download = require('image-downloader')
const scrapeIt = require("scrape-it")
let limit = process.argv.slice(2)


let i = 0

while (i < limit) {
    i++;
    scrapeIt("https://noosfeer.com/browse", {
    img: {
            selector: ".img_cover"
        , attr: "src"
        }
    }).then(page => {
        let image = 'http:' + page.img

        let options = {
            url: image,
            dest: './img/'                  
        }

        download.image(options)
            .then(({ filename, image }) => {
                console.log('File saved to', filename)
            }).catch((err) => {
                throw err
            })
    })
}




