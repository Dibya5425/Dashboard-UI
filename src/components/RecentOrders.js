import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'S. Akash',
		order_date: '2022-05-17T03:24:00',
		order_total: '₹1035',
		current_order_status: 'PLACED',
		shipment_address: 'Punjab'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Sudhanshu',
		order_date: '2022-05-14T05:24:00',
		order_total: '₹6065',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Hyderabad,Telangana'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Bignesh ku.',
		order_date: '2022-05-17T07:14:00',
		order_total: '₹8360',
		current_order_status: 'SHIPPED',
		shipment_address: 'Bhubneswar,Odisha'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Pranav',
		order_date: '2022-05-16T12:40:00',
		order_total: '₹8999',
		current_order_status: 'SHIPPED',
		shipment_address: 'Bhubneswar,Odisha'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'S. Nihal',
		order_date: '2022-05-14T03:24:00',
		order_total: '₹6205',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'Delhi'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Kaushal',
		order_date: '2022-05-14T05:24:00',
		order_total: '₹4500',
		current_order_status: 'DELIVERED',
		shipment_address: 'Jaipur,Rajasthan'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product ID</th>
							<th>Customer Name</th>
							<th>Order Date</th>
							<th>Order Total</th>
							<th>Shipping Address</th>
							<th>Order Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
