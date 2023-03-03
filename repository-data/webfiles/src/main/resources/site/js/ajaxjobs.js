function buildQuery(options) {
    console.log(`Options: ${JSON.stringify(options)}`)
    let queryString = ""
    queryString = addQueryArgument(queryString, options, 'location')
    queryString = addQueryArgument(queryString, options, 'distance')
    queryString = addQueryArgument(queryString, options, 'keyword')
    queryString = addQueryArgument(queryString, options, 'simple_view', yesNoTransformer)
    return options.url + (queryString.length > 0 ? "?" + queryString : "")
}

function loadVacancies(query) {
    const result_area = document.getElementById("nhsuk-job-results")
    result_area.replaceChildren()

    const div = document.createElement('div')

    div.innerText = 'Please wait while we search for jobs matching those criteria ...'
    result_area.appendChild(div)

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        const result_area = document.getElementById("nhsuk-job-results")
        result_area.replaceChildren()

        const data = JSON.parse(this.response)

        if (typeof data.error !== 'undefined') {
            const results_div = document.createElement('div')
            results_div.innerText = "No data was found for that search: " + data.error.message

            result_area.appendChild(results_div)
        } else {
            console.log(data)
            formatVacancies(result_area, data)
            location.hash = "#results"
        }
    }

    const url = buildQuery( {
        url: "http://localhost:3008/jobs",
        ...query
    })
    console.log(url)

    xhttp.open("GET", url);
    xhttp.send();
}

function formatVacancies(result_area, vacancies) {
    if (typeof vacancies === 'undefined' || vacancies.nhs_search.status.number_of_jobs_found._text === "0") {
        const results_div = document.createElement('div')
        results_div.innerText = "No results found for that search, sorry"
        results_div.id = 'results'

        result_area.appendChild(results_div)
    } else {
        console.log(`Vacancy details: ${JSON.stringify(vacancies)}`)
        let limit = (vacancies.nhs_search.status.number_of_jobs_found._text > 30 ? 30 : vacancies.nhs_search.status.number_of_jobs_found._text)

        const results_div = document.createElement('div')
        results_div.innerText = `Found ${vacancies.nhs_search.status.number_of_jobs_found._text} vacancies that match (Showing first ${limit} items in this list)`
        results_div.id = 'results'

        result_area.appendChild(results_div)

        const details_to_process = limit > 1 ? vacancies.nhs_search.vacancy_details.slice(0, limit) : [ vacancies.nhs_search.vacancy_details ]
        const children = details_to_process.map((vacancy, index) => {

            const title_element = createElement(vacancy, 'job_title', 'h3', 'nhsuk-card__heading')
            const employer_element = createElement(vacancy, 'job_employer', 'h4')
            const desc_element = createElement(vacancy, 'job_description', 'div')
            const url_element = createHrefElement(vacancy, 'job_url')
            const postdate_element = createElement(vacancy, 'job_postdate', 'div')
            postdate_element.innerText = "Date posted: " + postdate_element.innerText

            const div = document.createElement('div')
            div.className = 'nhsuk-card nhsuk-card__content'
            div.appendChild(title_element)
            div.appendChild(employer_element)
            div.appendChild(desc_element)
            div.appendChild(document.createElement('div'))
            div.appendChild(url_element)
            div.appendChild(postdate_element)

            result_area.appendChild(div)
        })
    }
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

function createElement(vacancy, key, tag_type, class_name) {
    const item = vacancy[key]._text
    const element = document.createElement(tag_type)
    if(typeof class_name !== 'undefined') {
        element.className = class_name
    }
    element.innerText = item
    return element
}

function createHrefElement(vacancy, key) {
    const item = vacancy[key]._text
    const element = document.createElement('a')
    element.innerText = item
    element.href = item
    return element
}

function mySubmitFunction(event) {
    const location = document.getElementById("search-field__location").value
    const distance = document.getElementById("search-field__distance").value
    const keyword = document.getElementById("search-field__keyword").value
    const simple_view = document.getElementById("search-field__simple_view").checked
    loadVacancies( {location: location, distance: distance, keyword:  encodeURIComponent(keyword), simple_view: simple_view })
    return event.preventDefault()
}
