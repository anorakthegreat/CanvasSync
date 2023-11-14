let total = []
let gpa = 0;
let checc = []

function animateLoadingText(element) {
  let loadingState = 0;
  let loadingHeading = element

  let text = element.textContent

  console.log("TEEEAM DATA" + text)
  setInterval(() => {
      switch (loadingState) {
          case 0:
              loadingHeading.textContent = text;
              loadingState = 1;
              break;
          case 1:
              loadingHeading.textContent = text + '.';
              loadingState = 2;
              break;
          case 2:
              loadingHeading.textContent = text + '..';
              loadingState = 3;
              break;
          case 3:
              loadingHeading.textContent = text + '...';
              loadingState = 0;
              break;
          default:
              break;
      }
  }, 250); // Adjust the interval as needed
}

const request = async (url) => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return data
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

function addRow(num, course, percent, grade, danger, link, domain, token, checked) {
  console.log("WE ARE NOW IN ADD ROW")
  console.log(danger)

  console.log("COURSE: " + course)
  console.log("PERCENT: " + percent)
  console.log("GRADE: " + grade)

  // if(percent == null){
  //   percent = "n/a"
  // }

  var table = document.getElementById("myTable");
  var row = table.insertRow(table.rows.length);
  // row.style.backgroundColor = "red";

  // row.className = "hover-item"; // Add class to the newly added rows

  // row.classList.add('blue-row');

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  // cell1.innerHTML = "New";

  // console.log("PEEEEEEEEEERCENTNTNTNT" + grade)
  
  

  cell1.innerHTML = "<strong>" + num + "</strong>"; // Apply bold style to the variable content
  cell2.innerHTML = '<a href="' + link + '">' + course + '</a>';
  cell3.innerHTML = percent;
  cell4.innerHTML = grade;

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.checked = checked

  // for(let i = 0; i < total.length; i++){
  //   // if(total[i][0] == course){
  //     if(checked){
  //       console.log("AGHGHGHGHGHGHGHHGHHGHHGHGHGHG")
  //       // total[i][1] =  total[i][1] + 1 
  //     }
  //   // }
  // }

  if(checked){
    console.log("AGHGHGHGHGHGHGHHGHHGHHGHGHGHG")
    console.log("TOTAL " + total)
    // total[i][1] =  total[i][1] + 1 
  }
  
  checkbox.onchange = function() {
    if (checkbox.checked) {
      console.log("AHH");
      console.log(course)


      for(let i = 0; i < total.length; i++){
        if(total[i][0] == course){

          
          total[i][1] =  total[i][1] + 1 

          checc[i] = true
          console.log(checc)

        }

        console.log(total[i])

      }


      calculateGPA("no", token)


    } else {

      for(let i = 0; i < total.length; i++){
        if(total[i][0] == course){
          
          
          total[i][1] =  total[i][1] -1  

          checc[i] = false

          console.log(checc)
        }

        console.log("CHANNNNGEDDDDDDD" + total[i])



      }

      calculateGPA("no", token)

      console.log("NOO");
      // console.log(course)
    }
  };
  cell5.appendChild(checkbox);

  // cell5.innerHTML = '<input type="checkbox">';


  if(parseInt(percent) < parseInt(danger)){
    cell1.id = "pls"
    cell2.id = "pls"
    cell3.id = "pls"
    cell4.id = "pls"
  }

  console.log(percent)

  if(percent == undefined || percent == null || percent == "No Grade"){

  }else {
    if(percent >= 90){
      if(checked){
        total.push( [course, 5] )
      } else {
        total.push( [course, 4] )
      }
    } else if (percent < 90 && percent >= 80){
      if(checked){
        total.push( [course, 4] )
      } else {
        total.push( [course, 3] )
      }
    }else if (percent < 80 && percent >= 70){
      if(checked){
        total.push( [course, 3] )
      } else {
        total.push( [course, 2] )
      }
    } else if(percent < 70 && percent >= 60){
      if(checked){
        total.push( [course, 2] )
      } else {
        total.push( [course, 1] )
      }
    } else {
      total.push([course, 1])
    }
  }

 

  // row.classList.add("highlight");

  // row.classList.background-col or = "red"

  // row.style.color = "red"; // Set text color to white for better visibility
  // row.className = "table-hover";


}

