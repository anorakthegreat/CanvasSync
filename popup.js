// adding a new bookmark row to the popup
document.addEventListener("DOMContentLoaded", function(){


    console.log("LLLOOAODD")

    

    chrome.storage.sync.get(['APIKEY'], function(result) {

       

        var data = result.APIKEY;
        // window.href = "apiStore.html"

        chrome.storage.sync.get(['DOMAIN'], function(domainRes) {
            var data = result.APIKEY;
            var domain = domainRes.DOMAIN;

            // window.href = "apiStore.html"

            let unauthorized = document.getElementById("unauthorized")
            unauthorized.style.display = "none"

            let loading = document.getElementById("loading")
            loading.style.display = "none"
            animateLoadingText(loading)

    
            if(data == undefined || data == "" || domain == undefined || domain == ""){

                
                let apiInput = document.getElementById("apiInput")
                apiInput.style.display = "block"

                let domainInput = document.getElementById("domainInput")
                domainInput.style.display = "block"

                if(data != undefined){
                    apiInput.value = data
                }

                if(domain != undefined){
                    domainInput.value = domain

                }
    
                let getGrades = document.getElementById("test")
                getGrades.style.display = "none"
    
                let store = document.getElementById("store")
                store.style.display = "block"

                // let buttonContainer = document.getElementById("button-container2")
                // buttonContainer.style.display = "block"
    
                let clearAPIKey = document.getElementById("clearAPI")
                clearAPIKey.style.display = "none"
    
                let dataTable =  document.getElementById("myTable")
                dataTable.style.display = "none"

                let returnButton = document.getElementById("returnBack")
                returnButton.style.display = "block"
    
                let inputContainer = document.getElementById("inputContainer")
                inputContainer.style.display = "inline-flexbox"
    
                let apiInputContainer = document.getElementById("apiInputContainer")
                apiInputContainer.style.display = "inline-flexbox"
                
                let dangerInput = document.getElementById("dangerInput")
                dangerInput.style.display = "inline-flexbox"

                let dangerZoneContainer = document.getElementById("dangerZoneContainer")
                dangerZoneContainer.style.display = "inline-flexbox"

                let gpa = document.getElementById("gpa")
                gpa.style.display = "none"

                let please = document.getElementById("Please")
                please.style.display = "block"
                // let inputContainer = document.getElementById("inputContainer")
                // inputContainer.style.display = "block"
    
                // let dataTable =  document.getElementById("myTable")
                // dataTable.style.display = "none"
    
            } else {
                // let apiInput = document.getElementById("apiInput")
                // apiInput.style.display = "none"

                let please = document.getElementById("Please")
                please.style.display = "none"
    
                let getGrades = document.getElementById("test")
                getGrades.style.display = "block"
    
                let store = document.getElementById("store")
                store.style.display = "none"
    
                // let inputContainer = document.getElementById("inputContainer")
                // inputContainer.style.display = "none"
    
                // let apiInputContainer = document.getElementById("apiInputContainer")
                // apiInputContainer.style.display = "none"
    
                let dataTable =  document.getElementById("myTable")
                dataTable.style.display = "none"

                let inputContainer = document.getElementById("inputContainer")
                inputContainer.style.display = "none"
    
                let apiInputContainer = document.getElementById("apiInputContainer")
                apiInputContainer.style.display = "none"

                let domainInput = document.getElementById("domainInput")
                domainInput.style.display = "none"

                let dangerZoneContainer = document.getElementById("dangerZoneContainer")
                dangerZoneContainer.style.display = "none"

                let apiInput = document.getElementById("apiInput")
                apiInput.style.display = "none"

                let dangerInput = document.getElementById("dangerInput")
                dangerInput.style.display = "none"

                let returnButton = document.getElementById("returnBack")
                returnButton.style.display = "none"

                // let buttonContainer = document.getElementById("button-container2")
                // buttonContainer.style.display = "none"

                let gpa = document.getElementById("gpa")
                gpa.style.display = "block"

                clearTable()
                onStartup()
                
    
            }
    
            console.log(data)
          });


        
        console.log(data)
      });

    store.addEventListener("click", function(){
        let apiInput = document.getElementById("apiInput")
        let domainInput = document.getElementById("domainInput")
        let dangerInput = document.getElementById("dangerInput")

        let unauthorized = document.getElementById("unauthorized")
        unauthorized.style.display = "none"

        console.log(apiInput.value)
        console.log(domainInput.value)
        chrome.storage.sync.set({ 'APIKEY': apiInput.value });
        chrome.storage.sync.set({ 'DOMAIN': domainInput.value });

        chrome.storage.sync.set({ 'DANGER': dangerInput.value });

        // let apiInput = document.getElementById("apiInput")
        // apiInput.style.display = "none"

        let getGrades = document.getElementById("test")
        getGrades.style.display = "block"

        let please = document.getElementById("Please")
        please.style.display = "none"


        // let gpa = document.getElementById("gp")

        let store = document.getElementById("store")
        store.style.display = "none"

        let returnButton = document.getElementById("returnBack")
        returnButton.style.display = "none"

        let clearAPIKey = document.getElementById("clearAPI")
        clearAPIKey.style.display = "block"

        let gpa = document.getElementById("gpa")
        gpa.style.display = "none"

        let inputContainer = document.getElementById("inputContainer")
        inputContainer.style.display = "none"

        let apiInputContainer = document.getElementById("apiInputContainer")
        apiInputContainer.style.display = "none"

        let dangerZoneContainer = document.getElementById("dangerZoneContainer")
        dangerZoneContainer.style.display = "none"

        // let apiInput = document.getElementById("apiInput")
        apiInput.style.display = "none"

        // let domainInput = document.getElementById("domainInput")
                domainInput.style.display = "block"

        // let dangerInput = document.getElementById("dangerInput")
                dangerInput.style.display = "none"
        // let inputContainer = document.getElementById("inputContainer")
        // inputContainer.style.display = "none"
        // inputContainer.style.marginTop = "0px"



    })

    

    test.addEventListener("click", function(){

        let unauthorized = document.getElementById("unauthorized")
        unauthorized.style.display = "none"

        // let dataTable =  document.getElementById("myTable")
        // dataTable.style.display = "block"
        let dataTable =  document.getElementById("myTable")
        dataTable.style.display = "table"

        let loading = document.getElementById("loading")
        loading.style.display = "block"

        // let gpa = document.getElementById("gpa")
        // gpa.style.display = "block"
        fetchData()

        // addRow()
    })

    returnBack.addEventListener("click", function(){
        // let dataTable =  document.getElementById("myTable")
        // dataTable.style.display = "block"
        
        // let gpa = document.getElementById("gpa")
        // gpa.style.display = "none"
        // addRow()

        let unauthorized = document.getElementById("unauthorized")
        unauthorized.style.display = "none"

        let please = document.getElementById("Please")
        please.style.display = "none"

        let getGrades = document.getElementById("test")

        getGrades.style.display = "block"

        let store = document.getElementById("store")
        store.style.display = "none"

        let returnButton = document.getElementById("returnBack")
        returnButton.style.display = "none"

        let clearAPIKey = document.getElementById("clearAPI")
        clearAPIKey.style.display = "block"

       

        let inputContainer = document.getElementById("inputContainer")
        inputContainer.style.display = "none"

        let apiInputContainer = document.getElementById("apiInputContainer")
        apiInputContainer.style.display = "none"

        let dangerZoneContainer = document.getElementById("dangerZoneContainer")
        dangerZoneContainer.style.display = "none"

        let gpa = document.getElementById("gpa")
        gpa.style.display = "none"

        // let apiInput = document.getElementById("apiInput")
        apiInput.style.display = "none"

        // let domainInput = document.getElementById("domainInput")
                domainInput.style.display = "block"

        // let dangerInput = document.getElementById("dangerInput")
                dangerInput.style.display = "none"
        // let inputContainer = document.getElementById("inputContainer")
        // inputContainer.style.display = "none"
        // inputContainer.style.marginTop = "0px"
    })


    clearAPI.addEventListener("click", function(){
        // chrome.storage.sync.set({ 'APIKEY': "" });

        let unauthorized = document.getElementById("unauthorized")
        unauthorized.style.display = "none"

        let gpa = document.getElementById("gpa")
        gpa.style.display = "none"

        let please = document.getElementById("Please")
        please.style.display = "block"

        let apiInput = document.getElementById("apiInput")
        // apiInput.style.display = "block"

        let getGrades = document.getElementById("test")
        getGrades.style.display = "none"

        let store = document.getElementById("store")
        store.style.display = "block"

        let clearAPIKey = document.getElementById("clearAPI")
        clearAPIKey.style.display = "none"

        let dataTable =  document.getElementById("myTable")
        dataTable.style.display = "none"

        // let inputContainer = document.getElementById("inputContainer")
        // inputContainer.style.display = "block"

        apiInput.style.display = "block"
        let domainInput = document.getElementById("domainInput")
        domainInput.style.display = "block"

        let inputContainer = document.getElementById("inputContainer")
        inputContainer.style.display = "flex"

        let apiInputContainer = document.getElementById("apiInputContainer")
        apiInputContainer.style.display = "flex"

        let dangerZoneContainer = document.getElementById("dangerZoneContainer")
                dangerZoneContainer.style.display = "flex"

        let dangerInput = document.getElementById("dangerInput")
                dangerInput.style.display = "flex"

        let returnButton = document.getElementById("returnBack")
        returnButton.style.display = "block"
        // let apiInputContainer = document.getElementById("apiInputContainer")
        // apiInputContainer.style.display = "inline-flexbox"

        // inputContainer.style.marginTop = "0px"

        // let gradeContainer = document.getElementById("GradeContainer")
        // clearElement(gradeContainer)

        // let gpa = document.getElementById("gpa")
        gpa.style.display = "none"

        chrome.storage.sync.get(["APIKEY"], function(api) {
            console.log('Retrieved data from Chrome storage:');
            // console.log(result.key1); // Access the value of key1

            chrome.storage.sync.get(["DOMAIN"], function(domain) {

                chrome.storage.sync.get(["DANGER"], function(danger) {

                    // console.log('Retrieved data from Chrome storage:');
                    // console.log(result.key1); // Access the value of key1
                    console.log(domain.DOMAIN)
                    console.log(api.APIKEY)

                    domainInput.value = domain.DOMAIN
                    apiInput.value = api.APIKEY
                    dangerInput.value = danger.DANGER
                })

            })
        });

    })

    // saver.addEventListener("click", function(){
    //     saveData()
    // })


    document.addEventListener('visibilitychange', save, false);

    function save(){
        saveData()
    }





})