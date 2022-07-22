module.exports = {
  "* * * * *": async () => {
    const OnSale = await strapi.api.launchpad.services.launchpad.find({
      StatusType: ["Verify", "ComingSoon"],
      EndDate_lt: new Date(),
    });
    const Ended = await strapi.api.launchpad.services.launchpad.find({
      StatusType: ["Verify", "OnSale"],
      EndDate_gt: new Date(),
    });
    await Promise.all(
      OnSale.map((launchpad) => {
        return strapi.api.launchpad.services.launchpad.update(
          { id: launchpad.id },
          { StatusType: ["Verify", "OnSale"] }
        );
      })
    );
    await Promise.all(
      Ended.map((launchpad) => {
        return strapi.api.launchpad.services.launchpad.update(
          { id: launchpad.id },
          { StatusType: ["Verify", "Ended"] }
        );
      })
    );
    console.log("here");
  },
};
