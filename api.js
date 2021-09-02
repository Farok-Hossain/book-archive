const Searchbook = () =>{
    const searchfildid = document.getElementById('input-fild')
    const searchtext = searchfildid.value
 
    result.innerText="";
 
 //    spinner 
    toggelspiner('block')
 //    books hidden 
    toggelboxes('hidden')
 //    clear data 
    searchfildid.value="";
 //    load data 
    const url =  `https://openlibrary.org/search.json?q=${searchtext}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchresult( data.docs))
 
   
    
 };
 
 const toggelspiner = displaystyle =>{
     document.getElementById('spinnerbox').style.display = displaystyle;
 }
 
 const toggelboxes = displaystyle =>{
     document.getElementById('display-outpot').style.visibility = displaystyle;
 }
 
 
   const searchresult = docs =>{
    const container = document.getElementById('display-outpot')
    container.textContent="";
    
    // load resuld 
    const docslength = docs.length;
    const result = document.getElementById('result')  
    result.classList.add('counts')
 
    result.innerText=`results found: ${docslength} `
  
    if (docs.length == 0) {
       const p = document.createElement('p')
       p.classList.add('error')
       p.innerText='Not found search'
       container.appendChild(p)
    }
    
    else{
        
    docs.forEach(doc => {
       
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML=`
        <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="..." h-50>
          <div class="card-body">
            <h5 class="card-title"> ${doc.title}</h5>
            <h4 class="card-title"> ${doc.publisher}</h4>
            <p class="card-text">  <b>publish year:</b> ${doc.publish_year ? doc.publish_year : 'not availabel'}</p>
            <p class="card-text">  <b>publish date:</b> ${doc.publish_date ? doc.publish_date : 'not availabel'}</p>
            <p class="card-title"> <b>Author name:</b> ${doc.author_name ? doc.author_name : 'not availabel'}</p>
          </div>
        </div>
       `;
       container.appendChild(div)
       
      });
    }
 //    toggel none 
    toggelspiner("none")
 //    books visibul
    toggelboxes('visible')
   }