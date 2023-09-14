//const square = (x) => x*x  

const event= {
    name:'Birthday party',
    guestList: ['jatin', 'amit', 'kunal', 'rajat'],
    printGuestlist(){
        //const that = this
        console.log('guest list for ' + this.name)

        this.guestList.forEach((guest) =>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestlist()
//console.log(square(6))