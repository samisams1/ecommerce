import { User } from 'src/user/user.shema';
export declare class OrderType {
    name: string;
    _id: string;
    paymentMethod: string;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt: Date;
    isDelivered: boolean;
    deliveredAt: Date;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
