//________________________________BASICS: READing BC_________________________________-
//Here u have all the docs relationated with web 3: https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html# 
//I will define the steps by steps, ofc just for important things, and let it to a point where I can search for information
//in the doc and paste the command.

//1. Ve a cmd y pon node tras instalar web3.    Puedes comprobar q lo tienes instalado con `` node -v´´ 
//2. Antes de messing around with web 3, vamos a requerirla con el comando " var Web3 = require('web3') "
//3. Ahora tipea " Web3 " para ver q tienes, nos dirá la versión, utils...
//4. Ahora conectemos web3 to the BC para ello ves a https://infura.io/docs/gettingStarted/chooseaNetwork y copiapega la API key(mainnet)
// var url = 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID' . Aunq tmb puedes copia y pega el localhost de ganashe
//5. Ahora podemos q instanciar un objeto de web3 with " var web3 = new Web3(url) " . Nota como hemos asociado la variable con el proveedor, ahora podemos hacer consultas(juguetear con la libreria)
//6. Simplemente definimos una variable y dirección si queremos guardarla para asi leerla " var address = 'direcc'
//7. ej simple web3.eth.getBalance(address, (err, bal) => { balannce = bal })   
//_________________________________INTERACTS__________________________________________
//1.Now if u wanna interct u build an app.js for example put your code en in cmd(node environment) u run " node app ". 
//

