/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = function(e){
        //console.log('Window called==>')
        window.addEventListener('load',postWindowLoad);
  }

  function postWindowLoad(e){
        let scriptTag = document.createElement('script');
        scriptTag.onload = postFeatherLoad;
        scriptTag.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
        document.body.appendChild(scriptTag);
  }

  function postFeatherLoad(){
        if(window.feather){
            window.feather.replace();
        }
  }