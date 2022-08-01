##Backend NestJS + Prisma

##This project is a ecommerce, that still on development

#Tasks to do:

- [x] Company {
    - [x] Schema on Prisma Folder
    - [x] Controller
    - [x] Service
    - [x] Module
}

- [x] Users {
    - [x] Schema on Prisma Folder
    - [x] Controller
    - [x] Service
    - [x] Module
}

- [x] Product {
    - [x] Schema on Prisma Folder
    - [x] Controller
    - [x] Service
    - [x] Module
}

- [x] Product-categories {
    - [x] Schema on Prisma Folder
    - [x] Controller
    - [x] Service
    - [x] Module
}

- [] Product-table-prices {
    - [x] Schema on Prisma Folder
    - [] Controller
    - [] Service {
        CORRIGIR - erro {
            return this.prisma.productPricesTable.create({
       data: {
         price_table_id: 'edd3907c-5613-4a15-8710-639ecc37171a',
         ~~~~~~~~~~~~~~
         value: 100,
         descount_value: 10
       }
     })

    Unknown arg `price_table_id` in data.price_table_id for type ProductPricesTableCreateInput. Did you mean `price_table`? Available args:
    type ProductPricesTableCreateInput {
       item_price_id?: String
       price_table?: PriceTableCreateNestedOneWithoutProductsInput
       product?: ProductCreateNestedOneWithoutProducts_price_tableInput
       value: Float
       descount_value: Float
       created_at?: DateTime
       updated_at?: DateTime
            }
        }
    }
    - [x] Module
  }


- [x] Product-table {
    - [x] Schema on Prisma Folder
    - [x] Controller
    - [x] Service
    - [x] Module }
  
  
- [] Sales {
    - [] Create Schema on Prisma Folder
    - [] Controller
    - [] Service
    - [] Module
}

- [] Sales_History {
    - [] Create Schema on Prisma Folder
    - [] Controller
    - [] Service
    - [] Module
}