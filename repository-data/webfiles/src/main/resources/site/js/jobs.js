'use strict';

const e = React.createElement;

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    componentDidMount () {
        fetch('http://localhost:3001/location/BN2')
            .then(resp => resp.json())
            .then(data => this.setState({data}))
        ;
    }

    render() {
        console.log(this.state.data)

        let words

        // if (this.state.liked) {
        //     return 'You liked this.';
        // }

        // if (this.state.data && this.state.data.nhs_search.status.number_of_jobs_found._text) {
        //     return this.state.data.nhs_search.status.number_of_jobs_found._text
        // }

        //TODO - create template in FTL and show when results come back
        if(this.state.data && this.state.data.nhs_search) {
            const domContainer = document.querySelector('.nhsuk-wait-message');
            domContainer.replaceChildren()

            const results = this.state.data.nhs_search
            const vacancies = this.state.data.nhs_search.vacancy_details

            const children = vacancies.map((vacancy, index) => {
                    const url = this.divit(e('a', {key: `a_$index}`, href: `${vacancy.job_url._text}`}, vacancy.job_url._text), index, 'url')
                    const desc = this.divit(e('p', {key: `p_$index}`}, vacancy.job_description._text), index, 'desc')

                    return e('div', {className: 'nhsuk-card__content', id: vacancy.id._text, key: index }, [ url, desc ])
                }
            )

            return e('div', null, children)
        }
    }

    divit(child, index, what) {
        return e('div', { key: `${what}_${index}` }, child)
    }
}

const domContainer = document.querySelector('.nhsuk-page-content');
domContainer.replaceChildren()

const root = ReactDOM.createRoot(domContainer);
root.render(e(SearchResults));