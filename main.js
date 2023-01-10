

// event_name
let date = new Date();
mouth = date.getMonth() + 1;
date = date.getDate();
document.querySelector('#event_name').value = `test_${mouth}${date}`;


// custom-event
document.querySelector('.btn-custom-event').addEventListener('click', e => {
  console.log('test')
  let event = "ga4_cusevent";
  let event_name = document.querySelector("#event_name").value;
  let parm1 = document.querySelector("#parm1").value == 'undefined' ? undefined : document.querySelector("#parm1").value;
  let parm2 = document.querySelector("#parm2").value == 'undefined' ? undefined : document.querySelector("#parm2").value;
  let parm3 = document.querySelector("#parm3").value == 'undefined' ? undefined : document.querySelector("#parm3").value;
  let parm4 = document.querySelector("#parm4").value == 'undefined' ? undefined : document.querySelector("#parm4").value;
  let parm5 = document.querySelector("#parm5").value == 'undefined' ? undefined : document.querySelector("#parm5").value;
  let remark = document.querySelector("#remark").value == 'undefined' ? undefined : document.querySelector("#remark").value;
  dataLayer.push(
    {
      "event": event,
      "event_name": event_name,
      "parm1": parm1 ? parm1 : undefined,
      "parm2": parm2 ? parm2 : undefined,
      "parm3": parm3 ? parm3 : undefined,
      "parm4": parm4 ? parm4 : undefined,
      "parm5": parm5 ? parm5 : undefined,
      "remark": remark ? remark : undefined
    }
  )
})


// ec-event
document.querySelector('.btn-ec-event').addEventListener('click', e => {
  let event = "ec_cusevent";
  let event_name = document.querySelector("#ec_event_name").value;
  let currency = document.querySelector("#currency").value;
  let value = document.querySelector("#value").value;
  let coupon = document.querySelector("#coupon").value;
  let payment_type = document.querySelector("#payment_type").value;
  let transaction_id = document.querySelector("#transaction_id").value;
  let tax = document.querySelector("#tax").value;
  let shipping = document.querySelector("#shipping").value;

  let item_id = document.querySelector("#item_id").value;
  let item_name = document.querySelector("#item_name").value;
  let affiliation = document.querySelector("#affiliation").value;
  let item_coupon = document.querySelector("#item_coupon").value;
  let item_currency = document.querySelector("#item_currency").value;
  let discount = document.querySelector("#discount").value;
  let index = document.querySelector("#index").value;
  let item_brand = document.querySelector("#item_brand").value;
  let item_category = document.querySelector("#item_category").value;
  let item_category2 = document.querySelector("#item_category2").value;
  let item_category3 = document.querySelector("#item_category3").value;
  let item_category4 = document.querySelector("#item_category4").value;
  let item_category5 = document.querySelector("#item_category5").value;
  let item_list_id = document.querySelector("#item_list_id").value;
  let item_list_name = document.querySelector("#item_list_name").value;
  let item_variant = document.querySelector("#item_variant").value;
  let location_id = document.querySelector("#location_id").value;
  let price = document.querySelector("#price").value;
  let quantity = document.querySelector("#quantity").value;
  dataLayer.push(
    {
      "event": event ? event : undefined,
      "event_name": event_name ? event_name : undefined,
      "currency": currency ? currency : undefined,
      "value": Number(value) ? Number(value) : undefined,

      "coupon": coupon ? coupon : undefined,
      "payment_type": payment_type ? payment_type : undefined,
      "transaction_id": transaction_id ? transaction_id : undefined,
      "tax": Number(tax) ? Number(tax) : undefined,
      "shipping": Number(shipping) ? Number(shipping) : undefined,


      "items": [
        {
          item_id: item_id ? item_id : undefined,
          item_name: item_name ? item_name : undefined,
          affiliation: affiliation ? affiliation : undefined,
          coupon: item_coupon ? item_coupon : undefined,
          currency: item_currency ? item_currency : undefined,
          discount: Number(discount) ? Number(discount) : undefined,
          index: Number(index) ? Number(index) : undefined,
          item_brand: item_brand ? item_brand : undefined,
          item_category: item_category ? item_category : undefined,
          item_category2: item_category2 ? item_category2 : undefined,
          item_category3: item_category3 ? item_category3 : undefined,
          item_category4: item_category4 ? item_category4 : undefined,
          item_category5: item_category5 ? item_category5 : undefined,
          item_list_id: item_list_id ? item_list_id : undefined,
          item_list_name: item_list_name ? item_list_name : undefined,
          item_variant: item_variant ? item_variant : undefined,
          location_id: location_id ? location_id : undefined,
          price: Number(price) ? Number(price) : undefined,
          quantity: Number(quantity) ? Number(quantity) : undefined
        }
      ]
    }
  )
})



