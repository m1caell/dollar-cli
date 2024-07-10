import https from 'node:https'

const WEBSITE = 'https://dolarhoje.com/'
const PARTIAL_INPUT_TO_FIND_REGX = /<input type="text" id="nacional"/g
const INITIAL_SUBSTRING_COMPENSATION = 40
const FINAL_SUBSTRING_COMPENSATION = 44

async function accessWebsite() {
    try {
        const data = await new Promise((resolve, reject) => {
            https.get(WEBSITE, response => {
                let data = ''

                response.on('data', (chunk) => {
                    data += chunk
                })

                response.on('end', () => {
                    resolve(data.toString())
                })
            }).on('error', error => {
                reject(error)
            })
        })


        const value = getDollarValueFromWebsiteContent(data)

        printMessage(value)
    } catch (err) {
        throw new Error(`Something went wrong: ${err}`)
    }
}

function getDollarValueFromWebsiteContent(websiteContent) {
    const position = websiteContent.search(PARTIAL_INPUT_TO_FIND_REGX)

    return websiteContent.substring(
        position + INITIAL_SUBSTRING_COMPENSATION,
        position + FINAL_SUBSTRING_COMPENSATION
    )
}

function printMessage(value) {
    console.log(`To get $ 1,00 today we need R$ ${value}`)
}

accessWebsite()

export { accessWebsite }