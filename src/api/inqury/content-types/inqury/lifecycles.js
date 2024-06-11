module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "info@healthclinicturkiye.com",
          from: "info@healthclinicturkiye.com",
          subject: "New Inquiry Form",
          text: `You have new inqury from healtclinicturkiye.com. Details: Name: ${result.fullName}, email: ${result.email}, phone: ${result.phone}, treatment: ${result.treatment}, note: ${result.note} `,
        });
    } catch (err) {
      console.log(err);
    }
  },
};
