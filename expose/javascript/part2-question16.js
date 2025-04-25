let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let variable in statistics) {
    if (statistics[variable] % 2 !== 0 || variable[0] === 'r') {
        console.log(`${statistics[variable]}`);
    }
}