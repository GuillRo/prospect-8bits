export default function () {
  this.namespace = '/api';

  // let customers = [{
  //   id: 1,
  //   type: "customers",
  //   name: "Donald",
  //   company: "Quack Corp",
  //   comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
  //   img: "donald.png"
  // }, {
  //   id: 2,
  //   type: "customers",
  //   name: "Mickey",
  //   company: "Mouse Inc",
  //   comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
  //   img: "mickey.png"
  // }, {
  //   id: 3,
  //   type: "customers",
  //   name: "Pluto",
  //   company: "Waff",
  //   comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
  //   img: "pluto.png"
  // }, {
  //   id: 4,
  //   type: "customers",
  //   name: "Goofy",
  //   company: "Yohoho.com",
  //   comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
  //   img: "goofy.png"
  // }]

  // this.get('/customers', function (de, request) {
  //   if (request.queryParams.id !== undefined) {
  //     let customer = customers.filter((custo) => {
  //       return custo.id === request.queryParams.id
  //     });
  //     return { data: customer }
  //   } else {
  //     return { data: customers }
  //   }
  // })


  this.get('/customers', function () {
    return {
  data: [
    {
      id: 1,
      type: "customers",
      name: "Donald",
      company: "Quack Corp",
      comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
      img: "donald.png"
    }, {
      id: 2,
      type: "customers",
      name: "Mickey",
      company: "Mouse Inc",
      comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
      img: "mickey.png"
    }, {
      id: 3,
      type: "customers",
      name: "Pluto",
      company: "Waff",
      comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
      img: "pluto.png"
    }, {
      id: 4,
      type: "customers",
      name: "Goofy",
      company: "Yohoho.com",
      comment: "Prospect.io looks killer for marketing outreach. Designed for sales, but has a one-click-to-get-emails feature.",
      img: "goofy.png"
    }
  ]
    }
  });
}