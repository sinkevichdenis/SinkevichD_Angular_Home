class MyMap<T> {
    private value: {[key: string]: T} = {};

    setItem (key: string, item: T) {
       this.value[key] = item;
    }

    getItem(key: string) : T {
        return this.value[key];
    }

    clear () : boolean {
        this.value = {};
        return true;
    }

    printMap () : void {
        for (let [key, value] of Object.entries(this.value)) {
            console.log( `${key}: ${value}`)
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