function addRowOnStartup(num, course, percent, grade, danger, link, domain, token, checkedVal, length) {
  console.log(danger)
  var table = document.getElementById("myTable");
  var row = table.insertRow(table.rows.length);
  // row.style.backgroundColor = "red";

  // row.className = "hover-item"; // Add class to the newly added rows

  // row.classList.add('blue-row');

  // if(percent == null){
  //   percent = "n/a"
  // }


  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  // cell1.innerHTML = "New";

  // console.log("PEEEEEEEEEERCENTNTNTNT" + grade)
  
  

  cell1.innerHTML = "<strong>" + num + "</strong>"; // Apply bold style to the variable content
  cell2.innerHTML = '<a href="' + link + '">' + course + '</a>';
  cell3.innerHTML = percent;
  cell4.innerHTML = grade;

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.checked = checkedVal;
  checkbox.onchange = function() {
    if (checkbox.checked) {
      console.log("AHH");
      console.log(course)


      for(let i = 0; i < total.length; i++){
        if(total[i][0] == course){
          total[i][1] =  total[i][1] + 1 

          checc[i] = true
          console.log(checc)

        }

        console.log(total[i])

      }


      // calculateGPAOnStartup(domain, token, length)

      calculateGPA("no", token)


    } else {

      for(let i = 0; i < total.length; i++){

        console.log("PLELLELELESE " + total)
        if(total[i][0] == course){

          console.log("AHHHHHHHHHHHHHHHH" + total[i][1])

          total[i][1] =  total[i][1] -1  

          checc[i] = false

          console.log(checc)
        }

        console.log("CHHHHHHHHHHANNNNNNGE" + total[i])



      }

      // calculateGPAOnStartup(domain, token, length)
      calculateGPA("no", token)

      console.log("NOO");
      // console.log(course)
    }
  };
  cell5.appendChild(checkbox);

  // cell5.innerHTML = '<input type="checkbox">';


  if( parseInt(percent) < parseInt(danger)){
    console.log("WE ARE IN THE DANGER AHAHHAHHAHA")

    console.log(course)
    console.log("PERCENT: " + percent)
    console.log("DANGER: " + danger)

    let u = parseInt(percent) < parseInt(percent) 
    console.log("PERCENT < DANGER: " + u)

    console.log(100 < 90)
    cell1.id = "pls"
    cell2.id = "pls"
    cell3.id = "pls"
    cell4.id = "pls"
  }

  console.log(percent)

  if(percent == undefined || percent == null || percent == "No Grade"){

  }else {
    if(percent >= 90){
      total.push( [course, 4] )
    } else if (percent < 90 && percent >= 80){
      total.push([course, 3])
    }else if (percent < 80 && percent >= 70){
      total.push([course, 3])
    } else if(percent < 70 && percent >= 60){
      total.push([course, 2])
    } else {
      total.push([course, 1])
    }
  }

 

  // row.classList.add("highlight");

  // row.classList.background-col or = "red"

  // row.style.color = "red"; // Set text color to white for better visibility
  // row.className = "table-hover";


}

function updateGPA() {
  document.getElementById('gpa').innerHTML = "Grade Point Average (GPA): " + Math.round(gpa * 100) / 100;
}

// async function saveData(){

//   let data = [];
//   const table = document.querySelector('.table');
//   const rows = table.querySelectorAll('tr');
//   const input = table.querySelectorAll('input[type="checkbox"]');

//   console.log(checc)

//   let i = 0;

//   // console.log(checc)

//   rows.forEach((row, index) => {

//     console.log(i)
//       if (index !== 0) { // Skip the header row
//           const rowData = {
//               num: row.cells[0].innerText,
//               class: row.cells[1].innerText,
//               percent: row.cells[2].innerText,
//               grade: row.cells[3].innerText,
//               // checked: row.cells[4].querySelector('input[type="checkbox"]').checked
//           };

//           // const checkbox = row.cells[3].querySelector('input[type="checkbox"]');
//           //       if (checkbox) {
//           //           rowData.checcked = "ahhh";
//           //       }

