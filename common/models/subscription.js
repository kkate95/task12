module.exports = function(Subscription) {
    Subscription.on('attached', function () {
        Subscription.create({name: "Vasya"});
        Subscription.create({name: "Tanya"});
        Subscription.create({name: "Petya"});
    });
};
