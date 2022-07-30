// const myHeaders = new Headers();
// myHeaders.append("Cookie", "f5avraaaaaaaaaaaaaaaa_session_=HMEOGOMCABAGNNLABDIAINOJHCFNCHBJGFGIOPGFLFJNBNPFPJBGGPNIOGFELDJEIJEDEEFEFEJBOABKGMJAANFHKNKEDLFHLJAJIGOEMIBNFAFIPMIGMFOLLEAGIKDK");
// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     redirect: 'follow'
// };
// fetch("https://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token=EE1DF97841A145DA86320FFFB39FA99C", requestOptions)
//     .then(response => response.json())
//     .then(data => printData(data))
//     .catch(error => console.log('error', error));

const myHeaders = new Headers();
myHeaders.append('accept', 'application/json');
myHeaders.append('x-apikey', 'kJC28duKU3puWCv5Zb3NJEKrcCYVzAY5');
myHeaders.append('Referer', 'https://www.inteligenciaf.com');

const header = myHeaders;

const url = 'https://apiprogram.bci.cl/sandbox/v1/api-economic-indicators/list/?query-date=YYYY-MM-DD';

fetch(url, header)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))