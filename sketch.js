fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {

        rsp.data.forEach(element => {

            place = element.name;
            sick = element.sick;
            recover = element.recovered;
            dead = element.dead;
            cases = element.infected;

            if(cases > 100){
                color = `rgb(255, 0, 0)`;
            }
            else{
                color = `rgb(0, ${255 - cases}, 0`;
            }

            new mapboxgl.Marker({
                draggable: false,
                color: color
            }).setLngLat([element.longitude, element.latitude])
            .addTo(map);

            // console.log(`Place: ${place}`)
            // console.log(`Current Cases: ${sick}`)
            // console.log(`Recovered: ${recover}`)
            // console.log(`Dead: ${dead}`)
            // console.log(`Total Cases: ${cases}`)
            // console.log(" ");

            const PlaceElement = document.createElement('div');
            PlaceElement.innerText = `Place: ${place}`;
            PlaceElement.classList.add('InfoBox');
            document.body.appendChild(PlaceElement);

            const CurrentCasesElement = document.createElement('div');
            CurrentCasesElement.innerText = `Current Cases: ${sick}`;
            CurrentCasesElement.classList.add('InfoBox');
            document.body.appendChild(CurrentCasesElement);

            const RecoverElement = document.createElement('div');
            RecoverElement.innerText = `Recovered: ${recover}`;
            RecoverElement.classList.add('InfoBox');
            document.body.appendChild(RecoverElement);

            const DeathElement = document.createElement('div');
            DeathElement.innerText = `Dead: ${dead}`;
            DeathElement.classList.add('InfoBox');
            document.body.appendChild(DeathElement);

            const TotalCasesElement = document.createElement('div');
            TotalCasesElement.innerText = `Total Cases: ${cases}`;
            TotalCasesElement.classList.add('InfoBox');
            document.body.appendChild(TotalCasesElement);

            const SpaceElement = document.createElement('div');
            SpaceElement.innerText = " ";
            SpaceElement.classList.add('Space');
            document.body.appendChild(SpaceElement);
        })
    })