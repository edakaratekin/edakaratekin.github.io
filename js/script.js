// initialize
var numPerPage = 10;
var contactList = document.getElementsByClassName("contact-item cf"); // array of contact 
var totalNum = contactList.length; // total # of contact
var numOfPage = Math.ceil(totalNum / numPerPage);

var activePage = 1;

this.showPage(1);

//create links
const list = document.createElement("ul");
list.className = "pagination";
let pages = document.getElementsByClassName("page")
pages[0].appendChild(list);

for (let index = 0; index < numOfPage; index++) {
    let listItem = document.createElement("li");
    let itemId = "page" + index;
    listItem.setAttribute("id",itemId);
    let lists = document.getElementsByClassName("pagination")
    lists[0].appendChild(listItem);

    let pageLink = document.createElement("a");
    pageLink.setAttribute("href","#");
    pageLink.setAttribute("onClick","return showPage(this.id);"); // i get this from https://stackoverflow.com/questions/14867558/html-tag-a-want-to-add-both-href-and-onclick-working
    pageLink.innerHTML = index + 1;
    let linkId = index;
    pageLink.setAttribute("id",linkId);
    document.getElementById(itemId).appendChild(pageLink);
}

//show page function will be called from links 
function showPage(linkID)
{

    startNum = linkID * numPerPage;
    endNum = startNum + numPerPage -1;

    if(endNum > totalNum){
        endNum = totalNum;
    }

    for (let index = 0; index < contactList.length; index++) {
       if(index >= startNum && index <= endNum ){
           contactList[index].style.display = "block";
       }else{
        contactList[index].style.display = "none";
       }
        
    }
    return true;
}