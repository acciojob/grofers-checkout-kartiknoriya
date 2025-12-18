const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	   const prices = document.querySelectorAll('.prices')
       let total = 0;
	   prices.forEach((p) =>{
          total+= parseFloat(p.textContent) 
	   });

	 const table = document.querySelector('table')

	 const newrow = document.createElement('tr') 
	 const labelcell = document.createElement('td')
	 const totalcell = document.createElement('td')

	 labelcell.textContent = 'Total Price';
	 totalcell.textContent = total; 
	  newrow.id = 'ans';

	  newrow.append(labelcell,totalcell)
	  table.appendChild(newrow)
	 
	 
};

getSumBtn.addEventListener("click", getSum);