//           // console.log(row.cells)


//           if(checc[i] == undefined){
//             rowData.checked = false
//           } else if(checc[i] == false){
//             rowData.checked = false
//            } else if(checc[i] == true)[
//             rowData.checked = true
//           ]
//           data.push(rowData);

          

//       }
//       i++

      
//   });

//   console.log(data)


// }


function onStartup(){

  


  chrome.storage.sync.get(['APIKEY'], function(result) {
    chrome.storage.sync.get(['DOMAIN'], function(domainResult) {

      chrome.storage.sync.get(["DANGER"], function(dangerResult){



      let danger = dangerResult.DANGER
      
    
      var key = result.APIKEY;
      var domainData = domainResult.DOMAIN

      chrome.storage.sync.get('myTableData', function (result) {
        if (chrome.runtime.lastError) {
          console.error('Error retrieving data: ' + chrome.runtime.lastError);
        } else {
          var retrievedData = result.myTableData;
          // // Do something with the retrieved data
          // console.log('Retrieved data:', retrievedData);
          

          console.log("RETRIEVEd")
          console.log(retrievedData)
          let totalGPA = []
          
          for(let i = 1; i < retrievedData.length; i++){
            console.log(retrievedData[i])
            let percent = retrievedData[i][2]
            let weighted = retrievedData[i][5]
            let course = retrievedData[i][1]
            if(percent == undefined || percent == null || percent == "No Grade" || percent == ''){

            }else {
              if(percent >= 90){

                if(weighted){
                  totalGPA.push( [course, 5] )
                } else {
                  totalGPA.push( [course, 4] )
                }
              } else if (percent < 90 && percent >= 80){
                if(weighted){
                  totalGPA.push( [course, 4] )
                } else {
                  totalGPA.push( [course, 3] )
                }
              }else if (percent < 80 && percent >= 70){
                if(weighted){
                  totalGPA.push( [course, 3] )
                } else {
                  totalGPA.push( [course, 2] )
                }
              } else if(percent < 70 && percent >= 60){
                if(weighted){
                  totalGPA.push( [course, 2] )
                } else {
                  totalGPA.push( [course, 1] )
                }
              } else {
                totalGPA.push([course, 1])
              }
            }


            addRowOnStartup(retrievedData[i][0], retrievedData[i][1], retrievedData[i][2], retrievedData[i][3], danger, retrievedData[i][4], domainData, key, retrievedData[i][5], retrievedData.length)
          }

          

          
          calculateGPA(totalGPA, retrievedData.length)

          console.log("RETREIED")
          console.log(retrievedData)
        }
      });

    })

    });
    // var data = result.APIKEY;
    // console.log("TOOOOKEN" + data)
    // fetchWithProperToken(arr, domainData)
  });

  let table = document.getElementById("myTable")
  table.style.display = "table"
  
  
}

async function saveData(){
  var table = document.getElementById("myTable");
  var data = [];
  for (var i = 1; i < table.rows.length; i++) {
    var rowData = [];
    var row = table.rows[i];
    for (var j = 0; j < row.cells.length - 1; j++) {
      rowData.push(row.cells[j].innerText);
    }

    let link = "";
    let secondCell = row.cells[1];

    if (secondCell.querySelector('a[href]')) {
      link = secondCell.querySelector('a[href]').getAttribute('href');
    }

    rowData.push(link);

    var checkboxCell = row.cells[row.cells.length - 1];
    var checkbox = checkboxCell.querySelector('input[type="checkbox"]');
    if (checkbox) {
      rowData.push(checkbox.checked);
    } else {
      rowData.push(false); // If the checkbox is not found, assume it's unchecked
    }
    data.push(rowData);
  }
  // return data;

  console.log(data)

  chrome.storage.sync.set({ myTableData: data }, function () {
    if (chrome.runtime.lastError) {
      console.error('Error saving data: ' + chrome.runtime.lastError);
    } else {
      console.log('Data saved successfully.');
    }
  });
}

