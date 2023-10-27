export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "b6bc3434d0mshe1c1c1593223f9ep184cbcjsn05d58bc52d3a",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json();

    return result;
}
