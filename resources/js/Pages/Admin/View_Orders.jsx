import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function View_Orders({ auth }) {
  const { orders } = usePage().props;

  return (
    <>
    <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-primary p-5 rounded-md">Orders</h2>}>
      <Head title="Orders" />
      <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payment Method</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders &&
          orders.map((order) => (
            <tbody key={order.id}>
              <tr>
                <td>{order.id}</td>
                <td>{order.PaymentMethod}</td>
                <td>{order.OrderDate}</td>
                <td>{order.DeliveryDate}</td>
                <td>{order.total}DH</td>
                <td>{order.status}</td>
                <td>
                  <a className="btn btn-danger" href={route('order.form_edit', order.id)}>
                    Edit
                  </a>

                  <InertiaLink
                    href={route('order.delete', order.id)}
                    method="delete"
                    as="button"
                    type="button"
                    onClick={() => {
                      confirm('Are you sure?');
                    }}
                  >
                    Delete
                  </InertiaLink>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      </div>
    </AuthenticatedLayout>
    <style>{`
        .div_center {
          text-align: center;
          padding-top: 40px;
      }

      .h2_style {
          font-size: 40px;
          padding-bottom: 40px;
      }

      #input_color {
          color: black;
      }

      
        `}</style>
</>

  );
}
