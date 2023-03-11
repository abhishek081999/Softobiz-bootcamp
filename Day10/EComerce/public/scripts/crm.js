const firstName="Mahesh";
const lastName="Mitkari";
const contactNumber="9881735801";


class Customer{
    constructor(fName, lName, phone){
        this.firstName=fName;
        this.lastName=lName;
        this.contactNumber=phone;
    }

    get FullName(){
        return this.firstName + " " + this.lastName;
    }
}
export { firstName, lastName, contactNumber,Customer};