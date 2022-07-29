const myHeaders = new Headers();
myHeaders.append("Cookie", "f5avraaaaaaaaaaaaaaaa_session_=HMEOGOMCABAGNNLABDIAINOJHCFNCHBJGFGIOPGFLFJNBNPFPJBGGPNIOGFELDJEIJEDEEFEFEJBOABKGMJAANFHKNKEDLFHLJAJIGOEMIBNFAFIPMIGMFOLLEAGIKDK");
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token=EE1DF97841A145DA86320FFFB39FA99C", requestOptions)
    .then(response => response.json())
    .then(data => printData(data))
    .catch(error => console.log('error', error));

function printData(data) {

    const print = document.createElement('div');
    print.textContent = 'Esto es INDICE Bolsa de Santiago'
    document.querySelector('body').appendChild(print)

    const { listaResult } = data;

    listaResult.forEach(index => {
        console.log(index)

        const ulBlock = document.createElement('ul');
        const listItemAction = document.createElement('li');
        const listItemCod = document.createElement('li');
        const listItemIndice = document.createElement('li');
        const listItemNemo = document.createElement('li');
        const listItemPrice = document.createElement('li');
        const listItemStamp = document.createElement('li');
        const listItemTrade = document.createElement('li');
        const listItemVar = document.createElement('li');
        const listItemVol = document.createElement('li');

        const {
            action,
            codTicker,
            indice,
            nemo,
            price,
            timeStamp,
            timesTrade,
            variation,
            volume,
        } = index;

        listItemAction.textContent = action;
        listItemCod.textContent = codTicker;
        listItemIndice.textContent = indice;
        listItemNemo.textContent = nemo;
        listItemPrice.textContent = price;
        listItemStamp.textContent = timeStamp;
        listItemTrade.textContent = timesTrade;
        listItemVar.textContent = variation;
        listItemVol.textContent = volume;

        ulBlock.appendChild(listItemAction);
        ulBlock.appendChild(listItemCod);
        ulBlock.appendChild(listItemIndice);
        ulBlock.appendChild(listItemNemo);
        ulBlock.appendChild(listItemPrice);
        ulBlock.appendChild(listItemStamp);
        ulBlock.appendChild(listItemTrade);
        ulBlock.appendChild(listItemVar);
        ulBlock.appendChild(listItemVol);

        print.appendChild(ulBlock)
    });

}