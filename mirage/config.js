export default function () {
  this.namespace = '/api';

  this.get('/customers', function () {
    return {
      data: [{
        "name": "Donald",
        "company": "Quack Corp",
        "comment": "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
        "img": "donald.png"
      }, {
        "name": "Mickey",
        "company": "Mouse Inc",
        "comment": "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
        "img": "mickey.png"
      }, {
        "name": "Pluto",
        "company": "Waff",
        "comment": "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
        "img": "pluto.png"
      }, {
        "name": "Goofy",
        "company": "Yohoho.com",
        "comment": "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
        "img": "goofy.png"
      }]
    };
  });
}