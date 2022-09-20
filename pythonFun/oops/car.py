class Car:
    def _init_(self, name, colour, price) -> None: 
        self.car_name = name
        self.car_colour = colour
        self.car_price = price

    def _str_(self) -> str:
        return f"{self.car_name} - {self.car_colour} : - {self.car_price}"


obj = Car("lamborgini", "black", "1000")
arr = []
for i in range(2):
    arr.append(Car(input("Name :"), input("colour :"), input("price")))

for car in arr:
    print(car.name)
