import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.get('store').findAll('customer');

    return [{
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
      comment: "We used Prospect.io at Mouse Inc to draw interest of very targeted marcom profiles. It's playful, yet a super-efficient integrated lead generation tool.",
      img: "mickey.png"
    }, {
      id: 3,
      type: "customers",
      name: "Pluto",
      company: "Waff",
      comment: "We use Prospect.io to turn cold emails into free trial signups. It allows us to reach out to the right person while crafting relevant and personal emails at scale.",
      img: "pluto.png"
    }, {
      id: 4,
      type: "customers",
      name: "Goofy",
      company: "Yohoho.com",
      comment: "I have tried out every prospecting tool on the market and Prospect.io is hands down the best one I have come across. I have recommended their platform to all my colleagues and will continue to do so, as it is a vital piece of any sales stack.",
      img: "goofy.png"
    }]

    // return this.get('store').find('customer', { id: 1 }).then(users => {
    //   return users.get('firstObject');
    // });
    // return this.get('store').find('customer', params.id);
  }
});
