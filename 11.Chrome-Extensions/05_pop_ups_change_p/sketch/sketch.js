function setup(){
  noCanvas();
  let userinput = seelct('#userinput');
  userinput.input(changeText);

  function newText(){

    chrome.tabs.getCurrent(gotTab);

    function gotTab(tab){
      // https://developer.chrome.com/extensions/tabs
      //send a message to the content script
      let message = userinput.value();
       let msg ={
          txt:"hello"
        }
        chrome.tabs.sendMessage(tab.id,msg);
    }
    




  }



}