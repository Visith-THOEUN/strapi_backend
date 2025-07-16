// path: config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary', // ប្រាប់ Strapi ឱ្យប្រើ Cloudinary ជាអ្នកផ្តល់សេវា upload
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),   // យកឈ្មោះ Cloudinary ពី environment variable
        api_key: env('CLOUDINARY_KEY'),      // យក API Key ពី environment variable
        api_secret: env('CLOUDINARY_SECRET'), // យក API Secret ពី environment variable
      },
      actionOptions: {
        upload: {}, // អនុញ្ញាតឱ្យ Strapi upload files ទៅកាន់ Cloudinary
        delete: {}, // អនុញ្ញាតឱ្យ Strapi លុប files ចេញពី Cloudinary
      },
    },
  },
});