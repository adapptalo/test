define(["kendo", "data"], function (kendo, data) {
    return {
        viewModel: kendo.observable({
            artists: data.artistsList,
            beers2: data.beersList2
        })
    };
});