async function saveTableData(){
  var table = document.getElementById("myTable");
  var data = [];
  for (var i = 1; i < table.rows.length; i++) {
    var rowData = [];
    var row = table.rows[i];
    for (var j = 0; j < row.cells.length - 1; j++) {
      rowData.push(row.cells[j].innerText);
    }

    let link = "";
    let secondCell = row.cells[1];

    if (secondCell.querySelector('a[href]')) {
      link = secondCell.querySelector('a[href]').getAttribute('href');
    }

    rowData.push(link);

    var checkboxCell = row.cells[row.cells.length - 1];
    var checkbox = checkboxCell.querySelector('input[type="checkbox"]');
    if (checkbox) {
      rowData.push(checkbox.checked);
    } else {
      rowData.push(false); // If the checkbox is not found, assume it's unchecked
    }
    data.push(rowData);
  }
  // return data;

  console.log(data)
  return data
  // chrome.storage.sync.set({ myTableData: data }, function () {
  //   if (chrome.runtime.lastError) {
  //     console.error('Error saving data: ' + chrome.runtime.lastError);
  //   } else {
  //     console.log('Data saved successfully.');
  //   }
  // });
}

async function calculateGPA(domain, token){


  console.log("DOMAIN 0"  + domain[0])
  if(domain == "no"){

    console.log("TOOOTALL " + total)
    let gradePointTotal = 0

    console.log("CALLLCULATEE")
    console.log(total)
  
    for(let i = 0; i < total.length; i++){
      gradePointTotal += total[i][1]
    }
  
    gpa = gradePointTotal / total.length
    
    console.log(gradePointTotal)
    console.log(total.length)

    console.log("GPPPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + gpa)
    if(Number.isNaN(gpa)){
      console.log("GPA IS NOT A NUMBERRRRRR")
      let gpa = document.getElementById("gpa")
      gpa.style.display = "none"
    }
    updateGPA()
  
    console.log("GPAAA" + gradePointTotal)
    console.log("GPAAA LENGTH" + length)
  
    console.log(gradePointTotal / total.length)
  } else {
    let gradePointTotal = 0

    console.log("CALLLCULATEE")
    console.log(domain)
  
    for(let i = 0; i < domain.length; i++){
      gradePointTotal += domain[i][1]
    }
  
    gpa = gradePointTotal / domain.length

    let answer =  (Number.isNaN(gpa))

    console.log("GPPPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + answer)

  
    console.log(gradePointTotal)
    console.log(total.length)

    if(Number.isNaN(gpa)){
      let gpa = document.getElementById("gpa")
      gpa.style.display = "none"
    }

    updateGPA()

    total = domain

    console.log("TOOOOTALLLLL " + total)
  
    // console.log("GPAAA" + gradePointTotal)
    // console.log("GPAAA LENGTH" + length)
  
    // console.log(gradePointTotal / domain.length)
  }

 


}

async function calculateGPAOnStartup(domain, token, length){

  let gradePointTotal = 0

  console.log("AHHHHHHHHHHHHHs")
  console.log(length)

  for(let i = 0; i < length; i++){
    gradePointTotal += total[i][1]
  }

  gpa = gradePointTotal / length


  updateGPA()

  console.log("GPAAA" + gradePointTotal)
  console.log("GPAAA LENGTH" + length)

  console.log(gradePointTotal / total.length)


}

const fetcher = async(url2, token) => {

    let dataArr = []
    
    const respose = await fetchAllDataWithToken(url2, token)


    if (respose.ok) {
        const data = await respose.json();
        return data
    }

    // .then(data => {
    // //    dataArr.push(data)
    //     console.log(data);

    //     return data
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });

    // return dataArr



}



// async function fetchAllDataWithToken(url, token, danger) {
//     let allData = [];
//     let response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     });
  
//     while (response) {
//       let data = await response.json();
//       allData = allData.concat(data);
//       if (response.headers.get('Link')) {
//         let nextUrl = parseLinkHeader(response.headers.get('Link'));
//         response = nextUrl ? await fetch(nextUrl, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }) : null;
//       } else {
//         response = null;
//       }
//     }
//     return allData;
//   }

function unathorizeResponse(){

  let loading = document.getElementById("loading")
  loading.style.display = "none"

  let unauthorized = document.getElementById("unauthorized")
  unauthorized.innerText = "Please Check Your API Key"
  unauthorized.style.display = "block"
}

