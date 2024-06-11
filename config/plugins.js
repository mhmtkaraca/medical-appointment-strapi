module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",

        auth: {
          user: env("GMAIL"),

          pass: env("GMAIL_PASS"),
        },

        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "info@healthclinicturkiye.com",
        defaultReplyTo: "info@healthclinicturkiye.com",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
