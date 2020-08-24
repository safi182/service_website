let phonePicturesData = {
    name: ["Huawei P20 lite", "Huawei_P20", "Huawei Psmart 2019",],
    link: [" https://www.gsmarena.com/huawei_p20_lite-9098.php", "https://www.gsmarena.com/huawei_p_smart_2019-9409.php"],
    img: ["img/p20_lite.webp", "img/huawi_p_smart.jpg"]


};

function iteration()
{
   for(let k in phonePicturesData)
   {
       
       
       for(let data in phonePicturesData[k])
       {
            console.log(data)

            

           
       }
   }
   
}
iteration();




function createPicture( )
 {



    let createelement = createAnyElement("a", { href: "https://www.gsmarena.com/huawei_p20_lite-9098.php", target: "blank" });



    createelement.innerHTML = '<img src="img/p20_lite.webp" alt="p20lite">';



    return createelement;



}


function setpicture() {
    let select = document.querySelectorAll(".col-2:first-child");
    
    for (let k in select) {

        console.log(k);
        console.log(select);


        select[k].appendChild(createPicture())


    }


}



function createAnyElement(name, setAttributes) {
    let cElement = document.createElement(name);
    for (k in setAttributes) {
        cElement.setAttribute(k, setAttributes[k])
    }

    return cElement;

}

