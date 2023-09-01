$(document).ready(function () {
    $.getJSON("./assets/events.json", function (data) {
        var cardContainer = $("#card-container");

        $.each(data.MRData.RaceTable.Races, function (index, race) {
            var card = `
                <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title">${race.raceName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${race.Circuit.circuitName}</h6>
                        <p class="card-text">${race.date}</p>

                    </div>
                </div>
            </div>
            `;
            cardContainer.append(card);
        });
    });
});