async function fetchAllDataWithToken(url, token, danger) {
  let allData = [];
  let response = await fetch(url, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
  });

  while (response) {
      if (response.status === 401) {
          unathorizeResponse()
      }

      // console.log("REPOOOOOOOOOOOOSE " + response)
      // if (response.status === 403) {
      //     throw new Error('403 - Forbidden');
      // }
      let data = await response.json();
      allData = allData.concat(data);
      if (response.headers.get('Link')) {
          let nextUrl = parseLinkHeader(response.headers.get('Link'));
          response = nextUrl ? await fetch(nextUrl, {
              headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          }) : null;
      } else {
          response = null;
      }
  }
  return allData;
}
  
  function parseLinkHeader(header) {
    if (header.length === 0) {
      return null;
    }
    let parts = header.split(',');
    let links = {};
    parts.forEach(p => {
      let section = p.split(';');
      if (section.length < 2) {
        return null;
      }
      let url = section[0].replace(/<(.*)>/, '$1').trim();
      let name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links['next'];
  }


const fetchData = async() => {

    

    // clearTable()
    // chrome.storage.sync.get(['APIKEY'], function(result) {
    //   chrome.storage.sync.get(['DOMAIN'], function(domainResult) {
      
    //     var data = result.APIKEY;
    //     var domainData = domainResult.DOMAIN
    //     console.log("TOOOOKEN" + data)
    //     // fetchWithProperToken(data, domainData)

    //     // fetchWithDanger(data, domainData)

    //     let dataTableY = saveTableData()

    //     console.log(dataTableY)
    //   });
    //   // var data = result.APIKEY;
    //   // console.log("TOOOOKEN" + data)
    //   // fetchWithProperToken(arr, domainData)
    // });

    console.log("YOO")
    let dataTableY = await saveTableData()
    console.log(dataTableY)
    clearTable()
    chrome.storage.sync.get(['APIKEY'], function(result) {
      chrome.storage.sync.get(['DOMAIN'], function(domainResult) {
      
        var data = result.APIKEY;
        var domainData = domainResult.DOMAIN
        console.log("TOOOOKEN" + data)
        // fetchWithProperToken(data, domainData)

        fetchWithDanger(data, domainData, dataTableY)

        // let dataTableY = saveTableData()

        // console.log(dataTableY)
      });
      // var data = result.APIKEY;
      // console.log("TOOOOKEN" + data)
      // fetchWithProperToken(arr, domainData)
    });


    

    

   


    
    
    


}

async function fetchWithDanger(token, domain, tableDatas){
  chrome.storage.sync.get(['DANGER'], function(result) {
    // console.log('Retrieved data from Chrome storage:');
    console.log(result.DANGER); // Access the value of key1
    // saveData()

  

    // fetchWithDanger(url, token, result.DANGER)
    // chrome.storage.sync.get('myTableData', function (myTable) {
    // var table = document.getElementById("myTable");
    // var data = [];


    // console.log(table.rows.length)

    // for (var i = 1; i < table.rows.length; i++) {

    //   console.log("GOOOOINNNGGG")
    //   var rowData = [];
    //   var row = table.rows[i];
    //   for (var j = 0; j < row.cells.length - 1; j++) {
    //     rowData.push(row.cells[j].innerText);
    //   }

    //   let link = "";
    //   let secondCell = row.cells[1];

    //   if (secondCell.querySelector('a[href]')) {
    //     link = secondCell.querySelector('a[href]').getAttribute('href');
    //   }

    //   rowData.push(link);

    //   var checkboxCell = row.cells[row.cells.length - 1];
    //   var checkbox = checkboxCell.querySelector('input[type="checkbox"]');
    //   if (checkbox) {
    //     rowData.push(checkbox.checked);
    //   } else {
    //     rowData.push(false); // If the checkbox is not found, assume it's unchecked
    //   }
    //   data.push(rowData);
    // }

    // console.log("DATA")
    // console.log(data)
      tableDatas1 = tableDatas.splice(1)
      console.log("BABBFOBEOBOUBOFUBEOBFEUBOBF")
      console.log(tableDatas1 )
      fetchWithProperToken(token, domain, result.DANGER, tableDatas1)
    // })
  });
}

const fetchWithProperToken = async(token, domain, danger, retrievedData) => {  

  let gpa = document.getElementById("gpa")
  gpa.style.display = "none"

  total = []
  console.log("HE TOLD ME THAT WOULD WORK")
  console.log(retrievedData)

  console.log("TOKEN" + token)
  console.log("DOOOMAIIN" + domain)


  let apiURL = "https://" + domain  + "/api/v1/users/self/enrollments?access_token=" + token    
  let url2 = "https://" + domain + "/api/v1/users/self/courses"

  let base = "https://" + domain + "/"

  console.log("API RUL " + apiURL);
  console.log("URL 2" + apiURL);
  let gradeArr = await request(apiURL)

  console.log("GRADE ARRRRR")
  console.log(gradeArr)

  if(gradeArr == undefined){

    let loading = document.getElementById("loading")
    loading.style.display = "none"

    let err = document.getElementById("unauthorized")
    err.innerText = "Please Check Your Domain"
    err.style.display = "block"
  }

  fetchAllDataWithToken(url2, token)
  .then(data => {

    // if(data.status === 401){
    //   console.log("UNNNNNAUUUHHTOOOOOORRRIIIIIIIZZZZZEEDDDD")
    // }
      // Store all data in an array

      for(let i = 0; i < gradeArr.length; i++){

          checc[i] = false
          
          for(let w = 0; w < data.length; w++){

              if(gradeArr[i].course_id == data[w].id){

                  

                  let gradeContainer = document.getElementById("GradeContainer")


                  let text = data[w].name + ": " + gradeArr[i].grades.current_grade + ", " + gradeArr[i].grades.current_score

                  if(gradeArr[i].grades.current_grade == undefined){
                      text = data[w].name + ": No Grade Available"
                  }
                  // addElement(gradeContainer, "div", text)

                  // addHref(gradeContainer, "div", text, base + "courses/" +gradeArr[i].course_id )

                  
                  
                  if(gradeArr[i].grades.current_grade === undefined){
                    let link = base + "courses/" + gradeArr[i].course_id


                    addRow(i+1, data[w].name, "No Grade", "No Grade", danger, link, domain, token, false, gradeArr.length)

                  } else {
                    let currGrade = gradeArr[i].grades.current_grade
                    let currScore = gradeArr[i].grades.current_score

                    if(currGrade == undefined || currGrade == "" || currGrade == null){
                      currGrade = "n/a"
                    }

                    if(currScore == undefined || currScore == "" || currScore == null){
                      currGrade = "n/a"
                    }

                    console.log(currGrade)
                    console.log(currScore)

                    let link = base + "courses/" + gradeArr[i].course_id

                    console.log("RETRIEVED 5" + retrievedData[i])
                    if(retrievedData.length > 0 && retrievedData != null && retrievedData[i] != undefined){
                      if(retrievedData[i][5] != undefined){
                        addRow(i+1, data[w].name, currScore, currGrade, danger, link, domain, token, retrievedData[i][5], gradeArr.length)
  
                      }
                    } else {
                      addRow(i+1, data[w].name, currScore, currGrade, danger, link, domain, token, false, gradeArr.length)

                    }
                    


                  }
                  console.log(data[w].name + ": " + gradeArr[i].grades.current_grade)


              }
          }
      }

      let loading = document.getElementById("loading")
      loading.style.display = "none"

      console.log(data)

      calculateGPA("no", token)

      gpa.style.display = "block"

      
  })
  .catch(error => { 
      
  });
}

function addElement(element, type, text){
    const textLine = document.createElement(type);
    textLine.textContent = text;
    element.appendChild(textLine);
}

function clearElement(element){
  element.textContent = ""
}

function addHref(element, type, text, href){
  const textLine = document.createElement(type);
  var link = document.createElement('a');
  link.textContent = text;
  link.href = href;
  link.target = '_blank'; // Open link in a new tab
  textLine.appendChild(link);
  element.appendChild(textLine);

 
}

function clearTable() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 1; i--) {
      table.deleteRow(i);
  }
}