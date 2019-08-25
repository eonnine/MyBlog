function render () {
  if( typeof window !== 'undefined' && typeof document !== 'undefined' ){
    document.getElementById('root').innerHTML = "Client Rendering";
  } else {
    return "Server Rendering";
  }
}