let properties = JSON.parse(localStorage.getItem("property"))
  ? JSON.parse(localStorage.getItem("property"))
  : [
      {
        id: 1,
        imgURL: "https://i.postimg.cc/8PQR8K2K/home-5835289-1920.jpg",
        name: "Renovated Studio",
        location: "Ronderbosch, RSA",
        bedrooms: 4,
        shower: 2,
        garage: 1,
        space: "1200 Sq ft",
        category: "Studio",
        price: "R400000",
      },
      {
        id: 2,
        imgURL: "https://i.postimg.cc/WtLj3tDQ/architecture-5339245-1920.jpg",
        name: "Design Apartment",
        location: "N1 City, RSA",
        bedrooms: 3,
        shower: 2,
        garage: 1,
        space: "2560 Sq ft",
        category: "Apartment",
        price: "R700000",
      },
      {
        id: 3,
        imgURL: "https://i.postimg.cc/pXNFwZGL/living-room-2155376-1920.jpg",
        name: "New Apartment Nice View",
        location: "Century City, RSA",
        bedrooms: 3,
        shower: 1,
        garage: 1,
        space: "1200 Sq ft",
        category: "Apartment",
        price: "R500000",
      },
      {
        id: 4,
        imgURL:
          "https://i.postimg.cc/LXTkV0FX/kitchen-living-room-4043091-1920.jpg",
        name: "Light and Modern Apartment",
        location: "Claremont, RSA",
        bedrooms: 4,
        shower: 2,
        garage: 1,
        space: "2000 Sq ft",
        category: "Apartment",
        price: "R300000",
      },
      {
        id: 5,
        imgURL: "https://i.postimg.cc/8PQR8K2K/home-5835289-1920.jpg",
        name: "Uptown Studio",
        location: "Blouberg, RSA",
        bedrooms: 3,
        shower: 1,
        garage: 1,
        space: "1500 Sq ft",
        category: "Studio",
        price: "R350000",
      },
      {
        id: 6,
        imgURL: "https://i.postimg.cc/50P49PgF/livingroom-1032733-1280.jpg",
        name: "His & Hers Apartment",
        location: "Sandton, RSA",
        bedrooms: 2,
        shower: 1,
        garage: 2,
        space: "800 Sq ft",
        category: "Apartment",
        price: "R150000",
      },
      {
        id: 7,
        imgURL: "https://i.postimg.cc/66FgSY73/apartment-2094666-1920.jpg",
        name: "Villa-park",
        location: "Muizenberg, RSA",
        bedrooms: 7,
        shower: 2,
        garage: 2,
        space: "6200 Sq ft",
        category: "Villa",
        price: "R600000",
      },
      {
        id: 8,
        imgURL: "https://i.postimg.cc/SRQrKmLS/inner-space-1026447-1920.jpg",
        name: "Southern Apartment",
        location: "Constantia, RSA",
        bedrooms: 3,
        shower: 1,
        garage: 1,
        space: "1800 Sq ft",
        category: "Apartment",
        price: "R230000",
      },
      {
        id: 9,
        imgURL: "https://i.postimg.cc/kMTVQY52/kitchen-2094707-1920.jpg",
        name: "Me, myself & I",
        location: "Sea point, RSA",
        bedrooms: 1,
        shower: 1,
        garage: 1,
        space: "1200 Sq ft",
        category: "Single Family Home",
        price: "R150000",
      },
      {
        id: 10,
        imgURL: "https://i.postimg.cc/ydY6Q96V/dining-room-1158266-1920.jpg",
        name: "Family Mansion",
        location: "Hout Bay, RSA",
        bedrooms: 4,
        shower: 2,
        garage: 2,
        space: "3000 Sq ft",
        category: "Multi Family Home",
        price: "R570000",
      },
      {
        id: 11,
        imgURL:
          "https://i.postimg.cc/Ssw3P2cX/interior-design-3564955-1920.jpg",
        name: "Holiday Villa",
        location: "Waterfront, RSA",
        bedrooms: 6,
        shower: 2,
        garage: 2,
        space: "5000 Sq ft",
        categry: "Villa",
        price: "R300000",
      },
      {
        id: 12,
        imgURL: "https://i.postimg.cc/43cS94Ds/living-room-1032732-1280.jpg",
        name: "Home Bay",
        location: "Camps Bay, RSA",
        bedrooms: 2,
        shower: 1,
        garage: 1,
        space: "1200 Sq ft",
        category: "Single Family Home",
        price: "R300000",
      },
    ];

