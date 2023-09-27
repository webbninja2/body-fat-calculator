   document.addEventListener('DOMContentLoaded', function() {
       var usUnitTab = document.getElementById('usUnitTab');
       var metricUnitTab = document.getElementById('metricUnitTab');
       var usUnits = document.getElementById('usUnits');
       var metricUnits = document.getElementById('metricUnits');
   
       usUnitTab.addEventListener('click', function (e) {
           e.preventDefault();
           usUnits.style.display = 'block';
           metricUnits.style.display = 'none';
           usUnitTab.classList.add('active');
           metricUnitTab.classList.remove('active');
       });
   
       metricUnitTab.addEventListener('click', function (e) {
           e.preventDefault();
           usUnits.style.display = 'none';
           metricUnits.style.display = 'block';
           metricUnitTab.classList.add('active');
           usUnitTab.classList.remove('active');
       });
   });
   
   document.addEventListener('DOMContentLoaded', function() {
       document.getElementById('usUnitTab').click();
   });
           var genderOutput = document.getElementById('genderOutput');
           var ageOutput = document.getElementById('ageOutput');
           var heightOutput = document.getElementById('heightOutput');
           var weightOutput = document.getElementById('weightOutput');
           var neckOutput = document.getElementById('neckOutput');
           var waistOutput = document.getElementById('waistOutput');
           var hipOutput = document.getElementById('hipOutput');
           var bodyfatOutput = document.getElementById('bodyfatOutput');
           var hipDiv = document.getElementById('hipDiv');
   
           var feethipDiv = document.getElementById('feethipDiv');
           var hipRow = document.getElementById('hipRow');
           var usHipDiv = document.getElementById('usHipDiv');
           var usHip = document.getElementById('usHip');
           var usUnitTab = document.getElementById('usUnitTab');
           var metricUnitTab = document.getElementById('metricUnitTab');
   
           document.getElementById('fatForm').addEventListener('submit', function (e) {
               e.preventDefault();
               var gender = document.getElementById('gender').value;
               var age = parseFloat(document.getElementById('age').value);
   
               if (gender === 'female') {
                   var hip = parseFloat(document.getElementById('hip').value);
                   hipOutput.textContent = hip + " cm";
               }
   
               if (metricUnitTab.classList.contains('active')) {
                   var height = parseFloat(document.getElementById('metricHeight').value) 
                   var weight = parseFloat(document.getElementById('metricWeight').value) 
                   var neck = parseFloat(document.getElementById('metricNeck').value) 
                   var waist = parseFloat(document.getElementById('metricWaist').value) 
               } 
               
               else if (usUnitTab.classList.contains('active')) {
                     var heightFeet = parseFloat(document.getElementById('heightFeet').value);
                     var heightInches = parseFloat(document.getElementById('heightInches').value);
                     var weightPounds = parseFloat(document.getElementById('weightPounds').value);
                     var neckFeet = parseFloat(document.getElementById('Neckfeet').value);
                     var neckInches = parseFloat(document.getElementById('NeckInches').value);
                     var waistFeet = parseFloat(document.getElementById('Waistfeet').value);
                     var waistInches = parseFloat(document.getElementById('WaistInches').value);


                     var hipfeet = parseFloat(document.getElementById('hipfeet').value);
                     var hipinches = parseFloat(document.getElementById('hipinches').value);

                     var heightMeters = (heightFeet * 0.3048) + (heightInches * 0.0254);
                     var weightKilograms = weightPounds * 0.453592;

                     var bodyFatPercentageMen;
                     var bodyFatPercentage;
   
                  if (gender === 'male') {
                     bodyFatPercentageMen = 495 / (1.0324 - 0.19077 * Math.log10(waistFeet * 30.48 + waistInches * 2.54 - neckFeet * 30.48 - neckInches * 2.54) + 0.15456 * Math.log10(heightMeters * 100)) - 450;
                  } else if (gender === 'female') {
                     bodyFatPercentageMen = 495 / (1.29579 - 0.35004 * Math.log10(waistFeet * 30.48 + waistInches * 2.54 + hipfeet * 30.48 + hipinches * 2.54 - neckFeet * 30.48 - neckInches * 2.54) + 0.221 * Math.log10(heightMeters * 100)) - 450;
                  }
               }
               // metricUnitTab display output

               var bodyFat = calculateBodyFat(gender, age, height, weight, neck, waist, hip);

            if (metricUnitTab.classList.contains('active')) {
                ageOutput.textContent = age;
                genderOutput.textContent = gender;
                heightOutput.textContent = height + " cm";
                weightOutput.textContent = weight + " kg";
                neckOutput.textContent = neck + " cm";
                waistOutput.textContent = waist + " cm";
                var outputvalue = bodyFat.toFixed(2) + " %";
console.log(outputvalue);


        // Check when values are all zero
        if (age == 0 && height == 0 && weight == 0 && neck == 0 && waist == 0) {
        bodyfatOutput.textContent = "0.00 %";
        } 
        if (bodyFat.toFixed(2) < 0) {
                bodyfatOutput.textContent = "0.00 %";
            } else {
                bodyfatOutput.textContent = bodyFat.toFixed(2) + " %";
            }
                //  hip add in female select
               if (gender === 'female') {
                   hipRow.style.display = 'table-row';
               } else {
                   hipRow.style.display = 'none';
               }
           }
           if (usUnitTab.classList.contains('active')) {
            var bodyFatPercentageMen; // Make sure bodyFatPercentageMen is defined and has a value
            ageOutput.textContent = age;
            genderOutput.textContent = gender;
            heightOutput.textContent =  heightFeet + " feet " + heightInches + " inches";
            weightOutput.textContent =  weightPounds + " pounds";
            neckOutput.textContent = neckFeet + " feet " + neckInches + " inches";
            waistOutput.textContent =  waistFeet + " feet " + waistInches + " inches";

            //check kwhen value are zero
            if (age == 0 && heightFeet == 0 && weightPounds == 0 && neckFeet == 0 && waistFeet == 0 ) {
                bodyfatOutput.textContent = "0.00 %";
            }  
             if (bodyFatPercentageMen.toFixed(2) < 0) {
                bodyfatOutput.textContent = "0.00 %";
            } else {
                bodyfatOutput.textContent =  bodyFatPercentageMen.toFixed(2) + " %";
            }
                //  hip add in female select
               if (gender === 'female') {
                   hipOutput.textContent = hipfeet + " feet " + hipinches + " inches";
                   hipRow.style.display = 'table-row';
                   hipDiv.classList.add('hidden'); 
               } else {
                  hipRow.style.display = 'none';
               hipDiv.classList.add('hidden'); 
               }
           }
           });
   
   
           // gender change 
           document.getElementById('gender').addEventListener('change', function() {
       var selectedGender = this.value;
       
       if (usUnitTab.classList.contains('active')) {
           if (selectedGender === 'female') {
           feethipDiv.classList.remove('hidden'); 
           hipDiv.classList.add('hidden'); 
   
           }// Show feethipDiv when usUnitTab is active
       } 
       if (usUnitTab.classList.contains('active')) {
           if (selectedGender === 'male') {
            feethipDiv.classList.add('hidden'); 
           hipDiv.classList.add('hidden'); 
   
           }// Show feethipDiv when usUnitTab is active
       } 

       if (metricUnitTab.classList.contains('active')) {
           if (selectedGender === 'female') {
           feethipDiv.classList.add('hidden'); 
           hipDiv.classList.remove('hidden'); 
   
           }// Show feethipDiv when usUnitTab is active
       } 
       if (metricUnitTab.classList.contains('active')) {
           if (selectedGender === 'male') {
            hipDiv.classList.add('hidden')
   
           }// Show feethipDiv when usUnitTab is active
       } 

   });
            // metricUnitTab display output
           function calculateBodyFat(gender, age, height, weight, neck, waist, hip) {
               if (gender === 'male') {
                   return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
               } else if (gender === 'female') {
                   return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
               } else {
                   return "Invalid gender";
               }
           } 

           //clear button 
        document.getElementById('clear').addEventListener('click', function(event) {
        event.preventDefault();

   // Clear form fields
   document.getElementById('gender').selectedIndex = 0;
   document.getElementById('age').value = '0';
   document.getElementById('usUnits').value = '';
   document.getElementById('metricUnits').value = '';

   var usUnitTab = document.getElementById('usUnitTab');

   if (usUnitTab.classList.contains('active')) {
      document.getElementById('heightFeet').value = 0;
      document.getElementById('heightInches').value = 0;
      document.getElementById('weightPounds').value = 0;
      document.getElementById('Neckfeet').value = 0;
      document.getElementById('NeckInches').value = 0;
      document.getElementById('Waistfeet').value = 0;
      document.getElementById('WaistInches').value = 0;
      document.getElementById('hipfeet').value = 0;
      document.getElementById('hipinches').value = 0;
   } else {
      document.getElementById('metricHeight').value = 0;
      document.getElementById('metricWeight').value = 0;
      document.getElementById('metricNeck').value = 0;
      document.getElementById('metricWaist').value = 0;
      document.getElementById('hip').value = 0;
   }
});