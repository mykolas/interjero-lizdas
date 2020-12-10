const fetch = require('node-fetch');

async function fetchGraphQL(text, variables) {
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch("https://pzhvpnrz.api.sanity.io/v1/graphql/production/default/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: text,
            variables
        })
    })

    // Get the response as JSON
    return await response.json()
}


const query = `
    {
        allCategory {
            _id
            name_lt
            name_en
        }
    
        allProject {
            category {
                _id
            }
            name_lt
            name_en
            images {
                asset {
                    url
                    metadata {
                        lqip
                    }
                }
                caption_en
                caption_lt
            }
        }
    }
`


exports.fetchData = () => fetchGraphQL(query)
