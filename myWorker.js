self.addEventListener('message', messageReceived)

function messageReceived(message){
    console.log('Messaggio ricevuto dal worker: ', message.data);
    
    postMessage('eccomi, sono pronto a fare il mio dovere')
}