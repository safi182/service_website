let picturesdata={
    name:["Huawei P20 lite","Huawei Psmart"],
    link:[" https://www.gsmarena.com/huawei_p20_lite-9098.php","https://www.gsmarena.com/huawei_p_smart_2019-9409.php"],
    img:["img/p20_lite.webp","img/huawi_p_smart.jpg"]


}
{
   
}


function setclassName()
{
    let select=document.querySelectorAll("div.col-2:first-child");
    
        for (let k in select)
        {

        select[k].className+=" phone";
        }
    

}
setclassName();

function createPicture()
{


let selectelement=document.querySelector("#pSmart");
let createelement=createAnyElement("a",{href:"https://www.gsmarena.com/huawei_p20_lite-9098.php",target:"blank"});



createelement.innerHTML='<img src="img/p20_lite.webp" alt="p20lite">';


return selectelement.appendChild(createelement);


}
createPicture();

function createAnyElement(name,setAttributes)
{
    let cElement=document.createElement(name);
    for(k in setAttributes)
    {
        cElement.setAttribute(k,setAttributes[k])
    }

    return cElement;

}
 function setpictutes()
 {

 }