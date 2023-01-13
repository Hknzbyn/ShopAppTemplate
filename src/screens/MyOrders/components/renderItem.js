import React from 'react';
import { Center } from 'native-base';
import { ProductCard } from '../../../commons/components';

export const renderItem = ({ item }) => {
  return (
    <Center my='4'>
      <ProductCard
        order_id={item.order_id}
        status={item.status}
        order_status={item.status}
        total_pcs={item.items.length}
        order_total={item.total_price}
        image_source={item.items[0].thumbnail}
        order_products={item.items.length} //TODO
        type={item.status}
        name={item.delivery_address.name}
        amount={item.total_price}
        sellerName={item.items[0].brand}
        cardNumber={item.payment_method.card_number}
        order_date={item.order_date}
        order_date_time={item.order_date_time}
        cancel_date={item.cancel_date}
        cancel_date_time={item.cancel_date_time}
        campaignDescription={item.campaign.description}
        campaignName={item.campaign.name}
        discount={item.campaign.discount}
        orderNote={item.order_note}
        delivery_price={item.delivery_price}
        item_count={item.items.length}
        item={item.items}
      />
    </Center>
  );
};
