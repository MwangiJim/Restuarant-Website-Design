let InputBox = document.querySelector('.input-section input');
let SuggestionBox = document.querySelector('.autocom-box');
let searchWrapper = document.querySelector('.searchWrapper');
let ResultArea  = document.querySelector('.searchResults');
let p = document.createElement('p');
let UserData;
let index = 0;

InputBox.onkeyup=(e)=>{
    //console.log(e.target.value);
    let UserData = e.target.value;
    let emptyArray = [];
    if(UserData){
        emptyArray = foodSearch.filter((data)=>{
            return data.foodName.toLocaleLowerCase().includes(UserData.toLocaleLowerCase());
        })
        //console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return `<li>${data.foodName}</li>`;
        })
        console.log(emptyArray);
        ShowList(emptyArray);
        SuggestionBox.classList.add('active');
        let Alloptions  = document.querySelectorAll('.autocom-box li');
        for(let i=0;i<Alloptions.length;i++){
            Alloptions[i].setAttribute('onclick','selectedFood(this)');
        }
        let searchButton = document.querySelector('.fa-search');
        searchButton.onclick=()=>{
        console.log('Searched!!1')
        if(InputBox.value === 'Chicken'){
              searchWrapper.style.display = 'none';
              ResultArea.style.display = 'block';
              showResults();

              function showResults(){
                 let ResultTag = '<div class="info">'+
                                    '<img src="'+foodSearch[index].imgpath+'">'+
                                       '<h2>'+foodSearch[index].foodName+'</h2>'+
                                         '<div class="searchTextInfo">'+
                                             '<p>'+foodSearch[index].foodInformation+'</p>'+
                                          '</div>'+
                                    '</div>';
                   ResultArea.innerHTML = ResultTag;
              }
         }
         else{
            p.innerHTML = 'No search Results'
         }
}
    }
    else{
        SuggestionBox.classList.remove('active');
    }
}
function selectedFood(element){
  let userChoice = element.textContent;
  //console.log(userChoice);
  InputBox.value = userChoice;
}
function ShowList(list){
    let ListData;
    if(!list.length){
        let userValue;
        ListData = `<li>${userValue}</li>`;
    }
    else{
        ListData = list.join('');
    }
    SuggestionBox.innerHTML = ListData;
}