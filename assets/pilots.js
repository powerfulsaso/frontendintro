$(document).ready(function () {
    $.getJSON("./assets/drivers.json", function (data) {
        var cardContainer = $("#card-container");

        $.each(data.MRData.DriverTable.Drivers, function (index, piloto) {
            var card = `
                <div class="col-md-3">
                    <div class="card mb-4">
                        <img src="./assets/img/pilotos/${piloto.driverId}.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">${piloto.givenName} ${piloto.familyName}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">#${piloto.permanentNumber}</h6>
                            <p class="card-text">Nació en ${piloto.dateOfBirth}</p>
                             <a href="${piloto.url}" target="_blank" class="btn btn-primary">Biografía</a>
                           
                        </div>
                    </div>
                </div>
            `;
            cardContainer.append(card);
        });
    });
});