function showProperties(properties) {
//   document.querySelector("#table").innerHTML = "";
  properties.forEach((property, index) => {
    document.querySelector("#table").innerHTML += `<tr>
        <td class="mx-2" style="width: 300px">${property.id}</td>
        <td class="mx-2" style="width: 300px"><img src="${property.imgURL}" style="width: 100px"/></td>
        <td class="mx-2" style="width: 300px">${property.name}</td>
        <td class="mx-2" style="width: 300px">${property.location}</td>
        <td class="mx-2" style="width: 200px"><i class="fa-solid fa-bed mx-2"></i>${property.bedrooms}</td>
        <td class="mx-2" style="width: 200px"><i class="fa-solid fa-shower mx-2"></i>${property.shower}</td>
        <td class="mx-2" style="width: 200px"><i class="fa-solid fa-car mx-2"></i>${property.garage}</td>
        <td class="mx-2" style="width: 300px"><i class="fa-solid fa-ruler-triangle"></i>${property.space}</td>
        <td class="mx-2" style="width: 300px">${property.category}</td>
        <td class="mx-2" style="width: 300px">${property.price}</td>
    <td class="mx-2" style="width: 300px"><button type="submit" onclick="deleteProperty(${index})"><i class="fa-solid fa-trash"></i></button></td>
        <td class="mx-2" style="width: 300px"><button type="submit"> <i class="fa-solid fa-pen"></i></button></td>
        `;
  });
}

showProperties(properties);

// function addProperty() {
//     // let image = document.querySelector("#title").value
//     // let price = document.querySelector("#price").value
//     // let description = document.querySelector("#description").value
//     // let  = document.querySelector("#image").value

//    const property = {
//         imgURL: document.getElementById("image").value,
//         name: document.getElementById("name").value,
//         location: document.getElementById("location").value,
//         bedrooms: document.getElementById("bedrooms").value,
//         shower: document.getElementById("shower").value,
//         garage: document.getElementById("garage").value,
//         space: document.getElementById("space").value,
//         category: document.getElementById("category").value,
//         price: document.getElementById("price").value,
//     };
//     properties.push(property);
//     localStorage.setItem("property", JSON.stringify(properties));
//     showPoperties(properties);
// }

// document.querySelector("addProperty").addEventListener("click", addProperty);

// function deleteProperty(id) {
//   property = properties.filter((property) => {
//     property.id !== id;
//   });
//   localStorage.setItem("property", JSON.stringify(properties));
//   showProperties(properties);
// }

//

function addProperty() {
  let category = document.querySelector("#category").value;
  let image = document.querySelector("#image").value;
  let location = document.querySelector("#location").value;
  let bedrooms = document.querySelector("#bedrooms").value;
  let shower = document.querySelector("#shower").value;
  let garage = document.querySelector("#garage").value;
  let space = document.querySelector("#space").value;
  let price = parseFloat(document.querySelector("#price").value);
  let pName = document.querySelector("#name").value;

  properties.push({
    id: properties.length + 1,
    imgURL: image,
    name: pName,
    location: location,
    bedrooms: bedrooms,
    shower: shower,
    garage: garage,
    space: space,
    category: category,
    price: price,
  });
  localStorage.setItem("property", JSON.stringify(properties));
  showProperties(properties);
}

console.log(properties.length);


function deleteProperty(id) {
    if (id > -1){
        properties.splice(id, 1);
    }
    localStorage.setItem("property", JSON.stringify(properties));
    showProperties(properties);
}