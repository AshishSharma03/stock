const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const HOST = "https://stock-eqepkktxs-stock.vercel.app";

export default async (req, res) => {
    const {
        items,
        email
    } = req.rawBody; //req.body `old`

    // console.log(items);
    // console.log(email);


    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'inr',
            unit_amount: item.prices * 100,
            product_data: {
                name: item.title,
                images: [item.image]

            },
        },
    }));


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_rates: ["shr_1JDLxUSF4hF8ZK5LPl3B7MFI"],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA', 'IN']
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${HOST}/success`,
        cancel_url: `${HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        }
    })

    res.status(200).json({
        id: session.id
    });
}