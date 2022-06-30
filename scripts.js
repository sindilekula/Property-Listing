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
        catagory: "Studio",
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
        catagory: "Apartment",
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
        catagory: "Apartment",
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
        catagory: "Apartment",
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
        catagory: "Studio",
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
        catagory: "Apartment",
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
        catagory: "Villa",
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
        catagory: "Apartment",
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
        catagory: "Single Family Home",
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
        catagory: "Multi Family Home",
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
        catagory: "Villa",
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
        catagory: "Single Family Home",
        price: "R300000",
      },
      
]

function showProperties() {
    document.querySelector("#display").innerHTML = " ";
    properties.forEach((property) => {
        document.querySelector("#display").innerHTML += `
        <div class="card" style="width: fit-content">
        <img src="${property.imgURL}" style="width: 300px"/>
        <div>${property.name}</div>
        <div>${property.location}</div>
        <div><i class="fa-solid fa-bed mx-2"></i>${property.bedrooms}</div>
        <div><i class="fa-solid fa-shower mx-2"></i>${property.shower}</div>
        <div><i class="fa-solid fa-car mx-2"></i>${property.garage}</div>
        <div><i class="fa-solid fa-ruler-triangle"></i>${property.space}</div>
        <div>${property.catagory}</div>
        <div>${property.price}</div>
        </div>
        `;
    });
}

showProperties();