import {
    attribute,
    autoGeneratedHashKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

/*
 * This class rappresent a product item in products table
 */
@table(process.env.PRODUCTS_TABLE)
class Product {
    @autoGeneratedHashKey()
    id: string;

    @attribute()
    name: string;

    @attribute()
    price: number;

    @attribute()
    description: string;

    @attribute()
    availability: number;

    @attribute()
    discount: number;
}

export default Product;