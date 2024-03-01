const loadPhone = async (searchText) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
   const data = await res.json();
   const phones = data.data;
   displayPhones(phones);
}


const displayPhones = phones => {
   // console.log(phones)

   const phoneContainer = document.getElementById('phone-container')
   phoneContainer.textContent = '';

   phones.forEach(phone => {
      console.log(phone);
      // 1 Create a div
      const phoneCard = document.createElement('div');
      phoneCard.classList =`card bg-gray-100 shadow-xl pt-4"`;
      phoneCard.innerHTML = `  
      <figure><img src="${phone.image}" alt="Shoes" class="pt-4" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>`;
      phoneContainer.appendChild(phoneCard);
   })
}




// handle search button
const handleSearch = () =>{
   const searchField = document.getElementById('Search-field')
   const searchText = searchField.value;
   console.log(searchText);
   loadPhone(searchText)
}


// loadPhone();