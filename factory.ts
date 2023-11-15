interface Coffe {
    name: string
    grindCoffe(): void
    makeCoffe(): void
    pourIntoCup(): void
}

class Espresso implements Coffe {
    name = 'Espresso'

    grindCoffe() {
        console.log(`Your ${this.name} is being grinded...`)
        console.log(`Your coffe is ready!`)

    }
    makeCoffe() {
        console.log(`Your ${this.name} is being made...`)
        console.log(`Your coffe is ready!`)

    }
    pourIntoCup() {
        console.log(`Pouring the ${this.name} into your cup...`)
        console.log(`Your coffe is ready!`)

    }
}

class Cappuccino implements Coffe {
    name = 'Cappuccino'

    grindCoffe() {
        console.log(`Your ${this.name} is being grinded...`)
        console.log(`Your coffe is ready!`)

    }
    makeCoffe() {
        console.log(`Your ${this.name} is being made...`)
        console.log(`Your coffe is ready!`)

    }
    pourIntoCup() {
        console.log(`Pouring the ${this.name} into your cup...`)
        console.log(`Your coffe is ready!`)

    }
}

class Americano implements Coffe {
    name = 'Espresso'

    grindCoffe() {
        console.log(`Your ${this.name} is being grinded...`)
        console.log(`Your coffe is ready!`)
    }
    makeCoffe() {
        console.log(`Your ${this.name} is being made...`)
        console.log(`Your coffe is ready!`)
    }
    pourIntoCup() {
        console.log(`Pouring the ${this.name} into your cup...`)
        console.log(`Your coffe is ready!`)
    }
}

class CoffeFactory {
    orderCoffe(typeCoffee: string): Coffe {
        if(typeCoffee === 'Espresso'){
            return new Espresso()
        } else if (typeCoffee === 'Cappuccino') {
            return new Cappuccino()
        } else if (typeCoffee === 'Americano') {
            return new Americano()
        } else {
            throw new Error('Not an existing coffe.')
        }
    }
}

const coffeFactory = new CoffeFactory()

const coffeEspresso = coffeFactory.orderCoffe('Espresso')
coffeEspresso.grindCoffe()
coffeEspresso.makeCoffe()
coffeEspresso.pourIntoCup()


