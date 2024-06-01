export default async function introspection() {
    fetch('https://geodb-cities-graphql.p.rapidapi.com/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `{
                countries {
                    name
                    capital
                    currency
                }
            }`
        })
    })
        .then(res => res.json())
        .then(res => console.log(res.data));
    return (<div></div>);
}