// enum Gender {
//   MALE = "male",
//   FEMALE = "female",
// }

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  birth_date: string;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  email: string;
  activity: {
    sms: number;
    email: number;
    orders: number;
  };
  carrier_status: {
    since: string;
    status: string;
  };
}

interface OrderDetails {
  id: number;
  order_id: number;
  sent_dt: string;
  sent_tm: string;
  subject: {
    title: string;
    email: string;
  };
  type: string;
}

export interface Orders {
  orders_A: [];
  orders_AA: [];
  orders_AAA: {
    sent: OrderDetails[] | [];
  };
  orders_B: [];
  orders_C: [];
}