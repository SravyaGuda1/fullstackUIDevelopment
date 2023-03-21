//script for Login page
/* 
document.querySelector(".login-button").addEventListener("hover", function(){
    document.querySelector(".login-button").setAttribute("style","background-color:red");
});

document.querySelector("body").addEventListener("load", navBarDisplay());
function navBarDisplay(){
    if(document.URL.includes("loginPage")==true){
        document.querySelector("nav").style.display="none";
        document.querySelector(".search").style.display="none";
    }
} */
function appendElement(parentSelector, childElement){
    var parentSelector = "."+parentSelector;
    $(parentSelector).append(childElement);
}
var loadItemsData = () =>{
    var dataUrl = "http://localhost:8081/project_ecommerce/JSON/shoppingData.json"
    $.ajax({        
        url: dataUrl, 
        method:'GET',
        dataType:'JSON',
        data: {},
        success: (response) =>{
            console.log("Successfully communicated");
            console.log(response);
            var itemsData = response.shoppingItemsData;
            console.log(itemsData);
            itemsData.forEach((item, index) => {
                createItems(item);
            });
        },
            error:()=> {
                console.log("Failed to communicate with server");
                console.log(error);
            }
    });
} //closure





// method for creating items on Shopping page
var createItems = (itData) =>{    
    //adding list element
    var item1 = $("<li/>").addClass("item");
    $(".itemList").append(item1);
    //item1.setAttribute("class", "item");
    //adding div tag as child of list
    var itemContainer = $("<div/>").addClass("itemContainer");
    item1.append(itemContainer);

    //adding image element
    var img1 = $("<img/>");
    img1.addClass("itemImg");
    itemContainer.append(img1);
    img1.attr("src", itData.imgURL);
    //add heading for image
    // var itemName = $("<p/>");
    // itemName.addClass("itemName");
    // itemContainer.append(itemName);
    // itemName.html(itData.itemName);   

    var itemName = $("<p/>").addClass("itemName").html(itData.itemName);
   // itemName.addClass("itemName");
    itemContainer.append(itemName);
    //itemName.html(itData.itemName);
}
//createItems();
