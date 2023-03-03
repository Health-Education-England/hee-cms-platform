import fetch from 'node-fetch'
import * as xmljs from "xml-js"

export default async (req, res) => {
    res.set("Content-Type", "application/json")

    try {
        console.log(`JSON: ${JSON.stringify(req.query)}`)
        const query = buildQuery( { url: req.jobs_url , ...req.query} )
        console.log(`JSON: ${JSON.stringify(req.query)} query: ${query}`)
        const response = await fetch(query) // `${req.jobs_url}?location=${req.query.location}`)
        
        const data = await response.text()

        
        if (data.includes("<h3>Location Unknown</h3>")) {
            res.status(404).send( {
                "error" : {
                    "message": "Location not found",
                    "value": `${req.params.location}`
                }
            })
        } else {
            const interimJson = xmljs.xml2json(data, {compact: true, spaces: 4})
            res.send(interimJson)
        }
    } catch (error) {
        console.log(`Error encountered during call: ${error}`)
        res.status(500)
    }
}

function buildQuery(options) {
    console.log(`Options: ${JSON.stringify(options)}`)
    let queryString = ""
    queryString = addQueryArgument(queryString, options, 'location')
    queryString = addQueryArgument(queryString, options, 'distance')
    queryString = addQueryArgument(queryString, options, 'keyword')
    queryString = addQueryArgument(queryString, options, 'simple_view', yesNoTransformer)
    return options.url + (queryString.length > 0 ? "?" + queryString : "")
}

function addQueryArgument (queryString, options, option_name, transformer = simpleTransformer) {
    if (typeof options[option_name] !== 'undefined' && options[option_name] !== '') {
        if (options[option_name] !== false) {
            queryString += queryString.length > 0 ? "&" : ""
            queryString += (option_name + "=")
            queryString += transformer(options[option_name])
        }
    }
    return queryString
}

function simpleTransformer(value) {
    return value
}

function yesNoTransformer(value) {
    if (typeof value === 'undefined' || value === false) {
        return 'N'
    }

    return 'Y'
}
