var bitress = {
    Utils: {}
}


bitress.Utils.submit = function(){

  let firstname = document.getElementById("lastname").value;

  var place = document.getElementById("fn");


  openModal()
}

bitress.Utils.tabs = function(evt, tab){

    var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";

}

// Get modal and buttons
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open the modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


function openModal() {
  modal.style.display = 'block';
}


   // Retrieve input values
   const lastname = document.getElementById("lastname").value;
   const firstname = document.getElementById("firstname").value;
   const middlename = document.getElementById("middlename").value;
   const birthdate = document.getElementById("birthdate").value;
   const address = document.getElementById("address").value;
   const sex = document.querySelector(".select-label:contains('Sex') + .select").value;
   const status = document.querySelector(".select-label:contains('Status') + .select").value;
   const dateHired = document.getElementById("date-hired").value;
   const isActive = document.getElementById("myCheckbox").checked ? "Active" : "Inactive";

   // Retrieve educational background values
   const undergraduateCourse = document.getElementById("undergraduate-course").value;
   const undergraduateGradYear = document.getElementById("undergraduate-gradyear").value;
   const mastersCourse = document.getElementById("masters-course").value;
   const mastersGradYear = document.getElementById("masters-gradyear").value;
   const doctorateCourse = document.getElementById("doctorate-course").value;
   const doctorateGradYear = document.getElementById("doctorate-gradyear").value;

   // Populate the placeholders
   document.getElementById("display-lastname").textContent = lastname;
   document.getElementById("display-firstname").textContent = firstname;
   document.getElementById("display-middlename").textContent = middlename;
   document.getElementById("display-birthdate").textContent = birthdate;
   document.getElementById("display-address").textContent = address;
   document.getElementById("display-sex").textContent = sex;
   document.getElementById("display-status").textContent = status;
   document.getElementById("display-date-hired").textContent = dateHired;
   document.getElementById("display-active-status").textContent = isActive;
   document.getElementById("display-undergraduate-course").textContent = undergraduateCourse;
   document.getElementById("display-undergraduate-gradyear").textContent = undergraduateGradYear;
   document.getElementById("display-masters-course").textContent = mastersCourse;
   document.getElementById("display-masters-gradyear").textContent = mastersGradYear;
   document.getElementById("display-doctorate-course").textContent = doctorateCourse;
   document.getElementById("display-doctorate-gradyear").textContent = doctorateGradYear;

