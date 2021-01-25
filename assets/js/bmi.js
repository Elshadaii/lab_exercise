// Declaring Object +  Remove the variables and modify with the object 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    status: "z",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {
        return personProfile.weight / (personProfile.height * personProfile.height);
    },
    checkState: function() {
        let tempstate = this.calcBmi();
        if (tempstate < 18.5) {
            if (tempstate < 18.5) { this.status = "You are Underweight"; }
        } else if (tempstate > 18.5 && tempstate < 24.9) {
            this.status = " You are Average";
        } else if (tempstate > 24.9 && tempstate < 29.9) {
            this.status = " You are Overweight";
        } else {
            this.status = "You are Obese"
        }

    }
};

personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");


personProfile.ageCalc();
personProfile.checkVote();
// Adding Self Invoking Function Expression 
(function() {


    // call bmi calculator 
    personProfile.calcBmi();
    personProfile.checkState();
    console.log("your BMI is : " + personProfile.calcBmi())
    console.log(personProfile.status)
    console.log("========================================")

})();